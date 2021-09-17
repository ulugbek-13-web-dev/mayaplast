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
  var dots = document.getElementsByClassName("dot");
  let hello = document.getElementById("hello");
  let header = document.getElementById("header");

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
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  
  if(slideIndex === 1) {
    header.style.backgroundColor = "#0e93ff";
    document.getElementById('wave-left-img').src = "red.png";
    document.getElementById('wave-right-img').src = "orange.png";
    console.log(slideIndex)
  }else if(slideIndex === 2){
    header.style.backgroundColor = "#ffb000";
    document.getElementById('wave-left-img').src = "blue.png";
    document.getElementById('wave-right-img').src = "red.png";
    document.getElementById('chem-h2').style.color = "#ffb000";
    document.getElementById('kto-h2').style.color = "#ffb000";
    document.getElementById('obshiy-btn-btn-1').style.backgroundColor="#ffb000";
    document.getElementById('obshiy-btn-2').style.backgroundColor="#ffb000"
    document.getElementById('catalog-1').style.backgroundColor = "rgba(255,176,0,.1)"
    document.getElementById('clients-id').style.backgroundColor = "rgba(255,176,0,.1)"
    document.getElementById('tulqinlar-id').style.backgroundColor="rgba(255,176,0,.1)";
    document.getElementById('last-id').style.backgroundColor="#f0a700"
    document.getElementById('tulqin-id').style.backgroundImage = "url('https://mayaplast.uz/wp-content/themes/mayaplast/assets/theme/images/footer-top-orange.png')"
    console.log(slideIndex)
  }else if(slideIndex === 3){
    header.style.backgroundColor = "#ff5e59";
    document.getElementById('wave-left-img').src = "orange.png";
    document.getElementById('wave-right-img').src = "blue.png";
    document.getElementById('chem-h2').style.color = "#ff5e59";
    document.getElementById('kto-h2').style.color = "#ff5e59";
    document.getElementById('obshiy-btn-btn-1').style.backgroundColor="#ff5e59";
    document.getElementById('obshiy-btn-2').style.backgroundColor="#ff5e59";
    document.getElementById('catalog-1').style.backgroundColor = "rgba(255,94,89,.1)";
    document.getElementById('clients-id').style.backgroundColor = "rgba(255,94,89,.1)"
    document.getElementById('tulqinlar-id').style.backgroundColor="rgba(255,94,89,.1)"
    document.getElementById('last-id').style.backgroundColor="#f1544f"
    document.getElementById('tulqin-id').style.backgroundImage = "url('https://mayaplast.uz/wp-content/themes/mayaplast/assets/theme/images/footer-top-red.png')"
    console.log(slideIndex)
  }
}

function hoverEffect2() {
  let waveRightId = document.getElementById("wave-right-id");
  waveRightId.style.right = "0";
}
function hoverEffect() {
  let waveLefttId = document.getElementById("wave-left-id");
  waveLefttId.style.left = "0";
}
function moveEffect2() {
  let waveRightId = document.getElementById("wave-right-id");
  waveRightId.style.right = "-50px";
}
function moveEffect() {
  let waveLeftId = document.getElementById("wave-left-id");
  waveLeftId.style.left = "-50px";
}
