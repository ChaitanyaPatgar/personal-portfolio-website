// Mobile nav toggle (simple)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle?.addEventListener('click', ()=>{
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = nav.style.display === 'block' ? '' : 'block';
});

// Certificate modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');
document.querySelectorAll('[data-cert]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const src = btn.getAttribute('data-cert');
    modalImg.src = src;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  });
});
modalClose.addEventListener('click', ()=>{ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); modalImg.src=''; });
modal.addEventListener('click', (e)=>{ if(e.target === modal) { modal.style.display='none'; modal.setAttribute('aria-hidden','true'); modalImg.src=''; } });

// Contact form success feedback (Formspree will handle submit; this is just UX)
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e)=>{
  // allow normal submit to Formspree, but show quick feedback
  setTimeout(()=>{ alert('Thanks — your message was sent (if Formspree configured).') }, 500);
});

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    }
  });
});