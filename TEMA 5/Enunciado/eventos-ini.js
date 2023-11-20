var color_css = 'background: #222; color: #bada55'
/**
* Uso de addEventListener this y Event
**/
let boton =  document.getElementById("idEnviar")
boton.addEventListener ("click", validarInformacion);

let formulario = document.getElementById("idFormulario");

//  validar: apihtlm, js, confirm
function validarInformacion(e){
  if (validarAPIHTML(e) ){
    // && confirm("¿Quieres enviar formulario?")

    //recupero todos los span con clase error:
    let span = document.querySelectorAll(".error");
    //con un foreach borro todos los elementos del array span
    span.forEach(element => {
      element.remove();      
    });
    
    return true;

  } else {
    e.preventDefault;
    this.disabled = false;
    return false;
  }
}

function validarAPIHTML(e) {
  // console.log("Pendiente de implementar");
  return validarNombreHTML();
}

function validarNombreHTML (e){
  let nombre = document.getElementById('nombre');

  if (nombre.validity.valueMissing) {
    let error = "Campo obligatorio";
    nombre.focus();
    nombre.setCustomValidity(error);
    document.getElementById(errorNombre).innerHTML = nombre.validatonMessage;
    return false; 
  }


  return true;
}

function validarJS (e) {
  return validarNombre() && validarEdad() && validarArea() ;
}

function validarNombre(){
  let zonaError = document.getElementById("errorNombre");
  //campo requerido y entre 3 y 15 caracteres:
  let nombre = document.getElementById("nombre").value;
  if (!nombre ) {
    zonaError.innerHTML="Campo obligatorio.";
    return false;
  } else if (nombre.length < 3 || nombre.length > 15) {
    zonaError.innerHTML="debe tener entre 3 y 15 carácteres";
  }
  else{
    return true;
  }
}

function validarEdad(){
  let zonaError = document.getElementById("errorEdad");
  let edad = parseInt(document.getElementById("edad").value);
  if (edad <18 || edad > 99){
    zonaError.innerHTML = "Debe ser un número entre 18 y 99."
    return false;
  } else if (!edad){
    zonaError.innerHTML = "Debes poner un valor"
    return false;
  }
  else {
    return true;
  }
}

function validarArea(){
  let zonaError = document.getElementById("errorArea");
  let area = document.getElementById("area").value;
  if (!area) {
    zonaError.innerHTML="Campo obligatorio.";
    return false;
  } else if (area.length >= 50) {
    zonaError.innerHTML="Tiene que tener menos de 50 carácteres";
    return false;
  } else {
    return true;
  }
}

function validarGenero(){
  let generos = new Set;
  

}


/* function mostrarInformacion(e){
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
  if (genero){
    console.log(`Género: %c${genero}`, color_css);
  }

  //input checkbox Idioma
  let idiomas = document.querySelectorAll('input[name="idioma"]:checked');
  idiomas.forEach(element => {
    console.log(`Idioma: %c${element.value}`, color_css);
  }); 
  
  //input selec-option de aficiones:
  let aficiones = document.getElementById("aficiones").options;
  let seleccion = aficiones.selectedIndex
  console.log(`Aficiones: %c${aficiones[seleccion].text}`, color_css);

  //datalist (se coge el id del input, no del datalist)
  let lista = document.getElementById("pelicula");
  console.log(`Película favorita: %c${lista.value}`, color_css);
  
  //datalist profe - no me funciona
  // let inputLista = formulario["listaPeliculas"];
  // console.log(`Película favorita: %c${inputLista.value}`, color_css);
  
  e.preventDefault( );
}
*/

