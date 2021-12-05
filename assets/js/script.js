// Header
let header = document.getElementById("navbar");
let btns = header.getElementsByClassName("navItem");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("headerActive");
  current[0].className = current[0].className.replace(" headerActive", "");
  this.className += " headerActive";
  });
}
// Slide Show for showing Posters
let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("updates");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}

// video gallery

let slideIndex = 1;
showSlides(slideIndex);

                            // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

                            // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("bigVideo");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" vidActive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " vidActive";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// notifications

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("notifiActive");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//footer 
let currentTime = new Date();
let year = currentTime.getFullYear();
document.getElementById('footer-year').innerHTML = year;
