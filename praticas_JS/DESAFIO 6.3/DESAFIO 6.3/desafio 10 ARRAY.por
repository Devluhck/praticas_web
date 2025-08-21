/*
 * Professor “Ludovico Volpato” necessita de uma solução que alimente 2 vetores com
valores reais e após, armazenar em um terceiro vetor a soma dos elementos dos 2
vetores, respeitando as mesmas posições, ou seja, o valor da posição 1 do primeiro
vetor, somar com o valor da posição 1 do segundo vetor e assim por diante. Imprimir
os valores do terceiro vetor que, por sua vez, conterá a soma dos valores dos vetores.
 */

programa
{
	
	funcao inicio()
	{
		real primeiro[2]
		real segundo[2]
		real terceiro [2]
		real soma

		para (inteiro i=0; i<=1;i++)
		{
			escreva("\nDigite o ", i+1, " º numero: ")
			leia(primeiro[i])
		}
		para (inteiro i=0; i<=1;i++)
		{
			escreva("\nDigite o ", i+1, " º numero do segundo vetor : ")
			leia(segundo[i])
		}
		para (inteiro i=0; i<=1;i++)
		{
			
			terceiro[i]=primeiro[i]+segundo[i]
			
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 843; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {primeiro, 14, 7, 8}-{segundo, 15, 7, 7}-{terceiro, 16, 7, 8}-{soma, 17, 7, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */