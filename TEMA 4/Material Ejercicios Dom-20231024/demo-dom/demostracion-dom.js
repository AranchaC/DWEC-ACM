function anadirElemento(){

    let contenido = document.getElementById("contenido").value;
    if (contenido !== ""){

        //crear elemento
        let elemento = document.createElement("li")

        // especificar contenido del elemento    
        elemento.innerHTML = `Nuevo Elemento: ${contenido}`;

        //dar estilo
        elemento.classList.add("rojo")

        //damos atributos extra
        elemento.setAttribute("title", contenido)
        elemento.setAttribute("id",`id${contenido}`)

        // recuperar el padre
        let padre = document.getElementById("lista");

        //especificarle eventos
        elemento.addEventListener("click", function(){
            this.remove()
        })

        //añado al adre el hijo
        padre.appendChild(elemento)

    } else{
        alert("Pon un contenido")
    }
}

function limpiarLista(){
    let nodos = document.querySelectorAll("ul#lista li")
    nodos.forEach(elemento => elemento.remove())
}