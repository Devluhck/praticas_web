/*

DESAFIO EXTRA 2
No Supermercado Alegria, existe um controle em relação ao valor das compras dos
clientes nos 03 últimos meses, como mostra a tabela a seguir:

*/
function validaproc() {

   
    // Arrays para armazenar os dados
    let clientes = [];
    let comprasMes1 = [];
    let comprasMes2 = [];
    let comprasMes3 = [];
    let medias = [];
    let qtdCompras = [];

    // Coletar dados dos 3 clientes
    for (let i = 0; i < 3; i++) {
        alert(`Cadastro do ${i + 1}º cliente`);
        
        // Solicitar nome do cliente
        let nome = prompt(`Digite o nome do ${i + 1}º cliente:`);
        clientes.push(nome);
        
        // Solicitar valores das compras
        let compra1 = parseFloat(prompt(`Digite o valor das compras de ${nome} no Mês 1 (digite 0 se não comprou):`));
        let compra2 = parseFloat(prompt(`Digite o valor das compras de ${nome} no Mês 2 (digite 0 se não comprou):`));
        let compra3 = parseFloat(prompt(`Digite o valor das compras de ${nome} no Mês 3 (digite 0 se não comprou):`));
        
        comprasMes1.push(isNaN(compra1) ? 0 : compra1);
        comprasMes2.push(isNaN(compra2) ? 0 : compra2);
        comprasMes3.push(isNaN(compra3) ? 0 : compra3);
        
        // Calcular quantidade de compras (valores > 0)
        let qtd = 0;
        if (comprasMes1[i] > 0) qtd++;
        if (comprasMes2[i] > 0) qtd++;
        if (comprasMes3[i] > 0) qtd++;
        qtdCompras.push(qtd);
        
        // Calcular média (somente dos meses com compra)
        let soma = 0;
        if (comprasMes1[i] > 0) soma += comprasMes1[i];
        if (comprasMes2[i] > 0) soma += comprasMes2[i];
        if (comprasMes3[i] > 0) soma += comprasMes3[i];
        
        let media = qtd > 0 ? soma / qtd : 0;
        medias.push(media);
    }
    
    // Exibir menu de opções
    let opcao;
    do {
        opcao = prompt(`Escolha uma opção:
        1 - Ver compras de um cliente
        2 - Ver todas as compras de todos os clientes
        3 - Sair`);
        
        switch (opcao) {
            case "1":
                // Consultar cliente específico
                let nomeCliente = prompt("Digite o nome do cliente que deseja consultar:");
                let encontrado = false;
                
                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].toLowerCase() === nomeCliente.toLowerCase()) {
                        console.log(`=== DADOS DO CLIENTE: ${clientes[i]} ===`);
                        console.log(`Mês 1: R$ ${comprasMes1[i]}`);
                        console.log(`Mês 2: R$ ${comprasMes2[i]}`);
                        console.log(`Mês 3: R$ ${comprasMes3[i]}`);
                        console.log(`Quantidade de compras: ${qtdCompras[i]}`);
                        console.log(`Média das compras: R$ ${medias[i]}`);
                        console.log("=====================================");
                        encontrado = true;
                        break;
                    }
                }
                
                if (!encontrado) {
                    alert("Cliente não encontrado!");
                }
                break;
                
            case "2":
                // Exibir tabela completa
                console.log("=== RELATÓRIO COMPLETO - SUPERMERCADO ALEGRIA ===");
                
                // Criar array de objetos para console.table
                let tabela = [];
                for (let i = 0; i < clientes.length; i++) {
                    tabela.push({
                        "Cliente": clientes[i],
                        "Mês 1": `R$ ${comprasMes1[i]}`,
                        "Mês 2": `R$ ${comprasMes2[i]}`,
                        "Mês 3": `R$ ${comprasMes3[i]}`,
                        "Média compras": `R$ ${medias[i]}`,
                        "Qtd. Compras": qtdCompras[i]
                    });
                }
                
                console.table(tabela)
                break;
                
            case "3":
                alert("Saindo do sistema...");
                break;
                
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== "3");{

    }


    return false;
    
    
}