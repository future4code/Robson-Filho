// 1.  Leia o código abaixo

 
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])


//     a) O que vai ser impresso no console?

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

RESPOSTA

//     a) O que vai ser impresso no console?

// RESPOSTA = nome: juca, idade: 3, reca: SRD 
//            nome: Juba, idade 3, raca: SRD 
//            nome: Jubo, idade 3, raca SRD 

//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// _______________________________________________________________


// 3. Leia o código abaixo


    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }

    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }

    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))
  

    // a) O que vai ser impresso no console?

    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// _______________________________________________________________
