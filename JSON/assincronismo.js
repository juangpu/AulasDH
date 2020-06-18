// Variais tarefas no mesmo espaço tempo
// O assincronismo permite que você faça varias chamadas de função, sem precisar esperar que cada uma se concretize p/ continuar executando o script
// Aquele código em que cada instrução NÃO espera que a anterior seja executada

function alarme1(){
    return "Hora de acordar são 08:00";
}

function alarme2(){
    return "Está perto da hora de acordar são 07:50"
}

setTimeout(function(){ // função nativa do JS usada no assincronismo
    console.log(alarme1()); // o setTimeout adia a execução de uma tarefa
}, 2000); // JS trabalha em milisegundos ou seja 2000 milisegundos vale a 2 segundos, que é o tempo que ele vai demorar para executar essa função no console

console.log(alarme2());


