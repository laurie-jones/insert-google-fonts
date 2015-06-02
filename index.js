/**
 * Checks to see if a class exists on the <html> element
 * Used to detect if a feature is enabled
 * @param name
 * @param weights
 */
function fonts(name, weights) {
  this.name = name;
  this.weights = weights || [];
}

module.exports = fonts;





/**
 * Checks to see if a class exists on the <html> element
 * Used to detect if a feature is enabled
 * @param name
 * @param weights
 */
function insertGoogleFonts(fonts) {

  function insertFont(url) {
    var font = document.createElement('link');
    font.setAttribute('rel', 'stylesheet');
    font.setAttribute('type', 'text/css');
    font.setAttribute('href', url);

    var script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(font, script);
  }

  // === insert Google Fonts separately to work for IE ===
  if (navigator.userAgent.match(/MSIE|Trident/)) {
    insertFont('//fonts.googleapis.com/css?family=Roboto:100');
    insertFont('//fonts.googleapis.com/css?family=Roboto:300');
    insertFont('//fonts.googleapis.com/css?family=Roboto:400');
    insertFont('//fonts.googleapis.com/css?family=Roboto:700');
    insertFont('//fonts.googleapis.com/css?family=Open+Sans:400');
    insertFont('//fonts.googleapis.com/css?family=Open+Sans:700');
  } else {
    insertFont('//fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:100,300,400,700');
  }

}

module.exports = insertGoogleFonts;