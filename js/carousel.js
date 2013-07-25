// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var slideshow = document.getElementById('slideshow');

// Carousel-related things
var carousel = document.getElementById('carousel');
carousel.style.marginLeft = 0;
var movePixels = 612;
var numberOfImages = document.getElementsByTagName("img").length;
var delayMs = 3000;
var carouselTimer = null;

function carouselForward() {
  var currentCarouselMarginLeft = parseInt(carousel.style.marginLeft);
  carousel.style.marginLeft = (currentCarouselMarginLeft - movePixels) + "px";
  if (Math.abs(currentCarouselMarginLeft) === ((numberOfImages - 1) * movePixels)) {
    carousel.style.marginLeft = "0px";
  };
};

function carouselBackward() {
  currentCarouselMarginLeft = parseInt(carousel.style.marginLeft);
  carousel.style.marginLeft = (currentCarouselMarginLeft + movePixels) + "px";
  if (currentCarouselMarginLeft === 0) {
    carousel.style.marginLeft = (-(numberOfImages - 1) * movePixels) + "px";
  };
};

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2
next.onmouseover = function(event) {
  this.style.opacity = "0.2";
};
next.onmouseout = function(event) {
  this.style.opacity = "0.5";
};
previous.onmouseover = function(event) {
  this.style.opacity = "0.2";
};
previous.onmouseout = function(event) {
  this.style.opacity = "0.5";
};
slideshow.onmouseover = function(event) {
  this.style.opacity = "0.2";
};
slideshow.onmouseout = function(event) {
  this.style.opacity = "0.5";
};

// Create onclick events to advance the images
next.onclick = function(event) {
  clearInterval(carouselTimer);
  carouselForward();
};
previous.onclick = function(event) {
  clearInterval(carouselTimer);
  carouselBackward();
};
slideshow.onclick = function(event) {
  clearInterval(carouselTimer);
  carouselTimer = window.setInterval(carouselForward, delayMs);
};