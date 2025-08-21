function validaproc() {

    let i;

    let num = [];
// ALIMENTANDO O VETOR 
    for (i = 0; i < 3; i++) {

        alert("O valor digitado esta passando na posição: "+ i)
        num[i] = parseInt(prompt("Digite o numero"));

    }
// RETIRANDO OS DADOS DO VETOR 
    for (i = 0; i < 3; i++) {

        console.log("O valor do vetor num na porisção " + i + " é : " + num[i]);

    }
return false;
}