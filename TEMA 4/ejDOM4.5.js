let boton = document.getElementById("idAñadir");
let lista = [];

boton.addEventListener("click",insertarProductoEnLista);


function insertarProductoEnLista(){
    //variable que quiero crear
    let li = document.createElement("li");
    //variable del contenido que quiero obtener
    let producto = document.getElementById('idProducto').value;
    //añado contenido al li
    li.innerHTML = producto;

    //añado elemento a la lista
    lista.push(producto);

    //ordeno
    lista.sort();
    console.log(lista);
    borrarLista();
    insertarLista();

    //variable del padre
    let padreUl = document.getElementById("idUl");
    //se lo añado al padre
    padreUl.appendChild(li);
 
}

function borrarLista(){
    //recuperar lista y borar
    let padreUl = document.getElementById("idUl");
    while (padreUl.children > 0){
        padreUl.removeChild(padreUl.firstChild[0]);
    }
}

function insertarLista(){
    //ahora tengo un array con li's


}
///pongo elemento, lo almaceno en el array:
// con foreach,
//push y sort