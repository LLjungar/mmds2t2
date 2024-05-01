document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

/*
function showModal() {
    var overlay = document.getElementById("overlay-first");
    overlay.style.display = "flex"; // Vis overlay for første valgmulighed
  }
  
  function showSecondModal() {
    var overlayFirst = document.getElementById("overlay-first");
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlaySecond = document.getElementById("overlay-ja");
    overlaySecond.style.display = "flex"; // Vis overlay for "Ja da!"
  }
  
  function showThirdModal() {
    var overlayFirst = document.getElementById("overlay-first");
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlayThird = document.getElementById("overlay-naeppe");
    overlayThird.style.display = "flex"; // Vis overlay for "Næppe"
  }
  
  function hideAllModals() {
    var overlays = document.querySelectorAll(".overlay");
    overlays.forEach(function(overlay) {
      overlay.style.display = "none"; // Skjul alle overlayers
    });
  }*/

//Klik her
  function showModal(buttonId) {
    var overlay = document.getElementById("overlay-first-" + buttonId);
    overlay.style.display = "flex"; // Vis overlay for første valgmulighed for den specifikke "Klik her" knap
  }
  
  function showSecondModal(buttonId) {
    var overlayFirst = document.getElementById("overlay-first-" + buttonId);
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlaySecond = document.getElementById("overlay-ja");
    overlaySecond.style.display = "flex"; // Vis overlay for "Ja da!"
  }
  
  function showThirdModal(buttonId) {
    var overlayFirst = document.getElementById("overlay-first-" + buttonId);
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlayThird = document.getElementById("overlay-naeppe");
    overlayThird.style.display = "flex"; // Vis overlay for "Næppe"
  }
  
  function hideAllModals() {
    var overlays = document.querySelectorAll(".overlay");
    overlays.forEach(function(overlay) {
      overlay.style.display = "none"; // Skjul alle overlayers
    });
  }
  
  
  
  