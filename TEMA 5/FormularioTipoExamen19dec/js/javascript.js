// Aquí tu código JAVASCRIPT

const generosSet = new Set(["Masculino", "Femenino", "Otro"]);

// MAP ACTORES //
const actores = new Map([
  ["Brad", "Brad Pitt"],
  ["Angelina", "Angelina Jolie"],
  ["Morgan ", "Morgan Freeman"],
  ["Catherine", "Catherine Zeta Jones"],
  ["Jhony", "Jhony Depp"]
]);

function generarHTMLactores(){
  //CREAR: label, input, datalist, option

  // contenedor
  let contenedor = document.getElementById("idZonaPreferida");

  //label con for:
  let label = document.createElement("label");
    label.setAttribute("for","idActores");
    label.innerHTML= "Actores"

  //input con type, id=for, list=id datalist
  let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id", "idActores");
    input.setAttribute("list", "actores");

  //datalist con id
  let datalist = document.createElement("datalist");
  datalist.setAttribute("id","actores");

  //añado elementos en orden
  contenedor.appendChild(label);
  contenedor.appendChild(input);
  contenedor.appendChild(datalist);

  //options
  for (const [clave,valor] of actores) {
    let option = document.createElement("option");
      option.value = clave;
      option.innerHTML = valor;
      datalist.appendChild(option)
  }

  //Añado span mensaje error;
  let spanError = document.createElement("span");
    spanError.className = "errorSpan";
    spanError.setAttribute("id","idActoresError")
    contenedor.appendChild(spanError)
}

generarHTMLactores();

/*
function generarHTMLGeneros() {

  const contenedor = document.getElementById("idZonaSexo")

  for (const genero of generosSet) {
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', genero.toLowerCase);
    input.setAttribute('name', 'sexo');
    input.setAttribute('value', genero.toLowerCase);

    const label = document.createElement('label');
    label.setAttribute('for', genero.toLowerCase());
    label.innerHTML = genero;

    contenedor.appendChild(input);
    contenedor.appendChild(label);
  }
}

function generarHTMLAficiones() {

  const contenedor = document.getElementById("idZonaAficion");

  let select = document.createElement("select");
  select.setAttribute("name","aficion")
  select.setAttribute("id","aficion")  

  for (const [clave, valor] of aficionesMap) {
    const option = document.createElement("option");
    option.value = clave;
    option.textContent = valor;
    select.appendChild(option);
  }

  contenedor.appendChild(select)
}

function generarHTMLPreferidas(){

const contenedor=document.getElementById("idZonaPreferida")

  datosMultimediaArray.forEach(objJSON =>{
    for (clave in objJSON){
      //clave=clave.toLowerCase()
      let etiqueta = document.createElement("label")
      etiqueta.setAttribute("for",clave +"-preferida")
      etiqueta.innerHTML=clave+" Preferida"

      let input = document.createElement("input")
      input.setAttribute("type","text")
      input.setAttribute("id",clave+"-preferida")
      input.setAttribute("name",clave+"-preferida")
      input.setAttribute("list",clave)
      
      contenedor.appendChild(etiqueta)
      contenedor.appendChild(input)

      // DATALIST
      const datalist = document.createElement("datalist");
      datalist.id = clave; 
      
      objJSON[clave].forEach((opcion) => {
          const option = document.createElement("option");
          option.value = opcion;
          datalist.appendChild(option);
      });

      contenedor.appendChild(datalist)

    } 
  })
}

generarHTMLGeneros();
generarHTMLAficiones();
generarHTMLPreferidas();

*/
