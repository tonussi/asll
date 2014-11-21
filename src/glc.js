var _ = require('underscore');

/**
 * TODO
 *
 * GLC algorithm
 */

var GLC = function () {

  var map = Array.prototype.map;

}

GLC.prototype = {

  adiciona : function(chave, valor) {

    return 1;

  },

  remove : function(chave, valor) {

    return null;

  },

  busca : function(chave, valor) {

    return 0;

  },

  mostra : function(chave, valor) {

    return '';

  }


};

exports.GLC = GLC;

if (require.main === module) {
  var glc = require('./glc.js');
  var gramatica = new glc.GLC();

  gramatica.adiciona('S', 'aDa|bDF|cC|F');
  gramatica.adiciona('D', 'aaca|dD|cC');
  gramatica.adiciona('F', 'adac|F|cC');

  console.log(gramatica);
}
