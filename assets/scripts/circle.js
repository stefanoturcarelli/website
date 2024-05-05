"use strict";

const circle = document.querySelector("#circle");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX - circle.clientWidth / 2;
  const y = event.clientY - circle.clientHeight / 2;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});
