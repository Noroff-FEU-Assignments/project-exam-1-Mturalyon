//carousel Posts
const leftBtn = document.querySelector(".btn-left");                        //targeting btns
const rightBtn = document.querySelector(".btn-right");
const slider = document.querySelector(".slider");                           //targeting the slider which crosses boundaries with its parent that have overflow hidden

let index = 0;

rightBtn.addEventListener('click', function () {                            //taken into consideration of a width of 400%, and 4 items
    index = (index < 3) ? index + 1 : 3;                                    //on click it will move the slider with transform translate, 25% at a time
    slider.style.transform = 'translate(' + index * -25 + '%)';             //right btn give - percentage, left btn give + percentage
});

leftBtn.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : 0;
    slider.style.transform = 'translate(' + index * -25 + '%)';
});

//carousel Products
const leftBtnProducts = document.querySelector(".btn-left_products");       //had to do the same on both different carousels.
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