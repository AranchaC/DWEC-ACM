let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);

//accedo al padre de Autonomía
let padreAutonomia = document.getElementById("id_autonomia")

//accedo al padre de Porvincia
let padreProvincia = document.getElementById("id_provincia")
//creo hijo vacío:
let optionAutonomias = "";

document.getElementById("id_submit").addEventListener('click', validar, false);

provincias.forEach((value,key) => {
    optionAutonomias = document.createElement("option");
    optionAutonomias.innerHTML=key;
    padreAutonomia.appendChild(optionAutonomias)

    //añado evento:
    padreAutonomia.addEventListener("click",cambiarProv)
})

function cambiarProv(){
    //vacío contenido de padre provincia:
    padreProvincia.innerHTML = "";

    //consigo valores de las provincias:
    let provs = provincias.get(padreAutonomia.value);

    //por cada provincia, genero una option y habibilito botón:
    provs.forEach((prov) => {
        let optionProvincias = document.createElement("option");
        optionProvincias.innerHTML = prov;
        padreProvincia.appendChild(optionProvincias);

        padreProvincia.disabled = false;
        padreProvincia.addEventListener("click",habilitar)
    })

    //consigo boton:
    let boton = document.getElementById("id_submit")
    function habilitar(){
        boton.disabled = false;
    }
}

////// validación: valores incorrectos //////

function validar(){
    //creo campo error:
    let spanError
}

