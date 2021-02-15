function toggleSearch() {
  let togglesearch = document.getElementById("togglesearch");
  if (togglesearch.style.display === "none") {
    togglesearch.style.display = "block";
  } else {
    togglesearch.style.display = "none";
  }
}

function myFunction() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function returnToTop() {
  document.documentElement.scrollTop = 0;
}
