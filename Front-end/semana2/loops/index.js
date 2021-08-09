// --------Exercícios de interpretação de código--------

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// RESPOSTA = 10

// ________________________________________________________

// 2. Leia o código abaixo:

const lista = [10, 11, 19, 12, 27, 15, 18,  21, 23, 25,  30]
for (let numero of lista) {
  if (numero >= lista) {
		console.log(numero.findIndex())
	}
}

// a) O que vai ser impresso no console?

// RESPOSTA = TODOS OS NÚMEROS DOS ARRAY QUE FOREM MAIOR QUE 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// RESPOSTA = sim
// ________________________________________________________

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// RESPOSTA = ELE VAI COLOCAR 4 LINHAS, CADA UMA COM UM ASTERISCO A MAIS.

// ------Exercícios de escrita de código--------

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// const quantosBichinhosDeEstimacaoTem = Number(prompt("Quantos bichinhos de estimação você tem?"))

const nomePets = []

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

if (quantosBichinhosDeEstimacaoTem === 0){
  console.log("Que pena! Você pode adotar um pet!")

// }
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

else if (quantosBichinhosDeEstimacaoTem > 0){
  for(let i = 0; i < quantosBichinhosDeEstimacaoTem; i++){
    nomePets.push(prompt("Digite aqui o nome dos seus pets!"))
  }
}

// Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// c) Por fim, imprima o array com os nomes dos bichinhos no console

console.log(nomePets)

// ________________________________________________________

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [130, 21, 38, 45, 75];

// a) Escreva um programa que **imprime** cada um dos valores do array original.

for(let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i])
}

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

for (let i = 0; i < arrayOriginal.length; i++) {
  console.log(arrayOriginal[i] / 10);
}

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

function pares(laços) {
  const numerosPares = [];

  for (let i = 0; i < laços.length; i++) {
    if (laços[i] % 2 === 0) {
      numerosPares.push(laços[i]);
    }
  }
  console.log(numerosPares);
}

pares(arrayOriginal);

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.



function CriarArray(stringIn) {
  
  const arrayVazio = [] 
  for (let i = 0; i < stringIn.length; i++) {
    arrayVazio.push(`O elemento do índex ${i} é: ${stringIn[i]}`)
  }
  console.log(arrayVazio)
}

CriarArray(arrayOriginal)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original



function maiorEMenor(medir) {
  let menorNumero = medir[0]; 
  let maiorNumero = medir[0];

  for (let i = 0; i < medir.length; i++) {
    
    if (maiorNumero < medir[i]) {
      maiorNumero = medir[i];
    
    } else if (menorNumero > medir[i]) {
      menorNumero = medir[i]
    }
  }
  
  console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

}

maiorEMenor(arrayOriginal)

//     Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.


// - Exemplo de saídas esperadas


// Resposta e.
// "O maior número é 130 e o menor é 21"