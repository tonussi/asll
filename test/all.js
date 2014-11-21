var assert = require('assert');
var glc = require('../src/glc.js');

exports['test if glc is really export'] = function testGlcExporting(assert) {
  var actual = null;
  var expected = new glc.GLC('a');
  var message = 'test Glc reference';
  var operator = null;

  assert.fail(actual, expected, message, operator);
};

if (module == require.main) require('test').run(exports)
