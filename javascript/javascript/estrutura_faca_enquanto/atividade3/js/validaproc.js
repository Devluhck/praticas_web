function validaproc(){

  let totalAlunos = 0;
  let somaMedia = 0;

  for(let i = 1; i <= 3; i++){
    console.log("Cadastro de alunos para a turma " + i);
    let alunosAcima7 = 0;
    let alunosTurma = 0;

    let continuar;

    do{

      let nota1 = parseFloat(prompt("Digite a primeira nota do aluno da turma " + i + ":"));
      let nota2 = parseFloat(prompt("Digite a segunda nota do aluno da turma " + i + ":"));
      let nota3 = parseFloat(prompt("Digite a terceira nota do aluno da turma " + i + ":"));

      let media = (nota1 + nota2 + nota3) / 3;

      if(media >= 7){
        
        alunosAcima7++;

      }

      somaMedia += media;
      totalAlunos++;
      alunosTurma++;

      continuar = prompt("Deseja cadastrar outro aluno para esta turma? (s/n): ");

    }while(continuar === "s" || continuar === "S");

    console.log("Total de alunos cadastrados na turma " + i + ": " + alunosTurma);
    console.log("Alunos com média >= 7 na turma " + i + ": " + alunosAcima7);
  }

    if(totalAlunos > 0){

        let mediaGeral = somaMedia / totalAlunos;
        console.log("Média geral da escola: " + mediaGeral.toFixed(2));

    }else{

        console.log("Nenhum aluno cadastrado. Não é possivel calcular a média.");
  }
}