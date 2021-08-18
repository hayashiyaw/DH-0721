let catalogo = [
    {
      codigo: 1,
      titulo: "Lágrimas do Sol",
      duracao: 1.20,
      atores: ["Bruno", "João", "Joana"],
      anoDeLancamento: 2005,
      emCartaz: true
    },
    {
      codigo: 2,
      titulo: "Homens de Preto",
      duracao: 1.40,
      atores: ["Will", "Smith", "Victor"],
      anoDeLancamento: 2008,
      emCartaz: false
    }
  ]


// 1 adicionarFilme
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento,emCartaz){
    
    let filme = {};

    filme.codigo          = codigo;
    filme.titulo          = titulo;
    filme.duracao         = duracao;
    filme.atores          = atores;
    filme.anoDeLancamento = anoDeLancamento;
    filme.emCartaz        = emCartaz;

    catalogo.push(filme);
    console.log(catalogo);

}

 adicionarFilme(3, 'teste', 1.2,['willian', 'gab'],2021, false);


function buscarFilme(id){
    for(let i = 0; i< catalogo.length;i++){
        if(id == catalogo[i].codigo){
   console.log("O filme é: " + catalogo[i].titulo)  
    }
  }
}

buscarFilme(1)


function alterarStatusEmCartaz(id){
    for(let i = 0; i< catalogo.length;i++){
        if(id == catalogo[i].codigo){
            if(catalogo[i].emCartaz){
                 catalogo[i].emCartaz= false
                     }   
            else {
                catalogo[i].emCartaz = true
            }
        }
    }

    console.log(catalogo)

}    

alterarStatusEmCartaz(1);
alterarStatusEmCartaz(2);

