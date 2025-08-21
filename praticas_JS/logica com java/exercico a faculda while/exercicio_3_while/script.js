/*
A academia de ginástica “SÓENGORDA LTDA.”
 necessita de uma solução que 
calcule e informe o IMC (Indice de Massa Corpórea) de uma pessoa,
considerando: 
IMC = Peso / Altura * Altura.
 Permita que este programa seja executado quantas vezes 
o usuário desejar.

*/

let pesoInformado = parseFloat (prompt("Digite seu peso atual:"));
console.log("O peso digitado foi: " + pesoInformado)

let alturaInformado = parseFloat (prompt("Digite a sua altura:"));
console.log("A sua altura informada foi: " + alturaInformado)

let imc = pesoInformado / (alturaInformado  * alturaInformado);
console.log("O seu peso atual é : "+ pesoInformado + "sua altura é "+ alturaInformado + "\nE seu IMC atual é : " + imc)

let continuar = parseInt(prompt("Deseja continuar? \n1- SIM\n2- NÃO "))

while (continuar === 1) {


  pesoInformado = parseFloat (prompt("Digite seu peso atual:"));
  alturaInformado = parseFloat (prompt("Digite a sua altura:"));

  imc = pesoInformado / (alturaInformado * alturaInformado);
  console.log("O seu peso atual é : "+ pesoInformado + "sua altura é "+ alturaInformado + "\nE seu IMC atual é : " + imc)

  continuar = parseInt(prompt("Deseja continuar? \n1- SIM\n2- NÃO "))
}

 console.log("Fim do programa")