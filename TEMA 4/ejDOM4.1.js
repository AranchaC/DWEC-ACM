const parrafo1 = {
    titulo: "Primer bloqe de párrafos",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

const parrafo2 = {
    titulo: "Segundo bloqe de párrafos",
    hijos: ["Este es el primer párrafo", "Este es el segundo párrafo", "Este es el tercer párrafo"]
};

const estructura = new Set();

//agregar objetos al conjunto
estructura.add(parrafo1);
estructura.add(parrafo2);

// recorro estructura con foreach porques un array:
estructura.forEach(parrafo => {

    //creo elemento y asigno contenido.
    let titulo = document.createElement("h2");
    titulo.innerHTML = parrafo.titulo;

    // Obtengo el padre y añado el elemento:
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(titulo);

    //y lo mismo con los hijos:
    parrafo.hijos.forEach( hijo => {
        let hijos = document.createElement("p");
        hijos.innerHTML = hijo;
        body.appendChild(hijos);
    })
});