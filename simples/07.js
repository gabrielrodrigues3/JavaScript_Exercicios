function controllerCalculoAbastecimento() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var numero_volta = parseInt(document.getElementById("numero_volta").value);
    var abastecimento = parseInt(document.getElementById("abastecimento").value);
    var consumo = parseFloat(document.getElementById("consumo").value);

    var resposta_calculo = calculoAbastecimento(comprimento, numero_volta, abastecimento, consumo);

    saidaDados("Quantidade de litros minima: " + resposta_calculo.toFixed(2));
}

function calculoAbastecimento(comprimento = 0, numero_volta = 0, abastecimento = 0, consumo = 0) {
    var total_comprimento_km = (comprimento / 1000) * numero_volta;
    var total_litros = total_comprimento_km / consumo;
    var quantidade_litros = total_litros / abastecimento;
    return quantidade_litros;
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}