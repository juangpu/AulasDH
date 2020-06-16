function fatorial(n) {
    var resultado = 1
    for (var i=n; i>1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(8));

// -------------------------------------------------------------------------------------------------

function produto(array){
    var resultado = 1;
    for (var i=0; i<array.length; i++){
        resultado *= array[i]
    }
    return resultado;
}
console.log(produto([1, 4, 7]));

