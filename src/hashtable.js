/**
 * HashTable Class
 */

function HashTable(objeto) {

  var items = {};
  var tamanho = 0;

  for (var propriedade in objeto) {
    if (objeto.hasOwnProperty(propriedade)) {
      this.items[propriedade] = objeto[propriedade];
      this.tamanho++;
    }
  }

  console.log(objeto);

}

HashTable.prototype = {

  setItem = function (chave, argumento) {
    var antecedente = undefined;
    if (this.hasItem(chave)) {
      antecedente = this.items[chave];
    } else {
      this.length++;
    }
    this.items[chave] = valor;
    return antecedente;
  },

  getItem = function (chave) {
    return this.hasItem(chave) ? this.items[chave] : undefined;
  }

};

exports.HashTable = HashTable;

if (require.main == module) {
  var ht = new HashTable({t: 't', s: 's', k: 'k'});
  console.log(ht);
  console.log(ht.list());
}
