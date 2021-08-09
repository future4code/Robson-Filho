// Exercícios de interpretação de código
// exercise 1 

// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

   
    let array
    console.log('a. ', array)

//     // RESULTADO = a. undefined

    array = null
    console.log('b. ', array)

//     // RESULTADO = b. null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    // RESPOSTA = c. 11

    let i = 0
    console.log('d. ', array[i])

    // RESPOSTA = d. 3 

    array[i+1] = 19
    console.log('e. ', array)

    // RESPOSTA = e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

    const valor = array[i+6]
    console.log**('f. ', valor)**
    
//     // RESPOSTA = f. 10
// ____________________________________________________________________

// // exercise 2
// 2. Leia o código abaixo com atenção

// const frase = prompt("Eu vou ser um dos melhores programadores do mundo")


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

// // RESPOSTA = SUBI NUM ÔNIBUS EM MIRROCOS 27 

____________________________________________________________________

// // Exercícios de escrita de código

// // exercise 1 

// // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

// //     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario. = prompt("Qual o seu E-mail?")

alert(`O ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)

// // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// //     a) Imprima na tela o array completo

let minhasCincoComidasPreferidas = ["Estrogonofe", "Lasanha", "torta de frango", "hamburguer", "sushi"]

// //     b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são as minhas comidas preferidas: ${minhasCincoComidasPreferidas}`)

// //     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

console.log(`Essas são as minhas comidas preferidas: ${minhasCincoComidasPreferidas}`)

console.log(minhasCincoComidasPreferidas)

let comidaFavoritaDoUsuario = prompt("Qual sua comida favorita?")

minhasCincoComidasPreferidas[1] = comidaFavoritaDoUsuario
console.log(minhasCincoComidasPreferidas)

// // 3. Faça um programa, seguindo os passos:

// //     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = [];

// //     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

let primeiraTarefa = prompt(" 1. Me diga uma tarefa que você precisar realizar ao dia!")

let segundaTarefa = prompt(" 2. Me diga mais uma tarefa que você precisar realizar ao dia!")

let terceiraTarefa = prompt(" 3. Me diga a última tarefa que você precisar realizar ao dia!")

listaDeTarefas[0] = primeiraTarefa
listaDeTarefas[1] = segundaTarefa
listaDeTarefas[2] = terceiraTarefa
// //     c) Imprima o array na tela

console.log(listaDeTarefas)

// //     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

let tarefaJaRealizada = prompt("Qual dessas três tarefas você já realizou? de 0 a 2, levando em consideração que a primeira era o 0")

// //     e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaJaRealizada, 1)

// //     f) Imprima o array na tela 

console.log(listaDeTarefas)





