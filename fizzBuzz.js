function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        let resultadoFizzBuzz = "";
        if( i % 3 === 0) resultadoFizzBuzz += "fizz"
        if( i % 5 === 0) resultadoFizzBuzz += "buzz"
        else{
            "fizBuzz"
        }
        console.log((resultadoFizzBuzz || i))
        
    }
}

fizzBuzz()

