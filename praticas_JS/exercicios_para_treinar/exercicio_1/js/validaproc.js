/*

1. Relatório de Notas
Faça um programa para ler as notas de 10 alunos, depois exiba:

Todas as notas iguais ou superiores a 7.5

A quantidade total de notas nessa faixa.

*/


function validaproc() {

  let i;
  let notas = [];
  let notasAltas = [];

  for (i = 1; i <= 3; i++) {
    notas[i] = parseFloat(prompt("Digite a " + i + "º nota do aluno"));
    console.log("A nota do " + i + "º aluno foi: " + notas[i]);
    if (notas[i] >= 7.5) {

      notasAltas.push(notas[i]);

    }

  }
  console.log("As notas altas foram: " + notasAltas);
  console.log("Total: " + notasAltas.length + " notas superior ou igual a 7.5");

  return false;
}