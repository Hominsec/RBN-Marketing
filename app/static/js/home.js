window.addEventListener('load',()=>{

console.log("Home Page loaded");

const isMobile = (typeof window.isMobileDevice === 'function') ? window.isMobileDevice() : false;
console.log(isMobile ? "You are using a Mobile Device" : "You are using Desktop");





});
