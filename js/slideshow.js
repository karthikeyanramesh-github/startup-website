let slideIndex = 0;
let timer;
showSlides();
function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  clearTimeout(timer);
  if (n) {
    slideIndex = n;
  } else {
    slideIndex++;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(showSlides, 1300);
}
