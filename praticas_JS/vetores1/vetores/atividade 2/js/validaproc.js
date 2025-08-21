/*

FAÇA UM PROGRAMA PARA LER AS NOTAS OBTIDAS PELOS
ALUNOS, E DEPOIS EXIBIR UM RELATORIO DAS NOTAS IGUAIS
OU SUPERIORES A 7,5 E TAMBEM
NO FINAL A QUANTIDADE DE NOTAS IGUAL OU SUPERIOR A 
7,5

*/


function validaproc()
{
  

  let notas=[];

  for(let i=1; i<4; i++){
      notas[i]=parseFloat(prompt("Digite a "+i+"° nota dos Alunos :"));
      if(notas[i] >= 7.5){
          console.log("A nota do "+i+"° Aluno foi :"+notas[i]); 
      } 
  }
  return false;
}