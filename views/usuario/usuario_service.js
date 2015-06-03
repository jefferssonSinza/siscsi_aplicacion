var siscsi=angular.module('siscsi');

siscsi.service('usuarioService',function($http,$rootScope){

    this.getUsuario= function(id){
        return $http({
            method: 'GET',
            url: $rootScope.urlBase+'api/public/usuario'+id
        });
    };
    this.addUsuario= function(usuario){
        return $http({
            method: 'POST',
            url: $rootScope.urlBase+'api/public/usuario',
            data:usuario
        });
    };

    this.editUsuario= function(usuario,id){
        return $http({
            method: 'PUT',
            url: $rootScope.urlBase+'api/public/usuario'+id,
            data:usuario
        });
    };
    this.removeUsuario=function(id){
        return $http({
            method: 'DELETE',
            url: $rootScope.urlBase+'api/public/usuario'+id
        });
    };

    this.allUsuario= function(){
        return $http({
            method: 'GET',
            url: $rootScope.urlBase+'api/public/usuario'
        });
    }



});
