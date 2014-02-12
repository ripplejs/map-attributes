var assert = require('assert');
var map = require('map-attributes');

describe('map attributes', function(){

  it('should map a nodes attributes', function(){
    var node = document.createElement('div');
    node.setAttribute('class', 'foo');
    node.setAttribute('data-text', 'bar');
    var results = map(node, function(attr, value){
      return [attr, value];
    });
    assert( results[1][0] === 'class' );
    assert( results[1][1] === 'foo' );
    assert( results[0][0] === 'data-text' );
    assert( results[0][1] === 'bar' );
  });

  it('should return an empty array', function(){
    var node = document.createElement('div');
    var results = map(node, function(attr, value){
      return [attr, value];
    });
    assert( results.length === 0 );
  })

});