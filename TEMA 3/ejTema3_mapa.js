/* **** 5 MAPA *** */

let alumnos = new Map();
function insertar(){
    let size = parseInt(prompt("¿Cuántos alumnos quieres insertar?"))
    for (let i=0; i<size; i++) {
        let nom = prompt("Dime un nombre");
        let ed = parseInt(prompt(`Dime la edad de ${nom}`))
        if (alumnos.has(nom)){
            alert("Alumno ya existe.")
        } else{
            alumnos.set(nom,ed);
        }      
    }//for
    console.log(alumnos)
}

function info(){
    alumnos.forEach((ed,nom) => {
        console.log(`El alumno ${nom} tiene ${ed} años`)
    })
}

function media(){
    totalEdad = 0;
    alumnos.forEach((ed) => totalEdad+=ed);
    console.log(`La media de edad es: ${totalEdad/alumnos.size}`);
}

function buscar (){
    let nombre = prompt("¿Qué alumno quieres buscar (nombre)?");
    if (alumnos.has(nombre)){
        console.log(`SI Existe el alumno ${nombre}`);
    } else {
        console.log(`NO Existe el alumno ${nombre}`);
    }
}

function borrar (){
    let nombre = prompt("¿Qué alumno quieres borrar (nombre)?");
    if (alumnos.has(nombre)){
        alumnos.delete(nombre);
        console.log(`El alumno ${nombre} ha sido borrado`)
    } else {
        console.log(`NO Existe el alumno ${nombre}`);
    }

}

function borrarTodo (){
    alumnos.clear();
    console.log("Lista de alumnos borrada.")
}
