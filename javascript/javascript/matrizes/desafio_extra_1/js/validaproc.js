/*

DESAFIO EXTRA 1
Faça um programa que peça ao usuário os valores de uma matriz 4x4 e mostre os
valores das diagonais dessa matriz.

*/
function validaproc() {

    let matriz = [];


    console.log("Digite os valores da matriz 4x4:");

    for(let i = 0; i < 4; i++){
        matriz[i]= [];
        for(let c = 0; i < 4; i ++){
            matriz[i][c]=Number(prompt(`Alimente a matriz `))

        }

    }
    
    
    console.log("Diagonal principal:");
    for (let i = 0; i < 4; i++) {
        console.log(matriz[i][i]);
    }
    
    
    console.log("Diagonal secundária:");
    for (let i = 0; i < 4; i++) {
        console.log(matriz[i][3 - i]);
    }

    console.table()
    return false;
    
    }
