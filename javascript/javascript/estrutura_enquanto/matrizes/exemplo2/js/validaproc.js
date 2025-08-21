function validaproc(){

    
    let i; 
    let matriz=[];
    let media=0;
    let acumala=0;
   
    

    for(i = 0; i<2; i++){

        matriz[i] = [];

        for(j = 0; j<4;j++){
           
            matriz[i][j] = parseInt(prompt("Insira a renda do " + (j + 1) + "º apartamento do " + (i + 1) + "º andar: " ));
            console.log("número " +matriz[i][j]);
            acumala += matriz[i][j];
        }
    }

    media = acumala /4;
    console.log("A média dos apartamentos é : R$ "+media);
    
return false; 

}