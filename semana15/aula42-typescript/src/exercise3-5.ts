export type car = {
    marca: string,
    volumeDoTanque: number,
    temMotorFlex: boolean
    calcularAutonomia: (combustivelRestante: number) => number
}

const multiplicaPor15 = (num: number) => num * 15 

const mustang: car = {
    marca: "Ford",
    volumeDoTanque: 61,
    temMotorFlex: false,
    calcularAutonomia: multiplicaPor15
}

const gol: car = {
    marca: "Ford",
    volumeDoTanque: 61,
    temMotorFlex: true,
    calcularAutonomia: multiplicaPor15
}

const f50: car = {
    marca: "Ferrari",
    volumeDoTanque: 90,
    temMotorFlex: true,
    calcularAutonomia: multiplicaPor15
}

export const garagem: car[] = [mustang, gol, f50]
console.table(garagem)