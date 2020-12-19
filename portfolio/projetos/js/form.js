


/*aqui temos o funcionamento do Botão*/
	var variavel =document.querySelector("#adicionar-paciente");
	console.log(variavel);
	variavel.addEventListener("click", function(event){

	var tabela01 = document.querySelector("#tabela");

	var nomes = tabela01.nome.value;
	console.log(nomes);
	var peso = tabela01.peso.value;
	console.log(peso);
	var altura = tabela01.altura.value;
	console.log(altura);

	var pacientejs = document.createElement("tr");

	var nomesjs = document.createElement("td");
	var pesojs = document.createElement("td");
	var alturajs = document.createElement("td");
	var imcjs = document.createElement("td");

	 nomesjs.textContent = nomes;  
	 pesojs.textContent =peso; 
 	 alturajs.textContent = altura;
	 imcjs.textContent = CalcularImc(peso,altura);

	 /*Aquie eu adiciono o estilo na tabela pelo javascript*/
	 nomesjs.setAttribute("class","nomes");
	 pesojs.setAttribute("class","peso");
	 alturajs.setAttribute("class","altura");
	 imcjs.setAttribute("class","imc");

	 

	pacientejs.appendChild(nomesjs);
	pacientejs.appendChild(pesojs);
	pacientejs.appendChild(alturajs);
	pacientejs.appendChild(imcjs);

	var resolver = CalcularImc(peso,altura);
	console.log(resolver);
	retorna(resolver);
	
	var tabela = document.querySelector("#todostr");

	tabela.appendChild(pacientejs);




/*impede que a pagina recarregue*/
	event.preventDefault();
	

});
	document.write(nome.innerHTML);

function retorna(resolver){

	var troca = document.querySelector("#troca");
	 
	var imc = resolver;
	

	if(imc < 18.5){
			troca.textContent="Voce esta abaixo do peso "
	}if (imc > 18.5 && imc <= 24.9){

			troca.textContent="Voce com peso ideal "
	
	}if(imc>24.9 && imc <=29.9){

		troca.textContent="Você está pré Obeso"
	}if(imc>29.9 && imc <=34.9){
		
		troca.textContent="Você está  Obesidade grau I"

		
	}if(imc>34.9 && imc <=39.9){
    
     troca.textContent="Você está com obsidade grau II"
		
	}if (imc>39.9){
		troca.textContent="Você esta com obsidade Grau III"
	
	}
		console.log(imc);
		
	
}
