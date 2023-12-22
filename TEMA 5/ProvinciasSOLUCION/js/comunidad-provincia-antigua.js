let autonomias = new Set(["Andalucía","Madrid","Galicia"]);
let provincias = new Map([
    ["Almería","Andalucía"],
    ["Cádiz","Andalucía"],
    ["Córdoba","Andalucía"],
    ["Granada","Andalucía"],
    ["Sevilla","Andalucía"],
    ["Huelva","Andalucía"],
    ["Jaén","Andalucía"],
    ["Málaga","Andalucía"],
    ["Madrid Capital","Madrid"],
    ["La Coruña","Galicia"],
    ["Lugo","Galicia"],
    ["Orense","Galicia"],
    ["Pontevedra","Galicia"],
]);

//Obtenemos el formulario
let formulario = document.forms[0];

//Insercción de elementos por defecto 'Ningún elemento seleccionado'
for(e of formulario.getElementsByTagName('select')){
    e.innerHTML = `<option selected value="" class="defaultMessage">Ninguno seleccionado</option>`;
}

//Insercción de autonomías
autonomias.forEach((autonomia) => {
    let contentText = document.createTextNode(autonomia);
    let container = document.createElement("option");
    container.appendChild(contentText);
    container.value = autonomia;
    formulario.elements['id_autonomia'].appendChild(container);
});

//Evento en el primer 'select'. Borramos el elemento por defecto, recuperamos el valor del select y actualizamos el segundo select según la autonomía habilitándolo. 
//Si es Andalucía, asignamos por defecto a Granada. Demos usar el atributo 'defaultSelected'
document.getElementById('id_autonomia').addEventListener("click",(event) => {
    if(event.target.contains(document.getElementsByClassName('defaultMessage')[0])){
        event.target.getElementsByClassName('defaultMessage')[0].remove();
        document.getElementById('id_provincia').disabled = false;
    }
    let valorAutonomia = document.getElementById('id_autonomia').value;
    let inputProvincias = formulario.elements['id_provincia'];
    inputProvincias.innerHTML = `<option selected value="" class="defaultMessage">Ninguno seleccionado</option>`;
    provincias.forEach((autonomia, provincia)=>{
        if(autonomia == valorAutonomia) {
            let contentText = document.createTextNode(provincia);
            let container = document.createElement("option");
            container.appendChild(contentText);
            if(provincia == 'Granada'){
                document.querySelector('#id_provincia > .defaultMessage').defaultSelected = false;
                container.defaultSelected = true;
            }
            container.value = provincia;
            inputProvincias.appendChild(container);
        }
    });
});

//Cuando desplegamos el select de provincias, eliminamos el elemento por defecto y habilitamos el submit
document.getElementById('id_provincia').addEventListener("click",(event) => {
    if(event.target.contains(document.getElementsByClassName('defaultMessage')[0])){
        event.target.getElementsByClassName('defaultMessage')[0].remove();
        formulario.elements['id_submit'].disabled = false;
    }
});

//Enviamos los datos y los mostramos por consola. O mostramos un error en caso de enviar datos vacíos
formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    let autonomia = formulario.elements['id_autonomia'].value;
    let provincia = formulario.elements['id_provincia'].value;
    if(autonomia!= "" && provincia!= "")
        console.info(`Datos enviados: ${autonomia} - ${provincia}`);
    else console.error('Hubo un error en el envío de datos');    
});
