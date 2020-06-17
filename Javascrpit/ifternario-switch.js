// IF ternario

let dia = "terça";
// dia == "domingo" é a condição
// pergunta se dia é domingo? se sim retorna "vou..." : <- os dois pontos significa "se não", se não for domingo retorna "fico ..."
let resultado = dia == "domingo"? "Vou para a praia" : "Fico em casa";
console.log(resultado);



// SWITCH
// switch chama a variavel, caso ela for "janeiro" : <- executa, retorna "vou viajar para a Bahia"
// SEMPRE USAR O BREAK NO FIM DE UM CASE, O BREAK SERVE PARA FECHAR UM CASE PARA QUE POSSA SER EXECUTADO
// podemos usar diversos cases, mantendo as regras 
// o default diz que se não for nenhuma dos cases ("Janeiro" e "Fevereiro"), retorna "Vou passar esse mes ..."

let mes = "Abril";
switch(mes){
    case "Janeiro":
        console.log("Vou viajar para a Bahia");
        break;
    case "Fevereiro":
        console.log("Vou viajar para o Sul");
        break;
    default:
        console.log("Vou passar esse mes trabalhando");
}



// --------------------------------------------------------------------------------------------------
// Exercício: Eu tenho classes PLAYGROUND

function fimDeSemana(day){

	switch(day){
    case "segunda":
        console.log("você tem aulas!");
        break;
    case "quarta":
        console.log("você tem aulas!");
        break; 
	case "sexta":
        console.log("você tem aulas!");
        break; 
	default:
		console.log("você não tem aulas");
	}

}

let day = "sabado";

fimDeSemana(day)