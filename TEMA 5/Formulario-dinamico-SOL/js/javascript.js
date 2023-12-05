// Aquí tu código JAVASCRIPT

const datosMultimediaArray = [
  {
    "Peliculas": [
      "Titanic",
      "Forrest Gump",
      "Avatar",
      "The Shawshank Redemption",
      "The Godfather",
      "Inception",
      "Pulp Fiction",
      "The Dark Knight",
      "Schindler's List",
      "The Matrix"
    ]
  },
  {
    "Series": [
      "Juego de Tronos",
      "Breaking Bad",
      "Stranger Things",
      "Friends",
      "The Crown",
      "Los Serrano"
    ]
  }
];

const generosSet = new Set(["Masculino", "Femenino", "Otro"]);

const aficionesMap = new Map([
  ["deportes", "Practicar deportes"],
  ["musica", "Escuchar música"],
  ["lectura", "Leer libros"],
  ["viajes", "Viajar"],
  ["otra", "Otra afición"]
]);

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


