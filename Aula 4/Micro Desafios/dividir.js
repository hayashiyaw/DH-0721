function dividir (val1, val2){
    if(val1 == 0 || val2 == 0){
        return 'Não se pode dividir por zero!'
    }

    else{
        let resultado = val1 / val2
        return resultado
    }
}

module.exports = dividir;
