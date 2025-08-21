//pedir para o usuario digitar um numero ✅                          
//converter em numero inteiro    ✅                                
//pedir para o usuario digitar outro numero   ✅                    
//converter em numero inteiro         ✅               
//mostrar a subtração concatenando com o texto "a subtração é: ..."                        
//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..." 


//mostrar a divisão concatenando com o texto "a divisão é: ..."                        
//mostrar a soma concatenando com o texto "a soma é: ..."
alert("DIGITE 2 NUMERO QUANDO FOR SOLICITADO ")

let numero1 = parseInt(prompt("Digite o primeiro numero: "))
console.log("O numero digitado foi " +numero1)

let numero2 = parseInt(prompt("Digite o segundo numero:"))
console.log("O numero digitado foi " +numero2)

let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2

console.log("A subtração é :" + subtracao)

console.log("A multiplicação é : " + multiplicacao)


