function validaproc() {

    let matriz = [];
    let linha = 2;
    let coluna = 2;
    let soma = 0;
    let linhas = 0;

    for (i = 0; i < linha; i++) {
        matriz[i] = [];
        for (c = 0; c < coluna; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
            console.log("Valor : " + matriz[i][c]);
        }
    }


    for (i = 0; i < linha; i++) {
        for (c = 0; c < coluna; c++) {
            document.write(matriz[i][c] + " &nbsp");
        }
        document.write("<br>");
    }

    linhas = parseInt(prompt("Digite o número da linha  " + (linha - 1) + " que deseja somar:"));

    for (c = 0; c < coluna; c++) {
        soma += matriz[linhas][c];
    }

    document.write("Soma da linha : " + linhas + " : " + soma);
    console.log("Soma da linha : " + linhas + " : " + soma);

    return false;

}