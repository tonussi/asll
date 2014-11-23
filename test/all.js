var assert = require('assert');
var hashtable = require('../src/hashtable.js');

exports['test tamanho original'] = function testTamanhoOriginal(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  assert.equal(hasht.tamanho, 4, 'tamanho deve ser d');
  delete hasht;
}

exports['test valor da chave a'] = function testValorDaChaveUm(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  assert.equal(hasht.getItem('a'), 'a', 'deve ser igual a a => a');
  delete hasht;
}

exports['test se existe a chave foo'] = function testExisteChaveFoo(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  assert.equal(hasht.hasItem('foo'), false, 'deve retornar false');
  delete hasht;
}

exports['test valor anterior da chave foo'] = function testValorAnteriorDaChaveFoo(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  assert.equal(hasht.getItem('foo'), undefined, 'deve ser igual a foo => bar');
  delete hasht;
}

exports['test tamanho after setItem'] = function testTamanhoAfterSetItem(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  hasht.setItem('foo', 'bar');
  assert.equal(hasht.tamanho, 5, 'deve ser igual a 5');
  delete hasht;
}

exports['test valor da chave d'] = function testValorDaChaveD(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  assert.equal(hasht.getItem('d'), 'd', 'devera ser igual a d => d');
  delete hasht;
}

exports['test valor da chave foo'] = function testValorDaChaveFoo(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  hasht.setItem('foo', 'bar');
  assert.equal(hasht.getItem('foo'), 'bar', 'deve ser foo => bar');
  delete hasht;
}

exports['test tamanho after clear'] = function testTamanhoDepoisDeLimpar(assert) {
  var hasht = new hashtable.HashTable({a: 'a', b: 'b', c: 'c', d: 'd'});
  hasht.clearTable();
  assert.equal(hasht.tamanho, 0, 'deve ser 0');
  delete hasht;
}

if (module == require.main) require('test').run(exports)
