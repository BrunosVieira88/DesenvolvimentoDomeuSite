function r(){

var msg = document.querySelector("#mensagem")
var fotos = document.getElementById("foto")
var dia = new Date()
var hoje = dia.getHours()
var min = dia.getMinutes()


console.log(fotos)


if(hoje >= 0 && hoje < 12){


	mensagem.innerHTML ="Agora são "+hoje+" :"+min+" da manhã"
	fotos.src="imagens/manha.png"

}else if(hoje > 12 && hoje <= 18 ){

	mensagem.innerHTML ="Agora são "+hoje+" :"+min+"da tarde"
	fotos.src="imagens/tarde.png"


}else{

	mensagem.innerHTML ="Agora são "+hoje+" :"+min+" da noite "
	fotos.src= "imagens/noite.png"

	event.preventDefault();
}


}