let bg = document.getElementById('skylogo');
let builds = document.getElementById("buildings");
let text = document.getElementById('text');
let btn = document.getElementById("btn");

window.addEventListener('scroll', function(){
    let value=window.scrollY;
    console.log(value);
    bg.style.left = value*0.15 + 'px';
    builds.style.top = value*0 + 'px';
    text.style.marginRight = value * 0.5 + "px";
    btn.style.marginTop = value * 0.5 + "px";
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
