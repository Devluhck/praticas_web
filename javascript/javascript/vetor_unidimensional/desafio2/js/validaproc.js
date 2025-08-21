/*DESAFIO 2

Professor “Ludovico Volpato” está de volta e deseja uma solução que alimente um 
vetor com 10 valores inteiros e também que solicite ao usuário a entrada de dados de 
um valor inteiro qualquer. A solução deverá fazer uma busca do valor, informado pelo 
usuário, no vetor e imprima a posição em que este foi encontrado ou se não foi 
encontrado.

 */

function validaproc(){

    
    let i; 
    let vetor=[];
    let posicao=0;
    let valorInt = 0;
    let encontrou = false;

    for(i = 1; i<11; i++){

        vetor[i] = parseInt(prompt("Digite um número : "));
        console.log("número " +vetor[i]);
      
    }

        valorInt = parseInt(prompt("Digite um número inteiro que está no vetor : "))

    for(i = 1; i<11;i++){
           
        if(valorInt === vetor[i]){

            posicao = i;
            encontrou = true;

        }
    }

    if(! encontrou){

        console.log("Valor inteiro "+valorInt+" não foi encontrado");

    }else{

        console.log("Valor inteiro "+valorInt+" foi encontrado na posição "+posicao+"ª");
    }
    
return false; 

}