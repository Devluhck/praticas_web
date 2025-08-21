/*
  Contador de Palavras Únicas
Situação: Contar quantas vezes cada palavra aparece em um texto.
Desafio:

Texto: "casa casa carro casa carro rua".

Transforme o texto em um array de palavras.

Use um objeto para contar as ocorrências de cada palavra.

Saída:

text
{ casa: 3, carro: 2, rua: 1 }  

Dica: Inicialize um objeto vazio (const contador = {}) e incremente as contagens.

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 

*/


function validaproc() {

  alert("Bem Vindo ao Contador de Palavras Únicas");

  alert("Texto: casa ,casa ,carro ,casa ,carro ,rua")
//    let soma = numeros.reduce((total, n) => total + n, 0); // 6 
 const texto = ["casa", "casa", "carro", "casa", "carro", "rua"];
  const contador = texto.reduce((acumulador, palavra) => {
    acumulador[palavra] = (acumulador[palavra] || 0) + 1;
    return acumulador;
  }, {}); // {} é o valor inicial (objeto vazio)

  console.log(contador);
  return false;
}

