let slideIndex = 1;

// Function to show slides
function showSlides(n) {
let i;
const slides = document.getElementsByClassName("explore-mySlides");
const dots = document.getElementsByClassName("explore-dot");

if (n > slides.length) {
  slideIndex = 1;
}

if (n < 1) {
  slideIndex = slides.length;
}

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" explore-active", "");
}

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " explore-active";
}

// Function to navigate to the next slide
function plusSlides(n) {
showSlides((slideIndex += n));
}

// Function to set the current slide
function currentSlide(n) {
showSlides((slideIndex = n));
}

// Function to automatically advance slides
function autoSlide() {
plusSlides(1);
setTimeout(autoSlide, 2000); 
}

// Initial slide display and start automatic slideshow
showSlides(slideIndex);
autoSlide();