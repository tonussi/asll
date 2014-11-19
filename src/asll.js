var Asll = function (gramatica) {};

ASll.prototype = function (gramatica) {

  var map = Array.prototype.map;

  a: {
    return map.call('Hello World', function(x) { return x.charCodeAt(0); });
  }

};



if (require.main === module) {
  var asll = new Asll();

  console.log(asll);
  console.log(a);
}
