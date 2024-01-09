
const datosDetalladosArray = [
  {
    "idioma": [
      "Español",
      "English",
      "French",
      "Mandarín",
      "Trotokas",
      "Otro"
    ]
  } 
];

const generos = new Set(["accion", "terror", "humor", "otro"]);

/**
 * Función para generar el html del campo Generos.
 */
function generarHTMLGeneros() {
  //accedo al padre:
  let contenGenero = document.getElementById("idZonaGenero");

  generos.forEach(elemento => {
    //por cada elemento creo input con atributos:
    let inputGen = document.createElement("input");
      inputGen.setAttribute("type", "radio");
      inputGen.setAttribute("id", "id"+elemento);
      inputGen.setAttribute("name", "genero");
      inputGen.setAttribute("value", elemento)

      //añado al padre
      contenGenero.appendChild(inputGen);

    //creo label (uno por elemento) con atributo;
    let labelGen = document.createElement("label");
      labelGen.setAttribute("id", "id"+elemento);
      labelGen.innerHTML = elemento;
      //añado al padre:
      contenGenero.appendChild(labelGen);

  })

  //console.log("Pendiente de implementación.....")
  
}


/**
 * Función para generar el html del campo idiomas.
 */
function generarHTMLIdiomas() {
  //accedo al padre:
  let contenIdiomas = document.getElementById("idZonaIdiomas");

  //creo label, input y datalist:
  let labelIdioma = document.createElement("label")
    labelIdioma.setAttribute("for", "idIdioma");
    labelIdioma.innerHTML = "Idioma";
  
  let inputIdioma = document.createElement("input");
    inputIdioma.setAttribute("type","text");
    inputIdioma.setAttribute("id","idIdioma");
    inputIdioma.setAttribute("name","Idioma");
    inputIdioma.setAttribute("list","idListIdiomas");
  
  let datalistIdioma = document.createElement("datalist");
  datalistIdioma.setAttribute("id","idListIdiomas");
  
  //añado al padre:
  contenIdiomas.appendChild(labelIdioma);
  contenIdiomas.appendChild(inputIdioma);
  contenIdiomas.appendChild(datalistIdioma);

  datosDetalladosArray[0].idioma.forEach(elemento => {
    let option = document.createElement("option");
      option.setAttribute("value",elemento)
      datalistIdioma.appendChild(option)
  })

  console.log("Pendiente de implementación.....")
  
}


// LLamada a funciones que generan el HTML.
generarHTMLGeneros();
generarHTMLIdiomas();
