/* Elaborar um programa que leia o valor de um jantar. Calcule e informe o
valor da taxa do garçom (10%) e o valor total a ser pago.
Vamos avançar um pouco. Neste e nos demais exercícios, vamos apresentar
um exemplo de possíveis dados de entrada e dos respectivos dados de saída
exibidos pelo programa (e deixar para você enumerar as etapas).
Valor do Jantar R$: 80.00
Taxa do Garçom R$: 8.00
Total a Pagar R$: 88.00
O exemplo de dados do programa serve apenas para ilustrar e reforçar o que é
solicitado na descrição do exercício. Tenha cuidado de digitar valores com
decimais separados por ponto, e não vírgula. Outro detalhe refere-se à
compreensão do enunciado do exercício e ao uso correto de variáveis.
Utilizando variáveis, o programa vai receber o valor do jantar, calcular
corretamente a taxa do garçom e o valor total a ser pago. O Exemplo 1.7
apresenta uma maneira de resolver esse problema. Observe que o método
toFixed(2) é adicionado às variáveis de saída. Ele serve para indicar que o
valor a ser apresentado deve conter 2 casas decimais. */

let valorJantar = 80;
let tipGorjeta = 10;
let totalAPagar = 0;

function payments() {
    totalAPagar = valorJantar + ((tipGorjeta / 100) * valorJantar);
    return totalAPagar;
}

console.log(`O valor do jantar mais a taxa de serviço é: R$ ${payments().toFixed(2)}`);