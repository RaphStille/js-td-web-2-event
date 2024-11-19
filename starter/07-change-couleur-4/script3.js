/*
EXERCICE 6 : Change couleur (4) - v3
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 3 : version 2 + on parcourt les boutons avec une boucle foreach pour leur ajouter leur addEventListener
*/

function changeCouleur(evt) {
    document.querySelector(':root').style.setProperty('--main-bg-color', evt.currentTarget.value);
}

document.getElementById("rouge").addEventListener('click', changeCouleur);
document.getElementById("vert").addEventListener('click', changeCouleur);
document.getElementById("bleu").addEventListener('click', changeCouleur);
document.getElementById("jaune").addEventListener('click', changeCouleur);