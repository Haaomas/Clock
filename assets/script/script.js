//Test de connexion
console.log("Be water my Friend");
console.log("---------");

//Début du code
//Variables
//Div hand
const hoursDiv = document.querySelector('.hour-hand');
const minutesDiv = document.querySelector('.main-hand');
const secondesDiv = document.querySelector('.second-hand');


function affichage() {
    //Time
    let date = new Date;
    let hours = date.getHours();
    hours = (hours % 12) || 12;
    hours = hours * 30 + 90;
    let minutes = date.getMinutes();
    minutes = minutes * 6 + 90;
    let secondes = date.getSeconds();
    secondes = secondes * 6 + 90;

    //Transforme on the hand
    hoursDiv.style.transform = `rotate(${hours}deg)`;
    minutesDiv.style.transform = `rotate(${minutes}deg)`;
    secondesDiv.style.transform = `rotate(${secondes}deg)`;
}
//Interval of 1 seconde
setInterval(affichage, 1000);