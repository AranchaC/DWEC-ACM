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
    let jugador = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
    //GUARDAMOS UN NÚMERO ALEATORIO DE 1 AL 9
    let maquina = pc(); 

    if ((jugador == maquina)) {
        alert(`${jugador} - ${maquina} : Empate`);
    } 
    else if (
        (jugador == "piedra") && (maquina == "tijera") || 
        (jugador == "papel") && (maquina == "piedra") ||
        ((jugador == "tijera") && (maquina == "papel")) 
        ) {
        alert(`${jugador} - ${maquina}: Gana Jugador`);
        ganados++;
    } 
    else {
        alert(jugador + "-" + maquina + ": Gana PC");
        perdidos++;
    }
    jugados ++;

} while (confirm("Jugar de nuevo"));

console.log(`Partidas jugadors: ${jugados}
Partidas ganadas: ${ganados}
Partidas perdidas: ${perdidos}
Partidas empatadas: ${jugados-ganados-perdidos}`);