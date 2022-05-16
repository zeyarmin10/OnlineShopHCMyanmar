'use strict';

// Tools Buttons
const magnifyingGlass = document.querySelector('.button-magnifying-glass');
const searchBox = document.querySelector('.search-box');
const overlay = document.querySelector('.overlay');
const hiddenSearchBox = document.querySelector('.hidden-search-box');
const xMark = document.querySelector('.x-mark');
const shoppingMiniCart = document.querySelector('.open');
const toolsButton = document.querySelector('.shopping-cart-icon');

// function btnClick() {
//   hiddenSearchBox.style.display = 'block';
//   searchBox.style.display = 'block';
//   overlay.style.display = 'block';
// }

toolsButton.addEventListener('click', function () {
  if (shoppingMiniCart.style.display == 'none') {
    shoppingMiniCart.style.display = 'block';
  } else {
    shoppingMiniCart.style.display = 'none';
  }
});

magnifyingGlass.addEventListener('click', function () {
  console.log('click on button');
  // hiddenSearchBox.classList.remove('.hidden');
  hiddenSearchBox.style.display = 'block';
  searchBox.style.display = 'block';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
  hiddenSearchBox.style.display = 'none';
  overlay.style.display = 'none';
  searchBox.style.display = 'none';
});
xMark.addEventListener('click', function () {
  hiddenSearchBox.style.display = 'none';
  overlay.style.display = 'none';
  searchBox.style.display = 'none';
});

//Show Hide Menu bar
const mobileMenu = document.querySelector('.hidden-mobile-menu');
const menuIcon = document.querySelector('.menu-bar-icon');
const tools = document.querySelector('.tools');
const mobileMenuXMark = document.querySelector('.mobile-menu-xmark');
const mobileMenuOvelay = document.querySelector('.hidden-mobile-menu-overlay');

menuIcon.addEventListener('click', function () {
  if (mobileMenu.style.display == 'block') {
    mobileMenu.style.display = 'none';
    // mobileMenuOvelay.style.display = 'block';

    // tools.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
    // mobileMenuOverlay.style.display = 'none';
    // tools.style.display = 'block';
  }
});
// mobileMenuOvelay.addEventListener('click', function () {
//   if (mobileMenuOvelay.style.display == 'none') {
//     mobileMenu.style.display = 'block';
//     mobileMenuOvelay.style.display = 'block';
//   } else {
//     mobileMenu.style.display = 'none';
//     mobileMenuOverlay.style.display = 'none';
//   }
// });

mobileMenuXMark.addEventListener('click', function () {
  if (mobileMenu.style.display == 'block') {
    mobileMenu.style.display = 'none';
    // tools.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
    // tools.style.display = 'block';
  }
});
mobileMenuOvelay.addEventListener('click', function () {
  if (mobileMenu.style.display == 'block') {
    mobileMenu.style.display = 'none';
    // tools.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
    // tools.style.display = 'block';
  }
});

// Images Slider
let img = 1;
let sliderImage = document.querySelector(`#slider-${img}`);
const next = document.querySelector('#right-button');
const pre = document.querySelector('#left-button');

function nextbtn() {
  sliderImage.style.display = 'none';
  img++;
  if (img > 6) {
    img = 1;
  }
  sliderImage = document.querySelector(`#slider-${img}`);
  sliderImage.style.display = 'block';
}

function prevbtn() {
  sliderImage.style.display = 'none';
  img--;
  if (img < 1) {
    img = 5;
  }
  sliderImage = document.querySelector(`#slider-${img}`);
  sliderImage.style.display = 'block';
}

next.onclick = nextbtn;
pre.onclick = prevbtn;

setInterval(nextbtn, 5000);
