var towerElementDirective = 'undefined' == typeof window
  ? require('..')
  : require('tower-element-directive'); // how to do this better?

var assert = require('assert');

describe('towerElementDirective', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
