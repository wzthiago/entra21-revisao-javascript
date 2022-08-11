$("#busca_pokemon").on("click",()=>{

    console.log("Iniciando busca...");
    let chave= $("#pokemon").val()
    console.log("Iremos buscar por ",chave);

    $.ajax(
        {
            url:encodeURI("https://pokeapi.co/api/v2/pokemon/"+chave),
            type:"get",
            success:(retorno)=>{
                console.log("Quem é esse pokemon?",retorno);
                $("body").append(
                    $("<div>",{class:"row"}).append(
                        $("<div>",{class:"col-1",text:retorno.id}),
                        $("<div>",{class:"col-3",text:retorno.name}),
                        
                    )
                )

                setTimeout(function(){

                    $("body").append(
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.front_default})
                    ),
                    $("<div>",{class:"col"}).append(
                        $("<img>",{src:retorno.sprites.back_default})
                    )
                    )

                })},
            error:(opa)=>{
                console.warn("Erro...",opa);
            }
        }
    )

})