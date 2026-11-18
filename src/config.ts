export interface NebulaConfig {
  init: string;
  plausible_tracking: string;
  website_links: string;
  weblink_support: string;
  weblink_billing: string;
  weblink_status: string;
  weblink_social_discord: string;
  weblink_social_github: string;
  website_links_align: string;
  alert: string;
  alert_text: string;
  alert_icon: string;
  alert_position: string;
  alert_dismiss: string;

  // Palette - Dashboard
  palette_dashboard_1: string;
  palette_dashboard_2: string;
  palette_dashboard_3: string;
  palette_dashboard_4: string;
  palette_dashboard_5: string;
  palette_dashboard_6: string;
  palette_dashboard_7: string;
  palette_dashboard_8: string;
  palette_dashboard_9: string;

  // Palette - Status
  palette_status_online: string;
  palette_status_starting: string;
  palette_status_error: string;
  palette_status_offline: string;

  // Palette - Sidebar
  palette_sidebar_1: string;
  palette_sidebar_2: string;
  palette_sidebar_3: string;
  palette_sidebar_4: string;
  palette_sidebar_5: string;
  palette_sidebar_6: string;
  palette_sidebar_7: string;
  palette_sidebar_8: string;

  // Palette - Auth
  palette_auth_1: string;
  palette_auth_2: string;
  palette_auth_3: string;
  palette_auth_4: string;
  palette_auth_5: string;
  palette_auth_6: string;
  palette_auth_7: string;
  palette_auth_8: string;

  // Sidebar
  icon_fallback: string;
  icon_scale: string;
  sidebar_full: string;
  sidebar_hover: string;
  sidebar_background: string;
  sidebar_always_visible_buttons: string;
  sidebar_separators: string;
  sidebar_border_radius: string;
  sidebar_hover_tooltip: string;
  sidebar_buttonstyle: string;
  sidebar_customlogo: string;
  sidebar_home: string;
  sidebar_admin: string;
  sidebar_account: string;
  sidebar_logout: string;
  sidebar_account_account: string;
  sidebar_account_api: string;
  sidebar_account_ssh: string;
  sidebar_account_activity: string;
  sidebar_account_more: string;
  sidebar_server_terminal: string;
  sidebar_server_files: string;
  sidebar_server_databases: string;
  sidebar_server_schedules: string;
  sidebar_server_users: string;
  sidebar_server_backups: string;
  sidebar_server_network: string;
  sidebar_server_startup: string;
  sidebar_server_settings: string;
  sidebar_server_activity: string;
  sidebar_server_more: string;

  // Dashboard
  background_image: string;
  background_magic: string;
  background_magicsize: string;
  background_appearance: string;
  dashboard_transparency: string;
  content_background: string;
  server_list: string;
  statusgradient_style: string;
  animations: string;
  keyboard_shortcuts: string;
  keybind_icons: string;
  server_overview_graphs: string;
  server_colored_power: string;
  watermark: string;
  border_radius: string;

  // HelzerX 3D Styles
  hx_3d_depth: string;
  hx_spotlight: string;
  hx_bevel_buttons: string;

  // Authentication
  auth_background_image: string;
  auth_background_magic: string;
  auth_background_magicsize: string;
  auth_background_appearance: string;
  auth_customlogo: string;
  watermark_auth: string;

  // More
  page_indexing: string;
  reset: string;
}

export const DEFAULT_CONFIG: NebulaConfig = {
  init: '2.0-1',
  plausible_tracking: '0',
  website_links: '1',
  weblink_support: 'https://helzerx.net/support',
  weblink_billing: 'https://helzerx.net/billing',
  weblink_status: 'https://status.helzerx.net',
  weblink_social_discord: 'helzerx',
  weblink_social_github: 'advenslk',
  website_links_align: '0',
  alert: '0',
  alert_text: '',
  alert_icon: 'megaphone-fill',
  alert_position: 'sticky',
  alert_dismiss: '1',

  // Palette - Dashboard (HelzerX Obsidian Gold)
  palette_dashboard_1: '#f5f5f7',
  palette_dashboard_2: '#f5b041',
  palette_dashboard_3: '#111116',
  palette_dashboard_4: '#16161d',
  palette_dashboard_5: '#1c1c26',
  palette_dashboard_6: '#242432',
  palette_dashboard_7: '#070709',
  palette_dashboard_8: '#1a1a24',
  palette_dashboard_9: '#252533',

  // Palette - Status
  palette_status_online: '#22c55e',
  palette_status_starting: '#f5b041',
  palette_status_error: '#ef4444',
  palette_status_offline: '#64748b',

  // Palette - Sidebar
  palette_sidebar_1: '#f5f5f7',
  palette_sidebar_2: '#f5b041',
  palette_sidebar_3: '#111116',
  palette_sidebar_4: '#181822',
  palette_sidebar_5: '#222230',
  palette_sidebar_6: '#f5b041',
  palette_sidebar_7: '#0a0a0e',
  palette_sidebar_8: '#f5b041',

  // Palette - Auth
  palette_auth_1: '#070709',
  palette_auth_2: '#111116',
  palette_auth_3: '#16161d',
  palette_auth_4: '#f5b041',
  palette_auth_5: '#ef4444',
  palette_auth_6: '#f5b041',
  palette_auth_7: '#8e8e99',
  palette_auth_8: '#070709',

  // Sidebar
  icon_fallback: 'lucide',
  icon_scale: '1',
  sidebar_full: '0',
  sidebar_hover: 'popout',
  sidebar_background: 'blurred',
  sidebar_always_visible_buttons: '1',
  sidebar_separators: '1',
  sidebar_border_radius: '14',
  sidebar_hover_tooltip: '2',
  sidebar_buttonstyle: '0',
  sidebar_customlogo: '',
  sidebar_home: '',
  sidebar_admin: '',
  sidebar_account: '',
  sidebar_logout: '',
  sidebar_account_account: '',
  sidebar_account_api: '',
  sidebar_account_ssh: '',
  sidebar_account_activity: '',
  sidebar_account_more: '',
  sidebar_server_terminal: '',
  sidebar_server_files: '',
  sidebar_server_databases: '',
  sidebar_server_schedules: '',
  sidebar_server_users: '',
  sidebar_server_backups: '',
  sidebar_server_network: '',
  sidebar_server_startup: '',
  sidebar_server_settings: '',
  sidebar_server_activity: '',
  sidebar_server_more: '',

  // Dashboard
  background_image: '',
  background_magic: '',
  background_magicsize: '150',
  background_appearance: '0',
  dashboard_transparency: '0',
  content_background: '',
  server_list: 'cards',
  statusgradient_style: 'default',
  animations: 'fadeup',
  keyboard_shortcuts: '1',
  keybind_icons: '1',
  server_overview_graphs: '1',
  server_colored_power: '1',
  watermark: '1',
  border_radius: '16',

  // HelzerX 3D Styles
  hx_3d_depth: '1',
  hx_spotlight: '1',
  hx_bevel_buttons: '1',

  // Authentication
  auth_background_image: '',
  auth_background_magic: '',
  auth_background_magicsize: '150',
  auth_background_appearance: '0',
  auth_customlogo: '',
  watermark_auth: '1',

  // More
  page_indexing: '0',
  reset: '0',
};

const configStore = new Map<string, string>(Object.entries(DEFAULT_CONFIG));

export function dbGet(namespace: string, key: string): string {
  if (namespace === 'settings' && key === 'recaptcha:enabled') {
    return 'false';
  }
  return configStore.get(key) ?? '';
}

export function getAllConfig(): NebulaConfig {
  return Object.fromEntries(configStore.entries()) as unknown as NebulaConfig;
}

export function updateConfig(body: Record<string, unknown>): void {
  if (body.reset === '1') {
    resetConfig();
    return;
  }

  for (const [key, rawValue] of Object.entries(body)) {
    if (!(key in DEFAULT_CONFIG)) continue;
    const value = Array.isArray(rawValue)
      ? String(rawValue[rawValue.length - 1] ?? '')
      : String(rawValue ?? '');
    configStore.set(key, value);
  }
}

export function resetConfig(): void {
  configStore.clear();
  for (const [k, v] of Object.entries(DEFAULT_CONFIG)) {
    configStore.set(k, v);
  }
}
