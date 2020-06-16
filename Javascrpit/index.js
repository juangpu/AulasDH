// // Esse aqui é um comentario
// // TIPO DE VARIAVEIS

// // VAR é declarado globalmente
// var minhaVariavel = "ola mundo";
// console.log(minhaVariavel); // -> valor: ola mundo 

// // LET é declarao dentro do escopo
// let minhaVariavel2 = "tudo bem";
// console.log(minhaVariavel2); // -> valor: tudo bem

// // CONST que o valor dele   não pode ser alterado   
// const minhaVariavel3 = "aula01";
// console.log(minhaVariavel3); // -> valor: aula 01

// function bomDiaPessoa(){
//     console.log('Bom dia o sol já nasceu');
// }

// // Chamar / Executar a função 
// bomDiaPessoa();

// // FUNÇÃO COM PARAMETRO
// function somar(numero1, numero2) {
//     console.log(numero1 + numero2); // console.log (5 + 2);
//     console.log(numero1 - numero2); // console.log (5 - 2);
// }

// // Executar uma função com parametro
// somar(5, 2);
// // A ORDEM PODE ALTERAR O RESULTADO

// // CACHORRO
// let cachorro = {
//     nome: "Bolt",
//     idade: 4,
//     sexo: "M",
//     castrado: true,
//     vacinado: [ "Raiva", "Verme", "Cinomose"]
// }

// // MOSTRA O OBJETO INTEIRO
// console.log(cachorro);

// // QUERO UMA PROPRIEDADE
// console.log(cachorro.nome);

// let nomeCachorro = cachorro.nome;
// console.log("Oi " + nomeCachorro + " é hora de tomar suas vacinas");


// function eCastrado (cachorroTestado) {
//     if (cachorroTestado.castrado == true) {
//         console.log("O Cachorro é castrado")
//         return true;
//     } else {
//         console.log("O Cachorro não é castrado")
//         return false;
//     }
// }

// eCastrado(cachorro);



// let cachorros = [
//     {
//         nome: "Malu",
//         idade: 3,
//         sexo: "M",
//         castrado: true,
//         servicos: ['banho', 'tossa'],
//     },
//     {
//         nome: "Batman",
//         idade: 2,
//         sexo: "M",
//         castrado: false,
//         servicos: ["banho", "tosa", "corte de unha"]
//     },
//     {
//         nome: "Mel",
//         idade: 4,
//         sexo: "F",
//         castrado: false,
//         servicos: ["banho", "corte de unha"]
//     }
// ];

// FEITO PELO PROFESSOR:
// Esse aqui é um comentário
// TIPOS DE VARIAVEIS
// console.log(minhaVariavel); // -> valor undefined


// VAR é declarada globamente
// var minhaVariavel = "olá mundo";
// console.log(minhaVariavel); // -> valor: olá mundo
​
// LET é declarado dentro do escopo
// let minhaVariavel2 = "tudo bem";
// console.log(minhaVariavel2); // -> valor: tudo bem
// minhaVariavel2 = "gosto de sorvete";
// console.log(minhaVariavel2); // -> valor: gosto de sorvete
​
// CONST que o valor dele não pode ser alterado
// const minhaVariavel3 = "aula01";
// console.log(minhaVariavel3); //-> valor: aula01
​
// FUNÇÕES
// -> é a forma que podemos passar um conjunto de instruções para o código/computador
​
// function nomeDaFuncao(parametro1, parametro2) {
    // ESCOPO DA FUNÇÃO
    // CÓDIGO DA FUNCAO
    // posso acessar os parametros aqui!
// };
​
// camelCase
// snakeCase bom_dia_pessoa
// FUNÇÂO SEM PARAMETRO
// function bomDiaPessoa() {
//     console.log('Bom dia o sol já nasceu');
// }
​
// Chamar/Executar a função
// bomDiaPessoa();
​
//FUNÇÃO COM PARAMETRO
// function somar(numero1, numero2) {
//     console.log(numero1 + numero2); // console.log(5 + 2);
//     console.log(numero1 - numero2); // console.log(5 - 2);
// };
​
// Executo uma função com parâmetro
// somar(5, 2);
// console.log("=================================")
// somar(2, 5);
// console.log("=================================")
// somar(57, 87);
// console.log("=================================");
// somar();
​
// Funções Nativas do JavaScript (JS);
// são funções que fazem parte do javascript, você não precisa declarar apenas chamar
​
// console.log(Number(150));
​
// console.log(Number("150"));
​
// let a = 150;
// -> comparando: a == 150 ?;
// let b = Number("150"); // transforam o "150" string em 150 númerico
​
// console.log(a + b);c
​
​
// CONDICIONAIS
// function ePar(numero) {
    //booleano -> é um tipo de dado retorna true (verdadeiro ) ou false (falso)
    // % -> indica a sobra da divisão, se for divísivel por um número a sobra é ZERO!
    // para ser par tem quer ser divisível por dois -> a sobra da divisão DO NUMERO POR DOIS é zero;
//     if (numero % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
​
// console.log(ePar(4));
// console.log(ePar(5));
​
// OBJETO GENÉRICO
// é você ser capaz de armazenar várias informações de uma só vez
// let objetoGenerico = {
//     propriedade: "valor",
//     propriedade2: "valor2",
//     propriedade3: "valor3"
// }
​
// mostrando todas as propriedades (nome quanto o valor!)
// console.log(objetoGenerico);
​
// retornar apenas o valor de uma propriedade
// console.log(objetoGenerico.propriedade2);
​
// CACHORO
// let cachorro = {
//     nome: "Bolt",
//     idade: 4,
//     sexo: "M",
//     castrado: true,
//     vacinas: ["Raiva", "Verme", "Cinomose"]
// }
​
//OBJETO:
// é um conjunto de propriedades e valores ( nome: valorNome; idade: valorIdade)
​
//ARRAY:                                                          0         1         2
// é um conjunto de dados, mas a estrutura dele é por posição ["Raiva", "Verme", "Cinomose"]
​
// MOSTRA O OBJETO INTEIRO
// console.log(cachorro);
​
// QUERO UMA PROPRIEDADE
// console.log(cachorro.nome);
​
// O ARRAY INTEIRO (só chamar a propriedade)
// console.log(cachorro.vacinas);
​
// UM ELEMENTO ESPECIFICO DO ARRAY
// console.log(cachorro.vacinas[2]);
​
// let nomeCachorro = cachorro.nome;
// console.log("Oi " + nomeCachorro + " é hora de tomar suas vacinas");
​
// Escreva a funcao eCastrado que me diga se o cachorro é castrado ou não!
// Se o cachorro for castrado retorne true
// Se o cachorro não for castrado retorne false
​
// function eCastrado(cachorroTestado) {
    // eu quero comparar se cachorro.castrado é true (verdadeiro) ou false (falso)
//     if (cachorroTestado.castrado == true) {
//         console.log("O " + cachorroTestado.nome + " é castrado")
//         return true;
//     } else {
//         console.log("O " + cachorroTestado.nome + " não é castrado")
//         return false;
//     }
// }
// ​
// eCastrado(cachorro);
// ​
// let cachorros = [
//     {
//         nome: "Malu",
//         idade: 3,
//         sexo: "M",
//         castrado: true,
//         servicos: ['banho', 'tossa'],
//     },
//     {
//         nome: "Batman",
//         idade: 2,
//         sexo: "M",
//         castrado: false,
//         servicos: ["banho", "tosa", "corte de unha"]
//     },
//     {
//         nome: "Mel",
//         idade: 4,
//         sexo: "F",
//         castrado: false,
//         servicos: ["banho", "corte de unha"]
//     }
// ];
​
// TODOS OS CACHORROS
// console.log(cachorros);
​
// UM CACHORRO EM ESPECÍFICO
// console.log(cachorros[1].servicos);
​
// console.log("O cachorro da posição 0 se chama " + cachorros[0].nome + " e o cachorro da posição 1 se chama " + cachorros[1].nome);
​
// console.log(cachorros[2].nome, cachorros[1].idade, cachorros[0].sexo, cachorros[2].castrado, cachorro.nome);
​
// COMO PERCORRER ARRAY COM UM LOOP
// for (let i = 0; i < cachorros.length; i++) {
//     console.log("=================================")
//     console.log(cachorros[i].nome, cachorros[i].sexo);
// }

// LOOPS -> for/ while/do-while

// UMA FUNÇÃO QUE LISTE OS CACHORROS CASTRADO!
// PERCORRA A ARRAY E RETORNE O NOME DOS CACHORROS CASTRADOS
// loops - for/while/do-while/
// onde armazenar o nome dos cachorros castrados?
// e se não for castrado ? faço algo ?

// ESSE AQUI USANDO O CONTEÚDO DA AULA DE SEGUNDA (25/05);
// FAZER UMA FUNÇÃO QUE ADICIONE UM CACHORRO NO ARRAY CACHORROS;
// .push
