const mansplain = require('../');
const should = require('chai').should();

describe('mansplain', function () {
  it('should convert an npm man link to an html anchor element', function () {
    const input = '<li>npm-cmd(9)</li>';
    const result = mansplain({ input: input });
    result.should.equal('<li><a href="/cmd">npm-cmd</a></li>');
  });
  it('should skip the first match if match flag is passed', function() {
    const input = '<li>npm-cmd(9)</li><li>npm-install(1)</li>'
    const result = mansplain({ input: input, skip: true});
    result.should.equal('<li>npm-cmd</li><li><a href="/install">npm-install</a></li>')
  });
  it('should prefix the href variable with prefix if prefix hash is passed', function() {
    const input = '<li>npm-cmd(1)</li>';
    const result = mansplain({ input: input, prefix: { 1: 'cli' }});
    result.should.equal('<li><a href="/cli/cmd">npm-cmd</a></li>'); 
  });
});
