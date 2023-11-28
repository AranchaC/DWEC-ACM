
// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["miFormulario"]
//es igual que:
// let formulario = document.getElementById("idFormulario")

/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS: correo, interés, fechaNac
 *          - Mediante Api de acceso a validación de html: edad, nombre, apellido
 ****************************************************************/

function validar(e){    
    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName y CustomMessage
    for (let i=0; i<formulario.elements.length; i++){
        formulario.elements[i].className="";
        formulario.elements[i].setCustomValidity("")
    }

    // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error        
    document.querySelectorAll(".errorSpam").forEach(e=>e.innerHTML="");
        
    // IMPORTANTE!!! Deshabilitamos el botón
    this.disabled = true;

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){           
        return true;

    }else{
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
    return validarCorreo() && validarInteres()&& validarNacimiento();             
}
/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/
function validarCorreo() {
    let inputCorreo=formulario["idEmail"]
    let spanCorreo=document.getElementById('idCorreoError')    
    
    if(inputCorreo.value == ""){
        //Añadir la clase error al elemento
        inputCorreo.classList.add("error")
        //inputCorreo.className = "error";
        //Para poner el foco en ese elemento y poder editar el error
        inputCorreo.focus();
        spanCorreo.innerHTML=`Campo obligatorio`;
        return false
    }

    return true;
}
  
function validarInteres(){
    let spanInteres=document.getElementById('idInteresesError')  
    let checkIntereses = formulario.querySelectorAll('input[name="interes"]');
    let interes = new Set(["deportes", "musica", "viajes"]);

    let checked = false;

    // interes.add('musica');
    // interes.add('viajes');
    // interes.add('deportes');

    // Recorro el set de checkbox,l y por cada checkbox:
    checkIntereses.forEach(checkbox => {
        // console.log(checkbox.value)
        // si el check está seleccionado:
        if (checkbox.checked === true) {
            checked = true;
            // si el check seleccionado no está en el set:
            if (!interes.has(checkbox.value)){
                //Añadir la clase error al elemento
                checkbox.classList.add("error");
                checkbox.focus();
                spanInteres.innerHTML +=`El elemento ${checkbox.value} no está permitido. <br>`
                return false;
            }           
        }
    })
    //si no hay ninguno seleccionado, mensaje de error:
    if (checked === false){
        spanInteres.innerHTML='Seleccione uno.';
        return false;
    }
    return true;   
}

function validarNacimiento(){
    let spanNac = document.getElementById('idFechaNacimiento');
    let inputNac = formulario["idFechaNacimiento"]
}

/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/
function validarAPIHTML(eventopordefecto) { 
    return validarEdadAPIHTML() && validarNombreAPIHTML();
}

/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/

function validarEdadAPIHTML(){
    let inputEdad = formulario["idEdad"];
    let spanEdad = document.getElementById("idEdadError");

    if (inputEdad.validity.valueMissing){
        let mensajeError= `Campo obligatorio`;
        inputEdad.focus();
        inputEdad.setCustomValidity(mensajeError);
        spanEdad.innerHTML = inputEdad.validationMessage;
        return false;

    } else if(inputEdad.validity.rangeUnderflow){
        let mensajeError= `Valor debe ser superior a 18`
        inputEdad.focus()
        inputEdad.setCustomValidity(mensajeError)
        spanEdad.innerHTML=inputEdad.validationMessage     
        return false

    } else if(inputEdad.validity.rangeOverflow){
        let mensajeError= `Valor debe ser inferior a 99`
        inputEdad.focus()
        inputEdad.setCustomValidity(mensajeError)
        spanEdad.innerHTML=inputEdad.validationMessage      
        return false

    }
    return true;
}
function validarNombreAPIHTML() {
    
    let inputNombre= formulario.elements["idNombre"]    
    let spanNombre=document.getElementById('idNombreError')

    if (inputNombre.validity.valueMissing){     
        
        let mensajeError= `Campo obligatorio`
        
        inputNombre.className = "error";
        inputNombre.focus();       
        inputNombre.setCustomValidity(mensajeError);
        spanNombre.innerHTML = inputNombre.validationMessage;
        
        return false;
    }
    return true;
}



