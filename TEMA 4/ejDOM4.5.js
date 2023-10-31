//variable del botón y le damos acción con click:
let boton = document.getElementById("idAñadir");
boton.addEventListener("click",insertarProductoEnLista);

let botonBorrar = document.getElementById("idLimpiar");
botonBorrar.addEventListener("click",borrarLista);
//array donde almacenaremos el contenido del input:
let lista = [];
let ultimoElemento;
guardarEnArrayHTML();

function insertarProductoEnLista(){  
    //variable del contenido que quiero obtener:
    let producto = document.getElementById('idProducto').value;

    ultimoElemento = producto;

    if(lista.includes(producto)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El elemento existe!',
            footer: '<a href="">¿Vuelve a itentarlo?</a>'
          })
    }else{
        //añado elemento al array y lo ordeno:
        lista.push(producto);
        // Swal.fire(
        //     'elemento insertado',
        //     'Acepta para continuar',
        //     'success'
        //   )
    }

    borrarLista();
    insertarLista();
}

function guardarEnArrayHTML(){
    let li = document.querySelectorAll("#idUl li");
    li.forEach(elemento => {
        lista.push(elemento.innerHTML);
    })
}

function borrarLista(){
    //recuperar lista y borar
    let padreUl = document.getElementById("idUl");
    // //y mientras el padre tenga hijo, lo borro 1 a 1:
    while (padreUl.firstChild){
        padreUl.removeChild(padreUl.firstChild);
    }
    //otra opción:
    // let hijos = document.querySelectorAll("#idUl li");
    // hijos.forEach (elemento => {
    //     elemento.remove();
    // })
}

function insertarLista(){
    //variable del padre
    let padreUl = document.getElementById("idUl");
    lista.sort();
    //recorro el array y por cada elemento, creo li con cada producto y 
    //lo inserto al padre (ul):
    lista.forEach(producto => {
        //variable que quiero crear
        let li = document.createElement("li");
        //añado contenido al li
        li.innerHTML = producto;
        //añadimos evento a los li
        li.addEventListener("dblclick",eliminarLi);

        if (producto === ultimoElemento){
            li.classList.add("verde");
        }

        //se lo añado al padre
        padreUl.appendChild(li);
    });
}

function eliminarLi(){
    let valor = this.innerHTML;
    lista = lista.filter(elemento => elemento !== valor);
    
    this.remove();
}

function borrarTodo(){
    //borro array
    lista = lista.forEach(elemento => lista.pop())

    borrarLista();

    document.getElementById("idProducto").value = "";
    
}