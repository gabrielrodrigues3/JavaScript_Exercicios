function controllerValidacao() {
    var valor = parseFloat(document.getElementById("valor").value);

    var resposta = verficaPositoNegativo(valor);

    saidaDados("O valor é " + resposta);
}

function verficaPositoNegativo(valor = 0) {
    if (valor == 0) {
        return "ZERO";
    } else if (valor > 0) {
        return "Positivo";
    } else {
        return "Negativo";
    }
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}