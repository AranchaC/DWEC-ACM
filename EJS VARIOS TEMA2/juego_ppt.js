let jugados = 0;
let ganados = 0;
let perdidos = 0;

function pc(){
    let aleatorio = Math.floor((Math.random() * 3) + 1);
    switch (aleatorio){
        case 1: return "piedra"; break;
        case 2: return "papel"; break
        default: return "tijera"
    }
    return false
}//funciónPc

do {
    let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
    let elige = pc();
    

    if ((jugada == elige)) {
        alert(`${jugada} - ${elige} : Empate`);
    }
     
    else if (
        (jugada == "piedra") && (elige == "tijera") || 
        (jugada == "papel") && (elige == "piedra") ||
        ((jugada == "tijera") && (elige == "papel")) 
        ) {
        alert(`${jugada} - ${elige}: Gana PC`);
        ganados++;
    }

    else {
        alert(jugada + "-" + elige + ": Gana PC");
        perdidos++;
    }
    jugados ++;

} while (confirm("Jugar de nuevo"));

console.log("Partidas jugadas: " + jugados );
console.log("Partidas ganadas: " + ganados );
console.log("Partidas perdidas: " + perdidos );
console.log("Partidas empatadas: " + (jugados-ganados-perdidos));