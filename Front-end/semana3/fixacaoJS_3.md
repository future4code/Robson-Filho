```
function calculaNota(ex, p1, p2) {
// Escreva seu código aqui
const exercicio = ex _ 1;
const nProva1 = p1 _ 2;
const nProva2 = p2 \* 3;

    const mediaP = exercicio + nProva1 + nProva2;



    if (mediaP /6 >= 9) {
        return"A"
    } else if (mediaP /6 < 9 && mediaP /6 >= 7.5) {
        return"B"
    } else if (mediaP /6 < 7.5 && mediaP /6 > 6) {
        return"C"
    } else if (mediaP /6 < 6) {
        return "D"
    }

}

    calculaNota()
```
