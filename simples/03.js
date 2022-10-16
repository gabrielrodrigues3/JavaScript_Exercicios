function calcularTemp(){
    var celsius = document.getElementById("temp").value
    var f = (celsius * 9 / 5) + 32
    // console.log(C)
    document.getElementById("SaidaTexto").innerHTML = "<b>Resposta: " + f + "</b>"
}