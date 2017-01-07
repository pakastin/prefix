(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.prefix = global.prefix || {})));
}(this, (function (exports) { 'use strict';

var style = document.createElement('p').style;
var memoized = {};

function prefix (param) {
  if (typeof memoized[param] !== 'undefined') {
    return memoized[param];
  }

  if (typeof style[param] !== 'undefined') {
    memoized[param] = param;
    return param;
  }

  var camelCase = param[0].toUpperCase() + param.slice(1);
  var prefixes = ['webkit', 'moz', 'ms', 'o'];
  var test;

  for (var i = 0, len = prefixes.length; i < len; i++) {
    test = prefixes[i] + camelCase;

    if (typeof style[test] !== 'undefined') {
      memoized[param] = test;
      return test;
    }
  }
}

exports.prefix = prefix;

Object.defineProperty(exports, '__esModule', { value: true });

})));
