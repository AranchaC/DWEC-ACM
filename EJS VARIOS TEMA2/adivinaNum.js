const MAX = 100;

let getRandomInt = (max) => Math.floor(Math.random() * max)

let aleat = getRandomInt(MAX)
let num = parseInt(prompt("¡ VAMOS A JUGAR ! \n Adivina el número."))
let contador = 1

while (true) {  
    if (isNaN(num) === true){
        console.log("Has cancelado. \n SE ACABÓ EL JUEGO.")
        break;
    }
    if ( num === aleat){
        console.log(`¡¡HAS GANADO!! \n Lo has adivinado al ${contador} intento!!`)
        break;
    } else if (num > aleat){
        console.log(`Tu número ${num} es mayor. \n ¡Inténtalo de nuevo!`)
        contador++
    } else{
        console.log(`Tu número ${num} es menor. \n ¡Inténtalo de nuevo!`)
        contador++
    }
    num = parseInt(prompt("Dime otro número."))
} 