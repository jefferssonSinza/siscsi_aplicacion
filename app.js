var siscsi = angular.module('siscsi', ['ui.router','ui.bootstrap']);

siscsi.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');
        $stateProvider.
            state('login', {
                url: '/login',
                templateUrl: 'login.hmtl',
                controller: 'loginController',
            }).
            state('inicio', {
                url: '/inicio',
                templateUrl:'index.html',
            }).
            state('usuario', {
                url: '/usuario',
                templateUrl: 'views/usuario/usuario_list.html',
                 controller: 'usuarioController',
            })
    }]).run(function($rootScope) {
    $rootScope.urlBase=" http://localhost";

    });