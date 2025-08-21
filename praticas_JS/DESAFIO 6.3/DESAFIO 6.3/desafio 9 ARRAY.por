/*
 * A empresa “SÓ CALCULO SEM PRECONCEITO” necessita agora de uma solução
que alimente um vetor com 5 valores inteiros e também que solicite ao usuário a
entrada de dados de um valor inteiro, após as devidas entradas de dados o programa
deve multiplicar o valor informado pelo usuário por cada elemento do vetor sendo que
o resultado deste cálculo deve ser armazenado em outro vetor, em suas respectivas
posições. Como resultado deseja-se a impressão dos valores dos resultados dos
cálculos, armazenados no segundo vetor.
 */

programa
{
	
	funcao inicio()
	{

		inteiro num_vetor[5]
		inteiro num_digitado
		inteiro resultado[5]

		
		escreva("===============================")
		escreva("\n== SÓ CALCULO SEM PRECONCEITO ===\n")
		escreva("================================")

		para(inteiro i=0 ; i<=4 ; i++)
		{

		escreva("\nDigite o ", i+1, " º numero para alimentar o vetor: ")
		leia(num_vetor[i])
		}
		
		escreva("\nDigite o numero que deseja multiplicar ")
		leia(num_digitado)
		
		
		para(inteiro i=0 ; i<=4 ; i++)
		{
			resultado[i]=num_digitado*num_vetor[i]
			escreva("\nO resultado do ", i+1, " vetor ",resultado[i] )
		}
		

		escreva(", ")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1165; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */