/*
 Simulador de Fila de Banco
Situação: Gerenciar clientes em uma fila de banco.
Desafio:
Array inicial: fila = ["João", "Maria", "Pedro"].
Menu interativo (use prompt ou console.log):
Adicionar cliente (final da fila).
Atender próximo cliente (remove o primeiro da fila).
Mostrar fila atual.
Sair.
Exemplo de saída:
text
Fila atual: ["Maria", "Pedro", "Ana"]  
Dica: Use while para manter o menu em loop até o usuário sair.

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);
total = precosProdutos.reduce((acumulador ,valorInicial) => acumulador + valorInicial,0);
const urgentes = tarefas.filter(tarefa => tarefa.urgente === true)
*/


function validaproc() {

  alert("BEM VINDO AO SIMULADOR DE FILA DE BANCO")

  let filaInicial = ["João", "Maria", "Pedro"];
  let sair = true; 
  let menu = 0;

  while (sair) {

    alert(`Fila atual : ${filaInicial}`);
    alert("Digite a opção que deseja realizar.");

    menu = parseInt(prompt("1 - Adicionar cliente.\n2 - Atender próximo cliente.\n3 - Mostrar fila atual.\n4 - Sair do simulador."));
    if (menu === 1) {
      let adicionar = prompt("Digite o nome do clinte");
      filaInicial.push(adicionar);
      alert("Cliente adicionado com sucesso.");
      console.log(filaInicial);

    } else if (menu === 2) {
      alert(`Proximo cliente chamado Sr(ª) ${filaInicial[0]}`);
      filaInicial.shift();
      alert(`Fila atual : ${filaInicial}`);

    } else if (menu === 3) {
      alert(`Fila atual : ${filaInicial}`);
    } else {
      
      alert("Simulador encerrado com sucesso ")

      sair = false;

    }

  }
  return false;

}