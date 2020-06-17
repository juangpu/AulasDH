// so funciona em funções declaradas por meio de variaveis
// EXEMPLO: const soma = function(){} - arrow function é para diminuir esse processo
// Se o codigo tiver em apenas uma linha, não precisa de {} e nem de return e caso receba apenas um parametro não precisa usar (), se tiver mais de um parametro é obrigatorio o uso do ()

const somar = numero => console.log("recebi o numero: " + numero);
            // 1 parametro
somar(10);

const numeroRecebido = (numeroA, numeroB) => console.log("Recebi os numeros: " + numeroA + " e " + numeroB);
                       // 2 parametros
numeroRecebido(2, 34);

// ------------------------------------------------------------------------------------------------------------

const multiplicar = (numero1, numero2) => {
    console.log("recebi o nuemro: " + numero1);
    return numero1 * numero2;
}

console.log(multiplicar(2, 3));

// -----------------------------------------------------------------------------------------------------

// arrow function com apenas uma linha, função subtrair, parametros(a, b) => return = a - b;
let subtrair = (a, b) => a - b;
console.log(subtrair(5, 2));
