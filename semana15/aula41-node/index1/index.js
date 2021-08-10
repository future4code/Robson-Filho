// a)  process.argv[3].

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const Nome = "a"
const idade = Number("3")
const tempo = Number("")

// const printMessager = () => {console.log(`"Olá, ${Nome}! Você tem ${idade} anos."`)}
// printMessager()

if(Nome && idade != "da"){
    console.log(`"Olá, ${Nome}! Você tem ${idade} anos.`)
} else {
    console.log("Error, falta preencher algum campo")
}

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

if(Nome && idade && tempo !== "da"){
    console.log(`Olá, ${Nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + tempo}`)
} else {
    console.log("Error, falta preencher algum campo")
}

// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.



