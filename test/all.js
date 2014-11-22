var assert = require('assert');
var glc = require('../src/glc.js');
var hashtable = require('../src/hashtable.js');

exports['test original tamanho'] = function testTamanhoOriginal(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('original tamanho: ', h.tamanho);
  assert.equal(h.tamanho, 4, 'tamanho deve ser 4');
  h = null;
}

exports['test value of key one'] = function testValorDaChaveUm(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('value of key one: ', h.getItem('one'));
  assert.equal(h.getItem('one'), 1, 'deve ser igual a one => 1');
  h = null;
}

exports['test has key foo?'] = function testTemChaveFoo(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('has key foo? ', h.hasItem('foo'));
  assert.equal(h.hasItem('foo'), false, 'deve retornar false');
  h = null;
}

exports['test previous value of key foo'] = function testValorAnteriorDaChaveFoo(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('previous value of key foo: ', h.setItem('foo', 'bar'));
  h.setItem('foo', 'bar');
  assert.equal(h.getItem('foo'), 'bar', 'deve ser igual a foo => bar');
  h = null;
}

exports['tamanho after setItem'] = function testTamanhoAfterSetItem(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('tamanho after setItem: ', h.tamanho);
  h.setItem('foo', 'bar');
  assert.equal(h.tamanho, 5, 'deve ser igual a 5');
  h = null;
}

exports['value of key four'] = function testValorDaChaveImNo4(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  // console.log('value of key four: ', h.getItem(four));
  assert.equal(h.getItem(four), 4, 'devera ser igual a four => 4');
  h = null;
}

exports['value of key foo'] = function testValorDaChaveFoo(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  h.setItem('foo', 'bar');
  // console.log('value of key foo: ', h.getItem('foo'));
  assert.equal(h.getItem('foo'), 'bar', 'deve ser foo => bar');
  h = null;
}

exports['tamanho after clear'] = function testTamanhoDepoisDeLimpar(assert) {
  var h = new hashtable.HashTable({one: 1, two: 2, three: 3, four: 4});
  h.clear();
  // console.log('tamanho after clear: ', h.tamanho);
  assert.equal(h.tamanho, 0, 'deve ser 0');
  h = null;
}

if (module == require.main) require('test').run(exports)
