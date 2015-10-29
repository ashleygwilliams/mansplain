# mansplain
> convert npm man links to html anchor elements

a tool for converting man-style links to clickable html anchor elements.
made p specifically for the [npm cli reference](http://docs.npmjs.com)

![man-explain](./man-explain.png)

## installation

```bash
npm install mansplain
```

## usage

#### default usage:

```javascript
const mansplain = require('mansplain');

var input = "<li>npm-cmd(9)</li>";
var result = mansplain(my_string);
console.log(result);

//=> '<li><a href="cli/cmd">cmd</a></li>'
```

#### flags:

`mansplain` can take 2 arguments:
- a string to be converted
- a boolean: if set to `true`, `mansplain` will skip the first match, e.g.:

    ```javascript
    var input = '<li>npm-cmd(9)</li><li>npm-install(1)</li>'
    var result = mansplain(input, true);
    console.log(result);    

    //=> '<li>npm-cmd</li><li><a href="install">npm-install</a></li>'

    ```

## testing

this package uses mocha framework and the chai assertion library for testing.

```
npm test
```

## notes

- matches on a word with digits, hypens, or periods followed by (n), where n is a single digit
- will remove `npm-` prefix
