/*
    Cria,alimentar e importar os dados de uma matriz
*/

function validaproc() {
    // Criar uma matriz 2x3
    let matriz = []; //matriz vazia
    let linha = 2;
    let coluna

    // Preencher a matriz com a soma dos índices
    for ( i = 0; i < 2; i++) {
        matriz[i] = []; // Criar a linha i
        for (j = 0; j < 3; j++) {
            matriz[i][j] = parseInt(prompt("Digite o valor da " + i + " e coluna" + j));
            console.log("Valor : " + matriz[i][j]);
        }
    }

    // Exibir a matriz
    console.log("Matriz 2x3:");
    for ( i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {

        }

    }
    console.table(matriz);
    return false;

}