/*

FAÇA UM PROGRAMA PARA LER AS NOTAS OBTIDAS PELOS
ALUNOS, E DEPOIS EXIBIR UM RELATORIO DAS NOTAS IGUAIS
OU SUPERIORES A 7,5 E TAMBEM
NO FINAL A QUANTIDADE DE NOTAS IGUAL OU SUPERIOR A 
7,5

*/

function validaproc() {

    alert("DIGITE A NOTAS DOS ALUNOS");
    console.log("Notas >= 7.5 APROVADOS");

    let i = 1;
    let totalNotas = 0;
    let notas = [];

    for (i = 1; i <= 3; i++) {

        notas[i] = parseFloat(prompt("Digite a " + i + "º nota do aluno: "));
        console.log("Nota do aluno foi : " + notas[i]);

        if (notas[i] >= 7.5) {

            console.log("Nota ALTA : " + notas[i]);
            totalNotas++;
        }

    }
    console.log("Total de notas superior ou igual a 7.5 é " + totalNotas);

    return false;
}

