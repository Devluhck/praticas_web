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

  let continuar = true;
  let livros = ["O Senhor dos Anéis", "Dom Quixote", "1984"];


  while (continuar) {

    let buscar = prompt("Digite um titulo de livro para realizar a busca na biblioteca\n ou 'encerrar' para sair do programa de busca");
    console.log("Você digitou : " + buscar);

    if (buscar === "") {
      alert("Campo VAZIO ou título inexistente digite um outro titulo de livro\n ou encerrar para sair do programa de busca")

    } else if (livros.includes(buscar)) {
      alert(`Você escolheu o livro ${buscar} Otima escolha boa leitura`)

    } else {

      if (buscar.toUpperCase() === "ENCERRAR") {
        alert("Programa finalizado! Volte sempre")
        continuar = false;
      } else {
        alert("Livro não encontrado. Tente outro título.");
      }

    }

  }
  return false;

}