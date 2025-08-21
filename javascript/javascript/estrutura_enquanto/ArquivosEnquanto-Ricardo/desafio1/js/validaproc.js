/*Faça um programa que peça ao usuário dois números. Após, enquanto ele não digitar 
o resultado correto da soma desses dois números, mostre na tela “tente novamente”, 
quando acertar “resultado correto!”. */

function validaproc(){

    let i=1;
    let soma = 0;
            
    while(i<=2){

        let num = parseInt(prompt("Digite o número " + i + ":")); 
        i++;
        console.log("O numero informado é : "+num); 
        soma+=num;     
           
    }
    console.log("A somatoria é :"+soma);
    
    let resultado = parseInt(prompt("Digite o resultado da soma :")); 

        if(soma != resultado){

            alert("Tente novamente");

        }else{

            console.log("Resultado correto");
        }
        
    return false;

}