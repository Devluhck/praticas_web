/*
6.Lista de Compras Inteligente
Situação: Evitar itens duplicados na lista de compras.
Desafio:

Use prompt para perguntar itens ao usuário.

Adicione o item ao array listaCompras apenas se ele não existir.

Mostre a lista final no console.

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);*/

function validaproc() {
  alert("Olá! Vamos criar sua lista de compras.");
  
  let lista = [];
  let continuar = true;
  let  i = 0;

  while (continuar) {
    let item = prompt("Digite um item (ou ENCERRAR para finalizar):");
    
    // Verifica se quer encerrar (sem trim e case sensitive)
    if (item === "ENCERRAR") {
      continuar = false;
    } 
    // Verifica se o item não está vazio 
    else if (item != "") {
      let jaExiste = false;
      
      // Verifica se item já está na lista 
      for ( i = 0; i < lista.length; i++) {
        if (lista[i] === item) {
          jaExiste = true;
          break;
        }
      }
      
      if (jaExiste) {
        alert(item + " já está na lista!");
      } else {
        lista.push(item);
        alert(item + " adicionado!");
      }
    }
  }
  
  // Mostra a lista final de forma simples
  alert("Sua lista final é:");
  for (let i = 0; i < lista.length; i++) {
    alert((i+1) + ". " + lista[i]);
  }
  
  return false;
}