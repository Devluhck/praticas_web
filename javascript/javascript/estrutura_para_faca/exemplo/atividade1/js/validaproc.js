function validaproc(){

    if(document.frmtabuada.txttabuada.value==""){

        alert("Preencha o campo Número");
        document.frmtabuada.txttabuada.focus();
        return false;

    }else {

        let num=parseInt(document.getElementById('tabuada').value);
        for(let i = 1; i <+ 11; i++){

            console.log(num + "x" + i + " = " + num * i);

        }

            return false;
     
    }


    
}