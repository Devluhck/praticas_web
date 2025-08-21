function validaproc(){

    if(document.frmtabuada.txttabuada.value==""){

        alert("Preencha o campo Número");
        document.frmtabuada.txttabuada.focus();
        return false;

    }else{

        let num=parseInt(document.getElementById('tabuada').value);
        cont=1;
        console.log("Tabuada do número"+num);
        do{
            console.log(num + "x" + cont + " = " + num * cont);
            cont = cont+1;

        }while(cont <=10)

            return false;
    }

}

    
    

    