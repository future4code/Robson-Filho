    // Exercícios de interpretação de código
    // 1. Leia o código abaixo

 

        function minhaFuncao(variavel) {
        	return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))


        a) O que vai ser impresso no console?

        // RESULTADO = 10 && 50 

        b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?


        // RESULTADO = IS NOT DIFINED

//_____________________________________________________________________________________________

    // 2. Leia o código abaixo

        
        let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)
       

        a. Explique o que essa função faz e qual é sua utilidade

        // RESPOSTA = ELA PEGA O TEXTO DO PROMPT E RETORNA PRA DENTRO DA FUNÇÃO TEXTO COM TODAS AS LETRAS MINÚSCULAS PARA VER SE EXISTE OU NÃO A PALAVRA CENOURA DENTRO, PODENDO SER TRUE E FALSE.

        b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

        i.   `Eu gosto de cenoura` // true
        ii.  `CENOURA é bom pra vista` // true
        iii. `Cenouras crescem na terra` // true

        RESPOSTA = TRUE, TRUE, TRUE


//_____________________________________________________________________________________________

// - **Exercícios de escrita de código**
//     1. Escreva as funções explicadas abaixo:

//         a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         
//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function mensagem() {
    console.log('Eu sou Robson, tenho 18 anos, moro em São Lourenço e sou estudante.')
}


 mensagem()


//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//         
//         Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//         

//         - Exemplo

//             Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//             `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

 function informacao(NOME, IDADE, ENDERECO, PROFISSAO) {
     const informacaoTotal = `Eu sou ${NOME}, tenho ${IDADE} anos, moro em ${ENDERECO} e sou ${PROFISSAO}`
     return informacaoTotal 
 }

// console.log (informacao("Robson", "18", "São Lourenço", "Estudante"))

// _____________________________________________________________________________________________

//     2. Escreva as funções explicadas abaixo:

//         a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function funcao(num1, num2) {
    return num1 + num2
    
}

console.log(funcao(25, 30)) 

//         b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function recebeDoisNumeros(num1, num2) {
    return num1 >= num2
}

console.log(recebeDoisNumeros(101, 102))

//         c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function recebeNumero(num) {
    return num %2 == 0 
}

console.log(recebeNumero(100))

//         d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function mensagem(string) {
    console.log(`${string.length}, ${string.toUpperCase()}`)
}

console.log(mensagem("granada"))

// _____________________________________________________________________________________________


//     3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

let usuarioValor1 = Number(prompt("Digite um valor!"))
let usuarioValor2 = Number(prompt("Escolha o segundo valor!")



function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(usuarioValor1, usuarioValor2))



function diferenca(num1, num2) {
    return num1 - num2
}

console.log(diferenca(usuarioValor1, usuarioValor2))


function multiplicacao(num1, num2) {
    return num1 * num2
}

console.log(multiplicacao(usuarioValor1, usuarioValor2))


function divisao(num1, num2) {
    return num1 / num2
}

console.log(divisao(usuarioValor1, usuarioValor2))


//        
//         Números inseridos: 30 e 3
//         Soma: 33
//         Diferença: 27
//         Multiplicação: 90
//         Divisão: 10
//         
