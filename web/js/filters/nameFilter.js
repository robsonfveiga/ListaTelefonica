angular.module('listaTelefonica').filter("name",function(){
    return function(input){
        var listaDeNome = input.split(" ");
        var listaDeNomesFormatadas = listaDeNome.map(function(nome){

            if(/(da|de)/.test(nome)){
                return nome;
            }

            return nome.charAt(0).toUpperCase() + nome.substring(1);

        })
        return listaDeNomesFormatadas.join(" ");
    };
});
