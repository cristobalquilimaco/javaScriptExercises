function fizzBuzz(){
    let resultado = []

    for(let i = 1; i <= n; i++){
        let resultadoFizzBuzz = "";
        if( i % 3 === 0){
            return "Fizz"
        }
        if(i % 5 === 0){
            return "Buzz"
        }
        resultado.push(resultadoFizzBuzz || i)
        
    }
    return resultado
}

console.log(15);
