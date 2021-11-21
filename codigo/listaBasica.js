var codigo = "00000"
carrinho = []


function geraCodigo() {
    codigoThis = Number(codigo)
    codigoThis++;
    codigoThis = codigoThis.toString()
    tam = 5 - codigoThis.length
    codigo = ""
    for (var i = 0; i < tam; i++) {
        codigo += "0"
    }
    codigo += codigoThis



    return codigo;
}



class Produto {
    constructor(nome, preco, codigo, descricao) {
        this.nome = nome;
        this.preco = preco
        this.codigo = codigo
        this.descricao = descricao
    }
}

class ProdutoInCarrinho extends Produto {
    constructor(nome, preco, codigo, descr, qtd) {
        super(nome, preco, codigo, descr)
        this.qtd = qtd
        this.preTotal = Number(this.preco) * Number(qtd)
    }
}


listaBasica = {
    comida: [
        new Produto("Sushi", 80, geraCodigo(), "Combinado de 84 peças"),
        new Produto("Temaki", 15, geraCodigo(), "Delicioso temaki de salmão"),
        new Produto("Sashimi", 50, geraCodigo(), "40 Sashimis de atum")
    ],
    bebida: [
        new Produto("Coca-cola", 5, geraCodigo(), "Coca-Cola Gelada"),
        new Produto("Pepsi", 5, geraCodigo(), "Pepsi Gelada"),
        new Produto("Água", 2, geraCodigo(), "Água refrescnte")

    ],
    sobremesa: [
        new Produto("Harumaki", 12, geraCodigo(), "harumaki de nutela"),
        new Produto("Cheese Cake", 5, geraCodigo(), "Bolo de Cenoura"),
        new Produto("Cookie", 4, geraCodigo(), "Cockie de baunilha delicioso    ")
    ]
}