let boton = document.getElementById("idAñadir");
let lista = [];

boton.addEventListener("click",insertarProductoEnLista);
boton.addEventListener("click",borrarLista);
boton.addEventListener("click",insertarLista);

function insertarProductoEnLista(){
    //variable que quiero crear
    let li = document.createElement("li");
    //variable del contenido que quiero obtener
    let producto = document.getElementById('idProducto').value;
    //añado contenido al li
    li.innerHTML = producto;

    //añado elemento a la lista
    lista.push(li);

    
    //variable del padre
    let padreUl = document.getElementById("idUl");
  
    //se lo añado al padre
    padreUl.appendChild(li);

    
}

function borrarLista(){

}

function insertarLista(){
    //ahora tengo un array con lis

}