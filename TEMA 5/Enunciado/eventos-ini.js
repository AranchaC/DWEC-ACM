var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/

 document.getElementById("idEnviar").addEventListener ("click", mostrarInformacion);


function mostrarInformacion(e){
    console.clear()
    //Input nombre
    let nombre = document.getElementById("nombre").value;
    console.log(`Nombre: %c${nombre}`,color_css);

    //Input contraseña
    let pass = document.getElementById("contraseña").value;
    console.log(`Contraseña: %c${pass}`,color_css)

    //input edad
    let edad = document.getElementById("edad").value;
    console.log(`Edad: %c${edad}`,color_css)

    //input color
    let color = document.getElementById("color").value;
    console.log(`Color: %c${color}`,color_css)

    //input radio género
    let genero = document.querySelector('input[name="genero"]:checked').value;
    console.log(`Género: %c${genero}`, color_css);

    //input checkbox Idioma
  
    let idiomas = document.querySelectorAll('input[name="idioma"]:checked');
    idiomas.forEach(element => {
        console.log(`Idioma: %c${element.value}`, color_css);
      }); 
    
    //input select pais
        



    // console.clear()
    // console.log(`Usando this : %c${this.value}`,color_css);
    //console.log(`Usando Event : %c${e.target.value}`,color_css);
    
    
    e.preventDefault( );
}


