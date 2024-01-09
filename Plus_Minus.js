function plusMinus(arr) {
    let positives = 0
    let negatives = 0
    let zeros = 0
    for(let index = 0;index<arr.length ; index++){
        if (arr[index] > 0){
                positives ++
        }
        else if (arr[index] < 0){
            negatives ++
        }
        else {
            zeros ++
        }
    }

    console.log((positives/arr.length).toFixed(6))
    console.log((negatives/arr.length).toFixed(6))
    console.log((zeros/arr.length).toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))