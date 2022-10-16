function controllerOrdem() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    var resposta = ordenar(valor1, valor2, valor3);
    saidaDados("Ordem: " + resposta);
}

function ordenar(valor1 = 0, valor2 = 0, valor3 = 0) {
    var temp = 0;
    if (valor1 > valor2) {
        temp = valor1; //temp <- leite
        valor1 = valor2; //copo leite <- cafe
        valor2 = temp; //copo café <- temp
    }

    if (valor1 > valor3) {
        temp = valor1;
        valor1 = valor3;
        valor3 = temp;
    }

    if (valor2 > valor3) {
        temp = valor2;
        valor2 = valor3;
        valor3 = temp;
    }
    return "" + valor1 + "; " + valor2 + "; " + valor3;
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}