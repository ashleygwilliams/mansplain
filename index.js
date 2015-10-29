function mansplain(opts) {
  var input = opts.input;
  var skip = opts.skip;
  var prefix_hash = opts.prefix;
  var result = input.replace(/([-.a-z]+)\((\d)\)/g, function(match, p1, p2) {
    if (skip) {
      skip = false;
      return match.replace(/\(\d\)/, '');
    }
    var cmd = p1.replace(/npm-/, "");
    var prefix;
    if (prefix_hash) {
      prefix = '/' + prefix_hash[p2];
    } else {
      prefix = ""
    }
    return '<a href="' + prefix + '/' + cmd + '">' + p1 + '</a>';
  });
  return result;
};

module.exports = mansplain;
