```
function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    const precoMacaCada = 1.3;
    const precoMacaDuzia = 1.0;

    if (quantidade < 12) {
      return (precoMacaCada * quantidade);
    } else {
      return precoMacaDuzia * quantidade;
    }
  }

  calculaPrecoTotal()
```
