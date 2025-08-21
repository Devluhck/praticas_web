/*
 * A empresa “SÓ CALCULO SEM PRECONCEITO” solicita uma solução que alimente
um vetor com 5 valores inteiros. Como resultado deseja que seja apresentado quantos
valores pares foram armazenados neste vetor
 */


programa
{
	
	funcao inicio()
	{
		inteiro vetor[5]
		inteiro contadorPares=0

		para (inteiro i=0; i<5; i++)
		{
	       	escreva("Digite o ", i+1, "º valor inteiro: \n")
	       	leia(vetor[i])
		}
		para (inteiro i=0;i<5;i++)
		{
			se (vetor[i] % 2==0)
			{
				contadorPares++
				
			}
		
		}
		escreva("\nOs quantidade de  pares digitado foram ", contadorPares,"\t")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 547; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor, 13, 10, 5}-{i, 16, 16, 1}-{i, 21, 16, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */