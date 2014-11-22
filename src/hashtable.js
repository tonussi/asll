/**
 * HashTable Class
 */

function HashTable(objeto) {

  this.tamanho = 0;
  this.items = {};

  for (var propriedade in objeto) {
    if (objeto.hasOwnProperty(propriedade)) {
      this.items[propriedade] = objeto[propriedade];
      this.tamanho++;
    }
  }
  console.log(objeto);
}

HashTable.prototype = {

  setItem : function (chave, valor) {

    var antecedente = undefined;

    if (this.hasItem(chave)) {
      antecedente = this.items[chave];
    } else {
      this.tamanho++;
    }
    this.items[chave] = valor;

    return antecedente;

  },

  getItem : function (chave) {
    return this.hasItem(chave) ? this.items[chave] : undefined;
  },

  hasItem : function(chave) {
    return this.items.hasOwnProperty(chave);
  },

  removeItem : function(chave) {
    if (this.hasItem(chave)) {
      antecedente = this.items[chave];
      this.tamanho--;
      delete this.items[chave];
      return antecedente;
    }
    else {
      return undefined;
    }
  },

  getChaves : function() {
    var getChaves = [];
    for (var chave in this.items) {
      if (this.hasItem(chave)) {
        getChaves.push(chave);
      }
    }
    return getChaves;
  },

  getValores : function() {
    var getValores = [];
    for (var chave in this.items) {
      if (this.hasItem(chave)) {
        getValores.push(this.items[chave]);
      }
    }
    return getValores;
  },

  getEach : function(fn) {
    for (var chave in this.items) {
      if (this.hasItem(chave)) {
        fn(chave, this.items[chave]);
      }
    }
  },

  clearTable : function() {
    this.items = {}
    this.tamanho = 0;
  }

};

exports.HashTable = HashTable;

if (require.main === module) {

  var gramatica = new HashTable({A: 'aA', B: 'bB', C: 'cC', D: 'dD'});

  gramatica.getEach(function(chave, valor) {

    console.log('%s => %s', chave, valor);

  });

}
