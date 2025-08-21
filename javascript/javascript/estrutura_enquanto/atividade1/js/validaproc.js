function validaproc(){

    let i=1;
    let soma = 0;
       
    while(i<=3){

        let num = parseInt(prompt("Digite o número " + i + ":")); 
        i++;
        soma+=num;    
        console.log("O numero informado é : "+num);        
    }

    console.log("A somatoria é :"+soma);
    return false;
}