/*

Gere um vetor de 10 posições, onde cada elemento é o quadrado do seu índice (posição).
Exemplo: [0, 1, 4, 9, ..., 81] (posições 0 a 9).

*/


function validaproc() {

 

let i ;
let vetor = [0,1,2,3,4,5,6,7,8,9];
let quadrado = [];

for (i = 0; i < vetor.length; i++) {
    quadrado.push(Math.pow(vetor[i], 2));

 console.log(quadrado);
 
 

    
}
  console.log(quadrado[1]); 

    return false;
}
