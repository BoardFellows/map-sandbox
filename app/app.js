(function(){
  angular.module('map-sandbox-app', ['ngRoute', 'map-sandbox-map-module'])
    .config(['$routeProvider', mapSandboxRouter]);
  
  
  
  function mapSandboxRouter($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'map-view.html', 
        controller: 'MapController', 
        controllerAs: 'mapCtrl'
      })
      .otherwise('/');
  }

})();
