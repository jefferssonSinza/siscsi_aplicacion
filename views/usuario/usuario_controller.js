var siscsi= angular.module('siscsi');

siscsi.controller('usuarioController',function($scope,usuarioService){

    $scope.usuario={};
    $scope.usuarios={};
     allUsuario();

    $scope.addUsuario=function(){

    };
    $scope.deleteUsuario= function(){

    }

    $scope.editUsuario= function(){

    }

    $scope.deleteUsuario= function(){


    }

    function allUsuario(){
        usuarioService.allUsuario().then(function(resul){
           $scope.usuarios= resul.data.usuarios;
        })
    }
});
