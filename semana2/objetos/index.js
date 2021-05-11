// --------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO--------
            
// 1.  Leia o código abaixo

 
    const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])


// a) O que vai ser impresso no console?

// RESPOSTA: Matheus Nachtergaele
//           Virginia Cavendish 
//           canal: "Globo", horario: "14h"

// _______________________________________________________________

// 2. Leia o código abaixo


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replace("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//     a) O que vai ser impresso no console?

// RESPOSTA = nome: juca, idade: 3, raca: SRD 
//            nome: Juba, idade: 3, raca: SRD 
//            nome: Jubo, idade: 3, raca: SRD 

//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// RESPOSTA = faz um espalhamento ou spread

// _______________________________________________________________


// 3. Leia o código abaixo


    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
  

    // a) O que vai ser impresso no console?

    // RESPOSTA = false
    //            undefined


    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

    // undefined, aconteceu pelo fato de "altura" não ter valor definido dentro do objeto.

// _______________________________________________________________

// --------EXERCICIO ESCRITO--------

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

const pessoa = { 
    apelido: ["Robin", "RobinHood", "Robinho"],
    nome: 'Robson'
} 

function imprimirNome(objeto) {
    console.log(`Meu nome é, ${objeto.nome}, mas todos me chamam de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}


imprimirNome(pessoa)

// b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto    

const novosApelidos = {
    ...pessoa,
    apelido: ["Rob", "Binho", "Ro"]
}

imprimirNome(novosApelidos)

// _______________________________________________________________

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 


const pessoa1 = { 
    nome: "Amanda",
    idade: 19,
    profissao: "Menor aprendiz"
}

const pessoa2 = {
    nome: "Rayanne",
    idade: 16,
    profissao: "modelo"
}


// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo

function imprimirValor1(objeto1) {
    console.log(`${objeto1.nome},${objeto1.nome.length},${objeto1.idade},${objeto1.profissao},${objeto1.profissao.length}`)}  

imprimirValor1(pessoa1)

function imprimirValor2(objeto2) {
    console.log(`${objeto2.nome},${objeto2.nome.length},${objeto2.idade},${objeto2.profissao},${objeto2.profissao.length}`)}


    imprimirValor1(pessoa2)

    // const pessoa = {
    // 	nome: "Bruno", 
    //   idade: 23, 
    // 	profissao: "Instrutor"
    // }

    // minhaFuncao(pessoa)

    // Retorno: ["Bruno", 5, 23, "Instrutor", 9]


// _______________________________________________________________

// 3. Resolva os passos a seguir: 

    // a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

    const carrinho = []; 

    // b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

    const frutasSacolao1 = {
        nome: "Manga",
        disponibilidade: true
    }

    const frutasSacolao2 = {
        nome: "Laranja",
        disponibilidade: true
    }

    const frutasSacolao3 = {
        nome: "Morango",
        disponibilidade: true
    }

    // c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

    function empurrarObjeto(objeto1) {
        return carrinho.push(objeto1)   
    }
    
    empurrarObjeto(frutasSacolao1)
    empurrarObjeto(frutasSacolao2)
    empurrarObjeto(frutasSacolao3)



    // - 💡  Dica

    // d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

    console.log(carrinho)



