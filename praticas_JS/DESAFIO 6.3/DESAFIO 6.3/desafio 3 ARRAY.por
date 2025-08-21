programa {
    funcao inicio() {
        
        inteiro vetA[10], vetB[10]
        inteiro i
        
       
        para(i = 0; i < 10; i++) 
        {
            vetB[i] = 0
            se(i % 2 == 1) 
            {  
                vetA[i] = i + 1 
                vetA[i] = 2 * (i + 1)
            }
        }
        
        
        para(i = 0; i < 10; i++) 
        {
            enquanto(vetA[i] > i + 1) 
            {  
                vetB[i] = vetA[i]
                vetA[i] = vetA[i] - 1
            }
        }
        
        escreva("Vetor A após primeiro loop: [")
        para(i = 0; i < 10; i++)
        {
            escreva(vetA[i])
            se(i < 9) escreva(", ")
        }
        escreva("]\n")
        
        escreva("Vetor B após segundo loop: [")
        para(i = 0; i < 10; i++) 
        {
            escreva(vetB[i])
            se(i < 9) escreva(", ")
        }
        escreva("]\n")
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 906; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */