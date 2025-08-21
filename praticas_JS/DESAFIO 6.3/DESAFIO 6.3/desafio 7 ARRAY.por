/*
 * A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um
vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os
valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado
na última posição para o valor localizado na primeira posição do vetor.
  */
programa
{
	
	funcao inicio()
	{
		inteiro numero[4]
		
		para (inteiro i = 0; i<=3;i++)
		{
			escreva("\nDigite o ", i+1, " º nuemero: ")
			leia(numero[i])
			
		}
		
		escreva("\nOs numero digitados foram ")
		
		para (inteiro i = 3; i>=0; i--)
		{
			
            escreva(numero[i])
            se (i > 0) 
            {
            	escreva(", ")
            }
            
		}
		
	} 
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 411; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 12, 10, 6}-{i, 14, 16, 1}-{i, 23, 16, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */