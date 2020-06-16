// modo declaração

function somar(a, b){
    return a + b
}

let resultadoSoma = somar(1, 2);
console.log(resultadoSoma);

//  modo expressão

const multiplicar = function(a, b){
    return a*b;
}

let resultadoMultiplicar = multiplicar(2, 13);
console.log(resultadoMultiplicar);

// EXEMPLO SEM GUARDAR A FUNÇÃO EM UMA VARIAVEL, APENAS IMPIMINDO COM O console.log

function dividir(a, b){
    return a/b;
}
console.log(dividir(4, 2));

// -------------------------------------------------------------------------------------------------------
// Crie a função ePar. Ele deve receber um número como  parâmetro e retorna um boolean (true/false) indicando se esse número é divisível por dois 

function ePar(n){
    if (n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(ePar(5));

// ---------------------------------------------------------------------------------------------------
// Exercício: Declarando três funções PLAYGROUND

function anterior(n){
    return (n - 1);
}
function triplo(n){
    return (n * 3);
}
function anteriorDoTriplo(n){
    return (triplo(n) - 1);
}
console.log(anteriorDoTriplo(6))