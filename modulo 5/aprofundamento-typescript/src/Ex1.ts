const minhaString: String = "Samantha"
//Se atribuirmos um número a uma varável tipo string ela não aceita

const meuNumero: Number = 3

let meuNumero2: Number | String = ""
meuNumero2 = "Samantha"
meuNumero2 = "3"

type Pessoa = {
    nome: String,
    idade: Number,
    corFavorita: ArcoIris
}

enum ArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"

}

const pessoa1: Pessoa = {
    nome: "Samantha",
    idade: 3,
    corFavorita: ArcoIris.VIOLETA
}

const pessoa2: Pessoa = {
    nome: "Nicole",
    idade: 34,
    corFavorita: ArcoIris.VERMELHO
}

const pessoa3: Pessoa = {
    nome: "Anderson",
    idade: 28,
    corFavorita: ArcoIris.LARANJA
}



