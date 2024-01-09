
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
let formulario = document.forms["idFormulario"]
let boton = document.getElementById("idEnviar")
boton.addEventListener("click",validar)

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/

function validar(e) {

  // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Clases y mensajes de la API
  Array.from(formulario.elements).forEach(e => {
    e.classList = "";
    e.setCustomValidity = "";
  })

  // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Span de error
  document.querySelectorAll(".errorSpan").innerHTML = "";
  

  // IMPORTANTE!!! Deshabilitamos el botón
  this.disabled = true;


  if (validarJS(e) && validarAPIHTML(e) && confirm("¿Deseas enviar el formulario?")) {
    this.disabled = false;
    return true;

  } else {
    e.preventDefault();
    this.disabled = false;
    return false;
  }
}


/********************************************************************************************
 *******************************************************************************************
 *************** FUNCIÓN PARA VALIDAR DE FORMA MANUAL MEDIANTE JAVASCRIPT
 *******************************************************************************************
 *******************************************************************************************/
function validarJS(eventopordefecto) {

  // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
  return validarNombre() && validarCodigo() && validarGenero();

}
/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/
function validarNombre() {
  let nombre = document.getElementById("idNombre");

  //recupero zona error
  let errorNombre = document.getElementById("idErrorNombre");
  errorNombre.classList= "errorSpan";

  if (nombre.value === ""){
    nombre.classList = "errorInput"
    nombre.focus();
    errorNombre.innerHTML = "Debe especificar un nombre de película";
    return false
  }

  return true;

}

function validarCodigo() {
  let codigo = document.getElementById("idCodigo");

  //recupero zona error:
  let errorCodigo = document.getElementById("idErrorCodigo");
  errorCodigo.classList= "errorSpan";

  if (codigo.value === ""){
    codigo.classList = "errorInput"
    codigo.focus();
    errorCodigo.innerHTML = "Debe especificar un código y debe ser válido";
    return false
  }

  let regEx = /^[a-zA-Z]{3}-\d{4}$/;
  if (!regEx.test(codigo.value)){
    codigo.classList = "errorInput"
    codigo.focus();
    errorCodigo.innerHTML = "Código de película invalido: XXX-YYYY";
    return false
  }

  return true;

}

function validarGenero() {
  let genero = document.getElementById("idZonaGenero");

  //zona error:
  let errorGenero  = document.getElementById("idErrorGenero");
  errorGenero.classList= "errorSpan";

  if (!generos.has(genero.value)){
    genero.classList = "errorInput"
    genero.focus();
    errorGenero.innerHTML = "Género no válido.";
    return false
  }

  return true;

}

/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/
function validarAPIHTML(eventopordefecto) {

  return validarAnioAPIHTML();

}

/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/

function validarAnioAPIHTML() {
  //recupero input:
  let inputAnio = document.getElementById("idAnio");
  //recupero zona error:
  let errorAnio = document.getElementById("idErrorAnio");
  errorAnio.classList = "errorSpan";

  //valido si su valor es entre 1895 y 2024, no es obligatorio:
  if (inputAnio.validity.rangeOverFlow){
    inputAnio.classList = "errorInput";
    inputAnio.focus();
    errorAnio.setCustomValidity()
    errorAnio.validationMessage = "Año no válido";
    
    return false;
  }
  if (inputAnio.validity.rangeUnderflow){
    inputAnio.classList = "errorInput";
    inputAnio.focus();
    //errorAnio.setCustomValidity()
    errorAnio.validationMessage = "Año no válido";
    
    return false;
  }
  return true;

}

function validarDireccionWebAPIHTML() {

  return true;

}



