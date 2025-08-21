/*
Desafio 3 

A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original 
e a nova.
7
*/
function validaproc() {

    let c;
    let i;
    let matriz = [];
    let novaMatriz =[];
    let linha = 2;
    let coluna = 2;
    


    for (i = 0; i < linha; i++) {
        matriz[i] = [];
        novaMatriz[i]= [];
        for (c = 0; c < coluna; c++) {
            matriz[i][c] = parseFloat(prompt("Digite o valor da linha " + i + " e coluna " + c));
            console.log("Valor : " + matriz[i][c]);
            console.log(matriz[i][c]);
            novaMatriz[i].push(matriz[i][c] * 2);
            
        }
    }

    

    console.table(matriz);
    console.table(novaMatriz)
  

    return false;
    
    }
