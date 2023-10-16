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
    let encontrado = false;

    alumnos.forEach((alumno) => {
        if (alumno.nombre === nombre){
            encontrado = true;
        } 
    });
    if (encontrado){
        console.log(`SI Existe el alumno ${nombre}`);
    } else {
        console.log(`NO Existe el alumno ${nombre}`);
    }

}//buscar

function borrar (){
    let nombre = prompt("¿Qué alumno quieres borrar (nombre)?");
    let alumnoEliminar = null;

    alumnos.forEach((alumno) => {
        if (alumno.nombre === nombre){
            alumnoEliminar = alumno;
        }
    });
    if (alumnoEliminar){
            alumnos.delete(alumnoEliminar);
            console.log(`El alumno ${nombre} ha sido borrado`)
        } else {
            console.log(`NO Existe el alumno ${nombre}`);
        }
}//borrar

function borrarTodo (){
    alumnos.clear();
    console.log("Lista de alumnos borrada.")
}
