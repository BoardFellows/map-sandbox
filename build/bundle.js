/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	(function () {
	  var mapStyle = [
	  // {
	  //   featureType: "administrative",
	  //   elementType: "labels.text.fill",
	  //   stylers: [
	  //     {
	  //       color: "#888888"
	  //     }
	  //   ]
	  // },
	  // {
	  //   featureType: "administrative.locality",
	  //   elementType: "labels",
	  //   stylers: [
	  //     {
	  //       visibility: "on"
	  //     }
	  //   ]
	  // },
	  {
	    featureType: "administrative",
	    elementType: "labels",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "administrative",
	    elementType: "labels.text.fill",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "administrative.locality",
	    elementType: "labels",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "landscape",
	    elementType: "all",
	    stylers: [{
	      "color": "#f2f2f2"
	    }, {
	      "visibility": "simplified"
	    }]
	  }, {
	    featureType: "poi",
	    elementType: "all",
	    stylers: [{
	      visibility: "on"
	    }]
	  }, {
	    featureType: "poi",
	    elementType: "geometry",
	    stylers: [{
	      visibility: "simplified"
	    }, {
	      saturation: "-65"
	    }, {
	      lightness: "45"
	    }, {
	      gamma: "1.2"
	    }]
	  }, {
	    featureType: "poi",
	    elementType: "labels",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "poi",
	    elementType: "labels.icon",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "road",
	    elementType: "all",
	    stylers: [{
	      "saturation": -100
	    }, {
	      "lightness": 45
	    }]
	  }, {
	    featureType: "road",
	    elementType: "labels",
	    stylers: [{
	      "visibility": "off"
	    }]
	  }, {
	    featureType: "road",
	    elementType: "labels.icon",
	    stylers: [{
	      "visibility": "off"
	    }]
	  }, {
	    featureType: "road.highway",
	    elementType: "all",
	    stylers: [{
	      "visibility": "simplified"
	    }]
	  }, {
	    featureType: "road.highway",
	    elementType: "labels",
	    stylers: [{
	      "visibility": "off"
	    }]
	  }, {
	    featureType: "road.highway",
	    elementType: "labels.icon",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "road.arterial",
	    elementType: "labels.icon",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "transit.line",
	    elementType: "geometry",
	    stylers: [{
	      visibility: "off"
	    }
	    // {
	    //   saturation: "-33"
	    // },
	    // {
	    //   lightness: "22"
	    // },
	    // {
	    //   gamma: "2.08"
	    // }
	    ]
	  }, {
	    featureType: "transit.station.airport",
	    elementType: "geometry",
	    stylers: [{
	      "gamma": "2.08"
	    }, {
	      "hue": "#ffa200"
	    }]
	  }, {
	    featureType: "transit.station.airport",
	    elementType: "labels",
	    stylers: [{
	      "visibility": "off"
	    }]
	  }, {
	    featureType: "transit.station.rail",
	    elementType: "labels.text",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "transit.station.rail",
	    elementType: "labels.icon",
	    stylers: [{
	      visibility: "off"
	    }]
	  }, {
	    featureType: "water",
	    elementType: "all",
	    stylers: [{
	      color: "#bbd9e5"
	    }, {
	      visibility: "simplified"
	    }]
	  }];

	  var googleMapHelper = {

	    mapHolder: document.getElementById('google-map'),

	    map: null,

	    initialMapProperties: {
	      center: new google.maps.LatLng(51.506393, -0.127739),
	      zoom: 14,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      styles: mapStyle,
	      disableDefaulUI: true,
	      zoomControl: true,
	      mapTypeControl: false,
	      scaleControl: true,
	      streetViewControl: false,
	      rotateControl: false,
	      fullScreenControl: false
	    },

	    buildMap: function buildMap() {
	      this.map = new google.maps.Map(this.mapHolder, this.initialMapProperties);
	    }
	  };

	  googleMapHelper.buildMap();
	})();

/***/ }
/******/ ]);