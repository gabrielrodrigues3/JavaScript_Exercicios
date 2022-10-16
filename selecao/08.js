function controllerOrdem() {
    var anoNascimento = parseInt(document.getElementById("anoNascimento").value);

    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var idade = anoAtual - anoNascimento;
    // console.log(idade)

    var resposta = podeVotar(idade);
    saidaDados("<b>" + resposta + "</b>");
}

function podeVotar(idade = 0) {
    if (idade >= 16) {
        return "Você pode votar!";
    } else {
        return "Você não pode votar!";
    }
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}