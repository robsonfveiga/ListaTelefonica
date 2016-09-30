angular.module('listaTelefonica').factory("contatosAPI",function($http,config){

    var _getContatos = function(){
        return $http.get(config.baseUrl + "/api/user");
    };

    var _saveContatos = function(contato){
        return $http.post(config.baseUrl + "/api/user",contato);
    };


    return {
        getContatos:_getContatos,
        saveContato:_saveContatos
    }

});
