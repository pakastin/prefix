# prefix
CSS auto-prefix in < 0.5 KB (before GZIP)

## install

    npm install @pakastin/prefix
    
## oldskool
```html
<script src="https://pakastin.github.io/prefix/prefix.min.js"></script>
```

## usage

```js
import prefix from '@pakastin/prefix';

const TRANSFORM = prefix('transform');
const TRANSITION = prefix('transition');

el.style[TRANSFORM] = 'translate(100px, 0)';
el.style[TRANSITION] = `${TRANSFORM} .2s`;
```
