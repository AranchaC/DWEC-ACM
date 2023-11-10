// VARIABLES GLOBALES a UTILIZAR
let nombre_j1,nombre_j2;

let tiradas_j1 =0 
let tiradas_j2=0;

let puntos_j1=0
let puntos_j2=0;

let contador_partidas=0;
let infoPartida=null;

let ganador=null;
let perdedor=null;




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
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ1").src = `img/${aleatorio}.png`;
	puntos_j1 = puntos_j1 + aleatorio;

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
	let aleatorio = generarNumeroAleatorio();
	document.getElementById("dadoJ2").src =`img/${aleatorio}.png`;
	
	//Actualizar puntuación
	puntos_j2 = puntos_j2 + aleatorio;
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
			Swal.fire(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j1} !!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
			ganador=document.getElementById("idInputNombreJ1").value
			perdedor=document.getElementById("idInputNombreJ2").value	
							;
		} else if (puntos_j1 < puntos_j2) {				
			Swal.fire(
				`Partida Finalizada, ¡¡¡ Vencedor ${nombre_j2} !!!`,
				`${puntos_j2} puntos`,
				'success'
			  )
			ganador=document.getElementById("idInputNombreJ2").value
			perdedor=document.getElementById("idInputNombreJ1").value
			
		} else{
			
			Swal.fire(
				`Partida Finalizada, ¡¡¡EMPATEEEE!!!`,
				`${puntos_j1} puntos`,
				'success'
			  )
		}

		document.getElementById("idBotonIniciar").removeAttribute('disabled')
		
		gestionJugadores();

		gestionPuntuacion();
		
	}	
	
}
/********************************************************
*  APARTADO 1 : Implementar reloj del juego
	-> Mostrar en la parte superior del juego la fecha actual del sistema. Debe ser actualizada cada segundo. 
*******************************************************/
function mostrarReloj(){
	let f = new Date()
	let hora = f.getHours()
	let minutos = f.getMinutes()
	let segundos = f.getSeconds()
	//usar setInterval
	let horaFormat = `${hora}:${minutos}:${segundos}`;
	document.querySelector('#idReloj span').innerHTML = horaFormat
}
setInterval(mostrarReloj, 1000);

/********************************************************
*  APARTADO 2 : Definir función para número aleatorio.
	->  Implementar la función “generarNumeroAleatorio()”, utilizada para obtener un número en el intervalo[1-6], 
	así simular una tirada de dados.
*******************************************************/
function generarNumeroAleatorio(){
	return Math.floor(Math.random() * 6 )+ 1;
}

/*************************************************************
 *  APARTADO 3 : Gestión de jugadores
	-> Crear una variable llamada jugadores, para almacenar el nombre de los diferentes jugadores.
	Debe ser del tipo de dato asociado a una colección que solo almacena valor únicos(¿set? ¿Map? ¿Array?).
	Al finalizar cada partida el nombre de todos los jugadores debe ser actualizado en el área de jugadores. 
	No pueden aparecer nombres repetidos en el listado.
 *************************************************************/

let jugadores = new Set();
let jugadoresLista = document.getElementById("idNombreJugadores");
let cadena = "";
function gestionJugadores(){
	let cadena = "";
	jugadores.add(nombre_j1);
	jugadores.add(nombre_j2);

	jugadores.forEach((elemento) => {
		cadena += `${elemento}, `;
	})
	jugadoresLista.innerHTML = cadena;	
}

/********************************************************
*  APARTADO 4 : Gestión de resultados
	-> Crear un array llamado resultados con información de todas las partidas. 
	cada elemento del array debe tener la estructura: 	puntuacion,ganador,jugador 
	Por ejemplo:
	14-5,Agustin,Alumno1

	Al finalizar cada partida debes insertar la información correspondiente en el área 
	de resultados. 
    	• Debes crear los elementos tr y td utilizando funciones del DOM. 
    	• Cada nueva fila debe tener la clase “mostrar”
    	• Al hacer click sobre una fila, debes eliminar la fila de a tabla
*******************************************************/

function eliminarFila(event){
	if(confirm("Desea eliminar la fila"))
	this.remove();
}
let resultados = [];

//cada vez que se acaba partida:
function gestionPuntuacion() {
	//creo obj json y lo pongo en el array:
	let objInfo = {
		"puntuacion": `${puntos_j1}-${puntos_j2}`,
		"ganador": `${ganador}`,
		"perdedor": `${perdedor}`
	}
	resultados.push(objInfo);
	//console.log(resultados);

	let conten = document.getElementById("idEstadisticas");

	let fila = document.createElement('tr');
	fila.setAttribute('class','mostrar');
	let columPunt = document.createElement('td');
	let columGan = document.createElement('td');
	let columPer= document.createElement('td');
	
	//añado contenido
	columPunt.innerHTML=objInfo.puntuacion;
	columGan.innerHTML=objInfo.ganador;
	columPer.innerHTML=objInfo.perdedor;

	fila.appendChild(columPunt);
	fila.appendChild(columGan);
	fila.appendChild(columPer);

	fila.addEventListener("dblclick",eliminarFila)

	conten.appendChild(fila);	

}


/*************************************************************
 ***********************************************************
 ***********************************************************/
 function validarInformacionInicial(){
	if(document.getElementById("idInputNombreJ1").value == false){		
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el nombre del Jugador 1!'			
		  })
		return false;
	}
	if(document.getElementById("idInputNombreJ2").value == false){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el nombre del Jugador 2!'			
		  })
		return false;
	}

	if(document.getElementById("idNumTiradas").value == false){		
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debes indicar el Número de tiradas!'			
		  })
		return false;
	}

	let tiradas = parseInt(document.getElementById("idNumTiradas").value);
	if( isNaN(tiradas) || (!isNaN(tiradas) && (tiradas<=0))){		
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'el número de tiradas debe ser superior a 0!'			
		  })
		return false;
	}

	return true;
}