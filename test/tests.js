const mansplain = require('../');
const should = require('chai').should();

describe('mansplain', function () {
  it('should convert an npm man link to an html anchor element', function () {
    const input = '<li>npm-cmd(9)</li>';
    const result = mansplain(input);
    result.should.equal('<li><a href="cmd">cmd</a></li>');
  });
});
