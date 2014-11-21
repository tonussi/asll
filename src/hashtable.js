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

  chaves : function() {
    var chaves = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        chaves.push(k);
      }
    }
    return chaves;
  },

  valores : function() {
    var valores = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        valores.push(this.items[k]);
      }
    }
    return valores;
  },

  each : function(fn) {
    for (var k in this.items) {
      if (this.hasItem(k)) {
        fn(k, this.items[k]);
      }
    }
  },

  clear : function() {
    this.items = {}
    this.tamanho = 0;
  }

};

exports.HashTable = HashTable;

if (require.main === module) {
  var hash = new HashTable({'S':'bA | bBB | DF', 'S':'bA | bBB | DF'});
  console.log(hash);
}
