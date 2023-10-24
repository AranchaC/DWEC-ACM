function insertarCheckbox(){
    let cantidad = parseInt(document.getElementById('contenido').value)
    let padre = document.getElementById("contenedor");
    
    for (let i=1; i<= cantidad; i++){
        let check = document.createElement("input")
        check.setAttribute("type","checkbox")

        let value = Math.random()
        check.setAttribute("value",value)

        padre.appendChild(check)
        
    }

}