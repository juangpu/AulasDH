// METODOS DE STRING

// lenght
// Sempre retornará um numero, que é o tamanho/indice do seu objeto/array/string/...
// para saber o comprimento

console.log("Olá meu nome é Juan".length);

let texto = "Eu tenho 19 anos";
console.log(texto.length);

// indxOf
// Serve para procurar algumas informações dentro da string.
// para saber se algo existe

let texto2 = "Já viajei para para alguns estados do Brasil e tambem para o Chile e Argentina";
console.log(texto2.indexOf("Chile"));

// slice
// Serve para pegar alguma informação (palavra) dentro da string, devemos apenas indicar em qual posição a palavra começa e em qual ela termina
// para pegar uma parte do texto

let texto3 = "Sou paulista";
console.log(texto3.slice(4, 12));

let palavra = texto3.slice(4, 12); // tambem podemos armazenar essa informação
console.log(palavra);
console.log(texto3); // não altera a variavel texto3 que foi de onde tiramos essa informação

// trim
// Serve para remover espaços em brancos que não são utilizaveis(que não estejam entre palavras) da sua string
// para remover os espaços em barnco    

let texto4 = "              Trabalho na empresa Zanaflex             ";
console.log(texto4);
console.log(texto4.trim());

// split
// Serve para transformar uma string em um array
// para gerar um array

let texto5 = "Faço curso de inglês";
console.log(texto5.split()); // como não foi passado nada de parametro para o split, transforma todo testo em um unico array retornando [ 'Faço curso de inglês' ]
console.log(texto5.split(" ")); // transforma cada palavra da variavel texto5, em um array, retornando [ 'Faço', 'curso', 'de', 'inglês' ]
console.log(texto5.split("i")); // quabra a string, fazendo um array até onde encontrar a primeira letra i, depois faz um outro array a partir de onde parou o primeiro. [ 'Faço curso de ', 'nglês' ]

// replace
// Serve para que a gente possa trocar codigos/informações dentro da string
// para alterar uma parte do texto

let texto6 = "Gosto de jogar basquete";
console.log(texto6.replace("basquete", "futebol")); // trocou a palvras basquete por futebol, sempre nessa ordem no parametro do replace

let textoNovo = texto6.replace("basquete", "futebol"); // tambem podemos armazenar essa informação
console.log(textoNovo);