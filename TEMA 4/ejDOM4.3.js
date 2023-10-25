let boton = document.getElementById("idEnviar")

boton.addEventListener("click",insertarCheckbox)

function insertarCheckbox(){
    let cantidad = parseInt(document.getElementById('contenido').value)
    let padre = document.getElementById("contenedor");
    
    for (let i=1; i<= cantidad; i++){
        let random = Math.random()
        let check = document.createElement("input")
        let span = document.createElement("span")
        let br = document.createElement("br")

        check.setAttribute("type","checkbox")
        span.innerHTML= random;
     
        check.setAttribute("value",random)
        
        padre.appendChild(check)
        padre.appendChild(span)
        padre.appendChild(br)
        
    }
}