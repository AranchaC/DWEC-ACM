function insertarCheckbox(){

    let check = document.createElement("input")
    check.setAttribute("type",checkbox)

    let value = Math.random()

    check.setAttribute("value",value)

    let padre = document.getElementById("form");
    padre.appendChild(check)
}