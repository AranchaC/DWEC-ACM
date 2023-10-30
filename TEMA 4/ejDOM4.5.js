let boton = document.getElementById("idAñadir");
let lista = [];

boton.addEventListener("click",insertarProductoEnLista);


function insertarProductoEnLista(){  
    //variable del contenido que quiero obtener
    let producto = document.getElementById('idProducto').value;

    //añado elemento a la lista
    lista.push(producto);

    //ordeno
    lista.sort();
    console.log(lista);
    borrarLista();
    insertarLista();

}

function borrarLista(){
    //recuperar lista y borar
    let padreUl = document.getElementById("idUl");
    //recupero hijos para borrarlos
    while (padreUl.firstChild){
    padreUl.removeChild(padreUl.firstChild);
    }
}

function insertarLista(){
    //ahora tengo un array con li's
    //variable del padre
    let padreUl = document.getElementById("idUl");
    lista.forEach(producto => {
        //variable que quiero crear
        let li = document.createElement("li");
        //añado contenido al li
        li.innerHTML = producto;
        //se lo añado al padre
        padreUl.appendChild(li);
    });


}
///pongo elemento, lo almaceno en el array:
// con foreach,
//push y sort