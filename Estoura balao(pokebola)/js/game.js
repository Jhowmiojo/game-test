$(document).ready(loading);

function loading(){
	var tempoCriacao = 2000;
	var c = 1;
    var vidas = 1;
    var pontos = 0;
    var velocidadeAnima = 10000;
    var criador = null;

    $("#hud").html("<p>Vidas:"+vidas+"</p>  <p>Pontos:"+pontos+"</p>")

	setTimeout(	criaBalao , tempoCriacao);

function criaBalao(){
	console.log("criando um balão");

	$("#ceu").append("<div class='balao' id='b_"+c+"'></div>");
	$("#b_"+c).animate( {top: "-200px"} , velocidadeAnima, seMata);
    $("#b_"+c).click(mataBalao)

	var sorteLeft = Math.random() * 100;
	sorteLeft = parseInt(sorteLeft);
	$("#b_"+c).css ( "left" , sorteLeft+"%" );


	tempoCriacao *= 0.95;

    if (vidas>0){
	criador = setTimeout(	criaBalao , tempoCriacao);
	c++;
    }
}

    function seMata(){
        $(this).remove();

        vidas--;
        $("#hud").html("<p>Vidas:"+vidas+"</p>  <p>Pontos:"+pontos+"</p>");

        if (vidas==0){
            $("#msg_fim").css("visibility","visible");
            $(".balao").stop();
            $(".balao").remove();
            clearTimeout(criador);

        }
    }



    function mataBalao(){
        
        console.log("funfou");
        $(this).remove();
        pontos++;
        $("#hud").html("<p>Vidas:"+vidas+"</p>  <p>Pontos:"+pontos+"</p>");
				if (pontos > 30)
				alert("Vitorioso");
                $(this).stop();

    }

}
