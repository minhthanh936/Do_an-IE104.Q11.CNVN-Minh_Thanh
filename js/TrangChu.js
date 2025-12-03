let slideIndex = 0;
let slides;
window.onload = function() {
// Get all slide elements
slides = document.getElementsByClassName("slide");
if (slides.length > 0) {
showSlides(slideIndex);
startAutoSlideshow();
}
};
// Auto slideshow timer
let slideshowTimer;

function startAutoSlideshow() {
// Clear timer
clearInterval(slideshowTimer);
// Set timer 5000ms
slideshowTimer = setInterval(function() {
plusSlides(1);
}, 5000);
}
// Tien va Lui slideshow
function plusSlides(n) {
let newIndex = slideIndex + n;
// Vong nguoc lai
if (newIndex >= slides.length) {
newIndex = 0;
} else if (newIndex < 0) {
newIndex = slides.length - 1;
}
showSlides(newIndex);
// Chay lai auto
startAutoSlideshow();
}
function showSlides(n) {
slideIndex = n;
if (!slides || slides.length === 0) return;
for (let i = 0; i < slides.length; i++) {
slides[i].classList.remove('active');
}
slides[slideIndex].classList.add('active');
}