let boton = document.getElementById("idAñadir");
let lista = [];

boton.addEventListener("click",insertarProductoEnLista);


function insertarProductoEnLista(){  
    //variable del contenido que quiero obtener:
    let producto = document.getElementById('idProducto').value;

    //añado elemento a la lista (array):
    lista.push(producto);

    //ordeno
    lista.sort();

    borrarLista();
    insertarLista();

}

function borrarLista(){
    //recuperar lista y borar
    let padreUl = document.getElementById("idUl");
    //y mientras el padre tenga hijo, lo borro 1 a 1:
    while (padreUl.firstChild){
    padreUl.removeChild(padreUl.firstChild);
    }
}

function insertarLista(){
    //variable del padre
    let padreUl = document.getElementById("idUl");
    //recorro el array y por cada elemento, creo li con cada producto y 
    //lo inserto al padre (ul):
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