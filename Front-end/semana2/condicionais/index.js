// --------Exercícios de interpretação de código--------


// 1. Leia o código abaixo:

  
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    

    // a) Explique o que o código faz. Qual o teste que ele realiza? 

    // RESPOSTA = O código pega o resto da divisão por 2 e verifica se é igual a zero, talvez pra saber se seja par, o código então pega o resto e verifica se é igual a zero.

    // b) Para que tipos de números ele imprime no console "Passou no teste"? 

    // RESPOSTA = Números pares.  

    // c) Para que tipos de números a mensagem é "Não passou no teste"? 

    // RESPOSTA = Para os números ímpares.


// ________________________________________________________


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

  
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
  

    // // a) Para que serve o código acima?

    // RESPOSTA = Para informar o preço da fruta escolhida pelo Client.

    // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    // RESPOSTA = O preço da fruta maçã é R$ 2.25

    // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

    // RESPOSTA = Nada, pois está acabando no default

// ________________________________________________________


// 3. Leia o código abaixo:

    
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
 

//     a) O que a primeira linha está fazendo?

    // RESPOSTA = Pedindo um númrero aousuario.

//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    // RESPOSTA =  SE FOR 10 = "Esse número passou no teste"
    //             SE FOR -10 = undefined

//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// RESPOSTA = Sim, pelo fato do console.log não poder acessar o varíavel "mensagem", por estar dentro de um escopo.

// ________________________________________________________


// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


const qualAIdadeDoUsuario = Number(prompt("Quantos anos você tem?"))

if (qualAIdadeDoUsuario >= 18) {
    console.log(`Você tem ${qualAIdadeDoUsuario}, Pode dirigir!`)
} else {
    console.log(`Você tem ${qualAIdadeDoUsuario}, Não pode dirigir!`)

}
// ________________________________________________________


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//     - 💡 Dica

//         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

//         Se o usuário digitar "V", a saída deve ser:


//         "Boa Tarde!"



//COM IF, ELSE E ELSE IF
// const turnoDoDiaDeUmAluno = prompt("Qual turno do dia você estuda? digite apenas a letra! => **M** (matutino), **V** (Vespertino) ou **N** (Noturno), EM LETRA MINÚSCULA").toLowerCase()

if (turnoDoDiaDeUmAluno == "v") {
    console.log("Boa Tarde!")
} else if (turnoDoDiaDeUmAluno == "m") {
    console.log("Bom Dia!")
} else if (turnoDoDiaDeUmAluno == "n") {
    console.log("Boa Noite!")
} else {
    console.log("Não entendi sua resposta, poderia tentar novamente?")
}

// COM SWITCH CASE
const turnoDoDiaDeUmAluno = prompt("Qual turno do dia você estuda? digite apenas a letra! => **M** (matutino), **V** (Vespertino) ou **N** (Noturno)").toLowerCase()

switch (turnoDoDiaDeUmAluno) {
    case "m":
        console.log("Bom Dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa Noite!")
        break;
    default: 
        console.log("Não entendi, poderia tentar novamente?")   
}       
   


// ________________________________________________________


// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

//         Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

const turnoDoDiaDeUmAluno = prompt("Qual turno do dia você estuda? digite apenas a letra! => **M** (matutino), **V** (Vespertino) ou **N** (Noturno)").toLowerCase()

switch (turnoDoDiaDeUmAluno) {
    case "m":
        console.log("Bom Dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa Noite!")
        break;
    default: 
        console.log("Não entendi, poderia tentar novamente?")   
}   
// ________________________________________________________


// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

const generoFantasia = prompt("Qual o genêro de filme que vocês vão ver?").toLowerCase()
const precoDoIngresso = Number(prompt("Quanto custa o ingresso?"))

if (generoFantasia === "fantasia" && precoDoIngresso < 15) {
    console.log("Vamos pro cinema!")
} else {
    console.log("Escolha outro filme :(")
}