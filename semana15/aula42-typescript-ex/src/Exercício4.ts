// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Resposta = rodaria o comando tsc no terminal

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// Resposta = não, pois está configurado no tsconfig para funcionar exatamente dentro da pasta src, caso não esteja configurado, basta colocar o caminho de todas as pastas até chegar a desejada.

// c) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// Resposta = se der o comando tsc, todos os arquivos ts dentro da pasta src serão transpilados, caso não aconteça, pode colocar tsc e o nome de cada um, separados por espaço.

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?

// Resposta = mudou a versão do ecmascript e outras opções que marcamos como true ou com caminhos diferentes na aula, também habilitamos algumas coisas como comentarios e entre outros, a "addional checks" chamou minha atenção por parecer ter um objetivo legal, tive essa impressão apenas pelo nome.

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}