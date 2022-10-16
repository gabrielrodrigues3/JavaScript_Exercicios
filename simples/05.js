function CalculoQuantidadeCaixas(){
    // Entrada
    var comprimento = document.getElementById("comprimento").value
    var largura =  document.getElementById("largura").value
    var altura = document.getElementById("altura").value

    // Processamento
    var dimensao = comprimento * largura * altura
    var quantCaixas = dimensao / 1.5

    // Saída
    document.getElementById("SaidaTexto").innerHTML = "<b>Quantidade de caixas: " + quantCaixas + "</b>"
}