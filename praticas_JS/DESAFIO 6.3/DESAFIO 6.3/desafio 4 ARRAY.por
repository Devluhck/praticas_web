programa {
    funcao inicio() {
        
        inteiro vetor[10]
        inteiro valorBusca
        logico encontrado = falso
        
        
        escreva("Digite 10 valores inteiros para preencher o vetor:\n")
        
        para(inteiro i = 0; i < 10; i++) 
        {
            escreva("Posição ", i+1, ": ")
            leia(vetor[i])
        }
        
        
        escreva("\nDigite o valor inteiro que deseja buscar: ")
        leia(valorBusca)
        
       
        para(inteiro i = 0; i < 10; i++) 
        {
            se(vetor[i] == valorBusca) 
            {
                escreva("\nValor encontrado na posição: ", i+1, "\n")
                encontrado = verdadeiro
             pare 
            }
        }
        
        
        se (encontrado) 
        {
            escreva("\nValor não encontrado no vetor.\n")
         
        }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 465; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */