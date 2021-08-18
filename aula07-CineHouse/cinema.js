let catalogo = require('./database/catalogo.json')

//console.log(catalogo)





// 1 adicionarFilme
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {

    let filme = {};

    filme.codigo = codigo;
    filme.titulo = titulo;
    filme.duracao = duracao;
    filme.atores = atores;
    filme.anoDeLancamento = anoDeLancamento;
    filme.emCartaz = emCartaz;

    catalogo.push(filme);
    console.log(catalogo);

}

//adicionarFilme(3, 'teste', 1.2,['willian', 'gab'],2021, false);


function buscarFilme(id) {
    for (let i = 0; i < catalogo.length; i++) {
        if (id == catalogo[i].codigo) {
            console.log("O filme é: " + catalogo[i].titulo)
        }
    }
}

//buscarFilme(1)


/*function alterarStatusEmCartaz(id) {
    for (let i = 0; i < catalogo.length; i++) {
        if (id == catalogo[i].codigo) {
            if (catalogo[i].emCartaz) {
                catalogo[i].emCartaz = false
            }
            else {
                catalogo[i].emCartaz = true
            }
        }
    }
    console.log(catalogo)
} */

//alterarStatusEmCartaz(1);
//alterarStatusEmCartaz(2);


// PARTE 2
// AULA 7 - EX 1


function listaTodosOsFilmes() {

    for (var i = 0; i < catalogo.length; i++) {
        console.log("Filme " + (i + 1) + ': ' +
            catalogo[i].titulo)
    }
}

//listaTodosOsFilmes();

//AULA 7 - EX 2
function listarFilmesEmCartaz() {
    for (var i = 0; i < catalogo.length; i++) {
        if (catalogo[i].emCartaz) {
            console.log("Filme " + (i + 1) + ': ' +
                catalogo[i].titulo)
        }
    }
}

//listarFilmesEmCartaz();

//AULA 7 - EX 3
function alterarStatusEmCartaz(id) {
    for (let i = 0; i < catalogo.length; i++) {

        if (catalogo[i].codigo == id) {
            catalogo[i].emCartaz ? catalogo[i].emCartaz = false : catalogo[i].emCartaz = true
        }
    }

    console.log(catalogo)

}

//alterarStatusEmCartaz(1)

//HW - EX 1
function listarFilmesDeLongaDuracao(){
    for(var i =0; i < catalogo.length; i++){
        if(catalogo[i].duracao > 2){
            console.log("O filme: " + catalogo[i].titulo + " é de longa duração!")
        }
    }

}

//listarFilmesDeLongaDuracao();

function listarTodosOsFilmes(){
    catalogo.forEach(
        console.log("filme " + catalogo[i].titulo)
    )
}

//listaTodosOsFilmes();