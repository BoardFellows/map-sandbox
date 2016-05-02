(function(){
  var mapStyle = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#444444"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          "color": "#f2f2f2"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          saturation: "-65"
        },
        {
          lightness: "45"
        },
        {
          gamma: "1.2"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          "visibility": "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          "visibility": "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        {
          "visibility": "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          saturation: "-33"
        },
        {
          lightness: "22"
        },
        {
          gamma: "2.08"
        }
      ]
    },
    {
      featureType: "transit.station.airport",
      elementType: "geometry",
      stylers: [
        {
          "gamma": "2.08"
        },
        {
          "hue": "#ffa200"
        }
      ]
    },
    {
      featureType: "transit.station.airport",
      elementType: "labels",
      stylers: [
        {
          "visibility": "off"
        }
      ]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit.station.rail",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#bbd9e5"
        },
        {
          visibility: "simplified"
        }
      ]
    }
  ]
  
  
  
  
  var googleMapHelper = {
    
    mapHolder: document.getElementById('google-map'),
    
    map: null,
    
    initialMapProperties: {
      center: new google.maps.LatLng(51.506393, -0.127739), 
      zoom:14, 
      mapTypeId: google.maps.MapTypeId.ROADMAP, 
      styles: mapStyle, 
      disableDefaultUI: true
    },
    
    buildMap() {
      this.map = new google.maps.Map(this.mapHolder, this.initialMapProperties);
    }
  }
  
  
  
  
  
  googleMapHelper.buildMap();
})();
