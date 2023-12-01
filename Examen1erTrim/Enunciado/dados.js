// VARIABLES GLOBALES a UTILIZAR
let nombre_j1,nombre_j2;

let tiradas_j1=0 
let tiradas_j2=0

let puntos_j1=0
let puntos_j2=0

let dado_j1=0
let dado_j2=0

let contador_partidas=0;
let infoPartida=null;

let ganador=null;
let perdedor=null;

const listadoDados = new Set() 

let jugadorObj




function iniciar(){

	if(validarInformacionInicial()==false){		
		return false;
	}

	//Iniciamos contador de partidas
	contador_partidas = contador_partidas+1 
	ganador=null;
	perdedor=null;
	document.getElementById("idBotonIniciar").setAttribute('disabled',"true");
	document.getElementById("dadoJ1").src = "img/0.png";
	document.getElementById("dadoJ2").src = "img/0.png";
	puntos_j1=puntos_j2=0;

	// Recogida de valores
	nombre_j1=document.getElementById("idInputNombreJ1").value;
	nombre_j2=document.getElementById("idInputNombreJ2").value;
	tiradas_j1=document.getElementById("idNumTiradas").value;
	tiradas_j2=tiradas_j1;

	document.getElementById("idPuntuacionJ1").innerHTML="PUNTUACIÓN: - 00 -";
	document.getElementById("idPuntuacionJ2").innerHTML="PUNTUACIÓN: - 00 -";
	
	//Empieza el juego!!!
	// Cargar información en el tablero de los jugadores
	document.getElementById("idTablero").classList.remove('ocultar');
	
	document.getElementById("idNombreJ1").innerHTML = `JUGADOR 1 : ${nombre_j1}`;
	document.getElementById("idNombreJ2").innerHTML = `JUGADOR 2 : ${nombre_j2}`;

	document.getElementById("idBotonTirarJ1").removeAttribute('disabled');
	document.getElementById("idBotonTirarJ2").removeAttribute('disabled');

	document.getElementById("tiradasJ1").innerHTML="TE QUEDAN " + tiradas_j1 + " TIRADAS";
	document.getElementById("tiradasJ2").innerHTML="TE QUEDAN " + tiradas_j2 + " TIRADAS";
}

function tiradaJ1(){
	// Actualizar Dado
	dado_j1 = generarNumeroAleatorio();
	document.getElementById("dadoJ1").src = `img/${dado_j1 }.png`;
	puntos_j1 = puntos_j1 + dado_j1 ;

	//Actualizar puntuación
	document.getElementById("idPuntuacionJ1").innerHTML=`PUNTUACIÓN: ${puntos_j1}`;
	
	//Actualizar número de tiradas
	tiradas_j1 = parseInt(tiradas_j1) - 1;
	document.getElementById("tiradasJ1").innerHTML=`TE QUEDAN ${tiradas_j1} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}


function tiradaJ2(){
	// Actualizar Dado
	dado_j2  = generarNumeroAleatorio();
	document.getElementById("dadoJ2").src =`img/${dado_j2}.png`;
	
	//Actualizar puntuación
	puntos_j2 = puntos_j2 + dado_j2;
	document.getElementById("idPuntuacionJ2").innerHTML=`PUNTUACIÓN: ${puntos_j2}`;
	
	//Actualizar número de tiradas
	tiradas_j2 = tiradas_j2 - 1;
	document.getElementById("tiradasJ2").innerHTML=`TE QUEDAN ${tiradas_j2} TIRADAS`; 
	
	// Comprobar si existe algún ganador
	comprobarGanador();
}


function comprobarGanador(){	
	
	if (tiradas_j1 == 0){											// ¿Ha terminado jugador 1?
		document.getElementById("idBotonTirarJ1").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0){											// ¿Ha terminado jugador 2?
		document.getElementById("idBotonTirarJ2").setAttribute('disabled', "true");
	}

	if (tiradas_j2 == 0 && tiradas_j1 == 0) {						// ¿Han terminado ambos jugadores?
		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		if (puntos_j1 > puntos_j2){				
			alert(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
			ganador=nombre_j1
			perdedor=nombre_j2	
							;
		} else if (puntos_j1 < puntos_j2) {				
			alert(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!!`,
				`${puntos_j2} puntos`,
				'success'
			  )
			ganador=nombre_j2
			perdedor=nombre_j1
			
		} else{
			
			alert(
				`Partida Finalizada, ¡¡¡EMPATEEEE!!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
		}

		document.getElementById("idBotonIniciar").removeAttribute('disabled')				
		anadirEstadistica()
		
	}	

	gestionDados()

	
}


/********************************************************
*  APARTADO 1 : Estado de la partida y generarNumeroAleatorio
*******************************************************/

function estadoPartida (){
	//accedo al contenedor:
	let contenEstado = document.getElementById("idInformacion");
	//creo varible de contenido:
	let mensaje = ""

	if (puntos_j1 > puntos_j2){
		mensaje = `Va ganando ${nombre_j1} (jugador 1), 
			con ${puntos_j1} puntos y ${tiradas_j1} tiradas restantes`;
	} if (puntos_j1 < puntos_j2) {
		mensaje = `Va ganando ${nombre_j2} (jugador 1), 
			con ${puntos_j2} puntos y ${tiradas_j2} tiradas restantes`;
	} if (puntos_j1 === puntos_j2) {
		mensaje = `Empate entre ${nombre_j1} y ${nombre_j2} a ${puntos_j1} puntos, 
			con ${tiradas_j1} y ${tiradas_j2} tiradas restantes cada uno`
	}

	//introduzco contenido al contenedor:
	contenEstado.innerHTML = mensaje;
}

//creo evento de intervalo, pasando la función cada 7 seg (7000);
setInterval(estadoPartida, 7000);

//función num aleatorio:
function generarNumeroAleatorio(){
	return Math.floor(Math.random()*6)+1;
}

/*************************************************************
 *  APARTADO 2 : Gestión de Dados
 *************************************************************/

//creo variable set para que no haya repetidos:
let listaDados = new Set();

function gestionDados(){
	//acceso al contenedor:
	let contenDados = document.getElementById("idListadoDados");

	let mensaje = "";

	if (dado_j1 != 0) {
		listaDados.add(dado_j1);

	} if (dado_j2 != 0){
		listaDados.add(dado_j2);
	}

	//Recorro set para ir cocatenando el nº de dado al mensaje:
	listaDados.forEach((dado) => {
		mensaje += `${dado}, `;

		// si el set contiendo los nºs del 1 al 6, el mensaje se sustitutye por TODOS:
		if (listaDados.has(1) && listaDados.has(2) && listaDados.has(3) 
			&& listaDados.has(4) && listaDados.has(5) && listaDados.has(6 )) {
			mensaje = "TODOS";
		}
	})

	//introduzco contenido al contenedor:
	contenDados.innerHTML = mensaje;

 }

/*************************************************************
 *  APARTADO 3 : Definir Clase jugador
 *************************************************************/

 class jugador {   
	
	constructor(nombre, puntos) {
		this._nombre = nombre;
		this._puntos = puntos;
		this._estado = "sin informacion";
		this._victorias = 0;
	}

	get nombre (){
		return this._nombre;
	}

	set nombre (valor){
		this._nombre = valor;
	}

	get puntos (){
		return this._puntos;
	}

	set puntos (valor){
		this._puntos = valor;
	}
	
	incrementarVictorias() {
		return parseInt(this._victorias += 1) ;
	}

	static info(){
		return "Esta clase ha sido diseñada por Arancha";
	}
	
	toString(){
		return String(`Jugador: ` + this._nombre + `, puntos ` + this._puntos + ` y victorias: `+ this._victorias);
	}

	valueOf(){
		return parseInt(this._puntos);
	}
  
   } 
   
   //creo jugador1 de tipo jugador:
   let jugador1 = new jugador("Arancha", 5);


/********************************************************
*  APARTADO 4 : Tabla de Resultados
*******************************************************/

//creo función borrar fila:
function eliminarFila(){
	return this.remove();
}

//creo array resultados:
let resultados = [];

function anadirEstadistica(){
	let objJ1 = {
		"Nombre" : `${nombre_j1}`,
		"Puntos" : `${puntos_j1}`
	}
	let objJ2 = {
		"Nombre" : `${nombre_j2}`,
		"Puntos" : `${puntos_j2}`
	}
	
	//añado obj al array:
	resultados.push(objJ1, objJ2)
	
	//accedo al contenedor:
	let contenResultados = document.getElementById("idContenedorEstadistica");

	//creo filas, 1 por cada elemento del array:
	//y por cada fila:
		//- añado clase y atributo:
		//- añado contenido:
	
	resultados.forEach((elemento) => {
		let fila = document.createElement('li');
			fila.classList.add("verde");
			fila.setAttribute("tittle", `${elemento.Nombre}`);
			fila.innerHTML = `${elemento.Nombre}, ${elemento.Puntos} puntos.`;
		contenResultados.appendChild(fila);
		fila.addEventListener("click", eliminarFila)
	})

	/*
	let filaJ1 = document.createElement("li");
		filaJ1.classList.add("verde");
		filaJ1.setAttribute("tittle", `${objJ1.Nombre}`)
		filaJ1.innerHTML = `${objJ1.Nombre}, ${objJ1.Puntos} puntos.`;

	let filaJ2 = document.createElement("li");	
		filaJ2.classList.add("verde");
		filaJ2.setAttribute("tittle", `${objJ2.Nombre}`)
		filaJ2.innerHTML = `${objJ2.Nombre}, ${objJ2.Puntos} puntos.`;

	//añado filas al contenedor:
	contenResultados.appendChild(filaJ1);
	contenResultados.appendChild(filaJ2);

	//creo evento con la función eliminar fila y acción click:
	//aplico tanto a la filaJ1 como a la filaJ2:
	filaJ1.addEventListener("click", eliminarFila)
	filaJ2.addEventListener("click", eliminarFila)
	*/

}



/*************************************************************
 *******************VALIDACIONES******************************
 ***********************************************************/
 function validarInformacionInicial(){
	if(document.getElementById("idInputNombreJ1").value == false){		
		
		alert('Debes indicar el nombre del Jugador 1!')
		
		return false;
	}
	if(document.getElementById("idInputNombreJ2").value == false){
		
		alert('Debes indicar el nombre del Jugador 2!')
		
		return false;
	}

	if(document.getElementById("idNumTiradas").value == false){		
		
		alert('Debes indicar el Número de tiradas!'	)		
		 
		return false;
	}

	let tiradas = parseInt(document.getElementById("idNumTiradas").value);
	if( isNaN(tiradas) || (!isNaN(tiradas) && (tiradas<=0))){		
		
		alert('el número de tiradas debe ser superior a 0!')

		return false;
	}

	return true;
}