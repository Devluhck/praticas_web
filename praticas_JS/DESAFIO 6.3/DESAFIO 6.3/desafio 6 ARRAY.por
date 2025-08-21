/*A empresa “CONSTATA TUDO LTDA.” solicitou uma solução que alimente um vetor
com 10 números inteiros e imprima o maior valor armazenado neste.

 */

programa
{
	
	funcao inicio()
	{
		inteiro numero[10]
		inteiro contador


		para(inteiro i=0; i<=9; i++)
		{
			escreva("\nDigite o ", i +1, " º numero: ")
			leia(numero[i])
			
		}

		contador=numero[0]

		para(inteiro i=0; i<=9; i++)
		{
			se (numero[i] > contador)
			{
				contador = numero[i]
			}
		}
		escreva("\nO numero digitado foi :", contador)
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 149; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 11, 10, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */