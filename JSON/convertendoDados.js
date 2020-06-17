// typeof
// fala que tipo de dado é

let texto = "Ola mundo";
console.log(typeof(texto));

let numero = 12;
console.log(typeof(numero));

// parseInt
// transforma "string" em "number"

let texto2 = "5";
console.log(parseInt(texto2));

let numero2 = parseInt(texto2);
console.log(typeof(numero2)); // aqui confirma que com o uso do parseInt transformamos a string "5" em number

// number
// Mesma função do parseInt, porém só tranforma em number se no dado for tudo numeros, caso tenha alguma letra, diferente do parseInt que mesmo com isso retornaria o numero, ele retorna NaN

let texto3 = "123abc";
let numero3 = Number(texto3);
console.log(numero3); // retorna NaN(Not a Number), pois o Number só tranforma o que for numero, diferente do parseInt que nesse caso retornaria 123, que são os numero que estão no dado, ignorando qualquer outra coisa.

// string/toString
// ela faz o inverso do parseInt, transforma "number" em "string"

let numero4 = 111;
console.log(String(numero4));

let texto4 = String(numero4);
console.log(typeof(texto4));

// toString mesma coisa só muda a sintaxe

let numero5 = 111;
let texto5 = numero5.toString();
console.log(texto5);