// ej 2.1 //
function ej1(){

    let saludar = () => alert("Hola, te estoy observando...")
    let idTiempo = setTimeout(saludar, 7000)
}

// ej 2.2 //
function ej2(){
    let valorInicial=10
    let decrementar = () => {
        valorInicial -= 1
        if (valorInicial>0){
            console.log(`Valor actual: ${valorInicial}`)
        } else {
            console.log("Tu tiempo ha terminado.")
            clearTimeout(idTiempo)
        }
    }
    let idTiempo = setInterval(decrementar, 500)
}

// ej 2.3 //
function ej3(){
    let fecha
    let fechaForm
    let mostrarHora = () =>{
        fecha= new Date()
        fechaForm = `La hora es ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`

        console.log(fechaForm)
        document.title=fechaForm
    }
    let idTiempo = setInterval(mostrarHora, 5000)
}

// ej 2.4 //
function ej4(){
    let mostrarFecha = () =>{
        let fechaActual = new Date()
        console.log(fechaActual)
    }

    let idTiempo = setInterval(mostrarFecha, 2000)
}


// ej 2.5 //
function ej5(){
    let fechaFinal = new Date('2024/06/30')
    let fechaActual = new Date()

    let diasRest = () => {
        let resta = fechaFinal - fechaActual
        let diasRest = Math.floor(resta / (1000 * 60 * 60 * 24))
        console.log(diasRest)

    }
    console.log(diasRest())
    // let idTiempo = setInterval(diasRest, 2000)
}

// ej 4.1 //
function ej6(){
    let socios = []
    do {
        socios = prompt("Dime 10 nombres de socios (separados por comas").split(",")
    } while (socios.length !== 4)
    
    console.log(`Socios:  ${socios}`)
    console.log(`Número de socios: ${socios.length}`)
    console.log(`Socios ordenados: ${socios.sort().join(" -- ")}`)
    console.log(`Socios ordenados inversos: ${socios.reverse().join(" -- ")}`)
    
    function buscar(nombre){
        return socios.includes(nombre)
    }
    console.log(`Está aran?:  ${buscar("aran")}`)

    let borrarSocio = function(){
        console.log(socios)
        socios.pop()
        if(socios.length === 0){
            clearInterval(idInterval)
        }
    }
    idInterval=setInterval(borrarSocio,1000)

    //función forEach
    socios.forEach(function(nombre){
        console.log(nombre);
    })

    let posicion=0
    socios.forEach(elemento => {
        console.log(`${posicion} ${elemento}`)
        posicion+=1
    })

    // función map
    let nuevoSocios = socios.map(elemento => elemento.toUpperCase())
    console.log(nuevoSocios)

    //función every
    let sociosMas4 = socios.every(elemento => elemento.length > 3)
    console.log(sociosMas4)

    //función some
    socios.some(elemento => elemento[0] === a)

}

// ej 4.2 //
function ej7() {
    let size = parseInt(prompt("¿Cuántos alumnos hay?"))
    let alumnos = []

    while (alumnos.length !== size){
        let alumno = prompt("Dime nombre y nota (separado por coma)");
        let [nombre,nota] = alumno.split(",")
        alumnos.push(`${nombre},${nota}`)
    }

    //console.log(alumnos)
    alumnos.forEach(elemento => console.log(elemento))
    
    let suma = 0
    alumnos.forEach(elemento => {
       let info=elemento.split(",")
        suma+=parseInt(info[1])
    })
    
    let media = suma / size
    console.log(`La media es ${media}`)
}

// ej 4.3 //
function ej8() {
    let nombres =[]
    let edades = []
    let totalEdad = 0;

    for (let i=0; i<3; i++) {
        let nom = prompt("Dime un nombre");
        let ed = parseInt(prompt(`Dime la edad de ${nom}`))
        nombres.push(nom)
        edades.push(ed)
    }

    nombres.forEach((elemento,posicion) => {
        console.log(`${posicion}: Nombre ${elemento}, Edad ${edades[posicion]}`)
    })

    // media con reduce
    totalEdad = 0;
    totalEdad = edades.reduce((total, elemento) => total + elemento, 0); 
    console.log(`Media con REDUCE:  ${totalEdad/edades.length}`);

    // media con foreach
    totalEdad = 0;
    edades.forEach((elemento) => totalEdad+=elemento);
    console.log(`Media con FOR EACH: ${totalEdad/edades.length}`);

    // media for of
    totalEdad =0;
    for(let elemento of edades) totalEdad+=elemento;
    console.log(`Media con FOR OF: ${totalEdad/edades.length}`);

    // media for
    totalEdad =0;
    for(let i=0; i<edades.length; i++){totalEdad+=edades[i]};
    console.log(`Media con FOR: ${totalEdad/edades.length}`);
}

function ej9(){

    //borrar por indice
    let pos = parseInt(prompt("Dime la posición a borrar."));
    nombres.splice(pos,1);
    edades.splice(pos,1);
    console.log(`Posición a borrar ${pos}. El listado actual es: ${nombres} y edades ${edades}`);

    //borrar por nombre
    let nombre = prompt("¿Qué alumno quieres borrar?");
    nombres = nombres.filter(elemento => elemento !== nombre);
    let edad = parseInt(prompt("Especifica la edad a borrar"))
    edades = edades.filter(elemento => elemento !== edad);  
    console.log(`Alumno a borrar ${alumno} . El listado de alumnos actual es : ${alumnos} y edades : ${edades}`);

    //mapas
    /*
    todo lo anterior con mapa:
    insertar alumnos
    mostrar info
    media edad
    si existe alumno
    borrar por nombre(clave)
    */

}

/* **** 4.5 MAPA *** */

let alumnos = new Map();
function insertar(){
    let size = parseInt(prompt("¿Cuántos alumnos hay?"))
    for (let i=0; i<size; i++) {
        let nom = prompt("Dime un nombre");
        let ed = parseInt(prompt(`Dime la edad de ${nom}`))
        // let nota = parseInt(prompt(`Dime la nota de ${nom}`))
        // alumnos.set(nom, {edad: ed, nota: nota});
        alumnos.set(nom,ed);
    }

    console.log(alumnos)
}

function info(){
    alumnos.forEach((ed,nom) => {
        console.log(`El alumno ${nom} tiene ${ed} años`)
    })
}

function media(){
    totalEdad = 0;
    edades.forEach((ed) => totalEdad+=ed);
    console.log(`La media de edad es: ${totalEdad/alumnos.size}`);
}
