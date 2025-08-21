/*
Desafio 3 

Você criará um algoritmo que peça a idade, o gênero e o salário de um grupo de 
pessoas. Quando o usuário quiser sair e encerrar o programa, ele deve digitar 
“Finalizar”. Não se esqueça de validar para que o usuário digite exatamente 
“Finalizar”. Ao final, você deve apresentar ao usuário:

● A média de salário do grupo;
● A média de todas as idades;
● A média de salário do gênero feminino;
● A média de salário do gênero masculino.

*/

let idade = 0;
let genero = 0;
let salario = 0;
let masculino = 0 ;
let feminino = 0;
let total_Idade = 0;
let mediaSalarioGrupo = 0;
let mediaSalarioFemino = 0;
let mediaSalarioMasculino = 0 ;
let grupoDePessoas = 0;

let numeroDeCadastro = parseInt(prompt("Digite quantas pessoas deseja cadastrar: "));
alert("Sera cadastrado : " + numeroDeCadastro + "pessoas");

while (grupoDePessoas < numeroDeCadastro) {

  idade = parseInt(prompt("Digite sua idade "))
  alert("Idade digitada foi "+ idade)
  
  total_Idade += idade;
  alert(total_Idade)

  salario = parseInt(prompt("Digite sua salario "))
  alert("Idade digitada foi "+ salario)
  
  total_Salario += salario
  alert(mediaSalarioGrupo)

  genero = parseInt(prompt("Digite seu genero \n1 - Masculino\n2 - Feminino "))
  alert("Idade digitada foi "+ genero)

    if (genero === 1) {

      masculino++
      mediaSalarioMasculino = masculino / salario  
    }
    else if(genero === 2){

      feminino++
      mediaSalarioFemino = feminino / salario

    }else {

      alert("Genero invalido ")

    }

  
}
