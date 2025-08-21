/*

FAÇA UM ALGORITMO PARA LER AS NOTAS DE 3 ALUNOS OBTIDAS PELOS ALUNOS,
E DEPOIS EXIBIR UM RELATORIO DAS NOTAS IGUAIS OU
SUPERIORES A 7,5

*/


function validaproc() {

    let i;
    let soma = 0;
    let resultado = 0;

    let num = [];
    // ALIMENTANDO O VETOR 
    for (i = 0; i < 3; i++) {

        //  alert("Digite a nota do " + i + " Aluno ");
        num[i] = parseFloat(prompt("Digite a nota :"));
        soma += num[i]


    }
    for (i = 0; i < 3; i++) {

        // alert("Digite a nota do " + i + " Aluno  é :"+ num );

        if (num[i] >= 7.5) {

            alert("Nota iguais ou superiores a 7,5" + num[i]);

        }
    }
}