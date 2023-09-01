function showAlert() {
  const myAlert = "We will contact you soon!";
  alert(myAlert);
}
//get elements with tabcontent class and hide
function openInfo(evt, tabName) {
  //declaring variables

  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //get elements with class tablinks and remove the active class
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //show current tab and add active class to it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

//will open home tab by default
document.getElementById("defaultOpen").click();
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
//slideshow for reviews
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews");
  var dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
