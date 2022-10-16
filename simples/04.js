function CalculoQuantidadeLampadas(){
    // Entrada
    var potencia = document.getElementById("potencia").value
    var largura =  document.getElementById("largura").value
    var comprimento = document.getElementById("comprimento").value

    // Processamento
    var dimensao = largura * comprimento
    var quantLampadas = (dimensao * 18) / potencia

    // Saída
    document.getElementById("SaidaTexto").innerHTML = "Quantidade de lampadas: " + quantLampadas
}