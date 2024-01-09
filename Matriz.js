function diagonalDifference(arr) {
   let size = arr.length -1 
   let diagonalPrincipal = 0
   let diagonalSecundaria = 0
   console.log(arr)
    for(let index = 0;index<arr.length ; index++){
        console.log(index)
        diagonalPrincipal += arr[index][index];
        diagonalSecundaria +=arr[index][size-index];
    }
    return Math.abs(diagonalPrincipal - diagonalSecundaria)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))