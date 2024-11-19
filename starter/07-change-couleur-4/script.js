/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

document.querySelector(":root").style.setProperty("--main-color", document.querySelector('input[checked]').value);


function changeCouleur(evt) {
    document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.value);
}

document.getElementById("rouge").addEventListener('click', changeCouleur);
document.getElementById("vert").addEventListener('click', changeCouleur);
document.getElementById("bleu").addEventListener('click', changeCouleur);
document.getElementById("jaune").addEventListener('click', changeCouleur);

const radioButtons = document.querySelectorAll('input[type="radio"]'); // Select all radio buttons
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', (evt) => {
        document.documentElement.style.setProperty('--main-color', evt.currentTarget.value);
    });
}

const radioInputs = document.querySelectorAll('input[radio]');
for (const radioInput of radioInputs) {
    if (radioInput.checked) {
        document.querySelector(':root').style.setProperty('--main-color', radioInput.value);
    }
}

document.getElementById("formCouleur").addEventListener("submit", function(evt) {
    evt.preventDefault();
    console.log("Bonjour !")
});