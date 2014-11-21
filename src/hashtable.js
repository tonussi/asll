/**
 * HashTable Class
 */

function HashTable(objeto) {

  var colecao = {};
  var tamanho = 0;

  for (var propriedade in objeto) {
    if (objeto.hasOwnProperty(propriedade)) {
      this.colecao[propriedade] = objeto[propriedade];
      this.tamanho++;
    }
  }

  console.log(objeto);

}

HashTable.prototype = {

};

exports.HashTable = HashTable;

if (require.main == module) {
  var ht = new HashTable({t: 't', s: 's', k: 'k'});
  console.log(ht);
  console.log(ht.list());
}
