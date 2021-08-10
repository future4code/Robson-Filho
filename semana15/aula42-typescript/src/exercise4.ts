import {car, garagem} from "./exercise3-5"

const buscarCarroPorMarca = (frota: car[], marca?: string) => {
if (marca === undefined){
    return frota
}

return frota.filter((carro) => carro.marca === marca)
}

console.log("Só garagem",buscarCarroPorMarca(garagem))
console.log("Só gol",buscarCarroPorMarca(garagem, "Ford"))
console.log("Só f50",buscarCarroPorMarca(garagem, "f50"))