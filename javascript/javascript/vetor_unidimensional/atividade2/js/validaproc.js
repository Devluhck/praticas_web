function validaproc(){

    
    let i;
    let soma = 0;
    let cont = 0;
   
    let num=[];

    for(i = 0; i<3; i++){

        alert("Você está colocando o valor na posição : " +i)
        num[i]=parseFloat(prompt("A nota do aluno "+i+ " é : "));
      
    }

    // Retirando os valores de cada posição do vetor...
    for(i = 0; i<3;i++){

        if(num[i] >= 7.5){

            console.log("Notas iguais ou superiores do que 7,5 : "+num[i]);
            cont++;
        
        }
           
    }
    console.log("Quantidades de notas iguais ou superiores é : "+cont);
            

return false; 

}