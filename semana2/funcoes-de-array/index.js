// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
{ nome: "Amanda Rangel", apelido: "Mandi" }, 0, array inteiro
{ nome: "Laís Petra", apelido: "Laura" }, 1, array inteiro
{ nome: "Letícia Chijo", apelido: "Chijo" }, 2, array inteiro

// EXERCÍCIO 2
["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// EXERCÍCIO 3
[
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }
]

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" }
];

const nomeDosPets = pets.map((pet) => {
  return pet.nome;
});

console.log("item a", nomeDosPets);

const cachorrosSalsicha = pets.filter((cachorro) => {
  return cachorro.raca === "Salsicha";
});

console.log("item b", cachorrosSalsicha);

const poodles = pets.filter((dog) => {
  return dog.raca === "Poodle";
});

const cuponsPoodles = poodles.map((poodle) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
});

console.log("item c", cuponsPoodles);

// EXERCÍCIO 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 }
];

const nomesProdutos = produtos.map((prod) => {
  return prod.nome;
});

console.log("item a", nomesProdutos);

const produtosComDesconto = produtos.map((prod) => {
  return { nome: prod.nome, preco: (prod.preco * 0.95).toFixed(2) };
});

console.log("item b", produtosComDesconto);

const bebidas = produtos.filter((prod) => {
  return prod.categoria === "Bebidas";
});

console.log("item c", bebidas);

const produtosYpe = produtos.filter((prod) => {
  return prod.nome.includes("Ypê");
});

console.log("item d", produtosYpe);

const compreYpe = produtosYpe.map((prod) => {
  return `Compre ${prod.nome} por ${prod.preco}`;
});

console.log("item e", compreYpe);

// DESAFIOS

// DESAFIO 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" }
  ];
  
  // ITEM A

  const nomePokemons = pokemons.map((poke) => {
    return poke.nome;
  });
  
  const pokemonsOrdenados = nomePokemons.sort((a, b) => a.localeCompare(b));
  
  console.log("item a", pokemonsOrdenados);
  
  // ITEM B

  const tipos = pokemons.map((poke) => {
    return poke.tipo;
  });
  
  console.log(tipos);
  
  const tiposSemRepetir = tipos.filter((tipo, index, array) => {
    return array.indexOf(tipo) === index;
  });
  
  console.log("item b", tiposSemRepetir);
  