/*
8.Simulador de Caixa de Supermercado
Situação: Calcular total da compra com desconto (se total > R$ 30).
Desafio:
Array precos = [10, 5.5, 8, 3.2].
Some os valores.
Se total > 30, aplique 10% de desconto.
Saída:
text
Total: R$ 26.70 (com desconto)  
ou  
Total   sem desconto: R$ 28.80  

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);*/

function validaproc() {


  let precosProdutos = [];
  let totalComDesconto;
  let continuar = true;
  let i = 0;
  let total;

  alert("CAIXA DE SUPERMERCADO INTELIGENTE\nDIGITE O VALOR DE CADA PRODUTO E NO FINAL COMPRAS ACIMA DE R$30,00 GANHE 10% DE DESCONTO ")

  sair = alert("Caso queira parar é só dgitar 'SAIR' ")

  while (continuar) {
    let precosDigitado = (prompt("Digite os valor dos " + (i + 1) + "º Produto"));
    i++
    if (precosDigitado.toUpperCase() === "SAIR") {
      continuar = false;
      alert("FIM DO PROGRMA")

    } else {
      precosDigitado = parseFloat(precosDigitado);
      console.log(precosDigitado);
      precosProdutos.push(precosDigitado);
      console.log("O preço digitado foi: R$" + precosDigitado + "\nO preço adicionado na sua compra foi: R$" + precosDigitado);
      
      
      }

      total = precosProdutos.reduce((acumulador ,valorInicial) => acumulador + valorInicial,0);
      
      console.log(precosProdutos);
  }
  alert("O total das sua compra foi: R$"+ total)
  if (total >= 30) {

    totalComDesconto= total * 0.10 
    let precosFinal = total - totalComDesconto 

    alert("Sua compra possue 10% de desconto ficando o valor de R$" + precosFinal)
    
  }else {
    alert("Sua compra não atingiu o valor minimo para ter desconto")
  }

  return false;
}