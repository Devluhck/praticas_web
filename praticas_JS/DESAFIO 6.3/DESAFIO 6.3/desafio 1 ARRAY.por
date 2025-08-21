/*
 * Você foi contratado por uma empresa que oferece o serviço de síndico profissional
para condomínios. Eles precisam de um pequeno cadastro para administrar as 4
(quatro) famílias que moram no Condomínio Studiare Molto. O cliente quer uma
aplicação em que ele possa inserir: o sobrenome da família, o apartamento em que
moram; a quantidade de moradores; e a renda da família. Após inseridas as
informações, o síndico profissional quer poder pesquisar cada uma dessas famílias
cadastradas por meio do apartamento em que moram. Assim, o programa deverá
mostrar de maneira organizada as seguintes informações na seguinte ordem:
● Apartamento
● Sobrenome da família
● Renda total
● Renda per capita (Renda total / quantidade de moradores)
O usuário pode realizar quantas pesquisas desejar, encerrando o programa apenas
quando não quiser saber mais nada
 */




programa
{
    funcao inicio()
    {
        
        cadeia sobrenomes[4]
        inteiro apartamentos[4]
        inteiro moradores[4]
        real rendas[4]
        inteiro aptoPesquisa
        logico encontrou
        cadeia continuar

        
        escreva("CADASTRO CONDOMÍNIO STUDIARE MOLTO\n")
        
        para(inteiro i = 0; i < 4; i++)
        {
            escreva("\nCadastro da Família ", i+1, ":\n")
            
            escreva("Sobrenome: ")
            leia(sobrenomes[i])
            
            escreva("Número do apartamento: ")
            leia(apartamentos[i])
            
            escreva("Quantidade de moradores: ")
            leia(moradores[i])
            
            escreva("Renda total da família (R$): ")
            leia(rendas[i])
            
            se(i < 3)  
            {
                escreva("\nDeseja cadastrar outra família? (S/N): ")
                leia(continuar)

                se (continuar == "S" ou continuar == "s" )
                {
                	
                }
                se(continuar == "N" ou continuar == "n")
                {
                 pare
                }
            }
        }

        
        faca
        {
            escreva("\n==========================\n")
            escreva("\nPESQUISA POR APARTAMENTO\n")
            escreva("\n==========================\n")
            escreva("Digite o número do apartamento (0 para sair): ")
            leia(aptoPesquisa)
            
            se(aptoPesquisa == 0)
            {
             pare
            }
            
            encontrou = falso
            
            
            para(inteiro j = 0; j < 4; j++)
            {
                se(apartamentos[j] == aptoPesquisa)
                {
                    encontrou = verdadeiro
                    real rendaPerCapita = rendas[j] / moradores[j]
                    
                    escreva("\n=== INFORMAÇÕES DA FAMÍLIA ===\n")
                    escreva("Apartamento: ", apartamentos[j], "\n")
                    escreva("Sobrenome: ", sobrenomes[j], "\n")
                    escreva("Renda total: R$ ", rendas[j], "\n")
                    escreva("Renda per capita: R$ ", rendaPerCapita, "\n")
                    escreva("----------------------------------------\n")
                }
                senao
                	escreva("apartamento nao encontrado")
                pare
            }
            
         
        }
        enquanto(verdadeiro)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2959; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {sobrenomes, 26, 15, 10}-{apartamentos, 27, 16, 12}-{moradores, 28, 16, 9}-{rendas, 29, 13, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */