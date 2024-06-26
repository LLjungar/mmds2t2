// Sprognavigation
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



//Burgermenu med overlay og klik
document.addEventListener("DOMContentLoaded", function() {
  var burgerIcon = document.querySelector(".burger-icon");
  var overlay = document.querySelector(".overlay-nav");

  // Eventlytter for burgerikonet
  burgerIcon.addEventListener("click", function() {
      overlay.style.display = "flex"; // Vis overlayet når burgerikonet klikkes
  });

  // Eventlytter for overlayet
  overlay.addEventListener("click", function(event) {
      // Kontrollerer om klikket ikke er på selve modalen (dvs. indholdet)
      if (!event.target.closest(".modal-nav")) {
          overlay.style.display = "none"; // Skjul overlayet
      }
  });
});

//Klik her-knap 1 og 2
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
//til ok og cancel
function showOkModal(buttonId) {
    var overlayFirst = document.getElementById("overlay-first-" + buttonId);
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlayOk = document.getElementById("overlay-ok");
    overlayOk.style.display = "flex"; // Vis overlay for "OK"
  }
  
  function showCancelModal(buttonId) {
    var overlayFirst = document.getElementById("overlay-first-" + buttonId);
    overlayFirst.style.display = "none"; // Skjul første overlay
    var overlayCancel = document.getElementById("overlay-cancel");
    overlayCancel.style.display = "flex"; // Vis overlay for "Cancel"
  }


// Knap 3 til forgrenet scenarie
function showThirdModal() {
  hideAllModals(); // Skjuler alle overlayers
  var overlay = document.getElementById("third-overlay-first-choice");
  overlay.style.display = "flex"; // Viser overlay for første valgmulighed
}

// Overlay til første valgmulighed (False) for knap 3
function showThirdCancelModal() {
  hideAllModals(); // Skjuler alle overlayers
  var overlay = document.getElementById("third-overlay-false-choice");
  overlay.style.display = "flex"; // Viser overlay for "False"
}

// Overlay til første valgmulighed (True) for knap 3
function showThirdOkModal() {
  hideAllModals(); // Skjuler alle overlayers
  var overlay = document.getElementById("third-overlay-true-choice");
  overlay.style.display = "flex"; // Viser overlay for "True"
}

// Overlay til anden valgmulighed (True-True) for knap 3
function showThirdTrueTrueModal() {
  hideAllModals(); // Skjuler alle overlayers
  var overlay = document.getElementById("third-overlay-true-true-choice");
  overlay.style.display = "flex"; // Viser overlay for "True-True"
}

// Funktion til at skjule alle overlayers for knap 3
function hideThirdModals() {
  var overlays = document.querySelectorAll(".overlay");
  overlays.forEach(function(overlay) {
      overlay.style.display = "none"; // Skjuler alle overlayers
  });
}



  

//Rød klat, så musen ikke bliver væk for svagtseende
  document.addEventListener('DOMContentLoaded', function () {
    // Find det tilpassede cursor-element
    var cursor = document.querySelector('.custom-cursor');

    // Lyt efter musebevægelser på dokumentet
    document.addEventListener('mousemove', function (e) {
        // Opdater cursorpositionen til at følge musemarkøren
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
});


  
  
  