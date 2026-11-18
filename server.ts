import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dbGet, getAllConfig, resetConfig, updateConfig } from './src/config.js';
import { buildThemeVariablesCss, getIconPack, getTransparencyAlpha } from './src/helpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Expose dbGet helper to all EJS templates
app.use((_req, res, next) => {
  res.locals.dbGet = dbGet;
  next();
});

// Serve static assets under expected Pterodactyl/Blueprint paths
app.use('/extensions/nebula', express.static(path.join(__dirname, 'public/extensions/nebula')));
app.use('/nebula-assets', express.static(path.join(__dirname, 'public/nebula-assets')));

// Dynamic compiled theme stylesheet endpoint
app.get('/extensions/nebula/theme.css', (_req, res) => {
  const cfg = getAllConfig();
  const varsCss = buildThemeVariablesCss(cfg);
  let extra3d = '';
  if (cfg.hx_3d_depth === '1') {
    const cssPath = path.join(__dirname, 'public/extensions/nebula/libraries/helzerx3d.css');
    if (fs.existsSync(cssPath)) {
      extra3d = '\n\n' + fs.readFileSync(cssPath, 'utf8');
    }
  }
  res.type('text/css').send(`${varsCss}${extra3d}`);
});

// JSON Config Inspection & Update API
app.get('/api/config', (_req, res) => {
  res.json(getAllConfig());
});

app.patch('/api/config', (req, res) => {
  updateConfig(req.body ?? {});
  res.json(getAllConfig());
});

app.post('/api/config/reset', (_req, res) => {
  resetConfig();
  res.json(getAllConfig());
});

// Landing route redirects cleanly to the HelzerX 3D Theme Designer
app.get('/', (_req, res) => {
  res.redirect('/extensions/nebula/editor/editor.php');
});

// Live Pterodactyl Client Panel (used directly & in preview iframes)
function renderPanel(_req: express.Request, res: express.Response) {
  const cfg = getAllConfig();
  res.render('panel', {
    cfg,
    iconPack: getIconPack(cfg.icon_fallback),
    transparencyAlpha: getTransparencyAlpha(cfg.dashboard_transparency),
  });
}
app.get('/panel', renderPanel);
app.get('/preview/panel', renderPanel);

// Blueprint Extensions Admin Hub
app.get('/admin', (_req, res) => res.redirect('/admin/extensions'));
app.get('/admin/extensions', (_req, res) => {
  res.render('admin', { cfg: getAllConfig() });
});

// Save Configuration Endpoint (mirrors Blueprint POST /admin/extensions/nebula)
app.post('/admin/extensions/nebula', (req, res) => {
  const isReset = req.body?.reset === '1';
  updateConfig(req.body ?? {});
  let endpoint = typeof req.body?._endpoint === 'string' && req.body._endpoint.startsWith('/')
    ? req.body._endpoint
    : '/extensions/nebula/editor/editor.php';
  if (isReset) {
    endpoint += endpoint.includes('?') ? '&reset=true' : '?reset=true';
  }
  res.redirect(endpoint);
});

// Extension info endpoint
app.get(['/extensions/nebula', '/extensions/nebula/', '/extensions/nebula/index.php'], (_req, res) => {
  res.render('info', { cfg: getAllConfig() });
});

// Nebula / HelzerX 3D Designer Routes
app.get([
  '/extensions/nebula/editor',
  '/extensions/nebula/editor/',
  '/extensions/nebula/editor/index.html',
  '/extensions/nebula/editor/editor.php',
], (_req, res) => {
  res.render('editor/editor', { cfg: getAllConfig() });
});

app.get('/extensions/nebula/editor/edit/:page.php', (req, res, next) => {
  const allowed = new Set(['palette', 'sidebar', 'dashboard', 'authentication', 'more']);
  const page = req.params.page;
  if (!allowed.has(page)) return next();

  const cfg = getAllConfig();
  res.render(`editor/edit/${page}`, {
    cfg,
    transparencyAlpha: getTransparencyAlpha(cfg.dashboard_transparency),
  });
});

// Preview Routes
app.get('/extensions/nebula/preview/:page.php', (req, res, next) => {
  const allowed = new Set(['auth', 'multipreview', 'placeholder']);
  const page = req.params.page;
  if (!allowed.has(page)) return next();

  res.render(`preview/${page}`, { cfg: getAllConfig() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`HelzerX 3D Nebula Designer listening on http://0.0.0.0:${PORT}`);
});
