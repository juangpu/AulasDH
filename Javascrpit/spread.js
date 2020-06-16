let frutas = ["maça" , "uva" , "banana"];
let frutasDois = ["morango" , "abacaxi" , "goiaba"];
// SPREAD OPERATOR É A JUNÇÃO DE ARRAYS (...)
let listaDasFrutas = [...frutas, ...frutasDois];

console.log(listaDasFrutas);

// -----------------------------------------------------------------------------------------------------
// funciona em objetos tambem

let pessoa = {
    nome: "Juan",
    sobrenome: "Urrutia"
}
let infoAdicionais = {
    idade: 19,
    cpf: 12345678900,
    ...pessoa
}
let pessoaCompleta = {
    endereco: "Avenida Paulista",
    email: "juanu@outlook.com",
    ...infoAdicionais
}
console.log(pessoaCompleta);


// ----------------------------------------------------------------------------------------------
// PARA FUNÇÕES COM ARRAYS

function letras(...parametro){
    console.log(parametro);
}

letras("a" , "b" , "c");

// exemplo para apenas escolher a posição do array

function nomes(...parametro){
    console.log(parametro[0]);
}

nomes("Juan" , "Henrique" , "Carlos");


// EXERCICIO PARA TREINAR

let curso = {
    tema: "Programação",
    sede: "São Paulo",
    escola: "DH"
}
let alunoUm = {
    nome: "Juan",
    idade: 19,
    ...curso
}
let alunoDois = {
    nome: "Henrique",
    idade: 18,
    ...curso
}

console.log(alunoUm, alunoDois);
