/* global describe, it */
'use strict'

const mansplain = require('../');

describe('mansplain', function () {
  it('should convert an npm man link to an html anchor element', function () {
    const input = '<li>npm-cmd(9)</li>';
    const result = mansplain(input);
    result.should.equal('<li><a href="cli/cmd">cmd</a></li>');
  });
});
