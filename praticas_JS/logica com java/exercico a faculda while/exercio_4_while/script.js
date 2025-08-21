/*Faça um programa que peça ao usuário dois números. ok!
  enquanto ele não digitar 
  o resultado correto da soma
  desses dois números
  mostre na tela “tente novamente”, 
  quando acertar “resultado correto!”.

*/


let num1 = parseInt(prompt("Digite um numero: "))
console.log("O numero digitado foi " + num1)

let num2 = parseInt(prompt("Digite outro numero: "))
console.log("O numero digitado foi " + num2)

let soma = parseInt(prompt("Agora digite a soma dos dois numero: "))
console.log("O soma digitada foi "+ soma)

let resultado = num1 + num2


while (soma !== resultado  ) {
  
    console.log("tente novamente")

    soma = parseInt(prompt("Digite novamente a soma dos dois numero: "))
      
}

   console.log("resultado correto")
