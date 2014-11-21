/**
 * HashTable Class
 */

function HashTable(o) {
  var len = 0;
  var items = {};
}

HashTable.prototype {

  this.len = 0;
  this.items = {};

  list: {
    for (var p in o) {
      if (o.hasOwnProperty(p)) {
        this.items[p] = o[p];
        this.len++;
      }
    }
  }

}

exports.HashTable = HashTable;

if (require.main == module) {
  var ht = new HashTable('a');
}
