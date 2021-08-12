// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// Resposta = ela mostra um erro, pois tentou atribuir string em number

// const  minhaString: string = 1

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// Resposta = basta adicionar o | (pipe) que significa "ou" e colocar "string" para ele receber tanto strings quanto numbers.

// const meuNumero: number | string = 2

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type person = {
    nome: string,
    idade: number,
    corFavorita: COR_ARCO_IRIS
}

enum COR_ARCO_IRIS {
   
    VEMELHO = "vermelho",
    AMARELO = "amarelo",
    AZUL = "azul",
    LARANJA = "laranja",
    VIOLETA = "violeta",
    VERDE = "verde",
    ANIL = "anil"

}
    
const person1: person = {
    nome: "Mariana",
    idade: 22,
    corFavorita: COR_ARCO_IRIS.ANIL
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

const person2: person = {
    nome: "Robson",
    idade: 19,
    corFavorita: COR_ARCO_IRIS.AMARELO
}

const person3: person = {
    nome: "Raul",
    idade: 23,
    corFavorita: COR_ARCO_IRIS.VEMELHO
}

const person4: person = {
    nome: "Rayanne",
    idade: 16,
    corFavorita: COR_ARCO_IRIS.AMARELO
}

console.table([person1, person2, person3, person4])

// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.

// Resposta = MODIFICADO