function colocaNomePrimeiraVez(nomae) {
    //  window.alert("jorginao")
    var histTemp = localStorage.getItem("historico")
    histTemp = histTemp.split(";")
    var possuiNome = false;
    // histTemp.splice(histTemp.length - 1, 1)
    //   console.log(" o hist temp é " + histTemp)
    for (i in histTemp) {
        var histAindaMaisTemp = histTemp[i].split(",")
            //     console.log("histaindmarec " + histAindaMaisTemp[0])
        if (histAindaMaisTemp[0] == nomae) {
            // console.log("éigual")
            possuiNome = true;
            break;
        }
    }

    if (possuiNome == false) {


        //    
        var listaHist = localStorage.getItem("historico")
        listaHist += nome + ",0;"
        localStorage.setItem("historico", listaHist)
    }


}

function salvarNome() {
    nome = document.getElementById("inputName").value
    localStorage.setItem("nomeLocal", nome)

    if (localStorage.getItem("historico") == null) {
        localStorage.setItem("historico", nome + ",0;")



    } else {
        colocaNomePrimeiraVez(nome)

    }


}


function logar() {
    if (document.getElementById("inputName").value != "" && document.getElementById("inputSenha").value != "") {
        //     window.alert("logou")
        salvarNome()

        window.open("/StepCourse-2ndModule-Final-Project-JAVASCRIPT/projeto2.html", "_self")


    } else {
        console.log("nao foi")
    }


}
x = document.getElementById("inputName").value