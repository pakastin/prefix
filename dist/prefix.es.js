var isBrowser = typeof document !== 'undefined';
var style = isBrowser ? document.createElement('p').style : {};
var memoized = {};

function prefix (param) {
  if (typeof memoized[param] !== 'undefined') {
    return memoized[param];
  }

  if (typeof style[param] !== 'undefined') {
    return (memoized[param] = param);
  }

  var camelCase = param[0].toUpperCase() + param.slice(1);
  var prefixes = ['webkit', 'moz', 'ms', 'o'];

  for (var i = 0, len = prefixes.length; i < len; i++) {
    var test = prefixes[i] + camelCase;

    if (typeof style[test] !== 'undefined') {
      return (memoized[param] = test);
    }
  }

  return (memoized[param] = param);
}

function identity (param) { return param; }

var index = isBrowser ? prefix : identity;

export default index;
