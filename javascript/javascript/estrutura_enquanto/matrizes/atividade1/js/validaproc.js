function validaproc(){

    let matriz=[];
    let linha=3;
    let coluna=3;
    let multiplica = 0;

    for(i = 0; i < linha; i++){

        matriz [i]= [];

        for(c = 0; c < coluna; c++){

           matriz[i][c] = parseInt(prompt("Digite o valor da "+ i + " e coluna "+c));
           console.log("Valor : "+matriz[i][c]);
        }
    }

        multiplica = parseInt(prompt("Digite um número inteiro : "));
        console.log("\nMultiplica vezes : "+ multiplica);

        for(i = 0; i < linha; i++){

            for(c = 0; c < coluna; c++){
    
                matriz[i][c]= multiplica * matriz[i][c];
                document.write(matriz[i][c]+" &nbsp");
                console.log("Resultado da multiplicação : "+matriz[i][c]);
            }
            
                document.write("<br>");
        }

    return false;

}