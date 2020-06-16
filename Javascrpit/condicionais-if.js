let dia = "sexta"; // imprime a frase, apenas se o dia for domingo, caso não seja "domingo" irá imprimir o else

if (dia == "domingo"){
    console.log("Vou para a praia");
} else if (dia == "sexta"){ // para casos especificos, se querer especificar algo para a imnpressão
    console.log("Vou para o cinema");
} else {
    console.log("Fico em casa"); 
}
// IF se for domingo retorna "vou para a praia"
// ELSE IF se for sexta retorna "vou para o cinema"
// ELSE se não for nenhum dos 2 acima retorna "fico em casa"

// ------------------------------------------------------------------------------------------
// Exercício: Posso passar? PLAYGROUND

function podePassar(nome){
    if (nome == "Natalia"){
        return false;
    } else {
        return true;
    }
}

console.log(podePassar("Juan"));


// ---------------------------------------------------------------------------------------
// Exercício:Igualdade, If e Else PLAYGROUND

let linguagem = "PHP"; // se for "javascript" vai retornar "estou aprendendo" caso seja outra linguagem, exemplo "PHP" retorna "vou aprender mais pra frente"

if (linguagem === "javascript"){
    console.log("Estou aprendendo");
} else {
    console.log("Vou aprender mais para frente")
}


// --------------------------------------------------------------------------------------
// Exercicio: Meu primeiro if PLAYGROUND

let dado = true; // se dado for true, retorna "é verdadeiro", se não for retorna "é falso"

if (dado == true){
    console.log("É verdadeiro!");
} else {
    console.log("É falso");
}