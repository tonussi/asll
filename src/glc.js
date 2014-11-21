/**
 * TODO
 *
 * GLC algorithm
 */

var GLC = function (gramatica) {

  var map = Array.prototype.map;

};

GLC.prototype = function (gramatica) {

  adiciona: {

    return 1;

  },

  remove : {

    return null;

  },

  busca : {

    return 0;

  },

  mostra : {

    return '';

  }


};

exports.GLC = GLC;

if (require.main === module) {
  var glc = require('./glc.js');
  var gramatica = new glc.GLC();
  glc.adiciona('S', 'aDa|bDF|cC|F');
  glc.adiciona('D', 'aaca|dD|cC');
  glc.adiciona('F', 'adac|F|cC');
  console.log(gramatica);
}
