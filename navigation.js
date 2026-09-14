document.addEventListener("DOMContentLoaded",()=>{
 const file=window.location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".nav-link,.side-link").forEach(link=>{
  const href=(link.getAttribute("href")||"").split("#")[0];
  link.classList.toggle("active",href===file);
 });
 document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{const id=link.getAttribute("href");if(id!=="#"){const target=document.querySelector(id);if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}}});
 });
 document.querySelectorAll(".hero-container,.welcome-section,.featured-item,.card,.featured-product").forEach((el,i)=>{el.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:550,delay:Math.min(i*55,300),easing:"ease-out",fill:"both"});});
});
