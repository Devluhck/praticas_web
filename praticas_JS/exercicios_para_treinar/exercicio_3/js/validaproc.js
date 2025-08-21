/*

3. Soma de Ímpares
Crie um vetor com 15 números aleatórios entre 1 e 50. Calcule e mostre a soma apenas dos números ímpares.

num % 2 === 1 saber se o numero é impar
num % 2 === 0 saber se o numero é par 
const numeroAleatorio = Math.floor(Math.random() * 50) + 1;

*/


function validaproc() {

  let i;
  let numeroAleatorio = [];
  let impar = 0 ;
  let soma = 0;
  
  for(i = 0 ; numeroAleatorio.length < 15; i ++){

    numeroAleatorio.push(Math.floor(Math.random() * 50) + 1);
    console.log(numeroAleatorio);

    if(numeroAleatorio[i] % 2 !== 0){
      impar++;
      console.log(impar)
      soma +=numeroAleatorio[i]
      
    }
    
  }
  console.log("A soma dos numeros impares é : " + soma)
    return false;
}
