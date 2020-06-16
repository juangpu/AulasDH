// CICLO FOR ============================================================================================
// taboada - i começa em 0, pergunta se 0 é menor ou igual a 10? Sim, executa i=0 * 8 resposta é 0.
// então ele vai para a ultima etapa de incremento i++, i=0 + 1 resposta é 1, então i agora é 1.
// ele repete isso até quando i não for menor ou igual a 10, ou seja quando o i for 11 ele encerra o loop.
for(var i=0; i<=10; i++){
    console.log(i*8);
}

// loop - i começa em 0, pergunta se 0 é menor que 4? Sim, então ele imprime uma vez a string "oi".
// então ele vai para a ultima etapa de incremento i++, i=0 + 1 resposta é 1, então i agora é 1.
// ele repete isso até quando i for menor que 4 (ou seja 3), então ele imprime quano o i for (0, 1, 2, 3) - 4 vezes.
// se fosse i<=4 ele iria imprimir 5 vezes "oi" (0, 1, 2, 3, 4)
for(let i=0; i<4; i++){
    console.log("oi");
}

// EXEMPLO
for(let i=0; i<=4; i++){
    console.log(i);
}


// ---------------------------------------------------------------------------------------------------
// Exercício: Repita como um papagaio PLAYGROUND

function papagaio(){
    for (let i=0; i<5; i++){
        console.log("Olá mundo");
    }
}
papagaio();

// ------------------------------------------------------------------------------------------------------
// Exercício: Contar ímpares PLAYGROUND

// function naoPareDeContarImparesAte(numero){
//     let impares = 0;
//     for(let i=0; i < numero; i++){
//         if(i % 2 ==1 ){
//         impares = impares + 1;
//         }
//     }return impares;
// }

// OUTRA MANEIRA

// function naoPareDeContarImparesAte(numero){
//     var quantidade = 0
//      for (var i = 0; i < numero; i++){
//         if (i%2 > 0){
//             quantidade = quantidade + 1
//         }
//     }
//     console.log(quantidade)
//     return quantidade
// }

// naoPareDeContarImparesAte(10)


// CICLO WHILE =============================================================================================
// pergunta se pode faze-lo, depois executa
let contador = 0;
while(contador < 10){ // se vier uma operação falsa, por exemplo (contador > 10) não roda o ciclo
    console.log("Estou dentro do While");
    contador++; // se não colocar, o loop será infinito / ctrl C para para o loop infinito
} // contador é 0, pergunta 0 é menor que 10? Sim, então imprime uma vez a frase.
  // Após isso ele vem com o contador que é 0, e incrmenta +1, então contador agora é 1, isso vai até o contator não ser mais menor que 10.


// CICLO DO WHILE ==========================================================================================
// Executa, depois pergunta se pode faze-lo novamente
let resultado = 0;
do{
    console.log("Estou dentro de um Do While");
    resultado++;
} while (resultado < 10); // mesmo se essa informação fosse falsa (resultado > 10), ele imprimiria a frase uma vez, pelo fato de executar a o console e depois perguntar e verificar se pode rodar o loop.
// primeiro executa "Estou dentro de um Do While", depois incrementa resultado(0)+1, resultado que agora é 1 pe menor que 10? Sim
// Então ele repete o processo até resultado não for mais menor que 10.


// ------------------------------------------------------------------------------------------------------
// Exercício: encontre o 5 PLAYGROUND

function encontreUm5(numeros){
    var iArray = numeros.length
    var contador = 0
    do {
        if (numeros[contador] == 5){
            console.log("Encontramos um 5!")
            contador = iArray
        }
         else { console.log("numero do array é " + numeros[contador])
         }
         contador++
    } while (contador < iArray)
}
encontreUm5([2,3,8,33,5,4])