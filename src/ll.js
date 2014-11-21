var _ = require('underscore');

/**
 * TODO
 *
 * LL(1) algorithm
 */

LL = function (gramatica) {

  // All constants are indexed from 0
  var term = 0;
  var rule = 1;

  //  Terminals
  var t_lpar = 0;
  var t_rpar = 1;
  var t_a = 2;
  var t_plus = 3;
  var t_end = 4;
  var t_invalid = 5;

  //  Non-terminals
  var n_s = 0;
  var n_f = 1;

  // Parse table
  var table = [ [  1, -1, 0, -1, -1, -1 ] , [ -1, -1, 2, -1, -1, -1 ] ];

  var rules = [ [ rule, n_f ]
              , [ term, t_lpar
              ,   rule, n_s
              ,   term, t_plus
              ,   rule, n_f
              ,   term, t_rpar ]
              , [ term, t_a ]  ];

  var stack = [term, t_end, rule, n_s];

}

LL.prototype = {

  lexicalAnalysis: function(inputstring) {
      console.log('Lexical analysis');
      var tokens = [];

      for (var i in inputstring) {

        var c = inputstring[i];

        if (c == '+') {
          tokens.push(this.t_plus);
        }

        else if (c == '(') {
          tokens.push(this.t_lpar);
        }

        else if (c == ')') {
          tokens.push(this.t_rpar);
        }

        else if (c == 'a') {
          tokens.push(this.t_a);
        }

        else {
          tokens.push(this.t_invalid);
        }

        tokens.push(this.t_end);

        console.log(tokens);

        return tokens;

      }

    },

    syntacticAnalysis: function() {
      console.log('Syntactic analysis');
      var position = 0;

      while (this.stack.length > 0) {

        var stype = this.stack.pop();
        var svalue = this.stack.pop();

        var token = tokens[position];

        if (stype == this.term) {

          if (svalue == token) {

            position += 1;
            console.log('pop', svalue);

            if (token == t_end) {
              console.log('input accepted');
            }

          }

          else {
            throw new Error('bad term on input:' + token);
          }
        }

        else if (this.stype == this.rule) {

          console.log('svalue', svalue, 'token', token);
          this.rule = table[svalue][token];
          console.log('rule', this.rule);

          for (i in rules) {

            r = Array.prototype.reverse(this.rules[this.rule]);
            this.stack.push(r);

          }

        }

        console.log('stack', stack);

      }
    }
};

exports.LL = LL;

if (require.main === module) {
  var ll = new LL();
  console.log(ll);
  inputstring = '(a+a)'
  console.log(ll.syntacticAnalysis(ll.lexicalAnalysis(inputstring)));
}
