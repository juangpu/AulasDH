let resultadoUsuario = 0;
let resultadoComputador = 0;
const userScore_span = document.querySelector("#userScore");
const compScore_span = document.querySelector("#compScore");
const result_p = document.querySelector("#result");
const scores_p = document.querySelector("#scores");
const paperButton_img = document.querySelector("#paperButton");
const rockButton_img = document.querySelector("#rockButton");
const scissorsButton_img = document.querySelector("#scissorsButton");


function vaiGanharVaiPerder() {
    if (resultadoUsuario > resultadoComputador) {
        //usuario vencendo
        scores_p.style.color = "#26ff63";
        scores_p.style.borderColor = "#26ff63";
    } else if (resultadoUsuario < resultadoComputador) {
        //computador vencendo
        scores_p.style.color = "#fc121b";
        scores_p.style.borderColor = "#fc121b";
    } else {
        // empate
        scores_p.style.color = "#ffffff"
        scores_p.style.borderColor = "#ffffff";
    }    
}


function jogo(cliqueUsuario) {
    cliqueComputador = ["rock","paper", "scissors"]
    n = (Math.floor(Math.random() * 3));
    jogadaComputador = cliqueComputador[n];


    switch(cliqueUsuario + jogadaComputador) {
        // vitória do usuário
        case "rockButtonscissors":
        case "paperButtonrock":
        case "scissorsButtonpaper":
            resultadoUsuario++;
            vaiGanharVaiPerder();
            userScore_span.innerHTML = resultadoUsuario;
            document.getElementById(cliqueUsuario).classList.add('green-glow');
            setTimeout(() => { document.getElementById(cliqueUsuario).classList.remove('green-glow') }, 800);
            result_p.innerHTML = cliqueUsuario + " (você) ganha de " + jogadaComputador + " (computador)";
            break;

        // vitória do computador
        case "rockButtonpaper":
        case "paperButtonscissors":
        case "scissorsButtonrock":
            resultadoComputador++;
            vaiGanharVaiPerder();
            compScore_span.innerHTML = resultadoComputador;
            document.getElementById(cliqueUsuario).classList.add('red-glow');
            setTimeout(() => { document.getElementById(cliqueUsuario).classList.remove('red-glow') }, 800);
            result_p.innerHTML = cliqueUsuario + " (você) perde de " + jogadaComputador + " (computador)";
            break;

        //empates
        case "rockButtonrock":
        case "paperButtonpaper":
        case "scissorsButtonscissors":
            vaiGanharVaiPerder();
            document.getElementById(cliqueUsuario).classList.add('gray-glow');
            setTimeout(() => { document.getElementById(cliqueUsuario).classList.remove('gray-glow') }, 800);
            result_p.innerHTML = cliqueUsuario + " (você) empata com " + jogadaComputador + " (computador)";
            break;

        // se der algum erro
        default:
            result_p.innerHTML = "Aconteceu algum erro faça sua jogada novamente!";
    }
}

function principal(){
    rockButton_img.addEventListener("click", () => jogo("rockButton"))
    paperButton_img.addEventListener("click", () => jogo("paperButton"))
    scissorsButton_img.addEventListener("click", () => jogo("scissorsButton"))
}

principal()