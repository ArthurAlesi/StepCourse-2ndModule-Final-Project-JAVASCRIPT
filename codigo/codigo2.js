function addCarrinho(param) {
    //  window.alert("removeu add")
    var tempor = "botao" + param
    butaoRemovido = document.getElementById(tempor)
    butaoRemovido.parentNode.removeChild(butaoRemovido)

    buttonRemove = document.createElement("button")
    buttonRemove.setAttribute("class", "remover")
    buttonRemove.setAttribute("id", "remove" + param)
    buttonRemove.setAttribute("onclick", "removerCarrinho('" + param + "')")
    buttonRemove.innerHTML = "Remover do carrinho"
    var descTemp = "desc" + param
    document.getElementById(descTemp).appendChild(buttonRemove)

    addItemAoCarrinhoLista(param)


    // liCa = document.createElement("li")
    // // strLi = "li" + 
    // liCa.setAttribute("id", "li" + param)
    // liCa.innerHTML = "teste " + param
    // document.getElementById("listaCarrinho").appendChild(liCa)

    document.getElementById("divAside").innerHTML = "Total: R$" + getTotal()

}


function geraItemLista(qtd, nome, preco) {
    var total = preco * qtd
    var strItemDaLista = `${qtd}x ${nome} : ...... R$${total.toFixed(2)}`
    return strItemDaLista;
}





function mostrarTotalDivzinha(codeg) {
    //   console.log(codeg)
    var produto = localStorage.getItem(codeg)
    produto = produto.split(",")
    var preco = Number(produto[1])
    var idName = "input" + codeg
        //   console.log(">>>>" + idName)
    var multi = document.getElementById(idName).value
    preco = preco * multi
    document.getElementById("total" + codeg).innerHTML = "Total = R$" + (preco.toFixed(2))
        // console.log("console.log>>>>>" + produto)

}






function addItemAoCarrinhoLista(param) {
    //caracteristicas do produto
    caract = localStorage.getItem(param)
    caract = caract.split(",")
    var nome = caract[0]
    var preco = caract[1]
    var codi = caract[3]
    var desc = caract[4]
        //  console.log("o param dessa joça é " + param)
    var inputStr = "input" + param
    qtd = document.getElementById(inputStr).value
        //     console.log("carct e´" + caract)
    carrinho.push(new ProdutoInCarrinho(nome, preco, codi, desc, qtd))




    liCa = document.createElement("li")
        // strLi = "li" + 
    liCa.setAttribute("id", "li" + param)
    liCa.innerHTML = geraItemLista(qtd, nome, preco)
    document.getElementById("listaCarrinho").appendChild(liCa)







}

function removeItemDoCarrinhoLista(param) {
    var indi;
    for (produto in carrinho) {
        if (carrinho[produto].codigo == param) {
            carrinho.splice(produto, 1)
            break;
        }
    }







}










function removerCarrinho(param) {

    //  window.alert("removeu remover")
    var tempor = "remove" + param
    butaoRemovido = document.getElementById(tempor)
    butaoRemovido.parentNode.removeChild(butaoRemovido)

    buttonAdiciona = document.createElement("button")
    buttonAdiciona.setAttribute("class", "adiciona")
    buttonAdiciona.setAttribute("id", "botao" + param)
    buttonAdiciona.setAttribute("onclick", "addCarrinho('" + param + "')")
    buttonAdiciona.innerHTML = "Add ao carrinho"

    liRemo = "li" + param
    liRemovido = document.getElementById(liRemo)
    liRemovido.parentNode.removeChild(liRemovido)

    removeItemDoCarrinhoLista(param)

    // window.alert("adcionou")
    var descTemp = "desc" + param
    document.getElementById(descTemp).appendChild(buttonAdiciona)



    document.getElementById("divAside").innerHTML = "Total: R$" + getTotal()
}



function getTotal() {
    var total = 0
    for (produto in carrinho) {
        total += carrinho[produto].preTotal

    }
    return total;
}



//var codigo = "00000"

// function geraCodigo() {
//     codigoThis = Number(codigo)
//     codigoThis++;
//     codigoThis = codigoThis.toString()
//     tam = 5 - codigoThis.length
//     codigo = ""
//     for (var i = 0; i < tam; i++) {
//         codigo += "0"
//     }
//     codigo += codigoThis



//     return codigo;
// }

// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco
//         this.codigo = geraCodigo();
//     }
// }



// listaBasica = {
//     comida: [
//         new Produto("sushi", 80),
//         new Produto("temaki", 15),
//         new Produto("Sashimi", 50)
//     ],
//     bebida: [
//         new Produto("coca-cola", 5),
//         new Produto("pepsi", 5),
//         new Produto("agua", 2)

//     ],
//     sobremesa: [
//         new Produto("harumaki", 12),
//         new Produto("bolo", 5),
//         new Produto("cockie", 4)
//     ]
// }


if (localStorage.getItem("primeiraVez") == null) {
    localStorage.setItem("primeiraVez", true)
    for (produtoTipo in listaBasica) {
        for (item in listaBasica[produtoTipo]) {
            var namae = listaBasica[produtoTipo][item].codigo
            caracteristicas = "" + listaBasica[produtoTipo][item].nome + "," + listaBasica[produtoTipo][item].preco + "," + produtoTipo + "," + listaBasica[produtoTipo][item].codigo + "," + listaBasica[produtoTipo][item].descricao
            localStorage.setItem(namae, caracteristicas)
        }
    }
}


function clicar(cod) {
    //  console.log("girafa" + cod)
    var qtd, nome, preco;
    var tempInput = "input" + cod

    for (prod in carrinho) {
        if (carrinho[prod].codigo == cod) {
            console.log("girafa" + cod)
            qtd = document.getElementById(tempInput).value
            console.log("confirmando o preco")
            nome = carrinho[prod].nome
            preco = carrinho[prod].preco
            carrinho[prod].qtd = qtd
            carrinho[prod].preTotal = qtd * preco


        }
    }


    if (document.getElementById("li" + cod) != null) {
        document.getElementById("li" + cod).innerHTML = geraItemLista(qtd, nome, preco)
    }


    document.getElementById("divAside").innerHTML = "Total: R$" + getTotal()


    mostrarTotalDivzinha(cod);


}



function criaDiv(item) {
    informacao = localStorage.getItem(item)
        //   window.alert(item)
    infoListada = informacao.split(",")
    nome = infoListada[0]
    preco = infoListada[1]
    tipo = infoListada[2]
    codStr = infoListada[3]
    descriProd = infoListada[4]
        //  console.log("o item é " + item)

    divProduto = document.createElement("div")
    divProduto.setAttribute("class", "produto " + tipo)
    divProduto.setAttribute("id", item)
    divNome = document.createElement("div")
    divNome.setAttribute("class", "nome")
    divNome.innerHTML = nome

    photoImg = document.createElement("img")
    var nomeImg = "imagem/" + nome + ".jpg"
        // window.alert(nomeImg)
    photoImg.setAttribute("src", nomeImg)

    divDescricao = document.createElement("div")
    divDescricao.setAttribute("class", "descricao")
        // possibilidade de error aqui conferir em outros computdores:
    divDescricao.setAttribute("id", "desc" + item)
        //  divDescricao.innerHTML = "preco R$ 50,00 <br> quantidade: 2 <br> Descrico: lorem ipsum <br> total: R$100"

    // botão
    buttonAddCart = document.createElement("button")
    buttonAddCart.setAttribute("class", "adiciona")
    buttonAddCart.setAttribute("id", "botao" + codStr)
    buttonAddCart.setAttribute("onclick", "addCarrinho('" + codStr + "')")
    buttonAddCart.innerHTML = "Add ao carrinho"

    divPreco = document.createElement("div")
    divPreco.innerHTML = "Preço: R$" + preco
    divQuantidade = document.createElement("div")

    inputQuant = document.createElement("input")
    inputQuant.setAttribute("id", `input${codStr}`)
    inputQuant.setAttribute("type", "number")
    inputQuant.setAttribute("value", 1)
    inputQuant.setAttribute("min", 1)
    var paramInput = "'" + codStr + "'"
    inputQuant.setAttribute("onclick", `clicar(${paramInput})`)
    divQuantidade.innerHTML += "Quantidade: "
    divQuantidade.appendChild(inputQuant)
        // divQuantidade.innerHTML = "Quantidade: <input id='input" + codStr + "'      type='number' value='1' onclick='clicar(`" + codStr + "`,`" + preco + "`)'>"
    x = ``
    divDescInterna = document.createElement("div")




    divDescInterna.innerHTML = descriProd
    divTotal = document.createElement("div")
    divTotal.setAttribute("id", "total" + codStr)

    divTotal.innerHTML = "total = R$ " + Number(preco).toFixed(2)

    // preço
    divDescricao.appendChild(divPreco)
    divDescricao.appendChild(divQuantidade)
    divDescricao.appendChild(divDescInterna)
    divDescricao.appendChild(divTotal)
    divDescricao.appendChild(buttonAddCart)

    divProduto.appendChild(divNome)
    divProduto.appendChild(photoImg)
    divProduto.appendChild(divDescricao)

    document.getElementById("externa").appendChild(divProduto)

}

function criaPagina() {
    var nomeLoSto = localStorage.getItem("nomeLocal")
    document.getElementById("externa").innerHTML += `<h1>Bem-vindo ${nomeLoSto}</h1>`

    for (var i = 0; i < localStorage.length; i++) {
        itemLocal = localStorage.key(i)
        if (itemLocal != "primeiraVez" && itemLocal != "nomeLocal" && itemLocal != "historico") {

            criaDiv(itemLocal);

        }
    }
}

function procuraNome(param, total) {
    var historico = historico = localStorage.getItem("historico")
    historico = historico.split(";")
    historico.splice(historico.length - 1, 1)
        //   console.log({ historico })
    var histTemp = ""

    for (i in historico) {
        var nomeETotal = historico[i].split(",")

        if (nomeETotal[0] == param) {
            nomeETotal[1] = Number(nomeETotal[1]) + Number(total)

        }
        histTemp += nomeETotal[0] + "," + nomeETotal[1] + ";"


    }
    localStorage.setItem("historico", histTemp)

}


function confirmar() {
    if (carrinho.length != 0) {
        var total = getTotal()
        var nome = localStorage.getItem("nomeLocal")
            // salva nome
            // temporario

        // localStorage.setItem("historico", historico)
        procuraNome(nome, total)


        window.open("voltar.html", "_self")

        //  location.reload();
    }
}

function deslogar() {
    window.open("index.html", "_self")
}



criaPagina()

karrinho = document.createElement("aside")
karrinho.setAttribute("id", 'kart')
karrinho.innerHTML += " Carrinho:"

logOut = document.createElement("aside")
logOut.setAttribute("id", "logOut")
logOut.innerHTML = "Log out"
logOut.setAttribute("onclick", "deslogar()")
document.body.appendChild(logOut)



listaKart = document.createElement("ul")
listaKart.setAttribute("id", "listaCarrinho")


botaoConfirma = document.createElement("button")
botaoConfirma.setAttribute("id", "botaoConfirmar")
botaoConfirma.innerHTML = "Confirmar Pedido"
botaoConfirma.setAttribute("onclick", "confirmar()")


karrinho.appendChild(botaoConfirma)

divAside = document.createElement("div")
divAside.setAttribute("id", "divAside")
    // divAside.innerHTML = "teste"
karrinho.appendChild(divAside)

karrinho.appendChild(listaKart)



document.body.appendChild(karrinho)