function mansplain(html) {
  var result = html.replace(/([-.a-z]+)\((\d)\)/g, function(match, p1, p2) {
    var cmd = p1.replace(/[npm-]+/, "");
    return '<a href="cli/' + cmd + '">' + p1 + '</a>';
  });
  return result;
};

module.exports = mansplain;
