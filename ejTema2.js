/* EJ 1*/
function ej1() {
    let nombre = prompt("Dime tu nombre")
    let apellido = prompt("Dime tu apellido")

    let num1 = parseInt(prompt("Dime el número 1"))
    let num2 = parseInt(prompt("Dime el número 2"))
    let num3 = parseInt(prompt("Dime el número 3"))

    console.log(`Tu nombre es ${nombre} ${apellido}
    Los números indicados son: ${num1}, ${num2} y ${num3}`) 
}

/* EJ 2 */ 
function ej2() {
    let nombre = prompt("Dime tu nombre")
    let apellido = prompt("Dime tu apellido")

    let num1 = parseInt(prompt("Dime el número 1"))
    let num2 = parseInt(prompt("Dime el número 2"))
    let num3 = parseInt(prompt("Dime el número 3"))

    let suma =num1+num2+num3
    let multi = num1*num2*num3
    let divi = num1/num3

    console.log(`Tu nombre es ${nombre} ${apellido}
    Los números indicados son: ${num1}, ${num2} y ${num3}
    - la suma es ${suma}
    - la multiplicación es ${multi}
    - la división del ${num1} entre el ${num3} es ${divi}
    `) 
}

/* EJ 3 */
function ej3() {
    let num1 = parseInt(prompt("Dime el número 1"))
    let num2 = parseInt(prompt("Dime el número 2"))
    let num3 = parseInt(prompt("Dime el número 3"))

    if (num1 > 10 || num2 > 10 || num3 > 10) {
        console.log(`Has dicho un número mayor que 10.`)
    } else {
        console.log(`Ningunos de los números en mayor que 10.`)
    }
}

/* EJ 4 */
function ej4() {
    let num1 = parseInt(prompt("Dime un número de día."))
    let num2 = parseInt(prompt("Dime un número de mes."))

    if (num1 == 25 && num2 == 12) {
        console.log(`Hoy es Navidad!!`)
    } else {
        console.log(`No es Navidad.`)
    }
}

/* EJ 5 */ 
function ej5(){
    const sueldo = parseInt(prompt("Dime tu sueldo"))
    const anyos = parseInt(prompt("Dime tus años de antigüedad"))
    let sueldoTotal = sueldo;
    const tabla = [];

    if (sueldo < 500 ){
        if (anyos >=10){
            sueldoTotal = sueldo*3
        } else {
            sueldoTotal = sueldo*2
        }      
    } else {
        sueldoTotal = sueldo
    }

    tabla.push({Entrada:sueldo+"\n"+anyos, Salida: sueldoTotal})

    /*let tabla = [ {'Entrada': entrada, 'Salida': sueldoTotal} ]*/
    console.table(tabla)
}

/* EJ 6 */
function ej6(){
    let nota = parseFloat(prompt("Dime tu calificación (con decimales)."))
    let entrada = nota
    let salida

    if (nota < 3){
        salida = `Muy deficiente`
    } else if (nota == 3 || nota < 5) {
        salida = `Insuficiente`
    } else if (nota == 5 || nota < 6 ) {
        salida = `Bien`
    } else if (nota == 6 || nota < 9) {
        salida = `Notable`
    } else {
        salida = `Sobresaliente`
    }
    let tabla = [ {'Entrada': nota, 'Salida': salida} ]
    console.table(tabla)
}

/* EJ 7 */
function ej7(){
    let N = parseInt(prompt("Dime un número."))
    let i = 2
    if (N >= i){
        for (let i=2; i <=N; i++){
            console.log(i)
        }
    }
}

/* EJ 8 */
function ej8(){
    let N = parseInt(prompt("Dime un número."))
    let i = 1
    const impares = []
    const tabla = []

    while (i<=N){
        if (i %2 != 0){
          console.log(i)
          impares.push(i)
        }
        i++
    }
    tabla.push({Entrada: N, Salida: impares.join("\n")})
    console.table(tabla)
}

/* EJ 11 */
function ej11(){
    let num = parseInt(prompt("Dime un número."))
    for (let i=1; i<=num; i++ ){
        let fila = ` `
        for (let j=1; j<=i; j++){
            fila=fila + `*`
        }
        console.log(fila)
    }   
}
/* EJ 11 dos */
function ej11dos(){
    let num = parseInt(prompt("Dime un número."))
    let i=0
    let linea=``
    while (i <= num){
        console.log(linea+=`*`)
        i++
    }
}