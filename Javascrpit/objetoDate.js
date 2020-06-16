
// ========================================================================================================
const dataSemana = new Date();
// getDay - dia da semana, para o JS a semana começa no Domingo, que representa 0.
console.log(dataSemana.getDay()); // retornará 4, pois o dia da semana de hoje é QUINTA-FEIRA.

// ========================================================================================================
const dataMes = new Date();
// getMonth - referente ao mês, para o JS a contagem começa no 0, assim trazendo um erro, pois para o JS Janeiro é o mês 0 e Dezembro sendo o ultimo mês é 11.
console.log(dataMes.getMonth()); // retornará 5, pois estamos em JUNHO.
// PARA QUE RETORNE O MÊS DE ACORDO COM O QUE ESTAMOS REALMENTE, BASTA ADICIONAR + 1, COMO ABAIXO:
// const dataMes = new Date();
// console.log(dataMes.getMonth() + 1);

// ========================================================================================================
const dataAno = new Date();
// getFullYear - referente ao ano que estamos
console.log(dataAno.getFullYear()); // retornará 2020, pois é o ano que estamos.

// ========================================================================================================
const dataDia = new Date();
// getDate - refereente a data do dia
console.log(dataDia.getDate()); // retornará 11, pois hoje é dia 11.

// =======================================================================================================
//  OBSERVAÇÃO, O DATE PODE SER USADO PARA TUFO RELACIONADO A DATA (DIA, ANO, MÊS, HORA, MINUTO, ETC...)

const data = new Date();
console.log(data); // se não especificarmos o que queremos, só rodar a data, puxará a data completa em relação ao servidor

// =======================================================================================================
//  PODEMOS GERAR UMA DATA, NOS MESMOS ESPECIFICARMOS QUAL DATA QUEREMOS CRIAR

const dataEspecifica = new Date('2000-12-08'); // basta definirmos qual data queremos no parametro do DATE
console.log(dataEspecifica); // podemos imprimir a data completa, ou só o dia, o mês ou o ano, usando os comandos aprendidos á cima, por exemplo (getMonth)
