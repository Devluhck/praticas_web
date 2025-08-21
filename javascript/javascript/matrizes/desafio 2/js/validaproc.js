/*
Desafio2 
A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
números reais e mostre a soma de seus elementos.
*/
function validaproc() {

    let c;
    let i;
    let matriz = [];
    let linha = 4;
    let coluna = 3;
    let soma = 0;


    for (i = 0; i < linha; i++) {
        matriz[i] = [];
        for (c = 0; c < coluna; c++) {
            matriz[i][c] = parseFloat(prompt("Digite o valor da linha " + i + " e coluna " + c));
            console.log("Valor : " + matriz[i][c]);
            console.log(matriz[i][c]);
            soma += matriz[i][c];
        }
    }

    console.table(matriz)
    console.log(`A soma da matriz é ${soma}`)

    return false;
    
    }
