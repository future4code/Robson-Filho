// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// - Tabela de Preços

// - Exemplo de saída: Jogo Nacional

//     ```
//     ---Dados da compra--- 
//     Nome do cliente:  Soter Padua 
//     Tipo do jogo:  Nacional 
//     Etapa do jogo:  Final 
//     Categoria:  1 
//     Quantidade de Ingressos:  10 ingressos 
//     ---Valores--- 
//     Valor do ingresso:  R$ 1980
//     Valor total:  R$ 19800

//     ```

const nomeCompleto = prompt("Qual seu nome completo?").toLowerCase()

const tipoDeJogo = prompt("Qual tipo de jogo você quer consultar (IN indica internacional; e DO indica doméstico), digite apenas o tipo! ").toLowerCase()

const etapaDoJogo = prompt("Qual a etapa do jogo? (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final, digite apenas a sigla!").toLowerCase()

const categoriaDoJogo = Number(prompt("Qual a categoria? 1, 2, 3 ou 4?"))

const quantidadeDeIngressos = Number(prompt("Quantos ingressos serão?"))


if (tipoDeJogo === "in" && etapaDoJogo === "sf" && categoriaDoJogo === 1) {
   
   
    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1320,00")
    console.log(`Valor total:  R$ ${1320 * quantidadeDeIngressos * 4.10},00`)



} else if (tipoDeJogo === "in" && etapaDoJogo === "sf" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 880,00")
    console.log(`Valor total:  R$ ${880 * quantidadeDeIngressos * 4.10},00`)


} else if (tipoDeJogo === "in" && etapaDoJogo === "sf" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 550,00")
    console.log("Mudando de Dólar pra Real")
    console.log(`Valor total:  R$ ${550 * quantidadeDeIngressos * 4.10},00`)
    


   
} else if (tipoDeJogo === "in" && etapaDoJogo === "sf" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 220,00")
    console.log(`Valor total:  R$ ${220 * quantidadeDeIngressos * 4.10},00`)



} else if (tipoDeJogo === "in" && etapaDoJogo === "dt" && categoriaDoJogo === 1) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 660,00")
    console.log(`Valor total:  R$ ${660 * quantidadeDeIngressos * 4.10},00`)


   
} else if (tipoDeJogo === "in" && etapaDoJogo === "dt" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 440,00")
    console.log(`Valor total:  R$ ${440 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "in" && etapaDoJogo === "dt" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 330,00")
    console.log(`Valor total:  R$ ${330 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "in" && etapaDoJogo === "dt" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 170,00")
    console.log(`Valor total:  R$ ${170 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "in" && etapaDoJogo === "fi" && categoriaDoJogo === 1 ) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1980,00")
    console.log(`Valor total:  R$ ${1980 * quantidadeDeIngressos * 4.10},00`)


   
} else if (tipoDeJogo === "in" && etapaDoJogo === "fi" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1320,00")
    console.log(`Valor total:  R$ ${1320 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "in" && etapaDoJogo === "fi" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 880,00")
    console.log(`Valor total:  R$ ${880 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "in" && etapaDoJogo === "fi" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 330,00")
    console.log(`Valor total:  R$ ${330 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "sf" && categoriaDoJogo === 1) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1320,00")
    console.log(`Valor total:  R$ ${1320 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "sf" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 880,00")
    console.log(`Valor total:  R$ ${880 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "sf" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 550,00")
    console.log(`Valor total:  R$ ${550 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "sf" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 220,00")
    console.log(`Valor total:  R$ ${220 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "dt" && categoriaDoJogo === 1) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 660,00")
    console.log(`Valor total:  R$ ${660 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "dt" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 440,00")
    console.log(`Valor total:  R$ ${440 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "dt" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 330,00")
    console.log(`Valor total:  R$ ${330 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "dt" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 170,00")
    console.log(`Valor total:  R$ ${170 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "fi" && categoriaDoJogo === 1) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1980,00")
    console.log(`Valor total:  R$ ${1980 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "fi" && categoriaDoJogo === 2) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 1320,00")
    console.log(`Valor total:  R$ ${1320 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "fi" && categoriaDoJogo === 3) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 880,00")
    console.log(`Valor total:  R$ ${880 * quantidadeDeIngressos * 4.10},00`)


    
} else if (tipoDeJogo === "do" && etapaDoJogo === "fi" && categoriaDoJogo === 4) {

    console.log("---Dados da compra---") 
    console.log(`Nome do cliente: ${nomeCompleto}`) 
    console.log("Tipo do jogo:  Internacional ")
    console.log("Etapa do jogo:  Semi-Final ")
    console.log("Categoria:  1 ")
    console.log(`Quantidade:  ${quantidadeDeIngressos} ingressos. `)
    console.log("---Valores--- ") 
    console.log("Valor do ingresso:  R$ 330,00")
    console.log(`Valor total:  R$ ${330 * quantidadeDeIngressos * 4.10},00`)


    
} 






// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800
