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
      "Series":[
        "Juego de Tronos",
        "Breaking Bad",
        "Stranger Things",
        "Friends",
        "The Crown",
        "Los Serrano"
      ]
    }
  ];
  
datosMultimediaArray.forEach(obJson => {
  for(clave in obJson){
    clave = clave.toLowerCase();
    //por cada clave de cada json creamos un input y datalist:
    let input= document.createElement('input');
    input.type="text";
    input.name=clave + "-preferida";
    input.id=clave + "-preferida";

    let padre = document.getElementById("pelicula");

    padre.appendChild(input);

  }
})


  //SEXO
  const generosSet = new Set(["Masculino", "Femenino", "Otro"]);
  let contenedorGen = document.getElementById("idSexo");

    generosSet.forEach(genero => {
      let radios = document.createElement('input');
      radios.type='radio';
      radios.name='sexo';
      radios.value=genero;
      radios.id=genero;

      let labelRadio = document.createElement('label');
      labelRadio.htmlFor=genero;
      let descrip = document.createTextNode(genero);
      labelRadio.appendChild(descrip);

      contenedorGen.appendChild(radios); 
      contenedorGen.appendChild(labelRadio);
      //aplico salto de linea después del ultimo elemento:
    }); 

     
//AFICIONES
  const aficionesMap = new Map([
    ["deportes", "Practicar deportes"],
    ["musica", "Escuchar música"],
    ["lectura", "Leer libros"],
    ["viajes", "Viajar"],
    ["otra", "Otra afición"]
]);

//foreach para recorrer aficionesmap:
aficionesMap.forEach((val, key) =>{
  //CREAR OPCIONES POR CADA Aficion:
  let option = document.createElement('option');
  option.value = key;
  let optionTexto = document.createTextNode(val);
  option.appendChild(optionTexto);

  let contenOptions =document.getElementById("aficion");
  contenOptions.appendChild(option);

});

  console.log("Los datos multimedia son :")
  console.log(datosMultimediaArray)
  
  console.log("Los valores de género son:")
  console.log(generosSet)

  console.log("La información de aficiones es:")
  console.log(aficionesMap)