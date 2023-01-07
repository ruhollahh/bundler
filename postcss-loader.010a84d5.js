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
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"3FsDI"}],"iyddy":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d79c0091010a84d5";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bQpbj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _postcss = require("postcss");
var _postcssDefault = parcelHelpers.interopDefault(_postcss);
var _moduleSpecifier = require("../../../resolver/utils/module-specifier");
var _path = require("../../../utils/path");
var _index = require("./import-loader/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
async function resolveCSSFile(ctx, path, basePath) {
    const isDependency = _moduleSpecifier.isModuleSpecifier(path);
    if (isDependency) {
        const parts = _moduleSpecifier.extractModuleSpecifierParts(path);
        if (!parts.filepath.length) // First try to resolve the package.json, in case it has a style field
        try {
            const pkgJsonPath = await ctx.module.bundler.resolveAsync(_path.join(path, 'package.json'), basePath, []);
            const content = await ctx.module.bundler.fs.readFileAsync(pkgJsonPath);
            const parsedPkg = JSON.parse(content);
            if (parsedPkg.style) path = _path.join(path, parsedPkg.style);
        } catch (e) {
        /* Move to step 2 */ }
    }
    return ctx.module.bundler.resolveAsync(path, basePath, [
        '.css'
    ]);
}
exports.default = async function(ctx) {
    const dependencies = new Set();
    const plugins = [];
    const options = {
        to: ctx.module.filepath,
        from: ctx.module.filepath,
        map: false
    };
    // Explicitly give undefined if code is null, otherwise postcss crashes
    const result = await _postcssDefault.default([
        ...plugins,
        _indexDefault.default({
            resolve: (id, root)=>resolveCSSFile(ctx, id, root)
            ,
            load: (filename)=>{
                dependencies.add(filename);
                return ctx.module.bundler.fs.readFileAsync(filename);
            },
            plugins
        }), 
    ]).process(ctx.code, options);
    if (result.messages) {
        const messages = result.messages;
        await Promise.all(messages.map(async (m)=>{
            if (m.type === 'dependency') dependencies.add(m.file);
        }));
    }
    // TODO: Handle url(...) references
    const transpiledCode = result.css;
    return {
        code: transpiledCode,
        dependencies
    };
};

},{"postcss":"gauyy","../../../resolver/utils/module-specifier":"9vP6g","../../../utils/path":"7C40W","./import-loader/index":"aLg0J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gauyy":[function(require,module,exports) {
'use strict';
let CssSyntaxError = require('./css-syntax-error');
let Declaration = require('./declaration');
let LazyResult = require('./lazy-result');
let Container = require('./container');
let Processor = require('./processor');
let stringify = require('./stringify');
let fromJSON = require('./fromJSON');
let Document = require('./document');
let Warning = require('./warning');
let Comment = require('./comment');
let AtRule = require('./at-rule');
let Result = require('./result.js');
let Input = require('./input');
let parse = require('./parse');
let list = require('./list');
let Rule = require('./rule');
let Root = require('./root');
let Node = require('./node');
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults)
;
postcss.atRule = (defaults)=>new AtRule(defaults)
;
postcss.decl = (defaults)=>new Declaration(defaults)
;
postcss.rule = (defaults)=>new Rule(defaults)
;
postcss.root = (defaults)=>new Root(defaults)
;
postcss.document = (defaults)=>new Document(defaults)
;
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;

},{"./css-syntax-error":"5TKyW","./declaration":"2mU8a","./lazy-result":"580Su","./container":"1gj6C","./processor":"lU6wZ","./stringify":"a0MwE","./fromJSON":"iiNZS","./document":"dK3sP","./warning":"lw5j2","./comment":"5CBjv","./at-rule":"kbVAt","./result.js":"dmoqr","./input":"fb1UO","./parse":"ioa1B","./list":"hZo3l","./rule":"4SFJx","./root":"hsDFv","./node":"5azBO"}],"5TKyW":[function(require,module,exports) {
'use strict';
let pico = require('picocolors');
let terminalHighlight = require('./terminal-highlight');
class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin){
        super(message);
        this.name = 'CssSyntaxError';
        this.reason = message;
        if (file) this.file = file;
        if (source) this.source = source;
        if (plugin) this.plugin = plugin;
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            if (typeof line === 'number') {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) Error.captureStackTrace(this, CssSyntaxError);
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ': ' : '';
        this.message += this.file ? this.file : '<css input>';
        if (typeof this.line !== 'undefined') this.message += ':' + this.line + ':' + this.column;
        this.message += ': ' + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return '';
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        if (terminalHighlight) {
            if (color) css = terminalHighlight(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold , red , gray  } = pico.createColors(true);
            mark = (text)=>bold(red(text))
            ;
            aside = (text)=>gray(text)
            ;
        } else mark = aside = (str)=>str
        ;
        return lines.slice(start, end).map((line, index)=>{
            let number = start + 1 + index;
            let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
                return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
            }
            return ' ' + aside(gutter) + line;
        }).join('\n');
    }
    toString() {
        let code = this.showSourceCode();
        if (code) code = '\n\n' + code + '\n';
        return this.name + ': ' + this.message + code;
    }
}
module.exports = CssSyntaxError;
CssSyntaxError.default = CssSyntaxError;

},{"picocolors":"1298x","./terminal-highlight":"jhUEF"}],"1298x":[function(require,module,exports) {
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x
    };
};
module.exports = create();
module.exports.createColors = create;

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"2mU8a":[function(require,module,exports) {
'use strict';
let Node = require('./node');
class Declaration extends Node {
    constructor(defaults){
        if (defaults && typeof defaults.value !== 'undefined' && typeof defaults.value !== 'string') defaults = {
            ...defaults,
            value: String(defaults.value)
        };
        super(defaults);
        this.type = 'decl';
    }
    get variable() {
        return this.prop.startsWith('--') || this.prop[0] === '$';
    }
}
module.exports = Declaration;
Declaration.default = Declaration;

},{"./node":"5azBO"}],"5azBO":[function(require,module,exports) {
'use strict';
let { isClean , my  } = require('./symbols');
let CssSyntaxError = require('./css-syntax-error');
let Stringifier = require('./stringifier');
let stringify = require('./stringify');
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        if (i === 'proxyCache') continue;
        let value = obj[i];
        let type = typeof value;
        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') cloned[i] = value;
        else if (Array.isArray(value)) cloned[i] = value.map((j)=>cloneNode(j, cloned)
        );
        else {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }
    return cloned;
}
class Node {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for(let name in defaults)if (name === 'nodes') {
            this.nodes = [];
            for (let node of defaults[name])if (typeof node.clone === 'function') this.append(node.clone());
            else this.append(node);
        } else this[name] = defaults[name];
    }
    error(message, opts = {}) {
        if (this.source) {
            let { start , end  } = this.rangeBy(opts);
            return this.source.input.error(message, {
                line: start.line,
                column: start.column
            }, {
                line: end.line,
                column: end.column
            }, opts);
        }
        return new CssSyntaxError(message);
    }
    warn(result, text, opts) {
        let data = {
            node: this
        };
        for(let i in opts)data[i] = opts[i];
        return result.warn(text, data);
    }
    remove() {
        if (this.parent) this.parent.removeChild(this);
        this.parent = undefined;
        return this;
    }
    toString(stringifier = stringify) {
        if (stringifier.stringify) stringifier = stringifier.stringify;
        let result = '';
        stringifier(this, (i)=>{
            result += i;
        });
        return result;
    }
    assign(overrides = {}) {
        for(let name in overrides)this[name] = overrides[name];
        return this;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides)cloned[name] = overrides[name];
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes){
                if (node === this) foundSelf = true;
                else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node);
                    bookmark = node;
                } else this.parent.insertBefore(bookmark, node);
            }
            if (!foundSelf) this.remove();
        }
        return this;
    }
    next() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
    }
    prev() {
        if (!this.parent) return undefined;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    root() {
        let result = this;
        while(result.parent && result.parent.type !== 'document')result = result.parent;
        return result;
    }
    raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
            if (name === 'parent' || name === 'proxyCache') continue;
            let value = this[name];
            if (Array.isArray(value)) fixed[name] = value.map((i)=>{
                if (typeof i === 'object' && i.toJSON) return i.toJSON(null, inputs);
                else return i;
            });
            else if (typeof value === 'object' && value.toJSON) fixed[name] = value.toJSON(null, inputs);
            else if (name === 'source') {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    inputId,
                    start: value.start,
                    end: value.end
                };
            } else fixed[name] = value;
        }
        if (emitInputs) fixed.inputs = [
            ...inputs.keys()
        ].map((input)=>input.toJSON()
        );
        return fixed;
    }
    positionInside(index) {
        let string = this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i = 0; i < index; i++)if (string[i] === '\n') {
            column = 1;
            line += 1;
        } else column += 1;
        return {
            line,
            column
        };
    }
    positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) pos = this.positionInside(opts.index);
        else if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) pos = this.positionInside(index);
        }
        return pos;
    }
    rangeBy(opts) {
        let start = {
            line: this.source.start.line,
            column: this.source.start.column
        };
        let end = this.source.end ? {
            line: this.source.end.line,
            column: this.source.end.column + 1
        } : {
            line: start.line,
            column: start.column + 1
        };
        if (opts.word) {
            let index = this.toString().indexOf(opts.word);
            if (index !== -1) {
                start = this.positionInside(index);
                end = this.positionInside(index + opts.word.length);
            }
        } else {
            if (opts.start) start = {
                line: opts.start.line,
                column: opts.start.column
            };
            else if (opts.index) start = this.positionInside(opts.index);
            if (opts.end) end = {
                line: opts.end.line,
                column: opts.end.column
            };
            else if (opts.endIndex) end = this.positionInside(opts.endIndex);
            else if (opts.index) end = this.positionInside(opts.index + 1);
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
            line: start.line,
            column: start.column + 1
        };
        return {
            start,
            end
        };
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'prop' || prop === 'value' || prop === 'name' || prop === 'params' || prop === 'important' || /* c8 ignore next */ prop === 'text') node.markDirty();
                return true;
            },
            get (node, prop) {
                if (prop === 'proxyOf') return node;
                else if (prop === 'root') return ()=>node.root().toProxy()
                ;
                else return node[prop];
            }
        };
    }
    toProxy() {
        if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
        return this.proxyCache;
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
    }
    markDirty() {
        if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while(next = next.parent)next[isClean] = false;
        }
    }
    get proxyOf() {
        return this;
    }
}
module.exports = Node;
Node.default = Node;

},{"./symbols":"9Ej2B","./css-syntax-error":"5TKyW","./stringifier":"ebmGP","./stringify":"a0MwE"}],"9Ej2B":[function(require,module,exports) {
'use strict';
module.exports.isClean = Symbol('isClean');
module.exports.my = Symbol('my');

},{}],"ebmGP":[function(require,module,exports) {
'use strict';
const DEFAULT_RAW = {
    colon: ': ',
    indent: '    ',
    beforeDecl: '\n',
    beforeRule: '\n',
    beforeOpen: ' ',
    beforeClose: '\n',
    beforeComment: '\n',
    after: '\n',
    emptyBody: '',
    commentLeft: ' ',
    commentRight: ' ',
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    stringify(node, semicolon) {
        /* c8 ignore start */ if (!this[node.type]) throw new Error('Unknown AST node type ' + node.type + '. ' + 'Maybe you need to change PostCSS stringifier.');
        /* c8 ignore stop */ this[node.type](node, semicolon);
    }
    document(node) {
        this.body(node);
    }
    root(node) {
        this.body(node);
        if (node.raws.after) this.builder(node.raws.after);
    }
    comment(node) {
        let left = this.raw(node, 'left', 'commentLeft');
        let right = this.raw(node, 'right', 'commentRight');
        this.builder('/*' + left + node.text + right + '*/', node);
    }
    decl(node, semicolon) {
        let between = this.raw(node, 'between', 'colon');
        let string = node.prop + between + this.rawValue(node, 'value');
        if (node.important) string += node.raws.important || ' !important';
        if (semicolon) string += ';';
        this.builder(string, node);
    }
    rule(node) {
        this.block(node, this.rawValue(node, 'selector'));
        if (node.raws.ownSemicolon) this.builder(node.raws.ownSemicolon, node, 'end');
    }
    atrule(node, semicolon) {
        let name = '@' + node.name;
        let params = node.params ? this.rawValue(node, 'params') : '';
        if (typeof node.raws.afterName !== 'undefined') name += node.raws.afterName;
        else if (params) name += ' ';
        if (node.nodes) this.block(node, name + params);
        else {
            let end = (node.raws.between || '') + (semicolon ? ';' : '');
            this.builder(name + params + end, node);
        }
    }
    body(node) {
        let last = node.nodes.length - 1;
        while(last > 0){
            if (node.nodes[last].type !== 'comment') break;
            last -= 1;
        }
        let semicolon = this.raw(node, 'semicolon');
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            let before = this.raw(child, 'before');
            if (before) this.builder(before);
            this.stringify(child, last !== i || semicolon);
        }
    }
    block(node, start) {
        let between = this.raw(node, 'between', 'beforeOpen');
        this.builder(start + between + '{', node, 'start');
        let after;
        if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, 'after');
        } else after = this.raw(node, 'after', 'emptyBody');
        if (after) this.builder(after);
        this.builder('}', node, 'end');
    }
    raw(node, own, detect) {
        let value;
        if (!detect) detect = own;
        // Already had
        if (own) {
            value = node.raws[own];
            if (typeof value !== 'undefined') return value;
        }
        let parent = node.parent;
        if (detect === 'before') {
            // Hack for first rule in CSS
            if (!parent || parent.type === 'root' && parent.first === node) return '';
            // `root` nodes in `document` should use only their own raws
            if (parent && parent.type === 'document') return '';
        }
        // Floating child without parent
        if (!parent) return DEFAULT_RAW[detect];
        // Detect style by other nodes
        let root = node.root();
        if (!root.rawCache) root.rawCache = {};
        if (typeof root.rawCache[detect] !== 'undefined') return root.rawCache[detect];
        if (detect === 'before' || detect === 'after') return this.beforeAfter(node, detect);
        else {
            let method = 'raw' + capitalize(detect);
            if (this[method]) value = this[method](root, node);
            else root.walk((i)=>{
                value = i.raws[own];
                if (typeof value !== 'undefined') return false;
            });
        }
        if (typeof value === 'undefined') value = DEFAULT_RAW[detect];
        root.rawCache[detect] = value;
        return value;
    }
    rawSemicolon(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                value = i.raws.semicolon;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawEmptyBody(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length === 0) {
                value = i.raws.after;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawIndent(root) {
        if (root.raws.indent) return root.raws.indent;
        let value;
        root.walk((i)=>{
            let p = i.parent;
            if (p && p !== root && p.parent && p.parent === root) {
                if (typeof i.raws.before !== 'undefined') {
                    let parts = i.raws.before.split('\n');
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, '');
                    return false;
                }
            }
        });
        return value;
    }
    rawBeforeComment(root, node) {
        let value;
        root.walkComments((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                return false;
            }
        });
        if (typeof value === 'undefined') value = this.raw(node, null, 'beforeDecl');
        else if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeDecl(root, node) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.before !== 'undefined') {
                value = i.raws.before;
                if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                return false;
            }
        });
        if (typeof value === 'undefined') value = this.raw(node, null, 'beforeRule');
        else if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeRule(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && (i.parent !== root || root.first !== i)) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeClose(root) {
        let value;
        root.walk((i)=>{
            if (i.nodes && i.nodes.length > 0) {
                if (typeof i.raws.after !== 'undefined') {
                    value = i.raws.after;
                    if (value.includes('\n')) value = value.replace(/[^\n]+$/, '');
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, '');
        return value;
    }
    rawBeforeOpen(root) {
        let value;
        root.walk((i)=>{
            if (i.type !== 'decl') {
                value = i.raws.between;
                if (typeof value !== 'undefined') return false;
            }
        });
        return value;
    }
    rawColon(root) {
        let value;
        root.walkDecls((i)=>{
            if (typeof i.raws.between !== 'undefined') {
                value = i.raws.between.replace(/[^\s:]/g, '');
                return false;
            }
        });
        return value;
    }
    beforeAfter(node, detect) {
        let value;
        if (node.type === 'decl') value = this.raw(node, null, 'beforeDecl');
        else if (node.type === 'comment') value = this.raw(node, null, 'beforeComment');
        else if (detect === 'before') value = this.raw(node, null, 'beforeRule');
        else value = this.raw(node, null, 'beforeClose');
        let buf = node.parent;
        let depth = 0;
        while(buf && buf.type !== 'root'){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes('\n')) {
            let indent = this.raw(node, null, 'indent');
            if (indent.length) for(let step = 0; step < depth; step++)value += indent;
        }
        return value;
    }
    rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) return raw.raw;
        return value;
    }
}
module.exports = Stringifier;
Stringifier.default = Stringifier;

},{}],"a0MwE":[function(require,module,exports) {
'use strict';
let Stringifier = require('./stringifier');
function stringify(node, builder) {
    let str = new Stringifier(builder);
    str.stringify(node);
}
module.exports = stringify;
stringify.default = stringify;

},{"./stringifier":"ebmGP"}],"580Su":[function(require,module,exports) {
'use strict';
let { isClean , my  } = require('./symbols');
let MapGenerator = require('./map-generator');
let stringify = require('./stringify');
let Container = require('./container');
let Document = require('./document');
let warnOnce = require('./warn-once');
let Result = require('./result');
let parse = require('./parse');
let Root = require('./root');
const TYPE_TO_CLASS_NAME = {
    document: 'Document',
    root: 'Root',
    atrule: 'AtRule',
    rule: 'Rule',
    decl: 'Declaration',
    comment: 'Comment'
};
const PLUGIN_PROPS = {
    postcssPlugin: true,
    prepare: true,
    Once: true,
    Document: true,
    Root: true,
    Declaration: true,
    Rule: true,
    AtRule: true,
    Comment: true,
    DeclarationExit: true,
    RuleExit: true,
    AtRuleExit: true,
    CommentExit: true,
    RootExit: true,
    DocumentExit: true,
    OnceExit: true
};
const NOT_VISITORS = {
    postcssPlugin: true,
    prepare: true,
    Once: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
}
function getEvents(node) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node.type];
    if (node.type === 'decl') key = node.prop.toLowerCase();
    else if (node.type === 'atrule') key = node.name.toLowerCase();
    if (key && node.append) return [
        type,
        type + '-' + key,
        CHILDREN,
        type + 'Exit',
        type + 'Exit-' + key
    ];
    else if (key) return [
        type,
        type + '-' + key,
        type + 'Exit',
        type + 'Exit-' + key
    ];
    else if (node.append) return [
        type,
        CHILDREN,
        type + 'Exit'
    ];
    else return [
        type,
        type + 'Exit'
    ];
}
function toStack(node) {
    let events;
    if (node.type === 'document') events = [
        'Document',
        CHILDREN,
        'DocumentExit'
    ];
    else if (node.type === 'root') events = [
        'Root',
        CHILDREN,
        'RootExit'
    ];
    else events = getEvents(node);
    return {
        node,
        events,
        eventIndex: 0,
        visitors: [],
        visitorIndex: 0,
        iterator: 0
    };
}
function cleanMarks(node) {
    node[isClean] = false;
    if (node.nodes) node.nodes.forEach((i)=>cleanMarks(i)
    );
    return node;
}
let postcss = {};
class LazyResult {
    constructor(processor, css, opts){
        this.stringified = false;
        this.processed = false;
        let root;
        if (typeof css === 'object' && css !== null && (css.type === 'root' || css.type === 'document')) root = cleanMarks(css);
        else if (css instanceof LazyResult || css instanceof Result) {
            root = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser = parse;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;
            try {
                root = parser(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root && !root[my]) /* c8 ignore next 2 */ Container.rebuild(root);
        }
        this.result = new Result(processor, root, opts);
        this.helpers = {
            ...postcss,
            result: this.result,
            postcss
        };
        this.plugins = this.processor.plugins.map((plugin)=>{
            if (typeof plugin === 'object' && plugin.prepare) return {
                ...plugin,
                ...plugin.prepare(this.result)
            };
            else return plugin;
        });
    }
    get [Symbol.toStringTag]() {
        return 'LazyResult';
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.stringify().css;
    }
    get content() {
        return this.stringify().content;
    }
    get map() {
        return this.stringify().map;
    }
    get root() {
        return this.sync().root;
    }
    get messages() {
        return this.sync().messages;
    }
    warnings() {
        return this.sync().warnings();
    }
    toString() {
        return this.css;
    }
    then(onFulfilled, onRejected) {
        if (!('from' in this.opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) this.processing = this.runAsync();
        return this.processing;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) throw this.getAsyncError();
        for (let plugin of this.plugins){
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) throw this.getAsyncError();
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                this.walkSync(root);
            }
            if (this.listeners.OnceExit) {
                if (root.type === 'document') for (let subRoot of root.nodes)this.visitSync(this.listeners.OnceExit, subRoot);
                else this.visitSync(this.listeners.OnceExit, root);
            }
        }
        return this.result;
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events){
            if (event === CHILDREN) {
                if (node.nodes) node.each((child)=>{
                    if (!child[isClean]) this.walkSync(child);
                });
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node.toProxy())) return;
                }
            }
        }
    }
    visitSync(visitors, node) {
        for (let [plugin, visitor] of visitors){
            this.result.lastPlugin = plugin;
            let promise;
            try {
                promise = visitor(node, this.helpers);
            } catch (e) {
                throw this.handleError(e, node.proxyOf);
            }
            if (node.type !== 'root' && node.type !== 'document' && !node.parent) return true;
            if (isPromise(promise)) throw this.getAsyncError();
        }
    }
    runOnRoot(plugin) {
        this.result.lastPlugin = plugin;
        try {
            if (typeof plugin === 'object' && plugin.Once) {
                if (this.result.root.type === 'document') {
                    let roots = this.result.root.nodes.map((root)=>plugin.Once(root, this.helpers)
                    );
                    if (isPromise(roots[0])) return Promise.all(roots);
                    return roots;
                }
                return plugin.Once(this.result.root, this.helpers);
            } else if (typeof plugin === 'function') return plugin(this.result.root, this.result);
        } catch (error) {
            throw this.handleError(error);
        }
    }
    getAsyncError() {
        throw new Error('Use process(css).then(cb) to work with async plugins');
    }
    handleError(error, node) {
        let plugin = this.result.lastPlugin;
        try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === 'CssSyntaxError' && !error.plugin) {
                error.plugin = plugin.postcssPlugin;
                error.setMessage();
            } else if (plugin.postcssVersion) {
                let pluginName = plugin.postcssPlugin;
                let pluginVer = plugin.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a = pluginVer.split('.');
                let b = runtimeVer.split('.');
                if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) // eslint-disable-next-line no-console
                console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ', but ' + pluginName + ' uses ' + pluginVer + '. Perhaps this is the source of the error below.');
            }
        } catch (err) {
            /* c8 ignore next 3 */ // eslint-disable-next-line no-console
            if (console && console.error) console.error(err);
        }
        return error;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i = 0; i < this.plugins.length; i++){
            let plugin = this.plugins[i];
            let promise = this.runOnRoot(plugin);
            if (isPromise(promise)) try {
                await promise;
            } catch (error) {
                throw this.handleError(error);
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root = this.result.root;
            while(!root[isClean]){
                root[isClean] = true;
                let stack = [
                    toStack(root)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) try {
                        await promise;
                    } catch (e) {
                        let node = stack[stack.length - 1].node;
                        throw this.handleError(e, node);
                    }
                }
            }
            if (this.listeners.OnceExit) for (let [plugin, visitor] of this.listeners.OnceExit){
                this.result.lastPlugin = plugin;
                try {
                    if (root.type === 'document') {
                        let roots = root.nodes.map((subRoot)=>visitor(subRoot, this.helpers)
                        );
                        await Promise.all(roots);
                    } else await visitor(root, this.helpers);
                } catch (e) {
                    throw this.handleError(e);
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin,
                cb
            ]);
        };
        for (let plugin1 of this.plugins){
            if (typeof plugin1 === 'object') for(let event in plugin1){
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error(`Unknown event ${event} in ${plugin1.postcssPlugin}. ` + `Try to update PostCSS (${this.processor.version} now).`);
                if (!NOT_VISITORS[event]) {
                    if (typeof plugin1[event] === 'object') {
                        for(let filter in plugin1[event])if (filter === '*') add(plugin1, event, plugin1[event][filter]);
                        else add(plugin1, event + '-' + filter.toLowerCase(), plugin1[event][filter]);
                    } else if (typeof plugin1[event] === 'function') add(plugin1, event, plugin1[event]);
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node , visitors  } = visit;
        if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
                visit.visitors = [];
                visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin;
            try {
                return visitor(node.toProxy(), this.helpers);
            } catch (e) {
                throw this.handleError(e, node);
            }
        }
        if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while(child = node.nodes[node.indexes[iterator]]){
                node.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
        }
        let events = visit.events;
        while(visit.eventIndex < events.length){
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
                if (node.nodes && node.nodes.length) {
                    node[isClean] = true;
                    visit.iterator = node.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
}
LazyResult.registerPostcss = (dependant)=>{
    postcss = dependant;
};
module.exports = LazyResult;
LazyResult.default = LazyResult;
Root.registerLazyResult(LazyResult);
Document.registerLazyResult(LazyResult);

},{"./symbols":"9Ej2B","./map-generator":"ghfT0","./stringify":"a0MwE","./container":"1gj6C","./document":"dK3sP","./warn-once":"dpzGz","./result":"dmoqr","./parse":"ioa1B","./root":"hsDFv"}],"ghfT0":[function(require,module,exports) {
'use strict';
var Buffer = require("buffer").Buffer;
let { SourceMapConsumer , SourceMapGenerator  } = require('source-map-js');
let { dirname , resolve , relative , sep  } = require('path');
let { pathToFileURL  } = require('url');
let Input = require('./input');
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
class MapGenerator {
    constructor(stringify, root, opts, cssString){
        this.stringify = stringify;
        this.mapOpts = opts.map || {};
        this.root = root;
        this.opts = opts;
        this.css = cssString;
    }
    isMap() {
        if (typeof this.opts.map !== 'undefined') return !!this.opts.map;
        return this.previous().length > 0;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) this.root.walk((node)=>{
                if (node.source && node.source.input.map) {
                    let map = node.source.input.map;
                    if (!this.previousMaps.includes(map)) this.previousMaps.push(map);
                }
            });
            else {
                let input = new Input(this.css, this.opts);
                if (input.map) this.previousMaps.push(input.map);
            }
        }
        return this.previousMaps;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== 'undefined') return this.mapOpts.inline;
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== 'undefined' && annotation !== true) return false;
        if (this.previous().length) return this.previous().some((i)=>i.inline
        );
        return true;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== 'undefined') return this.mapOpts.sourcesContent;
        if (this.previous().length) return this.previous().some((i)=>i.withContent()
        );
        return true;
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node;
            for(let i = this.root.nodes.length - 1; i >= 0; i--){
                node = this.root.nodes[i];
                if (node.type !== 'comment') continue;
                if (node.text.indexOf('# sourceMappingURL=') === 0) this.root.removeChild(i);
            }
        } else if (this.css) this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, '');
    }
    setSourcesContent() {
        let already = {};
        if (this.root) this.root.walk((node)=>{
            if (node.source) {
                let from = node.source.input.from;
                if (from && !already[from]) {
                    already[from] = true;
                    this.map.setSourceContent(this.toUrl(this.path(from)), node.source.input.css);
                }
            }
        });
        else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>';
            this.map.setSourceContent(from, this.css);
        }
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) map.sourcesContent = map.sourcesContent.map(()=>null
                );
            } else map = prev.consumer();
            this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
        }
    }
    isAnnotation() {
        if (this.isInline()) return true;
        if (typeof this.mapOpts.annotation !== 'undefined') return this.mapOpts.annotation;
        if (this.previous().length) return this.previous().some((i)=>i.annotation
        );
        return true;
    }
    toBase64(str) {
        if (Buffer) return Buffer.from(str).toString('base64');
        else return window.btoa(unescape(encodeURIComponent(str)));
    }
    addAnnotation() {
        let content;
        if (this.isInline()) content = 'data:application/json;base64,' + this.toBase64(this.map.toString());
        else if (typeof this.mapOpts.annotation === 'string') content = this.mapOpts.annotation;
        else if (typeof this.mapOpts.annotation === 'function') content = this.mapOpts.annotation(this.opts.to, this.root);
        else content = this.outputFile() + '.map';
        let eol = '\n';
        if (this.css.includes('\r\n')) eol = '\r\n';
        this.css += eol + '/*# sourceMappingURL=' + content + ' */';
    }
    outputFile() {
        if (this.opts.to) return this.path(this.opts.to);
        else if (this.opts.from) return this.path(this.opts.from);
        else return 'to.css';
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev);
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile()
            });
            this.map.addMapping({
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : '<no source>',
                generated: {
                    line: 1,
                    column: 0
                },
                original: {
                    line: 1,
                    column: 0
                }
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) return [
            this.css
        ];
        else return [
            this.css,
            this.map
        ];
    }
    path(file) {
        if (file.indexOf('<') === 0) return file;
        if (/^\w+:\/\//.test(file)) return file;
        if (this.mapOpts.absolute) return file;
        let from = this.opts.to ? dirname(this.opts.to) : '.';
        if (typeof this.mapOpts.annotation === 'string') from = dirname(resolve(from, this.mapOpts.annotation));
        file = relative(from, file);
        return file;
    }
    toUrl(path) {
        if (sep === '\\') path = path.replace(/\\/g, '/');
        return encodeURI(path).replace(/[#?]/g, encodeURIComponent);
    }
    sourcePath(node) {
        if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
        else if (this.mapOpts.absolute) {
            if (pathToFileURL) return pathToFileURL(node.source.input.from).toString();
            else throw new Error('`map.absolute` option is not available in this PostCSS build');
        } else return this.toUrl(this.path(node.source.input.from));
    }
    generateString() {
        this.css = '';
        this.map = new SourceMapGenerator({
            file: this.outputFile()
        });
        let line = 1;
        let column = 1;
        let noSource = '<no source>';
        let mapping = {
            source: '',
            generated: {
                line: 0,
                column: 0
            },
            original: {
                line: 0,
                column: 0
            }
        };
        let lines, last;
        this.stringify(this.root, (str, node, type)=>{
            this.css += str;
            if (node && type !== 'end') {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node.source && node.source.start) {
                    mapping.source = this.sourcePath(node);
                    mapping.original.line = node.source.start.line;
                    mapping.original.column = node.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf('\n');
                column = str.length - last;
            } else column += str.length;
            if (node && type !== 'start') {
                let p = node.parent || {
                    raws: {}
                };
                if (node.type !== 'decl' || node !== p.last || p.raws.semicolon) {
                    if (node.source && node.source.end) {
                        mapping.source = this.sourcePath(node);
                        mapping.original.line = node.source.end.line;
                        mapping.original.column = node.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
        else {
            let result = '';
            this.stringify(this.root, (i)=>{
                result += i;
            });
            return [
                result
            ];
        }
    }
}
module.exports = MapGenerator;

},{"buffer":"fCgem","source-map-js":"jhUEF","path":"jhUEF","url":"jhUEF","./input":"fb1UO"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
const base64 = require('base64-js');
const ieee754 = require('ieee754');
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = '';
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    let loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = '';
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = '';
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = '';
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, 'offset');
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, 'message', {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === 'bigint') {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = '';
    let i = val.length;
    const start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== 'number') throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = '0123456789abcdef';
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}],"eIiSV":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"fb1UO":[function(require,module,exports) {
'use strict';
let { SourceMapConsumer , SourceMapGenerator  } = require('source-map-js');
let { fileURLToPath , pathToFileURL  } = require('url');
let { resolve , isAbsolute  } = require('path');
let { nanoid  } = require('nanoid/non-secure');
let terminalHighlight = require('./terminal-highlight');
let CssSyntaxError = require('./css-syntax-error');
let PreviousMap = require('./previous-map');
let fromOffsetCache = Symbol('fromOffsetCache');
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(resolve && isAbsolute);
class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === 'undefined' || typeof css === 'object' && !css.toString) throw new Error(`PostCSS received ${css} instead of CSS string`);
        this.css = css.toString();
        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else this.hasBOM = false;
        if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
            else this.file = resolve(opts.from);
        }
        if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) this.id = '<input css ' + nanoid(6) + '>';
        if (this.map) this.map.file = this.from;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split('\n');
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i = 0, l = lines.length; i < l; i++){
                lineToIndex[i] = prevIndex;
                prevIndex += lines[i].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else lineToIndex = this[fromOffsetCache];
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) min = lineToIndex.length - 1;
        else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) max = mid - 1;
                else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
                else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            line: min + 1,
            col: offset - lineToIndex[min] + 1
        };
    }
    error(message, line, column, opts = {}) {
        let result, endLine, endColumn;
        if (line && typeof line === 'object') {
            let start = line;
            let end = column;
            if (typeof line.offset === 'number') {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === 'number') {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) result = new CssSyntaxError(message, origin.endLine === undefined ? origin.line : {
            line: origin.line,
            column: origin.column
        }, origin.endLine === undefined ? origin.column : {
            line: origin.endLine,
            column: origin.endColumn
        }, origin.source, origin.file, opts.plugin);
        else result = new CssSyntaxError(message, endLine === undefined ? line : {
            line,
            column
        }, endLine === undefined ? column : {
            line: endLine,
            column: endColumn
        }, this.css, this.file, opts.plugin);
        result.input = {
            line,
            column,
            endLine,
            endColumn,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL) result.input.url = pathToFileURL(this.file).toString();
            result.input.file = this.file;
        }
        return result;
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            line,
            column
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === 'number') to = consumer.originalPositionFor({
            line: endLine,
            column: endColumn
        });
        let fromUrl;
        if (isAbsolute(from.source)) fromUrl = pathToFileURL(from.source);
        else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        let result = {
            url: fromUrl.toString(),
            line: from.line,
            column: from.column,
            endLine: to && to.line,
            endColumn: to && to.column
        };
        if (fromUrl.protocol === 'file:') {
            if (fileURLToPath) result.file = fileURLToPath(fromUrl);
            else /* c8 ignore next 2 */ throw new Error(`file: protocol is not available in this PostCSS build`);
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result.source = source;
        return result;
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) return file;
        return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file);
    }
    get from() {
        return this.file || this.id;
    }
    toJSON() {
        let json = {};
        for (let name of [
            'hasBOM',
            'css',
            'file',
            'id'
        ])if (this[name] != null) json[name] = this[name];
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) json.map.consumerCache = undefined;
        }
        return json;
    }
}
module.exports = Input;
Input.default = Input;
if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input);

},{"source-map-js":"jhUEF","url":"jhUEF","path":"jhUEF","nanoid/non-secure":"fO50M","./terminal-highlight":"jhUEF","./css-syntax-error":"5TKyW","./previous-map":"cmiCo"}],"fO50M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid
);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet
);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        let i = size;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    let i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmiCo":[function(require,module,exports) {
'use strict';
var Buffer = require("buffer").Buffer;
let { SourceMapConsumer , SourceMapGenerator  } = require('source-map-js');
let { existsSync , readFileSync  } = require('fs');
let { dirname , join  } = require('path');
function fromBase64(str) {
    if (Buffer) return Buffer.from(str, 'base64').toString();
    else /* c8 ignore next 2 */ return window.atob(str);
}
class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, 'data:');
        let prev = opts.map ? opts.map.prev : undefined;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) this.mapFile = opts.from;
        if (this.mapFile) this.root = dirname(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) this.consumerCache = new SourceMapConsumer(this.text);
        return this.consumerCache;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim();
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        // sourceMappingURLs from comments, strings, etc.
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf('*/', start);
        if (start > -1 && end > -1) // Locate the last sourceMappingURL to avoid pickin
        this.annotation = this.getAnnotationURL(css.substring(start, end));
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        if (baseCharsetUri.test(text) || baseUri.test(text)) return fromBase64(text.substr(RegExp.lastMatch.length));
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error('Unsupported source map encoding ' + encoding);
    }
    loadFile(path) {
        this.root = dirname(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, 'utf-8').toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === 'string') return prev;
            else if (typeof prev === 'function') {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) throw new Error('Unable to load previous source map: ' + prevPath.toString());
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer) return SourceMapGenerator.fromSourceMap(prev).toString();
            else if (prev instanceof SourceMapGenerator) return prev.toString();
            else if (this.isMap(prev)) return JSON.stringify(prev);
            else throw new Error('Unsupported previous source map format: ' + prev.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname(file), map);
            return this.loadFile(map);
        }
    }
    isMap(map) {
        if (typeof map !== 'object') return false;
        return typeof map.mappings === 'string' || typeof map._mappings === 'string' || Array.isArray(map.sections);
    }
}
module.exports = PreviousMap;
PreviousMap.default = PreviousMap;

},{"buffer":"fCgem","source-map-js":"jhUEF","fs":"jhUEF","path":"jhUEF"}],"1gj6C":[function(require,module,exports) {
'use strict';
let { isClean , my  } = require('./symbols');
let Declaration = require('./declaration');
let Comment = require('./comment');
let Node = require('./node');
let parse, Rule, AtRule;
function cleanSource(nodes) {
    return nodes.map((i)=>{
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}
function markDirtyUp(node) {
    node[isClean] = false;
    if (node.proxyOf.nodes) for (let i of node.proxyOf.nodes)markDirtyUp(i);
}
class Container extends Node {
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    each(callback) {
        if (!this.proxyOf.nodes) return undefined;
        let iterator = this.getIterator();
        let index, result;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index], index);
            if (result === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
    }
    walk(callback) {
        return this.each((child, i)=>{
            let result;
            try {
                result = callback(child, i);
            } catch (e) {
                throw child.addToError(e);
            }
            if (result !== false && child.walk) result = child.walk(callback);
            return result;
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i)=>{
                if (child.type === 'decl') return callback(child, i);
            });
        }
        if (prop instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'decl' && prop.test(child.prop)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'decl' && child.prop === prop) return callback(child, i);
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i)=>{
                if (child.type === 'rule') return callback(child, i);
            });
        }
        if (selector instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'rule' && selector.test(child.selector)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'rule' && child.selector === selector) return callback(child, i);
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i)=>{
                if (child.type === 'atrule') return callback(child, i);
            });
        }
        if (name instanceof RegExp) return this.walk((child, i)=>{
            if (child.type === 'atrule' && name.test(child.name)) return callback(child, i);
        });
        return this.walk((child, i)=>{
            if (child.type === 'atrule' && child.name === name) return callback(child, i);
        });
    }
    walkComments(callback) {
        return this.walk((child, i)=>{
            if (child.type === 'comment') return callback(child, i);
        });
    }
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node of nodes)this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, 'prepend').reverse();
            for (let node of nodes)this.proxyOf.nodes.unshift(node);
            for(let id in this.indexes)this.indexes[id] = this.indexes[id] + nodes.length;
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) for (let node of this.nodes)node.cleanRaws(keepBetween);
    }
    insertBefore(exist, add) {
        exist = this.index(exist);
        let type = exist === 0 ? 'prepend' : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse();
        for (let node of nodes)this.proxyOf.nodes.splice(exist, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (exist <= index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    insertAfter(exist, add) {
        exist = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse();
        for (let node of nodes)this.proxyOf.nodes.splice(exist + 1, 0, node);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (exist < index) this.indexes[id] = index + nodes.length;
        }
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = undefined;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for(let id in this.indexes){
            index = this.indexes[id];
            if (index >= child) this.indexes[id] = index - 1;
        }
        this.markDirty();
        return this;
    }
    removeAll() {
        for (let node of this.proxyOf.nodes)node.parent = undefined;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    index(child) {
        if (typeof child === 'number') return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    get first() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return undefined;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    normalize(nodes, sample) {
        if (typeof nodes === 'string') nodes = cleanSource(parse(nodes).nodes);
        else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, 'ignore');
        } else if (nodes.type === 'root' && this.type !== 'document') {
            nodes = nodes.nodes.slice(0);
            for (let i of nodes)if (i.parent) i.parent.removeChild(i, 'ignore');
        } else if (nodes.type) nodes = [
            nodes
        ];
        else if (nodes.prop) {
            if (typeof nodes.value === 'undefined') throw new Error('Value field is missed in node creation');
            else if (typeof nodes.value !== 'string') nodes.value = String(nodes.value);
            nodes = [
                new Declaration(nodes)
            ];
        } else if (nodes.selector) nodes = [
            new Rule(nodes)
        ];
        else if (nodes.name) nodes = [
            new AtRule(nodes)
        ];
        else if (nodes.text) nodes = [
            new Comment(nodes)
        ];
        else throw new Error('Unknown node type in node creation');
        let processed = nodes.map((i)=>{
            /* c8 ignore next */ if (!i[my]) Container.rebuild(i);
            i = i.proxyOf;
            if (i.parent) i.parent.removeChild(i);
            if (i[isClean]) markDirtyUp(i);
            if (typeof i.raws.before === 'undefined') {
                if (sample && typeof sample.raws.before !== 'undefined') i.raws.before = sample.raws.before.replace(/\S/g, '');
            }
            i.parent = this.proxyOf;
            return i;
        });
        return processed;
    }
    getProxyProcessor() {
        return {
            set (node, prop, value) {
                if (node[prop] === value) return true;
                node[prop] = value;
                if (prop === 'name' || prop === 'params' || prop === 'selector') node.markDirty();
                return true;
            },
            get (node, prop) {
                if (prop === 'proxyOf') return node;
                else if (!node[prop]) return node[prop];
                else if (prop === 'each' || typeof prop === 'string' && prop.startsWith('walk')) return (...args)=>{
                    return node[prop](...args.map((i)=>{
                        if (typeof i === 'function') return (child, index)=>i(child.toProxy(), index)
                        ;
                        else return i;
                    }));
                };
                else if (prop === 'every' || prop === 'some') return (cb)=>{
                    return node[prop]((child, ...other)=>cb(child.toProxy(), ...other)
                    );
                };
                else if (prop === 'root') return ()=>node.root().toProxy()
                ;
                else if (prop === 'nodes') return node.nodes.map((i)=>i.toProxy()
                );
                else if (prop === 'first' || prop === 'last') return node[prop].toProxy();
                else return node[prop];
            }
        };
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
}
Container.registerParse = (dependant)=>{
    parse = dependant;
};
Container.registerRule = (dependant)=>{
    Rule = dependant;
};
Container.registerAtRule = (dependant)=>{
    AtRule = dependant;
};
module.exports = Container;
Container.default = Container;
/* c8 ignore start */ Container.rebuild = (node)=>{
    if (node.type === 'atrule') Object.setPrototypeOf(node, AtRule.prototype);
    else if (node.type === 'rule') Object.setPrototypeOf(node, Rule.prototype);
    else if (node.type === 'decl') Object.setPrototypeOf(node, Declaration.prototype);
    else if (node.type === 'comment') Object.setPrototypeOf(node, Comment.prototype);
    node[my] = true;
    if (node.nodes) node.nodes.forEach((child)=>{
        Container.rebuild(child);
    });
} /* c8 ignore stop */ ;

},{"./symbols":"9Ej2B","./declaration":"2mU8a","./comment":"5CBjv","./node":"5azBO"}],"5CBjv":[function(require,module,exports) {
'use strict';
let Node = require('./node');
class Comment extends Node {
    constructor(defaults){
        super(defaults);
        this.type = 'comment';
    }
}
module.exports = Comment;
Comment.default = Comment;

},{"./node":"5azBO"}],"dK3sP":[function(require,module,exports) {
'use strict';
let Container = require('./container');
let LazyResult, Processor;
class Document extends Container {
    constructor(defaults){
        // type needs to be passed to super, otherwise child roots won't be normalized correctly
        super({
            type: 'document',
            ...defaults
        });
        if (!this.nodes) this.nodes = [];
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Document.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Document.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Document;
Document.default = Document;

},{"./container":"1gj6C"}],"dpzGz":[function(require,module,exports) {
/* eslint-disable no-console */ 'use strict';
let printed = {};
module.exports = function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== 'undefined' && console.warn) console.warn(message);
};

},{}],"dmoqr":[function(require,module,exports) {
'use strict';
let Warning = require('./warning');
class Result {
    constructor(processor, root, opts){
        this.processor = processor;
        this.messages = [];
        this.root = root;
        this.opts = opts;
        this.css = undefined;
        this.map = undefined;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
        }
        let warning = new Warning(text, opts);
        this.messages.push(warning);
        return warning;
    }
    warnings() {
        return this.messages.filter((i)=>i.type === 'warning'
        );
    }
    get content() {
        return this.css;
    }
}
module.exports = Result;
Result.default = Result;

},{"./warning":"lw5j2"}],"lw5j2":[function(require,module,exports) {
'use strict';
class Warning {
    constructor(text, opts = {}){
        this.type = 'warning';
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) return this.node.error(this.text, {
            plugin: this.plugin,
            index: this.index,
            word: this.word
        }).message;
        if (this.plugin) return this.plugin + ': ' + this.text;
        return this.text;
    }
}
module.exports = Warning;
Warning.default = Warning;

},{}],"ioa1B":[function(require,module,exports) {
'use strict';
let Container = require('./container');
let Parser = require('./parser');
let Input = require('./input');
function parse(css, opts) {
    let input = new Input(css, opts);
    let parser = new Parser(input);
    try {
        parser.parse();
    } catch (e) {
        if (e.name === 'CssSyntaxError' && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
            else if (/\.sass/i.test(opts.from)) e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
            else if (/\.less$/i.test(opts.from)) e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
        }
        throw e;
    }
    return parser.root;
}
module.exports = parse;
parse.default = parse;
Container.registerParse(parse);

},{"./container":"1gj6C","./parser":"flcRV","./input":"fb1UO"}],"flcRV":[function(require,module,exports) {
'use strict';
let Declaration = require('./declaration');
let tokenizer = require('./tokenize');
let Comment = require('./comment');
let AtRule = require('./at-rule');
let Root = require('./root');
let Rule = require('./rule');
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i = tokens.length - 1; i >= 0; i--){
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
class Parser {
    constructor(input){
        this.input = input;
        this.root = new Root();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;
        this.customProperty = false;
        this.createTokenizer();
        this.root.source = {
            input,
            start: {
                offset: 0,
                line: 1,
                column: 1
            }
        };
    }
    createTokenizer() {
        this.tokenizer = tokenizer(this.input);
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case 'space':
                    this.spaces += token[1];
                    break;
                case ';':
                    this.freeSemicolon(token);
                    break;
                case '}':
                    this.end(token);
                    break;
                case 'comment':
                    this.comment(token);
                    break;
                case 'at-word':
                    this.atrule(token);
                    break;
                case '{':
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    comment(token) {
        let node = new Comment();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node.text = '';
            node.raws.left = text;
            node.raws.right = '';
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
        }
    }
    emptyRule(token) {
        let node = new Rule();
        this.init(node, token[2]);
        node.selector = '';
        node.raws.between = '';
        this.current = node;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith('--');
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === '(' || type === '[') {
                if (!bracket) bracket = token;
                brackets.push(type === '(' ? ')' : ']');
            } else if (customProperty && colon && type === '{') {
                if (!bracket) bracket = token;
                brackets.push('}');
            } else if (brackets.length === 0) {
                if (type === ';') {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else break;
                } else if (type === '{') {
                    this.rule(tokens);
                    return;
                } else if (type === '}') {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ':') colon = true;
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) while(tokens.length){
                token = tokens[tokens.length - 1][0];
                if (token !== 'space' && token !== 'comment') break;
                this.tokenizer.back(tokens.pop());
            }
            this.decl(tokens, customProperty);
        } else this.unknownWord(tokens);
    }
    rule(tokens) {
        tokens.pop();
        let node = new Rule();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, 'selector', tokens);
        this.current = node;
    }
    decl(tokens, customProperty) {
        let node = new Declaration();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ';') {
            this.semicolon = true;
            tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        while(tokens[0][0] !== 'word'){
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = '';
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ':' || type === 'space' || type === 'comment') break;
            node.prop += tokens.shift()[1];
        }
        node.raws.between = '';
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ':') {
                node.raws.between += token[1];
                break;
            } else {
                if (token[0] === 'word' && /\w/.test(token[1])) this.unknownWord([
                    token
                ]);
                node.raws.between += token[1];
            }
        }
        if (node.prop[0] === '_' || node.prop[0] === '*') {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i1 = tokens.length - 1; i1 >= 0; i1--){
            token = tokens[i1];
            if (token[1].toLowerCase() === '!important') {
                node.important = true;
                let string = this.stringFrom(tokens, i1);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== ' !important') node.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === 'important') {
                let cache = tokens.slice(0);
                let str = '';
                for(let j = i1; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf('!') === 0 && type !== 'space') break;
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf('!') === 0) {
                    node.important = true;
                    node.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== 'space' && token[0] !== 'comment') break;
        }
        let hasWord = tokens.some((i)=>i[0] !== 'space' && i[0] !== 'comment'
        );
        if (hasWord) {
            node.raws.between += firstSpaces.map((i)=>i[1]
            ).join('');
            firstSpaces = [];
        }
        this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(':') && !customProperty) this.checkMissedSemicolon(tokens);
    }
    atrule(token) {
        let node = new AtRule();
        node.name = token[1].slice(1);
        if (node.name === '') this.unnamedAtrule(node, token);
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === '(' || type === '[') brackets.push(type === '(' ? ')' : ']');
            else if (type === '{' && brackets.length > 0) brackets.push('}');
            else if (type === brackets[brackets.length - 1]) brackets.pop();
            if (brackets.length === 0) {
                if (type === ';') {
                    node.source.end = this.getPosition(token[2]);
                    this.semicolon = true;
                    break;
                } else if (type === '{') {
                    open = true;
                    break;
                } else if (type === '}') {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === 'space')prev = params[--shift];
                        if (prev) node.source.end = this.getPosition(prev[3] || prev[2]);
                    }
                    this.end(token);
                    break;
                } else params.push(token);
            } else params.push(token);
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, 'params', params);
            if (last) {
                token = params[params.length - 1];
                node.source.end = this.getPosition(token[3] || token[2]);
                this.spaces = node.raws.between;
                node.raws.between = '';
            }
        } else {
            node.raws.afterName = '';
            node.params = '';
        }
        if (open) {
            node.nodes = [];
            this.current = node;
        }
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        this.spaces = '';
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current = this.current.parent;
        } else this.unexpectedClose(token);
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
        this.current.raws.after = (this.current.raws.after || '') + this.spaces;
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = '';
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            offset,
            line: pos.line,
            column: pos.col
        };
    }
    init(node, offset) {
        this.current.push(node);
        node.source = {
            start: this.getPosition(offset),
            input: this.input
        };
        node.raws.before = this.spaces;
        this.spaces = '';
        if (node.type !== 'comment') this.semicolon = false;
    }
    raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = '';
        let clean = true;
        let next, prev;
        for(let i2 = 0; i2 < length; i2 += 1){
            token = tokens[i2];
            type = token[0];
            if (type === 'space' && i2 === length - 1 && !customProperty) clean = false;
            else if (type === 'comment') {
                prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : 'empty';
                next = tokens[i2 + 1] ? tokens[i2 + 1][0] : 'empty';
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ',') clean = false;
                    else value += token[1];
                } else clean = false;
            } else value += token[1];
        }
        if (!clean) {
            let raw = tokens.reduce((all, i)=>all + i[1]
            , '');
            node.raws[prop] = {
                value,
                raw
            };
        }
        node[prop] = value;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = '';
        while(tokens.length){
            next = tokens[0][0];
            if (next !== 'space' && next !== 'comment') break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = '';
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== 'space') break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result = '';
        for(let i = from; i < tokens.length; i++)result += tokens[i][1];
        tokens.splice(from, tokens.length - from);
        return result;
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === '(') brackets += 1;
            if (type === ')') brackets -= 1;
            if (brackets === 0 && type === ':') {
                if (!prev) this.doubleColon(token);
                else if (prev[0] === 'word' && prev[1] === 'progid') continue;
                else return i;
            }
            prev = token;
        }
        return false;
    }
    // Errors
    unclosedBracket(bracket) {
        throw this.input.error('Unclosed bracket', {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error('Unknown word', {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unexpectedClose(token) {
        throw this.input.error('Unexpected }', {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error('Unclosed block', pos.line, pos.column);
    }
    doubleColon(token) {
        throw this.input.error('Double colon', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    unnamedAtrule(node, token) {
        throw this.input.error('At-rule without name', {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    precheckMissedSemicolon() {
    // Hook for Safe Parser
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== 'space') {
                founded += 1;
                if (founded === 2) break;
            }
        }
        // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
        // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
        // And because we need it after that one we do +1 to get the next one.
        throw this.input.error('Missed semicolon', token[0] === 'word' ? token[3] + 1 : token[2]);
    }
}
module.exports = Parser;

},{"./declaration":"2mU8a","./tokenize":"bLUE2","./comment":"5CBjv","./at-rule":"kbVAt","./root":"hsDFv","./rule":"4SFJx"}],"bLUE2":[function(require,module,exports) {
'use strict';
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = '\\'.charCodeAt(0);
const SLASH = '/'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);
const SPACE = ' '.charCodeAt(0);
const FEED = '\f'.charCodeAt(0);
const TAB = '\t'.charCodeAt(0);
const CR = '\r'.charCodeAt(0);
const OPEN_SQUARE = '['.charCodeAt(0);
const CLOSE_SQUARE = ']'.charCodeAt(0);
const OPEN_PARENTHESES = '('.charCodeAt(0);
const CLOSE_PARENTHESES = ')'.charCodeAt(0);
const OPEN_CURLY = '{'.charCodeAt(0);
const CLOSE_CURLY = '}'.charCodeAt(0);
const SEMICOLON = ';'.charCodeAt(0);
const ASTERISK = '*'.charCodeAt(0);
const COLON = ':'.charCodeAt(0);
const AT = '@'.charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
module.exports = function tokenizer(input, options = {}) {
    let css = input.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input.error('Unclosed ' + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED)
                currentToken = [
                    'space',
                    css.slice(pos, next)
                ];
                pos = next - 1;
                break;
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                prev = buffer.length ? buffer.pop()[1] : '';
                n = css.charCodeAt(pos + 1);
                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(')', next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos;
                                break;
                            } else unclosed('bracket');
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped)
                    currentToken = [
                        'brackets',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    next = css.indexOf(')', pos + 1);
                    content = css.slice(pos, next + 1);
                    if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
                        '(',
                        '(',
                        pos
                    ];
                    else {
                        currentToken = [
                            'brackets',
                            content,
                            pos,
                            next
                        ];
                        pos = next;
                    }
                }
                break;
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? "'" : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore || ignoreUnclosed) {
                            next = pos + 1;
                            break;
                        } else unclosed('string');
                    }
                    escapePos = next;
                    while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                }while (escaped)
                currentToken = [
                    'string',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) next = css.length - 1;
                else next = RE_AT_END.lastIndex - 2;
                currentToken = [
                    'at-word',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            case BACKSLASH:
                next = pos;
                escape = true;
                while(css.charCodeAt(next + 1) === BACKSLASH){
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                    if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                        while(RE_HEX_ESCAPE.test(css.charAt(next + 1)))next += 1;
                        if (css.charCodeAt(next + 1) === SPACE) next += 1;
                    }
                }
                currentToken = [
                    'word',
                    css.slice(pos, next + 1),
                    pos,
                    next
                ];
                pos = next;
                break;
            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf('*/', pos + 2) + 1;
                    if (next === 0) {
                        if (ignore || ignoreUnclosed) next = css.length;
                        else unclosed('comment');
                    }
                    currentToken = [
                        'comment',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
                    else next = RE_WORD_END.lastIndex - 2;
                    currentToken = [
                        'word',
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    buffer.push(currentToken);
                    pos = next;
                }
                break;
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        nextToken,
        endOfFile,
        position
    };
};

},{}],"kbVAt":[function(require,module,exports) {
'use strict';
let Container = require('./container');
class AtRule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'atrule';
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
}
module.exports = AtRule;
AtRule.default = AtRule;
Container.registerAtRule(AtRule);

},{"./container":"1gj6C"}],"hsDFv":[function(require,module,exports) {
'use strict';
let Container = require('./container');
let LazyResult, Processor;
class Root extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'root';
        if (!this.nodes) this.nodes = [];
    }
    removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index].raws.before;
        return super.removeChild(child);
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === 'prepend') {
                if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
                else delete sample.raws.before;
            } else if (this.first !== sample) for (let node of nodes)node.raws.before = sample.raws.before;
        }
        return nodes;
    }
    toResult(opts = {}) {
        let lazy = new LazyResult(new Processor(), this, opts);
        return lazy.stringify();
    }
}
Root.registerLazyResult = (dependant)=>{
    LazyResult = dependant;
};
Root.registerProcessor = (dependant)=>{
    Processor = dependant;
};
module.exports = Root;
Root.default = Root;

},{"./container":"1gj6C"}],"4SFJx":[function(require,module,exports) {
'use strict';
let Container = require('./container');
let list = require('./list');
class Rule extends Container {
    constructor(defaults){
        super(defaults);
        this.type = 'rule';
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
        this.selector = values.join(sep);
    }
}
module.exports = Rule;
Rule.default = Rule;
Container.registerRule(Rule);

},{"./container":"1gj6C","./list":"hZo3l"}],"hZo3l":[function(require,module,exports) {
'use strict';
let list = {
    split (string, separators, last) {
        let array = [];
        let current = '';
        let split = false;
        let func = 0;
        let quote = false;
        let escape = false;
        for (let letter of string){
            if (escape) escape = false;
            else if (letter === '\\') escape = true;
            else if (quote) {
                if (letter === quote) quote = false;
            } else if (letter === '"' || letter === "'") quote = letter;
            else if (letter === '(') func += 1;
            else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else current += letter;
        }
        if (last || current !== '') array.push(current.trim());
        return array;
    },
    space (string) {
        let spaces = [
            ' ',
            '\n',
            '\t'
        ];
        return list.split(string, spaces);
    },
    comma (string) {
        return list.split(string, [
            ','
        ], true);
    }
};
module.exports = list;
list.default = list;

},{}],"lU6wZ":[function(require,module,exports) {
'use strict';
let NoWorkResult = require('./no-work-result');
let LazyResult = require('./lazy-result');
let Document = require('./document');
let Root = require('./root');
class Processor {
    constructor(plugins = []){
        this.version = '8.4.14';
        this.plugins = this.normalize(plugins);
    }
    use(plugin) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin
        ]));
        return this;
    }
    process(css, opts = {}) {
        if (this.plugins.length === 0 && typeof opts.parser === 'undefined' && typeof opts.stringifier === 'undefined' && typeof opts.syntax === 'undefined') return new NoWorkResult(this, css, opts);
        else return new LazyResult(this, css, opts);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i of plugins){
            if (i.postcss === true) i = i();
            else if (i.postcss) i = i.postcss;
            if (typeof i === 'object' && Array.isArray(i.plugins)) normalized = normalized.concat(i.plugins);
            else if (typeof i === 'object' && i.postcssPlugin) normalized.push(i);
            else if (typeof i === 'function') normalized.push(i);
            else if (typeof i === 'object' && (i.parse || i.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
            else throw new Error(i + ' is not a PostCSS plugin');
        }
        return normalized;
    }
}
module.exports = Processor;
Processor.default = Processor;
Root.registerProcessor(Processor);
Document.registerProcessor(Processor);

},{"./no-work-result":"4PfYq","./lazy-result":"580Su","./document":"dK3sP","./root":"hsDFv"}],"4PfYq":[function(require,module,exports) {
'use strict';
let MapGenerator = require('./map-generator');
let stringify = require('./stringify');
let warnOnce = require('./warn-once');
let parse = require('./parse');
const Result = require('./result');
class NoWorkResult {
    constructor(processor, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = undefined;
        let root;
        let str = stringify;
        this.result = new Result(this._processor, root, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, 'root', {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator(str, root, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) this.result.css = generatedCSS;
            if (generatedMap) this.result.map = generatedMap;
        }
    }
    get [Symbol.toStringTag]() {
        return 'NoWorkResult';
    }
    get processor() {
        return this.result.processor;
    }
    get opts() {
        return this.result.opts;
    }
    get css() {
        return this.result.css;
    }
    get content() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get root() {
        if (this._root) return this._root;
        let root;
        let parser = parse;
        try {
            root = parser(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) throw this.error;
        else {
            this._root = root;
            return root;
        }
    }
    get messages() {
        return [];
    }
    warnings() {
        return [];
    }
    toString() {
        return this._css;
    }
    then(onFulfilled, onRejected) {
        if (!('from' in this._opts)) warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
        return this.async().then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
}
module.exports = NoWorkResult;
NoWorkResult.default = NoWorkResult;

},{"./map-generator":"ghfT0","./stringify":"a0MwE","./warn-once":"dpzGz","./parse":"ioa1B","./result":"dmoqr"}],"iiNZS":[function(require,module,exports) {
'use strict';
let Declaration = require('./declaration');
let PreviousMap = require('./previous-map');
let Comment = require('./comment');
let AtRule = require('./at-rule');
let Input = require('./input');
let Root = require('./root');
let Rule = require('./rule');
function fromJSON(json, inputs) {
    if (Array.isArray(json)) return json.map((n)=>fromJSON(n)
    );
    let { inputs: ownInputs , ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input of ownInputs){
            let inputHydrated = {
                ...input,
                __proto__: Input.prototype
            };
            if (inputHydrated.map) inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
            };
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) defaults.nodes = json.nodes.map((n)=>fromJSON(n, inputs)
    );
    if (defaults.source) {
        let { inputId , ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) defaults.source.input = inputs[inputId];
    }
    if (defaults.type === 'root') return new Root(defaults);
    else if (defaults.type === 'decl') return new Declaration(defaults);
    else if (defaults.type === 'rule') return new Rule(defaults);
    else if (defaults.type === 'comment') return new Comment(defaults);
    else if (defaults.type === 'atrule') return new AtRule(defaults);
    else throw new Error('Unknown node type: ' + json.type);
}
module.exports = fromJSON;
fromJSON.default = fromJSON;

},{"./declaration":"2mU8a","./previous-map":"cmiCo","./comment":"5CBjv","./at-rule":"kbVAt","./input":"fb1UO","./root":"hsDFv","./rule":"4SFJx"}],"aLg0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _path = require("../../../../utils/path");
var _joinLayer = require("./join-layer");
var _joinLayerDefault = parcelHelpers.interopDefault(_joinLayer);
var _joinMedia = require("./join-media");
var _joinMediaDefault = parcelHelpers.interopDefault(_joinMedia);
var _parseStatements = require("./parse-statements");
var _parseStatementsDefault = parcelHelpers.interopDefault(_parseStatements);
var _processContent = require("./process-content");
var _processContentDefault = parcelHelpers.interopDefault(_processContent);
function AtImport(initialOpts) {
    const options1 = {
        root: '/',
        path: [],
        skipDuplicates: true,
        addModulesDirectories: [],
        ...initialOpts
    };
    options1.path = options1.path.map((p)=>_path.resolve(options1.root, p)
    );
    return {
        postcssPlugin: 'postcss-import',
        Once (styles1, { result: result1 , atRule: atRule1 , postcss  }) {
            const state1 = {
                importedFiles: {},
                hashFiles: {}
            };
            if (styles1.source && styles1.source.input && styles1.source.input.file) state1.importedFiles[styles1.source.input.file] = {};
            if (options1.plugins && !Array.isArray(options1.plugins)) throw new Error('plugins option must be an array');
            return parseStyles(result1, styles1, options1, state1, [], []).then((bundle)=>{
                applyRaws(bundle);
                applyMedia(bundle);
                applyStyles(bundle, styles1);
            });
            function applyRaws(bundle) {
                bundle.forEach((stmt, index)=>{
                    if (index === 0) return;
                    if (stmt.parent) {
                        const { before  } = stmt.parent.node.raws;
                        if (stmt.type === 'nodes') stmt.nodes[0].raws.before = before;
                        else stmt.node.raws.before = before;
                    } else if (stmt.type === 'nodes') {
                        stmt.nodes[0].raws.before = stmt.nodes[0].raws.before || '\n';
                    }
                });
            }
            function applyMedia(bundle) {
                bundle.forEach((stmt)=>{
                    if (!stmt.media.length && !stmt.layer.length || stmt.type === 'charset') {
                        return;
                    }
                    if (stmt.type === 'import') {
                        stmt.node.params = `${stmt.fullUri} ${stmt.media.join(', ')}`;
                    } else if (stmt.type === 'media') {
                        stmt.node.params = stmt.media.join(', ');
                    } else {
                        const { nodes  } = stmt;
                        const { parent  } = nodes[0];
                        let outerAtRule;
                        let innerAtRule;
                        if (stmt.media.length && stmt.layer.length) {
                            const mediaNode = atRule1({
                                name: 'media',
                                params: stmt.media.join(', '),
                                source: parent.source
                            });
                            const layerNode = atRule1({
                                name: 'layer',
                                params: stmt.layer.filter((layer)=>layer !== ''
                                ).join('.'),
                                source: parent.source
                            });
                            mediaNode.append(layerNode);
                            innerAtRule = layerNode;
                            outerAtRule = mediaNode;
                        } else if (stmt.media.length) {
                            const mediaNode = atRule1({
                                name: 'media',
                                params: stmt.media.join(', '),
                                source: parent.source
                            });
                            innerAtRule = mediaNode;
                            outerAtRule = mediaNode;
                        } else if (stmt.layer.length) {
                            const layerNode = atRule1({
                                name: 'layer',
                                params: stmt.layer.filter((layer)=>layer !== ''
                                ).join('.'),
                                source: parent.source
                            });
                            innerAtRule = layerNode;
                            outerAtRule = layerNode;
                        }
                        parent.insertBefore(nodes[0], outerAtRule);
                        // remove nodes
                        nodes.forEach((node)=>{
                            node.parent = undefined;
                        });
                        // better output
                        nodes[0].raws.before = nodes[0].raws.before || '\n';
                        // wrap new rules with media query and/or layer at rule
                        innerAtRule.append(nodes);
                        stmt.type = 'media';
                        stmt.node = outerAtRule;
                        delete stmt.nodes;
                    }
                });
            }
            function applyStyles(bundle, styles) {
                styles.nodes = [];
                // Strip additional statements.
                bundle.forEach((stmt)=>{
                    if ([
                        'charset',
                        'import',
                        'media'
                    ].includes(stmt.type)) {
                        stmt.node.parent = undefined;
                        styles.append(stmt.node);
                    } else if (stmt.type === 'nodes') {
                        stmt.nodes.forEach((node)=>{
                            node.parent = undefined;
                            styles.append(node);
                        });
                    }
                });
            }
            function parseStyles(result, styles, options, state, media, layer) {
                const statements = _parseStatementsDefault.default(result, styles);
                return Promise.resolve(statements).then((stmts)=>{
                    // process each statement in series
                    return stmts.reduce((promise, stmt)=>{
                        return promise.then(()=>{
                            stmt.media = _joinMediaDefault.default(media, stmt.media || []);
                            stmt.layer = _joinLayerDefault.default(layer, stmt.layer || []);
                            // skip protocol base uri (protocol://url) or protocol-relative
                            if (stmt.type !== 'import' || /^(?:[a-z]+:)?\/\//i.test(stmt.uri)) {
                                return;
                            }
                            if (options.filter && !options.filter(stmt.uri)) {
                                // rejected by filter
                                return;
                            }
                            return resolveImportId(result, stmt, options, state);
                        });
                    }, Promise.resolve());
                }).then(()=>{
                    let charset;
                    const imports = [];
                    const bundle = [];
                    function handleCharset(stmt) {
                        if (!charset) charset = stmt;
                        else if (stmt.node.params.toLowerCase() !== charset.node.params.toLowerCase()) {
                            throw new Error(`Incompatable @charset statements:
  ${stmt.node.params} specified in ${stmt.node.source.input.file}
  ${charset.node.params} specified in ${charset.node.source.input.file}`);
                        }
                    }
                    // squash statements and their children
                    statements.forEach((stmt)=>{
                        if (stmt.type === 'charset') handleCharset(stmt);
                        else if (stmt.type === 'import') {
                            if (stmt.children) {
                                stmt.children.forEach((child, index)=>{
                                    if (child.type === 'import') imports.push(child);
                                    else if (child.type === 'charset') handleCharset(child);
                                    else bundle.push(child);
                                    // For better output
                                    if (index === 0) child.parent = stmt;
                                });
                            } else imports.push(stmt);
                        } else if (stmt.type === 'media' || stmt.type === 'nodes') {
                            bundle.push(stmt);
                        }
                    });
                    return charset ? [
                        charset,
                        ...imports.concat(bundle)
                    ] : imports.concat(bundle);
                });
            }
            function resolveImportId(result2, stmt, options, state) {
                const atRule = stmt.node;
                let sourceFile;
                if (atRule.source && atRule.source.input && atRule.source.input.file) {
                    sourceFile = atRule.source.input.file;
                }
                const base = sourceFile ? _path.dirname(atRule.source.input.file) : options.root;
                return Promise.resolve(options.resolve(stmt.uri, base, options)).then((paths)=>{
                    if (!Array.isArray(paths)) {
                        return [
                            paths
                        ];
                    } else {
                        return paths;
                    }
                }).then((resolved)=>{
                    // Add dependency messages:
                    resolved.forEach((file)=>{
                        result2.messages.push({
                            type: 'dependency',
                            plugin: 'postcss-import',
                            file,
                            parent: sourceFile
                        });
                    });
                    return Promise.all(resolved.map((file)=>{
                        return loadImportContent(result2, stmt, file, options, state);
                    }));
                }).then((result3)=>{
                    // Merge loaded statements
                    stmt.children = result3.reduce((result, statements)=>{
                        return statements ? result.concat(statements) : result;
                    }, []);
                });
            }
            function loadImportContent(result, stmt, filename, options, state) {
                const atRule = stmt.node;
                const { media , layer  } = stmt;
                if (options.skipDuplicates) {
                    // skip files already imported at the same scope
                    if (state.importedFiles[filename] && state.importedFiles[filename][media]) {
                        return;
                    }
                    // save imported files to skip them next time
                    if (!state.importedFiles[filename]) state.importedFiles[filename] = {};
                    state.importedFiles[filename][media] = true;
                }
                return Promise.resolve(options.load(filename, options)).then((content)=>{
                    if (content.trim() === '') {
                        result.warn(`${filename} is empty`, {
                            node: atRule
                        });
                        return;
                    }
                    // skip previous imported files not containing @import rules
                    if (state.hashFiles[content] && state.hashFiles[content][media]) return;
                    return _processContentDefault.default(result, content, filename, options, postcss).then((importedResult)=>{
                        const styles = importedResult.root;
                        result.messages = result.messages.concat(importedResult.messages);
                        if (options.skipDuplicates) {
                            const hasImport = styles.some((child)=>{
                                return child.type === 'atrule' && child.name === 'import';
                            });
                            if (!hasImport) {
                                // save hash files to skip them next time
                                if (!state.hashFiles[content]) state.hashFiles[content] = {};
                                state.hashFiles[content][media] = true;
                            }
                        }
                        // recursion: import @import from imported file
                        return parseStyles(result, styles, options, state, media, layer);
                    });
                });
            }
        }
    };
}
AtImport.postcss = true;
exports.default = AtImport;

},{"../../../../utils/path":"7C40W","./join-layer":"eqvBU","./join-media":"a71vt","./parse-statements":"jg7Ty","./process-content":"5zWlR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqvBU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function joinLayer(parentLayer, childLayer) {
    if (!parentLayer.length && childLayer.length) return childLayer;
    if (parentLayer.length && !childLayer.length) return parentLayer;
    if (!parentLayer.length && !childLayer.length) return [];
    return parentLayer.concat(childLayer);
}
exports.default = joinLayer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a71vt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function joinMedia(parentMedia, childMedia) {
    if (!parentMedia.length && childMedia.length) return childMedia;
    if (parentMedia.length && !childMedia.length) return parentMedia;
    if (!parentMedia.length && !childMedia.length) return [];
    const media = [];
    parentMedia.forEach((parentItem)=>{
        childMedia.forEach((childItem)=>{
            if (parentItem !== childItem) media.push(`${parentItem} and ${childItem}`);
        });
    });
    return media;
}
exports.default = joinMedia;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jg7Ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @ts-nocheck
var _postcssValueParser = require("postcss-value-parser");
var _postcssValueParserDefault = parcelHelpers.interopDefault(_postcssValueParser);
function split(params, start) {
    const list = [];
    const last = params.reduce((item, node, index)=>{
        if (index < start) return '';
        if (node.type === 'div' && node.value === ',') {
            list.push(item);
            return '';
        }
        return item + _postcssValueParser.stringify(node);
    }, '');
    list.push(last);
    return list;
}
function parseStatements(result, styles) {
    const statements = [];
    let nodes = [];
    styles.each((node)=>{
        let stmt;
        if (node.type === 'atrule') {
            if (node.name === 'import') stmt = parseImport(result, node);
            else if (node.name === 'media') stmt = parseMedia(result, node);
            else if (node.name === 'charset') stmt = parseCharset(result, node);
        }
        if (stmt) {
            if (nodes.length) {
                statements.push({
                    type: 'nodes',
                    nodes,
                    media: [],
                    layer: []
                });
                nodes = [];
            }
            statements.push(stmt);
        } else nodes.push(node);
    });
    if (nodes.length) statements.push({
        type: 'nodes',
        nodes,
        media: [],
        layer: []
    });
    return statements;
}
exports.default = parseStatements;
function parseMedia(result, atRule) {
    const params = _postcssValueParserDefault.default(atRule.params).nodes;
    return {
        type: 'media',
        node: atRule,
        media: split(params, 0),
        layer: []
    };
}
function parseCharset(result, atRule) {
    if (atRule.prev()) return result.warn('@charset must precede all other statements', {
        node: atRule
    });
    return {
        type: 'charset',
        node: atRule,
        media: [],
        layer: []
    };
}
function parseImport(result, atRule) {
    let prev = atRule.prev();
    if (prev) do {
        if (prev.type !== 'comment' && (prev.type !== 'atrule' || prev.name !== 'import' && prev.name !== 'charset' && !(prev.name === 'layer' && !prev.nodes))) return result.warn('@import must precede all other statements (besides @charset or empty @layer)', {
            node: atRule
        });
        prev = prev.prev();
    }while (prev)
    if (atRule.nodes) return result.warn("It looks like you didn't end your @import statement correctly. Child nodes are attached to it.", {
        node: atRule
    });
    const params = _postcssValueParserDefault.default(atRule.params).nodes;
    const stmt = {
        type: 'import',
        node: atRule,
        media: [],
        layer: []
    };
    // prettier-ignore
    if (!params.length || (params[0].type !== "string" || !params[0].value) && (params[0].type !== "function" || params[0].value !== "url" || !params[0].nodes.length || !params[0].nodes[0].value)) return result.warn(`Unable to find uri in '${atRule.toString()}'`, {
        node: atRule
    });
    if (params[0].type === 'string') stmt.uri = params[0].value;
    else stmt.uri = params[0].nodes[0].value;
    stmt.fullUri = _postcssValueParser.stringify(params[0]);
    let remainder = params;
    if (remainder.length > 2) {
        if ((remainder[2].type === 'word' || remainder[2].type === 'function') && remainder[2].value === 'layer') {
            if (remainder[1].type !== 'space') return result.warn('Invalid import layer statement', {
                node: atRule
            });
            if (remainder[2].nodes) stmt.layer = [
                _postcssValueParser.stringify(remainder[2].nodes)
            ];
            else stmt.layer = [
                ''
            ];
            remainder = remainder.slice(2);
        }
    }
    if (remainder.length > 2) {
        if (remainder[1].type !== 'space') return result.warn('Invalid import media statement', {
            node: atRule
        });
        stmt.media = split(remainder, 2);
    }
    return stmt;
}

},{"postcss-value-parser":"blMr1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blMr1":[function(require,module,exports) {
var parse = require("./parse");
var walk = require("./walk");
var stringify = require("./stringify");
function ValueParser(value) {
    if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
    }
    return new ValueParser(value);
}
ValueParser.prototype.toString = function() {
    return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};
ValueParser.prototype.walk = function(cb, bubble) {
    walk(this.nodes, cb, bubble);
    return this;
};
ValueParser.unit = require("./unit");
ValueParser.walk = walk;
ValueParser.stringify = stringify;
module.exports = ValueParser;

},{"./parse":"8c0jO","./walk":"5phvw","./stringify":"hal54","./unit":"lebww"}],"8c0jO":[function(require,module,exports) {
var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;
module.exports = function(input) {
    var tokens = [];
    var value = input;
    var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
    var pos = 0;
    var code = value.charCodeAt(pos);
    var max = value.length;
    var stack = [
        {
            nodes: tokens
        }
    ];
    var balanced = 0;
    var parent;
    var name = "";
    var before = "";
    var after = "";
    while(pos < max){
        // Whitespaces
        if (code <= 32) {
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            token = value.slice(pos, next);
            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) after = token;
            else if (prev && prev.type === "div") {
                prev.after = token;
                prev.sourceEndIndex += token.length;
            } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) before = token;
            else tokens.push({
                type: "space",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            pos = next;
        // Quotes
        } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? "'" : '"';
            token = {
                type: "string",
                sourceIndex: pos,
                quote: quote
            };
            do {
                escape = false;
                next = value.indexOf(quote, next + 1);
                if (~next) {
                    escapePos = next;
                    while(value.charCodeAt(escapePos - 1) === backslash){
                        escapePos -= 1;
                        escape = !escape;
                    }
                } else {
                    value += quote;
                    next = value.length - 1;
                    token.unclosed = true;
                }
            }while (escape)
            token.value = value.slice(pos + 1, next);
            token.sourceEndIndex = token.unclosed ? next : next + 1;
            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);
        // Comments
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            next = value.indexOf("*/", pos);
            token = {
                type: "comment",
                sourceIndex: pos,
                sourceEndIndex: next + 2
            };
            if (next === -1) {
                token.unclosed = true;
                next = value.length;
                token.sourceEndIndex = next;
            }
            token.value = value.slice(pos + 2, next);
            tokens.push(token);
            pos = next + 2;
            code = value.charCodeAt(pos);
        // Operation within calc
        } else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
            token = value[pos];
            tokens.push({
                type: "word",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token
            });
            pos += 1;
            code = value.charCodeAt(pos);
        // Dividers
        } else if (code === slash || code === comma || code === colon) {
            token = value[pos];
            tokens.push({
                type: "div",
                sourceIndex: pos - before.length,
                sourceEndIndex: pos + token.length,
                value: token,
                before: before,
                after: ""
            });
            before = "";
            pos += 1;
            code = value.charCodeAt(pos);
        // Open parentheses
        } else if (openParentheses === code) {
            // Whitespaces after open parentheses
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            }while (code <= 32)
            parenthesesOpenPos = pos;
            token = {
                type: "function",
                sourceIndex: pos - name.length,
                value: name,
                before: value.slice(parenthesesOpenPos + 1, next)
            };
            pos = next;
            if (name === "url" && code !== singleQuote && code !== doubleQuote) {
                next -= 1;
                do {
                    escape = false;
                    next = value.indexOf(")", next + 1);
                    if (~next) {
                        escapePos = next;
                        while(value.charCodeAt(escapePos - 1) === backslash){
                            escapePos -= 1;
                            escape = !escape;
                        }
                    } else {
                        value += ")";
                        next = value.length - 1;
                        token.unclosed = true;
                    }
                }while (escape)
                // Whitespaces before closed
                whitespacePos = next;
                do {
                    whitespacePos -= 1;
                    code = value.charCodeAt(whitespacePos);
                }while (code <= 32)
                if (parenthesesOpenPos < whitespacePos) {
                    if (pos !== whitespacePos + 1) token.nodes = [
                        {
                            type: "word",
                            sourceIndex: pos,
                            sourceEndIndex: whitespacePos + 1,
                            value: value.slice(pos, whitespacePos + 1)
                        }
                    ];
                    else token.nodes = [];
                    if (token.unclosed && whitespacePos + 1 !== next) {
                        token.after = "";
                        token.nodes.push({
                            type: "space",
                            sourceIndex: whitespacePos + 1,
                            sourceEndIndex: next,
                            value: value.slice(whitespacePos + 1, next)
                        });
                    } else {
                        token.after = value.slice(whitespacePos + 1, next);
                        token.sourceEndIndex = next;
                    }
                } else {
                    token.after = "";
                    token.nodes = [];
                }
                pos = next + 1;
                token.sourceEndIndex = token.unclosed ? next : pos;
                code = value.charCodeAt(pos);
                tokens.push(token);
            } else {
                balanced += 1;
                token.after = "";
                token.sourceEndIndex = pos + 1;
                tokens.push(token);
                stack.push(token);
                tokens = token.nodes = [];
                parent = token;
            }
            name = "";
        // Close parentheses
        } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);
            parent.after = after;
            parent.sourceEndIndex += after.length;
            after = "";
            balanced -= 1;
            stack[stack.length - 1].sourceEndIndex = pos;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;
        // Words
        } else {
            next = pos;
            do {
                if (code === backslash) next += 1;
                next += 1;
                code = value.charCodeAt(next);
            }while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced))
            token = value.slice(pos, next);
            if (openParentheses === code) name = token;
            else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) tokens.push({
                type: "unicode-range",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            else tokens.push({
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: next,
                value: token
            });
            pos = next;
        }
    }
    for(pos = stack.length - 1; pos; pos -= 1){
        stack[pos].unclosed = true;
        stack[pos].sourceEndIndex = value.length;
    }
    return stack[0].nodes;
};

},{}],"5phvw":[function(require,module,exports) {
module.exports = function walk(nodes, cb, bubble) {
    var i, max, node, result;
    for(i = 0, max = nodes.length; i < max; i += 1){
        node = nodes[i];
        if (!bubble) result = cb(node, i, nodes);
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) walk(node.nodes, cb, bubble);
        if (bubble) cb(node, i, nodes);
    }
};

},{}],"hal54":[function(require,module,exports) {
function stringifyNode(node, custom) {
    var type = node.type;
    var value = node.value;
    var buf;
    var customResult;
    if (custom && (customResult = custom(node)) !== undefined) return customResult;
    else if (type === "word" || type === "space") return value;
    else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
    } else if (type === "comment") return "/*" + value + (node.unclosed ? "" : "*/");
    else if (type === "div") return (node.before || "") + value + (node.after || "");
    else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes, custom);
        if (type !== "function") return buf;
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
    }
    return value;
}
function stringify(nodes, custom) {
    var result, i;
    if (Array.isArray(nodes)) {
        result = "";
        for(i = nodes.length - 1; ~i; i -= 1)result = stringifyNode(nodes[i], custom) + result;
        return result;
    }
    return stringifyNode(nodes, custom);
}
module.exports = stringify;

},{}],"lebww":[function(require,module,exports) {
var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);
// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
    var code = value.charCodeAt(0);
    var nextCode;
    if (code === plus || code === minus) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) return true;
        var nextNextCode = value.charCodeAt(2);
        if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) return true;
        return false;
    }
    if (code === dot) {
        nextCode = value.charCodeAt(1);
        if (nextCode >= 48 && nextCode <= 57) return true;
        return false;
    }
    if (code >= 48 && code <= 57) return true;
    return false;
}
// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
    var pos = 0;
    var length = value.length;
    var code;
    var nextCode;
    var nextNextCode;
    if (length === 0 || !likeNumber(value)) return false;
    code = value.charCodeAt(pos);
    if (code === plus || code === minus) pos++;
    while(pos < length){
        code = value.charCodeAt(pos);
        if (code < 48 || code > 57) break;
        pos += 1;
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    if (code === dot && nextCode >= 48 && nextCode <= 57) {
        pos += 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) break;
            pos += 1;
        }
    }
    code = value.charCodeAt(pos);
    nextCode = value.charCodeAt(pos + 1);
    nextNextCode = value.charCodeAt(pos + 2);
    if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
        pos += nextCode === plus || nextCode === minus ? 3 : 2;
        while(pos < length){
            code = value.charCodeAt(pos);
            if (code < 48 || code > 57) break;
            pos += 1;
        }
    }
    return {
        number: value.slice(0, pos),
        unit: value.slice(pos)
    };
};

},{}],"5zWlR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function runPostcss(postcss, content, filename, plugins, parsers, index = 0) {
    return postcss(plugins).process(content, {
        from: filename,
        parser: parsers[index]
    }).catch((err)=>{
        // If there's an error, try the next parser
        index++;
        // If there are no parsers left, throw it
        if (index === parsers.length) throw err;
        return runPostcss(postcss, content, filename, plugins, parsers, index);
    });
}
function processContent(result, content, filename, options, postcss) {
    const { plugins  } = options;
    const parserList = [];
    // Syntax support:
    if (result.opts.syntax && result.opts.syntax.parse) parserList.push(result.opts.syntax.parse);
    // Parser support:
    if (result.opts.parser) parserList.push(result.opts.parser);
    // Try the default as a last resort:
    parserList.push(null);
    return runPostcss(postcss, content, filename, plugins, parserList);
}
exports.default = processContent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","iyddy"], null, "parcelRequire4ef6")

//# sourceMappingURL=postcss-loader.010a84d5.js.map
