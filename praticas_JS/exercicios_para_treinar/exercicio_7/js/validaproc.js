/*
7.Filtro de Notas Escolares
Situação: Separar alunos aprovados (nota ≥ 7).
Desafio:
Dado o array notas = [5.5, 8, 7.2, 4, 9, 6.3]:
Crie um novo array aprovados com notas ≥ 7.
Conte quantos foram reprovados (nota < 7).
Saída:
text
Aprovados: [8, 7.2, 9]  
Reprovados: 3  

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);*/

function validaproc() {
 
  let  aprovados = [];
  let  aprovado = 0;
  let reprovados = [];
  let reprovado = 0;
  let continuar = true;
  let notas ;
  let entrada ;

  while (continuar) {
    entrada = prompt("Digite uma nota ou 'finalizar' para sair do programa ");
    console.log(entrada);

    if(entrada === "finalizar"){
      continuar = false;
    }else{
      notas = parseFloat(entrada);
    } if (notas >= 7.5) {
      aprovado++;
      aprovados.push(notas);
      } else{
      reprovado++;
      reprovados.push(notas);
     }
    
  }

   alert("Os aprovados foram: " + aprovados + "\nOs reprovados foram: " + reprovados + "\nTotal de aprovados: " + aprovado + "\nTotal de reprovados: " + reprovado);

    return false;
}