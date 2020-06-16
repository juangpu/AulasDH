//  FOR IN
//  PARA OBJETOS

let carro = {
    nome: "Fox", // nome é a propriedade e "Fox" o valor da propriedade
    ano: "2011"  // ano é a propriedade e "2011" o valor da propriedade
}

// let - variavel que representa cada propriedade do nosso objeto = pode ser qualquer nome, mas representa a propriedade do objeto
// in - especifica qual objeto esta fazendo a interação
for(let propriedade in carro){
    console.log(carro[propriedade]); // tem que usar para rodar, o nome do objeto e como contator a variavel que representa a propriedade
}


//  FOR OF
//  PARA ARRAYS - matrizes e string

let series = ["The 100", "Z Nation", "13 Reasons Why"];

//  Serve para agilizar o processo de interação
// let - variavel interadora, representa cada um dos valores durante o ciclo = representa cada um dos valores do array durante o loop
for(let valor of series){
    console.log(valor); 
}