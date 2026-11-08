
const menu=document.querySelector('.menu'), mobile=document.querySelector('.mobile');
if(menu&&mobile){menu.addEventListener('click',()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
