function controllerOrdem() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    
    var resposta = maiorNumero(valor1, valor2);
    saidaDados(resposta);
}

function maiorNumero(valor1 = 0, valor2 = 0) {
    if (valor1 == valor2) {
        return "Não pode ser número igual!!"
    }else if (valor1 > valor2) {
        return "O maior número é: " + valor1
    }else {
        return "O maior número é: " + valor2
    }
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}