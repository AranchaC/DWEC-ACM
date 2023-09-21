/* EJ 1*/
function ej1() {
    let nombre = prompt("Dime tu nombre")
    let apellido = prompt("Dime tu apellido")

    let num1 = parseInt(prompt("Dime el número 1"))
    let num2 = parseInt(prompt("Dime el número 2"))
    let num3 = parseInt(prompt("Dime el número 3"))

    let suma =num1+num2+num3
    let multi = num1*num2*num3
    let divi = num1/num3

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
    let sueldo = parseInt(prompt("Dime tu sueldo"))
    let anyos = parseInt(prompt("Dime tus años de antigüedad"))
    let sueldoTotal
    let entrada = sueldo + '\n' + anyos

    if (sueldo < 500 && anyos >= 10){
        sueldoTotal = sueldo*3
    }
    else {
        if (sueldo <500 && anyos <10){
            sueldoTotal = sueldo*2
        } else {
            sueldoTotal = sueldo
        }
    }
    let tabla = [ {'Entrada': entrada, 'Salida': sueldoTotal} ]
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