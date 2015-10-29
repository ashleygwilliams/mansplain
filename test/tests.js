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
  it('should prefix the href variable if prefix is passed', function() {
    const input = '<li>npm-cmd(9)</li>';
    const result = mansplain({ input: input, prefix: 'cli'});
    result.should.equal('<li><a href="/cli/cmd">npm-cmd</a></li>'); 
  });
  it('should change prefix to files for special cmds in npm_mode', function() {
    const input = '<li>package.json(1)</li>';
    const result = mansplain({ input: input, npm_mode: true });
    result.should.equal('<li><a href="/files/package.json">package.json</a></li>');
  });
  it('shhould change prefix to misc for special cmds in npm_mode', function() {
    const input = '<li>scope(1)</li>';
    const result = mansplain({ input: input, npm_mode: true });
    result.should.equal('<li><a href="/misc/scope">scope</a></li>'); 
  })
  it('should not change prefix to files for not special cmds in npm_mode', function() {
    const input = '<li>npm-cmd(9)</li>';
    const result = mansplain({ input: input, prefix: 'cli', npm_mode: true });
    result.should.equal('<li><a href="/cli/cmd">npm-cmd</a></li>');
  });
});
