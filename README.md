# raw plugin for SystemJS

Loads raw array buffers in a way that can be imported in SystemJS projects.

## Basic Use
```javascript
System.import('./data.exe!raw').then(function(data) {})
```

'data' out will be an ArrayBuffer. For more info on the ArrayBuffer, see the [MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). You cannot modify the ArrayBuffer, instead you must create a view on it with:

```javascript
var view = new Uint8Array(data)
```

This will give you an 8-bit view where each index in the buffer object is an unsigned 8 bit integer.

Note: this data will not be bundled with the SystemJS builder. If you need this data, make sure the URL can correctly resolve to it after you've bundled.

### Text Usage

You can convert the data from an ArrayBuffer to a JS String using the [TextDecoder interface](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder). Like so:

```javascript
var text = TextDecoder('utf-8').decode(new Uint8Array(data))
```

The polyfill and more detailed examples are available in [@inexorabletash's text-encoding library](https://github.com/inexorabletash/text-encoding).

## Testing

The tests should work in both Node and on the web. The page "test.html" should load the tests (you can run the server with python -m SimpleHTTPServer). You can compare them to: [http://matthewbauer.us/plugin-raw/test.html](http://matthewbauer.us/plugin-raw/test.html)

To run in node:

```sh
mocha --compilers js:babel/register test.js
```

### License

MIT
