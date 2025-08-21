/*Você criará um algoritmo que peça a idade, o gênero e o salário de um grupo de 
pessoas. Quando o usuário quiser sair e encerrar o programa, ele deve digitar 
“Finalizar”. Não se esqueça de validar para que o usuário digite exatamente 
“Finalizar”. Ao final, você deve apresentar ao usuário:

● A média de salário do grupo;
● A média de todas as idades;
● A média de salário do gênero feminino;
● A média de salário do gênero masculino.*/


function validaproc(){

    let totalSalario = 0;
    let totalIdade = 0;
    let totalPessoas = 0;
    let salarioFeminino = 0;
    let contSalarioF = 0;
    let salarioMasculino = 0;
    let contSalarioM = 0;

    while(true){

        let idade = parseInt(prompt("Digite sua idade : "));
        
        let genero = prompt("Digite M(masculino); F(feminino);");
        if(genero !== "F" && genero !== "M"){

            genero = prompt("Genero Inválido - Digite F para ferminino ou M para masculino : ");
        }
        let salario = parseFloat(prompt("Digite seu sálario : "));

        totalSalario += salario;
        totalIdade += idade;
        totalPessoas++;

        if(genero === "F"){

            salarioFeminino+=salario;
            contSalarioF++;

        }else if(genero === "M"){

            salarioMasculino+=salario;
            contSalarioM++;
        }

        let entrada = prompt("Digite 'Finalizar' para encerrar, ou qualquer tecla para continuar : ");

        if(entrada === "Finalizar"){

            break;
        }

    }
        console.log("média de salário do grupo : R$ "+ totalSalario /totalPessoas);
        console.log("Media da idade : "+ totalIdade /totalPessoas);

        if(salarioFeminino > 0){

        console.log("Media do sálario Feminino: R$ "+salarioFeminino / contSalarioF );

        }

        if(salarioMasculino > 0){

        console.log("Media do sálario Masculino: R$ "+salarioMasculino / contSalarioM );
    }
    return false;


    
}

   