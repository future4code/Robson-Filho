/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//     Essa etapa do projeto consiste em criar um programa que:

// 1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

// 2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".

// - 💡 Dica

//     `confirm` é um comando que cria uma caixa com dois botões: `ok` e `cancelar`, permitindo fazer perguntas de "sim" e "não". Caso o usuário responda sim (`ok`) o comando devolve o valor `true`, caso contrário, devolve `false`. Desta forma, podemos usar condicionais para decidir o que fazer em cada caso

//     ```jsx
//     if(confirm("pergunta de sim ou não")) {
//     	// o que fazer se o usuário clicar "ok"
//     } else {
//     	// o que fazer se o usuário clicar "cancelar"
//     }
//     ```

// 3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".

// 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.

// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"


// const carta = comprarCarta()

// console.log("Bem vindo ao jogo de Blackjack!")
// if(confirm("Quer começar uma nova rodada?")) {
//    console.log("Usuário - cartas:", carta.texto, carta.texto, "pontuação", carta.valor)
//    console.log("Conputador - cartas:", carta.texto, carta.texto, "pontuação", carta.valor)
// } else {
//    console,log("O jogo acabou")
// }


// const mostrarTexto = (carta) => {
//    console.log(`Usuário Usuário - ${carta.texto}  - pontuação 20`)
// }
// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"


const carta = comprarCarta()

const carta1 = comprarCarta() 
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()
const valorUm = carta1.valor + carta2.valor
const valorDois = carta3.valor + carta4.valor

if(confirm("Quer jogar uma nova rodada?")) {
  console.log(`Bem vindo ao jogo de Blackjack!`)
  somar(carta1,carta2,carta3,carta4)
  
} else {
  console.log("O jogo acabou")
}

function somar(num1, num2, num3, num4){
 
console.log("Usuário - cartas:", num1.texto, num2.texto, "- pontuação", valorUm)

console.log("Computador - cartas:", num3.texto, num4.texto, "- pontuação", valorDois)

if (valorUm > valorDois) {
   console.log("Usuário Venceu!!!")
} else if (valorUm == valorDois) {
   console.log("Empate!!!")
} else {
   console.log("Computador Venceu!!!")
}
}
