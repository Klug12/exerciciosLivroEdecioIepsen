/* Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x.
Exemplo:
Preço R$: 60.00
À Vista R$: 54.00
Ou 3x de R$: 20.00 */
let formaDePagamento = "Parcelado";
let valorProduto = 60;
let valorAVista = 0;
let desconto = 10;
let valorTotal = 0;
let valorParcelas = 0;

console.log(`O valor do produto é de R$${valorProduto}, se for pagamento à vista terá 10% de desconto. Ou pode parcelar em 3x pelo valor normal.` + "\ncomo gostaria de fazer o pagamento?" );

switch (formaDePagamento) {
    case "À vista":
       valorTotal = valorProduto - ((desconto / 100) * valorProduto);
       console.log(`O valor a pagar será de R$${valorTotal}`)
       break;

       case "Parcelado":
        valorTotal = valorProduto;
        valorParcelas = valorProduto / 3;
        console.log(`O valor a pagar será de R$${valorTotal} dividido em 3 parcelas de R$${valorParcelas.toFixed(2)}`);
}

