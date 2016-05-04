
// http://robert.katzki.de/posts/inline-svg-as-google-maps-marker
// http://www.ubilabs.net/en/news/2016-01-11
// http://codepen.io/ro-ka/pen/QjXgmg?editors=1010
// https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS
// https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/
// https://www.w3.org/TR/xml-stylesheet/
// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/

// clipping: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking

module.exports = function returnSvgMapMarkerWithText(text, node) {
  let mapMarkerSpec = {
    height: 32,
    width: 32      
  };
  
  // Using BEM class naming conventions https://css-tricks.com/bem-101/
  let classes = (function() {
    return (['taxi', 'bus', 'metro', 'water']
      .filter((transportType) => {
        return node[transportType];
      })
      .map((transportType) => {
        // returns 'mapSvg--type-taxi', for example
        return `mapSvg--type-${transportType}`;
      })
      .join(' '));
  })();
  
  // Make an outline ring, a top semicircle, a bottom semicircle, a square in the middle, and the text on top.
  return ('data:image/svg+xml;utf-8,' +
    encodeURIComponent(
    `<svg width="${mapMarkerSpec.width}" height="${mapMarkerSpec.height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${mapMarkerSpec.width} ${mapMarkerSpec.height}" version="1.1" class="${classes}"> \
    <defs> 
      <clipPath id="clip-bottom"> 
        <rect width="${mapMarkerSpec.width}" height="${mapMarkerSpec.height/2}" x="0" y="0" /> 
      </clipPath> \
      <clipPath id="clip-top"> \
        <rect width="${mapMarkerSpec.width}" height="${mapMarkerSpec.height/2}" x="0" y="${mapMarkerSpec.height/2}" /> 
      </clipPath> \
    </defs> \
    <circle cx="${mapMarkerSpec.width/2}" cy="${mapMarkerSpec.height/2}" r="${mapMarkerSpec.height/2}" class="mapSvg__outline"/> \
    <circle cx="${mapMarkerSpec.width/2}" cy="${mapMarkerSpec.height/2}" r="${mapMarkerSpec.height/2}" class="mapSvg__tophalf" clip-path="url(#clip-bottom)" /> \
    <circle cx="${mapMarkerSpec.width/2}" cy="${mapMarkerSpec.height/2}" r="${mapMarkerSpec.height/2}" class="mapSvg__botHalf" clip-path="url(#clip-top)" /> \
    <rect x="${mapMarkerSpec.width/4}" y="${mapMarkerSpec.width/4}" width="${mapMarkerSpec.width/2}" height="${mapMarkerSpec.height/2}" class="mapSvg__textbox" /> \
    <text x="${mapMarkerSpec.width/2}" y="${mapMarkerSpec.height/2}" text-anchor="middle" class="mapSvg__text">${text}</text> \
  </svg>`));
};
