function mansplain(html, skip, prefix) {
  if (!prefix) {
    prefix = "";
  } else {
    prefix = '/' + prefix;
  }
  var first = skip;
  var result = html.replace(/([-.a-z]+)\((\d)\)/g, function(match, p1, p2) {
    if (first) {
      first = false;
      return match.replace(/\(\d\)/, '');
    }
    var cmd = p1.replace(/npm-/, "");
    return '<a href="' + prefix + '/' + cmd + '">' + p1 + '</a>';
  });
  return result;
};

module.exports = mansplain;
