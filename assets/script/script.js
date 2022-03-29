//Test de connexion
console.log("Be water my Friend");
console.log("---------");

//Début du code
//Variables
//Time

//Div
const hoursDiv = document.querySelector('.hour-hand');
const minutesDiv = document.querySelector('.main-hand');
const secondesDiv = document.querySelector('.second-hand');

function affichage() {
    let date = new Date;
    let hours = date.getHours();
    hours = (hours % 12) || 12;
    hours = hours * 30 + 90;
    let minutes = date.getMinutes();
    minutes = minutes * 6 + 90;
    let secondes = date.getSeconds();
    secondes = secondes * 6 + 90;

    hoursDiv.style.transform = `rotate(${hours}deg)`;
    minutesDiv.style.transform = `rotate(${minutes}deg)`;
    secondesDiv.style.transform = `rotate(${secondes}deg)`;
}
setInterval(affichage, 1000);




/*
    * Pseudo Code Créer une fonction qui détermine la position de chaque aiguille en fonction de l'heure 
    * Au chargement de la page ajouter une classe qui contient du style dynamique pour chaque aiguille  
    * 
    * Créer un timer qui fait augmenter le nombre de degré de cette classe à chaque seconde

/* 
    * Nombre de degrés par seconde pour seconde = 6 
    * Nombre de degré par seconde pour minutes 0.1
    * Nombre de degré par seconde pour heures 0.0083
*/