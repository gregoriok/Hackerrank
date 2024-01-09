function birthdayCakeCandles(candles) {
    var resultado = 0
    var maior = Math.max.apply(null, candles );
    for(let index = 0;index<candles.length ; index++){
        if (candles[index] == maior){
            resultado ++
        }
    }
    return resultado
}