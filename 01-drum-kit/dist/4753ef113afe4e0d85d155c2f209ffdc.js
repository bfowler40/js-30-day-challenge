// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {

},{}],13:[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=function(){function t(){this._keyAtrribute="data-key",this._playingClass="key--playing",this._audio=Array.from(document.querySelectorAll("audio")),this._keys=Array.from(document.querySelectorAll(".key"))}return t.prototype.init=function(){this._addAudioIsPlayingListener(),this._addTransitionEndListenerToKeys(),window.addEventListener("keydown",this._playsound.bind(this))},t.prototype._playsound=function(t){this._findEl(String(t.keyCode),this._audio).then(function(t){t&&(t.currentTime=0,t.play())}).catch(function(t){})},t.prototype._addAudioIsPlayingListener=function(){var t=this;this._audio.forEach(function(n){var i=String(n.attributes[t._keyAtrribute].value);n.addEventListener("playing",t._keyIsPlaying.bind(t,i))})},t.prototype._keyIsPlaying=function(t){var n=this;this._findEl(t,this._keys).then(function(t){t&&t.classList.add(n._playingClass)}).catch(function(t){})},t.prototype._addTransitionEndListenerToKeys=function(){var t=this;this._keys.forEach(function(n){String(n.attributes[t._keyAtrribute].value);n.addEventListener("transitionend",function(){return n.classList.remove(t._playingClass)})})},t.prototype._findEl=function(t,n){var i=this,e=n.find(function(n){return n.attributes[i._keyAtrribute].value===t});return new Promise(function(t,n){e?t(e):n("No element found to match event keycode")})},t}(),n=new t;n.init(),exports.default=n;
},{}],11:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}require("../css/style.scss");var r=require("./drumkit"),s=e(r);
},{"../css/style.scss":12,"./drumkit":13}]},{},[11])