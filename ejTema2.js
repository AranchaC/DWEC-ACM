/* EJ 1*/


/* EJ 2 */ /*
let nombre = prompt("Dime tu nombre")
let apellido = prompt("Dime tu apellido")
//console.log(`Tu nombre es ${nombre}`)

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
`) */

/* EJ 3 */


/* EJ 5 */
let sueldo = prompt("Dime tu sueldo")
let anyos = prompt("Dime tus años de antigüedad")
let sueldoTotal

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

console.log(``)
