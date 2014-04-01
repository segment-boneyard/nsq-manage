var Manage = require('./');
var assert = require('assert');

describe('Manage(nsqd)', function(){
  it('does not need new', function(){
    var manage = Manage('addr');
    assert(manage);
  });
});

