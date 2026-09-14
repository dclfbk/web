const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.alumni-carousel, .archive-carousel').forEach(carousel=>{
  const track=carousel.querySelector('[data-carousel]');
  const previous=carousel.querySelector('[data-carousel-prev]');
  const next=carousel.querySelector('[data-carousel-next]');
  const update=()=>{
    previous.disabled=track.scrollLeft<2;
    next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
  };
  previous.addEventListener('click',()=>track.scrollBy({left:-track.clientWidth,behavior:'smooth'}));
  next.addEventListener('click',()=>track.scrollBy({left:track.clientWidth,behavior:'smooth'}));
  track.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
  update();
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
