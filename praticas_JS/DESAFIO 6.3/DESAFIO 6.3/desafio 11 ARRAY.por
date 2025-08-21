programa
{
    funcao inicio()
    {
        real temperatura_mes[12]
        real menor_temp, maior_temp
        real soma_temp = 0.0
        real media_ano=0.0
       
        para(inteiro i = 0; i < 12; i++)
        {
            escreva("Digite a temperatura média do mês ", i+1, ": ")
            leia(temperatura_mes[i])
            soma_temp += temperatura_mes[i] 
        }

        menor_temp = temperatura_mes[0]
        maior_temp = temperatura_mes[0]

        
        para(inteiro i = 1; i < 12; i++)
        {
            se(temperatura_mes[i] < menor_temp)
            {
                menor_temp = temperatura_mes[i]
            }
            
            se(temperatura_mes[i] > maior_temp)
            {
                maior_temp = temperatura_mes[i]
            }
        }

        media_ano = soma_temp / 12

        escreva("\nMenor temperatura do ano: ", menor_temp)
        escreva("\nMaior temperatura do ano: ", maior_temp)
        escreva("\nMédia de temperatura no ano: ", media_ano)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 795; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {temperatura_mes, 5, 13, 15}-{menor_temp, 6, 13, 10}-{maior_temp, 6, 25, 10}-{soma_temp, 7, 13, 9}-{media_ano, 8, 13, 9}-{i, 21, 21, 1};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */