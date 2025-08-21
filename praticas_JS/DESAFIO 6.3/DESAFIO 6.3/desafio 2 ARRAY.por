/*
 * Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de
seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas,
crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie
outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:
Média da Nota[1] = (Nota do vetor A[1] + Nota do vetor B[1]) / 2

 */

 
programa
{
	
	funcao inicio()
	{
		real mediaAluno[5]
		real notaA[5]
		real notaB[5]
		inteiro i
	

	
        escreva("Digite as notas do vetor (A) (primeira nota de cada aluno):\n\n")
        
        para( i = 0; i < 5; i++) 
        {
            escreva("Nota (A) do aluno ", i+1, ": ")
            leia(notaA[i])
        }
	
		
        escreva("\n\nDigite as notas do vetor (B) (primeira nota de cada aluno):\n\n")
        
        para( i = 0; i < 5; i++) 
        {
            escreva("Nota (B) do aluno ", i+1, ": ")
            leia(notaB[i])
        }
		    para( i = 0; i < 5; i++) 
        {
            mediaAluno[i] = (notaA[i] + notaB[i]) / 2
        }
        
        
        escreva("\nMédias dos alunos:\n")
        
        para( i = 0; i < 5; i++) 
        {
            escreva("A media o aluno ", i+1, ": ", mediaAluno[i], "\n")
        }
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 487; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */