function validaproc(){

    let matriz=[];
    let linha=2;
    let coluna=2;
    let soma = 0;
    let linhasEsc = 0;

    for(i = 0; i < linha; i++){

        matriz [i]= [];

        for(c = 0; c < coluna; c++){

           matriz[i][c] = parseInt(prompt("Digite o valor da linha "+ i + " e coluna "+c));
           console.log("Valor : "+matriz[i][c]);
        }
    }
       

        for(i = 0; i < linha; i++){

            for(c = 0; c < coluna; c++){
    
                document.write(matriz[i][c]+" &nbsp");
            }
            
                document.write("<br>");
        }

        linhasEsc = parseInt(prompt("Digite o número da linha  "+ (linha - 1) + " que deseja somar:"));

        for(c = 0; c < coluna; c++) {
        soma += matriz[linhasEsc][c];
    }   

        document.write("Soma da linha : "+ linhasEsc +" : "+soma);
        console.log("Soma da linha : "+ linhasEsc +" : "+soma);

    return false;

}