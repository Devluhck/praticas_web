/*DESAFIO 4 

A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um 
vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os 
valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado 
na última posição para o valor localizado na primeira posição do vetor
 */

function validaproc(){

    
    let i; 
    let vetor=[];
    let valorDes=[];
    let cont=0;
   
    

    for(i = 0; i<4; i++){

        vetor[i] = parseInt(prompt("Digite um número : "));
        console.log("número " +vetor[i]);
        cont += 1;
        valorDes[4 - cont] = vetor[i];      
    }


    for(j = 0; j<4;j++){
           
        console.log(valorDes[j]);
    }

    
return false; 

}