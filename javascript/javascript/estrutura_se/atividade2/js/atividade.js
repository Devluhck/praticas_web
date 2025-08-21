function procuFormulario(){

    //validação de campos
    if(document.frmcompara.txtnumero1.value==""){

        alert("Preencha o campo Nota 1");
        document.frmcompara.txtnumero1.focus();
        return false; 

    }else if(document.frmcompara.txtnumero2.value==""){

            alert("Preencha o campo Nota 2");
            document.frmcompara.txtnumero2.focus();
            return false; 

              }else{

                    //Processamento do pragarma...
                    let nota1 = parseFloat(document.getElementById('numero1').value);
                    let nota2 = parseFloat(document.getElementById('numero2').value);
                    
                    if (numero1 > numero2) {

                         alert("Número 1 é maior que Número 2.");

                    } else if (numero2 > numero1) {

                         alert("Número 2 é maior que Número 1.");

                    } else {

                         alert("Número 1 é igual ao Número 2.");
                        
                        }
                
              }
                
}