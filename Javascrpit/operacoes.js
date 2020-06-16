// adição
console.log(2+2);

// subtração
console.log(10-5);

// multiplicação
console.log(10*5);

// divisão
console.log(10/2);

// incremento
let numero = 10;
console.log(++numero); // 11
console.log(++numero); // 12
console.log(++numero);// 13

//  decremento
console.log(--numero); // 12
console.log(--numero); // 11
console.log(--numero); //10

let decremento = 8;
console.log(--decremento); // 7

// comparação de maior 
console.log(10 > 5); // maior

// comparação de menor
console.log(10 < 5); // menor

// comparação de menor ou igual
console.log(3 <= 3); // true
console.log(3 <= 2); // false

// comparação de maior ou igual
console.log(20 >= 20); // ture
console.log(20 >= 40); // false
console.log(20 >= 14); // true

// comparação  de igualdade simples
console.log(10 == 10);
console.log(10 == 20);
console.log("ola" == "ola"); // string "true"

// comparação de igualdade rigorosa
console.log(5 === "5"); // numero não é igual a string na comparação rigosrosa "false"
console.log(5 == "5"); // exemplo da simples, o tipo de dados não interfere "true"

// comparação de diferença simples
console.log(10 != 10); // false - 10 NÃO É diferente de 10
console.log(10 != 20); // true - 10 É diferente de 20
console.log("ola" != "oi"); // ola é diferente de oi? SIM, true

// comparação de diferença rigorosa
console.log(10 !== "10"); // quanto seu valor quanto seu tipo de dados são diferentes? true - o valor é igual porém o tipo é diferente (numero / string)
console.log(10 !== "20"); // sim, valor e tipo são diferentes - true

// comparador logico &&
// juntar condições - caso todas as condições derem verdadeiras retorna true, caso tenha alguma que seja falsa, o retorno independentemente será falso
console.log(10 > 5 && 8 < 10); // só retorna true se as duas condições forem verdadeiras - true
console.log(10 > 5 && 8 > 10); // false - apenas uma é verdadeira, quando tem qualquer condição falsa, retorna false
console.log(10 > 5 && 8 > 10 && 11 > 5); // false - ainda existe uma condição que é falsa (8 > 10)

// comparador logico OR(ou) ||
console.log(10 < 5 || 8 > 10); // false - só retorna false se as duas condições forem falsas
console.log(10 > 5 || 8 > 10); // true - se qualquer condição for verdadeira, retorna true 
console.log(10 > 5 || 8 > 10 || 11 < 5); // true - ainda existe uma condição que é verdadeira (10 > 5)

//  comparaçãao de negação !
// ele sempre muda o valor do booleano, nega o valor dando a resposta oposta
console.log(true); // true
console.log(!true); // false - ele contorce o valor pedido
console.log(! 5 > 3); // false - 5 é maior que 3? SIM, se não tivesse a negação (!) retornaria true, porem com a negação nos retornará false

// concatenação +
let nome = "Juan";
let sobrenome = "Urrutia";

console.log(nome + sobrenome); // exemplo sem a concatenação - retorna JuanUrrutia
console.log(nome + " " + sobrenome); // retorna com o espaço - Juan Urrutia
