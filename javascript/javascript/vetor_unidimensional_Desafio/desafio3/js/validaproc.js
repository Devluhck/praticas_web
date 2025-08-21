/*DESAFIO 3 

A empresa “SÓ CALCULO SEM PRECONCEITO” necessita agora de uma solução 
que alimente um vetor com 5 valores inteiros e também que solicite ao usuário a 
entrada de dados de um valor inteiro, após as devidas entradas de dados o programa 
deve multiplicar o valor informado pelo usuário por cada elemento do vetor sendo que 
o resultado deste cálculo deve ser armazenado em outro vetor, em suas respectivas 
posições. Como resultado deseja-se a impressão dos valores dos resultados dos 
cálculos, armazenados no segundo vetor.

 */

function validaproc(){

    
    let i; 
    let vetor=[];
    let valorResultado=[];
    let multiplicador=0;
   
    

    for(i = 1; i<6; i++){

        vetor[i] = parseInt(prompt("Digite um número : "));
        console.log("número " +vetor[i]);
      
    }
        multiplicador = parseInt(prompt("Digite um número para multiplicação : "))

    for(i = 1; i<6;i++){
           
        valorResultado[i] = vetor[i] * multiplicador;
        console.log("Resultado : "+valorResultado[i]);
    }

    
return false; 

}