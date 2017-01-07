[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?maxAge=3600&style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@pakastin/prefix.svg?maxAge=60&style=flat-square)](https://www.npmjs.com/package/@pakastin/prefix)
[![Twitter Follow](https://img.shields.io/twitter/follow/pakastin.svg?style=social&maxAge=3600)](https://twitter.com/pakastin)

# prefix
CSS auto-prefix in < 0.5 KB (before GZIP)

## install

    npm install @pakastin/prefix
    
## usage

```js
import prefix from '@pakastin/prefix';

const TRANSFORM = prefix('transform');
const TRANSITION = prefix('transition');

const translate = (x, y) => `translate(${x}px, ${y}px)`;

const el = document.createElement('p');

el.style[TRANSITION] = `${TRANSFORM} .2s`;
el.style[TRANSFORM] = translate(100, 0);
```

## oldskool
```html
<script src="https://pakastin.github.io/prefix/prefix.min.js"></script>
<script>prefix(...)</script>
```

## License
[MIT](https://github.com/pakastin/prefix/blob/master/LICENSE)
