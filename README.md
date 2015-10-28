# mansplain
> convert npm man links to html anchor elements

## usage

```
npm install mansplain --save
```

```
const mansplain = require('mansplain');

var my_string = "<li>npm-cmd(9)</li>";
console.log(mansplain(my_string));

#=> '<li><a href="cli/cmd">cmd</a></li>'
```

## notes

- matches on a word with digits, hypens, or periods followed by (n), where n is a single digit
- will remove `npm-` prefix
- link is namespaced with `cli/`
