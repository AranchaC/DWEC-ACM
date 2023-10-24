function insertarAleatorio(){
    let elemento = document.createElement("li");
    let num = Math.random()
    elemento.innerHTML = `Nuevo elemento: ${num}`;

    let padre = document.getElementById("lista")
    padre.appendChild(elemento)
}