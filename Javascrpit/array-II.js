// O que é um CALLBACK? é uma função que se passa como parametro de outra função
// EXEMPLO
// pai(function() {
// sentença do codigo
// })

// METODOS DE ARRAY II

let numerosPares = [2, 4, 6, 8, 10];

// MAP();
// Intera e percorre por cada numero fazendo alteração de algum valor, retornando um array com a mesma quantidade de itens

// numerosPares.map(function(valor) {
//     console.log(valor * 2);
// }) 

// Geralemte ele retorna esse array, então é preciso salvar as informações em uma variavel:
let numerosParesDobro = numerosPares.map(function(valor) {
    return valor * 2;
}) 
console.log(numerosParesDobro);


// FILTER();
// Filtrar alguma informação dentro do array de acorodo com alguma regra criada, retornando um novo array com os filtros que queremos

let numerosFiltrados = numerosPares.filter(function(valor){
    return valor < 6; // menor que 6
})
console.log(numerosFiltrados);


// REDUCE();
// Converter o array em um unico valor (acumulador, valor)

let somaPares = numerosPares.reduce(function(acumulador, valor){
    return acumulador + valor;
})
console.log(somaPares);


// FOREACH();
// Serve para interar no array ou seja passar por cada numero e fazer o que queremos (valor, indice/posição)
// O indice percorre o array

numerosPares.forEach(function(valor, indice){
    console.log("O indice" + " " + indice + " " + "Tem o valor:" + valor);
})


// Exercício criado: Filtrando números

let numeros = [34, 25, 16, 33, 48, 44, 18, 22];
// Usando filte, filtre aqueles que são maiores que 18 e faça uma variavel armazenando os valores que cumpram essa condição

let numerosFiltrados2 = numeros.filter(function(valor){
    return valor > 18; // maior que 18
})
let maiores = [34, 25, 33, 48, 44, 22];
console.log(numerosFiltrados2);