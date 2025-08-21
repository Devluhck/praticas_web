/*
    Crie uma matriz (2x2) onde o valor de cada elemento dentro da matriz é a soma dos indices da sua posição
*/

function validaproc(){
// Criar uma matriz 2x2
let matriz = [];

// Preencher a matriz com a soma dos índices
for (let i = 0; i < 2; i++) {
    matriz[i] = []; 
    for (let j = 0; j < 2; j++) {
        matriz[i][j] = i + j; 
    }
}


console.log("Matriz 2x2:");
for (let i = 0; i < 2; i++) {
    console.log(matriz[i]);
}

    return false;

}