var inc=document.getElementById("inc");
var dec=document.getElementById("dec")
var img=document.getElementById("img")
inc.addEventListener("click" ,incr);
function incr(){
   var currentwidh=img.width;
img.style.width=(currentwidh+20)+"px";
}
dec.addEventListener("click" ,decr);
function decr(){
   var currentwidh=img.width;
img.style.width=(currentwidh-20)+"px";
}
