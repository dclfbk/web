const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const AUTOPLAY_IDLE_MS=5000;
const AUTOPLAY_STEP_MS=4000;

document.querySelectorAll('.alumni-carousel, .archive-carousel').forEach(carousel=>{
  const track=carousel.querySelector('[data-carousel]');
  const previous=carousel.querySelector('[data-carousel-prev]');
  const next=carousel.querySelector('[data-carousel-next]');
  const update=()=>{
    previous.disabled=track.scrollLeft<2;
    next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
  };
  const advance=()=>{
    const atEnd=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
    track.scrollBy({left:atEnd?-track.scrollLeft:track.clientWidth,behavior:'smooth'});
  };
  let autoplayTimer=null;
  let idleTimer=null;
  const stopAutoplay=()=>{if(autoplayTimer){clearInterval(autoplayTimer);autoplayTimer=null}};
  const startAutoplay=()=>{stopAutoplay();autoplayTimer=setInterval(advance,AUTOPLAY_STEP_MS)};
  const resetIdle=()=>{
    stopAutoplay();
    clearTimeout(idleTimer);
    idleTimer=setTimeout(startAutoplay,AUTOPLAY_IDLE_MS);
  };
  previous.addEventListener('click',()=>{resetIdle();track.scrollBy({left:-track.clientWidth,behavior:'smooth'})});
  next.addEventListener('click',()=>{resetIdle();track.scrollBy({left:track.clientWidth,behavior:'smooth'})});
  track.addEventListener('pointerdown',resetIdle);
  track.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
  resetIdle();
});

const cookieNotice=document.querySelector('#cookie-notice');
if(cookieNotice){
  const accept=cookieNotice.querySelector('[data-cookie-accept]');
  try{
    if(!localStorage.getItem('dcl-cookie-notice-dismissed')){cookieNotice.hidden=false}
  }catch(e){cookieNotice.hidden=false}
  accept.addEventListener('click',()=>{
    cookieNotice.hidden=true;
    try{localStorage.setItem('dcl-cookie-notice-dismissed','1')}catch(e){}
  });
}

const pubList=document.querySelector('#publication-list');
const pubScrollDown=document.querySelector('#publication-scroll-down');
if(pubList&&pubScrollDown){
  const updatePubScroll=()=>{
    const atBottom=pubList.scrollTop+pubList.clientHeight>=pubList.scrollHeight-2;
    pubScrollDown.disabled=atBottom;
  };
  pubScrollDown.addEventListener('click',()=>{
    pubList.scrollBy({top:pubList.clientHeight*0.8,behavior:'smooth'});
  });
  pubList.addEventListener('scroll',updatePubScroll,{passive:true});
  window.addEventListener('resize',updatePubScroll);
  updatePubScroll();
}

const pubSearch=document.querySelector('#publication-search');
if(pubSearch&&pubList){
  pubSearch.addEventListener('input',()=>{
    const query=pubSearch.value.trim().toLowerCase();
    pubList.querySelectorAll('.publication').forEach(item=>{
      const matches=item.textContent.toLowerCase().includes(query);
      item.classList.toggle('is-hidden',!matches);
    });
    if(pubScrollDown){pubList.scrollTop=0;pubScrollDown.disabled=pubList.scrollHeight<=pubList.clientHeight}
  });
}

const emailLink=document.querySelector('#contact-email');
if(emailLink){
  const reverse=s=>s.split('').reverse().join('');
  const address=`${reverse(emailLink.dataset.u)}@${reverse(emailLink.dataset.d)}`;
  emailLink.href=`mailto:${address}`;
  emailLink.textContent=`${address} ↗`;
  emailLink.removeAttribute('rel');
}
