function staircase(n) {

    let inputPosition = n - 1
    let inputline = ''
    for(let lineindex = 0;lineindex<n;lineindex++){
        for(let columnindex = 0;columnindex<n;columnindex++){
            if(columnindex < inputPosition){
                inputline += ' '
            }
            else{
                inputline += '#'
            }
        }
    console.log(inputline)
    inputPosition -=1  
    inputline = ''
    }
}

console.log(staircase(6))