//  METODOS DE ARRAY

let pessoa = ["Juan"];
console.log(pessoa);

// PUSH();
// Server para adicionar informações ao final de um array

pessoa.push(19);
console.log(pessoa);

// POP();
// Serve para retirar informações ao final de um array
// pessoa.pop();
// console.log(pessoa);

// Alem de excluir, ele pode retornar o ultimo valor do array para vc
let excluido = pessoa.pop();
console.log(excluido);

// UNSHIFT();
// Serve quase igual ao push(), mas ao inves de adicionar um valor no final do array, ele adiciona no começo

pessoa.unshift(19);
console.log(pessoa);

// SHIFT();
// Serve quase igual ao pop(), mas ao inves de retirar informações do final de um array, ele retira do começo
// Tambem faz a função de retornar o primeiro valor do array

pessoa.shift();
console.log(pessoa);

// INDEXOF();
// Serve para procurar um elemento do array e retornar a posição/indice desse elemento passado

let pessoaInfo = ["Masculino", 1.75, "Masculino"];
console.log(pessoaInfo.indexOf(1.75)); // retorna 1, pois a informação 1.75 esta na posição 1 do array

// LASTINDEXOF();
// Serve para uma situação muito especifica, quando nos procuramos informações que são repetidas, ele retorna a posição em que ele encontra a palavra repetida/ultima ocorrência

console.log(pessoaInfo.lastIndexOf("Masculino")); // retorna 2, pois a segunda ocorrencia da palavra repetida "Masculino" esta na posição 2 do array

// JOIN();
// Serve para transformar array em string, geralmente separado por virgula(padrão)

console.log(pessoaInfo.join()); // transforma todo o array em string, retornando - Marculino,1.75,Maculino
console.log(pessoaInfo.join(" - ")); // por padrão é separado por virgula, mas podemos modificar


