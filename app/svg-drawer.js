
// http://robert.katzki.de/posts/inline-svg-as-google-maps-marker
// http://www.ubilabs.net/en/news/2016-01-11
// http://codepen.io/ro-ka/pen/QjXgmg?editors=1010
// https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS
// https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/
// https://www.w3.org/TR/xml-stylesheet/
// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/

// clipping: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking

module.exports = function returnSvgMapMarkerWithText(text, node) {
  // Decided it was too complicated to link to a sep stylesheet, doing it inline 
  let mapMarkerSpec = {
    height: 20,
    width: 20, 
    outlineColor: (node.metro) ? '#D62700' : '#002A4A',
    strokeWidth: 2,
    topColor: '#E3D6B7',
    botColor: (node.bus) ? '#17607D' : '#E3D6B7',
    boxStroke: (node.metro) ? '#D62700' : '#002A4A',
    boxFill: '#FFFFFF', 
    textStroke: '#002A4A'     
  };
  
  // Using BEM class naming conventions https://css-tricks.com/bem-101/
  // let classes = (function() {
  //   return (['taxi', 'bus', 'metro', 'water']
  //     .filter((transportType) => {
  //       return node[transportType];
  //     })
  //     .map((transportType) => {
  //       // returns 'mapSvg--type-taxi', for example
  //       return `mapSvg--type-${transportType}`;
  //     })
  //     .join(' '));
  // })();
  
  
  
  // return ('data:image/svg+xml;utf-8,' +
  //   encodeURIComponent(`<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="16" cy="16" r="16" fill="red"/></svg>`));
  
  // Make an outline ring, a top semicircle, a bottom semicircle, a square in the middle, and the text on top.
  return ('data:image/svg+xml;utf-8,' +
    encodeURIComponent(
    `<svg width="${mapMarkerSpec.width + 2 * mapMarkerSpec.strokeWidth}" height="${mapMarkerSpec.height + 2 * mapMarkerSpec.strokeWidth}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${mapMarkerSpec.width + 2 * mapMarkerSpec.strokeWidth} ${mapMarkerSpec.height + 2 * mapMarkerSpec.strokeWidth}" version="1.1" class="mapSvg"> \
      <defs> 
        <clipPath id="clip-bottom"> 
          <rect width="${mapMarkerSpec.width}" height="${mapMarkerSpec.height/2}" x="${mapMarkerSpec.strokeWidth}" y="${mapMarkerSpec.strokeWidth}" /> 
        </clipPath> \
        <clipPath id="clip-top"> \
          <rect width="${mapMarkerSpec.width}" height="${mapMarkerSpec.height/2}" x="${mapMarkerSpec.strokeWidth}" y="${mapMarkerSpec.height/2 + mapMarkerSpec.strokeWidth}" /> 
        </clipPath> \
      </defs> \
      <circle cx="${mapMarkerSpec.width/2 + mapMarkerSpec.strokeWidth}" cy="${mapMarkerSpec.height/2 + mapMarkerSpec.strokeWidth}" r="${mapMarkerSpec.height/2}" class="mapSvg__outline" stroke="${mapMarkerSpec.outlineColor}" stroke-width="${mapMarkerSpec.strokeWidth}"/> \
      <circle cx="${mapMarkerSpec.width/2 + mapMarkerSpec.strokeWidth}" cy="${mapMarkerSpec.height/2 + mapMarkerSpec.strokeWidth}" r="${mapMarkerSpec.height/2}" class="mapSvg__semicirc mapSvg__tophalf" clip-path="url(#clip-bottom)" fill="${mapMarkerSpec.topColor}"/> \
      <circle cx="${mapMarkerSpec.width/2 + mapMarkerSpec.strokeWidth}" cy="${mapMarkerSpec.height/2 + mapMarkerSpec.strokeWidth}" r="${mapMarkerSpec.height/2}" class="mapSvg__semicirc mapSvg__botHalf" clip-path="url(#clip-top)" fill="${mapMarkerSpec.botColor}"/> \
      <rect x="${mapMarkerSpec.width/8 + mapMarkerSpec.strokeWidth}" y="${mapMarkerSpec.width/4 + mapMarkerSpec.strokeWidth}" width="${mapMarkerSpec.width * 3/4}" height="${mapMarkerSpec.height/2}" class="mapSvg__textbox" fill="${mapMarkerSpec.boxFill}" stroke="${mapMarkerSpec.boxStroke}"/> \
      <text x="${mapMarkerSpec.width/2 + mapMarkerSpec.strokeWidth}" y="${mapMarkerSpec.height/2 + mapMarkerSpec.strokeWidth}" text-anchor="middle" class="mapSvg__text" stroke="${mapMarkerSpec.textStroke}" font-size="${3 * mapMarkerSpec.strokeWidth}" dy="${mapMarkerSpec.strokeWidth}" font-family="Open Sans, sans-serif">${text}</text> \
  </svg>`));
  
};
