let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
window.addEventListener("mousemove",function(e){
  cursor.style.cssText =  "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});