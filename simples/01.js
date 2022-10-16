function calculoRaio() {
    var raio = document.getElementById("raio").value
    var resposta = 3.14 * (raio * raio)
    // console.log(resposta)
    // alert(resposta)
    document.getElementById("texto").innerHTML = "Resposta: " + resposta
}