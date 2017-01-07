
const style = document.createElement('p').style;
const memoized = {};

export default function prefix (param) {
  if (typeof memoized[param] !== 'undefined') {
    return memoized[param];
  }

  if (typeof style[param] !== 'undefined') {
    memoized[param] = param;
    return param;
  }

  const camelCase = param[0].toUpperCase() + param.slice(1);
  const prefixes = ['webkit', 'moz', 'ms', 'o'];
  let test;

  for (let i = 0, len = prefixes.length; i < len; i++) {
    test = prefixes[i] + camelCase;

    if (typeof style[test] !== 'undefined') {
      memoized[param] = test;
      return test;
    }
  }
}
