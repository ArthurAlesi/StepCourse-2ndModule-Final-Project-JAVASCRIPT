var historico = localStorage.getItem("historico")

historico = historico.split(";")

historico.splice(historico.length - 1, 1)
    // console.log(historico)

var totalDeVendas = 0
for (i in historico) {
    var historicoTemporario = historico[i].split(",")
    var nome = historicoTemporario[0]
    var total = historicoTemporario[1]
    total = Number(total)
    totalDeVendas += total;
    document.getElementById("admin").innerHTML += "Usuário: " + nome + "............... Total compra individual:  R$" + total.toFixed(2) + "<br>"



}

document.getElementById("admin").innerHTML += "<br>Total Arrecadado:............................................................ R$" + totalDeVendas.toFixed(2)