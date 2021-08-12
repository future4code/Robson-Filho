// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (operation === "add"){
   console.log(num1 + num2) 

} else if (operation === "sub"){
    console.log(num1 - num2)

} else if (operation === "div"){
    console.log(num1 / num2)

} else if (operation === "mult"){
    console.log(num1 * num2)

} else {
    console.log("error")
}
