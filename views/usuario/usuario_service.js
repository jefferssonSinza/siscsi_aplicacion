var siscsi=angular.module('siscsi');

siscsi.service('usuarioService',function($http,$rootScope){

    this.getUsuario= function(id){
        return $http({
            method: 'GET',
            url: $rootScope.urlBase+'/usuario/'+id
        });
    };
    this.addUsuario= function(usuario){
        return $http({
            method: 'POST',
            url: $rootScope.urlBase+'/usuario/',
            data:usuario
        });
    };

    this.editUsuario= function(usuario,id){
        return $http({
            method: 'PUT',
            url: $rootScope.urlBase+'/usuario/'+id,
            data:usuario
        });
    };
    this.removeUsuario=function(id){
        return $http({
            method: 'DELETE',
            url: $rootScope.urlBase+'/usuario/'+id
        });
    };

    this.allUsuario= function(){
        return $http({
            method: 'DELETE',
            url: $rootScope.urlBase+'/usuario/'
        });
    }



});
