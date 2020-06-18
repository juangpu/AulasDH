// CLOSURES
// Uma função dentro de uma função, uma closures é a função craida dentro da função "pai" e e la é responsavel pela execução do codigo
// Um closures tem acesso a todos os parametros e variaveis que a função pai está recebendo ou declarando sem precisar passa-los como parametro

function saudacao(nome){
    let mensgem = "Seja bem vindo:";

    function juntarNome(){
        return mensgem + ' ' + nome
    }

    return juntarNome();
}

console.log(saudacao("Juan"));
