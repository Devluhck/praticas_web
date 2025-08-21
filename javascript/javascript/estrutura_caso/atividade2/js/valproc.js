function procFormulario(){

        if(document.frmcalculo.txtnum1.value==""){

            alert("Preencha o campo primeiro número");
            document.frmcalculo.txtnum1.focus();
            return false;
            }else if(document.frmcalculo.txtnum2.value==""){
      
                alert("Preencha o campo segundo número");
                document.frmcalculo.txtnum2.focus();
                return false;

                }else if(document.frmcalculo.txtopera.value==""){

                    alert("Preencha a operação que deseja?");
                    document.frmcalculo.txtopera.focus();
                    return false;    
                    }else{

                        let num1 = parseFloat(document.getElementById('num1').value);
                        let num2 = parseFloat(document.getElementById('num2').value);
                        let operacao = parseFloat(document.getElementById('operacao').value);
                        
                        switch(operacao){

                            case 1:
                                    resultado = num1 + num2;
                                    alert("Soma = "+ resultado);
                            break
                            case 2:
                                    resultado = num1 - num2;
                                    alert("Subtração = "+ resultado);
                            break
                            case 3:
                                    resultado = num1 * num2;
                                    alert("Multiplicação = "+ resultado)
                            break
                            case 4:
                                    if(num2 == 0){

                                        alert("Erro");
                                        break;
                                    }
                                    resultado = num1 / num2;
                                    alert("Divisão = "+ resultado)
                            break
                            default:
                                    ("Operação Invalida");
                                    
                        }

                        if(resultado % 2 == 0){

                            alert("Par");

                            }else{

                                alert("Impar");
                            }
                    }
        
        
}