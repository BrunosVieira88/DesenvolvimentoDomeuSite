

var trocaFrase = document.getElementById("aguarde")
	

	trocaFrase.addEventListener("click",clicar)
	trocaFrase.addEventListener("mouseenter",saiu)
	trocaFrase.addEventListener("mouseout",entrou)



function clicar(){

	
	trocaFrase.innerText = "Clicou";
	trocaFrase.style.background = "red"

}
function saiu(){

	trocaFrase.innerText = "entrou"
	trocaFrase.style.background="#DA70D6"
}
function entrou(){

	trocaFrase.innerText="saiu"
	trocaFrase.style.background="#0000FF"
}

