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

    //creo campo error:
    let spanErrorAut = document.createElement("span");
    spanErrorAut.setAttribute("id", "idErrorAutonomía");
    padreAutonomia.appendChild(spanErrorAut)

    let spanErrorProv = document.createElement("span");
    spanErrorProv.setAttribute("id", "idErrorProvincia");
    padreProvincia.appendChild(spanErrorProv)

document.getElementById("id_submit").addEventListener('click', validar);

provincias.forEach((value,key) => {
    optionAutonomias = document.createElement("option");
    optionAutonomias.innerHTML=key;
    padreAutonomia.appendChild(optionAutonomias)

    //añado evento:
    padreAutonomia.addEventListener("click", cambiarProv)
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

function validar(e){
    e.preventDefault();
    spanErrorAut.innerHTML = "";
    spanErrorProv.innerHTML = "";


    //accedo a valor de autonomia y de provincia:
    let aut = document.getElementById("id_autonomia").value;
    let prov = document.getElementById("id_provincia").value;

    if (provincias.has(aut) === false) {
        spanErrorAut.innerHTML = "Autonomía incorrecta.";
    } else if (provincias.get(aut).includes(prov) === false) {
        spanErrorProv.innerHTML = "Provincia incorrecta."
    } else {
        alert("Formulario correcto")
    }

}

