/*A academia de ginástica “SÓENGORDA LTDA.” necessita de uma solução que 
calcule e informe o IMC (Indice de Massa Corpórea) de uma pessoa, considerando: 
IMC = Peso / Altura * Altura. Permita que este programa seja executado quantas vezes 
o usuário desejar.*/


function validaproc(){

    
    let imc = 0;
    let continuar = "s" && "S";
    

        while(continuar === "s" || continuar === "S"){

        let peso =  parseFloat(prompt("Digite seu peso em KG : ")); 
        let altura =  parseFloat(prompt("Digite sua altura em metros : "));
    
        if(altura <= 0){
    
            console.log("Altura Inválida. Tem que ser maior que zero");
    
        }else{
    
            imc = peso / (altura * altura);
            console.log("Seu imc é : "+imc);
        }

        if(imc <=18.5){

            console.log("Abaixo do peso");

        }else if(imc > 18.5 && imc <= 24.9){

                console.log("Peso ideal: Parabéns!");

            }else if(imc >= 25 && imc < 30){

                    console.log("Sobrepeso");

                }else if(imc >30 && imc <= 35){

                        console.log("Obesidade grau I");

                    }else if(imc > 35 && imc <= 40){

                            console.log("Obesidade grau II (severa)");

                        }else{

                            console.log("Obesidade grau III (mórbida)");
                        }

        continuar = prompt("Deseja cadastrar outro IMC ? (s/n): ");
    }
    console.log("Programa finalizado");
    return false;
}