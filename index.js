
/**
 * Module dependencies.
 */

var element = require('tower-element');
var directive = require('tower-directive');

/**
 * Expose `elementDirective`.
 */

module.exports = directive('data-element').compiler(elementDirective);

/**
 * Define `elementDirective`.
 */

function elementDirective(el, attr) {
  var expression = attr.expression;
  // XXX: could probably use some way of caching.

  function exec(scope, cursor, attr) {
    var name = expression(scope);
    var obj = element(name).init({ parent: scope });
    var el = obj.render();
    cursor.parentNode.insertBefore(el, cursor.nextSibling);
  }

  return exec;
}