/**
 * TODO
 *
 * First algorithm
 */

var First = function (gramatica) { };

First.prototype = function (gramatica) {
  var map = Array.prototype.map;
};

if (require.main === module) {
  var gramatica = glc.Glc();
  glc.adiciona('S', 'aDa|bDF|cC|F');
  glc.adiciona('D', 'aaca|dD|cC');
  glc.adiciona('F', 'adac|F|cC');

  var first = new First();
  console.log first);
}
