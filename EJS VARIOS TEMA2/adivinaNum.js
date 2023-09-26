const MAX = 100;

let getRandomInt = (max) => Math.floor(Math.random() * max)
const partidas = []

while(true){
    let aleat = getRandomInt(MAX)
    console.log(aleat)
    let num = parseInt(prompt("¡ VAMOS A JUGAR ! \n Adivina el número."))
    let contador = 1

    if (isNaN(num) === true){
        console.log("Has cancelado. \n SE ACABÓ EL JUEGO.")
        break;
    }

    while (true) {  

        if ( num === aleat){
            console.log(`¡¡HAS GANADO!! \n Lo has adivinado al ${contador} intento!!`)
            partidas.push({NºAcertado: aleat, Intentos: contador})
            //console.log(partidas)
            break;
        } else if (num > aleat){
            console.log(`Te pasaste, tu número ${num} es mayor. \n ¡Inténtalo de nuevo!`)
            contador++
        } else{
            console.log(`No has llegado, tu número ${num} es menor. \n ¡Inténtalo de nuevo!`)
            contador++
        }
        num = parseInt(prompt("Dime otro número."))

    } //while true 2
    //console.log(partidas)
    console.table(partidas)
}//while true 1



