function calcularTemp(){
    var temperatura = document.getElementById("temp").value
    var C = (temperatura - 32) * 5 / 9
    // console.log(C)
    document.getElementById("SaidaTexto").innerHTML = "<b>Resposta: " + C + "</b>"
}