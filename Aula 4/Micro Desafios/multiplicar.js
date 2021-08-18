function multiplicar (val1, val2){
    if(val1 == 0 || val2 == 0){
        return 0
    }

    else{
        let resultado = val1 * val2
        return resultado
    }
}

module.exports = multiplicar;
