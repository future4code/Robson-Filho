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
