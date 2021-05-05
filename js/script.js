//hamburger transformation
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle("toggle");
});

//carousel Posts
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const slider = document.querySelector(".slider");

let index = 0;

rightBtn.addEventListener('click', function () {
    index = (index < 3) ? index + 1 : 3;
    slider.style.transform = 'translate(' + index * -25 + '%)';
});

leftBtn.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : 0;
    slider.style.transform = 'translate(' + index * -25 + '%)';
});

//carousel Products
const leftBtnProducts = document.querySelector(".btn-left_products");
const rightBtnProducts = document.querySelector(".btn-right_products");
const sliderProducts = document.querySelector(".slider_products");

let index2 = 0;

rightBtnProducts.addEventListener('click', function () {
    index2 = (index2 < 3) ? index2 + 1 : 3;
    sliderProducts.style.transform = 'translate(' + index2 * -25 + '%)';
});

leftBtnProducts.addEventListener('click', function () {
    index2 = (index2 > 0) ? index2 - 1 : 0;
    sliderProducts.style.transform = 'translate(' + index2 * -25 + '%)';
});