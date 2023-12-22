let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);

let form=document.getElementById("id_form");
let autonomia=form["autonomia"];
let provincia=form["provincia"];

provincias.forEach((pro,aut)=>{
    let op=document.createElement("option");
    op.value=aut;
    op.innerHTML=aut;
    autonomia.addEventListener('click',cambiaProvs);
    autonomia.appendChild(op);
    
})

function cambiaProvs(){
    let provs=provincias.get(this.value);
    provincia.innerHTML="";
    for(pro in provs){
        let op=document.createElement("option");
        op.value=provs[pro];
        op.innerHTML=provs[pro];
        provincia.appendChild(op);
        provincia.addEventListener('click',habilita)
        provincia.disabled=false;
    }
    deshabilita()

}

function habilita(){
    form["submit"].disabled=false;
}
function deshabilita(){
    form["submit"].disabled=true;
}

//}~~~~~~~~~~~~~~~~~~~ Validación ~~~~~~~~~~~~~~~~~~~~~~{

form["submit"].addEventListener('click',validar);

function validar(e){
    e.preventDefault();
    
    let valido=true;
    let flag=false;

    let autSel=autonomia.value;
    let provSel=provincia.value;


    //Limpieza campo de error
    document.getElementById("idErrorProvincia").innerHTML=""
    document.getElementById("idErrorAutonomia").innerHTML=""

    if(provincias.has(autSel)===false){
        
        document.getElementById("idErrorAutonomia").innerHTML="Autonomia incorrecta"        

    }else if(provincias.get(autSel).includes(provSel) === false){
        
        document.getElementById("idErrorProvincia").innerHTML="Provincia incorrecta"        
               
    }else{
        alert("formulario correcto")
    }
  

}