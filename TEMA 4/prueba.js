// Restar fechas
let hoy =new Date();
let micumple=new Date('1995-11-28')
var diferenciaEnMilisegundos = hoy-micumple;
var res = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
console.log(res)
// Restar fechas


// MAPAS
let palabras =new Map([
    ["palabra1","david"],
    ["palabra2","alvaro"],
    ["palabra3","damago"]
]);

palabras.forEach(function (valor, clave) {
    console.log(`Clave: ${clave}, Valor: ${valor}`)
});

let existe=palabras.has("palabra1")
console.log(existe)

let borrar=palabras.delete("palabra35")
console.log(borrar)

let insertar=palabras.set("nuevaClave","nuevoValor")
// MAPAS


// SET
let setColores=new Set([
    "david", 1, "galletita"
])

setColores.forEach(element => {
    console.log(element)
});

let añadir=setColores.add("insertado")

let existee=setColores.has(1)
console.log(existee)

// tambien hay: .delete (para borrar), .size (para ver tamaño), .clear (para borrar todo)
// SET


// ARRAY
let array1=new Array(
    "david",
    "galletita",
    "damago"
)

array.forEach(element => {
    console.log(element)
});
// se puede agregar con .push, borrar con .pop, 
// ARRAY


// JSON
let person = {
    "Nombre: ":"David",
    "Edad: ": 25,
    "Sexo: ": "masculino"
}

console.log(persona)
// JSON


// CLASES
class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
}

let persona1=new Persona("David", 28)

console.log(persona1)
// CLASES



setInterval///setTimeOut

let hoy1=new Date();
let fechaConcierto=new Date("2024-04-04")

let diferenciaEnDias=fechaConcierto - hoy
let resultado=Math.floor(diferenciaEnDias/(1000*60*60*24))
console.log(`Quedan ${resultado} dias para el concierto.`)

function unaVez(){
    let hoy=new Date();
    console.log(`${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`)
}
   let reloj=setInterval(unaVez,1000);
    clearInterval(reloj)

function masVeces(){
    console.log("Esto solo ocurre una vez")
}
let hola=setTimeout(masVeces,5000)
clearInterval(hola)

// setInterval///setTimeOut

// SET

let set=new Set([
    "persona1",
    "persona2",
    "persona3",
    "persona4"
])

let set2=new Set()
set2.add("luis")
set2.add("gallego")
set2.add("deiv")

set2.forEach(element => {
    console.log(element)
});

set.forEach(element => {
    console.log(element)
});

console.log(set.has("persona2"))
// SET

// MAP

let mapa=new Map([
    ["luis","ayllon"],
    ["alvaro", "gallego"],
    ["david","martin"]
])

let mapa2=new Map();
mapa.set("Daniel","Marin")

mapa.forEach(function(valor,clave) {
    console.log(`Nombre: ${clave}, apellido: ${valor}.`)
});

// ARRAY

let array=[]
array.push("Luis")
array.push("deiv")
array.push("galle")

array.forEach(element => {
    console.log(element)
});


// JSON

let persona={
    "nombre":"david",
    "apellidos":"martin",
    "edad":28
}
console.log(persona)


// CLASES

class humano{
    constructor(nombre,apellidos,edad){
    this.nombre=nombre    
    this.apellidos=apellidos
    this.edad=edad;
    }
}

let david=new humano("david", "martin",28);
console.log(david.edad)

// CLASES