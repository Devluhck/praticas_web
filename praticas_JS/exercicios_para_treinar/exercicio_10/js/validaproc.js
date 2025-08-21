/*
9. Busca de Livros por Título
Situação: Encontrar um livro em uma estante (array).
Desafio:

Array: livros = ["O Senhor dos Anéis", "Dom Quixote", "1984"].

Use while para perguntar ao usuário um título e buscar no array.

Se encontrar: "Livro encontrado!"

Se não: "Livro não encontrado. Tente outro título."

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);
total = precosProdutos.reduce((acumulador ,valorInicial) => acumulador + valorInicial,0);
*/


function validaproc() {

  const tarefas = [
  { tarefa: "Lavar louça", urgente: false },
  { tarefa: "Pagar contas", urgente: true },
  { tarefa: "Estudar JavaScript", urgente: true },
  { tarefa: "Regar as plantas", urgente: false }
];

  const urgentes = tarefas.filter(tarefa => tarefa.urgente === true);

  for (let i = 0; i < urgentes.length; i++) {
  console.log(`${i + 1}. ${urgentes[i].tarefa} (URGENTE)`);
}

  return false;

}