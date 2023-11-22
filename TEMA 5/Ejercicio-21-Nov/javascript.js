
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
    return validarCorreo() && validarInteres()// && validarXXXXX();             
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
    let interes = new Set();

    interes.add('musica');
    interes.add('viajes');
    interes.add('deportes');

    checkIntereses.forEach(checkbox => {
        console.log(checkbox.value)

        if (!interes.has(checkbox.value)){
            //Añadir la clase error al elemento
            checkbox.classList.add("error");
            checkbox.focus();
            spanInteres.innerHTML =`Este elemento no está permitido`
            return false;
        }
    });
    return true;   
}

/********************************************************************************************
 *********************************************************************************************
 ******** FUNCIÓN PARA VALIDAR, MEDIANTE EL USO DE LA API DE ACCESO A LA VALIDACIÓN DE HTML 
 *******************************************************************************************
 ********************************************************************************************/
function validarAPIHTML(eventopordefecto) {
    
    return validarNombreAPIHTML() //&& validarXXXXAPIHTML;            

}

/***************************************************************************/
/************************FUNCIONES INDIVIDUALES*****************************/
/***************************************************************************/

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



