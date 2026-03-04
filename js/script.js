
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

function initSlider() {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const imgEl = slider.querySelector("img");
  const prevBtn = slider.querySelector("[data-prev]");
  const nextBtn = slider.querySelector("[data-next]");

  if (!imgEl || !prevBtn || !nextBtn) return;

  // Put any images you want in /images and list them here:
  const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
  ];

  let idx = 0;

  function render() {
    imgEl.src = images[idx];
    imgEl.alt = `Slider image ${idx + 1} of ${images.length}`;
  }

  prevBtn.addEventListener("click", () => {
    idx = (idx - 1 + images.length) % images.length;
    render();
  });

  nextBtn.addEventListener("click", () => {
    idx = (idx + 1) % images.length;
    render();
  });

  render();
}