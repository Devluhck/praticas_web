/*
5. Multiplicar Elementos por 2
Faça um programa que:

Receba um array de números (ex: [3, 7, 2, 9]).

Crie um novo array onde cada elemento é o dobro do valor original.

Imprima o novo array (no exemplo, saída: [6, 14, 4, 18]).

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);*/

function validaproc() {

  let i = 0;
  let numeroAleatorio = [];
  let novaArray = [];
  
  for(i = 0; i < 4 ; i++){

    numeroAleatorio[i]=(parseFloat(prompt("Digite a posição "+i+ " do array")))
    console.log("O numero digitado foi: " + numeroAleatorio[i] + " na posição "+ i)
    novaArray.push(numeroAleatorio[i] * 2)


  }
    
    console.log("Novo Array " + novaArray)

  return false;
}
