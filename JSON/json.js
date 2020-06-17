let pessoa = {
    nome: "Juan",
    idade: 19,
    altura: 1.75
}

let json = JSON.stringify(pessoa); // retorna tudo em string

let objetoDeNovo = JSON.parse(json); // aqui faremos com que volte a retornar um objeto, por isso chamamos como parametro a variavel json, queremos transformar ela em objeto novamente

console.log(objetoDeNovo);

// ---------------------------------------------------------------------------------------------------------

let listaDeCompras = ["pão", "queijo", "presunto"];

let json2 = JSON.stringify(listaDeCompras); // trasforma tudo em string

let arrayDeNovo = JSON.parse(json2); // desfaz e trasnforma tudo novamente em array

console.log(json2); // se chamarmos json2 - retorna tudo em string, caso chamamos arrayDeNovo retorna em array

// JSON.stringify - Serve para transformar um objeto em um string
// JSON.parse - Serve transformar uma string em um objeto