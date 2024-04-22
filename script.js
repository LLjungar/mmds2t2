// Funktion til at vise modalen
function showModal() {
    console.log("showModal() blev kaldt");
    document.getElementById('yesModal').style.display = 'block'; // Vis modal for "Ja" svar
}

// Funktion til at lukke modalen
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Funktion til at håndtere "Ja" svar
function handleYes() {
    document.getElementById('yesModal').style.display = 'block'; // Vis modal for "Ja" svar
    closeModal(); // Luk det oprindelige spørgsmål-modal
}

// Funktion til at håndtere "Nej" svar
function handleNo() {
    document.getElementById('noModal').style.display = 'block'; // Vis modal for "Nej" svar
    closeModal(); // Luk det oprindelige spørgsmål-modal
}

// Funktion til at lukke "Ja" modalen
function closeYesModal() {
    document.getElementById('yesModal').style.display = 'none'; // Skjul modal for "Ja" svar
}

// Funktion til at lukke "Nej" modalen
function closeNoModal() {
    document.getElementById('noModal').style.display = 'none'; // Skjul modal for "Nej" svar
}

