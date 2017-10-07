
const isBrowser = typeof document !== 'undefined';
const style = isBrowser ? document.createElement('p').style : {};
const memoized = {};

function prefix (param) {
  if (typeof memoized[param] !== 'undefined') {
    return memoized[param];
  }

  if (typeof style[param] !== 'undefined') {
    return (memoized[param] = param);
  }

  const camelCase = param[0].toUpperCase() + param.slice(1);
  const prefixes = ['webkit', 'moz', 'ms', 'o'];

  for (let i = 0, len = prefixes.length; i < len; i++) {
    const test = prefixes[i] + camelCase;

    if (typeof style[test] !== 'undefined') {
      return (memoized[param] = test);
    }
  }

  return (memoized[param] = param);
}

function identity (param) { return param; }

export default (isBrowser ? prefix : identity);
