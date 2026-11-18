(() => {
  if (window.__helzerxSplitLoginLoaded) return;
  window.__helzerxSplitLoginLoaded = true;
  const css = `
  .hx-login-split{min-height:100vh;width:100%;display:grid;grid-template-columns:1.04fr .96fr;background:#0b0720;color:#f8f6ff;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;overflow:hidden}
  .hx-login-visual{position:relative;min-height:100vh;overflow:hidden;padding:42px 5.3%;display:flex;flex-direction:column;justify-content:space-between;background:linear-gradient(150deg,#171044 0%,#1d0641 48%,#0b0d31 100%);border-right:1px solid #ffffff12}
  .hx-login-visual:before{content:"";position:absolute;width:620px;height:620px;left:-210px;top:-230px;border-radius:50%;background:radial-gradient(circle at 60% 65%,#4b2a91aa,transparent 67%);border:1px solid #a78bfa17}
  .hx-login-visual:after{content:"";position:absolute;width:680px;height:420px;right:-250px;bottom:-175px;border-radius:50%;transform:rotate(-25deg);background:linear-gradient(140deg,#141f50,#321064 70%,#8b2be733);border:1px solid #a78bfa24}
  .hx-login-brand{position:relative;z-index:2;display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-size:18px;font-weight:800;letter-spacing:.02em}
  .hx-login-mark{width:34px;height:34px;display:inline-grid;place-items:center;border-radius:10px;background:linear-gradient(135deg,#9b4dff,#6129d9);box-shadow:0 5px 24px #8b5cf655;font-weight:800;color:#fff}
  .hx-login-orb{position:absolute;z-index:1;border-radius:50%;pointer-events:none;width:145px;height:145px;top:12%;right:18%;background:radial-gradient(circle at 35% 25%,#353e83,#171035 62%,#bc38e966);box-shadow:inset -10px -14px 35px #05051e,0 20px 50px #03020b55}
  .hx-login-copy{position:relative;z-index:2;max-width:540px;margin:0 0 35px}
  .hx-login-copy small{display:block;margin-bottom:18px;color:#c4b5fd;font-size:10px;font-weight:800;letter-spacing:.19em}
  .hx-login-copy h2{margin:0;color:#fff;font-size:clamp(38px,4.2vw,64px);line-height:1.08;letter-spacing:-.045em;font-weight:800}
  .hx-login-copy h2 span{background:linear-gradient(90deg,#c4b5fd,#e879f9);-webkit-background-clip:text;background-clip:text;color:transparent}
  .hx-login-copy p{max-width:430px;margin:22px 0 0;color:#c1badc;font-size:16px;line-height:1.7}
  .hx-login-bottom{position:relative;z-index:2;color:#b8b1d3;font-size:12px}
  .hx-login-formside{min-width:0;display:flex;align-items:center;justify-content:center;padding:40px 24px;background:radial-gradient(ellipse at 80% 90%,#101c4c66,transparent 50%),#0b0720}
  .hx-login-formside>*{max-width:100%}
  @media(max-width:650px){.hx-login-split{display:block;min-height:100vh}.hx-login-visual{display:none}.hx-login-formside{min-height:100vh;padding:24px 14px}.hx-login-formside>*{width:min(100%,440px)}}
  `;
  const install = () => {
    const pass = document.querySelector('form input[type="password"],form input[autocomplete="current-password"]');
    if (!pass || document.querySelector('.hx-login-split')) return;
    let card = pass.closest('.card,.login-card,.auth-card,.login-container,.auth-container,.panel,.box');
    if (!card) {
      let node = pass.parentElement;
      for (let i=0; node && i<7; i++, node=node.parentElement) {
        const r=node.getBoundingClientRect(), s=getComputedStyle(node);
        if (r.width>=260 && r.width<=850 && r.height>=180 && r.height<=950 &&
            (s.backgroundColor!=='rgba(0, 0, 0, 0)' || s.borderRadius!=='0px' || s.boxShadow!=='none')) { card=node; break; }
      }
    }
    if (!card) card = pass.closest('form')?.parentElement || pass.closest('form');
    if (!card || !card.parentElement) return;
    const style=document.createElement('style'); style.textContent=css; document.head.appendChild(style);
    const shell=document.createElement('div'); shell.className='hx-login-split';
    const visual=document.createElement('aside'); visual.className='hx-login-visual';
    visual.innerHTML='<a class="hx-login-brand" href="/"><span class="hx-login-mark">H</span><span>HELZERX <small style="display:block;font-size:9px;letter-spacing:.14em;color:#c1b4e9;font-weight:600">TECHNOLOGIES</small></span></a><div class="hx-login-orb"></div><div class="hx-login-copy"><small>WELCOME BACK TO HELZERX</small><h2>Build. Create.<br><span>Go beyond.</span></h2><p>Your next level is waiting. Sign in and get back to what matters.</p></div><div class="hx-login-bottom">A better experience starts with you.</div>';
    const side=document.createElement('section'); side.className='hx-login-formside';
    const parent=card.parentElement; parent.insertBefore(shell,card); shell.append(visual,side); side.appendChild(card);
    document.body.style.margin='0'; document.body.style.minHeight='100vh'; document.documentElement.style.background='#0b0720';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install, {once:true}); else install();
})();