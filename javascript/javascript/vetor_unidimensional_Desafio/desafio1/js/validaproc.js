/*DESAFIO 1

Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de 
seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas, 
crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie 
outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:

Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2 */

function validaproc(){

    
    let i; 
    let nota1=[];
    let nota2=[];
    let mediaNota=[];

    for(i = 1; i<6; i++){

        nota1[i] = parseFloat(prompt("Digite a nota do primeiro bimestre do "+i+" ª do aluno: "));
        console.log("nota do primeiro bimestre : "+nota1[i])
      
    }

    for(i = 1; i<6;i++){
           
        nota2[i] = parseFloat(prompt("Digite a nota do segundo bimestre "+i+" ª do aluno: "));
        console.log("\nnota do primeiro bimestre : "+nota2[i])
      
    }
         
    for(i = 1; i<6;i++){

        mediaNota[i] = (nota1[i] + nota2[i]) / 2;

        console.log("Média do aluno "+i+" foi : "+mediaNota[i]);

    }
return false; 

}