/**
 * TODO
 *
 * Glc algorithm
 */

var Glc = function (gramatica) { };

Glc.prototype = function (gramatica) {
  var map = Array.prototype.map;
};

if (require.main === module) {
  var gramatica = glc.Glc();
  glc.adiciona('S', 'aDa|bDF|cC|F');
  glc.adiciona('D', 'aaca|dD|cC');
  glc.adiciona('F', 'adac|F|cC');
  console.log(gramatica);
}
