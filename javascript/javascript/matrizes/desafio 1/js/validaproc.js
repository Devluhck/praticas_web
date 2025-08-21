/*
Desafio 1
O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
andar.
*/

function validaproc(){

    
    let i; 
    let matriz=[];
    let media=0;
    let acumala=0;
    let somaSalario = 0;
    

    for(i = 0; i<2; i++){
        matriz[i] = [];
        for(j = 0; j<4;j++){
    
            matriz[i][j] = parseInt(prompt("Insira a renda do " + (j + 1) + "º apartamento do " + (i + 1) + "º andar: " ));
            console.log("número " + matriz[i][j]);
            acumala += matriz[i][j];
            somaSalario+= matriz[i][j];
        }
    }

    media = acumala /4;
    console.log("A média dos apartamentos é : R$ "+media);
    console.log("A Soma dos salarios é " + somaSalario)
    
return false; 

}