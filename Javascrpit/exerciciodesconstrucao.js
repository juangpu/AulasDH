// USANDO ARRAYS
// const vingadores = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

// Desestruturar o array em variáveis individuais, o padrão do array fica na direita
// da atribuição (o "=") e o array sendo descontruido fica na direita.
// imprimir as variáveis

const vingadores = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

const [item1, item2, item3] = vingadores;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(item1, item2, item3); 






// array dentro de array
const personagens = ['Tony Stark', ['Steve Rogers', 'Zé Carioca'], ['Mickey Mouse', 'Pateta']];
const [itemA, [itemB, itemC], [itemD, itemE]] = personagens;

console.log(itemD); // exemplo itemD
console.log(itemA, itemB, itemC, itemD, itemE);







// USANDO OBJETOS
const vingadores2 = {
    homemDeFerro: 'Tony Stark',
    capitaoAmerica: 'Steve Rogers',
    viuvaNegra: 'Natasha Romanoff'
};

const {homemDeFerro, capitaoAmerica, viuvaNegra} = vingadores2

console.log(homemDeFerro); // exemplo
console.log(homemDeFerro, capitaoAmerica, viuvaNegra);
// Desestruturar esse objeto e salvar o valor das propriedades em variaveis








// Desestruturar objetos aninhados (que contém outros objetos)
// const avengers = {
//     viuvaNegra: 'Natasha Romanoff',
//     ironManCharacters: {
//         casal: {
//             ironMan: 'Tony Stark',
//             esposa: 'Pepper Potts',
//         },
//         parceiro: {
//             warMachine: 'James Brodie'
//         }
//     },
//     capitaoCharacters: {
//         cap: 'Steve Rogers',
//         parceiro: {
//             falcao: 'Sam Wilson'
//         }
//     }
// };



// Exercicio PLAYGROUND 
// Exercício: Desestruturando


// let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

// let Bariloche = destinosIncriveis[1];
// let China = destinosIncriveis[3];

// console.log(Bariloche, China);

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [marruecos, bariloche, barcelona, china, grecia] = destinosIncriveis;

console.log(bariloche, china);