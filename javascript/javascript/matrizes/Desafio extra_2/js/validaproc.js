/*

DESAFIO EXTRA 2
No Supermercado Alegria, existe um controle em relação ao valor das compras dos
clientes nos 03 últimos meses, como mostra a tabela a seguir:
Faça um programa que peça os nomes dos 3 clientes e os valores das compras
feitas por eles nos 03 últimos meses e calcule:

• A quantidade de compras;
• A média das compras, considerando essa quantidade.
Após os cálculos serem efetuados, você deve exibir o menu a seguir ao usuário:
• Ver compras de um cliente (permitir que o dono do supermercado consulte os
valores das compras dos 3 meses, da média das compras e quantidade de compras
de um cliente qualquer, consultando pelo seu nome);
• Ver todas as compras de todos os clientes (mostrar a tabela inteira com todos os
valores).
Obs.: Quando o cliente não tiver comprado naquele mês, deve ser informado
0 no valor da compra (equivale ao “R$ - “ da tabela). Guarde os nomes dos
clientes em um vetor. Os valores da tabela são exemplos, o programa poderá
receber quaisquer nomes de clientes e valores de compras.

*/

function validaproc() {

    let clientes = [];
    let comprasMes1 = [];
    let comprasMes2 = [];
    let comprasMes3 = [];
    let medias = [];
    let qtdCompras = [];

    for (let i = 0; i < 3; i++) {
        alert(`Cadastre o ${i + 1}º cliente no Supermercado Alegria`);

        let nome = prompt(`Digite o nome do ${i + 1}º cliente: `);
        console.log(`Cliente ${nome} Cadastrado com sucesso `);
        clientes.push(nome);

        let compras1 = parseFloat(prompt(`Digite o valor das compras do cliente ${nome} no primeiro mês (DIGITE "0" se não comprou nada no mês 1):`)) || 0;
        let compras2 = parseFloat(prompt(`Digite o valor das compras do cliente ${nome} no segundo mês (DIGITE "0" se não comprou nada no mês 2): `)) || 0;
        let compras3 = parseFloat(prompt(`Digite o valor das compras do cliente ${nome} no terceiro mês (DIGITE "0" se não compru nada no mês 3)`));
        comprasMes1.push(compras1);
        comprasMes2.push(compras2);
        comprasMes3.push(compras2);

        let qtd = 0;
        if (comprasMes1[i] > 0) qtd++;
        if (comprasMes2[i] > 0) qtd++;
        if (comprasMes3[i] > 0) qtd++;
        qtdCompras.push(qtd);



        let soma = 0;
        if (comprasMes1[i] > 0) soma += comprasMes1[i];
        if (comprasMes2[i] > 0) soma += comprasMes2[i];
        if (comprasMes3[i] > 0) soma += comprasMes3[i];

        let media;

        if (qtd > 0) {
            media = soma / qtd;
        }
        else {
            media = 0;
        }
        medias.push(media);


    }
 
    let opcao;

    do {
        opcao = prompt(`Escolha uma opção:\n1 - Ver compras de um cliente\n2 - Ver todas as compras de todos os clientes\n3 - Sair`);

        switch (opcao) {
            case "1":
             
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
                console.log("=== RELATÓRIO COMPLETO - SUPERMERCADO ALEGRIA ===");
                
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
    } while (opcao !== "3");

    return false;
}