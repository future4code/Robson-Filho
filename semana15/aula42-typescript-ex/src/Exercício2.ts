// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros: any ) {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    type statics = {
        maior: number,
        menor: number,
        media:number
    }

    const estatisticas: statics = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
 
    return estatisticas    
    
}

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// Resposta = eu coloquei a Number, que serve para tipar números, coloquei também a any que serve para qualquer tipo, pois tive problemas em entender qual deveria utilizar na função.

// c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AMOSTRA_DE_DADOS = {
    numeros: number,
    obterEstatisticas: number
}