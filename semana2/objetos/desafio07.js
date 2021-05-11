// - **DESAFIOS**
//     1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
//         - Exemplo

//             ```
//             // Exemplo de entrada: "Lais", 26, "Instrutora"
//             // O que deve ser impresso no console:
//             { nome: 'Lais', profissao: "Instrutora", idade: 26}
//             ```

function pergunteUsuario() {
    const nomeUsuario = prompt("Qual seu nome?")
    const idadeUsuario = prompt("Qual a sua idade?")
    const profissaoUsuario = prompt("Qual a sua profissão?")

    const usuarioPadrao = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }
    return console.log(usuarioPadrao, typeof usuarioPadrao)
}

pergunteUsuario()

    // 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

const filme1 = {
    anoDeLancamento: 1972,
    nome: "Pokemon"
}
const filme2 = {
    anoDeLancamento: 1999,
    nome: "Aladin"
}

function receba(objetos1, objetos2) {

    const filmeRecebido = objetos1.anoDeLancamento < objetos2.anoDeLancamento
    const foiLancadoNoMesmoAno = objetos1.anoDeLancamento === objetos2.anoDeLancamento

    const respostaA = `O primeiro filme foi lançado antes do segundo? ${filmeRecebido}`

    const respostaB = `O primeiro filme foi lançado no mesmo ano do segundo? ${foiLancadoNoMesmoAno}`

    return respostaA +"\n"+ respostaB
}

console.log(receba(filme1, filme2))

//         ```
//         O primeiro filme foi lançado antes do segundo? false
//         O primeiro filme foi lançado no mesmo ano do segundo? true
// //         ```

//     3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.

const carrinho = [];

const frutasSacolao1 = {
  nome: "Manga",
  disponibilidade: true,
};

const frutasSacolao2 = {
  nome: "Laranja",
  disponibilidade: true,
};

const frutasSacolao3 = {
  nome: "Morango",
  disponibilidade: true,
};

function controleDeEstoque(fruta) {
  fruta.disponibilidade = false;
  return fruta;
}

console.log(controleDeEstoque(frutasSacolao1));
