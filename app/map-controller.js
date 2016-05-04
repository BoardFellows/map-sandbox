/* global google */

(function() {
  angular.module('map-sandbox-map-module', [])
    .controller('MapController', ['$log', '$window', '$document', MapController]);
  
  function MapController($log, $window, $document) {
    $log.info('MapController instantiated');
    const vm              = this;
    vm.test               = 'LOADING';
    vm.coords             = require(__dirname + '/coords.js');
    vm.mapStyle           = require(__dirname + '/map-style.js');
    vm.map                = null;
    vm.mapMarkers         = [];
    // vm.mapHolder          = $document.find('#map_canvas');//[0];
    vm.mapHolder          = angular.element(document.querySelector('#map_canvas'))[0];
    vm.initialize         = initialize;
    vm.addListeners       = addListeners;
    vm.clearMarkers       = clearMarkers;
    vm.mapProps           = {
      center: new google.maps.LatLng(51.506393, -0.127739), 
      zoom:13, 
      mapTypeId: google.maps.MapTypeId.ROADMAP, 
      styles: vm.mapStyle,
      disableDefaulUI: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: false,
      fullScreenControl: false
    };
    
    
    function initialize() {
      $log.info('MapController initialize');
      vm.test               = 'TEST';
      vm.map = new google.maps.Map(vm.mapHolder, vm.mapProps);
      $log.log(vm.mapProps);
      $log.log(vm.mapHolder);
      $log.log(vm.map);
      vm.addListeners();
    }
    
    
    function addListeners() {
      $log.info('MapController addListeners');
      vm.map.addListener('click', function(e) {
        $log.log(e);
        $log.log(e.latLng.toString());
        var marker = new google.maps.Marker({
          position: e.latLng,
          map: vm.map, 
          title: 'hello world'
        });
        vm.mapMarkers.push(marker);
      });
      
    }
    
    // Will be using svgs to draw the markers for each stop. 
    // https://developers.google.com/maps/documentation/javascript/symbols
    // https://developers.google.com/maps/documentation/javascript/markers#complex_icons
    // might look into https://inkscape.org/en/
    
    function clearMarkers() {
      $log.info('MapController clearMarkers');
      vm.mapMarkers.forEach((marker) => {
        marker.setMap(null);
        marker = null;
      });
      
    }
    
  }
  
  
  
  // var googleMapHelper = {
  //   
  //   mapHolder: document.getElementById('google-map'),
  //   
  //   map: null,
  //   
  //   initialMapProperties: {
      // center: new google.maps.LatLng(51.506393, -0.127739), 
      // zoom:14, 
      // mapTypeId: google.maps.MapTypeId.ROADMAP, 
      // styles: mapStyle,
      // disableDefaulUI: true,
      // zoomControl: true,
      // mapTypeControl: false,
      // scaleControl: true,
      // streetViewControl: false,
      // rotateControl: false,
      // fullScreenControl: false
  //   },
  //   
  //   buildMap() {
  //     this.map = new google.maps.Map(this.mapHolder, this.initialMapProperties);
  //   }
  // }
  // 
  // googleMapHelper.buildMap();
  
  
  
})();
