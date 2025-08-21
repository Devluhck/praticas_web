function validaproc(){

    let i=1;
    let soma = 0;
         
    while(i<=3){

        let num = parseInt(prompt("Digite o número " + i + ":")); 
        i++;
        if(num % 5 === 0){

            console.log(num+" é divisivel por 5");  
            soma += num;

        }       
    }

    console.log("A soma dos números divisiveis por 5 é:"+soma);   
    return false;
}