/*
Desafio 4

O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
de todos os elementos.

*/
function validaproc() {

    let c;
    let i;
    let matriz = [];
    let linha = 2;
    let coluna = 3;
    let soma = 0
    let somaTotal = 0;


    for (i = 0; i < linha; i++) {
        matriz[i] = [];
        for (c = 0; c < coluna; c++) {
            matriz[i][c] = parseFloat(prompt("Digite o valor da linha " + i + " e coluna " + c));
            console.log("Valor : " + matriz[i][c]);  
            somaTotal+=matriz[i][c];
        }
    }

    console.table(matriz);

    for (i = 0; i < linha; i++) {
        for (c = 0; c < coluna; c++) {
            soma+=matriz[i][c];
        }
        console.log(`A soma de todas  ${i+1} é: ${soma}`);
    }

    console.log(`A soma total da matriz é ${somaTotal}`);
    
  

    return false;
    
    }
