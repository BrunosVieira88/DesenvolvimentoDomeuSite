

var pacientes= document.querySelectorAll(".paciente");





for( var i = 0; i < pacientes.length; i++){

	
var paciente = pacientes[i];



var tdpeso = paciente.querySelector(".peso");
var peso = tdpeso.textContent;

var tdaltura=paciente.querySelector(".altura");
var altura=tdaltura.textContent; 

var tdimc = paciente.querySelector(".imc");
var imc = peso/(altura*altura);




var pesovalido = true
var alturavalido= true 

	if(peso < 1 || peso > 500 ) {

		
		pesovalido=false; 
		tdimc.textContent= "valor peso é invalido";
		paciente.classList.add("erro");


	}else{
	
	pesovalido=true
	
	}
	if (altura > 4 ){

	
	tdimc.textContent= "valor Altura é invalido";
	paciente.classList.add("erro");


	}else{
	
	alturavalido = true; 
	
	}if (pesovalido && alturavalido){
		
		var imc = CalcularImc(peso,altura);
		tdimc.textContent=imc;
		paciente.classList.add("fundo");

	
			}
}

function CalcularImc(peso,altura){


var imc = 0; 

imc = peso / (altura*altura);
return imc.toFixed(2);

}


	
