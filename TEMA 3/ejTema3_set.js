/* **** 6 SET *** */

let alumnos = new Set;
function insertar(){
    let size = parseInt(prompt("¿Cuántos alumnos quieres insertar?"))
    for (let i=0; i<size; i++) {
        let nom = prompt("Dime un nombre");
        let ed = parseInt(prompt(`Dime la edad de ${nom}`))
        let alumno = {nombre: nom, edad: ed};
        if (alumnos.has(nom)){
            alert("Alumno ya existe.")
        } else{
            alumnos.add(alumno);
        }      
    }//for
    console.log(alumnos)
}

function info(){
    alumnos.forEach((alumno) => {
        console.log(`El alumno ${alumno.nombre} tiene ${alumno.edad} años`)
    })
}

function media(){
    totalEdad = 0;
    alumnos.forEach((alumno) => totalEdad+=alumno.edad);
    console.log(`La media de edad es: ${totalEdad/alumnos.size}`);
}

function buscar (){
    let nombre = prompt("¿Qué alumno quieres buscar (nombre)?");
        if (alumnos.nombre == nombre){
            console.log(`SI Existe el alumno ${alumno.nombre}`);
        } else {
            console.log(`NO Existe el alumno ${nombre}`);
        }
    ;

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
