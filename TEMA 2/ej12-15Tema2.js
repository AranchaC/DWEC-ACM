/* EJ 12 */
/*función tradicional*/
function suma(a,b){
    return a+b
}


/*función anónima*/
let suma1 = function(a,b){
    return a+b
}

/*función lambda*/
let suma2 = (a,b) => a+b

/* EJ 13 */
let anyo = parseInt(prompt("Dime un número."))

function esBisiesto(anyo){
    if (anyo %4 == 0){
        return 1
    } else {
        return 0
    }
    
}