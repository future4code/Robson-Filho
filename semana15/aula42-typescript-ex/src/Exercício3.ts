// a) Copie o código acima para um arquivo .ts. Depois, crie um *type* para representar um post e utilize-o para fazer a tipagem do array posts.

type arrayPost = {
    autor: string,
    texto: string
}

const posts: arrayPost[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//   b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

//   Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.

  // Resposta = fiz a tipagem necessária utilizando string e o type que criei

function buscarPostsPorAutor(posts: arrayPost[], autorInformado: string) {
    return posts.filter(
      (post: arrayPost) => {
        return post.autor === autorInformado
      }
    )
  }

  console.table(posts)
