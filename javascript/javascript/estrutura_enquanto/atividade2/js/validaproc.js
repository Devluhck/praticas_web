function validaproc(){

    let i=1;
    let maiorNum = 0;
       
    while(i<=3){

        let num = parseInt(prompt("Digite o número " + i + ":")); 
        i++;
        if(num >= maiorNum){

             maiorNum = num;
             num = maiorNum;
            
        }
        
        console.log("O numero informado é : "+num);        
    }

    console.log("O maior número : "+maiorNum);   
    return false;
}