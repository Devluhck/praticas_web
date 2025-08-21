/*
4. Temperaturas Acima da Média
Leia 12 temperaturas (em um array) e:
Calcule a média mensal.
Exiba quantos dias tiveram temperatura acima da média.

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);
O método .trim() remove todos os espaços em branco do início e do final de uma string.*/

function validaproc() {
  let listaCompras = [];
  let continuar = true;
  
  alert("Adicione itens à lista de compras.\nDigite 'ENCERRAR' para finalizar.");

  while (continuar) {
    let item = prompt("Digite um item para adicionar à lista:");
    
    if (item === null || item.toUpperCase() === "ENCERRAR") {
      continuar = false;
    } else if (item.trim() !== "") {
      // Verifica se o item já existe na lista (ignorando maiúsculas/minúsculas)
      if (!listaCompras.some(existente => existente.toLowerCase() === item.toLowerCase())) {
        listaCompras.push(item);
        console.log("Item adicionado: " + item);
      } else {
        alert("Este item já está na lista!");
      }
    }
  }

  console.log("Lista final de compras:");
  console.log(listaCompras);
  
  return false; // Para evitar o submit do formulário
}