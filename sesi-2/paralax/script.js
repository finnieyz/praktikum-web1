let stars = document.getElementById("stars");
let fid = document.getElementById("fid");
let rocket = document.getElementById("rocket");
let text = document.getElementById("text");
let button = document.getElementById("button");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.top = value * 0.25 + "px";
  fid.style.top = value * 0.25 + "px";
  text.style.marginBottom = value * 1 + "px";
  button.style.marginBottom = value * 1 + "px";
});
