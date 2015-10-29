var FILES_DOCS = ["folders", "npmrc", "package.json"];
var MISC_DOCS = ["coding-style", "config", "developers", "disputes", "faq", "orgs", "registry", "removing-npm", "scope", "scripts", "semver"];

function mansplain(opts) {
  var input = opts.input;
  var skip = opts.skip;
  var prefix = opts.prefix;
  var npm_mode = opts.npm_mode;
  if (!prefix) {
    prefix = "";
  } else {
    prefix = '/' + prefix;
  }
  var result = input.replace(/([-.a-z]+)\((\d)\)/g, function(match, p1, p2) {
    if (skip) {
      skip = false;
      return match.replace(/\(\d\)/, '');
    }
    var cmd = p1.replace(/npm-/, "");
    if (npm_mode && FILES_DOCS.indexOf(cmd) !== -1) {
      return '<a href="/files/' + cmd + '">' + p1 + '</a>';
    } else if (npm_mode && MISC_DOCS.indexOf(cmd) !== -1) {
      return '<a href="/misc/' + cmd + '">' + p1 + '</a>';
    }
    return '<a href="' + prefix + '/' + cmd + '">' + p1 + '</a>';
  });
  return result;
};

module.exports = mansplain;
