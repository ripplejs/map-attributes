var attributes = require('attributes');

module.exports = function(node, fn) {
  var attrs = attributes(node);
  return Object.keys(attrs).map(function(key){
    return fn(key, attrs[key]);
  });
};