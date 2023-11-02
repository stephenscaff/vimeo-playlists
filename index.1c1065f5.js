// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iXjm3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a44c43f11c1065f5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aKpwy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Normally, include via NPM
// import VimeoPlaylist form 'vimeoplaylist'
var _src = require("../../../../src");
var _srcDefault = parcelHelpers.interopDefault(_src);
// External Data
var _playlistJson = require("./playlist.json");
var _playlistJsonDefault = parcelHelpers.interopDefault(_playlistJson);
// Custom Playlist Item Template
var _plistTmpl = require("./plist.tmpl");
var _plistTmplDefault = parcelHelpers.interopDefault(_plistTmpl);
"use strict";
// Plugin Options
let options = {
    hasPlaylist: true,
    playlist: (0, _playlistJsonDefault.default),
    playlistOutput: "#js-vp-playlist",
    color: "#6c77f7",
    fullscreenToggle: "#js-vp-fstoggle",
    fullscreenToggleKeyCode: "KeyF",
    itemTmpl: (0, _plistTmplDefault.default)
};
// Init on #js-player
const vids = new (0, _srcDefault.default)("js-vp-player", options);
vids.init();

},{"../../../../src":"8lqZg","./playlist.json":"2MwtK","./plist.tmpl":"bijhv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTime", ()=>(0, _utils.formatTime));
var _vimeoPlaylistJs = require("./vimeo-playlist.js");
var _vimeoPlaylistJsDefault = parcelHelpers.interopDefault(_vimeoPlaylistJs);
var _utils = require("./utils");
exports.default = (0, _vimeoPlaylistJsDefault.default);

},{"./vimeo-playlist.js":"7vwxk","./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7vwxk":[function(require,module,exports) {
/* eslint-disable no-self-assign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _player = require("@vimeo/player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _utils = require("./utils");
var _plistTmpl = require("./plist.tmpl");
var _plistTmplDefault = parcelHelpers.interopDefault(_plistTmpl);
"use strict";
/**
 * Default Options
 */ VimeoPlaylist.defaults = {
    width: 900,
    loop: false,
    title: false,
    muted: true,
    controls: true,
    autoplay: true,
    color: "#7B8EF9",
    fullscreenToggle: "#js-vp-fstoggle",
    fullscreenToggleKeyCode: null,
    hasPlaylist: true,
    playlistOutput: "#js-vp-playlist",
    playlistNavNext: "#js-vp-next",
    playlistNavPrev: "#js-vp-prev",
    supportsKeyNav: true,
    playlist: [],
    itemTmpl: (0, _plistTmplDefault.default),
    itemName: "plist-item",
    itemTrigger: ".plist-item__link",
    debug: false
};
/**
 * VimeoPlaylist
 * Class for interacting with the Vimeo API
 * to create a continous playlist of Vimeo vids
 * @constructor
 * @requires @vimeo/player
 * @param {DOMElement} el - player element passed to Vimeo's imported Player class.
 * @param {Object} options - plugin options, playlist, etc.
 *
 * @author Stephen Scaff (github.com/stephenscaff || stephenscaff.com)
 */ function VimeoPlaylist(el, options) {
    options = options || {};
    Object.assign(this, VimeoPlaylist.defaults, options);
    if (!this.hasPlayerId(el)) return;
    this.hasPlaylist = this.hasPlaylist;
    this.playlistOutput = document.querySelector(this.playlistOutput);
    this.playlistNavPrev = document.querySelector(this.playlistNavPrev);
    this.playlistNavNext = document.querySelector(this.playlistNavNext);
    this.fullscreenToggle = document.querySelector(this.fullscreenToggle);
    this.fullscreenToggleKeyCode = this.fullscreenToggleKeyCode;
    this.playListItems = [];
    this.currentVidIdx = 0;
    this.vidCount = this.playlist.length;
    this.isActive = false;
    this.activeClass = "is-playing";
    this.pausedClass = "is-paused";
    this.debug = this.debug;
    this.player = new (0, _playerDefault.default)(el, {
        id: this.playlist[this.currentVidIdx].id,
        width: this.width,
        title: this.title,
        muted: this.muted,
        controls: this.controls,
        autoplay: this.autoplay,
        color: this.color
    });
}
/**
 * VimeoPlaylist Methods
 */ VimeoPlaylist.prototype = {
    constructor: VimeoPlaylist,
    /**
   * Has Player ID
   * Check if we have a valid player element id
   * to render Vimeo.Player
   * @param {Element ID}
   * @return {Boolean}
   */ hasPlayerId (el) {
        if (!(0, _utils.hasEl)(`#${el}`)) {
            console.warn("VimeoPlaylist: Provide a valid ID to render Vimeo Player");
            return false;
        }
        return true;
    },
    /**
   * Setup and buildPlaylist
   * buildPlaylist makes vimeo api requests
   * and calls playlist logic once those
   * promises resolve.
   */ init () {
        if (!this.player) return;
        this.settings();
        this.listeners();
        if (this.hasPlaylist) this.buildPlaylist();
    },
    /**
   * Player settings
   */ settings () {
        this.player.setColor(this.color);
    },
    /**
   * Player Listeners
   * @fires {onEnd | onPause | onPlay | toggleFullscreen}
   */ listeners () {
        this.onAlmostEnd();
        this.onEnd();
        this.onPause();
        this.onPlay();
        this.onFullScreenToggle();
        this.handleNavClicks();
        if (this.supportsKeyNav) this.handleKeyNav();
    },
    /**
   * LoadVid
   * Helper to load vimeo vids by their ID
   * No need for this.player['play']() and it
   * can cause a browser promise pause() error.
   * @param {string} id - vimeo video id
   */ loadVid (id) {
        console.log(id, this.player, this.player.loadVideo(id));
        this.player.loadVideo(id).then(()=>{
            this.setActiveState();
        }).catch((err)=>{
            // @todo better error handling
            if (this.debug) console.error(err, "error loading video");
        });
    },
    /**
   * OnEnd
   * Listens for when a vid ends.
   * @fires next()
   */ onEnd () {
        this.player.on("ended", ()=>{
            if (this.debug) console.debug("ended");
            this.next();
        });
    },
    /**
   * OnTimeupdate
   * Listens for when almost ends, based on threshold
   * @fires next()
   */ onAlmostEnd () {
        this.player.on("timeupdate", (data)=>{
            const currentTime = data.seconds;
            const duration = data.duration;
            const threshold = 0.5;
            if (duration - currentTime <= threshold) {
                if (this.debug) console.log("Video is almost ended");
                this.next();
            }
        });
    },
    /**
   * OnPause
   * @fires setPausedState
   */ onPause () {
        this.player.on("pause", ()=>{
            if (this.debug) console.debug("pause");
            this.setPausedState();
        });
    },
    /**
   * On Play
   * Calls setActiveState on play
   * @fires {setActiveState}
   */ onPlay () {
        this.player.on("play", ()=>{
            if (this.debug) console.debug("play");
            this.setActiveState();
        });
    },
    /**
   * On Fullscreen Toggle
   * @fires {toggleFullscreen} - if fullscreenToggle
   */ onFullScreenToggle () {
        //FS Toggle key
        if (this.fullscreenToggleKeyCode) window.addEventListener("keydown", (e)=>{
            if (e.code === this.fullscreenToggleKeyCode) this.toggleFullscreen();
        }, false);
        // FS Toggle Click
        if (this.fullscreenToggle) this.fullscreenToggle.addEventListener("click", (e)=>{
            e.preventDefault();
            this.toggleFullscreen();
        });
    },
    /**
   * Build Playlist from fetched vimeo vids
   * Fetches vids inConstructs playlist markup from this.playlist by
   *
   * @external { fetchAllVids | createFrag }
   * @fires { setupFirstVid | handlePlaylistClicks}
   */ buildPlaylist () {
        let counter = 0;
        const fetchedVids = (0, _utils.fetchAllVimeoVids)(this.playlist);
        fetchedVids.then((vids)=>{
            vids.forEach((vid)=>{
                if (vid === undefined) return;
                let tmpl = this.itemTmpl(vid[0]);
                let frag = (0, _utils.createFrag)(tmpl, "article", this.itemName);
                counter++;
                if (this.playlistOutput) this.playlistOutput.appendChild(frag);
                else if (this.debug) console.warn("VimeoPlaylist: Provide a valid selector to output playlist");
                if (counter === this.vidCount) {
                    this.setupFirstVid();
                    // define this.playlistItems
                    if (!this.hasPlaylist) return;
                    this.playlistItems = document.querySelectorAll(this.itemTrigger);
                    this.handlePlaylistClicks();
                }
            });
        });
    },
    /**
   * setupFirstVid
   * Handle setup for first vid in sequence
   * @fires { player['play'] }
   */ setupFirstVid () {
        if (!this.playlistItems) return;
        this.playlistItems[0].classList.add(this.activeClass);
        this.player.element.setAttribute("allow", "autoplay");
        this.player["play"]();
    },
    /**
   * HandlePlaylistClicks
   * Loops over this.playlistItems and listens for
   * clicks to play vid and define currentVidIdx
   * @fires { loadVid | setActiveState }
   */ handlePlaylistClicks () {
        this.playlistItems.forEach((item, i)=>{
            item.addEventListener("click", (e)=>{
                e.preventDefault();
                this.currentVidIdx = i;
                this.play(this.currentVidIdx);
            });
            item.addEventListener("keydown", (e)=>{
                if (e.code === "Enter") {
                    this.currentVidIdx = i;
                    this.play(this.currentVidIdx);
                }
            });
        });
    },
    /**
   * Handle Nav Clicks
   * Pal
   */ handleNavClicks () {
        if (this.playlistNavPrev) this.playlistNavPrev.addEventListener("click", (e)=>{
            e.preventDefault();
            this.prev();
        });
        if (this.playlistNavNext) this.playlistNavNext.addEventListener("click", (e)=>{
            e.preventDefault();
            this.next();
        });
    },
    /**
   * Handle Key Navigation
   * Keydown listener for next/prev arrow keys control
   */ handleKeyNav () {
        document.addEventListener("keydown", (event)=>{
            if (event.code === "ArrowRight") this.next();
            if (event.code === "ArrowLeft") this.prev();
        }, false);
    },
    /**
   * Set Active State
   * Toggle active state class
   */ setActiveState () {
        let active = document.querySelector(`.${this.activeClass}`);
        let paused = document.querySelector(`.${this.pausedClass}`);
        if (active) active.classList.remove(this.activeClass);
        if (paused) paused.classList.remove(this.pausedClass);
        if (this.hasPlaylist && this.playlistItems[this.currentVidIdx]) this.playlistItems[this.currentVidIdx].classList.add(this.activeClass);
    },
    /**
   * Set Paused Class
   * Adds Paused Class to active playlist item
   */ setPausedState () {
        let active = document.querySelector(`.${this.activeClass}`);
        if (active) active.classList.add(this.pausedClass);
    },
    /**
   * Play
   * Plays selected playlist vid by currentIndex
   * @param {number} currentIndex - index
   */ play (itemIndex) {
        this.currentVidIdx = itemIndex;
        this.loadVid(this.playlist[this.currentVidIdx]);
        this.setActiveState();
    },
    /**
   * Next
   * Tracks current video index and progress to next.
   */ next () {
        this.currentVidIdx++;
        if (this.currentVidIdx < this.vidCount) this.currentVidIdx;
        else this.currentVidIdx = 0;
        this.loadVid(this.playlist[this.currentVidIdx]);
    },
    /**
   * Prev
   * Not in use yet, but we may want an actual playlist at some point
   * Or, at least the ability to go forward and backward.
   */ prev () {
        this.currentVidIdx--;
        if (this.currentVidIdx < 0) this.currentVidIdx = 0;
        this.loadVid(this.playlist[this.currentVidIdx]);
    },
    /**
   * Toggle Fullscreen
   * Targeted vimeo iframe for full screen vid on Enter
   */ toggleFullscreen () {
        let vid = this.player.element;
        if (!document.vid) vid.requestFullscreen();
        else if (document.exitFullscreen) document.exitFullscreen();
    }
};
exports.default = VimeoPlaylist;

},{"@vimeo/player":"kmmUG","./utils":"en4he","./plist.tmpl":"7BDkK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmmUG":[function(require,module,exports) {
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self1, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self1, context)
        }), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
            value: function(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(innerFn, self1, context) {
        var state = "suspendedStart";
        return function(method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
            }
            for(context.method = method, context.arg = arg;;){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self1, context);
                if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self1, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self1, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(val) {
        var object = Object(val), keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        catch: function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self1;
}
function _possibleConstructorReturn(self1, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
/**
 * @module lib/functions
 */ /**
 * Check to see this is a node environment.
 * @type {Boolean}
 */ /* global global */ var isNode = typeof global !== "undefined" && ({}).toString.call(global) === "[object global]";
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) return prop;
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters.id;
    var url = oEmbedParameters.url;
    var idOrUrl = id || url;
    if (!idOrUrl) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
    if (isVimeoUrl(idOrUrl)) return idOrUrl.replace("http:", "https:");
    if (id) throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
/* eslint-disable max-params */ /**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */ var subscribe = function subscribe(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "addEventListener";
    var offName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "removeEventListener";
    var eventNames = typeof eventName === "string" ? [
        eventName
    ] : eventName;
    eventNames.forEach(function(evName) {
        target[onName](evName, callback);
    });
    return {
        cancel: function cancel() {
            return eventNames.forEach(function(evName) {
                return target[offName](evName, callback);
            });
        }
    };
};
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self1) {
    if (self1.WeakMap) return;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty = function(object, name, value) {
        if (hasDefine) Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    self1.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap1() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            defineProperty(this, "_id", genId("_WeakMap"));
            // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
            throw new TypeError("WeakMap iterable is not supported");
        }
        // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty(WeakMap1.prototype, "delete", function(key) {
            checkInstance(this, "delete");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        });
        // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty(WeakMap1.prototype, "get", function(key) {
            checkInstance(this, "get");
            if (!isObject(key)) return void 0;
            var entry = key[this._id];
            if (entry && entry[0] === key) return entry[1];
            return void 0;
        });
        // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty(WeakMap1.prototype, "has", function(key) {
            checkInstance(this, "has");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) return true;
            return false;
        });
        // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty(WeakMap1.prototype, "set", function(key, value) {
            checkInstance(this, "set");
            if (!isObject(key)) throw new TypeError("Invalid value used as weak map key");
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, "_id")) throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
        }
        function genId(prefix) {
            return prefix + "_" + rand() + "." + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap1, "_polyfill", true);
        return WeakMap1;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) module.exports = context[name];
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout;
        // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        }
        // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self1) {
                this.fn = fn;
                this.self = self1;
                this.next = void 0;
            }
            return {
                add: function add(fn, self1) {
                    item = new Item(fn, self1);
                    if (last) last.next = item;
                    else first = item;
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self1) {
            scheduling_queue.add(fn, self1);
            if (!cycle) cycle = timer(scheduling_queue.drain);
        }
        // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            this.chain.length = 0;
        }
        // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self1, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) chain.reject(self1.msg);
                else {
                    if (cb === true) ret = self1.msg;
                    else ret = cb.call(void 0, self1.msg);
                    if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                    else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                    else chain.resolve(ret);
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve(msg) {
            var _then, self1 = this;
            // already triggered?
            if (self1.triggered) return;
            self1.triggered = true;
            // unwrap
            if (self1.def) self1 = self1.def;
            try {
                if (_then = isThenable(msg)) schedule(function() {
                    var def_wrapper = new MakeDefWrapper(self1);
                    try {
                        _then.call(msg, function $resolve$() {
                            resolve.apply(def_wrapper, arguments);
                        }, function $reject$() {
                            reject.apply(def_wrapper, arguments);
                        });
                    } catch (err) {
                        reject.call(def_wrapper, err);
                    }
                });
                else {
                    self1.msg = msg;
                    self1.state = 1;
                    if (self1.chain.length > 0) schedule(notify, self1);
                }
            } catch (err) {
                reject.call(new MakeDefWrapper(self1), err);
            }
        }
        function reject(msg) {
            var self1 = this;
            // already triggered?
            if (self1.triggered) return;
            self1.triggered = true;
            // unwrap
            if (self1.def) self1 = self1.def;
            self1.msg = msg;
            self1.state = 2;
            if (self1.chain.length > 0) schedule(notify, self1);
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx = 0; idx < arr.length; idx++)(function IIFE(idx) {
                Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                    resolver(idx, msg);
                }, rejecter);
            })(idx);
        }
        function MakeDefWrapper(self1) {
            this.def = self1;
            this.triggered = false;
        }
        function MakeDef(self1) {
            this.promise = self1;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise1(executor) {
            if (typeof executor != "function") throw TypeError("Not a function");
            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
            // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                };
                // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) schedule(notify, def);
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve.call(def, msg);
                }, function publicReject(msg) {
                    reject.call(def, msg);
                });
            } catch (err) {
                reject.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise1, /*configurable=*/ false);
        // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise1.prototype = PromisePrototype;
        // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise1, "resolve", function Promise$resolve(msg) {
            var Constructor = this;
            // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                resolve(msg);
            });
        });
        builtInProp(Promise1, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                reject(msg);
            });
        });
        builtInProp(Promise1, "all", function Promise$all(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            if (arr.length === 0) return Constructor.resolve([]);
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) resolve(msgs);
                }, reject);
            });
        });
        builtInProp(Promise1, "race", function Promise$race(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise1;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) playerCallbacks[name] = [];
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) return true;
    // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) playerCallbacks[name].splice(index, 1);
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) return false;
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === "string") try {
        data = JSON.parse(data);
    } catch (error) {
        // If the message cannot be parsed, throw the error as a warning
        console.warn(error);
        return {};
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
    var message = {
        method: method
    };
    if (params !== undefined) message.value = params;
    // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === "error") {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === "function") {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {
        // empty
        }
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    "autopause",
    "autoplay",
    "background",
    "byline",
    "color",
    "colors",
    "controls",
    "dnt",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "playsinline",
    "portrait",
    "responsive",
    "speed",
    "texttrack",
    "title",
    "transparent",
    "url",
    "width"
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === "") params[param] = value === "" ? 1 : value;
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) throw new TypeError("An element must be provided");
    if (element.getAttribute("data-vimeo-initialized") !== null) return element.querySelector("iframe");
    var div = document.createElement("div");
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
        var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
        for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText);
                // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : "";
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error creating an embed: ".concat(error));
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute("data-vimeo-defer") !== null) return;
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) return;
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== "spacechange") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            if (iframes[i].contentWindow !== event.source) continue;
            // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = iframes[i].parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
            break;
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) return;
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i];
            // Initiate appendVideoMetadata if iframe is a Vimeo embed
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                var player = new Player(iframe);
                player.callMethod("appendVideoMetadata", window.location.href);
            }
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoCheckedUrlTimeParam) return;
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error getting video Id: ".concat(error));
    };
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        var _loop = function _loop() {
            var iframe = iframes[i];
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                var player = new Player(iframe);
                player.getVideoId().then(function(videoId) {
                    var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
                    if (matches && matches[1]) {
                        var sec = decodeURI(matches[1]);
                        player.setCurrentTime(sec);
                    }
                    return;
                }).catch(handleError);
            }
        };
        for(var i = 0; i < iframes.length; i++)_loop();
    };
    window.addEventListener("message", onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror"
            ],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Old WebKit
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError"
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered = function onFullScreenEntered() {
                    screenfull.off("fullscreenchange", onFullScreenEntered);
                    resolve();
                };
                screenfull.on("fullscreenchange", onFullScreenEntered);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered).catch(reject);
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit = function onFullScreenExit() {
                    screenfull.off("fullscreenchange", onFullScreenExit);
                    resolve();
                };
                screenfull.on("fullscreenchange", onFullScreenExit);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit).catch(reject);
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback);
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback);
        }
    };
    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull;
}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */ /** @typedef {import('./timing-object.types').TimingObject} TimingObject */ /** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */ /** @typedef {(msg: string) => any} Logger */ /** @typedef {import('timing-object.types').TConnectionState} TConnectionState */ /**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */ var defaultOptions = {
    role: "viewer",
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
};
/**
 * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
 *
 * Proposed spec: https://webtiming.github.io/timingobject/
 * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
 * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
 *
 * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
 *
 * There are 5 general responsibilities in TimingSrcConnector:
 *
 * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
 * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
 * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
 * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
 * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
 */ var TimingSrcConnector = /*#__PURE__*/ function(_EventTarget) {
    _inherits(TimingSrcConnector, _EventTarget);
    var _super = _createSuper(TimingSrcConnector);
    /**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */ function TimingSrcConnector(_player, timingObject) {
        var _this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var logger = arguments.length > 3 ? arguments[3] : undefined;
        _classCallCheck(this, TimingSrcConnector);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "logger", void 0);
        _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
        /**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */ _defineProperty(_assertThisInitialized(_this), "adjustSpeed", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(player, newAdjustment) {
                var newPlaybackRate;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            if (!(_this.speedAdjustment === newAdjustment)) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");
                        case 2:
                            _context.next = 4;
                            return player.getPlaybackRate();
                        case 4:
                            _context.t0 = _context.sent;
                            _context.t1 = _this.speedAdjustment;
                            _context.t2 = _context.t0 - _context.t1;
                            _context.t3 = newAdjustment;
                            newPlaybackRate = _context.t2 + _context.t3;
                            _this.log("New playbackRate:  ".concat(newPlaybackRate));
                            _context.next = 12;
                            return player.setPlaybackRate(newPlaybackRate);
                        case 12:
                            _this.speedAdjustment = newAdjustment;
                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        _this.logger = logger;
        _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));
        return _this;
    }
    _createClass(TimingSrcConnector, [
        {
            key: "disconnect",
            value: function disconnect() {
                this.dispatchEvent(new Event("disconnect"));
            }
        },
        {
            key: "init",
            value: function() {
                var _init = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(timingObject, player, options) {
                    var _this2 = this;
                    var playerUpdater, positionSync, timingObjectUpdater;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.waitForTOReadyState(timingObject, "open");
                            case 2:
                                if (!(options.role === "viewer")) {
                                    _context2.next = 10;
                                    break;
                                }
                                _context2.next = 5;
                                return this.updatePlayer(timingObject, player, options);
                            case 5:
                                playerUpdater = subscribe(timingObject, "change", function() {
                                    return _this2.updatePlayer(timingObject, player, options);
                                });
                                positionSync = this.maintainPlaybackPosition(timingObject, player, options);
                                this.addEventListener("disconnect", function() {
                                    positionSync.cancel();
                                    playerUpdater.cancel();
                                });
                                _context2.next = 14;
                                break;
                            case 10:
                                _context2.next = 12;
                                return this.updateTimingObject(timingObject, player);
                            case 12:
                                timingObjectUpdater = subscribe(player, [
                                    "seeked",
                                    "play",
                                    "pause",
                                    "ratechange"
                                ], function() {
                                    return _this2.updateTimingObject(timingObject, player);
                                }, "on", "off");
                                this.addEventListener("disconnect", function() {
                                    return timingObjectUpdater.cancel();
                                });
                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function init(_x3, _x4, _x5) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        },
        {
            key: "updateTimingObject",
            value: function() {
                var _updateTimingObject = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(timingObject, player) {
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.t0 = timingObject;
                                _context3.next = 3;
                                return player.getCurrentTime();
                            case 3:
                                _context3.t1 = _context3.sent;
                                _context3.next = 6;
                                return player.getPaused();
                            case 6:
                                if (!_context3.sent) {
                                    _context3.next = 10;
                                    break;
                                }
                                _context3.t2 = 0;
                                _context3.next = 13;
                                break;
                            case 10:
                                _context3.next = 12;
                                return player.getPlaybackRate();
                            case 12:
                                _context3.t2 = _context3.sent;
                            case 13:
                                _context3.t3 = _context3.t2;
                                _context3.t4 = {
                                    position: _context3.t1,
                                    velocity: _context3.t3
                                };
                                _context3.t0.update.call(_context3.t0, _context3.t4);
                            case 16:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3);
                }));
                function updateTimingObject(_x6, _x7) {
                    return _updateTimingObject.apply(this, arguments);
                }
                return updateTimingObject;
            }()
        },
        {
            key: "updatePlayer",
            value: function() {
                var _updatePlayer = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(timingObject, player, options) {
                    var _timingObject$query, position, velocity;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while(true)switch(_context5.prev = _context5.next){
                            case 0:
                                _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                                if (typeof position === "number") player.setCurrentTime(position);
                                if (!(typeof velocity === "number")) {
                                    _context5.next = 25;
                                    break;
                                }
                                if (!(velocity === 0)) {
                                    _context5.next = 11;
                                    break;
                                }
                                _context5.next = 6;
                                return player.getPaused();
                            case 6:
                                _context5.t0 = _context5.sent;
                                if (!(_context5.t0 === false)) {
                                    _context5.next = 9;
                                    break;
                                }
                                player.pause();
                            case 9:
                                _context5.next = 25;
                                break;
                            case 11:
                                if (!(velocity > 0)) {
                                    _context5.next = 25;
                                    break;
                                }
                                _context5.next = 14;
                                return player.getPaused();
                            case 14:
                                _context5.t1 = _context5.sent;
                                if (!(_context5.t1 === true)) {
                                    _context5.next = 19;
                                    break;
                                }
                                _context5.next = 18;
                                return player.play().catch(/*#__PURE__*/ function() {
                                    var _ref2 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(err) {
                                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                            while(true)switch(_context4.prev = _context4.next){
                                                case 0:
                                                    if (!(err.name === "NotAllowedError" && options.autoPlayMuted)) {
                                                        _context4.next = 5;
                                                        break;
                                                    }
                                                    _context4.next = 3;
                                                    return player.setMuted(true);
                                                case 3:
                                                    _context4.next = 5;
                                                    return player.play().catch(function(err2) {
                                                        return console.error("Couldn't play the video from TimingSrcConnector. Error:", err2);
                                                    });
                                                case 5:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }, _callee4);
                                    }));
                                    return function(_x11) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                            case 18:
                                this.updatePlayer(timingObject, player, options);
                            case 19:
                                _context5.next = 21;
                                return player.getPlaybackRate();
                            case 21:
                                _context5.t2 = _context5.sent;
                                _context5.t3 = velocity;
                                if (!(_context5.t2 !== _context5.t3)) {
                                    _context5.next = 25;
                                    break;
                                }
                                player.setPlaybackRate(velocity);
                            case 25:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this);
                }));
                function updatePlayer(_x8, _x9, _x10) {
                    return _updatePlayer.apply(this, arguments);
                }
                return updatePlayer;
            }()
        },
        {
            key: "maintainPlaybackPosition",
            value: function maintainPlaybackPosition(timingObject, player, options) {
                var _this3 = this;
                var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
                var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1000;
                var check = /*#__PURE__*/ function() {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                        var diff, diffAbs, min, max, adjustment;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while(true)switch(_context6.prev = _context6.next){
                                case 0:
                                    _context6.t0 = timingObject.query().velocity === 0;
                                    if (_context6.t0) {
                                        _context6.next = 6;
                                        break;
                                    }
                                    _context6.next = 4;
                                    return player.getPaused();
                                case 4:
                                    _context6.t1 = _context6.sent;
                                    _context6.t0 = _context6.t1 === true;
                                case 6:
                                    if (!_context6.t0) {
                                        _context6.next = 8;
                                        break;
                                    }
                                    return _context6.abrupt("return");
                                case 8:
                                    _context6.t2 = timingObject.query().position;
                                    _context6.next = 11;
                                    return player.getCurrentTime();
                                case 11:
                                    _context6.t3 = _context6.sent;
                                    diff = _context6.t2 - _context6.t3;
                                    diffAbs = Math.abs(diff);
                                    _this3.log("Drift: ".concat(diff));
                                    if (!(diffAbs > maxAllowedDrift)) {
                                        _context6.next = 22;
                                        break;
                                    }
                                    _context6.next = 18;
                                    return _this3.adjustSpeed(player, 0);
                                case 18:
                                    player.setCurrentTime(timingObject.query().position);
                                    _this3.log("Resync by currentTime");
                                    _context6.next = 29;
                                    break;
                                case 22:
                                    if (!(diffAbs > allowedDrift)) {
                                        _context6.next = 29;
                                        break;
                                    }
                                    min = diffAbs / maxTimeToCatchUp;
                                    max = maxRateAdjustment;
                                    adjustment = min < max ? (max - min) / 2 : max;
                                    _context6.next = 28;
                                    return _this3.adjustSpeed(player, adjustment * Math.sign(diff));
                                case 28:
                                    _this3.log("Resync by playbackRate");
                                case 29:
                                case "end":
                                    return _context6.stop();
                            }
                        }, _callee6);
                    }));
                    return function check() {
                        return _ref3.apply(this, arguments);
                    };
                }();
                var interval = setInterval(function() {
                    return check();
                }, syncInterval);
                return {
                    cancel: function cancel() {
                        return clearInterval(interval);
                    }
                };
            }
        },
        {
            key: "log",
            value: function log(msg) {
                var _this$logger;
                (_this$logger = this.logger) === null || _this$logger === void 0 || _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
            }
        },
        {
            key: "waitForTOReadyState",
            value: /**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */ function waitForTOReadyState(timingObject, state) {
                return new Promise(function(resolve) {
                    var check = function check() {
                        if (timingObject.readyState === state) resolve();
                        else timingObject.addEventListener("readystatechange", check, {
                            once: true
                        });
                    };
                    check();
                });
            }
        }
    ]);
    return TimingSrcConnector;
}(/*#__PURE__*/ _wrapNativeSuper(EventTarget));
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Player);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) console.warn("A jQuery object with multiple elements was passed, using the first element.");
            element = element[0];
        }
        // Find an element by ID
        if (typeof document !== "undefined" && typeof element === "string") element = document.getElementById(element);
        // Not an element!
        if (!isDomElement(element)) throw new TypeError("You must pass either a valid element or a valid id.");
        // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== "IFRAME") {
            var iframe = element.querySelector("iframe");
            if (iframe) element = iframe;
        }
        // iframe url is not a Vimeo url
        if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
        // If there is already a player object in the map, return that
        if (playerMap.has(element)) return playerMap.get(element);
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = "*";
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                if (_this.origin === "*") _this.origin = event.origin;
                var data = parseMessageData(event.data);
                var isError = data && data.event === "error";
                var isReadyError = isError && data.data && data.data.method === "ready";
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === "ready";
                var isPingResponse = data && data.method === "ping";
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute("data-ready", "true");
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener("message", _this._onMessage);
            if (_this.element.nodeName !== "IFRAME") {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element);
                    // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        });
        // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this);
        // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === "IFRAME") postMessage(this, "ping");
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) storeCallback(_this, "event:exitFullscreen", exitFullscreen);
                else removeCallback(_this, "event:exitFullscreen", exitFullscreen);
                // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
                });
            };
            screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */ _createClass(Player, [
        {
            key: "callMethod",
            value: function callMethod(name) {
                var _this2 = this;
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "get");
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "set");
                    if (value === undefined || value === null) throw new TypeError("There must be a value to set.");
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (!callback) throw new TypeError("You must pass a callback function.");
                if (typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) this.callMethod("addEventListener", eventName).catch(function() {
                // Ignore the error. There will be an error event fired that
                // will trigger the error callback if they are listening.
                });
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (callback && typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback);
                // If there are no callbacks left, remove the listener
                if (lastCallback) this.callMethod("removeEventListener", eventName).catch(function(e) {
                // Ignore the error. There will be an error event fired that
                // will trigger the error callback if they are listening.
                });
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod("loadVideo", options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error("Unknown player. Probably unloaded."));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod("removeCuePoint", id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language, kind) {
                if (!language) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod("disableTextTrack");
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod("pause");
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod("play");
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) return screenfull.request(this.element);
                return this.callMethod("requestFullscreen");
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) return screenfull.exit();
                return this.callMethod("exitFullscreen");
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                return this.get("fullscreen");
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod("requestPictureInPicture");
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod("exitPictureInPicture");
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get("pictureInPicture");
            }
        },
        {
            key: "remotePlaybackPrompt",
            value: function remotePlaybackPrompt() {
                return this.callMethod("remotePlaybackPrompt");
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod("unload");
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute("data-vimeo-initialized");
                    }
                    if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        else _this5.element.parentNode.removeChild(_this5.element);
                    }
                    // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
                        _this5.element.removeAttribute("data-vimeo-initialized");
                        var iframe = _this5.element.querySelector("iframe");
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            else iframe.parentNode.removeChild(iframe);
                        }
                    }
                    _this5._window.removeEventListener("message", _this5._onMessage);
                    if (screenfull.isEnabled) screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get("autopause");
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set("autopause", autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get("buffered");
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get("cameraProps");
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set("cameraProps", camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get("chapters");
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get("currentChapter");
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get("color");
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return npo_src.all([
                    this.get("colorOne"),
                    this.get("colorTwo"),
                    this.get("colorThree"),
                    this.get("colorFour")
                ]);
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set("color", color);
            }
        },
        {
            key: "setColors",
            value: function setColors(colors) {
                if (!Array.isArray(colors)) return new npo_src(function(resolve, reject) {
                    return reject(new TypeError("Argument must be an array."));
                });
                var nullPromise = new npo_src(function(resolve) {
                    return resolve(null);
                });
                var colorPromises = [
                    colors[0] ? this.set("colorOne", colors[0]) : nullPromise,
                    colors[1] ? this.set("colorTwo", colors[1]) : nullPromise,
                    colors[2] ? this.set("colorThree", colors[2]) : nullPromise,
                    colors[3] ? this.set("colorFour", colors[3]) : nullPromise
                ];
                return npo_src.all(colorPromises);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get("cuePoints");
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get("currentTime");
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set("currentTime", currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get("duration");
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get("ended");
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get("loop");
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set("loop", loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set("muted", muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get("muted");
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get("paused");
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get("playbackRate");
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set("playbackRate", playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get("played");
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get("qualities");
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get("quality");
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set("quality", quality);
            }
        },
        {
            key: "getRemotePlaybackAvailability",
            value: function getRemotePlaybackAvailability() {
                return this.get("remotePlaybackAvailability");
            }
        },
        {
            key: "getRemotePlaybackState",
            value: function getRemotePlaybackState() {
                return this.get("remotePlaybackState");
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get("seekable");
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get("seeking");
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get("textTracks");
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get("videoEmbedCode");
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get("videoId");
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get("videoTitle");
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get("videoWidth");
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get("videoHeight");
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get("videoUrl");
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get("volume");
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set("volume", volume);
            }
        },
        {
            key: "setTimingSrc",
            value: function() {
                var _setTimingSrc = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(timingObject, options) {
                    var _this6 = this;
                    var connector;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (timingObject) {
                                    _context.next = 2;
                                    break;
                                }
                                throw new TypeError("A Timing Object must be provided.");
                            case 2:
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                connector = new TimingSrcConnector(this, timingObject, options);
                                postMessage(this, "notifyTimingObjectConnect");
                                connector.addEventListener("disconnect", function() {
                                    return postMessage(_this6, "notifyTimingObjectDisconnect");
                                });
                                return _context.abrupt("return", connector);
                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function setTimingSrc(_x, _x2) {
                    return _setTimingSrc.apply(this, arguments);
                }
                return setTimingSrc;
            }()
        }
    ]);
    return Player;
}(); // Setup embed only if this is not a node environment
if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
}
exports.default = Player;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Fetch Data utility
 * @param {string || Request} url
 */ parcelHelpers.export(exports, "fetchData", ()=>fetchData);
/**
 * Fetch all vimeo vids with Promise.all
 * @param {Array} playlist - Array of objects that make upd
 * @returns {Promise} - Combined promises from api requestsn
 */ parcelHelpers.export(exports, "fetchAllVimeoVids", ()=>fetchAllVimeoVids);
/**
 * Create Document Fragment Utility
 * Creates a document fragment from string of
 * html dom nodes without page reflow
 * @param {string} htmlStr
 * @param {string} tag - html tag
 * @param {string} className - element class name
 */ parcelHelpers.export(exports, "createFrag", ()=>createFrag);
/**
 * Format Time Utility
 * Converts seconds to HH:MM:SS
 * @param {string | number}
 */ parcelHelpers.export(exports, "formatTime", ()=>formatTime);
/**
 * Has Element
 * Util to check if element exists
 * @param {HTML Element}
 * @return {Boolean}
 */ parcelHelpers.export(exports, "hasEl", ()=>hasEl);
var _isomorphicFetch = require("isomorphic-fetch");
var _isomorphicFetchDefault = parcelHelpers.interopDefault(_isomorphicFetch);
"use strict";
function fetchData(url) {
    return (0, _isomorphicFetchDefault.default)(url).then(checkError).then((json)=>{
        return json;
    }).catch((ex)=>console.log("failed", ex));
}
function fetchAllVimeoVids(playlist) {
    return Promise.all(playlist.map((request)=>{
        return (0, _isomorphicFetchDefault.default)(`https://vimeo.com/api/v2/video/${request.id}.json`).then((res)=>{
            if (res.ok) return res.json();
            else throw new Error("Status code error :" + res.status);
        }).catch((err)=>console.log(err));
    }));
}
/**
 * Error check for Fetch
 * @param {Object} res - fetch response
 * @returns
 */ function checkError(res) {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
}
function createFrag(htmlStr, tag, className) {
    let docFrag = document.createDocumentFragment();
    let fragDiv = document.createElement(tag);
    fragDiv.className += className;
    fragDiv.innerHTML = htmlStr;
    docFrag.appendChild(fragDiv);
    return fragDiv;
}
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    return [
        h,
        m > 9 ? m : h ? "0" + m : m || "0",
        s > 9 ? s : "0" + s
    ].filter(Boolean).join(":");
}
function hasEl(el) {
    if (document.body.contains(document.querySelector(el))) return true;
    return false;
}

},{"isomorphic-fetch":"fy50b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fy50b":[function(require,module,exports) {
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require("9c74275609015ba7");
module.exports = self.fetch.bind(self);

},{"9c74275609015ba7":"fBkAK"}],"fBkAK":[function(require,module,exports) {
/* eslint-disable no-prototype-builtins */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Headers", ()=>Headers);
parcelHelpers.export(exports, "Request", ()=>Request);
parcelHelpers.export(exports, "Response", ()=>Response);
parcelHelpers.export(exports, "DOMException", ()=>DOMException);
parcelHelpers.export(exports, "fetch", ()=>fetch);
var global = arguments[3];
var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
typeof global !== "undefined" && global || {};
var support = {
    searchParams: "URLSearchParams" in g,
    iterable: "Symbol" in g && "iterator" in Symbol,
    blob: "FileReader" in g && "Blob" in g && function() {
        try {
            new Blob();
            return true;
        } catch (e) {
            return false;
        }
    }(),
    formData: "FormData" in g,
    arrayBuffer: "ArrayBuffer" in g
};
function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
    var viewClasses = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
}
function normalizeName(name) {
    if (typeof name !== "string") name = String(name);
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") throw new TypeError('Invalid character in header field name: "' + name + '"');
    return name.toLowerCase();
}
function normalizeValue(value) {
    if (typeof value !== "string") value = String(value);
    return value;
}
// Build a destructive iterator for the value list
function iteratorFor(items) {
    var iterator = {
        next: function() {
            var value = items.shift();
            return {
                done: value === undefined,
                value: value
            };
        }
    };
    if (support.iterable) iterator[Symbol.iterator] = function() {
        return iterator;
    };
    return iterator;
}
function Headers(headers) {
    this.map = {};
    if (headers instanceof Headers) headers.forEach(function(value, name) {
        this.append(name, value);
    }, this);
    else if (Array.isArray(headers)) headers.forEach(function(header) {
        if (header.length != 2) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
        this.append(header[0], header[1]);
    }, this);
    else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
    }, this);
}
Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers.prototype["delete"] = function(name) {
    delete this.map[normalizeName(name)];
};
Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
};
Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name));
};
Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
};
Headers.prototype.forEach = function(callback, thisArg) {
    for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
};
Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push(name);
    });
    return iteratorFor(items);
};
Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
        items.push(value);
    });
    return iteratorFor(items);
};
Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
        items.push([
            name,
            value
        ]);
    });
    return iteratorFor(items);
};
if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
function consumed(body) {
    if (body._noBody) return;
    if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
    body.bodyUsed = true;
}
function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = function() {
            reject(reader.error);
        };
    });
}
function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
}
function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : "utf-8";
    reader.readAsText(blob, encoding);
    return promise;
}
function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);
    for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
    return chars.join("");
}
function bufferClone(buf) {
    if (buf.slice) return buf.slice(0);
    else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
    }
}
function Body() {
    this.bodyUsed = false;
    this._initBody = function(body) {
        /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */ // eslint-disable-next-line no-self-assign
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) {
            this._noBody = true;
            this._bodyText = "";
        } else if (typeof body === "string") this._bodyText = body;
        else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
        else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
        else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
        else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([
                this._bodyArrayBuffer
            ]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
        else this._bodyText = body = Object.prototype.toString.call(body);
        if (!this.headers.get("content-type")) {
            if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
            else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
    };
    if (support.blob) this.blob = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
            this._bodyArrayBuffer
        ]));
        else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        else return Promise.resolve(new Blob([
            this._bodyText
        ]));
    };
    this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            if (isConsumed) return isConsumed;
            else if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
            else return Promise.resolve(this._bodyArrayBuffer);
        } else if (support.blob) return this.blob().then(readBlobAsArrayBuffer);
        else throw new Error("could not read as ArrayBuffer");
    };
    this.text = function() {
        var rejected = consumed(this);
        if (rejected) return rejected;
        if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
        else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        else if (this._bodyFormData) throw new Error("could not read FormData body as text");
        else return Promise.resolve(this._bodyText);
    };
    if (support.formData) this.formData = function() {
        return this.text().then(decode);
    };
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
// HTTP methods whose capitalization should be normalized
var methods = [
    "CONNECT",
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
    "TRACE"
];
function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
    if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    options = options || {};
    var body = options.body;
    if (input instanceof Request) {
        if (input.bodyUsed) throw new TypeError("Already read");
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) this.headers = new Headers(input.headers);
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
        }
    } else this.url = String(input);
    this.credentials = options.credentials || this.credentials || "same-origin";
    if (options.headers || !this.headers) this.headers = new Headers(options.headers);
    this.method = normalizeMethod(options.method || this.method || "GET");
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || function() {
        if ("AbortController" in g) {
            var ctrl = new AbortController();
            return ctrl.signal;
        }
    }();
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(body);
    if (this.method === "GET" || this.method === "HEAD") {
        if (options.cache === "no-store" || options.cache === "no-cache") {
            // Search for a '_' parameter in the query string
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) // If it already exists then set the value with the current time
            this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            else {
                // Otherwise add a new '_' parameter to the end with the current time
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
        }
    }
}
Request.prototype.clone = function() {
    return new Request(this, {
        body: this._bodyInit
    });
};
function decode(body) {
    var form = new FormData();
    body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
    });
    return form;
}
function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders.split("\r").map(function(header) {
        return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
    }).forEach(function(line) {
        var parts = line.split(":");
        var key = parts.shift().trim();
        if (key) {
            var value = parts.join(":").trim();
            try {
                headers.append(key, value);
            } catch (error) {
                console.warn("Response " + error.message);
            }
        }
    });
    return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
    if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    if (!options) options = {};
    this.type = "default";
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? "" : "" + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || "";
    this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
    });
};
Response.error = function() {
    var response = new Response(null, {
        status: 200,
        statusText: ""
    });
    response.status = 0;
    response.type = "error";
    return response;
};
var redirectStatuses = [
    301,
    302,
    303,
    307,
    308
];
Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
    return new Response(null, {
        status: status,
        headers: {
            location: url
        }
    });
};
var DOMException = g.DOMException;
try {
    new DOMException();
} catch (err) {
    DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
}
function fetch(input, init) {
    return new Promise(function(resolve, reject) {
        var request = new Request(input, init);
        if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
        var xhr = new XMLHttpRequest();
        function abortXhr() {
            xhr.abort();
        }
        xhr.onload = function() {
            var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            // This check if specifically for when a user fetches a file locally from the file system
            // Only if the status is out of a normal range
            if (request.url.startsWith("file://") && (xhr.status < 200 || xhr.status > 599)) options.status = 200;
            else options.status = xhr.status;
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
                resolve(new Response(body, options));
            }, 0);
        };
        xhr.onerror = function() {
            setTimeout(function() {
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xhr.ontimeout = function() {
            setTimeout(function() {
                reject(new TypeError("Network request timed out"));
            }, 0);
        };
        xhr.onabort = function() {
            setTimeout(function() {
                reject(new DOMException("Aborted", "AbortError"));
            }, 0);
        };
        function fixUrl(url) {
            try {
                return url === "" && g.location.href ? g.location.href : url;
            } catch (e) {
                return url;
            }
        }
        xhr.open(request.method, fixUrl(request.url), true);
        if (request.credentials === "include") xhr.withCredentials = true;
        else if (request.credentials === "omit") xhr.withCredentials = false;
        if ("responseType" in xhr) {
            if (support.blob) xhr.responseType = "blob";
            else if (support.arrayBuffer) xhr.responseType = "arraybuffer";
        }
        if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
            var names = [];
            Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                names.push(normalizeName(name));
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
            request.headers.forEach(function(value, name) {
                if (names.indexOf(name) === -1) xhr.setRequestHeader(name, value);
            });
        } else request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
        });
        if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
                // DONE (success or failure)
                if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
            };
        }
        xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
    });
}
fetch.polyfill = true;
if (!g.fetch) {
    g.fetch = fetch;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BDkK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>playlistTmpl);
var _utils = require("./utils");
"use strict";
function playlistTmpl(data) {
    let timeDuration = (0, _utils.formatTime)(data.duration);
    return `
    <a class="plist-item__link" data-vimeo-id="${data.id}" tabindex="0">
      <figure class="plist-item__thumb">
        <div class="plist-item__thumb-color">
          <img class="plist-item__thumb-img" src="${data.thumbnail_large}"/>
          <svg class="plist-item__icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="50" height="50" viewBox="0 0 36 36">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
          </svg>
        </div>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${data.title}</span>
        <span class="plist-item__user">${data.user_name}</span>
        <span class="plist-item__time-dur">${timeDuration}</span>

      </div>
    </a>
  `;
}

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MwtK":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"288588748"},{"id":"293125541"},{"id":"328536852"},{"id":"281449879"},{"id":"341760931"},{"id":"316705014"},{"id":"218833458"},{"id":"343072157"},{"id":"343513016"},{"id":"354894903"},{"id":"229056408"},{"id":"373994913"},{"id":"310394931"},{"id":"342058177"},{"id":"77149266"},{"id":"330089817"},{"id":"294478296"},{"id":"373858773"},{"id":"246877776"},{"id":"262117047"},{"id":"312120351"}]');

},{}],"bijhv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>playlistTmpl);
var _src = require("../../../../src");
"use strict";
function playlistTmpl(data) {
    let timeDuration = (0, _src.formatTime)(data.duration);
    return `
    <a class="plist-item__link" data-vimeo-id="${data.id}" tabindex="0">
      <figure class="plist-item__thumb">
        <div class="plist-item__thumb-color">
          <img class="plist-item__thumb-img" src="${data.thumbnail_large}"/>
          <svg class="plist-item__icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="50" height="50" viewBox="0 0 36 36">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
          </svg>
        </div>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${data.title}</span>
        <span class="plist-item__user">${data.user_name}</span>
        <span class="plist-item__time-dur">${timeDuration}</span>
        <div class="equalizer">
          <span class="equalizer__item"></span>
          <span class="equalizer__item"></span>
          <span class="equalizer__item"></span>
        </div>
      </div>
    </a>
  `;
}

},{"../../../../src":"8lqZg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iXjm3","aKpwy"], "aKpwy", "parcelRequirea2ea")

//# sourceMappingURL=index.1c1065f5.js.map
