const somar1 = (numeroA, numeroB) => numeroA + numeroB;

const calculadora1 = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora1(2, 4, somar1));

// -----------------------------------------------------------------------------------------------------
function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome + ' prazer em conhecê-lo';
};

function iniciais(nome, sobrenome){
    return nome[0] + sobrenome[0];
}

function saudar(nome, sobrenome, callback){
    return 'Olá Sr. ' + callback(nome, sobrenome) + '!';
};

console.log(saudar('Juan', 'Urrutia', nomeCompleto));



// ========================================================================================================
// Exercício: Passando um Callback - PLAYGROUND

function dobro(n){
    return n * 2;
};

function triplo(n){
    return n * 3;
};

function aplicar(n, callback){
    return callback(n);
};

console.log(aplicar(3, triplo));


// ===========================================================================================================
// Exercício: Façamos uma calculadora - PLAYGROUND

function somar(n1, n2){
    return n1 + n2;
};

function subtrair(n1, n2){
    return n1 - n2;
};

function multiplicar(n1, n2){
    return n1 * n2;
};

function dividir(n1, n2){
    return n1 / n2;
};

function calculadora(n1, n2, callback){
    return callback(n1, n2);
};

console.log(calculadora(2, 2, dividir));


// ========================================================================================================
// Exercício: Passando um Callback recarregado

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(url, funcao){
        let urlCompleta = []
        for(var i = 0; i < url.length; i++){
            let comp = funcao(url[i])
            urlCompleta.push(comp);
    }
    return urlCompleta
}

console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp));