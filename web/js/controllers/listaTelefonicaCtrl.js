angular.module('listaTelefonica').controller("listaTelefonicaCtrl", function ($scope,contatosAPI,operadorasAPI,serialGenerator) {
    $scope.app = "Lista Telefonica";

    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function(data,status){
            $scope.error =  "Deu zika";
        });
    }

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        }).error(function(data,status){
            $scope.error =  "Deu zika";
        });
    }

    carregarOperadoras();
    carregarContatos();

    $scope.addContato = function (contato) {
        contato.serial  = serialGenerator.generate();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $scope.contatos.push(contato);
        }).error(function(data,status){
            $scope.error =  "Deu zika";
        });
    }

    $scope.delContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            return !contato.selecionado?contato:null;
        })
        console.log(contatos);
    }

    $scope.hasContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        })
    }

    $scope.ordenarPor = function (valor) {
        $scope.criterioDeOrdenacao = valor;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

})
