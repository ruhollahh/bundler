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

},{"react-refresh/runtime":"3FsDI"}],"3FsDI":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"dtx5b"}],"dtx5b":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"8wcER":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
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

},{}],"h7u1C":[function(require,module,exports) {
var _bundler = require("./bundler/bundler");
var _errorListener = require("./error-listener");
var _util = require("./errors/util");
var _console = require("./integrations/console");
var _integrations = require("./integrations/integrations");
var _iframe = require("./protocol/iframe");
var _debouncer = require("./utils/Debouncer");
var _disposable = require("./utils/Disposable");
var _document = require("./utils/document");
var _logger = require("./utils/logger");
const bundlerStartTime = Date.now();
class SandpackInstance {
    disposableStore = new _disposable.DisposableStore();
    compileDebouncer = new _debouncer.Debouncer(50);
    lastHeight = 0;
    constructor(){
        this.messageBus = new _iframe.IFrameParentMessageBus();
        this.integrations = new _integrations.Integrations(this.messageBus);
        this.bundler = new _bundler.Bundler({
            messageBus: this.messageBus
        });
        const disposeOnMessage = this.messageBus.onMessage((msg)=>{
            this.handleParentMessage(msg);
        });
        this.disposableStore.add(disposeOnMessage);
        this.init().catch(_logger.error);
        _errorListener.listenToRuntimeErrors(this.bundler, (runtimeError)=>{
            const stackFrame = runtimeError.stackFrames[0] ?? {};
            this.messageBus.sendMessage('action', {
                action: 'show-error',
                title: 'Runtime Exception',
                line: stackFrame._originalLineNumber,
                column: stackFrame._originalColumnNumber,
                // @ts-ignore
                path: runtimeError.error.path,
                message: runtimeError.error.message,
                payload: {
                    frames: runtimeError.stackFrames
                }
            });
        });
        // Console logic
        _console.hookConsole((log)=>{
            this.messageBus.sendMessage('console', {
                log
            });
        });
        this.messageBus.onMessage((data)=>{
            if (typeof data === 'object' && data.type === 'evaluate') {
                const result = _console.handleEvaluate(data.command);
                if (result) this.messageBus.sendMessage('console', result);
            }
        });
    }
    handleParentMessage(message) {
        switch(message.type){
            case 'compile':
                this.compileDebouncer.debounce(()=>this.handleCompile(message).catch(_logger.error)
                );
                break;
            case 'refresh':
                window.location.reload();
                this.messageBus.sendMessage('refresh');
                break;
        }
    }
    sendResizeEvent = ()=>{
        const height = _document.getDocumentHeight();
        if (this.lastHeight !== height) this.messageBus.sendMessage('resize', {
            height
        });
        this.lastHeight = height;
    };
    initResizeEvent() {
        const resizePolling = ()=>{
            if (this.resizePollingTimer) clearInterval(this.resizePollingTimer);
            this.resizePollingTimer = setInterval(this.sendResizeEvent, 300);
        };
        resizePolling();
        /**
     * Ideally we should only use a `MutationObserver` to trigger a resize event,
     * however, we noted that it's not 100% reliable, so we went for polling strategy as well
     */ let throttle;
        const observer = new MutationObserver(()=>{
            if (throttle === undefined) {
                this.sendResizeEvent();
                throttle = setTimeout(()=>{
                    throttle = undefined;
                }, 300);
            }
        });
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true
        });
    }
    async init() {
        this.messageBus.sendMessage('initialized');
        this.bundler.onStatusChange((newStatus)=>{
            this.messageBus.sendMessage('status', {
                status: newStatus
            });
        });
    }
    async handleCompile(compileRequest) {
        if (compileRequest.logLevel != null) _logger.setLogLevel(compileRequest.logLevel);
        _logger.debug(_logger.logFactory('Init'));
        // -- FileSystem
        const initStartTimeFileSystem = Date.now();
        _logger.debug(_logger.logFactory('FileSystem'));
        this.bundler.configureFS({
            hasAsyncFileResolver: compileRequest.hasFileResolver
        });
        this.messageBus.sendMessage('start', {
            firstLoad: this.bundler.isFirstLoad
        });
        this.messageBus.sendMessage('status', {
            status: 'initializing'
        });
        if (this.bundler.isFirstLoad) this.bundler.resetModules();
        _logger.debug(_logger.logFactory('FileSystem', `finished in ${Date.now() - initStartTimeFileSystem}ms`));
        // -- Load integrations
        _logger.debug(_logger.logFactory('Integrations'));
        const initStartTimeIntegration = Date.now();
        if (compileRequest.reactDevTools) try {
            this.integrations?.load(`react-devtools-${compileRequest.reactDevTools}`).catch(_logger.error);
        } catch (err) {
            _logger.error(err);
        }
        _logger.debug(_logger.logFactory('Integrations', `finished in ${Date.now() - initStartTimeIntegration}ms`));
        // --- Load preset
        _logger.groupCollapsed(_logger.logFactory('Preset and transformers'));
        const initStartTime = Date.now();
        await this.bundler.initPreset(compileRequest.template);
        _logger.debug(_logger.logFactory('Preset and transformers', `finished in ${Date.now() - initStartTime}ms`));
        _logger.groupEnd();
        // --- Bundling / Compiling
        _logger.groupCollapsed(_logger.logFactory('Bundling'));
        const bundlingStartTime = Date.now();
        const files = Object.values(compileRequest.modules);
        const evaluate = await this.bundler.compile(files).then((val)=>{
            this.messageBus.sendMessage('done', {
                compilatonError: false
            });
            return val;
        }).catch((error)=>{
            _logger.error(error);
            this.messageBus.sendMessage('action', _util.errorMessage(error));
            this.messageBus.sendMessage('done', {
                compilatonError: true
            });
        }).finally(()=>{
            _logger.debug(_logger.logFactory('Bundling', `finished in  ${Date.now() - bundlingStartTime}ms`));
            _logger.groupEnd();
        });
        // --- Replace HTML
        this.bundler.replaceHTML();
        // --- Evaluation
        if (evaluate) {
            this.messageBus.sendMessage('status', {
                status: 'evaluating'
            });
            try {
                _logger.groupCollapsed(_logger.logFactory('Evaluation'));
                const evalStartTime = Date.now();
                evaluate();
                this.messageBus.sendMessage('success');
                _logger.debug(_logger.logFactory('Evaluation', `finished in ${Date.now() - evalStartTime}ms`));
                _logger.groupEnd();
            } catch (error) {
                _logger.error(error);
                this.messageBus.sendMessage('action', _util.errorMessage(error) // TODO: create a evaluation error
                );
            }
            this.initResizeEvent();
        }
        _logger.debug(_logger.logFactory('Finished', `in ${Date.now() - bundlerStartTime}ms`));
        this.messageBus.sendMessage('status', {
            status: 'idle'
        });
    }
    dispose() {
        this.disposableStore.dispose();
    }
}
new SandpackInstance();

},{"./bundler/bundler":"e5RJx","./error-listener":"6hNgW","./errors/util":"gbdOI","./integrations/console":"2BNX5","./integrations/integrations":"1zZsB","./protocol/iframe":"np9oB","./utils/Debouncer":"jVnsy","./utils/Disposable":"jd2DF","./utils/document":"11wQl","./utils/logger":"4rlpq"}],"e5RJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bundler", ()=>Bundler
);
var _bundlerError = require("../errors/BundlerError");
var _fileSystem = require("../FileSystem");
var _iframeFSLayer = require("../FileSystem/layers/IFrameFSLayer");
var _memoryFSLayer = require("../FileSystem/layers/MemoryFSLayer");
var _nodeModuleFSLayer = require("../FileSystem/layers/NodeModuleFSLayer");
var _resolver = require("../resolver/resolver");
var _emitter = require("../utils/emitter");
var _html = require("../utils/html");
var _logger = require("../utils/logger");
var _namedPromiseQueue = require("../utils/NamedPromiseQueue");
var _nullthrows = require("../utils/nullthrows");
var _moduleRegistry = require("./module-registry");
var _module = require("./module/Module");
var _registry = require("./presets/registry");
class Bundler {
    lastHTML = null;
    parsedPackageJSON = null;
    // Map filepath => Module
    modules = new Map();
    resolverCache = new Map();
    hasHMR = false;
    isFirstLoad = true;
    // Map from module id => parent module ids
    initiators = new Map();
    runtimes = [];
    onStatusChangeEmitter = new _emitter.Emitter();
    onStatusChange = this.onStatusChangeEmitter.event;
    _previousDepString = null;
    constructor(options){
        this.transformationQueue = new _namedPromiseQueue.NamedPromiseQueue(true, 50);
        this.moduleRegistry = new _moduleRegistry.ModuleRegistry(this);
        const memoryFS = new _memoryFSLayer.MemoryFSLayer();
        memoryFS.writeFile('//empty.js', 'module.exports = () => {};');
        this.iFrameFsLayer = new _iframeFSLayer.IFrameFSLayer(memoryFS, options.messageBus);
        this.fs = new _fileSystem.FileSystem([
            memoryFS,
            this.iFrameFsLayer,
            new _nodeModuleFSLayer.NodeModuleFSLayer(this.moduleRegistry)
        ]);
        this.messageBus = options.messageBus;
    }
    /** Reset all compilation data */ resetModules() {
        this.preset = undefined;
        this.modules = new Map();
        this.resolverCache = new Map();
    }
    configureFS(opts) {
        if (opts.hasAsyncFileResolver) this.iFrameFsLayer.enableIFrameFS();
    }
    async initPreset(preset) {
        if (!this.preset) {
            this.preset = _registry.getPreset(preset);
            await this.preset.init(this);
        }
    }
    registerRuntime(id, code) {
        const filepath = `/node_modules/__csb_runtimes/${id}.js`;
        this.fs.writeFile(filepath, code);
        const module = new _module.Module(filepath, code, false, this);
        this.modules.set(filepath, module);
        this.runtimes.push(filepath);
    }
    getModule(filepath) {
        return this.modules.get(filepath);
    }
    enableHMR() {
        this.hasHMR = true;
    }
    getInitiators(id) {
        return this.initiators.get(id) ?? new Set();
    }
    addInitiator(moduleId, initiatorId) {
        const initiators = this.getInitiators(moduleId);
        initiators.add(initiatorId);
        this.initiators.set(moduleId, initiators);
    }
    async processPackageJSON() {
        const foundPackageJSON = await this.fs.readFileAsync('/package.json');
        try {
            this.parsedPackageJSON = JSON.parse(foundPackageJSON);
        } catch (err) {
            // Makes the bundler a bit more error-prone to invalid pkg.json's
            if (!this.parsedPackageJSON) throw err;
        }
    }
    async resolveEntryPoint() {
        if (!this.parsedPackageJSON) throw new _bundlerError.BundlerError('No parsed package.json found!');
        if (!this.preset) throw new _bundlerError.BundlerError('Preset has not been loaded yet');
        const potentialEntries = new Set([
            this.parsedPackageJSON.main,
            this.parsedPackageJSON.source,
            this.parsedPackageJSON.module,
            ...this.preset.defaultEntryPoints, 
        ].filter((e)=>typeof e === 'string'
        ));
        for (let potentialEntry of potentialEntries){
            if (typeof potentialEntry === 'string') try {
                // Normalize path
                const entryPoint = potentialEntry[0] !== '.' && potentialEntry[0] !== '/' ? `./${potentialEntry}` : potentialEntry;
                const resolvedEntryPont = await this.resolveAsync(entryPoint, '/index.js');
                return resolvedEntryPont;
            } catch (err) {
                _logger.debug(`Could not resolve entrypoint ${potentialEntry}`);
                _logger.debug(err);
            }
        }
        throw new _bundlerError.BundlerError(`Could not resolve entry point, potential entrypoints: ${Array.from(potentialEntries).join(', ')}. You can define one by changing the "main" field in package.json.`);
    }
    async loadNodeModules() {
        if (!this.parsedPackageJSON) throw new _bundlerError.BundlerError('No parsed pkg.json found!');
        let dependencies = this.parsedPackageJSON.dependencies;
        if (dependencies) {
            dependencies = _nullthrows.nullthrows(this.preset, 'Preset needs to be defined when loading node modules').augmentDependencies(dependencies);
            await this.moduleRegistry.fetchManifest(dependencies);
            // Load all modules
            await this.moduleRegistry.preloadModules();
            await this.moduleRegistry.loadModuleDependencies();
        }
    }
    async resolveAsync(specifier, filename, extensions = [
        '.js',
        '.jsx',
        '.mjs',
        '.cjs',
        '.ts',
        '.tsx'
    ]) {
        try {
            const resolved = await _resolver.resolveAsync(specifier, {
                filename,
                extensions,
                isFile: this.fs.isFile,
                readFile: this.fs.readFile,
                resolverCache: this.resolverCache
            });
            return resolved;
        } catch (err) {
            _logger.error(err);
            _logger.error(Array.from(this.modules));
            // logger.error(Array.from(this.fs.files));
            throw err;
        }
    }
    async _transformModule(path) {
        let module = this.modules.get(path);
        if (module) {
            if (module.compiled != null) return Promise.resolve(module);
            else // compilation got reset, we re-read the source to ensure it's the latest version.
            // reset happens mostly when we receive changes from the editor, so this ensures we actually output the changes...
            module.source = await this.fs.readFileAsync(path);
        } else {
            const content = await this.fs.readFileAsync(path);
            module = new _module.Module(path, content, false, this);
            this.modules.set(path, module);
        }
        await module.compile();
        for (let dep of module.dependencies){
            const resolvedDependency = await this.resolveAsync(dep, module.filepath);
            this.transformModule(resolvedDependency);
        }
        return module;
    }
    /** Transform file at a certain absolute path */ async transformModule(path) {
        let module = this.modules.get(path);
        if (module && module.compiled != null) return Promise.resolve(module);
        return this.transformationQueue.addEntry(path, ()=>{
            return this._transformModule(path);
        });
    }
    async moduleFinishedPromise(id, moduleIds = new Set()) {
        if (moduleIds.has(id)) return;
        const foundPromise = this.transformationQueue.getItem(id);
        if (foundPromise) await foundPromise;
        const asset = this.modules.get(id);
        if (!asset) throw new _bundlerError.BundlerError(`Asset not in the compilation tree ${id}`);
        else {
            if (asset.compilationError != null) throw asset.compilationError;
            else if (asset.compiled == null) throw new _bundlerError.BundlerError(`Asset ${id} has not been compiled`);
        }
        moduleIds.add(id);
        for (const dep of asset.dependencies){
            if (!moduleIds.has(dep)) try {
                await this.moduleFinishedPromise(dep, moduleIds);
            } catch (err) {
                _logger.debug(`Failed awaiting transpilation ${dep} required by ${id}`);
                throw err;
            }
        }
    }
    /** writes any new files and returns a list of updated modules */ writeNewFiles(files) {
        const res = [];
        for (let file of files){
            try {
                const content = this.fs.readFileSync(file.path);
                if (content !== file.code) res.push(file.path);
            } catch (err) {
            // file does not exist
            }
            this.fs.writeFile(file.path, file.code);
        }
        return res;
    }
    async compile(files) {
        if (!this.preset) throw new _bundlerError.BundlerError('Cannot compile before preset has been initialized');
        this.onStatusChangeEmitter.fire('installing-dependencies');
        // TODO: Have more fine-grained cache invalidation for the resolver
        // Reset resolver cache
        this.resolverCache = new Map();
        this.fs.resetCache();
        let changedFiles = [];
        if (!this.isFirstLoad) {
            _logger.debug('Started incremental compilation');
            changedFiles = this.writeNewFiles(files);
            if (!changedFiles.length) {
                _logger.debug('Skipping compilation, no changes detected');
                return ()=>{};
            }
            // If it's a change and we don't have any hmr modules we simply reload the application
            if (!this.hasHMR) {
                _logger.debug('HMR is not enabled, doing a full page refresh');
                window.location.reload();
                return ()=>{};
            }
        } else for (let file of files)this.fs.writeFile(file.path, file.code);
        if (changedFiles.length) {
            const promises = [];
            for (let changedFile of changedFiles){
                const module = this.getModule(changedFile);
                if (module) {
                    module.resetCompilation();
                    promises.push(this.transformModule(changedFile));
                }
            }
            await Promise.all(promises);
        }
        const pkgJsonChanged = changedFiles.find((f)=>f === '/package.json'
        );
        if (this.isFirstLoad || pkgJsonChanged) {
            _logger.debug('Loading node modules');
            await this.processPackageJSON();
            const depString = Object.entries(this.parsedPackageJSON?.dependencies || {}).map((v)=>`${v[0]}:${v[1]}`
            ).sort().join(',');
            if (this._previousDepString != null && depString !== this._previousDepString) {
                _logger.debug('Dependencies changed, reloading');
                location.reload();
                return ()=>{};
            }
            this._previousDepString = depString;
            await this.loadNodeModules();
        }
        this.onStatusChangeEmitter.fire('transpiling');
        // Transform runtimes
        if (this.isFirstLoad) for (const runtime1 of this.runtimes){
            await this.transformModule(runtime1);
            await this.moduleFinishedPromise(runtime1);
        }
        // Resolve entrypoints
        const resolvedEntryPoint = await this.resolveEntryPoint();
        _logger.debug('Resolved entrypoint:', resolvedEntryPoint);
        // Transform entrypoint and deps
        const entryModule = await this.transformModule(resolvedEntryPoint);
        await this.moduleFinishedPromise(resolvedEntryPoint);
        _logger.debug('Bundling finished, manifest:');
        _logger.debug(this.modules);
        entryModule.isEntry = true;
        const transpiledModules = Array.from(this.modules, ([name, value])=>{
            return {
                /**
         * TODO: adds trailing for backwards compatibility
         */ [name + ':']: {
                    source: {
                        isEntry: entryModule.filepath === value.filepath,
                        fileName: value.filepath,
                        compiledCode: value.compiled
                    }
                }
            };
        }).reduce((prev, curr)=>{
            return {
                ...prev,
                ...curr
            };
        }, {});
        this.messageBus.sendMessage('state', {
            state: {
                transpiledModules
            }
        });
        return ()=>{
            // Evaluate
            _logger.debug('Evaluating...');
            if (this.isFirstLoad) {
                for (const runtime of this.runtimes){
                    const module = this.modules.get(runtime);
                    if (!module) throw new _bundlerError.BundlerError(`Runtime ${runtime} is not defined`);
                    else {
                        _logger.debug(`Loading runtime ${runtime}...`);
                        module.evaluate();
                    }
                }
                entryModule.evaluate();
                this.isFirstLoad = false;
            } else {
                this.modules.forEach((module)=>{
                    if (module.hot.hmrConfig?.isDirty()) module.evaluate();
                });
                // TODO: Validate that this logic actually works...
                // Check if any module has been invalidated, because in that case we need to
                // restart evaluation.
                const invalidatedModules = Object.values(this.modules).filter((m)=>{
                    if (m.hot.hmrConfig?.invalidated) {
                        m.resetCompilation();
                        this.transformModule(m.filepath);
                        return true;
                    }
                    return false;
                });
                if (invalidatedModules.length > 0) return this.compile(files);
            }
        };
    }
    // TODO: Support template languages...
    getHTMLEntry() {
        const foundHTMLFilepath = [
            '/index.html',
            '/public/index.html'
        ].find((filepath)=>this.fs.isFileSync(filepath)
        );
        if (foundHTMLFilepath) return this.fs.readFileSync(foundHTMLFilepath);
        else {
            if (!this.preset) throw new _bundlerError.BundlerError('Bundler has not been initialized with a preset');
            return this.preset.defaultHtmlBody;
        }
    }
    replaceHTML() {
        const html = this.getHTMLEntry() ?? '<div id="root"></div>';
        if (this.lastHTML) {
            if (this.lastHTML !== html) window.location.reload();
            return;
        } else {
            this.lastHTML = html;
            _html.replaceHTML(html);
        }
    }
}

},{"../errors/BundlerError":"3sU3O","../FileSystem":"bWhBC","../FileSystem/layers/IFrameFSLayer":"3XRQN","../FileSystem/layers/MemoryFSLayer":"lpQo7","../FileSystem/layers/NodeModuleFSLayer":"7vCP3","../resolver/resolver":"3dbTI","../utils/emitter":"2Vblt","../utils/html":"k7RAK","../utils/logger":"4rlpq","../utils/NamedPromiseQueue":"gn4Tf","../utils/nullthrows":"ecdIv","./module-registry":"k8uXN","./module/Module":"hTz7X","./presets/registry":"z5Yb6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sU3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BundlerError", ()=>BundlerError
);
var _sandpackError = require("./SandpackError");
class BundlerError extends _sandpackError.SandpackError {
    code = 'BUNDLER_ERROR';
    constructor(message, path){
        super(message);
        this.title = 'Unknown error';
        this.message = message;
        this.path = path;
    }
}

},{"./SandpackError":"3HAYS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HAYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SandpackError", ()=>SandpackError
);
class SandpackError extends Error {
    code = 'SANDPACK_ERROR';
    constructor(message){
        super(message);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"bWhBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FileSystem", ()=>FileSystem
);
var _gensync = require("gensync");
var _gensyncDefault = parcelHelpers.interopDefault(_gensync);
class FileSystem {
    constructor(layers){
        this.layers = layers;
        this.readFile = _gensyncDefault.default({
            sync: this.readFileSync.bind(this),
            async: this.readFileAsync.bind(this)
        });
        this.isFile = _gensyncDefault.default({
            sync: this.isFileSync.bind(this),
            async: this.isFileAsync.bind(this)
        });
    }
    resetCache() {
        for (const layer of this.layers)layer.resetCache();
    }
    writeFile(path, content) {
        for (let layer of this.layers){
            if (layer.shouldSkipLayer(path)) continue;
            layer.writeFile(path, content);
        }
    }
    readFileSync(path) {
        let lastError = null;
        for (let layer of this.layers){
            if (layer.shouldSkipLayer(path)) continue;
            try {
                const result = layer.readFileSync(path);
                return result;
            } catch (err) {
                lastError = err;
            }
        }
        if (!lastError) lastError = new Error(`File ${path} not found`);
        throw lastError;
    }
    async readFileAsync(path) {
        let lastError = null;
        for (let layer of this.layers){
            if (layer.shouldSkipLayer(path)) continue;
            try {
                const result = await layer.readFileAsync(path);
                return result;
            } catch (err) {
                lastError = err;
            }
        }
        if (!lastError) lastError = new Error(`File ${path} not found`);
        throw lastError;
    }
    isFileSync(path) {
        for (let layer of this.layers){
            if (layer.shouldSkipLayer(path)) continue;
            try {
                if (layer.isFileSync(path)) return true;
            } catch (err) {
            // console.error(err);
            }
        }
        return false;
    }
    async isFileAsync(path) {
        for (let layer of this.layers){
            if (layer.shouldSkipLayer(path)) continue;
            try {
                const exists = await layer.isFileAsync(path);
                if (exists) return true;
            } catch (err) {
            // console.error(err);
            }
        }
        return false;
    }
}

},{"gensync":"AqTPz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"AqTPz":[function(require,module,exports) {
"use strict";
// These use the global symbol registry so that multiple copies of this
// library can work together in case they are not deduped.
const GENSYNC_START = Symbol.for("gensync:v1:start");
const GENSYNC_SUSPEND = Symbol.for("gensync:v1:suspend");
const GENSYNC_EXPECTED_START = "GENSYNC_EXPECTED_START";
const GENSYNC_EXPECTED_SUSPEND = "GENSYNC_EXPECTED_SUSPEND";
const GENSYNC_OPTIONS_ERROR = "GENSYNC_OPTIONS_ERROR";
const GENSYNC_RACE_NONEMPTY = "GENSYNC_RACE_NONEMPTY";
const GENSYNC_ERRBACK_NO_CALLBACK = "GENSYNC_ERRBACK_NO_CALLBACK";
module.exports = Object.assign(function gensync(optsOrFn) {
    let genFn = optsOrFn;
    if (typeof optsOrFn !== "function") genFn = newGenerator(optsOrFn);
    else genFn = wrapGenerator(optsOrFn);
    return Object.assign(genFn, makeFunctionAPI(genFn));
}, {
    all: buildOperation({
        name: "all",
        arity: 1,
        sync: function(args) {
            const items = Array.from(args[0]);
            return items.map((item)=>evaluateSync(item)
            );
        },
        async: function(args, resolve, reject) {
            const items = Array.from(args[0]);
            if (items.length === 0) {
                Promise.resolve().then(()=>resolve([])
                );
                return;
            }
            let count = 0;
            const results = items.map(()=>undefined
            );
            items.forEach((item, i)=>{
                evaluateAsync(item, (val)=>{
                    results[i] = val;
                    count += 1;
                    if (count === results.length) resolve(results);
                }, reject);
            });
        }
    }),
    race: buildOperation({
        name: "race",
        arity: 1,
        sync: function(args) {
            const items = Array.from(args[0]);
            if (items.length === 0) throw makeError("Must race at least 1 item", GENSYNC_RACE_NONEMPTY);
            return evaluateSync(items[0]);
        },
        async: function(args, resolve, reject) {
            const items = Array.from(args[0]);
            if (items.length === 0) throw makeError("Must race at least 1 item", GENSYNC_RACE_NONEMPTY);
            for (const item of items)evaluateAsync(item, resolve, reject);
        }
    })
});
/**
 * Given a generator function, return the standard API object that executes
 * the generator and calls the callbacks.
 */ function makeFunctionAPI(genFn) {
    const fns = {
        sync: function(...args) {
            return evaluateSync(genFn.apply(this, args));
        },
        async: function(...args) {
            return new Promise((resolve, reject)=>{
                evaluateAsync(genFn.apply(this, args), resolve, reject);
            });
        },
        errback: function(...args) {
            const cb = args.pop();
            if (typeof cb !== "function") throw makeError("Asynchronous function called without callback", GENSYNC_ERRBACK_NO_CALLBACK);
            let gen;
            try {
                gen = genFn.apply(this, args);
            } catch (err1) {
                cb(err1);
                return;
            }
            evaluateAsync(gen, (val)=>cb(undefined, val)
            , (err)=>cb(err)
            );
        }
    };
    return fns;
}
function assertTypeof(type, name, value, allowUndefined) {
    if (typeof value === type || allowUndefined && typeof value === "undefined") return;
    let msg;
    if (allowUndefined) msg = `Expected opts.${name} to be either a ${type}, or undefined.`;
    else msg = `Expected opts.${name} to be a ${type}.`;
    throw makeError(msg, GENSYNC_OPTIONS_ERROR);
}
function makeError(msg, code) {
    return Object.assign(new Error(msg), {
        code
    });
}
/**
 * Given an options object, return a new generator that dispatches the
 * correct handler based on sync or async execution.
 */ function newGenerator({ name , arity , sync , async , errback  }) {
    assertTypeof("string", "name", name, true);
    assertTypeof("number", "arity", arity, true);
    assertTypeof("function", "sync", sync);
    assertTypeof("function", "async", async, true);
    assertTypeof("function", "errback", errback, true);
    if (async && errback) throw makeError("Expected one of either opts.async or opts.errback, but got _both_.", GENSYNC_OPTIONS_ERROR);
    if (typeof name !== "string") {
        let fnName;
        if (errback && errback.name && errback.name !== "errback") fnName = errback.name;
        if (async && async.name && async.name !== "async") fnName = async.name.replace(/Async$/, "");
        if (sync && sync.name && sync.name !== "sync") fnName = sync.name.replace(/Sync$/, "");
        if (typeof fnName === "string") name = fnName;
    }
    if (typeof arity !== "number") arity = sync.length;
    return buildOperation({
        name,
        arity,
        sync: function(args) {
            return sync.apply(this, args);
        },
        async: function(args, resolve, reject) {
            if (async) async.apply(this, args).then(resolve, reject);
            else if (errback) errback.call(this, ...args, (err, value)=>{
                if (err == null) resolve(value);
                else reject(err);
            });
            else resolve(sync.apply(this, args));
        }
    });
}
function wrapGenerator(genFn) {
    return setFunctionMetadata(genFn.name, genFn.length, function(...args) {
        return genFn.apply(this, args);
    });
}
function buildOperation({ name , arity , sync , async  }) {
    return setFunctionMetadata(name, arity, function*(...args) {
        const resume = yield GENSYNC_START;
        if (!resume) {
            // Break the tail call to avoid a bug in V8 v6.X with --harmony enabled.
            const res = sync.call(this, args);
            return res;
        }
        let result;
        try {
            async.call(this, args, (value)=>{
                if (result) return;
                result = {
                    value
                };
                resume();
            }, (err)=>{
                if (result) return;
                result = {
                    err
                };
                resume();
            });
        } catch (err) {
            result = {
                err
            };
            resume();
        }
        // Suspend until the callbacks run. Will resume synchronously if the
        // callback was already called.
        yield GENSYNC_SUSPEND;
        if (result.hasOwnProperty("err")) throw result.err;
        return result.value;
    });
}
function evaluateSync(gen) {
    let value;
    while(!({ value  } = gen.next()).done)assertStart(value, gen);
    return value;
}
function evaluateAsync(gen, resolve, reject) {
    (function step() {
        try {
            let value;
            while(!({ value  } = gen.next()).done){
                assertStart(value, gen);
                // If this throws, it is considered to have broken the contract
                // established for async handlers. If these handlers are called
                // synchronously, it is also considered bad behavior.
                let sync = true;
                let didSyncResume = false;
                const out = gen.next(()=>{
                    if (sync) didSyncResume = true;
                    else step();
                });
                sync = false;
                assertSuspend(out, gen);
                if (!didSyncResume) // Callback wasn't called synchronously, so break out of the loop
                // and let it call 'step' later.
                return;
            }
            return resolve(value);
        } catch (err) {
            return reject(err);
        }
    })();
}
function assertStart(value, gen) {
    if (value === GENSYNC_START) return;
    throwError(gen, makeError(`Got unexpected yielded value in gensync generator: ${JSON.stringify(value)}. Did you perhaps mean to use 'yield*' instead of 'yield'?`, GENSYNC_EXPECTED_START));
}
function assertSuspend({ value , done  }, gen) {
    if (!done && value === GENSYNC_SUSPEND) return;
    throwError(gen, makeError(done ? "Unexpected generator completion. If you get this, it is probably a gensync bug." : `Expected GENSYNC_SUSPEND, got ${JSON.stringify(value)}. If you get this, it is probably a gensync bug.`, GENSYNC_EXPECTED_SUSPEND));
}
function throwError(gen, err) {
    // Call `.throw` so that users can step in a debugger to easily see which
    // 'yield' passed an unexpected value. If the `.throw` call didn't throw
    // back to the generator, we explicitly do it to stop the error
    // from being swallowed by user code try/catches.
    if (gen.throw) gen.throw(err);
    throw err;
}
function isIterable(value) {
    return !!value && (typeof value === "object" || typeof value === "function") && !value[Symbol.iterator];
}
function setFunctionMetadata(name, arity, fn) {
    if (typeof name === "string") {
        // This should always work on the supported Node versions, but for the
        // sake of users that are compiling to older versions, we check for
        // configurability so we don't throw.
        const nameDesc = Object.getOwnPropertyDescriptor(fn, "name");
        if (!nameDesc || nameDesc.configurable) Object.defineProperty(fn, "name", Object.assign(nameDesc || {}, {
            configurable: true,
            value: name
        }));
    }
    if (typeof arity === "number") {
        const lengthDesc = Object.getOwnPropertyDescriptor(fn, "length");
        if (!lengthDesc || lengthDesc.configurable) Object.defineProperty(fn, "length", Object.assign(lengthDesc || {}, {
            configurable: true,
            value: arity
        }));
    }
    return fn;
}

},{}],"3XRQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IFrameFSLayer", ()=>IFrameFSLayer
);
var _logger = require("../../utils/logger");
var _fslayer = require("../FSLayer");
class IFrameFSLayer extends _fslayer.FSLayer {
    constructor(memoryFS, messageBus){
        super('iframe-fs');
        this.memoryFS = memoryFS;
        this.messageBus = messageBus;
        this.isBypassed = true;
        this.isFileCache = new Map();
    }
    enableIFrameFS() {
        this.isBypassed = false;
    }
    shouldSkipLayer(path) {
        return this.isBypassed || path.includes('node_modules');
    }
    resetCache() {
        this.isFileCache = new Map();
    }
    getIsFileCache(path) {
        return this.isFileCache.get(path);
    }
    writeFile(path, content) {
        this.memoryFS.writeFile(path, content);
    }
    readFileSync(path) {
        return this.memoryFS.readFileSync(path);
    }
    async readFileAsync(path) {
        try {
            return this.memoryFS.readFileSync(path);
        } catch (err) {
            const isFile = this.getIsFileCache(path);
            if (isFile !== false) try {
                const response = await this.messageBus.protocolRequest('fs', 'readFile', [
                    path
                ]);
                if (typeof response === 'string') {
                    this.writeFile(path, response);
                    return response;
                }
            } catch (err1) {
            // do nothing
            }
            this.isFileCache.set(path, false);
            throw err;
        }
    }
    isFileSync(path) {
        return this.memoryFS.isFileSync(path);
    }
    async isFileAsync(path) {
        let isFile = this.memoryFS.isFileSync(path);
        if (!isFile) {
            const cachedIsFile = this.getIsFileCache(path);
            if (cachedIsFile !== undefined) return cachedIsFile;
            try {
                const response = await this.messageBus.protocolRequest('fs', 'isFile', [
                    path
                ]);
                isFile = !!response;
                this.isFileCache.set(path, !!response);
                return !!response;
            } catch (err) {
                _logger.error(err);
            }
        }
        return isFile;
    }
}

},{"../../utils/logger":"4rlpq","../FSLayer":"118zi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rlpq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logFactory", ()=>logFactory
);
parcelHelpers.export(exports, "SandpackLogLevel", ()=>SandpackLogLevel
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
parcelHelpers.export(exports, "debug", ()=>debug
);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "error", ()=>error
);
parcelHelpers.export(exports, "groupCollapsed", ()=>groupCollapsed
);
parcelHelpers.export(exports, "groupEnd", ()=>groupEnd
);
/* eslint-disable no-console */ const steps = [
    'Init',
    'FileSystem',
    'Integrations',
    'Preset and transformers',
    'Bundling',
    'Evaluation',
    'Finished', 
];
const logFactory = (step, details = '')=>{
    const currentStep = steps.findIndex((name)=>name === step
    ) + 1;
    const total = steps.length;
    return `[${currentStep}/${total}]: ${step} ${details}`;
};
let SandpackLogLevel;
(function(SandpackLogLevel1) {
    SandpackLogLevel1[SandpackLogLevel1["None"] = 0] = "None";
    SandpackLogLevel1[SandpackLogLevel1["Error"] = 10] = "Error";
    SandpackLogLevel1[SandpackLogLevel1["Warning"] = 20] = "Warning";
    SandpackLogLevel1[SandpackLogLevel1["Info"] = 30] = "Info";
    SandpackLogLevel1[SandpackLogLevel1["Debug"] = 40] = "Debug";
})(SandpackLogLevel || (SandpackLogLevel = {}));
let logLevel = SandpackLogLevel.Debug;
function shouldLog(minimalLogLevel) {
    return logLevel >= minimalLogLevel;
}
function setLogLevel(newLogLevel) {
    logLevel = newLogLevel;
}
function debug(...data) {
    if (shouldLog(SandpackLogLevel.Debug)) console.log(...data);
}
function warn(...data) {
    if (shouldLog(SandpackLogLevel.Warning)) console.warn(...data);
}
function error(...data) {
    if (shouldLog(SandpackLogLevel.Error)) console.error(...data);
}
function groupCollapsed(...data) {
    if (shouldLog(SandpackLogLevel.Debug)) console.groupCollapsed(...data);
}
function groupEnd() {
    if (shouldLog(SandpackLogLevel.Debug)) console.groupEnd();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"118zi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FSLayer", ()=>FSLayer
);
class FSLayer {
    constructor(name){
        this.name = name;
    }
    shouldSkipLayer(path) {
        return false;
    }
    resetCache() {
        return;
    }
    writeFile(path, content) {
        return;
    }
    readFileSync(path) {
        throw new Error(`readFileSync is not implemented for fs#${this.name}`);
    }
    readFileAsync(path) {
        throw new Error(`readFileAsync is not implemented for fs#${this.name}`);
    }
    isFileSync(path) {
        throw new Error(`isFileSync is not implemented for fs#${this.name}`);
    }
    isFileAsync(path) {
        throw new Error(`isFileAsync is not implemented for fs#${this.name}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpQo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MemoryFSLayer", ()=>MemoryFSLayer
);
var _fslayer = require("../FSLayer");
class MemoryFSLayer extends _fslayer.FSLayer {
    files = new Map();
    constructor(){
        super('memory-fs');
    }
    writeFile(path, content) {
        this.files.set(path, content);
    }
    readFileSync(path) {
        const content = this.files.get(path);
        if (content == null) throw new Error(`File ${path} not found`);
        return content;
    }
    readFileAsync(path) {
        const content = this.files.get(path);
        if (content == null) return Promise.reject(new Error(`File ${path} not found`));
        return Promise.resolve(content);
    }
    isFileSync(path) {
        return this.files.has(path);
    }
    isFileAsync(path) {
        return Promise.resolve(this.files.has(path));
    }
}

},{"../FSLayer":"118zi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7vCP3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeModuleFSLayer", ()=>NodeModuleFSLayer
);
var _fetch = require("../../utils/fetch");
var _fslayer = require("../FSLayer");
const MODULE_PATH_RE = /^\/node_modules\/(@[^/]+\/[^/]+|[^@/]+)(.*)$/;
function getUnpkgSpecifier(moduleName, moduleVersion, path) {
    return `${moduleName}@${moduleVersion}/${path}`;
}
class NodeModuleFSLayer extends _fslayer.FSLayer {
    constructor(registry){
        super('node-module-fs');
        this.registry = registry;
        this.unpkgPromises = new Map();
        this.unpkgCache = new Map();
    }
    async _fetchUnpkgFile(specifier) {
        try {
            const response = await _fetch.retryFetch(`https://unpkg.com/${specifier}`, {
                maxRetries: 5
            });
            const content = await response.text();
            this.unpkgCache.set(specifier, content);
            return content;
        } catch (err) {
            this.unpkgCache.set(specifier, false);
            throw err;
        }
    }
    fetchUnpkgFile(moduleName, moduleVersion, path) {
        const specifier = getUnpkgSpecifier(moduleName, moduleVersion, path);
        const cachedContent = this.unpkgCache.get(specifier);
        if (typeof cachedContent === 'string') return Promise.resolve(cachedContent);
        else if (cachedContent === false) return Promise.reject('unpkg file not found');
        const promise = this.unpkgPromises.get(specifier) || this._fetchUnpkgFile(specifier);
        this.unpkgPromises.set(specifier, promise);
        return promise;
    }
    getUnpkgFile(moduleName, moduleVersion, path) {
        const specifier = getUnpkgSpecifier(moduleName, moduleVersion, path);
        const cachedContent = this.unpkgCache.get(specifier);
        if (typeof cachedContent === 'string') return cachedContent;
        throw new Error(`File not found in unpkg cache: ${moduleName}@${moduleVersion} - ${path}`);
    }
    /** Turns a path into [moduleName, relativePath] */ getModuleFromPath(path) {
        const parts = path.match(MODULE_PATH_RE);
        if (!parts) throw new Error(`Path is not a node_module: ${path}`);
        const moduleName = parts[1];
        const modulePath = parts[2] ?? '';
        return [
            moduleName,
            modulePath.substring(1)
        ];
    }
    readFileSync(path) {
        const [moduleName, modulePath] = this.getModuleFromPath(path);
        const module = this.registry.modules.get(moduleName);
        if (module) {
            const foundFile = module.files[modulePath];
            if (foundFile) {
                if (typeof foundFile === 'object') return foundFile.c;
                else return this.getUnpkgFile(moduleName, module.version, modulePath);
            }
        }
        throw new Error(`Module ${path} not found`);
    }
    async readFileAsync(path) {
        const [moduleName, modulePath] = this.getModuleFromPath(path);
        const module = this.registry.modules.get(moduleName);
        if (module) {
            const foundFile = module.files[modulePath];
            if (foundFile) {
                if (typeof foundFile === 'object') return foundFile.c;
                return this.fetchUnpkgFile(moduleName, module.version, modulePath);
            }
        }
        throw new Error(`Module ${path} not found`);
    }
    isFileSync(path) {
        try {
            const [moduleName, modulePath] = this.getModuleFromPath(path);
            const module = this.registry.modules.get(moduleName);
            if (module) return module.files[modulePath] != null;
        } catch (err) {
        // do nothing...
        }
        return false;
    }
    isFileAsync(path) {
        return Promise.resolve(this.isFileSync(path));
    }
}

},{"../../utils/fetch":"1VlZi","../FSLayer":"118zi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VlZi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Fetches a resource using the provided config and retries if it fails with a network or server availability error
 *
 * @param {RequestInfo} input: request info for fetch
 * @param {RequestInit} init: request options for fetch
 * @param {pRetry.PromiseRetryOptions} retryOptions: Retry configuration
 * @returns {Response}
 */ parcelHelpers.export(exports, "retryFetch", ()=>retryFetch
);
var _fetchError = require("../errors/FetchError");
var _sleep = require("./sleep");
// 408 is timeout
// 429 is too many requests
// 424 is failed dependency
// 499 is client closed connection
// 444 is connection closed without response
// 502 is Bad gateway
// 503 is Service Unavailable
// 504 is Gateway Timeout
// 599 is Network Connect Timeout Error
const ERROR_CODES_TO_RETRY = new Set([
    408,
    429,
    424,
    499,
    444,
    502,
    503,
    504,
    599
]);
function isRetryableStatus(status) {
    return ERROR_CODES_TO_RETRY.has(status);
}
async function retryFetch(input, init = {}, count = 0) {
    const { maxRetries =0 , retryDelay =500  } = init;
    if (count > maxRetries) throw new Error('Fetch failed, maximum retries exceeded');
    const shouldRetry = count < maxRetries;
    try {
        const result = await window.fetch(input, init);
        if (result.ok) return result;
        // Don't use p-retry it cannot be scope hoisted properly
        // See https://github.com/parcel-bundler/parcel/issues/7866
        const isRetryable = isRetryableStatus(result.status);
        if (!shouldRetry || !isRetryable) {
            const text = await result.text().catch(()=>''
            );
            throw new _fetchError.FetchError(result, text);
        }
    } catch (err) {
        if (!shouldRetry) throw err;
    }
    await _sleep.sleep(retryDelay);
    return retryFetch(input, init, count + 1);
}

},{"../errors/FetchError":"lU16X","./sleep":"3VMrr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lU16X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FetchError", ()=>FetchError
);
var _sandpackError = require("./SandpackError");
class FetchError extends _sandpackError.SandpackError {
    code = 'FETCH_ERROR';
    constructor(res, text){
        super(`Fetch failed with status ${res.status}: ${res.statusText}`);
        this.status = res.status;
        this.text = text;
        this.url = res.url;
    }
}

},{"./SandpackError":"3HAYS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VMrr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sleep", ()=>sleep
);
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dbTI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeModuleSpecifier", ()=>normalizeModuleSpecifier
);
parcelHelpers.export(exports, "resolver", ()=>resolver
);
parcelHelpers.export(exports, "resolveSync", ()=>resolveSync
);
parcelHelpers.export(exports, "resolveAsync", ()=>resolveAsync
);
var _gensync = require("gensync");
var _gensyncDefault = parcelHelpers.interopDefault(_gensync);
var _micromatch = require("micromatch");
var _micromatchDefault = parcelHelpers.interopDefault(_micromatch);
var _moduleNotFound = require("../errors/ModuleNotFound");
var _path = require("../utils/path");
var _fs = require("./utils/fs");
var _moduleSpecifier = require("./utils/module-specifier");
var _pkgJson = require("./utils/pkg-json");
var _tsconfig = require("./utils/tsconfig");
function normalizeResolverOptions(opts) {
    const normalizedModuleDirectories = opts.moduleDirectories ? new Set(opts.moduleDirectories.map((p)=>p[0] === '/' ? p.substring(1) : p
    )) : new Set();
    normalizedModuleDirectories.add('node_modules');
    return {
        filename: opts.filename,
        extensions: [
            ...new Set([
                '',
                ...opts.extensions
            ])
        ],
        isFile: opts.isFile,
        readFile: opts.readFile,
        moduleDirectories: [
            ...normalizedModuleDirectories
        ],
        resolverCache: opts.resolverCache || new Map()
    };
}
function* loadPackageJSON(filepath, opts, rootDir = '/') {
    const directories = _fs.getParentDirectories(filepath, rootDir);
    for (const directory of directories){
        const packageFilePath = _path.join(directory, 'package.json');
        let packageContent = opts.resolverCache.get(packageFilePath);
        if (packageContent === undefined) try {
            packageContent = _pkgJson.processPackageJSON(JSON.parse((yield* opts.readFile(packageFilePath))), _path.dirname(packageFilePath));
            opts.resolverCache.set(packageFilePath, packageContent);
        } catch (err) {
            opts.resolverCache.set(packageFilePath, false);
        }
        if (packageContent) return {
            filepath: packageFilePath,
            content: packageContent
        };
    }
    return null;
}
function resolveFile(filepath, dir) {
    switch(filepath[0]){
        case '.':
            return _path.join(dir, filepath);
        case '/':
            return filepath;
        default:
            // is a node module
            return filepath;
    }
}
function resolveAlias(pkgJson, filename) {
    const aliases = pkgJson.content.aliases;
    let relativeFilepath = filename;
    let aliasedPath = relativeFilepath;
    let count = 0;
    do {
        relativeFilepath = aliasedPath;
        // Simply check to ensure we don't infinitely alias files due to a misconfiguration of a package/user
        if (count > 5) throw new Error('Could not resolve file due to a cyclic alias');
        count++;
        // Check for direct matches
        if (aliases[relativeFilepath]) {
            aliasedPath = aliases[relativeFilepath];
            continue;
        }
        for (const aliasKey of Object.keys(aliases)){
            if (!aliasKey.includes('*')) continue;
            const re = _micromatchDefault.default.makeRe(aliasKey, {
                capture: true
            });
            if (re.test(relativeFilepath)) {
                const val = aliases[aliasKey];
                aliasedPath = relativeFilepath.replace(re, val);
                if (aliasedPath.startsWith(relativeFilepath)) {
                    const newAddition = aliasedPath.substr(relativeFilepath.length);
                    if (!newAddition.includes('/') && relativeFilepath.endsWith(newAddition)) aliasedPath = relativeFilepath;
                }
                break;
            }
        }
        break;
    }while (relativeFilepath !== aliasedPath)
    return aliasedPath || relativeFilepath;
}
function* resolveModule(moduleSpecifier, opts) {
    const dirPath = _path.dirname(opts.filename);
    const filename = resolveFile(moduleSpecifier, dirPath);
    const isAbsoluteFilename = filename[0] === '/';
    const pkgJson = yield* findPackageJSON(isAbsoluteFilename ? filename : opts.filename, opts);
    return resolveAlias(pkgJson, filename);
}
function* resolveNodeModule(moduleSpecifier, opts) {
    const pkgSpecifierParts = _moduleSpecifier.extractModuleSpecifierParts(moduleSpecifier);
    const directories = _fs.getParentDirectories(opts.filename);
    for (const modulesPath of opts.moduleDirectories)for (const directory of directories){
        const rootDir = _path.join(directory, modulesPath, pkgSpecifierParts.pkgName);
        try {
            const pkgFilePath = _path.join(rootDir, pkgSpecifierParts.filepath);
            const pkgJson = yield* loadPackageJSON(pkgFilePath, opts, rootDir);
            if (pkgJson) try {
                return yield* resolver(pkgFilePath, {
                    ...opts,
                    filename: pkgJson.filepath
                });
            } catch (err) {
                if (!pkgSpecifierParts.filepath) return yield* resolver(_path.join(pkgFilePath, 'index'), {
                    ...opts,
                    filename: pkgJson.filepath
                });
                throw err;
            }
        } catch (err) {
            // Handle multiple duplicates of a node_module across the tree
            if (directory.length > 1) return yield* resolveNodeModule(moduleSpecifier, {
                ...opts,
                filename: _path.dirname(directory)
            });
            throw err;
        }
    }
    throw new _moduleNotFound.ModuleNotFoundError(moduleSpecifier, opts.filename);
}
function* findPackageJSON(filepath, opts) {
    let pkg = yield* loadPackageJSON(filepath, opts);
    if (!pkg) {
        pkg = yield* loadPackageJSON('/index', opts);
        if (!pkg) return {
            filepath: '/package.json',
            content: {
                aliases: {}
            }
        };
    }
    return pkg;
}
function* expandFile(filepath, opts, expandCount = 0) {
    const pkg = yield* findPackageJSON(filepath, opts);
    if (expandCount > 5) throw new Error('Cyclic alias detected');
    for (const ext of opts.extensions){
        const f = filepath + ext;
        const aliasedPath = resolveAlias(pkg, f);
        if (aliasedPath === f) {
            const exists = yield* _fs.isFile(f, opts.isFile);
            if (exists) return f;
        } else {
            const expanded = yield* expandFile(aliasedPath, {
                ...opts,
                extensions: [
                    ''
                ]
            }, expandCount + 1);
            if (expanded) return expanded;
        }
    }
    return null;
}
function normalizeModuleSpecifier(specifier) {
    const normalized = specifier.replace(/(\/|\\)+/g, '/');
    if (normalized.endsWith('/')) return normalized.substring(0, normalized.length - 1);
    return normalized;
}
const TS_CONFIG_CACHE_KEY = '__root_tsconfig';
function* getTSConfig(opts) {
    const cachedConfig = opts.resolverCache.get(TS_CONFIG_CACHE_KEY);
    if (cachedConfig != null) return cachedConfig;
    let config = false;
    try {
        const contents = yield* opts.readFile('/tsconfig.json');
        const processed = _tsconfig.processTSConfig(contents);
        if (processed) config = processed;
    } catch (err) {
        try {
            const contents = yield* opts.readFile('/jsconfig.json');
            const processed = _tsconfig.processTSConfig(contents);
            if (processed) config = processed;
        } catch  {
        // do nothing
        }
    }
    opts.resolverCache.set(TS_CONFIG_CACHE_KEY, config);
    return config;
}
const resolver = _gensyncDefault.default(function* resolve(moduleSpecifier, inputOpts) {
    const normalizedSpecifier = normalizeModuleSpecifier(moduleSpecifier);
    const opts = normalizeResolverOptions(inputOpts);
    const modulePath = yield* resolveModule(normalizedSpecifier, opts);
    if (modulePath[0] !== '/') {
        // This isn't a node module, we can attempt to resolve using a tsconfig/jsconfig
        if (!opts.filename.includes('/node_modules')) {
            const parsedTSConfig = yield* getTSConfig(opts);
            if (parsedTSConfig) {
                const potentialPaths = _tsconfig.getPotentialPathsFromTSConfig(modulePath, parsedTSConfig);
                for (const potentialPath of potentialPaths)try {
                    return yield* resolve(potentialPath, opts);
                } catch  {
                // do nothing, it's probably a node_module in this case
                }
            }
        }
        try {
            return yield* resolveNodeModule(modulePath, opts);
        } catch (e) {
            throw new _moduleNotFound.ModuleNotFoundError(normalizedSpecifier, opts.filename);
        }
    }
    let foundFile = yield* expandFile(modulePath, opts);
    if (!foundFile) {
        foundFile = yield* expandFile(_path.join(modulePath, 'index'), opts);
        // In case alias adds an extension, we retry the entire resolution with an added /index
        // This is mostly a hack I guess, but it works for now, so many edge-cases
        if (!foundFile) try {
            const parts = moduleSpecifier.split('/');
            if (!parts.length || !parts[parts.length - 1].startsWith('index')) foundFile = yield* resolve(moduleSpecifier + '/index', opts);
        } catch (err) {
        // should throw ModuleNotFound for original specifier, not new one
        }
    }
    if (!foundFile) throw new _moduleNotFound.ModuleNotFoundError(modulePath, opts.filename);
    return foundFile;
});
const resolveSync = resolver.sync;
const resolveAsync = resolver.async;

},{"gensync":"AqTPz","micromatch":"aeGye","../errors/ModuleNotFound":"jcRMy","../utils/path":"7C40W","./utils/fs":"4sQ9k","./utils/module-specifier":"9vP6g","./utils/pkg-json":"6KBED","./utils/tsconfig":"86zzN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeGye":[function(require,module,exports) {
'use strict';
const util = require('util');
const braces = require('braces');
const picomatch = require('picomatch');
const utils = require('picomatch/lib/utils');
const isEmptyString = (val)=>val === '' || val === './'
;
/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} `list` List of strings to match.
 * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */ const micromatch = (list, patterns, options)=>{
    patterns = [].concat(patterns);
    list = [].concat(list);
    let omit = new Set();
    let keep = new Set();
    let items = new Set();
    let negatives = 0;
    let onResult = (state)=>{
        items.add(state.output);
        if (options && options.onResult) options.onResult(state);
    };
    for(let i = 0; i < patterns.length; i++){
        let isMatch = picomatch(String(patterns[i]), {
            ...options,
            onResult
        }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list){
            let matched = isMatch(item, true);
            let match = negated ? !matched.isMatch : matched.isMatch;
            if (!match) continue;
            if (negated) omit.add(matched.output);
            else {
                omit.delete(matched.output);
                keep.add(matched.output);
            }
        }
    }
    let result = negatives === patterns.length ? [
        ...items
    ] : [
        ...keep
    ];
    let matches = result.filter((item)=>!omit.has(item)
    );
    if (options && matches.length === 0) {
        if (options.failglob === true) throw new Error(`No matches found for "${patterns.join(', ')}"`);
        if (options.nonull === true || options.nullglob === true) return options.unescape ? patterns.map((p)=>p.replace(/\\/g, '')
        ) : patterns;
    }
    return matches;
};
/**
 * Backwards compatibility
 */ micromatch.match = micromatch;
/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */ micromatch.matcher = (pattern, options)=>picomatch(pattern, options)
;
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str)
;
/**
 * Backwards compatibility
 */ micromatch.any = micromatch.isMatch;
/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */ micromatch.not = (list, patterns, options = {})=>{
    patterns = [].concat(patterns).map(String);
    let result = new Set();
    let items = [];
    let onResult = (state)=>{
        if (options.onResult) options.onResult(state);
        items.push(state.output);
    };
    let matches = new Set(micromatch(list, patterns, {
        ...options,
        onResult
    }));
    for (let item of items)if (!matches.has(item)) result.add(item);
    return [
        ...result
    ];
};
/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */ micromatch.contains = (str, pattern, options)=>{
    if (typeof str !== 'string') throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    if (Array.isArray(pattern)) return pattern.some((p)=>micromatch.contains(str, p, options)
    );
    if (typeof pattern === 'string') {
        if (isEmptyString(str) || isEmptyString(pattern)) return false;
        if (str.includes(pattern) || str.startsWith('./') && str.slice(2).includes(pattern)) return true;
    }
    return micromatch.isMatch(str, pattern, {
        ...options,
        contains: true
    });
};
/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */ micromatch.matchKeys = (obj, patterns, options)=>{
    if (!utils.isObject(obj)) throw new TypeError('Expected the first argument to be an object');
    let keys = micromatch(Object.keys(obj), patterns, options);
    let res = {};
    for (let key of keys)res[key] = obj[key];
    return res;
};
/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */ micromatch.some = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item)=>isMatch(item)
        )) return true;
    }
    return false;
};
/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */ micromatch.every = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item)=>isMatch(item)
        )) return false;
    }
    return true;
};
/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.all = (str, patterns, options)=>{
    if (typeof str !== 'string') throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    return [].concat(patterns).every((p)=>picomatch(p, options)(str)
    );
};
/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */ micromatch.capture = (glob, input, options)=>{
    let posix = utils.isWindows(options);
    let regex = picomatch.makeRe(String(glob), {
        ...options,
        capture: true
    });
    let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
    if (match) return match.slice(1).map((v)=>v === void 0 ? '' : v
    );
};
/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ micromatch.makeRe = (...args)=>picomatch.makeRe(...args)
;
/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ micromatch.scan = (...args)=>picomatch.scan(...args)
;
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.parse(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */ micromatch.parse = (patterns, options)=>{
    let res = [];
    for (let pattern of [].concat(patterns || []))for (let str of braces(String(pattern), options))res.push(picomatch.parse(str, options));
    return res;
};
/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */ micromatch.braces = (pattern, options)=>{
    if (typeof pattern !== 'string') throw new TypeError('Expected a string');
    if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) return [
        pattern
    ];
    return braces(pattern, options);
};
/**
 * Expand braces
 */ micromatch.braceExpand = (pattern, options)=>{
    if (typeof pattern !== 'string') throw new TypeError('Expected a string');
    return micromatch.braces(pattern, {
        ...options,
        expand: true
    });
};
/**
 * Expose micromatch
 */ module.exports = micromatch;

},{"util":"cxohQ","braces":"kSy2N","picomatch":"AatFY","picomatch/lib/utils":"24Cmt"}],"cxohQ":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x1 = args[i]; i < len; x1 = args[++i])if (isNull(x1) || !isObject(x1)) str += ' ' + x1;
    else str += ' ' + inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== 'undefined' && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === 'undefined') return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else debugs[set] = function() {};
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if (isError(value)) return formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = ' ' + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require('inherits');
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"process":"d5jf4","./support/types":"bnQvf","./support/isBuffer":"inNNy","inherits":"bRL3M"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"bnQvf":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === 'undefined') return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === 'undefined') return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === 'undefined') return false;
    if (typeof isSharedArrayBufferToString.working === 'undefined') isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

},{"is-arguments":"czr4n","is-generator-function":"2XUdn","which-typed-array":"lVUO7","is-typed-array":"1ihkG"}],"czr4n":[function(require,module,exports) {
'use strict';
var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"9LdQ9","call-bind/callBound":"5yYiF"}],"9LdQ9":[function(require,module,exports) {
'use strict';
var hasSymbols = require('has-symbols/shams');
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"euYk7"}],"euYk7":[function(require,module,exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"5yYiF":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var callBind = require('./');
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"get-intrinsic":"dZb05","./":"bfo8D"}],"dZb05":[function(require,module,exports) {
'use strict';
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, '');
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require('has-symbols')();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
var doEval = function doEval1(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval1('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval1('%AsyncGenerator%');
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"has-symbols":"fHo1d","function-bind":"6J4ob","has":"ksyoO"}],"fHo1d":[function(require,module,exports) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"./shams":"5LVcU"}],"5LVcU":[function(require,module,exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"6J4ob":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = Function.prototype.bind || implementation;

},{"./implementation":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"ksyoO":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"6J4ob"}],"bfo8D":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) try {
    $defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, 'apply', {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"function-bind":"6J4ob","get-intrinsic":"dZb05"}],"2XUdn":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {}
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === 'undefined') {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"9LdQ9"}],"lVUO7":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === 'function') {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {}
    });
    return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"foreach":"3ZSmQ","available-typed-arrays":"kfela","call-bind/callBound":"5yYiF","has-tostringtag/shams":"9LdQ9","es-abstract/helpers/getOwnPropertyDescriptor":"6LOU8","is-typed-array":"1ihkG"}],"3ZSmQ":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"kfela":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === 'function') out[out.length] = possibleNames[i];
    return out;
};

},{}],"6LOU8":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"get-intrinsic":"dZb05"}],"1ihkG":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {}
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"foreach":"3ZSmQ","available-typed-arrays":"kfela","call-bind/callBound":"5yYiF","has-tostringtag/shams":"9LdQ9","es-abstract/helpers/getOwnPropertyDescriptor":"6LOU8"}],"inNNy":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"kSy2N":[function(require,module,exports) {
'use strict';
const stringify = require('./lib/stringify');
const compile = require('./lib/compile');
const expand = require('./lib/expand');
const parse = require('./lib/parse');
/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */ const braces = (input, options = {})=>{
    let output = [];
    if (Array.isArray(input)) for (let pattern of input){
        let result = braces.create(pattern, options);
        if (Array.isArray(result)) output.push(...result);
        else output.push(result);
    }
    else output = [].concat(braces.create(input, options));
    if (options && options.expand === true && options.nodupes === true) output = [
        ...new Set(output)
    ];
    return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */ braces.parse = (input, options = {})=>parse(input, options)
;
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.stringify = (input, options = {})=>{
    if (typeof input === 'string') return stringify(braces.parse(input, options), options);
    return stringify(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.compile = (input, options = {})=>{
    if (typeof input === 'string') input = braces.parse(input, options);
    return compile(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.expand = (input, options = {})=>{
    if (typeof input === 'string') input = braces.parse(input, options);
    let result = expand(input, options);
    // filter out empty strings if specified
    if (options.noempty === true) result = result.filter(Boolean);
    // filter out duplicates if specified
    if (options.nodupes === true) result = [
        ...new Set(result)
    ];
    return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.create = (input, options = {})=>{
    if (input === '' || input.length < 3) return [
        input
    ];
    return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
};
/**
 * Expose "braces"
 */ module.exports = braces;

},{"./lib/stringify":"b5l1o","./lib/compile":"eFCBJ","./lib/expand":"4j2xZ","./lib/parse":"heNfr"}],"b5l1o":[function(require,module,exports) {
'use strict';
const utils = require('./utils');
module.exports = (ast, options = {})=>{
    let stringify = (node, parent = {})=>{
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = '';
        if (node.value) {
            if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) return '\\' + node.value;
            return node.value;
        }
        if (node.value) return node.value;
        if (node.nodes) for (let child of node.nodes)output += stringify(child);
        return output;
    };
    return stringify(ast);
};

},{"./utils":"ccvDJ"}],"ccvDJ":[function(require,module,exports) {
'use strict';
exports.isInteger = (num)=>{
    if (typeof num === 'number') return Number.isInteger(num);
    if (typeof num === 'string' && num.trim() !== '') return Number.isInteger(Number(num));
    return false;
};
/**
 * Find a node of the given type
 */ exports.find = (node1, type)=>node1.nodes.find((node)=>node.type === type
    )
;
/**
 * Find a node of the given type
 */ exports.exceedsLimit = (min, max, step = 1, limit)=>{
    if (limit === false) return false;
    if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
    return (Number(max) - Number(min)) / Number(step) >= limit;
};
/**
 * Escape the given node with '\\' before node.value
 */ exports.escapeNode = (block, n = 0, type)=>{
    let node = block.nodes[n];
    if (!node) return;
    if (type && node.type === type || node.type === 'open' || node.type === 'close') {
        if (node.escaped !== true) {
            node.value = '\\' + node.value;
            node.escaped = true;
        }
    }
};
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */ exports.encloseBrace = (node)=>{
    if (node.type !== 'brace') return false;
    if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a brace node is invalid.
 */ exports.isInvalidBrace = (block)=>{
    if (block.type !== 'brace') return false;
    if (block.invalid === true || block.dollar) return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
    }
    if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a node is an open or close node
 */ exports.isOpenOrClose = (node)=>{
    if (node.type === 'open' || node.type === 'close') return true;
    return node.open === true || node.close === true;
};
/**
 * Reduce an array of text nodes.
 */ exports.reduce = (nodes)=>nodes.reduce((acc, node)=>{
        if (node.type === 'text') acc.push(node.value);
        if (node.type === 'range') node.type = 'text';
        return acc;
    }, [])
;
/**
 * Flatten an array
 */ exports.flatten = (...args)=>{
    const result = [];
    const flat = (arr)=>{
        for(let i = 0; i < arr.length; i++){
            let ele = arr[i];
            Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
    };
    flat(args);
    return result;
};

},{}],"eFCBJ":[function(require,module,exports) {
'use strict';
const fill = require('fill-range');
const utils = require('./utils');
const compile = (ast, options = {})=>{
    let walk = (node, parent = {})=>{
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? '\\' : '';
        let output = '';
        if (node.isOpen === true) return prefix + node.value;
        if (node.isClose === true) return prefix + node.value;
        if (node.type === 'open') return invalid ? prefix + node.value : '(';
        if (node.type === 'close') return invalid ? prefix + node.value : ')';
        if (node.type === 'comma') return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
        if (node.value) return node.value;
        if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            let range = fill(...args, {
                ...options,
                wrap: false,
                toRegex: true
            });
            if (range.length !== 0) return args.length > 1 && range.length > 1 ? `(${range})` : range;
        }
        if (node.nodes) for (let child of node.nodes)output += walk(child, node);
        return output;
    };
    return walk(ast);
};
module.exports = compile;

},{"fill-range":"ff9tm","./utils":"ccvDJ"}],"ff9tm":[function(require,module,exports) {
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */ 'use strict';
const util = require('util');
const toRegexRange = require('to-regex-range');
const isObject = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val)
;
const transform = (toNumber)=>{
    return (value)=>toNumber === true ? Number(value) : String(value)
    ;
};
const isValidValue = (value)=>{
    return typeof value === 'number' || typeof value === 'string' && value !== '';
};
const isNumber = (num)=>Number.isInteger(+num)
;
const zeros = (input)=>{
    let value = `${input}`;
    let index = -1;
    if (value[0] === '-') value = value.slice(1);
    if (value === '0') return false;
    while(value[++index] === '0');
    return index > 0;
};
const stringify = (start, end, options)=>{
    if (typeof start === 'string' || typeof end === 'string') return true;
    return options.stringify === true;
};
const pad = (input, maxLength, toNumber)=>{
    if (maxLength > 0) {
        let dash = input[0] === '-' ? '-' : '';
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
    }
    if (toNumber === false) return String(input);
    return input;
};
const toMaxLen = (input, maxLength)=>{
    let negative = input[0] === '-' ? '-' : '';
    if (negative) {
        input = input.slice(1);
        maxLength--;
    }
    while(input.length < maxLength)input = '0' + input;
    return negative ? '-' + input : input;
};
const toSequence = (parts, options)=>{
    parts.negatives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0
    );
    parts.positives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0
    );
    let prefix = options.capture ? '' : '?:';
    let positives = '';
    let negatives = '';
    let result;
    if (parts.positives.length) positives = parts.positives.join('|');
    if (parts.negatives.length) negatives = `-(${prefix}${parts.negatives.join('|')})`;
    if (positives && negatives) result = `${positives}|${negatives}`;
    else result = positives || negatives;
    if (options.wrap) return `(${prefix}${result})`;
    return result;
};
const toRange = (a, b, isNumbers, options)=>{
    if (isNumbers) return toRegexRange(a, b, {
        wrap: false,
        ...options
    });
    let start = String.fromCharCode(a);
    if (a === b) return start;
    let stop = String.fromCharCode(b);
    return `[${start}-${stop}]`;
};
const toRegex = (start, end, options)=>{
    if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? '' : '?:';
        return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
    }
    return toRegexRange(start, end, options);
};
const rangeError = (...args)=>{
    return new RangeError('Invalid range arguments: ' + util.inspect(...args));
};
const invalidRange = (start, end, options)=>{
    if (options.strictRanges === true) throw rangeError([
        start,
        end
    ]);
    return [];
};
const invalidStep = (step, options)=>{
    if (options.strictRanges === true) throw new TypeError(`Expected step "${step}" to be a number`);
    return [];
};
const fillNumbers = (start, end, step = 1, options = {})=>{
    let a = Number(start);
    let b = Number(end);
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([
            start,
            end
        ]);
        return [];
    }
    // fix negative zero
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    let descending = a > b;
    let startString = String(start);
    let endString = String(end);
    let stepString = String(step);
    step = Math.max(Math.abs(step), 1);
    let padded = zeros(startString) || zeros(endString) || zeros(stepString);
    let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
    let toNumber = padded === false && stringify(start, end, options) === false;
    let format = options.transform || transform(toNumber);
    if (options.toRegex && step === 1) return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
    let parts = {
        negatives: [],
        positives: []
    };
    let push = (num)=>parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num))
    ;
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        if (options.toRegex === true && step > 1) push(a);
        else range.push(pad(format(a, index), maxLen, toNumber));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) return step > 1 ? toSequence(parts, options) : toRegex(range, null, {
        wrap: false,
        ...options
    });
    return range;
};
const fillLetters = (start, end, step = 1, options = {})=>{
    if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) return invalidRange(start, end, options);
    let format = options.transform || ((val)=>String.fromCharCode(val)
    );
    let a = `${start}`.charCodeAt(0);
    let b = `${end}`.charCodeAt(0);
    let descending = a > b;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (options.toRegex && step === 1) return toRange(min, max, false, options);
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) return toRegex(range, null, {
        wrap: false,
        options
    });
    return range;
};
const fill = (start, end, step, options = {})=>{
    if (end == null && isValidValue(start)) return [
        start
    ];
    if (!isValidValue(start) || !isValidValue(end)) return invalidRange(start, end, options);
    if (typeof step === 'function') return fill(start, end, 1, {
        transform: step
    });
    if (isObject(step)) return fill(start, end, 0, step);
    let opts = {
        ...options
    };
    if (opts.capture === true) opts.wrap = true;
    step = step || opts.step || 1;
    if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
    }
    if (isNumber(start) && isNumber(end)) return fillNumbers(start, end, step, opts);
    return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
module.exports = fill;

},{"util":"cxohQ","to-regex-range":"6yTsK"}],"6yTsK":[function(require,module,exports) {
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 'use strict';
const isNumber = require('is-number');
const toRegexRange = (min, max, options)=>{
    if (isNumber(min) === false) throw new TypeError('toRegexRange: expected the first argument to be a number');
    if (max === void 0 || min === max) return String(min);
    if (isNumber(max) === false) throw new TypeError('toRegexRange: expected the second argument to be a number.');
    let opts = {
        relaxZeros: true,
        ...options
    };
    if (typeof opts.strictZeros === 'boolean') opts.relaxZeros = opts.strictZeros === false;
    let relax = String(opts.relaxZeros);
    let shorthand = String(opts.shorthand);
    let capture = String(opts.capture);
    let wrap = String(opts.wrap);
    let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;
    if (toRegexRange.cache.hasOwnProperty(cacheKey)) return toRegexRange.cache[cacheKey].result;
    let a = Math.min(min, max);
    let b = Math.max(min, max);
    if (Math.abs(a - b) === 1) {
        let result = min + '|' + max;
        if (opts.capture) return `(${result})`;
        if (opts.wrap === false) return result;
        return `(?:${result})`;
    }
    let isPadded = hasPadding(min) || hasPadding(max);
    let state = {
        min,
        max,
        a,
        b
    };
    let positives = [];
    let negatives = [];
    if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
    }
    if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
    }
    if (b >= 0) positives = splitToPatterns(a, b, state, opts);
    state.negatives = negatives;
    state.positives = positives;
    state.result = collatePatterns(negatives, positives, opts);
    if (opts.capture === true) state.result = `(${state.result})`;
    else if (opts.wrap !== false && positives.length + negatives.length > 1) state.result = `(?:${state.result})`;
    toRegexRange.cache[cacheKey] = state;
    return state.result;
};
function collatePatterns(neg, pos, options) {
    let onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
    let onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
    let intersected = filterPatterns(neg, pos, '-?', true, options) || [];
    let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
    return subpatterns.join('|');
}
function splitToRanges(min, max) {
    let nines = 1;
    let zeros = 1;
    let stop = countNines(min, nines);
    let stops = new Set([
        max
    ]);
    while(min <= stop && stop <= max){
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
    }
    stop = countZeros(max + 1, zeros) - 1;
    while(min < stop && stop <= max){
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
    }
    stops = [
        ...stops
    ];
    stops.sort(compare);
    return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */ function rangeToPattern(start, stop, options) {
    if (start === stop) return {
        pattern: start,
        count: [],
        digits: 0
    };
    let zipped = zip(start, stop);
    let digits = zipped.length;
    let pattern = '';
    let count = 0;
    for(let i = 0; i < digits; i++){
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) pattern += startDigit;
        else if (startDigit !== '0' || stopDigit !== '9') pattern += toCharacterClass(startDigit, stopDigit, options);
        else count++;
    }
    if (count) pattern += options.shorthand === true ? '\\d' : '[0-9]';
    return {
        pattern,
        count: [
            count
        ],
        digits
    };
}
function splitToPatterns(min, max, tok, options) {
    let ranges = splitToRanges(min, max);
    let tokens = [];
    let start = min;
    let prev;
    for(let i = 0; i < ranges.length; i++){
        let max = ranges[i];
        let obj = rangeToPattern(String(start), String(max), options);
        let zeros = '';
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) prev.count.pop();
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + toQuantifier(prev.count);
            start = max + 1;
            continue;
        }
        if (tok.isPadded) zeros = padZeros(max, tok, options);
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max + 1;
        prev = obj;
    }
    return tokens;
}
function filterPatterns(arr, comparison, prefix, intersection, options) {
    let result = [];
    for (let ele of arr){
        let { string  } = ele;
        // only push if _both_ are negative...
        if (!intersection && !contains(comparison, 'string', string)) result.push(prefix + string);
        // or _both_ are positive
        if (intersection && contains(comparison, 'string', string)) result.push(prefix + string);
    }
    return result;
}
/**
 * Zip strings
 */ function zip(a, b) {
    let arr = [];
    for(let i = 0; i < a.length; i++)arr.push([
        a[i],
        b[i]
    ]);
    return arr;
}
function compare(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}
function contains(arr, key, val) {
    return arr.some((ele)=>ele[key] === val
    );
}
function countNines(min, len) {
    return Number(String(min).slice(0, -len) + '9'.repeat(len));
}
function countZeros(integer, zeros) {
    return integer - integer % Math.pow(10, zeros);
}
function toQuantifier(digits) {
    let [start = 0, stop = ''] = digits;
    if (stop || start > 1) return `{${start + (stop ? ',' + stop : '')}}`;
    return '';
}
function toCharacterClass(a, b, options) {
    return `[${a}${b - a === 1 ? '' : '-'}${b}]`;
}
function hasPadding(str) {
    return /^-?(0+)\d/.test(str);
}
function padZeros(value, tok, options) {
    if (!tok.isPadded) return value;
    let diff = Math.abs(tok.maxLen - String(value).length);
    let relax = options.relaxZeros !== false;
    switch(diff){
        case 0:
            return '';
        case 1:
            return relax ? '0?' : '0';
        case 2:
            return relax ? '0{0,2}' : '00';
        default:
            return relax ? `0{0,${diff}}` : `0{${diff}}`;
    }
}
/**
 * Cache
 */ toRegexRange.cache = {};
toRegexRange.clearCache = ()=>toRegexRange.cache = {}
;
/**
 * Expose `toRegexRange`
 */ module.exports = toRegexRange;

},{"is-number":"6SefH"}],"6SefH":[function(require,module,exports) {
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 'use strict';
module.exports = function(num) {
    if (typeof num === 'number') return num - num === 0;
    if (typeof num === 'string' && num.trim() !== '') return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    return false;
};

},{}],"4j2xZ":[function(require,module,exports) {
'use strict';
const fill = require('fill-range');
const stringify = require('./stringify');
const utils = require('./utils');
const append = (queue = '', stash = '', enclose = false)=>{
    let result = [];
    queue = [].concat(queue);
    stash = [].concat(stash);
    if (!stash.length) return queue;
    if (!queue.length) return enclose ? utils.flatten(stash).map((ele)=>`{${ele}}`
    ) : stash;
    for (let item of queue){
        if (Array.isArray(item)) for (let value of item)result.push(append(value, stash, enclose));
        else for (let ele of stash){
            if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
        }
    }
    return utils.flatten(result);
};
const expand = (ast, options = {})=>{
    let rangeLimit = options.rangeLimit === void 0 ? 1000 : options.rangeLimit;
    let walk = (node, parent = {})=>{
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while(p.type !== 'brace' && p.type !== 'root' && p.parent){
            p = p.parent;
            q = p.queue;
        }
        if (node.invalid || node.dollar) {
            q.push(append(q.pop(), stringify(node, options)));
            return;
        }
        if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
            q.push(append(q.pop(), [
                '{}'
            ]));
            return;
        }
        if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            if (utils.exceedsLimit(...args, options.step, rangeLimit)) throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
            let range = fill(...args, options);
            if (range.length === 0) range = stringify(node, options);
            q.push(append(q.pop(), range));
            node.nodes = [];
            return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while(block.type !== 'brace' && block.type !== 'root' && block.parent){
            block = block.parent;
            queue = block.queue;
        }
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            if (child.type === 'comma' && node.type === 'brace') {
                if (i === 1) queue.push('');
                queue.push('');
                continue;
            }
            if (child.type === 'close') {
                q.push(append(q.pop(), queue, enclose));
                continue;
            }
            if (child.value && child.type !== 'open') {
                queue.push(append(queue.pop(), child.value));
                continue;
            }
            if (child.nodes) walk(child, node);
        }
        return queue;
    };
    return utils.flatten(walk(ast));
};
module.exports = expand;

},{"fill-range":"ff9tm","./stringify":"b5l1o","./utils":"ccvDJ"}],"heNfr":[function(require,module,exports) {
'use strict';
const stringify = require('./stringify');
/**
 * Constants
 */ const { MAX_LENGTH , CHAR_BACKSLASH , /* \ */ CHAR_BACKTICK , /* ` */ CHAR_COMMA , /* , */ CHAR_DOT , /* . */ CHAR_LEFT_PARENTHESES , /* ( */ CHAR_RIGHT_PARENTHESES , /* ) */ CHAR_LEFT_CURLY_BRACE , /* { */ CHAR_RIGHT_CURLY_BRACE , /* } */ CHAR_LEFT_SQUARE_BRACKET , /* [ */ CHAR_RIGHT_SQUARE_BRACKET , /* ] */ CHAR_DOUBLE_QUOTE , /* " */ CHAR_SINGLE_QUOTE , /* ' */ CHAR_NO_BREAK_SPACE , CHAR_ZERO_WIDTH_NOBREAK_SPACE  } = require('./constants');
/**
 * parse
 */ const parse = (input, options = {})=>{
    if (typeof input !== 'string') throw new TypeError('Expected a string');
    let opts = options || {};
    let max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    if (input.length > max) throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
    let ast = {
        type: 'root',
        input,
        nodes: []
    };
    let stack = [
        ast
    ];
    let block = ast;
    let prev = ast;
    let brackets = 0;
    let length = input.length;
    let index = 0;
    let depth = 0;
    let value;
    let memo = {};
    /**
   * Helpers
   */ const advance = ()=>input[index++]
    ;
    const push = (node)=>{
        if (node.type === 'text' && prev.type === 'dot') prev.type = 'text';
        if (prev && prev.type === 'text' && node.type === 'text') {
            prev.value += node.value;
            return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
    };
    push({
        type: 'bos'
    });
    while(index < length){
        block = stack[stack.length - 1];
        value = advance();
        /**
     * Invalid chars
     */ if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) continue;
        /**
     * Escaped chars
     */ if (value === CHAR_BACKSLASH) {
            push({
                type: 'text',
                value: (options.keepEscaping ? value : '') + advance()
            });
            continue;
        }
        /**
     * Right square bracket (literal): ']'
     */ if (value === CHAR_RIGHT_SQUARE_BRACKET) {
            push({
                type: 'text',
                value: '\\' + value
            });
            continue;
        }
        /**
     * Left square bracket: '['
     */ if (value === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let closed = true;
            let next;
            while(index < length && (next = advance())){
                value += next;
                if (next === CHAR_LEFT_SQUARE_BRACKET) {
                    brackets++;
                    continue;
                }
                if (next === CHAR_BACKSLASH) {
                    value += advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    brackets--;
                    if (brackets === 0) break;
                }
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value === CHAR_LEFT_PARENTHESES) {
            block = push({
                type: 'paren',
                nodes: []
            });
            stack.push(block);
            push({
                type: 'text',
                value
            });
            continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
            if (block.type !== 'paren') {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            block = stack.pop();
            push({
                type: 'text',
                value
            });
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Quotes: '|"|`
     */ if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
            let open = value;
            let next;
            if (options.keepQuotes !== true) value = '';
            while(index < length && (next = advance())){
                if (next === CHAR_BACKSLASH) {
                    value += next + advance();
                    continue;
                }
                if (next === open) {
                    if (options.keepQuotes === true) value += next;
                    break;
                }
                value += next;
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Left curly brace: '{'
     */ if (value === CHAR_LEFT_CURLY_BRACE) {
            depth++;
            let dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
            let brace = {
                type: 'brace',
                open: true,
                close: false,
                dollar,
                depth,
                commas: 0,
                ranges: 0,
                nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({
                type: 'open',
                value
            });
            continue;
        }
        /**
     * Right curly brace: '}'
     */ if (value === CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== 'brace') {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            let type = 'close';
            block = stack.pop();
            block.close = true;
            push({
                type,
                value
            });
            depth--;
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Comma: ','
     */ if (value === CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
                block.ranges = 0;
                let open = block.nodes.shift();
                block.nodes = [
                    open,
                    {
                        type: 'text',
                        value: stringify(block)
                    }
                ];
            }
            push({
                type: 'comma',
                value
            });
            block.commas++;
            continue;
        }
        /**
     * Dot: '.'
     */ if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
            let siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            if (prev.type === 'dot') {
                block.range = [];
                prev.value += value;
                prev.type = 'range';
                if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                    block.invalid = true;
                    block.ranges = 0;
                    prev.type = 'text';
                    continue;
                }
                block.ranges++;
                block.args = [];
                continue;
            }
            if (prev.type === 'range') {
                siblings.pop();
                let before = siblings[siblings.length - 1];
                before.value += prev.value + value;
                prev = before;
                block.ranges--;
                continue;
            }
            push({
                type: 'dot',
                value
            });
            continue;
        }
        /**
     * Text
     */ push({
            type: 'text',
            value
        });
    }
    // Mark imbalanced braces and brackets as invalid
    do {
        block = stack.pop();
        if (block.type !== 'root') {
            block.nodes.forEach((node)=>{
                if (!node.nodes) {
                    if (node.type === 'open') node.isOpen = true;
                    if (node.type === 'close') node.isClose = true;
                    if (!node.nodes) node.type = 'text';
                    node.invalid = true;
                }
            });
            // get the location of the block on parent.nodes (block's siblings)
            let parent = stack[stack.length - 1];
            let index = parent.nodes.indexOf(block);
            // replace the (invalid) block with it's nodes
            parent.nodes.splice(index, 1, ...block.nodes);
        }
    }while (stack.length > 0)
    push({
        type: 'eos'
    });
    return ast;
};
module.exports = parse;

},{"./stringify":"b5l1o","./constants":"i7Wqa"}],"i7Wqa":[function(require,module,exports) {
'use strict';
module.exports = {
    MAX_LENGTH: 65536,
    // Digits
    CHAR_0: '0',
    /* 0 */ CHAR_9: '9',
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 'A',
    /* A */ CHAR_LOWERCASE_A: 'a',
    /* a */ CHAR_UPPERCASE_Z: 'Z',
    /* Z */ CHAR_LOWERCASE_Z: 'z',
    /* z */ CHAR_LEFT_PARENTHESES: '(',
    /* ( */ CHAR_RIGHT_PARENTHESES: ')',
    /* ) */ CHAR_ASTERISK: '*',
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: '&',
    /* & */ CHAR_AT: '@',
    /* @ */ CHAR_BACKSLASH: '\\',
    /* \ */ CHAR_BACKTICK: '`',
    /* ` */ CHAR_CARRIAGE_RETURN: '\r',
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: '^',
    /* ^ */ CHAR_COLON: ':',
    /* : */ CHAR_COMMA: ',',
    /* , */ CHAR_DOLLAR: '$',
    /* . */ CHAR_DOT: '.',
    /* . */ CHAR_DOUBLE_QUOTE: '"',
    /* " */ CHAR_EQUAL: '=',
    /* = */ CHAR_EXCLAMATION_MARK: '!',
    /* ! */ CHAR_FORM_FEED: '\f',
    /* \f */ CHAR_FORWARD_SLASH: '/',
    /* / */ CHAR_HASH: '#',
    /* # */ CHAR_HYPHEN_MINUS: '-',
    /* - */ CHAR_LEFT_ANGLE_BRACKET: '<',
    /* < */ CHAR_LEFT_CURLY_BRACE: '{',
    /* { */ CHAR_LEFT_SQUARE_BRACKET: '[',
    /* [ */ CHAR_LINE_FEED: '\n',
    /* \n */ CHAR_NO_BREAK_SPACE: '\u00A0',
    /* \u00A0 */ CHAR_PERCENT: '%',
    /* % */ CHAR_PLUS: '+',
    /* + */ CHAR_QUESTION_MARK: '?',
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: '>',
    /* > */ CHAR_RIGHT_CURLY_BRACE: '}',
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: ']',
    /* ] */ CHAR_SEMICOLON: ';',
    /* ; */ CHAR_SINGLE_QUOTE: '\'',
    /* ' */ CHAR_SPACE: ' ',
    /*   */ CHAR_TAB: '\t',
    /* \t */ CHAR_UNDERSCORE: '_',
    /* _ */ CHAR_VERTICAL_LINE: '|',
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF' /* \uFEFF */ 
};

},{}],"AatFY":[function(require,module,exports) {
'use strict';
module.exports = require('./lib/picomatch');

},{"./lib/picomatch":"dXz94"}],"dXz94":[function(require,module,exports) {
'use strict';
const path = require('path');
const scan = require('./scan');
const parse = require('./parse');
const utils = require('./utils');
const constants = require('./constants');
const isObject = (val)=>val && typeof val === 'object' && !Array.isArray(val)
;
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */ const picomatch = (glob, options, returnState = false)=>{
    if (Array.isArray(glob)) {
        const fns = glob.map((input)=>picomatch(input, options, returnState)
        );
        const arrayMatcher = (str)=>{
            for (const isMatch of fns){
                const state = isMatch(str);
                if (state) return state;
            }
            return false;
        };
        return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === '' || typeof glob !== 'string' && !isState) throw new TypeError('Expected pattern to be a non-empty string');
    const opts = options || {};
    const posix = utils.isWindows(options);
    const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
    const state1 = regex.state;
    delete regex.state;
    let isIgnored = ()=>false
    ;
    if (opts.ignore) {
        const ignoreOpts = {
            ...options,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false)=>{
        const { isMatch , match , output  } = picomatch.test(input, regex, options, {
            glob,
            posix
        });
        const result = {
            glob,
            state: state1,
            regex,
            posix,
            input,
            output,
            match,
            isMatch
        };
        if (typeof opts.onResult === 'function') opts.onResult(result);
        if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (isIgnored(input)) {
            if (typeof opts.onIgnore === 'function') opts.onIgnore(result);
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (typeof opts.onMatch === 'function') opts.onMatch(result);
        return returnObject ? result : true;
    };
    if (returnState) matcher.state = state1;
    return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */ picomatch.test = (input, regex, options, { glob , posix  } = {})=>{
    if (typeof input !== 'string') throw new TypeError('Expected input to be a string');
    if (input === '') return {
        isMatch: false,
        output: ''
    };
    const opts = options || {};
    const format = opts.format || (posix ? utils.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
    }
    if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) match = picomatch.matchBase(input, regex, options, posix);
        else match = regex.exec(output);
    }
    return {
        isMatch: Boolean(match),
        match,
        output
    };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */ picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options))=>{
    const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
    return regex.test(path.basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ picomatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str)
;
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */ picomatch.parse = (pattern, options)=>{
    if (Array.isArray(pattern)) return pattern.map((p)=>picomatch.parse(p, options)
    );
    return parse(pattern, {
        ...options,
        fastpaths: false
    });
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ picomatch.scan = (input, options)=>scan(input, options)
;
/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */ picomatch.compileRe = (state, options, returnOutput = false, returnState = false)=>{
    if (returnOutput === true) return state.output;
    const opts = options || {};
    const prepend = opts.contains ? '' : '^';
    const append = opts.contains ? '' : '$';
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) source = `^(?!${source}).*$`;
    const regex = picomatch.toRegex(source, options);
    if (returnState === true) regex.state = state;
    return regex;
};
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false)=>{
    if (!input || typeof input !== 'string') throw new TypeError('Expected a non-empty string');
    let parsed = {
        negated: false,
        fastpaths: true
    };
    if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) parsed.output = parse.fastpaths(input, options);
    if (!parsed.output) parsed = parse(input, options);
    return picomatch.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */ picomatch.toRegex = (source, options)=>{
    try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
    } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
    }
};
/**
 * Picomatch constants.
 * @return {Object}
 */ picomatch.constants = constants;
/**
 * Expose "picomatch"
 */ module.exports = picomatch;

},{"path":"loE3o","./scan":"l46tz","./parse":"65Nga","./utils":"24Cmt","./constants":"4FnOW"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var process = require("process");
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"l46tz":[function(require,module,exports) {
'use strict';
const utils = require('./utils');
const { CHAR_ASTERISK , /* * */ CHAR_AT , /* @ */ CHAR_BACKWARD_SLASH , /* \ */ CHAR_COMMA , /* , */ CHAR_DOT , /* . */ CHAR_EXCLAMATION_MARK , /* ! */ CHAR_FORWARD_SLASH , /* / */ CHAR_LEFT_CURLY_BRACE , /* { */ CHAR_LEFT_PARENTHESES , /* ( */ CHAR_LEFT_SQUARE_BRACKET , /* [ */ CHAR_PLUS , /* + */ CHAR_QUESTION_MARK , /* ? */ CHAR_RIGHT_CURLY_BRACE , /* } */ CHAR_RIGHT_PARENTHESES , /* ) */ CHAR_RIGHT_SQUARE_BRACKET /* ] */  } = require('./constants');
const isPathSeparator = (code)=>{
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
const depth = (token)=>{
    if (token.isPrefix !== true) token.depth = token.isGlobstar ? Infinity : 1;
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */ const scan = (input, options)=>{
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = {
        value: '',
        depth: 0,
        isGlob: false
    };
    const eos = ()=>index >= length
    ;
    const peek = ()=>str.charCodeAt(index + 1)
    ;
    const advance = ()=>{
        prev = code;
        return str.charCodeAt(++index);
    };
    while(index < length){
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) braceEscaped = true;
            continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while(eos() !== true && (code = advance())){
                if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (code === CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    continue;
                }
                if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) continue;
                    break;
                }
                if (braceEscaped !== true && code === CHAR_COMMA) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) continue;
                    break;
                }
                if (code === CHAR_RIGHT_CURLY_BRACE) {
                    braces--;
                    if (braces === 0) {
                        braceEscaped = false;
                        isBrace = token.isBrace = true;
                        finished = true;
                        break;
                    }
                }
            }
            if (scanToEnd === true) continue;
            break;
        }
        if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
                value: '',
                depth: 0,
                isGlob: false
            };
            if (finished === true) continue;
            if (prev === CHAR_DOT && index === start + 1) {
                start += 2;
                continue;
            }
            lastIndex = index + 1;
            continue;
        }
        if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                isGlob = token.isGlob = true;
                isExtglob = token.isExtglob = true;
                finished = true;
                if (code === CHAR_EXCLAMATION_MARK && index === start) negatedExtglob = true;
                if (scanToEnd === true) {
                    while(eos() !== true && (code = advance())){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            continue;
                        }
                        if (code === CHAR_RIGHT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            finished = true;
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        }
        if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
        if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while(eos() !== true && (next = advance())){
                if (next === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    isBracket = token.isBracket = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    break;
                }
            }
            if (scanToEnd === true) continue;
            break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
                while(eos() !== true && (code = advance())){
                    if (code === CHAR_LEFT_PARENTHESES) {
                        backslashes = token.backslashes = true;
                        code = advance();
                        continue;
                    }
                    if (code === CHAR_RIGHT_PARENTHESES) {
                        finished = true;
                        break;
                    }
                }
                continue;
            }
            break;
        }
        if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) continue;
            break;
        }
    }
    if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
    }
    let base = str;
    let prefix = '';
    let glob = '';
    if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
    } else if (isGlob === true) {
        base = '';
        glob = str;
    } else base = str;
    if (base && base !== '' && base !== '/' && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) base = base.slice(0, -1);
    }
    if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) base = utils.removeBackslashes(base);
    }
    const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
    };
    if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) tokens.push(token);
        state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for(let idx = 0; idx < slashes.length; idx++){
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
                if (idx === 0 && start !== 0) {
                    tokens[idx].isPrefix = true;
                    tokens[idx].value = prefix;
                } else tokens[idx].value = value;
                depth(tokens[idx]);
                state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== '') parts.push(value);
            prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
                tokens[tokens.length - 1].value = value;
                depth(tokens[tokens.length - 1]);
                state.maxDepth += tokens[tokens.length - 1].depth;
            }
        }
        state.slashes = slashes;
        state.parts = parts;
    }
    return state;
};
module.exports = scan;

},{"./utils":"24Cmt","./constants":"4FnOW"}],"24Cmt":[function(require,module,exports) {
'use strict';
var process = require("process");
const path = require('path');
const win32 = process.platform === 'win32';
const { REGEX_BACKSLASH , REGEX_REMOVE_BACKSLASH , REGEX_SPECIAL_CHARS , REGEX_SPECIAL_CHARS_GLOBAL  } = require('./constants');
exports.isObject = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val)
;
exports.hasRegexChars = (str)=>REGEX_SPECIAL_CHARS.test(str)
;
exports.isRegexChar = (str)=>str.length === 1 && exports.hasRegexChars(str)
;
exports.escapeRegex = (str)=>str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1')
;
exports.toPosixSlashes = (str)=>str.replace(REGEX_BACKSLASH, '/')
;
exports.removeBackslashes = (str)=>{
    return str.replace(REGEX_REMOVE_BACKSLASH, (match)=>{
        return match === '\\' ? '' : match;
    });
};
exports.supportsLookbehinds = ()=>{
    const segs = process.version.slice(1).split('.').map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) return true;
    return false;
};
exports.isWindows = (options)=>{
    if (options && typeof options.windows === 'boolean') return options.windows;
    return win32 === true || path.sep === '\\';
};
exports.escapeLast = (input, char, lastIdx)=>{
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};
exports.removePrefix = (input, state = {})=>{
    let output = input;
    if (output.startsWith('./')) {
        output = output.slice(2);
        state.prefix = './';
    }
    return output;
};
exports.wrapOutput = (input, state = {}, options = {})=>{
    const prepend = options.contains ? '' : '^';
    const append = options.contains ? '' : '$';
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) output = `(?:^(?!${output}).*$)`;
    return output;
};

},{"process":"d5jf4","path":"loE3o","./constants":"4FnOW"}],"4FnOW":[function(require,module,exports) {
'use strict';
const path = require('path');
const WIN_SLASH = '\\\\/';
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
/**
 * Posix glob regex
 */ const DOT_LITERAL = '\\.';
const PLUS_LITERAL = '\\+';
const QMARK_LITERAL = '\\?';
const SLASH_LITERAL = '\\/';
const ONE_CHAR = '(?=.)';
const QMARK = '[^/]';
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
};
/**
 * Windows glob regex
 */ const WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
/**
 * POSIX Bracket Regex
 */ const POSIX_REGEX_SOURCE = {
    alnum: 'a-zA-Z0-9',
    alpha: 'a-zA-Z',
    ascii: '\\x00-\\x7F',
    blank: ' \\t',
    cntrl: '\\x00-\\x1F\\x7F',
    digit: '0-9',
    graph: '\\x21-\\x7E',
    lower: 'a-z',
    print: '\\x20-\\x7E ',
    punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
    space: ' \\t\\r\\n\\v\\f',
    upper: 'A-Z',
    word: 'A-Za-z0-9_',
    xdigit: 'A-Fa-f0-9'
};
module.exports = {
    MAX_LENGTH: 65536,
    POSIX_REGEX_SOURCE,
    // regular expressions
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    // Replace globs with equivalent patterns to reduce parsing time.
    REPLACEMENTS: {
        '***': '*',
        '**/**': '**',
        '**/**/**': '**'
    },
    // Digits
    CHAR_0: 48,
    /* 0 */ CHAR_9: 57,
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 65,
    /* A */ CHAR_LOWERCASE_A: 97,
    /* a */ CHAR_UPPERCASE_Z: 90,
    /* Z */ CHAR_LOWERCASE_Z: 122,
    /* z */ CHAR_LEFT_PARENTHESES: 40,
    /* ( */ CHAR_RIGHT_PARENTHESES: 41,
    /* ) */ CHAR_ASTERISK: 42,
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: 38,
    /* & */ CHAR_AT: 64,
    /* @ */ CHAR_BACKWARD_SLASH: 92,
    /* \ */ CHAR_CARRIAGE_RETURN: 13,
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: 94,
    /* ^ */ CHAR_COLON: 58,
    /* : */ CHAR_COMMA: 44,
    /* , */ CHAR_DOT: 46,
    /* . */ CHAR_DOUBLE_QUOTE: 34,
    /* " */ CHAR_EQUAL: 61,
    /* = */ CHAR_EXCLAMATION_MARK: 33,
    /* ! */ CHAR_FORM_FEED: 12,
    /* \f */ CHAR_FORWARD_SLASH: 47,
    /* / */ CHAR_GRAVE_ACCENT: 96,
    /* ` */ CHAR_HASH: 35,
    /* # */ CHAR_HYPHEN_MINUS: 45,
    /* - */ CHAR_LEFT_ANGLE_BRACKET: 60,
    /* < */ CHAR_LEFT_CURLY_BRACE: 123,
    /* { */ CHAR_LEFT_SQUARE_BRACKET: 91,
    /* [ */ CHAR_LINE_FEED: 10,
    /* \n */ CHAR_NO_BREAK_SPACE: 160,
    /* \u00A0 */ CHAR_PERCENT: 37,
    /* % */ CHAR_PLUS: 43,
    /* + */ CHAR_QUESTION_MARK: 63,
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: 62,
    /* > */ CHAR_RIGHT_CURLY_BRACE: 125,
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: 93,
    /* ] */ CHAR_SEMICOLON: 59,
    /* ; */ CHAR_SINGLE_QUOTE: 39,
    /* ' */ CHAR_SPACE: 32,
    /*   */ CHAR_TAB: 9,
    /* \t */ CHAR_UNDERSCORE: 95,
    /* _ */ CHAR_VERTICAL_LINE: 124,
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    /* \uFEFF */ SEP: path.sep,
    /**
   * Create EXTGLOB_CHARS
   */ extglobChars (chars) {
        return {
            '!': {
                type: 'negate',
                open: '(?:(?!(?:',
                close: `))${chars.STAR})`
            },
            '?': {
                type: 'qmark',
                open: '(?:',
                close: ')?'
            },
            '+': {
                type: 'plus',
                open: '(?:',
                close: ')+'
            },
            '*': {
                type: 'star',
                open: '(?:',
                close: ')*'
            },
            '@': {
                type: 'at',
                open: '(?:',
                close: ')'
            }
        };
    },
    /**
   * Create GLOB_CHARS
   */ globChars (win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
};

},{"path":"loE3o"}],"65Nga":[function(require,module,exports) {
'use strict';
const constants = require('./constants');
const utils = require('./utils');
/**
 * Constants
 */ const { MAX_LENGTH , POSIX_REGEX_SOURCE , REGEX_NON_SPECIAL_CHARS , REGEX_SPECIAL_CHARS_BACKREF , REPLACEMENTS  } = constants;
/**
 * Helpers
 */ const expandRange = (args, options)=>{
    if (typeof options.expandRange === 'function') return options.expandRange(...args, options);
    args.sort();
    const value = `[${args.join('-')}]`;
    try {
        /* eslint-disable-next-line no-new */ new RegExp(value);
    } catch (ex) {
        return args.map((v)=>utils.escapeRegex(v)
        ).join('..');
    }
    return value;
};
/**
 * Create the message for a syntax error
 */ const syntaxError = (type, char)=>{
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */ const parse = (input, options)=>{
    if (typeof input !== 'string') throw new TypeError('Expected a string');
    input = REPLACEMENTS[input] || input;
    const opts1 = {
        ...options
    };
    const max = typeof opts1.maxLength === 'number' ? Math.min(MAX_LENGTH, opts1.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    const bos = {
        type: 'bos',
        value: '',
        output: opts1.prepend || ''
    };
    const tokens = [
        bos
    ];
    const capture = opts1.capture ? '' : '?:';
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const PLATFORM_CHARS = constants.globChars(win32);
    const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
    const { DOT_LITERAL , PLUS_LITERAL , SLASH_LITERAL , ONE_CHAR , DOTS_SLASH , NO_DOT , NO_DOT_SLASH , NO_DOTS_SLASH , QMARK , QMARK_NO_DOT , STAR , START_ANCHOR  } = PLATFORM_CHARS;
    const globstar = (opts)=>{
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts1.dot ? '' : NO_DOT;
    const qmarkNoDot = opts1.dot ? QMARK : QMARK_NO_DOT;
    let star = opts1.bash === true ? globstar(opts1) : STAR;
    if (opts1.capture) star = `(${star})`;
    // minimatch options support
    if (typeof opts1.noext === 'boolean') opts1.noextglob = opts1.noext;
    const state = {
        input,
        index: -1,
        start: 0,
        dot: opts1.dot === true,
        consumed: '',
        output: '',
        prefix: '',
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
    };
    input = utils.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value1;
    /**
   * Tokenizing helpers
   */ const eos = ()=>state.index === len - 1
    ;
    const peek = state.peek = (n = 1)=>input[state.index + n]
    ;
    const advance = state.advance = ()=>input[++state.index] || ''
    ;
    const remaining = ()=>input.slice(state.index + 1)
    ;
    const consume = (value = '', num = 0)=>{
        state.consumed += value;
        state.index += num;
    };
    const append = (token)=>{
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
    };
    const negate = ()=>{
        let count = 1;
        while(peek() === '!' && (peek(2) !== '(' || peek(3) === '?')){
            advance();
            state.start++;
            count++;
        }
        if (count % 2 === 0) return false;
        state.negated = true;
        state.start++;
        return true;
    };
    const increment = (type)=>{
        state[type]++;
        stack.push(type);
    };
    const decrement = (type)=>{
        state[type]--;
        stack.pop();
    };
    /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */ const push = (tok)=>{
        if (prev.type === 'globstar') {
            const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');
            if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
                state.output = state.output.slice(0, -prev.output.length);
                prev.type = 'star';
                prev.value = '*';
                prev.output = star;
                state.output += prev.output;
            }
        }
        if (extglobs.length && tok.type !== 'paren') extglobs[extglobs.length - 1].inner += tok.value;
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === 'text' && tok.type === 'text') {
            prev.value += tok.value;
            prev.output = (prev.output || '') + tok.value;
            return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
    };
    const extglobOpen = (type, value)=>{
        const token = {
            ...EXTGLOB_CHARS[value],
            conditions: 1,
            inner: ''
        };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts1.capture ? '(' : '') + token.open;
        increment('parens');
        push({
            type,
            value,
            output: state.output ? '' : ONE_CHAR
        });
        push({
            type: 'paren',
            extglob: true,
            value: advance(),
            output
        });
        extglobs.push(token);
    };
    const extglobClose = (token)=>{
        let output = token.close + (opts1.capture ? ')' : '');
        let rest;
        if (token.type === 'negate') {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes('/')) extglobStar = globstar(opts1);
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) output = token.close = `)$))${extglobStar}`;
            if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
                // In this case, we need to parse the string and use it in the output of the original pattern.
                // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
                //
                // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
                const expression = parse(rest, {
                    ...options,
                    fastpaths: false
                }).output;
                output = token.close = `)${expression})${extglobStar})`;
            }
            if (token.prev.type === 'bos') state.negatedExtglob = true;
        }
        push({
            type: 'paren',
            extglob: true,
            value: value1,
            output
        });
        decrement('parens');
    };
    /**
   * Fast paths
   */ if (opts1.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index)=>{
            if (first === '\\') {
                backslashes = true;
                return m;
            }
            if (first === '?') {
                if (esc) return esc + first + (rest ? QMARK.repeat(rest.length) : '');
                if (index === 0) return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
                return QMARK.repeat(chars.length);
            }
            if (first === '.') return DOT_LITERAL.repeat(chars.length);
            if (first === '*') {
                if (esc) return esc + first + (rest ? star : '');
                return star;
            }
            return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
            if (opts1.unescape === true) output = output.replace(/\\/g, '');
            else output = output.replace(/\\+/g, (m)=>{
                return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
            });
        }
        if (output === input && opts1.contains === true) {
            state.output = input;
            return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
    }
    /**
   * Tokenize input until we reach end-of-string
   */ while(!eos()){
        value1 = advance();
        if (value1 === '\u0000') continue;
        /**
     * Escaped characters
     */ if (value1 === '\\') {
            const next = peek();
            if (next === '/' && opts1.bash !== true) continue;
            if (next === '.' || next === ';') continue;
            if (!next) {
                value1 += '\\';
                push({
                    type: 'text',
                    value: value1
                });
                continue;
            }
            // collapse slashes to reduce potential for exploits
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
                slashes = match[0].length;
                state.index += slashes;
                if (slashes % 2 !== 0) value1 += '\\';
            }
            if (opts1.unescape === true) value1 = advance();
            else value1 += advance();
            if (state.brackets === 0) {
                push({
                    type: 'text',
                    value: value1
                });
                continue;
            }
        }
        /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */ if (state.brackets > 0 && (value1 !== ']' || prev.value === '[' || prev.value === '[^')) {
            if (opts1.posix !== false && value1 === ':') {
                const inner = prev.value.slice(1);
                if (inner.includes('[')) {
                    prev.posix = true;
                    if (inner.includes(':')) {
                        const idx = prev.value.lastIndexOf('[');
                        const pre = prev.value.slice(0, idx);
                        const rest = prev.value.slice(idx + 2);
                        const posix = POSIX_REGEX_SOURCE[rest];
                        if (posix) {
                            prev.value = pre + posix;
                            state.backtrack = true;
                            advance();
                            if (!bos.output && tokens.indexOf(prev) === 1) bos.output = ONE_CHAR;
                            continue;
                        }
                    }
                }
            }
            if (value1 === '[' && peek() !== ':' || value1 === '-' && peek() === ']') value1 = `\\${value1}`;
            if (value1 === ']' && (prev.value === '[' || prev.value === '[^')) value1 = `\\${value1}`;
            if (opts1.posix === true && value1 === '!' && prev.value === '[') value1 = '^';
            prev.value += value1;
            append({
                value: value1
            });
            continue;
        }
        /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */ if (state.quotes === 1 && value1 !== '"') {
            value1 = utils.escapeRegex(value1);
            prev.value += value1;
            append({
                value: value1
            });
            continue;
        }
        /**
     * Double quotes
     */ if (value1 === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts1.keepQuotes === true) push({
                type: 'text',
                value: value1
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value1 === '(') {
            increment('parens');
            push({
                type: 'paren',
                value: value1
            });
            continue;
        }
        if (value1 === ')') {
            if (state.parens === 0 && opts1.strictBrackets === true) throw new SyntaxError(syntaxError('opening', '('));
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
                extglobClose(extglobs.pop());
                continue;
            }
            push({
                type: 'paren',
                value: value1,
                output: state.parens ? ')' : '\\)'
            });
            decrement('parens');
            continue;
        }
        /**
     * Square brackets
     */ if (value1 === '[') {
            if (opts1.nobracket === true || !remaining().includes(']')) {
                if (opts1.nobracket !== true && opts1.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
                value1 = `\\${value1}`;
            } else increment('brackets');
            push({
                type: 'bracket',
                value: value1
            });
            continue;
        }
        if (value1 === ']') {
            if (opts1.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
                push({
                    type: 'text',
                    value: value1,
                    output: `\\${value1}`
                });
                continue;
            }
            if (state.brackets === 0) {
                if (opts1.strictBrackets === true) throw new SyntaxError(syntaxError('opening', '['));
                push({
                    type: 'text',
                    value: value1,
                    output: `\\${value1}`
                });
                continue;
            }
            decrement('brackets');
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) value1 = `/${value1}`;
            prev.value += value1;
            append({
                value: value1
            });
            // when literal brackets are explicitly disabled
            // assume we should match with a regex character class
            if (opts1.literalBrackets === false || utils.hasRegexChars(prevValue)) continue;
            const escaped = utils.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            // when literal brackets are explicitly enabled
            // assume we should escape the brackets to match literal characters
            if (opts1.literalBrackets === true) {
                state.output += escaped;
                prev.value = escaped;
                continue;
            }
            // when the user specifies nothing, try to match both
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
        }
        /**
     * Braces
     */ if (value1 === '{' && opts1.nobrace !== true) {
            increment('braces');
            const open = {
                type: 'brace',
                value: value1,
                output: '(',
                outputIndex: state.output.length,
                tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
        }
        if (value1 === '}') {
            const brace = braces[braces.length - 1];
            if (opts1.nobrace === true || !brace) {
                push({
                    type: 'text',
                    value: value1,
                    output: value1
                });
                continue;
            }
            let output = ')';
            if (brace.dots === true) {
                const arr = tokens.slice();
                const range = [];
                for(let i = arr.length - 1; i >= 0; i--){
                    tokens.pop();
                    if (arr[i].type === 'brace') break;
                    if (arr[i].type !== 'dots') range.unshift(arr[i].value);
                }
                output = expandRange(range, opts1);
                state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
                const out = state.output.slice(0, brace.outputIndex);
                const toks = state.tokens.slice(brace.tokensIndex);
                brace.value = brace.output = '\\{';
                value1 = output = '\\}';
                state.output = out;
                for (const t of toks)state.output += t.output || t.value;
            }
            push({
                type: 'brace',
                value: value1,
                output
            });
            decrement('braces');
            braces.pop();
            continue;
        }
        /**
     * Pipes
     */ if (value1 === '|') {
            if (extglobs.length > 0) extglobs[extglobs.length - 1].conditions++;
            push({
                type: 'text',
                value: value1
            });
            continue;
        }
        /**
     * Commas
     */ if (value1 === ',') {
            let output = value1;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === 'braces') {
                brace.comma = true;
                output = '|';
            }
            push({
                type: 'comma',
                value: value1,
                output
            });
            continue;
        }
        /**
     * Slashes
     */ if (value1 === '/') {
            // if the beginning of the glob is "./", advance the start
            // to the current index, and don't add the "./" characters
            // to the state. This greatly simplifies lookbehinds when
            // checking for BOS characters like "!" and "." (not "./")
            if (prev.type === 'dot' && state.index === state.start + 1) {
                state.start = state.index + 1;
                state.consumed = '';
                state.output = '';
                tokens.pop();
                prev = bos; // reset "prev" to the first token
                continue;
            }
            push({
                type: 'slash',
                value: value1,
                output: SLASH_LITERAL
            });
            continue;
        }
        /**
     * Dots
     */ if (value1 === '.') {
            if (state.braces > 0 && prev.type === 'dot') {
                if (prev.value === '.') prev.output = DOT_LITERAL;
                const brace = braces[braces.length - 1];
                prev.type = 'dots';
                prev.output += value1;
                prev.value += value1;
                brace.dots = true;
                continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
                push({
                    type: 'text',
                    value: value1,
                    output: DOT_LITERAL
                });
                continue;
            }
            push({
                type: 'dot',
                value: value1,
                output: DOT_LITERAL
            });
            continue;
        }
        /**
     * Question marks
     */ if (value1 === '?') {
            const isGroup = prev && prev.value === '(';
            if (!isGroup && opts1.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('qmark', value1);
                continue;
            }
            if (prev && prev.type === 'paren') {
                const next = peek();
                let output = value1;
                if (next === '<' && !utils.supportsLookbehinds()) throw new Error('Node.js v10 or higher is required for regex lookbehinds');
                if (prev.value === '(' && !/[!=<:]/.test(next) || next === '<' && !/<([!=]|\w+>)/.test(remaining())) output = `\\${value1}`;
                push({
                    type: 'text',
                    value: value1,
                    output
                });
                continue;
            }
            if (opts1.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
                push({
                    type: 'qmark',
                    value: value1,
                    output: QMARK_NO_DOT
                });
                continue;
            }
            push({
                type: 'qmark',
                value: value1,
                output: QMARK
            });
            continue;
        }
        /**
     * Exclamation
     */ if (value1 === '!') {
            if (opts1.noextglob !== true && peek() === '(') {
                if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
                    extglobOpen('negate', value1);
                    continue;
                }
            }
            if (opts1.nonegate !== true && state.index === 0) {
                negate();
                continue;
            }
        }
        /**
     * Plus
     */ if (value1 === '+') {
            if (opts1.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('plus', value1);
                continue;
            }
            if (prev && prev.value === '(' || opts1.regex === false) {
                push({
                    type: 'plus',
                    value: value1,
                    output: PLUS_LITERAL
                });
                continue;
            }
            if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
                push({
                    type: 'plus',
                    value: value1
                });
                continue;
            }
            push({
                type: 'plus',
                value: PLUS_LITERAL
            });
            continue;
        }
        /**
     * Plain text
     */ if (value1 === '@') {
            if (opts1.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                push({
                    type: 'at',
                    extglob: true,
                    value: value1,
                    output: ''
                });
                continue;
            }
            push({
                type: 'text',
                value: value1
            });
            continue;
        }
        /**
     * Plain text
     */ if (value1 !== '*') {
            if (value1 === '$' || value1 === '^') value1 = `\\${value1}`;
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
                value1 += match[0];
                state.index += match[0].length;
            }
            push({
                type: 'text',
                value: value1
            });
            continue;
        }
        /**
     * Stars
     */ if (prev && (prev.type === 'globstar' || prev.star === true)) {
            prev.type = 'star';
            prev.star = true;
            prev.value += value1;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value1);
            continue;
        }
        let rest = remaining();
        if (opts1.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen('star', value1);
            continue;
        }
        if (prev.type === 'star') {
            if (opts1.noglobstar === true) {
                consume(value1);
                continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === 'slash' || prior.type === 'bos';
            const afterStar = before && (before.type === 'star' || before.type === 'globstar');
            if (opts1.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
                push({
                    type: 'star',
                    value: value1,
                    output: ''
                });
                continue;
            }
            const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
            const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
            if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
                push({
                    type: 'star',
                    value: value1,
                    output: ''
                });
                continue;
            }
            // strip consecutive `/**/`
            while(rest.slice(0, 3) === '/**'){
                const after = input[state.index + 4];
                if (after && after !== '/') break;
                rest = rest.slice(3);
                consume('/**', 3);
            }
            if (prior.type === 'bos' && eos()) {
                prev.type = 'globstar';
                prev.value += value1;
                prev.output = globstar(opts1);
                state.output = prev.output;
                state.globstar = true;
                consume(value1);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = globstar(opts1) + (opts1.strictSlashes ? ')' : '|$)');
                prev.value += value1;
                state.globstar = true;
                state.output += prior.output + prev.output;
                consume(value1);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
                const end = rest[1] !== void 0 ? '|$' : '';
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = `${globstar(opts1)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
                prev.value += value1;
                state.output += prior.output + prev.output;
                state.globstar = true;
                consume(value1 + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            if (prior.type === 'bos' && rest[0] === '/') {
                prev.type = 'globstar';
                prev.value += value1;
                prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts1)}${SLASH_LITERAL})`;
                state.output = prev.output;
                state.globstar = true;
                consume(value1 + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            // remove single star from output
            state.output = state.output.slice(0, -prev.output.length);
            // reset previous token to globstar
            prev.type = 'globstar';
            prev.output = globstar(opts1);
            prev.value += value1;
            // reset output with globstar
            state.output += prev.output;
            state.globstar = true;
            consume(value1);
            continue;
        }
        const token = {
            type: 'star',
            value: value1,
            output: star
        };
        if (opts1.bash === true) {
            token.output = '.*?';
            if (prev.type === 'bos' || prev.type === 'slash') token.output = nodot + token.output;
            push(token);
            continue;
        }
        if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts1.regex === true) {
            token.output = value1;
            push(token);
            continue;
        }
        if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
            if (prev.type === 'dot') {
                state.output += NO_DOT_SLASH;
                prev.output += NO_DOT_SLASH;
            } else if (opts1.dot === true) {
                state.output += NO_DOTS_SLASH;
                prev.output += NO_DOTS_SLASH;
            } else {
                state.output += nodot;
                prev.output += nodot;
            }
            if (peek() !== '*') {
                state.output += ONE_CHAR;
                prev.output += ONE_CHAR;
            }
        }
        push(token);
    }
    while(state.brackets > 0){
        if (opts1.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
        state.output = utils.escapeLast(state.output, '[');
        decrement('brackets');
    }
    while(state.parens > 0){
        if (opts1.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
        state.output = utils.escapeLast(state.output, '(');
        decrement('parens');
    }
    while(state.braces > 0){
        if (opts1.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
        state.output = utils.escapeLast(state.output, '{');
        decrement('braces');
    }
    if (opts1.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) push({
        type: 'maybe_slash',
        value: '',
        output: `${SLASH_LITERAL}?`
    });
    // rebuild the output if we had to backtrack at any point
    if (state.backtrack === true) {
        state.output = '';
        for (const token of state.tokens){
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) state.output += token.suffix;
        }
    }
    return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */ parse.fastpaths = (input, options)=>{
    const opts2 = {
        ...options
    };
    const max = typeof opts2.maxLength === 'number' ? Math.min(MAX_LENGTH, opts2.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    input = REPLACEMENTS[input] || input;
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const { DOT_LITERAL , SLASH_LITERAL , ONE_CHAR , DOTS_SLASH , NO_DOT , NO_DOTS , NO_DOTS_SLASH , STAR , START_ANCHOR  } = constants.globChars(win32);
    const nodot = opts2.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts2.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts2.capture ? '' : '?:';
    const state = {
        negated: false,
        prefix: ''
    };
    let star = opts2.bash === true ? '.*?' : STAR;
    if (opts2.capture) star = `(${star})`;
    const globstar = (opts)=>{
        if (opts.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str)=>{
        switch(str){
            case '*':
                return `${nodot}${ONE_CHAR}${star}`;
            case '.*':
                return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*.*':
                return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*/*':
                return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case '**':
                return nodot + globstar(opts2);
            case '**/*':
                return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case '**/*.*':
                return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '**/.*':
                return `(?:${nodot}${globstar(opts2)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default:
                {
                    const match = /^(.*?)\.(\w+)$/.exec(str);
                    if (!match) return;
                    const source = create(match[1]);
                    if (!source) return;
                    return source + DOT_LITERAL + match[2];
                }
        }
    };
    const output = utils.removePrefix(input, state);
    let source1 = create(output);
    if (source1 && opts2.strictSlashes !== true) source1 += `${SLASH_LITERAL}?`;
    return source1;
};
module.exports = parse;

},{"./constants":"4FnOW","./utils":"24Cmt"}],"jcRMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModuleNotFoundError", ()=>ModuleNotFoundError
);
var _sandpackError = require("./SandpackError");
class ModuleNotFoundError extends _sandpackError.SandpackError {
    code = 'MODULE_NOT_FOUND';
    constructor(filepath, parent){
        super(`Cannot find module '${filepath}' from '${parent}'`);
        this.parent = parent;
        this.filepath = filepath;
    }
}

},{"./SandpackError":"3HAYS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7C40W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAbsolute", ()=>isAbsolute
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "join", ()=>join
);
parcelHelpers.export(exports, "dirname", ()=>dirname
);
parcelHelpers.export(exports, "basename", ()=>basename
);
parcelHelpers.export(exports, "absolute", ()=>absolute
);
parcelHelpers.export(exports, "extname", ()=>extname
);
parcelHelpers.export(exports, "resolve", ()=>resolve
);
parcelHelpers.export(exports, "relative", ()=>relative
);
var process = require("process");
const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
function splitPath(filename) {
    const result = splitPathRe.exec(filename);
    return result?.slice(1) ?? '';
}
// resolves . and .. elements in a path array with directory names there
// must be no slashes or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
    const res = [];
    for(let i = 0; i < parts.length; i += 1){
        const p = parts[i];
        // ignore empty parts
        if (!p || p === '.') continue; // eslint-disable-line no-continue
        if (p === '..') {
            if (res.length && res[res.length - 1] !== '..') res.pop();
            else if (allowAboveRoot) res.push('..');
        } else res.push(p);
    }
    return res;
}
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
function normalize(path) {
    const isAbs = isAbsolute(path);
    const trailingSlash = path && path[path.length - 1] === '/';
    let newPath = path;
    // Normalize the path
    newPath = normalizeArray(newPath.split('/'), !isAbs).join('/');
    if (!newPath && !isAbs) newPath = '.';
    if (newPath && trailingSlash) newPath += '/';
    return (isAbs ? '/' : '') + newPath;
}
function join(...paths) {
    let path = '';
    for(let i = 0; i < paths.length; i += 1){
        const segment = paths[i];
        if (typeof segment !== 'string') throw new TypeError('Arguments to path.join must be strings');
        if (segment) {
            if (!path) path += segment;
            else path += `/${segment}`;
        }
    }
    return normalize(path);
}
function dirname(path) {
    const result = splitPath(path);
    const root = result[0];
    let dir = result[1];
    if (!root && !dir) // No dirname whatsoever
    return '.';
    if (dir) // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
    return root + dir;
}
function basename(p, ext = '') {
    // Special case: Normalize will modify this to '.'
    if (p === '') return p;
    // Normalize the string first to remove any weirdness.
    const path = normalize(p);
    // Get the last part of the string.
    const sections = path.split('/');
    const lastPart = sections[sections.length - 1];
    // Special case: If it's empty, then we have a string like so: foo/
    // Meaning, 'foo' is guaranteed to be a directory.
    if (lastPart === '' && sections.length > 1) return sections[sections.length - 2];
    // Remove the extension, if need be.
    if (ext.length > 0) {
        const lastPartExt = lastPart.substr(lastPart.length - ext.length);
        if (lastPartExt === ext) return lastPart.substr(0, lastPart.length - ext.length);
    }
    return lastPart;
}
function absolute(path) {
    if (path.startsWith('/')) return path;
    if (path.startsWith('./')) return path.replace('./', '/');
    return '/' + path;
}
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
function extname(path) {
    assertPath(path);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0;
    for(let i = path.length - 1; i >= 0; --i){
        const code = path.charCodeAt(i);
        if (code === 47) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46 /* . */ ) {
            // If this is our first dot, mark it as the start of our extension
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
    return path.slice(startDot, end);
}
function resolve(...args) {
    let resolvedPath = '';
    let resolvedAbsolute = false;
    for(let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--){
        const path = i >= 0 ? args[i] : process.cwd();
        // Skip empty and invalid entries
        if (typeof path !== 'string') throw new TypeError('Arguments to path.resolve must be strings');
        else if (!path) continue;
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path[0] === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/'), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
function trimArray(arr) {
    const lastIndex = arr.length - 1;
    let start = 0;
    for(; start <= lastIndex; start++){
        if (arr[start]) break;
    }
    let end = lastIndex;
    for(; end >= 0; end--){
        if (arr[end]) break;
    }
    if (start === 0 && end === lastIndex) return arr;
    if (start > end) return [];
    return arr.slice(start, end + 1);
}
function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    const fromParts = trimArray(from.split('/'));
    const toParts = trimArray(to.split('/'));
    const length = Math.min(fromParts.length, toParts.length);
    let samePartsLength = length;
    for(let i = 0; i < length; i++)if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
    }
    let outputParts = [];
    for(let i1 = samePartsLength; i1 < fromParts.length; i1++)outputParts.push('..');
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}

},{"process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sQ9k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFile", ()=>isFile
);
parcelHelpers.export(exports, "getParentDirectories", ()=>getParentDirectories
);
var _constants = require("./constants");
function* isFile(filepath, isFileFn) {
    if (filepath === _constants.EMPTY_SHIM) return true;
    return yield* isFileFn(filepath);
}
function getParentDirectories(filepath, rootDir = '/') {
    const parts = filepath.split('/');
    const directories = [];
    while(parts.length > 0){
        const directory = parts.join('/') || '/';
        // Test /foo vs /foo-something - /foo-something is not in rootDir
        if (directory.length < rootDir.length || !directory.startsWith(rootDir)) break;
        directories.push(directory);
        parts.pop();
    }
    return directories;
}

},{"./constants":"gKmcI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKmcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_SHIM", ()=>EMPTY_SHIM
);
const EMPTY_SHIM = '//empty.js';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vP6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extractModuleSpecifierParts", ()=>extractModuleSpecifierParts
);
parcelHelpers.export(exports, "isModuleSpecifier", ()=>isModuleSpecifier
);
const extractModuleSpecifierParts = (specifier)=>{
    const parts = specifier.split('/');
    const pkgName = parts[0][0] === '@' ? parts.splice(0, 2).join('/') : parts.shift();
    return {
        pkgName,
        filepath: parts.join('/')
    };
};
const isModuleSpecifier = (specifier)=>{
    return /^(\w|@\w|@-)/.test(specifier);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KBED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "processPackageJSON", ()=>processPackageJSON
);
var _alias = require("./alias");
var _constants = require("./constants");
var _exports = require("./exports");
// alias/exports/main keys, sorted from high to low priority
const MAIN_PKG_FIELDS = [
    'module',
    'browser',
    'main',
    'jsnext:main'
];
const PKG_ALIAS_FIELDS = [
    'browser',
    'alias'
];
function processPackageJSON(content, pkgRoot) {
    if (!content || typeof content !== 'object') return {
        aliases: {}
    };
    const aliases = {};
    for (const mainField of MAIN_PKG_FIELDS)if (typeof content[mainField] === 'string') {
        aliases[pkgRoot] = _alias.normalizeAliasFilePath(content[mainField], pkgRoot);
        break;
    }
    if (content.browser === false) aliases[pkgRoot] = _constants.EMPTY_SHIM;
    for (const aliasFieldKey of PKG_ALIAS_FIELDS){
        const aliasField = content[aliasFieldKey];
        if (typeof aliasField === 'object') for (const key of Object.keys(aliasField)){
            const val = aliasField[key] || _constants.EMPTY_SHIM;
            const normalizedKey = _alias.normalizeAliasFilePath(key, pkgRoot, false);
            const normalizedValue = _alias.normalizeAliasFilePath(val, pkgRoot, false);
            aliases[normalizedKey] = normalizedValue;
            if (aliasFieldKey !== 'browser') aliases[`${normalizedKey}/*`] = `${normalizedValue}/$1`;
        }
    }
    // load exports if it's not the root pkg.json
    if (content.exports && pkgRoot !== '/') {
        if (typeof content.exports === 'string') aliases[pkgRoot] = _alias.normalizeAliasFilePath(content.exports, pkgRoot);
        else if (typeof content.exports === 'object') for (const exportKey of Object.keys(content.exports)){
            const exportValue = _exports.extractPathFromExport(content.exports[exportKey], pkgRoot);
            const normalizedKey = _alias.normalizeAliasFilePath(exportKey, pkgRoot);
            aliases[normalizedKey] = exportValue || _constants.EMPTY_SHIM;
        }
    }
    return {
        aliases
    };
}

},{"./alias":"y62Na","./constants":"gKmcI","./exports":"4aPCP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"y62Na":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeAliasFilePath", ()=>normalizeAliasFilePath
);
var _path = require("../../utils/path");
function normalizeAliasFilePath(specifier, pkgRoot, // This can be set to false to fallback to returning the specifier in case it can be a node_module
isFilePath = true) {
    if (specifier[0] === '/') return specifier;
    if (specifier[0] === '.' || isFilePath) return _path.join(pkgRoot, specifier);
    return specifier;
}

},{"../../utils/path":"7C40W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4aPCP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizePackageExport", ()=>normalizePackageExport
);
parcelHelpers.export(exports, "extractPathFromExport", ()=>extractPathFromExport
);
var _alias = require("./alias");
// exports keys, sorted from high to low priority
const EXPORTS_KEYS = [
    'browser',
    'development',
    'default',
    'require',
    'import'
];
function normalizePackageExport(filepath, pkgRoot) {
    return _alias.normalizeAliasFilePath(filepath.replace(/\*/g, '$1'), pkgRoot);
}
function extractPathFromExport(exportValue, pkgRoot) {
    if (!exportValue) return false;
    if (typeof exportValue === 'string') return normalizePackageExport(exportValue, pkgRoot);
    if (Array.isArray(exportValue)) {
        const foundPaths = exportValue.map((v)=>extractPathFromExport(v, pkgRoot)
        ).filter(Boolean);
        if (!foundPaths.length) return false;
        return foundPaths[0];
    }
    if (typeof exportValue === 'object') {
        for (const key of EXPORTS_KEYS){
            const exportFilename = exportValue[key];
            if (exportFilename !== undefined) {
                if (typeof exportFilename === 'string') return normalizePackageExport(exportFilename, pkgRoot);
                return extractPathFromExport(exportFilename, pkgRoot);
            }
        }
        return false;
    }
    throw new Error(`Unsupported export type ${typeof exportValue}`);
}

},{"./alias":"y62Na","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86zzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "processTSConfig", ()=>processTSConfig
);
parcelHelpers.export(exports, "getPotentialPathsFromTSConfig", ()=>getPotentialPathsFromTSConfig
);
var _stripJsonComments = require("strip-json-comments");
var _stripJsonCommentsDefault = parcelHelpers.interopDefault(_stripJsonComments);
var _path = require("../../utils/path");
function processTSConfig(content) {
    const parsed = JSON.parse(_stripJsonCommentsDefault.default(content))?.compilerOptions || {};
    if (parsed.baseUrl) {
        const paths = {};
        if (parsed.paths) for (const p of Object.keys(parsed.paths))paths[p] = parsed.paths[p].map((val)=>{
            return _path.join('/', parsed.baseUrl, val).replace(/\*/g, '');
        });
        return {
            baseUrl: _path.join('/', parsed.baseUrl),
            paths
        };
    }
    return null;
}
function getPotentialPathsFromTSConfig(moduleSpecifier, config) {
    const res = [];
    for (const p of Object.keys(config.paths)){
        if (p.endsWith('*')) {
            const prefix = p.substring(0, p.length - 1);
            if (moduleSpecifier.startsWith(prefix)) {
                const suffix = moduleSpecifier.substr(prefix.length);
                for (const alias of config.paths[p])res.push(alias + suffix);
            }
        } else if (moduleSpecifier === p) res.push(...config.paths[p]);
    }
    res.push(_path.join(config.baseUrl, moduleSpecifier));
    return res;
}

},{"strip-json-comments":"7pvL4","../../utils/path":"7C40W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pvL4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const singleComment = Symbol('singleComment');
const multiComment = Symbol('multiComment');
const stripWithoutWhitespace = ()=>''
;
const stripWithWhitespace = (string, start, end)=>string.slice(start, end).replace(/\S/g, ' ')
;
const isEscaped = (jsonString, quotePosition)=>{
    let index = quotePosition - 1;
    let backslashCount = 0;
    while(jsonString[index] === '\\'){
        index -= 1;
        backslashCount += 1;
    }
    return Boolean(backslashCount % 2);
};
function stripJsonComments(jsonString, { whitespace =true  } = {}) {
    if (typeof jsonString !== 'string') throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof jsonString}\``);
    const strip = whitespace ? stripWithWhitespace : stripWithoutWhitespace;
    let isInsideString = false;
    let isInsideComment = false;
    let offset = 0;
    let result = '';
    for(let index = 0; index < jsonString.length; index++){
        const currentCharacter = jsonString[index];
        const nextCharacter = jsonString[index + 1];
        if (!isInsideComment && currentCharacter === '"') {
            const escaped = isEscaped(jsonString, index);
            if (!escaped) isInsideString = !isInsideString;
        }
        if (isInsideString) continue;
        if (!isInsideComment && currentCharacter + nextCharacter === '//') {
            result += jsonString.slice(offset, index);
            offset = index;
            isInsideComment = singleComment;
            index++;
        } else if (isInsideComment === singleComment && currentCharacter + nextCharacter === '\r\n') {
            index++;
            isInsideComment = false;
            result += strip(jsonString, offset, index);
            offset = index;
            continue;
        } else if (isInsideComment === singleComment && currentCharacter === '\n') {
            isInsideComment = false;
            result += strip(jsonString, offset, index);
            offset = index;
        } else if (!isInsideComment && currentCharacter + nextCharacter === '/*') {
            result += jsonString.slice(offset, index);
            offset = index;
            isInsideComment = multiComment;
            index++;
            continue;
        } else if (isInsideComment === multiComment && currentCharacter + nextCharacter === '*/') {
            index++;
            isInsideComment = false;
            result += strip(jsonString, offset, index + 1);
            offset = index + 1;
            continue;
        }
    }
    return result + (isInsideComment ? strip(jsonString.slice(offset)) : jsonString.slice(offset));
}
exports.default = stripJsonComments;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Vblt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Waits for the event to fire, then resolves the promise once finished
 */ parcelHelpers.export(exports, "listenOnce", ()=>listenOnce
);
parcelHelpers.export(exports, "Emitter", ()=>Emitter
);
var _disposable = require("./Disposable");
function listenOnce(event) {
    return new Promise((resolve)=>{
        const disposable = event((result)=>{
            disposable.dispose();
            resolve(result);
        });
    });
}
class Emitter {
    registeredListeners = new Set();
    get event() {
        if (!this._event) this._event = (listener)=>{
            this.registeredListeners.add(listener);
            return _disposable.Disposable.create(()=>{
                this.registeredListeners.delete(listener);
            });
        };
        return this._event;
    }
    /** Invoke all listeners registered to this event. */ fire(event) {
        this.registeredListeners.forEach((listener)=>{
            listener(event);
        });
    }
    dispose() {
        this.registeredListeners = new Set();
    }
}

},{"./Disposable":"jd2DF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jd2DF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Disposable", ()=>Disposable
);
/**
 * A store where you can track multiple disposables. Mostly a utility.
 */ parcelHelpers.export(exports, "DisposableStore", ()=>DisposableStore
);
var _logger = require("../utils/logger");
var _emitter = require("./emitter");
class Disposable {
    onWillDisposeEmitter = new _emitter.Emitter();
    onWillDispose = this.onWillDisposeEmitter.event;
    onDidDisposeEmitter = new _emitter.Emitter();
    onDidDispose = this.onDidDisposeEmitter.event;
    toDispose = [];
    isDisposed = false;
    onDispose(cb) {
        this.toDispose.push(Disposable.create(cb));
    }
    dispose() {
        if (this.isDisposed) return;
        this.onWillDisposeEmitter.fire(null);
        this.isDisposed = true;
        this.toDispose.forEach((disposable)=>{
            disposable.dispose();
        });
        this.onDidDisposeEmitter.fire(null);
        this.onWillDisposeEmitter.dispose();
        this.onDidDisposeEmitter.dispose();
    }
    static is(arg) {
        return typeof arg['dispose'] === 'function';
    }
    static create(cb) {
        return {
            dispose: cb
        };
    }
}
class DisposableStore {
    static DISABLE_DISPOSED_WARNING = false;
    _toDispose = new Set();
    _isDisposed = false;
    /**
   * Dispose of all registered disposables and mark this object as disposed.
   *
   * Any future disposables added to this object will be disposed of on `add`.
   */ dispose() {
        if (this._isDisposed) return;
        this._isDisposed = true;
        this.clear();
    }
    /**
   * Dispose of all registered disposables but do not mark this object as disposed.
   */ clear() {
        try {
            for (const disposable of this._toDispose.values())disposable.dispose();
        } finally{
            this._toDispose.clear();
        }
    }
    add(o) {
        if (!o) return o;
        if (o === this) throw new Error('Cannot register a disposable on itself!');
        if (this._isDisposed) {
            if (!DisposableStore.DISABLE_DISPOSED_WARNING) _logger.warn(new Error('Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!').stack);
        } else this._toDispose.add(o);
        return o;
    }
}

},{"../utils/logger":"4rlpq","./emitter":"2Vblt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k7RAK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHTMLParts", ()=>getHTMLParts
);
/**
 * TODO: Use a new iframe that contains the actual html and injects sandpack as a little script that runs in the correct order
 *
 * Example:
 * <html>
 *   <head>
 *     <script src="google.com/maps.js"></script>
 *   </head>
 *
 *   <body>
 *     <div id="root" />
 *
 *     <script>
 *       // Injected by sandpack - this ensures
 *       window.sandpack.evaluate();
 *     </script>
 *
 *     <script src="unpkg.com/jquery.min.js"></script>
 *   </body>
 * </html>
 */ parcelHelpers.export(exports, "replaceHTML", ()=>replaceHTML
);
function getHTMLParts(html) {
    if (html.includes('<body>')) {
        const bodyMatcher = /<body.*>([\s\S]*)<\/body>/m;
        const headMatcher = /<head>([\s\S]*)<\/head>/m;
        const headMatch = html.match(headMatcher);
        const bodyMatch = html.match(bodyMatcher);
        const head = headMatch && headMatch[1] ? headMatch[1] : '';
        const body = bodyMatch && bodyMatch[1] ? bodyMatch[1] : html;
        return {
            body,
            head
        };
    }
    return {
        head: '',
        body: html
    };
}
async function replaceHTML(html) {
    const { head , body  } = getHTMLParts(html);
    // We only replace the body for now
    document.body.innerHTML = body;
    return {
        head,
        body
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gn4Tf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NamedPromiseQueue", ()=>NamedPromiseQueue
);
var _pQueue = require("p-queue");
var _pQueueDefault = parcelHelpers.interopDefault(_pQueue);
class NamedPromiseQueue {
    constructor(autoStart, concurrency = 50){
        this.promises = new Map();
        this.queue = new _pQueueDefault.default({
            autoStart,
            concurrency
        });
    }
    addEntry(id, run) {
        let foundPromise = this.promises.get(id);
        if (!foundPromise) foundPromise = this.queue.add(run).finally(()=>{
            this.promises.delete(id);
        });
        this.promises.set(id, foundPromise);
        return foundPromise;
    }
    getItem(id) {
        return this.promises.get(id);
    }
    clear() {
        this.promises = new Map();
        this.queue.clear();
    }
    onIdle() {
        return this.queue.onIdle();
    }
}

},{"p-queue":"3KoWO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KoWO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const EventEmitter = require("eventemitter3");
const p_timeout_1 = require("p-timeout");
const priority_queue_1 = require("./priority-queue");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const empty = ()=>{};
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/ class PQueue extends EventEmitter {
    constructor(options){
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = Object.assign({
            carryoverConcurrencyCount: false,
            intervalCap: Infinity,
            interval: 0,
            concurrency: Infinity,
            autoStart: true,
            queueClass: priority_queue_1.default
        }, options);
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ''}\` (${typeof options.intervalCap})`);
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ''}\` (${typeof options.interval})`);
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit('next');
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
            this.emit('idle');
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) // Act as the interval was done
            // We don't need to resume it here because it will be resumed on line 160
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) this._timeoutId = setTimeout(()=>{
                    this._onResumeInterval();
                }, delay);
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) clearInterval(this._intervalId);
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                const job = this._queue.dequeue();
                if (!job) return false;
                this.emit('active');
                job();
                if (canInitializeInterval) this._initializeIntervalIfNeeded();
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) return;
        this._intervalId = setInterval(()=>{
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */ _processQueue() {
        // eslint-disable-next-line no-empty
        while(this._tryToStartAnother());
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */ async add(fn, options = {}) {
        return new Promise((resolve, reject)=>{
            const run = async ()=>{
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = this._timeout === undefined && options.timeout === undefined ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === undefined ? this._timeout : options.timeout, ()=>{
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) reject(timeoutError);
                        return undefined;
                    });
                    resolve(await operation);
                } catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
            this.emit('add');
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */ async addAll(functions, options) {
        return Promise.all(functions.map(async (function_)=>this.add(function_, options)
        ));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */ start() {
        if (!this._isPaused) return this;
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */ pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */ clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */ async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) return;
        return new Promise((resolve)=>{
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = ()=>{
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */ async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) return;
        return new Promise((resolve)=>{
            const existingResolve = this._resolveIdle;
            this._resolveIdle = ()=>{
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */ get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */ sizeBy(options) {
        // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */ get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */ get isPaused() {
        return this._isPaused;
    }
    get timeout() {
        return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */ set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
}
exports.default = PQueue;

},{"eventemitter3":"3fnfh","p-timeout":"2j2Zi","./priority-queue":"grf7X"}],"3fnfh":[function(require,module,exports) {
'use strict';
var has = Object.prototype.hasOwnProperty, prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"2j2Zi":[function(require,module,exports) {
'use strict';
const pFinally = require('p-finally');
class TimeoutError extends Error {
    constructor(message){
        super(message);
        this.name = 'TimeoutError';
    }
}
const pTimeout = (promise, milliseconds, fallback)=>new Promise((resolve, reject)=>{
        if (typeof milliseconds !== 'number' || milliseconds < 0) throw new TypeError('Expected `milliseconds` to be a positive number');
        if (milliseconds === Infinity) {
            resolve(promise);
            return;
        }
        const timer = setTimeout(()=>{
            if (typeof fallback === 'function') {
                try {
                    resolve(fallback());
                } catch (error) {
                    reject(error);
                }
                return;
            }
            const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
            const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
            if (typeof promise.cancel === 'function') promise.cancel();
            reject(timeoutError);
        }, milliseconds);
        // TODO: Use native `finally` keyword when targeting Node.js 10
        pFinally(// eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject), ()=>{
            clearTimeout(timer);
        });
    })
;
module.exports = pTimeout;
// TODO: Remove this for the next major release
module.exports.default = pTimeout;
module.exports.TimeoutError = TimeoutError;

},{"p-finally":"jBZa9"}],"jBZa9":[function(require,module,exports) {
'use strict';
module.exports = (promise, onFinally)=>{
    onFinally = onFinally || (()=>{});
    return promise.then((val)=>new Promise((resolve)=>{
            resolve(onFinally());
        }).then(()=>val
        )
    , (err)=>new Promise((resolve)=>{
            resolve(onFinally());
        }).then(()=>{
            throw err;
        })
    );
};

},{}],"grf7X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const lower_bound_1 = require("./lower-bound");
class PriorityQueue {
    constructor(){
        this._queue = [];
    }
    enqueue(run, options) {
        options = Object.assign({
            priority: 0
        }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b)=>b.priority - a.priority
        );
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
    }
    filter(options) {
        return this._queue.filter((element)=>element.priority === options.priority
        ).map((element)=>element.run
        );
    }
    get size() {
        return this._queue.length;
    }
}
exports.default = PriorityQueue;

},{"./lower-bound":"etZjf"}],"etZjf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while(count > 0){
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        } else count = step;
    }
    return first;
}
exports.default = lowerBound;

},{}],"ecdIv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nullthrows", ()=>nullthrows
);
function nullthrows(value, message) {
    if (value == null) throw new Error(message || 'Value is nullish');
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8uXN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModuleRegistry", ()=>ModuleRegistry
);
var _logger = require("../../utils/logger");
var _object = require("../../utils/object");
var _module = require("../module/Module");
var _buildDep = require("./build-dep");
var _moduleCdn = require("./module-cdn");
var _nodeModule = require("./NodeModule");
class ModuleRegistry {
    modules = new Map();
    moduleDownloadPromises = new Map();
    manifest = [];
    constructor(bundler){
        this.bundler = bundler;
    }
    async fetchManifest(deps, shouldFilterBuildDeps = true) {
        if (shouldFilterBuildDeps) deps = _buildDep.filterBuildDeps(deps);
        const sortedDeps = _object.sortObj(deps);
        _logger.debug('Fetching manifest', sortedDeps);
        this.manifest = await _moduleCdn.fetchManifest(sortedDeps);
        _logger.debug('fetched manifest', this.manifest);
    }
    async preloadModules() {
        await Promise.all(this.manifest.map((dep)=>{
            return this.fetchNodeModule(dep.n, dep.v);
        }));
    }
    async _fetchModule(name, version) {
        const module = await _moduleCdn.fetchModule(name, version);
        const processedNodeModule = new _nodeModule.NodeModule(name, version, module.f, module.m);
        this.modules.set(name, processedNodeModule);
        _logger.debug('fetched module', name, version, module);
        return processedNodeModule;
    }
    async fetchNodeModule(name, version) {
        // Module already found, skip fetching
        // This could also check version, but for now this is fine
        // as we don't allow multiple versions of the same module right now
        const foundModule = this.modules.get(name);
        if (foundModule) return foundModule;
        const cacheKey = `${name}::${version}`;
        let promise = this.moduleDownloadPromises.get(cacheKey);
        if (!promise) {
            promise = this._fetchModule(name, version).finally(()=>this.moduleDownloadPromises.delete(cacheKey)
            );
            this.moduleDownloadPromises.set(cacheKey, promise);
        }
        return promise;
    }
    _writePrecompiledModule(path, file) {
        if (this.bundler.modules.has(path)) return [];
        const module = new _module.Module(path, file.c, true, this.bundler);
        this.bundler.modules.set(path, module);
        return file.d.map((dep)=>{
            return async ()=>{
                await module.addDependency(dep);
                for (let dep1 of module.dependencies)this.bundler.transformModule(dep1);
            };
        });
    }
    async loadModuleDependencies() {
        const depPromises = [];
        for (let [moduleName, nodeModule] of this.modules){
            for (let [fileName, file] of Object.entries(nodeModule.files))if (typeof file === 'object') {
                const promises = this._writePrecompiledModule(`/node_modules/${moduleName}/${fileName}`, file);
                depPromises.push(...promises);
            }
        }
        await Promise.all(depPromises.map((fn)=>fn()
        ));
    }
}

},{"../../utils/logger":"4rlpq","../../utils/object":"3SdfS","../module/Module":"hTz7X","./build-dep":"3OUrO","./module-cdn":"e8g5z","./NodeModule":"kOq9n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SdfS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortObj", ()=>sortObj
);
function sortObj(obj) {
    const res = {};
    const sortedKeys = Object.keys(obj).sort();
    for (let key of sortedKeys)res[key] = obj[key];
    return res;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTz7X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Module", ()=>Module
);
var _bundlerError = require("../../errors/BundlerError");
var _evaluation = require("./Evaluation");
var _hot = require("./hot");
class Module {
    isEntry = false;
    evaluation = null;
    compilationError = null;
    constructor(filepath, source, isCompiled = false, bundler){
        this.id = filepath;
        this.filepath = filepath;
        this.source = source;
        this.compiled = isCompiled ? source : null;
        this.dependencies = new Set();
        this.dependencyMap = new Map();
        this.bundler = bundler;
        this.hot = new _hot.HotContext(this);
    }
    get initiators() {
        return this.bundler.getInitiators(this.id);
    }
    isHot() {
        return Boolean(this.hot.hmrConfig?.isHot());
    }
    /** Add dependency */ async addDependency(depSpecifier) {
        const resolved = await this.bundler.resolveAsync(depSpecifier, this.filepath);
        this.dependencies.add(resolved);
        this.dependencyMap.set(depSpecifier, resolved);
        this.bundler.addInitiator(resolved, this.id);
    }
    async compile() {
        if (this.compiled != null || this.compilationError != null) return;
        try {
            const preset = this.bundler.preset;
            if (!preset) throw new Error('Preset has not been initialized');
            const transformers = preset.getTransformers(this);
            if (!transformers.length) throw new Error(`No transformers found for ${this.filepath}`);
            let code = this.source;
            for (const [transformer, config] of transformers){
                const transformationResult = await transformer.transform({
                    module: this,
                    code
                }, config);
                if (transformationResult instanceof _bundlerError.BundlerError) this.compilationError = transformationResult;
                else {
                    code = transformationResult.code;
                    await Promise.all(Array.from(transformationResult.dependencies).map((d)=>{
                        return this.addDependency(d);
                    }));
                }
            }
            this.compiled = code;
        } catch (err) {
            this.compilationError = err;
        }
    }
    resetCompilation() {
        // We always reset compilation errors as this will be non-null while compilation is null
        this.compilationError = null;
        // Skip modules that don't have any compilation
        if (this.compiled == null) return;
        this.compiled = null;
        this.evaluation = null;
        if (this.hot.hmrConfig && this.hot.hmrConfig.isHot()) this.hot.hmrConfig.setDirty(true);
        else // for (let initiator of this.initiators) {
        //   const module = this.bundler.getModule(initiator);
        //   module?.resetCompilation();
        // }
        // // If this is an entry we want all direct entries to be reset as well.
        // // Entries generally have side effects
        // if (this.isEntry) {
        //   for (let dependency of this.dependencies) {
        //     const module = this.bundler.getModule(dependency);
        //     module?.resetCompilation();
        //   }
        // }
        location.reload();
        this.bundler.transformModule(this.filepath);
    }
    evaluate() {
        if (this.evaluation) return this.evaluation;
        if (this.hot.hmrConfig) // this.bundler.setHmrStatus('dispose');
        // Call module.hot.dispose handler
        // https://webpack.js.org/api/hot-module-replacement/#dispose-or-adddisposehandler-
        this.hot.hmrConfig.callDisposeHandler();
        // Reset hmr context while keeping the previous hot data
        this.hot = this.hot.clone();
        this.evaluation = new _evaluation.Evaluation(this);
        // this.bundler.setHmrStatus('apply');
        if (this.hot.hmrConfig && this.hot.hmrConfig.isHot()) {
            this.hot.hmrConfig.setDirty(false);
            this.hot.hmrConfig.callAcceptCallback();
        }
        // this.bundler.setHmrStatus('idle');
        return this.evaluation;
    }
}

},{"../../errors/BundlerError":"3sU3O","./Evaluation":"2gpr8","./hot":"aV5P9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gpr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Evaluation", ()=>Evaluation
);
var _logger = require("../../utils/logger");
var _eval = require("./eval");
var _evalDefault = parcelHelpers.interopDefault(_eval);
class EvaluationContext {
    constructor(evaluation){
        this.exports = {};
        this.globals = {};
        this.hot = evaluation.module.hot;
        this.id = evaluation.module.id;
    }
}
class Evaluation {
    constructor(module){
        this.module = module;
        const code = module.compiled + `\n//# sourceURL=${location.origin}${this.module.filepath}`;
        this.context = new EvaluationContext(this);
        this.context.exports = _evalDefault.default(code, this.require.bind(this), this.context, {}, {});
    }
    require(specifier) {
        const moduleFilePath = this.module.dependencyMap.get(specifier);
        if (!moduleFilePath) {
            _logger.debug('Require', {
                dependencies: this.module.dependencyMap,
                specifier
            });
            throw new Error(`Dependency "${specifier}" not collected from "${this.module.filepath}"`);
        }
        const module = this.module.bundler.getModule(moduleFilePath);
        if (!module) throw new Error(`Module "${moduleFilePath}" has not been transpiled`);
        return module.evaluate().context.exports ?? {};
    }
}

},{"../../utils/logger":"4rlpq","./eval":"8naI0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8naI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @ts-ignore
var _helpers = require("@swc/helpers");
/* eslint-disable no-eval */ // import buildProcess from "./utils/process";
var _logger = require("../../utils/logger");
const g = typeof window === 'undefined' ? self : window;
const hasGlobalDeclaration = /^const global/m;
/* eslint-disable no-unused-vars */ exports.default = function(code, require, context, env = {}, globals = {}) {
    const global = g;
    const process = {
        env: {
            NODE_ENV: 'development'
        }
    }; // buildProcess(env);
    // @ts-ignore
    g.global = global;
    const allGlobals = {
        require,
        module: context,
        exports: context.exports,
        process,
        global,
        swcHelpers: _helpers,
        ...globals
    };
    if (hasGlobalDeclaration.test(code)) delete allGlobals.global;
    const allGlobalKeys = Object.keys(allGlobals);
    const globalsCode = allGlobalKeys.length ? allGlobalKeys.join(', ') : '';
    const globalsValues = allGlobalKeys.map((k)=>allGlobals[k]
    );
    try {
        const newCode = `(function $csb$eval(` + globalsCode + `) {` + code + `\n})`;
        // @ts-ignore
        (0, eval)(newCode).apply(allGlobals.global, globalsValues);
        return context.exports;
    } catch (err) {
        _logger.error(err);
        _logger.error(code);
        let error = err;
        if (typeof err === 'string') error = new Error(err);
        // @ts-ignore
        error.isEvalError = true;
        throw error;
    }
};

},{"@swc/helpers":"6Uysx","../../utils/logger":"4rlpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Uysx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayLikeToArray", ()=>_arrayLikeToArrayDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "checkPrivateRedeclaration", ()=>_checkPrivateRedeclarationDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorDestructureSet", ()=>_classApplyDescriptorDestructureDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorGet", ()=>_classApplyDescriptorGetDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorSet", ()=>_classApplyDescriptorSetDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticFieldDescriptor", ()=>_classCheckPrivateStaticFieldDescriptorDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticAccess", ()=>_classCheckPrivateStaticAccessDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldDestructureSet", ()=>_classPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldInit", ()=>_classPrivateFieldInitDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseKey", ()=>_classPrivateFieldLooseKeyDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodInit", ()=>_classPrivateMethodInitDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldDestructureSet", ()=>_classStaticPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "unsupportedIterableToArray", ()=>_unsupportedIterableToArrayDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classCheckPrivateStaticFieldDescriptor = require("./_class_check_private_static_field_descriptor");
var _classCheckPrivateStaticFieldDescriptorDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticFieldDescriptor);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldDestructure = require("./_class_private_field_destructure");
var _classPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classPrivateFieldDestructure);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldInit = require("./_class_private_field_init");
var _classPrivateFieldInitDefault = parcelHelpers.interopDefault(_classPrivateFieldInit);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldLooseKey = require("./_class_private_field_loose_key");
var _classPrivateFieldLooseKeyDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseKey);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodInit = require("./_class_private_method_init");
var _classPrivateMethodInitDefault = parcelHelpers.interopDefault(_classPrivateMethodInit);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldDestructure = require("./_class_static_private_field_destructure");
var _classStaticPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldDestructure);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);

},{"./_apply_decorated_descriptor":"jRYya","./_array_like_to_array":"5fJP0","./_array_with_holes":"7RfHu","./_array_without_holes":"3GN4c","./_assert_this_initialized":"j8MLO","./_async_generator":"4otb1","./_async_generator_delegate":"acUaV","./_async_iterator":"cEDbt","./_async_to_generator":"3lSxN","./_await_async_generator":"7XFid","./_await_value":"8dgrP","./_check_private_redeclaration":"4QUTM","./_class_apply_descriptor_destructure":"Hb9Ag","./_class_apply_descriptor_get":"46vPA","./_class_apply_descriptor_set":"3O4Vp","./_class_call_check":"g2Ziw","./_class_check_private_static_field_descriptor":"1FZpB","./_class_check_private_static_access":"8Dt3U","./_class_name_tdz_error":"50JKw","./_class_private_field_destructure":"fYZY5","./_class_private_field_get":"6QAu8","./_class_private_field_init":"isyZN","./_class_private_field_loose_base":"iEFml","./_class_private_field_loose_key":"jEYO6","./_class_private_field_set":"cnufZ","./_class_private_method_get":"36P3z","./_class_private_method_init":"bkIiA","./_class_private_method_set":"1o5u5","./_class_static_private_field_destructure":"lF1F8","./_class_static_private_field_spec_get":"4j2mn","./_class_static_private_field_spec_set":"7y4W2","./_construct":"79Zak","./_create_class":"xIen3","./_create_super":"3CDP7","./_decorate":"Cznku","./_defaults":"hrV1Y","./_define_enumerable_properties":"gt5o9","./_define_property":"5RMOb","./_extends":"vJeNc","./_get":"6tDuR","./_get_prototype_of":"g6dnE","./_inherits":"fD3VF","./_inherits_loose":"fELNH","./_initializer_define_property":"3TO4f","./_initializer_warning_helper":"2CTl1","./_instanceof":"7x29e","./_interop_require_default":"6MKjY","./_interop_require_wildcard":"i3Ocj","./_is_native_function":"49J6w","./_is_native_reflect_construct":"bttt4","./_iterable_to_array":"d8jf5","./_iterable_to_array_limit":"hK5PL","./_iterable_to_array_limit_loose":"l4Hz2","./_jsx":"3ldcc","./_new_arrow_check":"aiIAY","./_non_iterable_rest":"51yKj","./_non_iterable_spread":"2F8a8","./_object_spread":"e4YvT","./_object_without_properties":"1TgmY","./_object_without_properties_loose":"kdsko","./_possible_constructor_return":"4osjF","./_read_only_error":"lpriK","./_set":"kNsU5","./_set_prototype_of":"7eUoq","./_skip_first_generator_next":"8LtBV","./_sliced_to_array":"kt98A","./_sliced_to_array_loose":"iaZIC","./_super_prop_base":"h41tg","./_tagged_template_literal":"gAyvx","./_tagged_template_literal_loose":"d2boP","./_throw":"kzyx2","./_to_array":"2yzSp","./_to_consumable_array":"eprTL","./_to_primitive":"hjFTf","./_to_property_key":"bAIKj","./_type_of":"eUBAy","./_unsupported_iterable_to_array":"1HJ22","./_wrap_async_generator":"eCVXq","./_wrap_native_super":"jjGYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRYya":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {};
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fJP0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RfHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GN4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArrayDefault.default(arr);
}
exports.default = _arrayWithoutHoles;

},{"./_array_like_to_array":"5fJP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8MLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4otb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"8dgrP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dgrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acUaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEDbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lSxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
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
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XFid":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"8dgrP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QUTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
exports.default = _checkPrivateRedeclaration;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Hb9Ag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) descriptor.__destrObj = {
            set value (v){
                descriptor.set.call(receiver, v);
            }
        };
        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}
exports.default = _classApplyDescriptorDestructureSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46vPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
exports.default = _classApplyDescriptorGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3O4Vp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
exports.default = _classApplyDescriptorSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2Ziw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FZpB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}
exports.default = _classCheckPrivateStaticFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Dt3U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}
exports.default = _classCheckPrivateStaticAccess;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50JKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYZY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldDestructureSet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_destructure":"Hb9Ag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gurxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
exports.default = _classExtractFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QAu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldGet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_get":"46vPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isyZN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclarationDefault.default(obj, privateMap);
    privateMap.set(obj, value);
}
exports.default = _classPrivateFieldInit;

},{"./_check_private_redeclaration":"4QUTM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEFml":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEYO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
exports.default = _classPrivateFieldLooseKey;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnufZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classPrivateFieldSet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_set":"3O4Vp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36P3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkIiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclarationDefault.default(obj, privateSet);
    privateSet.add(obj);
}
exports.default = _classPrivateMethodInit;

},{"./_check_private_redeclaration":"4QUTM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1o5u5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF1F8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldDestructureSet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_destructure":"Hb9Ag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4j2mn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_get":"46vPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7y4W2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_set":"3O4Vp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79Zak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOfDefault.default(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7eUoq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xIen3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3CDP7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"bttt4","./_get_prototype_of":"g6dnE","./_possible_constructor_return":"4osjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bttt4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6dnE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4osjF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"j8MLO","./_type_of":"eUBAy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUBAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Cznku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"2yzSp","./_to_property_key":"bAIKj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yzSp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array":"d8jf5","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8jf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51yKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HJ22":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArrayDefault.default(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArrayDefault.default(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./_array_like_to_array":"5fJP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAIKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"eUBAy","./_to_primitive":"hjFTf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjFTf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"eUBAy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrV1Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gt5o9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RMOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vJeNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tDuR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"h41tg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h41tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"g6dnE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fD3VF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fELNH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TO4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CTl1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x29e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return !!right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MKjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3Ocj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49J6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hK5PL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4Hz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    for(_i = _i.call(arr); !(_step = _i.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ldcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {};
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aiIAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F8a8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4YvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"5RMOb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TgmY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"kdsko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdsko":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpriK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNsU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"5RMOb","./_super_prop_base":"h41tg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LtBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kt98A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array":"d8jf5","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaZIC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array_limit_loose":"l4Hz2","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAyvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2boP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzyx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eprTL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"3GN4c","./_iterable_to_array":"d8jf5","./_non_iterable_spread":"2F8a8","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eCVXq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"4otb1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjGYK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"79Zak","./_is_native_function":"49J6w","./_get_prototype_of":"g6dnE","./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aV5P9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HotContext", ()=>HotContext
);
var _hmr = require("./HMR");
var _hmrDefault = parcelHelpers.interopDefault(_hmr);
class HotContext {
    constructor(module){
        this.module = module;
        this.hmrConfig = null;
    }
    get data() {
        return this.hmrConfig?.data;
    }
    clone() {
        const cloned = new HotContext(this.module);
        const data = this.data;
        if (data) {
            const hmrConfig = cloned.ensureHMRConfig();
            hmrConfig.data = data;
        }
        return cloned;
    }
    /** Get hmr config, if it does not exist it will be created and this module marked as hot */ ensureHMRConfig() {
        this.hmrConfig = this.hmrConfig ?? new _hmrDefault.default();
        this.module.bundler.enableHMR();
        return this.hmrConfig;
    }
    accept(path, cb) {
        if (typeof path === 'undefined' || typeof path !== 'string' && !Array.isArray(path)) {
            // Self mark hot
            const hmrConfig = this.ensureHMRConfig();
            hmrConfig.setType('accept');
            hmrConfig.setSelfAccepted(true);
        } else {
            const paths = typeof path === 'string' ? [
                path
            ] : path;
            paths.forEach(async (p)=>{
                const resolvedPath = await this.module.bundler.resolveAsync(p, this.module.filepath);
                const module = this.module.bundler.getModule(resolvedPath);
                if (module) {
                    const hmrConfig = module.hot.ensureHMRConfig();
                    hmrConfig.setType('accept');
                    hmrConfig.setAcceptCallback(cb);
                }
            });
        }
    }
    decline(path) {
        if (typeof path === 'undefined') {
            const hmrConfig = this.ensureHMRConfig();
            hmrConfig.setType('decline');
            this.module.resetCompilation();
        } else {
            const paths = typeof path === 'string' ? [
                path
            ] : path;
            paths.forEach(async (p)=>{
                const resolvedPath = await this.module.bundler.resolveAsync(p, this.module.filepath);
                const module = this.module.bundler.getModule(resolvedPath);
                if (module) {
                    const hmrConfig = module.hot.ensureHMRConfig();
                    hmrConfig.setType('decline');
                    module.resetCompilation();
                }
            });
        }
    }
    dispose(cb) {
        const hmrConfig = this.ensureHMRConfig();
        hmrConfig.setDisposeHandler(cb);
    }
    invalidate() {
        const hmrConfig = this.ensureHMRConfig();
        // We have to bubble up, so reset compilation of parents
        for (let initiator of this.module.initiators){
            const module = this.module.bundler.getModule(initiator);
            module?.resetCompilation();
        }
        hmrConfig.setInvalidated(true);
    }
}

},{"./HMR":"1Woov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Woov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HMR {
    data = {};
    dirty = false;
    selfAccepted = false;
    invalidated = false;
    callDisposeHandler() {
        if (this.disposeHandler) {
            this.data = {};
            this.disposeHandler(this.data);
            this.disposeHandler = undefined;
        }
    }
    callAcceptCallback() {
        if (this.callback) this.callback();
    }
    setAcceptCallback(callback) {
        this.callback = callback;
        this.setSelfAccepted(false);
    }
    setDisposeHandler(callback) {
        this.disposeHandler = callback;
    }
    setSelfAccepted(selfAccepted) {
        this.selfAccepted = selfAccepted;
        if (selfAccepted) this.data = {};
    }
    setType(type) {
        this.type = type;
    }
    setDirty(dirty) {
        this.dirty = dirty;
    }
    isDirty() {
        return this.dirty;
    }
    /**
   * Returns whether this module should reset the compilation of its parents
   */ isHot() {
        return this.type === 'accept';
    }
    isDeclined(isEntry) {
        if (this.type === 'decline') return true;
        return !this.isHot() && isEntry;
    }
    /**
   * Setting the module to invalidated means that we MUST evaluate it again, which means
   * that we throw away its compilation and hmrConfig, and we're going to force a second evaluation
   * once this has been run.
   */ setInvalidated(invalidated) {
        this.invalidated = invalidated;
    }
}
exports.default = HMR;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OUrO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBuildDep", ()=>isBuildDep
);
parcelHelpers.export(exports, "filterBuildDeps", ()=>filterBuildDeps
);
const BUILD_DEPS = new Set([
    'parcel',
    'parcel-bundler',
    'vite',
    '@babel/core',
    'react-scripts'
]);
const BUILD_DEP_REGEXES = [
    /babel-plugin.*/,
    /@babel\/plugin.*/,
    /babel-preset.*/,
    /@babel\/preset.*/,
    /.*parcel-plugin.*/, 
];
function isBuildDep(name) {
    if (BUILD_DEPS.has(name)) return true;
    for (let regex of BUILD_DEP_REGEXES){
        if (regex.test(name)) return true;
    }
    return false;
}
function filterBuildDeps(deps) {
    const results = {};
    for(let key in deps)if (!isBuildDep(key)) results[key] = deps[key];
    return results;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8g5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchManifest", ()=>fetchManifest
);
parcelHelpers.export(exports, "fetchModule", ()=>fetchModule
);
var _msgpack = require("@msgpack/msgpack");
var _urlJoin = require("url-join");
var _urlJoinDefault = parcelHelpers.interopDefault(_urlJoin);
var _fetch = require("../../utils/fetch");
const CDN_ROOT = 'https://sandpack-cdn-staging.blazingly.io/';
const CDN_VERSION = 5;
function encodePayload(payload) {
    return btoa(`${CDN_VERSION}(${payload})`);
}
async function fetchManifest(deps) {
    const encoded_manifest = encodePayload(JSON.stringify(deps));
    const result = await _fetch.retryFetch(_urlJoinDefault.default(CDN_ROOT, `/dep_tree/${encoded_manifest}`), {
        maxRetries: 5,
        retryDelay: 1000
    });
    const buffer = await result.arrayBuffer();
    return _msgpack.decode(buffer);
}
async function fetchModule(name, version) {
    const specifier = `${name}@${version}`;
    const encoded_specifier = encodePayload(specifier);
    const result = await _fetch.retryFetch(_urlJoinDefault.default(CDN_ROOT, `/package/${encoded_specifier}`), {
        maxRetries: 5
    });
    const buffer = await result.arrayBuffer();
    return _msgpack.decode(buffer);
}

},{"@msgpack/msgpack":"dlMUQ","url-join":"8wf1K","../../utils/fetch":"1VlZi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dlMUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>_encodeMjs.encode
);
parcelHelpers.export(exports, "decode", ()=>_decodeMjs.decode
);
parcelHelpers.export(exports, "decodeMulti", ()=>_decodeMjs.decodeMulti
);
parcelHelpers.export(exports, "decodeAsync", ()=>_decodeAsyncMjs.decodeAsync
);
parcelHelpers.export(exports, "decodeArrayStream", ()=>_decodeAsyncMjs.decodeArrayStream
);
parcelHelpers.export(exports, "decodeMultiStream", ()=>_decodeAsyncMjs.decodeMultiStream
);
parcelHelpers.export(exports, "decodeStream", ()=>_decodeAsyncMjs.decodeStream
);
parcelHelpers.export(exports, "Decoder", ()=>_decoderMjs.Decoder
);
parcelHelpers.export(exports, "DecodeError", ()=>_decodeErrorMjs.DecodeError
);
parcelHelpers.export(exports, "DataViewIndexOutOfBoundsError", ()=>_decoderMjs.DataViewIndexOutOfBoundsError
);
parcelHelpers.export(exports, "Encoder", ()=>_encoderMjs.Encoder
);
parcelHelpers.export(exports, "ExtensionCodec", ()=>_extensionCodecMjs.ExtensionCodec
);
parcelHelpers.export(exports, "ExtData", ()=>_extDataMjs.ExtData
);
parcelHelpers.export(exports, "EXT_TIMESTAMP", ()=>_timestampMjs.EXT_TIMESTAMP
);
parcelHelpers.export(exports, "encodeDateToTimeSpec", ()=>_timestampMjs.encodeDateToTimeSpec
);
parcelHelpers.export(exports, "encodeTimeSpecToTimestamp", ()=>_timestampMjs.encodeTimeSpecToTimestamp
);
parcelHelpers.export(exports, "decodeTimestampToTimeSpec", ()=>_timestampMjs.decodeTimestampToTimeSpec
);
parcelHelpers.export(exports, "encodeTimestampExtension", ()=>_timestampMjs.encodeTimestampExtension
);
parcelHelpers.export(exports, "decodeTimestampExtension", ()=>_timestampMjs.decodeTimestampExtension
);
// Main Functions:
var _encodeMjs = require("./encode.mjs");
var _decodeMjs = require("./decode.mjs");
var _decodeAsyncMjs = require("./decodeAsync.mjs");
var _decoderMjs = require("./Decoder.mjs");
var _decodeErrorMjs = require("./DecodeError.mjs");
var _encoderMjs = require("./Encoder.mjs");
// Utilitiies for Extension Types:
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _extDataMjs = require("./ExtData.mjs");
var _timestampMjs = require("./timestamp.mjs");

},{"./encode.mjs":"kBqEA","./decode.mjs":"lkQgE","./decodeAsync.mjs":"2IFuO","./Decoder.mjs":"28ohY","./DecodeError.mjs":"9wQBG","./Encoder.mjs":"3jBdm","./ExtensionCodec.mjs":"5G6eb","./ExtData.mjs":"7Da34","./timestamp.mjs":"9Fi1K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBqEA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * It encodes `value` in the MessagePack format and
 * returns a byte buffer.
 *
 * The returned buffer is a slice of a larger `ArrayBuffer`, so you have to use its `#byteOffset` and `#byteLength` in order to convert it to another typed arrays including NodeJS `Buffer`.
 */ parcelHelpers.export(exports, "encode", ()=>encode
);
var _encoderMjs = require("./Encoder.mjs");
var defaultEncodeOptions = {};
function encode(value, options) {
    if (options === void 0) options = defaultEncodeOptions;
    var encoder = new _encoderMjs.Encoder(options.extensionCodec, options.context, options.maxDepth, options.initialBufferSize, options.sortKeys, options.forceFloat32, options.ignoreUndefined, options.forceIntegerToFloat);
    return encoder.encodeSharedRef(value);
}

},{"./Encoder.mjs":"3jBdm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jBdm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_MAX_DEPTH", ()=>DEFAULT_MAX_DEPTH
);
parcelHelpers.export(exports, "DEFAULT_INITIAL_BUFFER_SIZE", ()=>DEFAULT_INITIAL_BUFFER_SIZE
);
parcelHelpers.export(exports, "Encoder", ()=>Encoder
);
var _utf8Mjs = require("./utils/utf8.mjs");
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _intMjs = require("./utils/int.mjs");
var _typedArraysMjs = require("./utils/typedArrays.mjs");
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder = /** @class */ function() {
    function Encoder1(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined, forceIntegerToFloat) {
        if (extensionCodec === void 0) extensionCodec = _extensionCodecMjs.ExtensionCodec.defaultCodec;
        if (context === void 0) context = undefined;
        if (maxDepth === void 0) maxDepth = DEFAULT_MAX_DEPTH;
        if (initialBufferSize === void 0) initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
        if (sortKeys === void 0) sortKeys = false;
        if (forceFloat32 === void 0) forceFloat32 = false;
        if (ignoreUndefined === void 0) ignoreUndefined = false;
        if (forceIntegerToFloat === void 0) forceIntegerToFloat = false;
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxDepth = maxDepth;
        this.initialBufferSize = initialBufferSize;
        this.sortKeys = sortKeys;
        this.forceFloat32 = forceFloat32;
        this.ignoreUndefined = ignoreUndefined;
        this.forceIntegerToFloat = forceIntegerToFloat;
        this.pos = 0;
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
        this.bytes = new Uint8Array(this.view.buffer);
    }
    Encoder1.prototype.reinitializeState = function() {
        this.pos = 0;
    };
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */ Encoder1.prototype.encodeSharedRef = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.subarray(0, this.pos);
    };
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */ Encoder1.prototype.encode = function(object) {
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.slice(0, this.pos);
    };
    Encoder1.prototype.doEncode = function(object, depth) {
        if (depth > this.maxDepth) throw new Error("Too deep objects in depth ".concat(depth));
        if (object == null) this.encodeNil();
        else if (typeof object === "boolean") this.encodeBoolean(object);
        else if (typeof object === "number") this.encodeNumber(object);
        else if (typeof object === "string") this.encodeString(object);
        else this.encodeObject(object, depth);
    };
    Encoder1.prototype.ensureBufferSizeToWrite = function(sizeToWrite) {
        var requiredSize = this.pos + sizeToWrite;
        if (this.view.byteLength < requiredSize) this.resizeBuffer(requiredSize * 2);
    };
    Encoder1.prototype.resizeBuffer = function(newSize) {
        var newBuffer = new ArrayBuffer(newSize);
        var newBytes = new Uint8Array(newBuffer);
        var newView = new DataView(newBuffer);
        newBytes.set(this.bytes);
        this.view = newView;
        this.bytes = newBytes;
    };
    Encoder1.prototype.encodeNil = function() {
        this.writeU8(192);
    };
    Encoder1.prototype.encodeBoolean = function(object) {
        if (object === false) this.writeU8(194);
        else this.writeU8(195);
    };
    Encoder1.prototype.encodeNumber = function(object) {
        if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
            if (object >= 0) {
                if (object < 128) // positive fixint
                this.writeU8(object);
                else if (object < 256) {
                    // uint 8
                    this.writeU8(204);
                    this.writeU8(object);
                } else if (object < 65536) {
                    // uint 16
                    this.writeU8(205);
                    this.writeU16(object);
                } else if (object < 4294967296) {
                    // uint 32
                    this.writeU8(206);
                    this.writeU32(object);
                } else {
                    // uint 64
                    this.writeU8(207);
                    this.writeU64(object);
                }
            } else {
                if (object >= -32) // negative fixint
                this.writeU8(224 | object + 32);
                else if (object >= -128) {
                    // int 8
                    this.writeU8(208);
                    this.writeI8(object);
                } else if (object >= -32768) {
                    // int 16
                    this.writeU8(209);
                    this.writeI16(object);
                } else if (object >= -2147483648) {
                    // int 32
                    this.writeU8(210);
                    this.writeI32(object);
                } else {
                    // int 64
                    this.writeU8(211);
                    this.writeI64(object);
                }
            }
        } else // non-integer numbers
        if (this.forceFloat32) {
            // float 32
            this.writeU8(202);
            this.writeF32(object);
        } else {
            // float 64
            this.writeU8(203);
            this.writeF64(object);
        }
    };
    Encoder1.prototype.writeStringHeader = function(byteLength) {
        if (byteLength < 32) // fixstr
        this.writeU8(160 + byteLength);
        else if (byteLength < 256) {
            // str 8
            this.writeU8(217);
            this.writeU8(byteLength);
        } else if (byteLength < 65536) {
            // str 16
            this.writeU8(218);
            this.writeU16(byteLength);
        } else if (byteLength < 4294967296) {
            // str 32
            this.writeU8(219);
            this.writeU32(byteLength);
        } else throw new Error("Too long string: ".concat(byteLength, " bytes in UTF-8"));
    };
    Encoder1.prototype.encodeString = function(object) {
        var maxHeaderSize = 5;
        var strLength = object.length;
        if (strLength > _utf8Mjs.TEXT_ENCODER_THRESHOLD) {
            var byteLength = _utf8Mjs.utf8Count(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            _utf8Mjs.utf8EncodeTE(object, this.bytes, this.pos);
            this.pos += byteLength;
        } else {
            var byteLength = _utf8Mjs.utf8Count(object);
            this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
            this.writeStringHeader(byteLength);
            _utf8Mjs.utf8EncodeJs(object, this.bytes, this.pos);
            this.pos += byteLength;
        }
    };
    Encoder1.prototype.encodeObject = function(object, depth) {
        // try to encode objects with custom codec first of non-primitives
        var ext = this.extensionCodec.tryToEncode(object, this.context);
        if (ext != null) this.encodeExtension(ext);
        else if (Array.isArray(object)) this.encodeArray(object, depth);
        else if (ArrayBuffer.isView(object)) this.encodeBinary(object);
        else if (typeof object === "object") this.encodeMap(object, depth);
        else // symbol, function and other special object come here unless extensionCodec handles them.
        throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(object)));
    };
    Encoder1.prototype.encodeBinary = function(object) {
        var size = object.byteLength;
        if (size < 256) {
            // bin 8
            this.writeU8(196);
            this.writeU8(size);
        } else if (size < 65536) {
            // bin 16
            this.writeU8(197);
            this.writeU16(size);
        } else if (size < 4294967296) {
            // bin 32
            this.writeU8(198);
            this.writeU32(size);
        } else throw new Error("Too large binary: ".concat(size));
        var bytes = _typedArraysMjs.ensureUint8Array(object);
        this.writeU8a(bytes);
    };
    Encoder1.prototype.encodeArray = function(object, depth) {
        var size = object.length;
        if (size < 16) // fixarray
        this.writeU8(144 + size);
        else if (size < 65536) {
            // array 16
            this.writeU8(220);
            this.writeU16(size);
        } else if (size < 4294967296) {
            // array 32
            this.writeU8(221);
            this.writeU32(size);
        } else throw new Error("Too large array: ".concat(size));
        for(var _i = 0, object_1 = object; _i < object_1.length; _i++){
            var item = object_1[_i];
            this.doEncode(item, depth + 1);
        }
    };
    Encoder1.prototype.countWithoutUndefined = function(object, keys) {
        var count = 0;
        for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
            var key = keys_1[_i];
            if (object[key] !== undefined) count++;
        }
        return count;
    };
    Encoder1.prototype.encodeMap = function(object, depth) {
        var keys = Object.keys(object);
        if (this.sortKeys) keys.sort();
        var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
        if (size < 16) // fixmap
        this.writeU8(128 + size);
        else if (size < 65536) {
            // map 16
            this.writeU8(222);
            this.writeU16(size);
        } else if (size < 4294967296) {
            // map 32
            this.writeU8(223);
            this.writeU32(size);
        } else throw new Error("Too large map object: ".concat(size));
        for(var _i = 0, keys_2 = keys; _i < keys_2.length; _i++){
            var key = keys_2[_i];
            var value = object[key];
            if (!(this.ignoreUndefined && value === undefined)) {
                this.encodeString(key);
                this.doEncode(value, depth + 1);
            }
        }
    };
    Encoder1.prototype.encodeExtension = function(ext) {
        var size = ext.data.length;
        if (size === 1) // fixext 1
        this.writeU8(212);
        else if (size === 2) // fixext 2
        this.writeU8(213);
        else if (size === 4) // fixext 4
        this.writeU8(214);
        else if (size === 8) // fixext 8
        this.writeU8(215);
        else if (size === 16) // fixext 16
        this.writeU8(216);
        else if (size < 256) {
            // ext 8
            this.writeU8(199);
            this.writeU8(size);
        } else if (size < 65536) {
            // ext 16
            this.writeU8(200);
            this.writeU16(size);
        } else if (size < 4294967296) {
            // ext 32
            this.writeU8(201);
            this.writeU32(size);
        } else throw new Error("Too large extension object: ".concat(size));
        this.writeI8(ext.type);
        this.writeU8a(ext.data);
    };
    Encoder1.prototype.writeU8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setUint8(this.pos, value);
        this.pos++;
    };
    Encoder1.prototype.writeU8a = function(values) {
        var size = values.length;
        this.ensureBufferSizeToWrite(size);
        this.bytes.set(values, this.pos);
        this.pos += size;
    };
    Encoder1.prototype.writeI8 = function(value) {
        this.ensureBufferSizeToWrite(1);
        this.view.setInt8(this.pos, value);
        this.pos++;
    };
    Encoder1.prototype.writeU16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setUint16(this.pos, value);
        this.pos += 2;
    };
    Encoder1.prototype.writeI16 = function(value) {
        this.ensureBufferSizeToWrite(2);
        this.view.setInt16(this.pos, value);
        this.pos += 2;
    };
    Encoder1.prototype.writeU32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setUint32(this.pos, value);
        this.pos += 4;
    };
    Encoder1.prototype.writeI32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setInt32(this.pos, value);
        this.pos += 4;
    };
    Encoder1.prototype.writeF32 = function(value) {
        this.ensureBufferSizeToWrite(4);
        this.view.setFloat32(this.pos, value);
        this.pos += 4;
    };
    Encoder1.prototype.writeF64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        this.view.setFloat64(this.pos, value);
        this.pos += 8;
    };
    Encoder1.prototype.writeU64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        _intMjs.setUint64(this.view, this.pos, value);
        this.pos += 8;
    };
    Encoder1.prototype.writeI64 = function(value) {
        this.ensureBufferSizeToWrite(8);
        _intMjs.setInt64(this.view, this.pos, value);
        this.pos += 8;
    };
    return Encoder1;
}();

},{"./utils/utf8.mjs":"boCqR","./ExtensionCodec.mjs":"5G6eb","./utils/int.mjs":"R0W7N","./utils/typedArrays.mjs":"haKoZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boCqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "utf8Count", ()=>utf8Count
);
parcelHelpers.export(exports, "utf8EncodeJs", ()=>utf8EncodeJs
);
parcelHelpers.export(exports, "TEXT_ENCODER_THRESHOLD", ()=>TEXT_ENCODER_THRESHOLD
);
parcelHelpers.export(exports, "utf8EncodeTE", ()=>utf8EncodeTE
);
parcelHelpers.export(exports, "utf8DecodeJs", ()=>utf8DecodeJs
);
parcelHelpers.export(exports, "TEXT_DECODER_THRESHOLD", ()=>TEXT_DECODER_THRESHOLD
);
parcelHelpers.export(exports, "utf8DecodeTD", ()=>utf8DecodeTD
);
/* eslint-disable @typescript-eslint/no-unnecessary-condition */ var _intMjs = require("./int.mjs");
var process = require("process");
var _a, _b, _c;
var TEXT_ENCODING_AVAILABLE = (typeof process === "undefined" || ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a["TEXT_ENCODING"]) !== "never") && typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined";
function utf8Count(str) {
    var strLength = str.length;
    var byteLength = 0;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 4294967168) === 0) {
            // 1-byte
            byteLength++;
            continue;
        } else if ((value & 4294965248) === 0) // 2-bytes
        byteLength += 2;
        else {
            // handle surrogate pair
            if (value >= 55296 && value <= 56319) // high surrogate
            {
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 64512) === 56320) {
                        ++pos;
                        value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                    }
                }
            }
            if ((value & 4294901760) === 0) // 3-byte
            byteLength += 3;
            else // 4-byte
            byteLength += 4;
        }
    }
    return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
    var strLength = str.length;
    var offset = outputOffset;
    var pos = 0;
    while(pos < strLength){
        var value = str.charCodeAt(pos++);
        if ((value & 4294967168) === 0) {
            // 1-byte
            output[offset++] = value;
            continue;
        } else if ((value & 4294965248) === 0) // 2-bytes
        output[offset++] = value >> 6 & 31 | 192;
        else {
            // handle surrogate pair
            if (value >= 55296 && value <= 56319) // high surrogate
            {
                if (pos < strLength) {
                    var extra = str.charCodeAt(pos);
                    if ((extra & 64512) === 56320) {
                        ++pos;
                        value = ((value & 1023) << 10) + (extra & 1023) + 65536;
                    }
                }
            }
            if ((value & 4294901760) === 0) {
                // 3-byte
                output[offset++] = value >> 12 & 15 | 224;
                output[offset++] = value >> 6 & 63 | 128;
            } else {
                // 4-byte
                output[offset++] = value >> 18 & 7 | 240;
                output[offset++] = value >> 12 & 63 | 128;
                output[offset++] = value >> 6 & 63 | 128;
            }
        }
        output[offset++] = value & 63 | 128;
    }
}
var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? _intMjs.UINT32_MAX : typeof process !== "undefined" && ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b["TEXT_ENCODING"]) !== "force" ? 200 : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
    output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
    var offset = inputOffset;
    var end = offset + byteLength;
    var units = [];
    var result = "";
    while(offset < end){
        var byte1 = bytes[offset++];
        if ((byte1 & 128) === 0) // 1 byte
        units.push(byte1);
        else if ((byte1 & 224) === 192) {
            // 2 bytes
            var byte2 = bytes[offset++] & 63;
            units.push((byte1 & 31) << 6 | byte2);
        } else if ((byte1 & 240) === 224) {
            // 3 bytes
            var byte2 = bytes[offset++] & 63;
            var byte3 = bytes[offset++] & 63;
            units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
        } else if ((byte1 & 248) === 240) {
            // 4 bytes
            var byte2 = bytes[offset++] & 63;
            var byte3 = bytes[offset++] & 63;
            var byte4 = bytes[offset++] & 63;
            var unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
            if (unit > 65535) {
                unit -= 65536;
                units.push(unit >>> 10 & 1023 | 55296);
                unit = 56320 | unit & 1023;
            }
            units.push(unit);
        } else units.push(byte1);
        if (units.length >= CHUNK_SIZE) {
            result += String.fromCharCode.apply(String, units);
            units.length = 0;
        }
    }
    if (units.length > 0) result += String.fromCharCode.apply(String, units);
    return result;
}
var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE ? _intMjs.UINT32_MAX : typeof process !== "undefined" && ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c["TEXT_DECODER"]) !== "force" ? 200 : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
    var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
}

},{"./int.mjs":"R0W7N","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"R0W7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UINT32_MAX", ()=>UINT32_MAX
);
// DataView extension to handle int64 / uint64,
// where the actual range is 53-bits integer (a.k.a. safe integer)
parcelHelpers.export(exports, "setUint64", ()=>setUint64
);
parcelHelpers.export(exports, "setInt64", ()=>setInt64
);
parcelHelpers.export(exports, "getInt64", ()=>getInt64
);
parcelHelpers.export(exports, "getUint64", ()=>getUint64
);
var UINT32_MAX = 4294967295;
function setUint64(view, offset, value) {
    var high = value / 4294967296;
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
    var high = Math.floor(value / 4294967296);
    var low = value; // high bits are truncated by DataView
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
    var high = view.getInt32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}
function getUint64(view, offset) {
    var high = view.getUint32(offset);
    var low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5G6eb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtensionCodec", ()=>ExtensionCodec
);
// ExtensionCodec to handle MessagePack extensions
var _extDataMjs = require("./ExtData.mjs");
var _timestampMjs = require("./timestamp.mjs");
var ExtensionCodec = /** @class */ function() {
    function ExtensionCodec1() {
        // built-in extensions
        this.builtInEncoders = [];
        this.builtInDecoders = [];
        // custom extensions
        this.encoders = [];
        this.decoders = [];
        this.register(_timestampMjs.timestampExtension);
    }
    ExtensionCodec1.prototype.register = function(_a) {
        var type = _a.type, encode = _a.encode, decode = _a.decode;
        if (type >= 0) {
            // custom extensions
            this.encoders[type] = encode;
            this.decoders[type] = decode;
        } else {
            // built-in extensions
            var index = 1 + type;
            this.builtInEncoders[index] = encode;
            this.builtInDecoders[index] = decode;
        }
    };
    ExtensionCodec1.prototype.tryToEncode = function(object, context) {
        // built-in extensions
        for(var i = 0; i < this.builtInEncoders.length; i++){
            var encodeExt = this.builtInEncoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = -1 - i;
                    return new _extDataMjs.ExtData(type, data);
                }
            }
        }
        // custom extensions
        for(var i = 0; i < this.encoders.length; i++){
            var encodeExt = this.encoders[i];
            if (encodeExt != null) {
                var data = encodeExt(object, context);
                if (data != null) {
                    var type = i;
                    return new _extDataMjs.ExtData(type, data);
                }
            }
        }
        if (object instanceof _extDataMjs.ExtData) // to keep ExtData as is
        return object;
        return null;
    };
    ExtensionCodec1.prototype.decode = function(data, type, context) {
        var decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
        if (decodeExt) return decodeExt(data, type, context);
        else // decode() does not fail, returns ExtData instead.
        return new _extDataMjs.ExtData(type, data);
    };
    ExtensionCodec1.defaultCodec = new ExtensionCodec1();
    return ExtensionCodec1;
}();

},{"./ExtData.mjs":"7Da34","./timestamp.mjs":"9Fi1K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Da34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExtData", ()=>ExtData
);
/**
 * ExtData is used to handle Extension Types that are not registered to ExtensionCodec.
 */ var ExtData = /** @class */ function() {
    function ExtData1(type, data) {
        this.type = type;
        this.data = data;
    }
    return ExtData1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Fi1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EXT_TIMESTAMP", ()=>EXT_TIMESTAMP
);
parcelHelpers.export(exports, "encodeTimeSpecToTimestamp", ()=>encodeTimeSpecToTimestamp
);
parcelHelpers.export(exports, "encodeDateToTimeSpec", ()=>encodeDateToTimeSpec
);
parcelHelpers.export(exports, "encodeTimestampExtension", ()=>encodeTimestampExtension
);
parcelHelpers.export(exports, "decodeTimestampToTimeSpec", ()=>decodeTimestampToTimeSpec
);
parcelHelpers.export(exports, "decodeTimestampExtension", ()=>decodeTimestampExtension
);
parcelHelpers.export(exports, "timestampExtension", ()=>timestampExtension
);
// https://github.com/msgpack/msgpack/blob/master/spec.md#timestamp-extension-type
var _decodeErrorMjs = require("./DecodeError.mjs");
var _intMjs = require("./utils/int.mjs");
var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 4294967295; // 32-bit unsigned int
var TIMESTAMP64_MAX_SEC = 17179869183; // 34-bit unsigned int
function encodeTimeSpecToTimestamp(_a) {
    var sec = _a.sec, nsec = _a.nsec;
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
        // Here sec >= 0 && nsec >= 0
        if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
            // timestamp 32 = { sec32 (unsigned) }
            var rv = new Uint8Array(4);
            var view = new DataView(rv.buffer);
            view.setUint32(0, sec);
            return rv;
        } else {
            // timestamp 64 = { nsec30 (unsigned), sec34 (unsigned) }
            var secHigh = sec / 4294967296;
            var secLow = sec & 4294967295;
            var rv = new Uint8Array(8);
            var view = new DataView(rv.buffer);
            // nsec30 | secHigh2
            view.setUint32(0, nsec << 2 | secHigh & 3);
            // secLow32
            view.setUint32(4, secLow);
            return rv;
        }
    } else {
        // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
        var rv = new Uint8Array(12);
        var view = new DataView(rv.buffer);
        view.setUint32(0, nsec);
        _intMjs.setInt64(view, 4, sec);
        return rv;
    }
}
function encodeDateToTimeSpec(date) {
    var msec = date.getTime();
    var sec = Math.floor(msec / 1000);
    var nsec = (msec - sec * 1000) * 1000000;
    // Normalizes { sec, nsec } to ensure nsec is unsigned.
    var nsecInSec = Math.floor(nsec / 1000000000);
    return {
        sec: sec + nsecInSec,
        nsec: nsec - nsecInSec * 1000000000
    };
}
function encodeTimestampExtension(object) {
    if (object instanceof Date) {
        var timeSpec = encodeDateToTimeSpec(object);
        return encodeTimeSpecToTimestamp(timeSpec);
    } else return null;
}
function decodeTimestampToTimeSpec(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    // data may be 32, 64, or 96 bits
    switch(data.byteLength){
        case 4:
            // timestamp 32 = { sec32 }
            var sec = view.getUint32(0);
            var nsec = 0;
            return {
                sec: sec,
                nsec: nsec
            };
        case 8:
            // timestamp 64 = { nsec30, sec34 }
            var nsec30AndSecHigh2 = view.getUint32(0);
            var secLow32 = view.getUint32(4);
            var sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
            var nsec = nsec30AndSecHigh2 >>> 2;
            return {
                sec: sec,
                nsec: nsec
            };
        case 12:
            // timestamp 96 = { nsec32 (unsigned), sec64 (signed) }
            var sec = _intMjs.getInt64(view, 4);
            var nsec = view.getUint32(0);
            return {
                sec: sec,
                nsec: nsec
            };
        default:
            throw new _decodeErrorMjs.DecodeError("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(data.length));
    }
}
function decodeTimestampExtension(data) {
    var timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1000 + timeSpec.nsec / 1000000);
}
var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension
};

},{"./DecodeError.mjs":"9wQBG","./utils/int.mjs":"R0W7N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wQBG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DecodeError", ()=>DecodeError
);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var DecodeError = /** @class */ function(_super) {
    __extends(DecodeError1, _super);
    function DecodeError1(message) {
        var _this = _super.call(this, message) || this;
        // fix the prototype chain in a cross-platform way
        var proto = Object.create(DecodeError1.prototype);
        Object.setPrototypeOf(_this, proto);
        Object.defineProperty(_this, "name", {
            configurable: true,
            enumerable: false,
            value: DecodeError1.name
        });
        return _this;
    }
    return DecodeError1;
}(Error);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haKoZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensureUint8Array", ()=>ensureUint8Array
);
parcelHelpers.export(exports, "createDataView", ()=>createDataView
);
function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) return buffer;
    else if (ArrayBuffer.isView(buffer)) return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    else if (buffer instanceof ArrayBuffer) return new Uint8Array(buffer);
    else // ArrayLike<number>
    return Uint8Array.from(buffer);
}
function createDataView(buffer) {
    if (buffer instanceof ArrayBuffer) return new DataView(buffer);
    var bufferView = ensureUint8Array(buffer);
    return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkQgE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultDecodeOptions", ()=>defaultDecodeOptions
);
/**
 * It decodes a single MessagePack object in a buffer.
 *
 * This is a synchronous decoding function.
 * See other variants for asynchronous decoding: {@link decodeAsync()}, {@link decodeStream()}, or {@link decodeArrayStream()}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decode", ()=>decode
);
/**
 * It decodes multiple MessagePack objects in a buffer.
 * This is corresponding to {@link decodeMultiStream()}.
 *
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeMulti", ()=>decodeMulti
);
var _decoderMjs = require("./Decoder.mjs");
var defaultDecodeOptions = {};
function decode(buffer, options) {
    if (options === void 0) options = defaultDecodeOptions;
    var decoder = new _decoderMjs.Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decode(buffer);
}
function decodeMulti(buffer, options) {
    if (options === void 0) options = defaultDecodeOptions;
    var decoder = new _decoderMjs.Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeMulti(buffer);
}

},{"./Decoder.mjs":"28ohY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28ohY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataViewIndexOutOfBoundsError", ()=>DataViewIndexOutOfBoundsError
);
parcelHelpers.export(exports, "Decoder", ()=>Decoder
);
var _prettyByteMjs = require("./utils/prettyByte.mjs");
var _extensionCodecMjs = require("./ExtensionCodec.mjs");
var _intMjs = require("./utils/int.mjs");
var _utf8Mjs = require("./utils/utf8.mjs");
var _typedArraysMjs = require("./utils/typedArrays.mjs");
var _cachedKeyDecoderMjs = require("./CachedKeyDecoder.mjs");
var _decodeErrorMjs = require("./DecodeError.mjs");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __asyncValues = undefined && undefined.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __await = undefined && undefined.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = undefined && undefined.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
var isValidMapKeyType = function(key) {
    var keyType = typeof key;
    return keyType === "string" || keyType === "number";
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
var DataViewIndexOutOfBoundsError = function() {
    try {
        // IE11: The spec says it should throw RangeError,
        // IE11: but in IE11 it throws TypeError.
        EMPTY_VIEW.getInt8(0);
    } catch (e) {
        return e.constructor;
    }
    throw new Error("never reached");
}();
var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
var sharedCachedKeyDecoder = new _cachedKeyDecoderMjs.CachedKeyDecoder();
var Decoder = /** @class */ function() {
    function Decoder1(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, keyDecoder) {
        if (extensionCodec === void 0) extensionCodec = _extensionCodecMjs.ExtensionCodec.defaultCodec;
        if (context === void 0) context = undefined;
        if (maxStrLength === void 0) maxStrLength = _intMjs.UINT32_MAX;
        if (maxBinLength === void 0) maxBinLength = _intMjs.UINT32_MAX;
        if (maxArrayLength === void 0) maxArrayLength = _intMjs.UINT32_MAX;
        if (maxMapLength === void 0) maxMapLength = _intMjs.UINT32_MAX;
        if (maxExtLength === void 0) maxExtLength = _intMjs.UINT32_MAX;
        if (keyDecoder === void 0) keyDecoder = sharedCachedKeyDecoder;
        this.extensionCodec = extensionCodec;
        this.context = context;
        this.maxStrLength = maxStrLength;
        this.maxBinLength = maxBinLength;
        this.maxArrayLength = maxArrayLength;
        this.maxMapLength = maxMapLength;
        this.maxExtLength = maxExtLength;
        this.keyDecoder = keyDecoder;
        this.totalPos = 0;
        this.pos = 0;
        this.view = EMPTY_VIEW;
        this.bytes = EMPTY_BYTES;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack = [];
    }
    Decoder1.prototype.reinitializeState = function() {
        this.totalPos = 0;
        this.headByte = HEAD_BYTE_REQUIRED;
        this.stack.length = 0;
    // view, bytes, and pos will be re-initialized in setBuffer()
    };
    Decoder1.prototype.setBuffer = function(buffer) {
        this.bytes = _typedArraysMjs.ensureUint8Array(buffer);
        this.view = _typedArraysMjs.createDataView(this.bytes);
        this.pos = 0;
    };
    Decoder1.prototype.appendBuffer = function(buffer) {
        if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) this.setBuffer(buffer);
        else {
            var remainingData = this.bytes.subarray(this.pos);
            var newData = _typedArraysMjs.ensureUint8Array(buffer);
            // concat remainingData + newData
            var newBuffer = new Uint8Array(remainingData.length + newData.length);
            newBuffer.set(remainingData);
            newBuffer.set(newData, remainingData.length);
            this.setBuffer(newBuffer);
        }
    };
    Decoder1.prototype.hasRemaining = function(size) {
        return this.view.byteLength - this.pos >= size;
    };
    Decoder1.prototype.createExtraByteError = function(posToShow) {
        var _a = this, view = _a.view, pos = _a.pos;
        return new RangeError("Extra ".concat(view.byteLength - pos, " of ").concat(view.byteLength, " byte(s) found at buffer[").concat(posToShow, "]"));
    };
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */ Decoder1.prototype.decode = function(buffer) {
        this.reinitializeState();
        this.setBuffer(buffer);
        var object = this.doDecodeSync();
        if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
        return object;
    };
    Decoder1.prototype.decodeMulti = function(buffer) {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    this.reinitializeState();
                    this.setBuffer(buffer);
                    _a.label = 1;
                case 1:
                    if (!this.hasRemaining(1)) return [
                        3 /*break*/ ,
                        3
                    ];
                    return [
                        4 /*yield*/ ,
                        this.doDecodeSync()
                    ];
                case 2:
                    _a.sent();
                    return [
                        3 /*break*/ ,
                        1
                    ];
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    };
    Decoder1.prototype.decodeAsync = function(stream) {
        var stream_1, stream_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function() {
            var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        decoded = false;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            6,
                            7,
                            12
                        ]);
                        stream_1 = __asyncValues(stream);
                        _c.label = 2;
                    case 2:
                        return [
                            4 /*yield*/ ,
                            stream_1.next()
                        ];
                    case 3:
                        if (!(stream_1_1 = _c.sent(), !stream_1_1.done)) return [
                            3 /*break*/ ,
                            5
                        ];
                        buffer = stream_1_1.value;
                        if (decoded) throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(buffer);
                        try {
                            object = this.doDecodeSync();
                            decoded = true;
                        } catch (e) {
                            if (!(e instanceof DataViewIndexOutOfBoundsError)) throw e; // rethrow
                        // fallthrough
                        }
                        this.totalPos += this.pos;
                        _c.label = 4;
                    case 4:
                        return [
                            3 /*break*/ ,
                            2
                        ];
                    case 5:
                        return [
                            3 /*break*/ ,
                            12
                        ];
                    case 6:
                        e_1_1 = _c.sent();
                        e_1 = {
                            error: e_1_1
                        };
                        return [
                            3 /*break*/ ,
                            12
                        ];
                    case 7:
                        _c.trys.push([
                            7,
                            ,
                            10,
                            11
                        ]);
                        if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return))) return [
                            3 /*break*/ ,
                            9
                        ];
                        return [
                            4 /*yield*/ ,
                            _a.call(stream_1)
                        ];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        return [
                            3 /*break*/ ,
                            11
                        ];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 11:
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 12:
                        if (decoded) {
                            if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
                            return [
                                2 /*return*/ ,
                                object
                            ];
                        }
                        _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
                        throw new RangeError("Insufficient data in parsing ".concat(_prettyByteMjs.prettyByte(headByte), " at ").concat(totalPos, " (").concat(pos, " in the current buffer)"));
                }
            });
        });
    };
    Decoder1.prototype.decodeArrayStream = function(stream) {
        return this.decodeMultiAsync(stream, true);
    };
    Decoder1.prototype.decodeStream = function(stream) {
        return this.decodeMultiAsync(stream, false);
    };
    Decoder1.prototype.decodeMultiAsync = function(stream, isArray) {
        return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
            var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1;
            var e_3, _a;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        isArrayHeaderRequired = isArray;
                        arrayItemsLeft = -1;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([
                            1,
                            13,
                            14,
                            19
                        ]);
                        stream_2 = __asyncValues(stream);
                        _b.label = 2;
                    case 2:
                        return [
                            4 /*yield*/ ,
                            __await(stream_2.next())
                        ];
                    case 3:
                        if (!(stream_2_1 = _b.sent(), !stream_2_1.done)) return [
                            3 /*break*/ ,
                            12
                        ];
                        buffer = stream_2_1.value;
                        if (isArray && arrayItemsLeft === 0) throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(buffer);
                        if (isArrayHeaderRequired) {
                            arrayItemsLeft = this.readArraySize();
                            isArrayHeaderRequired = false;
                            this.complete();
                        }
                        _b.label = 4;
                    case 4:
                        _b.trys.push([
                            4,
                            9,
                            ,
                            10
                        ]);
                        _b.label = 5;
                    case 5:
                        return [
                            4 /*yield*/ ,
                            __await(this.doDecodeSync())
                        ];
                    case 6:
                        return [
                            4 /*yield*/ ,
                            _b.sent()
                        ];
                    case 7:
                        _b.sent();
                        if (--arrayItemsLeft === 0) return [
                            3 /*break*/ ,
                            8
                        ];
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 8:
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 9:
                        e_2 = _b.sent();
                        if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) throw e_2; // rethrow
                        return [
                            3 /*break*/ ,
                            10
                        ];
                    case 10:
                        this.totalPos += this.pos;
                        _b.label = 11;
                    case 11:
                        return [
                            3 /*break*/ ,
                            2
                        ];
                    case 12:
                        return [
                            3 /*break*/ ,
                            19
                        ];
                    case 13:
                        e_3_1 = _b.sent();
                        e_3 = {
                            error: e_3_1
                        };
                        return [
                            3 /*break*/ ,
                            19
                        ];
                    case 14:
                        _b.trys.push([
                            14,
                            ,
                            17,
                            18
                        ]);
                        if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return))) return [
                            3 /*break*/ ,
                            16
                        ];
                        return [
                            4 /*yield*/ ,
                            __await(_a.call(stream_2))
                        ];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16:
                        return [
                            3 /*break*/ ,
                            18
                        ];
                    case 17:
                        if (e_3) throw e_3.error;
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 18:
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 19:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Decoder1.prototype.doDecodeSync = function() {
        DECODE: while(true){
            var headByte = this.readHeadByte();
            var object = void 0;
            if (headByte >= 224) // negative fixint (111x xxxx) 0xe0 - 0xff
            object = headByte - 256;
            else if (headByte < 192) {
                if (headByte < 128) // positive fixint (0xxx xxxx) 0x00 - 0x7f
                object = headByte;
                else if (headByte < 144) {
                    // fixmap (1000 xxxx) 0x80 - 0x8f
                    var size = headByte - 128;
                    if (size !== 0) {
                        this.pushMapState(size);
                        this.complete();
                        continue DECODE;
                    } else object = {};
                } else if (headByte < 160) {
                    // fixarray (1001 xxxx) 0x90 - 0x9f
                    var size = headByte - 144;
                    if (size !== 0) {
                        this.pushArrayState(size);
                        this.complete();
                        continue DECODE;
                    } else object = [];
                } else {
                    // fixstr (101x xxxx) 0xa0 - 0xbf
                    var byteLength = headByte - 160;
                    object = this.decodeUtf8String(byteLength, 0);
                }
            } else if (headByte === 192) // nil
            object = null;
            else if (headByte === 194) // false
            object = false;
            else if (headByte === 195) // true
            object = true;
            else if (headByte === 202) // float 32
            object = this.readF32();
            else if (headByte === 203) // float 64
            object = this.readF64();
            else if (headByte === 204) // uint 8
            object = this.readU8();
            else if (headByte === 205) // uint 16
            object = this.readU16();
            else if (headByte === 206) // uint 32
            object = this.readU32();
            else if (headByte === 207) // uint 64
            object = this.readU64();
            else if (headByte === 208) // int 8
            object = this.readI8();
            else if (headByte === 209) // int 16
            object = this.readI16();
            else if (headByte === 210) // int 32
            object = this.readI32();
            else if (headByte === 211) // int 64
            object = this.readI64();
            else if (headByte === 217) {
                // str 8
                var byteLength = this.lookU8();
                object = this.decodeUtf8String(byteLength, 1);
            } else if (headByte === 218) {
                // str 16
                var byteLength = this.lookU16();
                object = this.decodeUtf8String(byteLength, 2);
            } else if (headByte === 219) {
                // str 32
                var byteLength = this.lookU32();
                object = this.decodeUtf8String(byteLength, 4);
            } else if (headByte === 220) {
                // array 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                } else object = [];
            } else if (headByte === 221) {
                // array 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushArrayState(size);
                    this.complete();
                    continue DECODE;
                } else object = [];
            } else if (headByte === 222) {
                // map 16
                var size = this.readU16();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                } else object = {};
            } else if (headByte === 223) {
                // map 32
                var size = this.readU32();
                if (size !== 0) {
                    this.pushMapState(size);
                    this.complete();
                    continue DECODE;
                } else object = {};
            } else if (headByte === 196) {
                // bin 8
                var size = this.lookU8();
                object = this.decodeBinary(size, 1);
            } else if (headByte === 197) {
                // bin 16
                var size = this.lookU16();
                object = this.decodeBinary(size, 2);
            } else if (headByte === 198) {
                // bin 32
                var size = this.lookU32();
                object = this.decodeBinary(size, 4);
            } else if (headByte === 212) // fixext 1
            object = this.decodeExtension(1, 0);
            else if (headByte === 213) // fixext 2
            object = this.decodeExtension(2, 0);
            else if (headByte === 214) // fixext 4
            object = this.decodeExtension(4, 0);
            else if (headByte === 215) // fixext 8
            object = this.decodeExtension(8, 0);
            else if (headByte === 216) // fixext 16
            object = this.decodeExtension(16, 0);
            else if (headByte === 199) {
                // ext 8
                var size = this.lookU8();
                object = this.decodeExtension(size, 1);
            } else if (headByte === 200) {
                // ext 16
                var size = this.lookU16();
                object = this.decodeExtension(size, 2);
            } else if (headByte === 201) {
                // ext 32
                var size = this.lookU32();
                object = this.decodeExtension(size, 4);
            } else throw new _decodeErrorMjs.DecodeError("Unrecognized type byte: ".concat(_prettyByteMjs.prettyByte(headByte)));
            this.complete();
            var stack = this.stack;
            while(stack.length > 0){
                // arrays and maps
                var state = stack[stack.length - 1];
                if (state.type === 0 /* State.ARRAY */ ) {
                    state.array[state.position] = object;
                    state.position++;
                    if (state.position === state.size) {
                        stack.pop();
                        object = state.array;
                    } else continue DECODE;
                } else if (state.type === 1 /* State.MAP_KEY */ ) {
                    if (!isValidMapKeyType(object)) throw new _decodeErrorMjs.DecodeError("The type of key must be string or number but " + typeof object);
                    if (object === "__proto__") throw new _decodeErrorMjs.DecodeError("The key __proto__ is not allowed");
                    state.key = object;
                    state.type = 2 /* State.MAP_VALUE */ ;
                    continue DECODE;
                } else {
                    // it must be `state.type === State.MAP_VALUE` here
                    state.map[state.key] = object;
                    state.readCount++;
                    if (state.readCount === state.size) {
                        stack.pop();
                        object = state.map;
                    } else {
                        state.key = null;
                        state.type = 1 /* State.MAP_KEY */ ;
                        continue DECODE;
                    }
                }
            }
            return object;
        }
    };
    Decoder1.prototype.readHeadByte = function() {
        if (this.headByte === HEAD_BYTE_REQUIRED) this.headByte = this.readU8();
        return this.headByte;
    };
    Decoder1.prototype.complete = function() {
        this.headByte = HEAD_BYTE_REQUIRED;
    };
    Decoder1.prototype.readArraySize = function() {
        var headByte = this.readHeadByte();
        switch(headByte){
            case 220:
                return this.readU16();
            case 221:
                return this.readU32();
            default:
                if (headByte < 160) return headByte - 144;
                else throw new _decodeErrorMjs.DecodeError("Unrecognized array type byte: ".concat(_prettyByteMjs.prettyByte(headByte)));
        }
    };
    Decoder1.prototype.pushMapState = function(size) {
        if (size > this.maxMapLength) throw new _decodeErrorMjs.DecodeError("Max length exceeded: map length (".concat(size, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
        this.stack.push({
            type: 1 /* State.MAP_KEY */ ,
            size: size,
            key: null,
            readCount: 0,
            map: {}
        });
    };
    Decoder1.prototype.pushArrayState = function(size) {
        if (size > this.maxArrayLength) throw new _decodeErrorMjs.DecodeError("Max length exceeded: array length (".concat(size, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
        this.stack.push({
            type: 0 /* State.ARRAY */ ,
            size: size,
            array: new Array(size),
            position: 0
        });
    };
    Decoder1.prototype.decodeUtf8String = function(byteLength, headerOffset) {
        var _a;
        if (byteLength > this.maxStrLength) throw new _decodeErrorMjs.DecodeError("Max length exceeded: UTF-8 byte length (".concat(byteLength, ") > maxStrLength (").concat(this.maxStrLength, ")"));
        if (this.bytes.byteLength < this.pos + headerOffset + byteLength) throw MORE_DATA;
        var offset = this.pos + headerOffset;
        var object;
        if (this.stateIsMapKey() && ((_a = this.keyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) object = this.keyDecoder.decode(this.bytes, offset, byteLength);
        else if (byteLength > _utf8Mjs.TEXT_DECODER_THRESHOLD) object = _utf8Mjs.utf8DecodeTD(this.bytes, offset, byteLength);
        else object = _utf8Mjs.utf8DecodeJs(this.bytes, offset, byteLength);
        this.pos += headerOffset + byteLength;
        return object;
    };
    Decoder1.prototype.stateIsMapKey = function() {
        if (this.stack.length > 0) {
            var state = this.stack[this.stack.length - 1];
            return state.type === 1 /* State.MAP_KEY */ ;
        }
        return false;
    };
    Decoder1.prototype.decodeBinary = function(byteLength, headOffset) {
        if (byteLength > this.maxBinLength) throw new _decodeErrorMjs.DecodeError("Max length exceeded: bin length (".concat(byteLength, ") > maxBinLength (").concat(this.maxBinLength, ")"));
        if (!this.hasRemaining(byteLength + headOffset)) throw MORE_DATA;
        var offset = this.pos + headOffset;
        var object = this.bytes.subarray(offset, offset + byteLength);
        this.pos += headOffset + byteLength;
        return object;
    };
    Decoder1.prototype.decodeExtension = function(size, headOffset) {
        if (size > this.maxExtLength) throw new _decodeErrorMjs.DecodeError("Max length exceeded: ext length (".concat(size, ") > maxExtLength (").concat(this.maxExtLength, ")"));
        var extType = this.view.getInt8(this.pos + headOffset);
        var data = this.decodeBinary(size, headOffset + 1 /* extType */ );
        return this.extensionCodec.decode(data, extType, this.context);
    };
    Decoder1.prototype.lookU8 = function() {
        return this.view.getUint8(this.pos);
    };
    Decoder1.prototype.lookU16 = function() {
        return this.view.getUint16(this.pos);
    };
    Decoder1.prototype.lookU32 = function() {
        return this.view.getUint32(this.pos);
    };
    Decoder1.prototype.readU8 = function() {
        var value = this.view.getUint8(this.pos);
        this.pos++;
        return value;
    };
    Decoder1.prototype.readI8 = function() {
        var value = this.view.getInt8(this.pos);
        this.pos++;
        return value;
    };
    Decoder1.prototype.readU16 = function() {
        var value = this.view.getUint16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder1.prototype.readI16 = function() {
        var value = this.view.getInt16(this.pos);
        this.pos += 2;
        return value;
    };
    Decoder1.prototype.readU32 = function() {
        var value = this.view.getUint32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder1.prototype.readI32 = function() {
        var value = this.view.getInt32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder1.prototype.readU64 = function() {
        var value = _intMjs.getUint64(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder1.prototype.readI64 = function() {
        var value = _intMjs.getInt64(this.view, this.pos);
        this.pos += 8;
        return value;
    };
    Decoder1.prototype.readF32 = function() {
        var value = this.view.getFloat32(this.pos);
        this.pos += 4;
        return value;
    };
    Decoder1.prototype.readF64 = function() {
        var value = this.view.getFloat64(this.pos);
        this.pos += 8;
        return value;
    };
    return Decoder1;
}();

},{"./utils/prettyByte.mjs":"ltdEi","./ExtensionCodec.mjs":"5G6eb","./utils/int.mjs":"R0W7N","./utils/utf8.mjs":"boCqR","./utils/typedArrays.mjs":"haKoZ","./CachedKeyDecoder.mjs":"aROqz","./DecodeError.mjs":"9wQBG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ltdEi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prettyByte", ()=>prettyByte
);
function prettyByte(byte) {
    return "".concat(byte < 0 ? "-" : "", "0x").concat(Math.abs(byte).toString(16).padStart(2, "0"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aROqz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CachedKeyDecoder", ()=>CachedKeyDecoder
);
var _utf8Mjs = require("./utils/utf8.mjs");
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = /** @class */ function() {
    function CachedKeyDecoder1(maxKeyLength, maxLengthPerKey) {
        if (maxKeyLength === void 0) maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
        if (maxLengthPerKey === void 0) maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
        this.maxKeyLength = maxKeyLength;
        this.maxLengthPerKey = maxLengthPerKey;
        this.hit = 0;
        this.miss = 0;
        // avoid `new Array(N)`, which makes a sparse array,
        // because a sparse array is typically slower than a non-sparse array.
        this.caches = [];
        for(var i = 0; i < this.maxKeyLength; i++)this.caches.push([]);
    }
    CachedKeyDecoder1.prototype.canBeCached = function(byteLength) {
        return byteLength > 0 && byteLength <= this.maxKeyLength;
    };
    CachedKeyDecoder1.prototype.find = function(bytes, inputOffset, byteLength) {
        var records = this.caches[byteLength - 1];
        FIND_CHUNK: for(var _i = 0, records_1 = records; _i < records_1.length; _i++){
            var record = records_1[_i];
            var recordBytes = record.bytes;
            for(var j = 0; j < byteLength; j++){
                if (recordBytes[j] !== bytes[inputOffset + j]) continue FIND_CHUNK;
            }
            return record.str;
        }
        return null;
    };
    CachedKeyDecoder1.prototype.store = function(bytes, value) {
        var records = this.caches[bytes.length - 1];
        var record = {
            bytes: bytes,
            str: value
        };
        if (records.length >= this.maxLengthPerKey) // `records` are full!
        // Set `record` to an arbitrary position.
        records[Math.random() * records.length | 0] = record;
        else records.push(record);
    };
    CachedKeyDecoder1.prototype.decode = function(bytes, inputOffset, byteLength) {
        var cachedValue = this.find(bytes, inputOffset, byteLength);
        if (cachedValue != null) {
            this.hit++;
            return cachedValue;
        }
        this.miss++;
        var str = _utf8Mjs.utf8DecodeJs(bytes, inputOffset, byteLength);
        // Ensure to copy a slice of bytes because the byte may be NodeJS Buffer and Buffer#slice() returns a reference to its internal ArrayBuffer.
        var slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
        this.store(slicedCopyOfBytes, str);
        return str;
    };
    return CachedKeyDecoder1;
}();

},{"./utils/utf8.mjs":"boCqR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IFuO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeAsync", ()=>decodeAsync
);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeArrayStream", ()=>decodeArrayStream
);
/**
 * @throws {@link RangeError} if the buffer is incomplete, including the case where the buffer is empty.
 * @throws {@link DecodeError} if the buffer contains invalid data.
 */ parcelHelpers.export(exports, "decodeMultiStream", ()=>decodeMultiStream
);
/**
 * @deprecated Use {@link decodeMultiStream()} instead.
 */ parcelHelpers.export(exports, "decodeStream", ()=>decodeStream
);
var _decoderMjs = require("./Decoder.mjs");
var _streamMjs = require("./utils/stream.mjs");
var _decodeMjs = require("./decode.mjs");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
function decodeAsync(streamLike, options) {
    if (options === void 0) options = _decodeMjs.defaultDecodeOptions;
    return __awaiter(this, void 0, void 0, function() {
        var stream, decoder;
        return __generator(this, function(_a) {
            stream = _streamMjs.ensureAsyncIterable(streamLike);
            decoder = new _decoderMjs.Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
            return [
                2 /*return*/ ,
                decoder.decodeAsync(stream)
            ];
        });
    });
}
function decodeArrayStream(streamLike, options) {
    if (options === void 0) options = _decodeMjs.defaultDecodeOptions;
    var stream = _streamMjs.ensureAsyncIterable(streamLike);
    var decoder = new _decoderMjs.Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeArrayStream(stream);
}
function decodeMultiStream(streamLike, options) {
    if (options === void 0) options = _decodeMjs.defaultDecodeOptions;
    var stream = _streamMjs.ensureAsyncIterable(streamLike);
    var decoder = new _decoderMjs.Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
    return decoder.decodeStream(stream);
}
function decodeStream(streamLike, options) {
    if (options === void 0) options = _decodeMjs.defaultDecodeOptions;
    return decodeMultiStream(streamLike, options);
}

},{"./Decoder.mjs":"28ohY","./utils/stream.mjs":"ifKI2","./decode.mjs":"lkQgE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ifKI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable
);
parcelHelpers.export(exports, "asyncIterableFromStream", ()=>asyncIterableFromStream
);
parcelHelpers.export(exports, "ensureAsyncIterable", ()=>ensureAsyncIterable
);
// utility for whatwg streams
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __await = undefined && undefined.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = undefined && undefined.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
function isAsyncIterable(object) {
    return object[Symbol.asyncIterator] != null;
}
function assertNonNull(value) {
    if (value == null) throw new Error("Assertion Failure: value must not be null nor undefined");
}
function asyncIterableFromStream(stream) {
    return __asyncGenerator(this, arguments, function asyncIterableFromStream_1() {
        var reader, _a, done, value;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = stream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4 /*yield*/ ,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), done = _a.done, value = _a.value;
                    if (!done) return [
                        3 /*break*/ ,
                        5
                    ];
                    return [
                        4 /*yield*/ ,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2 /*return*/ ,
                        _b.sent()
                    ];
                case 5:
                    assertNonNull(value);
                    return [
                        4 /*yield*/ ,
                        __await(value)
                    ];
                case 6:
                    return [
                        4 /*yield*/ ,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3 /*break*/ ,
                        2
                    ];
                case 8:
                    return [
                        3 /*break*/ ,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7 /*endfinally*/ 
                    ];
                case 10:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
function ensureAsyncIterable(streamLike) {
    if (isAsyncIterable(streamLike)) return streamLike;
    else return asyncIterableFromStream(streamLike);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wf1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function normalize(strArray) {
    var resultArray = [];
    if (strArray.length === 0) return '';
    if (typeof strArray[0] !== 'string') throw new TypeError('Url must be a string. Received ' + strArray[0]);
    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
        var first = strArray.shift();
        strArray[0] = first + strArray[0];
    }
    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    else strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    for(var i = 0; i < strArray.length; i++){
        var component = strArray[i];
        if (typeof component !== 'string') throw new TypeError('Url must be a string. Received ' + component);
        if (component === '') continue;
        if (i > 0) // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
        if (i < strArray.length - 1) // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
        else // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
        resultArray.push(component);
    }
    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.
    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');
    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
    return str;
}
function urlJoin() {
    var input;
    if (typeof arguments[0] === 'object') input = arguments[0];
    else input = [].slice.call(arguments);
    return normalize(input);
}
exports.default = urlJoin;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOq9n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeModule", ()=>NodeModule
);
class NodeModule {
    constructor(name, version, files, modules){
        this.name = name;
        this.version = version;
        this.files = files;
        this.modules = modules;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"z5Yb6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPreset", ()=>getPreset
);
var _logger = require("../../utils/logger");
var _reactPreset = require("./react/ReactPreset");
var _solidPreset = require("./solid/SolidPreset");
const PRESET_MAP = new Map([
    [
        'react',
        new _reactPreset.ReactPreset()
    ],
    [
        'solid',
        new _solidPreset.SolidPreset()
    ], 
]);
function getPreset(presetName) {
    const foundPreset = PRESET_MAP.get(presetName);
    if (!foundPreset) {
        _logger.warn(`Unknown preset ${presetName}, falling back to React`);
        return new _reactPreset.ReactPreset();
    }
    return foundPreset;
}

},{"../../utils/logger":"4rlpq","./react/ReactPreset":"aoM8F","./solid/SolidPreset":"hHkHS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoM8F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReactPreset", ()=>ReactPreset
);
var _babel = require("../../transforms/babel");
var _css = require("../../transforms/css");
var _reactRefresh = require("../../transforms/react-refresh");
var _style = require("../../transforms/style");
var _preset = require("../Preset");
class ReactPreset extends _preset.Preset {
    defaultHtmlBody = '<div id="root"></div>';
    constructor(){
        super('react');
    }
    async init(bundler) {
        await super.init(bundler);
        await Promise.all([
            this.registerTransformer(new _babel.BabelTransformer()),
            this.registerTransformer(new _reactRefresh.ReactRefreshTransformer()),
            this.registerTransformer(new _css.CSSTransformer()),
            this.registerTransformer(new _style.StyleTransformer()), 
        ]);
    }
    mapTransformers(module) {
        if (/^(?!\/node_modules\/).*\.(((m|c)?jsx?)|tsx)$/.test(module.filepath)) return [
            [
                'babel-transformer',
                {
                    presets: [
                        [
                            'react',
                            {
                                runtime: 'automatic'
                            }, 
                        ], 
                    ],
                    plugins: [
                        [
                            'react-refresh/babel',
                            {
                                skipEnvCheck: true
                            }
                        ]
                    ]
                }, 
            ],
            [
                'react-refresh-transformer',
                {}
            ], 
        ];
        if (/\.(m|c)?(t|j)sx?$/.test(module.filepath) && !module.filepath.endsWith('.d.ts')) return [
            [
                'babel-transformer',
                {
                    presets: [
                        [
                            'react',
                            {
                                runtime: 'automatic'
                            }, 
                        ], 
                    ]
                }, 
            ], 
        ];
        if (/\.css$/.test(module.filepath)) return [
            [
                'css-transformer',
                {}
            ],
            [
                'style-transformer',
                {}
            ], 
        ];
        throw new Error(`No transformer for ${module.filepath}`);
    }
    augmentDependencies(dependencies) {
        if (!dependencies['react-refresh']) dependencies['react-refresh'] = '^0.11.0';
        dependencies['core-js'] = '3.22.7';
        return dependencies;
    }
}

},{"../../transforms/babel":"ePd0S","../../transforms/css":"hJ3Y5","../../transforms/react-refresh":"lUZ37","../../transforms/style":"SqnZn","../Preset":"9Ohnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePd0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BabelTransformer", ()=>BabelTransformer
);
var _compilationError = require("../../../errors/CompilationError");
var _logger = require("../../../utils/logger");
var _workerMessageBus = require("../../../utils/WorkerMessageBus");
var _transformer = require("../Transformer");
class BabelTransformer extends _transformer.Transformer {
    worker = null;
    messageBus = null;
    constructor(){
        super('babel-transformer');
    }
    async init() {
        this.worker = new Worker(require("3a640f938983c25e"));
        this.messageBus = new _workerMessageBus.WorkerMessageBus({
            channel: 'sandpack-babel',
            endpoint: this.worker,
            handleNotification: ()=>Promise.resolve()
            ,
            handleRequest: ()=>Promise.reject(new Error('Unknown method'))
            ,
            handleError: (err)=>{
                _logger.error(err);
                return Promise.resolve();
            },
            timeoutMs: 30000
        });
    }
    async transform(ctx, config) {
        if (!this.messageBus) throw new Error('Babel worker has not been initialized');
        const data = {
            code: ctx.code,
            filepath: ctx.module.filepath,
            config
        };
        try {
            return await this.messageBus.request('transform', data);
        } catch (err) {
            return new _compilationError.CompilationError(err, ctx.module.filepath);
        }
    }
}

},{"../../../errors/CompilationError":"1xasY","../../../utils/logger":"4rlpq","../../../utils/WorkerMessageBus":"4MIjP","../Transformer":"9N9CX","3a640f938983c25e":"cCrlG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xasY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CompilationError", ()=>CompilationError
);
var _bundlerError = require("./BundlerError");
const parseError = (error)=>{
    if (error.loc) return {
        message: error.message,
        line: error.loc.line,
        column: error.loc.column
    };
    return {
        message: error.message,
        line: 1,
        column: 1
    };
};
class CompilationError extends _bundlerError.BundlerError {
    code = 'COMPILATION_ERROR';
    constructor(error, path){
        super(error.message);
        const { column , line , message  } = parseError(error);
        this.title = 'Compilation error';
        this.message = message;
        this.column = column;
        this.line = line;
        this.path = path;
    }
}

},{"./BundlerError":"3sU3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MIjP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WorkerMessageBus", ()=>WorkerMessageBus
);
var _logger = require("../utils/logger");
const serializeError = (originalError)=>{
    if (typeof originalError !== 'object') return {
        message: originalError
    };
    else return {
        message: originalError.message,
        name: originalError.name,
        stack: originalError.stack,
        ...originalError
    };
};
const parseError = (serializedError)=>{
    const error = new Error(serializedError.message);
    for (const key of Object.keys(serializedError))// @ts-ignore
    error[key] = serializedError[key];
    return error;
};
class WorkerMessageBus {
    pendingRequests = new Map();
    _messageId = 0;
    constructor(opts){
        this.channel = opts.channel;
        this.endpoint = opts.endpoint;
        this.handleRequest = opts.handleRequest;
        this.handleNotification = opts.handleNotification;
        this.handleError = opts.handleError;
        this.timeoutMs = opts.timeoutMs;
        this.endpoint.addEventListener('message', async (evt)=>{
            const data = evt.data;
            if (data.channel !== this.channel) return;
            const messageId = data.id;
            if (data.method) {
                if (messageId == null) this.handleNotification(data.method, data.data);
                else if (data.method && data.params) // It's a request
                try {
                    const result = await this.handleRequest(data.method, ...data.params);
                    this.endpoint.postMessage({
                        id: messageId,
                        channel: this.channel,
                        result
                    });
                } catch (err) {
                    _logger.error(err);
                    this.endpoint.postMessage({
                        id: messageId,
                        channel: this.channel,
                        error: serializeError(err)
                    });
                }
            } else if (messageId != null) {
                // It's a response
                const pendingRequest = this.pendingRequests.get(messageId);
                if (!pendingRequest) return;
                if (data.error !== undefined) pendingRequest.reject(parseError(data.error));
                else pendingRequest.resolve(data.result);
            }
        });
        this.endpoint.addEventListener('error', (err)=>this.handleError(err)
        );
    }
    nextMessageId() {
        this._messageId++;
        return this._messageId;
    }
    request(method, ...params) {
        const messageId = this.nextMessageId();
        const message = {
            channel: this.channel,
            id: messageId,
            method,
            params
        };
        const promise = new Promise((resolve, reject)=>{
            const timeoutRef = setTimeout(()=>{
                this.pendingRequests.delete(messageId);
                reject(new Error(`Request on channel ${this.channel} timed out`));
            }, this.timeoutMs);
            this.pendingRequests.set(messageId, {
                resolve: (data)=>{
                    clearTimeout(timeoutRef);
                    resolve(data);
                },
                reject: (err)=>{
                    clearTimeout(timeoutRef);
                    reject(err);
                }
            });
        });
        this.endpoint.postMessage(message);
        return promise;
    }
}

},{"../utils/logger":"4rlpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9N9CX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transformer", ()=>Transformer
);
class Transformer {
    constructor(id){
        this.id = id;
    }
    async init(bundler) {}
    async transform(ctx, config) {
        throw new Error('Not implemented');
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCrlG":[function(require,module,exports) {
let workerURL = require('./helpers/get-worker-url');
let bundleURL = require('./helpers/bundle-url');
let url = bundleURL.getBundleURL('7UhFu') + "babel-worker.1932c9e7.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"./helpers/get-worker-url":"cn2gM","./helpers/bundle-url":"lgJ39"}],"cn2gM":[function(require,module,exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? 'import ' + JSON.stringify(workerUrl) + ';' : 'importScripts(' + JSON.stringify(workerUrl) + ');';
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: 'application/javascript'
        }));
    }
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hJ3Y5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSTransformer", ()=>CSSTransformer
);
var _transformer = require("../Transformer");
const FEATURE_REGEX = /@import|@url|url\(/;
class CSSTransformer extends _transformer.Transformer {
    _loader = null;
    constructor(){
        super('css-transformer');
    }
    getLoader() {
        if (this._loader) return Promise.resolve(this._loader);
        else {
            this._loader = require("5ee9db536c9bf0a3");
            return this._loader;
        }
    }
    async transform(ctx, config) {
        if (!FEATURE_REGEX.test(ctx.code)) return {
            code: ctx.code,
            dependencies: new Set()
        };
        const loader = await this.getLoader();
        return loader.default(ctx);
    }
}

},{"../Transformer":"9N9CX","5ee9db536c9bf0a3":"gIOna","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIOna":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('7UhFu') + "postcss-loader.010a84d5.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('bQpbj')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require('../cacheLoader');
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script1 = document.createElement('script');
        script1.async = true;
        script1.type = 'text/javascript';
        script1.charset = 'utf-8';
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script1);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case 'preload':
            return cachedPreloads;
        case 'prefetch':
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lUZ37":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReactRefreshTransformer", ()=>ReactRefreshTransformer
);
var _transformer = require("../Transformer");
const HELPER_PATH = '/node_modules/__csb_bust/refresh-helper.js';
const HELPER_CODE = `
const Refresh = require('react-refresh/runtime');

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const enqueueUpdate = debounce(() => {
  try {
    Refresh.performReactRefresh();
  } catch (e) {
    module.hot.decline();
    throw e;
  }
}, 30);

function isReactRefreshBoundary(moduleExports) {
  if (Object.keys(Refresh).length === 0) {
    return false;
  }

  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }
  let hasExports = false;
  let areAllExportsComponents = true;
  for (const key in moduleExports) {
    hasExports = true;
    if (key === '__esModule') {
      continue;
    }
    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);
    if (desc && desc.get) {
      // Don't invoke getters as they may have side effects.
      return false;
    }
    const exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }
  return hasExports && areAllExportsComponents;
};

// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(moduleExports) {
  const signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));
  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
  }
  for (const key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }
    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);
    if (desc && desc.get) {
      continue;
    }
    const exportValue = moduleExports[key];
    signature.push(key);
    signature.push(Refresh.getFamilyByType(exportValue));
  }
  return signature;
};

function shouldInvalidateReactRefreshBoundary(
  prevExports,
  nextExports,
) {
  const prevSignature = getRefreshBoundarySignature(prevExports);
  const nextSignature = getRefreshBoundarySignature(nextExports);
  if (prevSignature.length !== nextSignature.length) {
    return true;
  }
  for (let i = 0; i < nextSignature.length; i++) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }
  return false;
};

var registerExportsForReactRefresh = (moduleExports, moduleID) => {
  Refresh.register(moduleExports, moduleID + ' %exports%');
  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
  }
  for (const key in moduleExports) {
    const desc = Object.getOwnPropertyDescriptor(moduleExports, key);
    if (desc && desc.get) {
      // Don't invoke getters as they may have side effects.
      continue;
    }
    const exportValue = moduleExports[key];
    const typeID = moduleID + ' %exports% ' + key;
    Refresh.register(exportValue, typeID);
  }
};

function prelude(module) {
  window.$RefreshReg$ = (type, id) => {
    // Note module.id is webpack-specific, this may vary in other bundlers
    const fullId = module.id + ' ' + id;
    Refresh.register(type, fullId);
  }
  
  window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
}

function postlude(module) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;
  if (isReactRefreshBoundary) {
    if (isReactRefreshBoundary(module.exports)) {
      registerExportsForReactRefresh(module.exports, module.id);
      const currentExports = { ...module.exports };

      module.hot.dispose(function hotDisposeCallback(data) {
        data.prevExports = currentExports;
      });

      if (isHotUpdate && shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
        module.hot.invalidate();
      } else {
        module.hot.accept();
      }

      enqueueUpdate();
    } else if (isHotUpdate && isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

module.exports = {
  enqueueUpdate,
  isReactRefreshBoundary,
  registerExportsForReactRefresh,
  shouldInvalidateReactRefreshBoundary,
  prelude,
  postlude,
};
`.trim();
const prelude = `var _csbRefreshUtils = require("${HELPER_PATH}");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
_csbRefreshUtils.prelude(module);
try {`.replace(/[\n]+/gm, '');
const postlude = `_csbRefreshUtils.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}`.replace(/[\n]+/gm, '');
const REACT_REFRESH_RUNTIME = `
if (typeof window !== 'undefined') {
  const runtime = require('react-refresh/runtime');
  runtime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => type => type;
}
`;
/**
 * This is the compressed version of the code in the comment above. We compress the code
 * to a single line so we don't mess with the source mapping when showing errors.
 */ const getWrapperCode = (sourceCode)=>prelude + sourceCode + '\n' + postlude
;
class ReactRefreshTransformer extends _transformer.Transformer {
    constructor(){
        super('react-refresh-transformer');
    }
    async init(bundler) {
        bundler.registerRuntime(this.id, REACT_REFRESH_RUNTIME);
    }
    async transform(ctx, config) {
        // TODO: Detect if we need to add react-refresh to this file...
        // Write helper to memory-fs
        if (!ctx.module.bundler.fs.isFileSync(HELPER_PATH)) ctx.module.bundler.fs.writeFile(HELPER_PATH, HELPER_CODE);
        const newCode = getWrapperCode(ctx.code);
        return {
            code: newCode || '',
            dependencies: new Set([
                HELPER_PATH
            ])
        };
    }
}

},{"../Transformer":"9N9CX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SqnZn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StyleTransformer", ()=>StyleTransformer
);
var _transformer = require("../Transformer");
var _insertCss = require("./insert-css");
const getStyleId = (id)=>id + '-css'
;
class StyleTransformer extends _transformer.Transformer {
    constructor(){
        super('style-transformer');
    }
    transform(ctx, config) {
        const id = getStyleId(ctx.module.id);
        const result = _insertCss.insertCss(id, ctx.code, true);
        return Promise.resolve({
            code: result,
            dependencies: new Set()
        });
    }
}

},{"../Transformer":"9N9CX","./insert-css":"2jl3u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jl3u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertCss", ()=>insertCss
);
const wrapper = (id, css, hmrEnabled = false)=>`
function createStyleNode(id, content) {
  var styleNode =
    document.getElementById(id) || document.createElement('style');

  styleNode.setAttribute('id', id);
  styleNode.type = 'text/css';
  if (styleNode.styleSheet) {
    styleNode.styleSheet.cssText = content;
  } else {
    styleNode.innerHTML = '';
    styleNode.appendChild(document.createTextNode(content));
  }
  document.head.appendChild(styleNode);
}

createStyleNode(
  ${JSON.stringify(id)},
  ${JSON.stringify(css)}
);

${hmrEnabled ? 'module.hot.accept()' : ''}
`
;
function insertCss(id, css, hmrEnabled) {
    const result = wrapper(id, css || '', hmrEnabled);
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ohnw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Preset", ()=>Preset
);
class Preset {
    constructor(name){
        this.name = name;
        this.transformers = new Map();
        this.bundler = null;
        this.defaultEntryPoints = [
            'index',
            'src/index'
        ];
        this.defaultHtmlBody = '';
    }
    async registerTransformer(transformer) {
        if (!this.bundler) throw new Error('Call Preset#init before registering transformers');
        await transformer.init(this.bundler);
        this.transformers.set(transformer.id, transformer);
    }
    getTransformer(id) {
        return this.transformers.get(id);
    }
    async init(bundler) {
        this.bundler = bundler;
    }
    mapTransformers(module) {
        throw new Error('Not implemented');
    }
    getTransformers(module) {
        const transformersMap = this.mapTransformers(module);
        return transformersMap.map((val)=>{
            const transformer = this.getTransformer(val[0]);
            if (!transformer) throw new Error(`Transformer ${val[0]} not found`);
            return [
                transformer,
                val[1]
            ];
        });
    }
    augmentDependencies(dependencies) {
        return dependencies;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHkHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SolidPreset", ()=>SolidPreset
);
var _babel = require("../../transforms/babel");
var _css = require("../../transforms/css");
var _style = require("../../transforms/style");
var _preset = require("../Preset");
class SolidPreset extends _preset.Preset {
    defaultHtmlBody = '<div id="app"></div>';
    constructor(){
        super('solid');
    }
    async init(bundler) {
        await super.init(bundler);
        await Promise.all([
            this.registerTransformer(new _babel.BabelTransformer()),
            this.registerTransformer(new _css.CSSTransformer()),
            this.registerTransformer(new _style.StyleTransformer()), 
        ]);
    }
    mapTransformers(module) {
        if (/^(?!\/node_modules\/).*\.(((m|c)?jsx?)|tsx)$/.test(module.filepath)) return [
            [
                'babel-transformer',
                {
                    presets: [
                        'solid'
                    ],
                    plugins: [
                        'solid-refresh/babel'
                    ]
                }, 
            ], 
        ];
        if (/\.(m|c)?(t|j)sx?$/.test(module.filepath) && !module.filepath.endsWith('.d.ts')) return [
            [
                'babel-transformer',
                {}
            ]
        ];
        if (/\.css$/.test(module.filepath)) return [
            [
                'css-transformer',
                {}
            ],
            [
                'style-transformer',
                {}
            ], 
        ];
        throw new Error(`No transformer for ${module.filepath}`);
    }
    augmentDependencies(dependencies) {
        if (!dependencies['solid-refresh']) dependencies['solid-refresh'] = '^0.4.0';
        dependencies['core-js'] = '3.22.7';
        return dependencies;
    }
}

},{"../../transforms/babel":"ePd0S","../../transforms/css":"hJ3Y5","../../transforms/style":"SqnZn","../Preset":"9Ohnw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hNgW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crashWithFrames", ()=>crashWithFrames
);
parcelHelpers.export(exports, "listenToRuntimeErrors", ()=>listenToRuntimeErrors
);
var _logger = require("../utils/logger");
var _getStackFrames = require("./get-stack-frames");
var _proxyConsole = require("./proxy-console");
var _stackTraceLimit = require("./stack-trace-limit");
var _unhandledError = require("./unhandled-error");
var _unhandledRejection = require("./unhandled-rejection");
var _warnings = require("./warnings");
const CONTEXT_SIZE = 3;
const crashWithFrames = (bundler, crash)=>{
    return (error, unhandledRejection = false)=>{
        _getStackFrames.getStackFrames(bundler, error, CONTEXT_SIZE).then((stackFrames)=>{
            crash({
                error,
                unhandledRejection,
                contextSize: CONTEXT_SIZE,
                stackFrames: stackFrames ?? []
            });
        }).catch((e)=>{
            _logger.error('Could not get the stack frames of error:', e);
        });
    };
};
function listenToRuntimeErrors(bundler, crash, filename = '/bundle.js') {
    const crashWithFramesRunTime = crashWithFrames(bundler, crash);
    const unregisterError = _unhandledError.registerUnhandledError(window, (error)=>crashWithFramesRunTime(error, false)
    );
    const unregisterUnhandledRejection = _unhandledRejection.registerUnhandledRejection(window, (error)=>crashWithFramesRunTime(error, true)
    );
    _stackTraceLimit.registerStackTraceLimit();
    const unregisterReactStack = _proxyConsole.registerReactStack();
    _proxyConsole.permanentRegisterConsole('error', (warning, stack)=>{
        const data = _warnings.warningMessage(warning, stack);
        crashWithFramesRunTime({
            message: data.message,
            stack: data.stack,
            // @ts-ignore
            __unmap_source: filename
        }, false);
    });
    return ()=>{
        unregisterUnhandledRejection();
        unregisterError();
        unregisterReactStack();
    };
}

},{"../utils/logger":"4rlpq","./get-stack-frames":"GmTPD","./proxy-console":"gIRBM","./stack-trace-limit":"Dgtku","./unhandled-error":"98sKZ","./unhandled-rejection":"5wAPD","./warnings":"enW4D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GmTPD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStackFrames", ()=>getStackFrames
);
var _mapper = require("./mapper");
var _parser = require("./parser");
var _unmapper = require("./unmapper");
async function getStackFrames(bundler, error, contextSize = 3) {
    const parsedFrames = _parser.parse(error);
    let enhancedFrames;
    // @ts-ignore
    if (error.__unmap_source) enhancedFrames = await _unmapper.unmap(// @ts-ignore
    error.__unmap_source, parsedFrames, contextSize);
    else enhancedFrames = await _mapper.map(bundler, parsedFrames, contextSize);
    // if (
    //   enhancedFrames
    //     .map((f) => {
    //       return f._originalFileName;
    //     })
    //     .filter((f) => {
    //       return f != null && f.indexOf('node_modules') === -1;
    //     }).length === 0
    // ) {
    //   return null;
    // }
    return enhancedFrames.filter(({ functionName  })=>{
        return functionName == null || functionName.indexOf('__stack_frame_overlay_proxy_console__') === -1;
    });
}

},{"./mapper":"5ONnq","./parser":"l4rdv","./unmapper":"c8guo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ONnq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // @ts-ignore
var _settlePromise = require("settle-promise");
var _getLinesAround = require("./get-lines-around");
var _getSourceMap = require("./get-source-map");
var _stackFrame = require("./stack-frame");
var _stackFrameDefault = parcelHelpers.interopDefault(_stackFrame);
/**
 * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
 * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function map(bundler, frames, contextLines = 3) {
    const cache = {};
    const fileNames = new Set();
    frames.forEach((frame)=>{
        const { fileName  } = frame;
        if (fileName == null) return;
        fileNames.add(fileName);
    });
    await _settlePromise.settle(Array.from(fileNames).map(async (fileName)=>{
        if (!fileName.startsWith('webpack')) {
            const parsedUrl = new URL(fileName, location.origin);
            const resolvedFilepath = await bundler.resolveAsync(parsedUrl.pathname, '/index.js');
            const foundModule = bundler.getModule(resolvedFilepath);
            if (foundModule) {
                const fileSource = foundModule.compiled || foundModule.source;
                if (fileSource) {
                    const map1 = await _getSourceMap.getSourceMap(fileName, fileSource).catch(()=>null
                    );
                    cache[fileName] = {
                        filepath: resolvedFilepath,
                        fileSource,
                        map: map1
                    };
                }
            }
        }
    }));
    return frames.map((frame)=>{
        const { functionName , fileName , lineNumber , columnNumber  } = frame;
        // Unknown file, returning original frame
        if (!fileName) return frame;
        // Try to get file source info from cache
        const { map: map2 , fileSource , filepath  } = cache[fileName] || {};
        // File not known to sandpack, returning original frame
        if (!filepath || lineNumber == null || columnNumber == null || filepath.includes('node_modules')) return frame;
        // There is no map we assume the positions are correct
        if (map2 == null) return new _stackFrameDefault.default(functionName, fileName, lineNumber, columnNumber, _getLinesAround.getLinesAround(lineNumber, contextLines, fileSource), functionName, filepath, lineNumber, columnNumber, _getLinesAround.getLinesAround(lineNumber, contextLines, fileSource));
        // There is a sourcemap so we map to the original position
        const { source , line , column  } = map2.getOriginalPosition(lineNumber, columnNumber);
        const originalSource = source == null ? [] : map2.getSource(source);
        return new _stackFrameDefault.default(functionName, fileName, lineNumber, columnNumber, _getLinesAround.getLinesAround(lineNumber, contextLines, fileSource), functionName, source, line, column, _getLinesAround.getLinesAround(line, contextLines, originalSource));
    });
}
exports.default = map;

},{"settle-promise":"jPdy5","./get-lines-around":"dIlgM","./get-source-map":"hXa3m","./stack-frame":"aHTJe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPdy5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function settle(val) {
    if (!Array.isArray(val)) val = [
        val
    ];
    return Promise.all(val.map(function(p) {
        return p.then(function(value) {
            return {
                isFulfilled: true,
                isRejected: false,
                value: value
            };
        }).catch(function(reason) {
            return {
                isFulfilled: false,
                isRejected: true,
                reason: reason
            };
        });
    }));
}
exports.settle = settle;
exports.default = settle;

},{}],"dIlgM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLinesAround", ()=>getLinesAround
);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ var _stackFrame = require("./stack-frame");
/**
 *
 * @param {number} line The line number to provide context around.
 * @param {number} count The number of lines you'd like for context.
 * @param {string[] | string} lines The source code.
 */ function getLinesAround(line, count, lines) {
    if (typeof lines === 'string') lines = lines.split('\n');
    const result = [];
    for(let index = Math.max(0, line - 1 - count); index <= Math.min(lines.length - 1, line - 1 + count); ++index)result.push(new _stackFrame.ScriptLine(index + 1, lines[index], index === line - 1));
    return result;
}
exports.default = getLinesAround;

},{"./stack-frame":"aHTJe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHTJe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StackFrame", ()=>StackFrame
);
parcelHelpers.export(exports, "ScriptLine", ()=>ScriptLine
);
// Based on https://github.com/facebook/create-react-app/tree/main/packages/react-error-overlay
/** A container holding a script line. */ class ScriptLine {
    constructor(lineNumber, content, highlight = false){
        this.lineNumber = lineNumber;
        this.content = content;
        this.highlight = highlight;
    }
}
/**
 * A representation of a stack frame.
 */ class StackFrame {
    constructor(functionName = null, fileName = null, lineNumber = null, columnNumber = null, scriptCode = null, sourceFunctionName = null, sourceFileName = null, sourceLineNumber = null, sourceColumnNumber = null, sourceScriptCode = null){
        this.functionName = functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this._originalFunctionName = sourceFunctionName;
        this._originalFileName = sourceFileName;
        this._originalLineNumber = sourceLineNumber;
        this._originalColumnNumber = sourceColumnNumber;
        this._scriptCode = scriptCode;
        this._originalScriptCode = sourceScriptCode;
    }
    /**
   * Returns the name of this function.
   */ getFunctionName() {
        return this.functionName;
    }
    /**
   * Returns the source of the frame.
   * This contains the file name, line number, and column number when available.
   */ getSource() {
        let str = '';
        if (this.fileName != null) str += this.fileName + ':';
        if (this.lineNumber != null) str += this.lineNumber + ':';
        if (this.columnNumber != null) str += this.columnNumber + ':';
        return str.slice(0, -1);
    }
    /**
   * Returns a pretty version of this stack frame.
   */ toString() {
        const f = this.getFunctionName();
        if (f == null) return this.getSource();
        return `${f} (${this.getSource()})`;
    }
}
exports.default = StackFrame;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXa3m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A wrapped instance of a <code>{@link https://github.com/mozilla/source-map SourceMapConsumer}</code>.
 *
 * This exposes methods which will be indifferent to changes made in <code>{@link https://github.com/mozilla/source-map source-map}</code>.
 */ parcelHelpers.export(exports, "SourceMap", ()=>SourceMap
);
parcelHelpers.export(exports, "extractSourceMapUrl", ()=>extractSourceMapUrl
);
parcelHelpers.export(exports, "getSourceMap", ()=>getSourceMap
);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ var _sourceMap = require("source-map");
class SourceMap {
    constructor(sourceMap){
        this.__source_map = sourceMap;
    }
    /**
   * Returns the original code position for a generated code position.
   * @param {number} line The line of the generated code position.
   * @param {number} column The column of the generated code position.
   */ getOriginalPosition(line, column) {
        const { line: l , column: c , source: s ,  } = this.__source_map.originalPositionFor({
            line,
            column
        });
        return {
            line: l,
            column: c,
            source: s
        };
    }
    /**
   * Returns the generated code position for an original position.
   * @param {string} source The source file of the original code position.
   * @param {number} line The line of the original code position.
   * @param {number} column The column of the original code position.
   */ getGeneratedPosition(source, line, column) {
        const { line: l , column: c  } = this.__source_map.generatedPositionFor({
            source,
            line,
            column
        });
        return {
            line: l,
            column: c
        };
    }
    /**
   * Returns the code for a given source file name.
   * @param {string} sourceName The name of the source file.
   */ getSource(sourceName) {
        return this.__source_map.sourceContentFor(sourceName);
    }
    getSources() {
        // @ts-ignore
        return this.__source_map.sources;
    }
}
function extractSourceMapUrl(fileUri, fileContents) {
    const regex = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm;
    let match = null;
    for(;;){
        let next = regex.exec(fileContents);
        if (next == null) break;
        match = next;
    }
    if (!(match && match[1])) return Promise.reject(`Cannot find a source map directive for ${fileUri}.`);
    return Promise.resolve(match[1].toString());
}
/**
 * Returns an instance of <code>{@link SourceMap}</code> for a given fileUri and fileContents.
 * @param {string} fileUri The URI of the source file.
 * @param {string} fileContents The contents of the source file.
 */ async function getSourceMap(fileUri, fileContents) {
    let sm = await extractSourceMapUrl(fileUri, fileContents);
    if (sm.indexOf('data:') === 0) {
        const base64 = /^data:application\/json;([\w=:"-]+;)*base64,/;
        const match2 = sm.match(base64);
        if (!match2) throw new Error('Sorry, non-base64 inline source-map encoding is not supported.');
        sm = sm.substring(match2[0].length);
        sm = window.atob(sm);
        sm = JSON.parse(sm);
        // @ts-ignore
        return new SourceMap(new _sourceMap.SourceMapConsumer(sm));
    } else {
        const index = fileUri.lastIndexOf('/');
        const url = fileUri.substring(0, index + 1) + sm;
        const obj = await fetch(url).then((res)=>res.json()
        );
        return new SourceMap(new _sourceMap.SourceMapConsumer(obj));
    }
}
exports.default = getSourceMap;

},{"source-map":"6klNI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6klNI":[function(require,module,exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require('./lib/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./lib/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./lib/source-node').SourceNode;

},{"./lib/source-map-generator":"eAEEU","./lib/source-map-consumer":"29bOB","./lib/source-node":"RKG6B"}],"eAEEU":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require('./base64-vlq');
var util = require('./util');
var ArraySet = require('./array-set').ArraySet;
var MappingList = require('./mapping-list').MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile1 = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile1 = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile1 = util.relative(sourceRoot, sourceFile1);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile1 && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = util.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = '';
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ';';
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ',';
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"./base64-vlq":"8tI6q","./util":"tCCrk","./array-set":"5GPwW","./mapping-list":"6uR3M"}],"8tI6q":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require('./base64');
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0)
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation)
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"./base64":"1nPpB"}],"1nPpB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"tCCrk":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ':';
    url += '//';
    if (aParsedUrl.auth) url += aParsedUrl.auth + '@';
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === '.') parts.splice(i, 1);
        else if (part === '..') up++;
        else if (up > 0) {
            if (part === '') {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join('/');
    if (path === '') path = isAbsolute ? '/' : '.';
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || '/';
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, '');
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + '/') !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !('__proto__' in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return '$' + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || '';
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') sourceRoot += '/';
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf('/');
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"5GPwW":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"./util":"tCCrk"}],"6uR3M":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"./util":"tCCrk"}],"29bOB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require('./util');
var binarySearch = require('./binary-search');
var ArraySet = require('./array-set').ArraySet;
var base64VLQ = require('./base64-vlq');
var quickSort = require('./quick-sort').quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ',') index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error('Found a source, but no line and column');
                if (segment.length === 3) throw new Error('Found a source and line, but no column');
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, 'name', null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, 'originalLine', null),
                column: util.getArg(mapping, 'originalColumn', null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error('Support for url field in sections not implemented.');
        var offset = util.getArg(s, 'offset');
        var offsetLine = util.getArg(offset, 'line');
        var offsetColumn = util.getArg(offset, 'column');
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error('Section offsets must be ordered and non-overlapping.');
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle1 = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle1, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section1 = this._sections[sectionIndex];
    if (!section1) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section1.consumer.originalPositionFor({
        line: needle1.generatedLine - (section1.generatedOffset.generatedLine - 1),
        column: needle1.generatedColumn - (section1.generatedOffset.generatedLine === needle1.generatedLine ? section1.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === 'number') this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"./util":"tCCrk","./binary-search":"eBCh2","./array-set":"5GPwW","./base64-vlq":"8tI6q","./quick-sort":"ffK7z"}],"eBCh2":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"ffK7z":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"RKG6B":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
var util = require('./util');
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || '';
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || '';
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
            node.add(code);
        } else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== '') aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === 'string') this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push(''.replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"./source-map-generator":"eAEEU","./util":"tCCrk"}],"l4rdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parseError
);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _stackFrame = require("./stack-frame");
var _stackFrameDefault = parcelHelpers.interopDefault(_stackFrame);
const regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
function extractLocation(token) {
    // @ts-ignore
    return(// @ts-ignore
    regexExtractLocation.exec(token).slice(1).map((v)=>{
        const p = Number(v);
        if (!isNaN(p)) return p;
        return v;
    }));
}
const regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
const regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
function parseStack(stack) {
    const frames = stack.filter((e)=>regexValidFrame_Chrome.test(e) || regexValidFrame_FireFox.test(e)
    ).map((e)=>{
        if (regexValidFrame_FireFox.test(e)) {
            // Strip eval, we don't care about it
            let isEval = false;
            if (/ > (eval|Function)/.test(e)) {
                e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ':$1');
                isEval = true;
            }
            const data = e.split(/[@]/g);
            // @ts-ignore
            const last = data.pop();
            return new _stackFrameDefault.default(data.join('@') || (isEval ? 'eval' : null), ...extractLocation(last));
        } else {
            // Strip eval, we don't care about it
            if (e.indexOf('(eval ') !== -1) e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            if (e.indexOf('(at ') !== -1) e = e.replace(/\(at /, '(');
            const data = e.trim().split(/\s+/g).slice(1);
            // @ts-ignore
            const last = data.pop();
            return new _stackFrameDefault.default(data.join(' ') || null, ...extractLocation(last));
        }
    });
    return frames;
}
/**
 * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
 * @alias parse
 */ function parseError(error) {
    if (error == null) throw new Error('You cannot pass a null object.');
    if (typeof error === 'string') return parseStack(error.split('\n'));
    if (Array.isArray(error)) return parseStack(error);
    if (typeof error.stack === 'string') return parseStack(error.stack.split('\n'));
    throw new Error('The error you provided does not contain a stack trace.');
}
exports.default = parseError;

},{"./stack-frame":"aHTJe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8guo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unmap", ()=>unmap
);
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ var _stackFrame = require("./stack-frame");
var _stackFrameDefault = parcelHelpers.interopDefault(_stackFrame);
var _getSourceMap = require("./get-source-map");
var _getLinesAround = require("./get-lines-around");
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
function count(search, string) {
    // Count starts at -1 becuse a do-while loop always runs at least once
    let count1 = -1, index = -1;
    do {
        // First call or the while case evaluated true, meaning we have to make
        // count 0 or we found a character
        ++count1;
        // Find the index of our search string, starting after the previous index
        index = string.indexOf(search, index + 1);
    }while (index !== -1)
    return count1;
}
/**
 * Turns a set of mapped <code>StackFrame</code>s back into their generated code position and enhances them with code.
 * @param {string} fileUri The URI of the <code>bundle.js</code> file.
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which are already mapped and missing their generated positions.
 * @param {number} [fileContents=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function unmap(_fileUri, frames, contextLines = 3) {
    let fileContents = typeof _fileUri === 'object' ? _fileUri.contents : null;
    let fileUri = typeof _fileUri === 'object' ? _fileUri.uri : _fileUri;
    if (fileContents == null) fileContents = await fetch(fileUri).then((res)=>res.text()
    );
    const map = await _getSourceMap.getSourceMap(fileUri, fileContents);
    return frames.map((frame)=>{
        const { functionName , lineNumber , columnNumber , _originalLineNumber ,  } = frame;
        if (_originalLineNumber != null) return frame;
        let { fileName  } = frame;
        if (fileName) fileName = _pathDefault.default.normalize(fileName);
        if (fileName == null) return frame;
        const fN = fileName;
        const source = map.getSources().map((s)=>s.replace(/[\\]+/g, '/')
        ).filter((p)=>{
            p = _pathDefault.default.normalize(p);
            const i = p.lastIndexOf(fN);
            return i !== -1 && i === p.length - fN.length;
        }).map((p)=>({
                token: p,
                seps: count(_pathDefault.default.sep, _pathDefault.default.normalize(p)),
                penalties: count('node_modules', p) + count('~', p)
            })
        ).sort((a, b)=>{
            const s = Math.sign(a.seps - b.seps);
            if (s !== 0) return s;
            return Math.sign(a.penalties - b.penalties);
        });
        if (source.length < 1 || lineNumber == null) return new _stackFrameDefault.default(null, null, null, null, null, functionName, fN, lineNumber, columnNumber, null);
        const sourceT = source[0].token;
        const { line , column  } = map.getGeneratedPosition(sourceT, lineNumber, // @ts-ignore
        columnNumber);
        const originalSource = map.getSource(sourceT);
        return new _stackFrameDefault.default(functionName, fileUri, line, column || null, _getLinesAround.getLinesAround(line, contextLines, fileContents || []), functionName, fN, lineNumber, columnNumber, _getLinesAround.getLinesAround(lineNumber, contextLines, originalSource));
    });
}
exports.default = unmap;

},{"./stack-frame":"aHTJe","./get-source-map":"hXa3m","./get-lines-around":"dIlgM","path":"loE3o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIRBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// This is a stripped down barebones version of this proposal:
// https://gist.github.com/sebmarkbage/bdefa100f19345229d526d0fdd22830f
// We're implementing just enough to get the invalid element type warnings
// to display the component stack in React 15.6+:
// https://github.com/facebook/react/pull/9679
// / TODO: a more comprehensive implementation.
parcelHelpers.export(exports, "registerReactStack", ()=>registerReactStack
);
parcelHelpers.export(exports, "permanentRegisterConsole", ()=>permanentRegisterConsole
);
const reactFrameStack = [];
function registerReactStack() {
    if (typeof console !== 'undefined') {
        // @ts-ignore
        console.reactStack = (frames)=>reactFrameStack.push(frames)
        ;
        // @ts-ignore
        console.reactStackEnd = (frames)=>reactFrameStack.pop()
        ;
        return ()=>{
            // @ts-ignore
            console.reactStack = undefined;
            // @ts-ignore
            console.reactStackEnd = undefined;
        };
    }
    return ()=>{};
}
function permanentRegisterConsole(type, callback) {
    if (typeof console !== 'undefined') {
        // @ts-ignore
        const orig = console[type];
        if (typeof orig === 'function') // @ts-ignore
        console[type] = function __stack_frame_overlay_proxy_console__() {
            try {
                const message = arguments[0];
                if (typeof message === 'string' && reactFrameStack.length > 0) callback(message, reactFrameStack[reactFrameStack.length - 1]);
            } catch (err) {
                // Warnings must never crash. Rethrow with a clean stack.
                setTimeout(function() {
                    throw err;
                });
            }
            return orig.apply(this, arguments);
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Dgtku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerStackTraceLimit", ()=>registerStackTraceLimit
);
// Based on https://github.com/facebook/create-react-app/tree/main/packages/react-error-overlay
const MAX_STACK_LENGTH = 50;
function registerStackTraceLimit(limit = MAX_STACK_LENGTH) {
    try {
        Error.stackTraceLimit = limit;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98sKZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerUnhandledError", ()=>registerUnhandledError
);
function errorHandler(callback, evt) {
    if (!evt.error) return;
    const error = evt.error;
    if (error instanceof Error) callback(error);
    else // A non-error was thrown, we don't have a trace. :(
    // Look in your browser's devtools for more information
    callback(new Error(error));
}
function registerUnhandledError(target, callback) {
    const boundErrorHandler = errorHandler.bind(undefined, callback);
    target.addEventListener('error', boundErrorHandler);
    return ()=>{
        target.removeEventListener('error', boundErrorHandler);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wAPD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerUnhandledRejection", ()=>registerUnhandledRejection
);
function registerUnhandledRejection(target, callback) {
    const rejectionHandler = (err)=>{
        if (err == null || err.reason == null) return callback(new Error('Unknown'));
        const { reason  } = err;
        if (reason instanceof Error) return callback(reason);
        // A non-error was rejected, we don't have a trace :(
        // Look in your browser's devtools for more information
        return callback(new Error(reason));
    };
    target.addEventListener('unhandledrejection', rejectionHandler);
    return ()=>{
        target.removeEventListener('unhandledrejection', rejectionHandler);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enW4D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warningMessage", ()=>warningMessage
);
function stripInlineStacktrace(message) {
    return message.split('\n').filter((line)=>!line.match(/^\s*in/)
    ).join('\n'); // "  in Foo"
}
function warningMessage(warning, frames) {
    let message = stripInlineStacktrace(warning);
    // Reassemble the stack with full filenames provided by React
    let stack = '';
    let lastFilename;
    let lastLineNumber;
    for(let index = 0; index < frames.length; ++index){
        const { fileName , lineNumber  } = frames[index];
        if (fileName == null || lineNumber == null) continue;
        // TODO: instead, collapse them in the UI
        if (fileName === lastFilename && typeof lineNumber === 'number' && typeof lastLineNumber === 'number' && Math.abs(lineNumber - lastLineNumber) < 3) continue;
        lastFilename = fileName;
        lastLineNumber = lineNumber;
        let { name  } = frames[index];
        name = name || '(anonymous function)';
        stack += `in ${name} (at ${fileName}:${lineNumber})\n`;
    }
    return {
        message,
        stack
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbdOI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorMessage", ()=>errorMessage
);
const errorMessage = (error)=>{
    return {
        type: 'action',
        action: 'show-error',
        title: error.title,
        path: error.path,
        message: error.message,
        line: error.line,
        column: error.column,
        payload: {
            frames: []
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BNX5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hookConsole", ()=>hookConsole
);
parcelHelpers.export(exports, "handleEvaluate", ()=>handleEvaluate
);
var _hook = require("console-feed/lib/Hook");
var _hookDefault = parcelHelpers.interopDefault(_hook);
var _transform = require("console-feed/lib/Transform");
var _logger = require("../utils/logger");
function hookConsole(output) {
    _hookDefault.default(window.console, async (log)=>{
        output(log);
    });
}
function handleEvaluate(command) {
    let result = null;
    let error = false;
    try {
        // Attempt to wrap command in parentheses, fixing issues
        // where directly returning objects results in unexpected
        // behaviour.
        if (command && command.charAt(0) === '{') try {
            const wrapped = `(${command})`;
            // `new Function` is used to validate Javascript syntax
            // eslint-disable-next-line
            const validate = new Function(wrapped);
            command = wrapped;
        } catch (e) {
        // We shouldn't wrap the expression
        }
        result = (0, eval)(command); // eslint-disable-line no-eval
    } catch (e) {
        result = e;
        error = true;
    }
    try {
        return {
            error,
            result: _transform.Encode(result)
        };
    } catch (e1) {
        _logger.error(e1);
    }
}

},{"console-feed/lib/Hook":"kMJkv","console-feed/lib/Transform":"7uRVM","../utils/logger":"4rlpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kMJkv":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
var Methods_1 = __importDefault(require("../definitions/Methods"));
var parse_1 = __importDefault(require("./parse"));
var Transform_1 = require("../Transform");
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */ function Hook(console, callback, encode) {
    if (encode === void 0) encode = true;
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty99/console-feed'
        }
    };
    var _loop_1 = function(method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function() {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function() {
                var parsed = parse_1["default"](method, args);
                if (parsed) {
                    var encoded = parsed;
                    if (encode) encoded = Transform_1.Encode(parsed);
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for(var _i = 0, Methods_2 = Methods_1["default"]; _i < Methods_2.length; _i++){
        var method1 = Methods_2[_i];
        _loop_1(method1);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
exports["default"] = Hook;

},{"../definitions/Methods":"kWPVx","./parse":"fhIlQ","../Transform":"7uRVM"}],"kWPVx":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var methods = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'table',
    'clear',
    'time',
    'timeEnd',
    'count',
    'assert',
    'command',
    'result', 
];
exports["default"] = methods;

},{}],"fhIlQ":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = this && this.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
var GUID_1 = __importDefault(require("./GUID"));
var Timing = __importStar(require("./methods/timing"));
var Count = __importStar(require("./methods/count"));
var Assert = __importStar(require("./methods/assert"));
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */ function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || GUID_1["default"]();
    // Parse the methods
    switch(method){
        case 'clear':
            return {
                method: method,
                id: id
            };
        case 'count':
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label) return false;
            return __assign(__assign({}, Count.increment(label)), {
                id: id
            });
        case 'time':
        case 'timeEnd':
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label) return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), {
                id: id
            });
        case 'assert':
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArrays([
                    data[0]
                ], data.slice(1)));
                if (assertion) return __assign(__assign({}, assertion), {
                    id: id
                });
            }
            return false;
        case 'error':
            var errors = data.map(function(error) {
                try {
                    return error.stack || error;
                } catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        default:
            return {
                method: method,
                id: id,
                data: data
            };
    }
}
exports["default"] = Parse;

},{"./GUID":"lS2Kt","./methods/timing":"5PWWS","./methods/count":"bWIQM","./methods/assert":"jLPbx"}],"lS2Kt":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
function guidGenerator() {
    var S4 = function() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + Date.now();
}
exports["default"] = guidGenerator;

},{}],"5PWWS":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
exports.stop = exports.start = void 0;
var state_1 = require("../../store/state");
var dispatch_1 = __importDefault(require("../../store/dispatch"));
var actions_1 = require("../../store/actions");
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state === null || state_1.state === void 0 ? void 0 : state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [
                label + ": " + time + "ms"
            ]
        };
    }
    return {
        method: 'warn',
        data: [
            "Timer '" + label + "' does not exist"
        ]
    };
}
exports.stop = stop;

},{"../../store/state":"5LahF","../../store/dispatch":"3bLma","../../store/actions":"27OiU"}],"5LahF":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.update = exports.state = void 0;
function update(newState) {
    exports.state = newState;
}
exports.update = update;

},{}],"3bLma":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
var reducer_1 = __importDefault(require("./reducer"));
var state_1 = require("./state");
function dispatch(action) {
    state_1.update(reducer_1["default"](state_1.state, action));
}
exports["default"] = dispatch;

},{"./reducer":"6kWRv","./state":"5LahF"}],"6kWRv":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
    timings: {},
    count: {}
};
var now = function() {
    return typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
};
exports["default"] = function(state, action) {
    var _a, _b, _c;
    if (state === void 0) state = exports.initialState;
    switch(action.type){
        case 'COUNT':
            var times = state.count[action.name] || 0;
            return __assign(__assign({}, state), {
                count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a))
            });
        case 'TIME_START':
            return __assign(__assign({}, state), {
                timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
                    start: now()
                }, _b))
            });
        case 'TIME_END':
            var timing = state.timings[action.name];
            var end = now();
            var start = timing.start;
            var time = end - start;
            return __assign(__assign({}, state), {
                timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), {
                    end: end,
                    time: time
                }), _c))
            });
        default:
            return state;
    }
};

},{}],"27OiU":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.timeEnd = exports.timeStart = exports.count = void 0;
function count(name) {
    return {
        type: 'COUNT',
        name: name
    };
}
exports.count = count;
function timeStart(name) {
    return {
        type: 'TIME_START',
        name: name
    };
}
exports.timeStart = timeStart;
function timeEnd(name) {
    return {
        type: 'TIME_END',
        name: name
    };
}
exports.timeEnd = timeEnd;

},{}],"bWIQM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
exports.increment = void 0;
var state_1 = require("../../store/state");
var dispatch_1 = __importDefault(require("../../store/dispatch"));
var actions_1 = require("../../store/actions");
function increment(label) {
    dispatch_1["default"](actions_1.count(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: [
            label + ": " + times
        ]
    };
}
exports.increment = increment;

},{"../../store/state":"5LahF","../../store/dispatch":"3bLma","../../store/actions":"27OiU"}],"jLPbx":[function(require,module,exports) {
"use strict";
var __spreadArrays = this && this.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.test = void 0;
function test(expression) {
    var messages = [];
    for(var _i = 1; _i < arguments.length; _i++)messages[_i - 1] = arguments[_i];
    if (expression) return false;
    // Default message
    if (messages.length === 0) messages.push('console.assert');
    return {
        method: 'error',
        data: __spreadArrays([
            "Assertion failed:"
        ], messages)
    };
}
exports.test = test;

},{}],"7uRVM":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
exports.__esModule = true;
exports.Decode = exports.Encode = void 0;
var arithmetic_1 = __importDefault(require("./arithmetic"));
var Function_1 = __importDefault(require("./Function"));
var HTML_1 = __importDefault(require("./HTML"));
var Map_1 = __importDefault(require("./Map"));
var replicator_1 = __importDefault(require("./replicator"));
var transforms = [
    HTML_1["default"],
    Function_1["default"],
    arithmetic_1["default"],
    Map_1["default"]
];
var replicator = new replicator_1["default"]();
replicator.addTransforms(transforms);
function Encode(data) {
    return JSON.parse(replicator.encode(data));
}
exports.Encode = Encode;
function Decode(data) {
    return replicator.decode(JSON.stringify(data));
}
exports.Decode = Decode;

},{"./arithmetic":"2MBu9","./Function":"g6soJ","./HTML":"1g5hB","./Map":"c786m","./replicator":"g8I39"}],"2MBu9":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var Arithmetic;
(function(Arithmetic1) {
    Arithmetic1[Arithmetic1["infinity"] = 0] = "infinity";
    Arithmetic1[Arithmetic1["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic1[Arithmetic1["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
function isMinusZero(value) {
    return 1 / value === -Infinity;
}
exports["default"] = {
    type: 'Arithmetic',
    lookup: Number,
    shouldTransform: function(type, value) {
        return type === 'number' && (value === Infinity || value === -Infinity || isMinusZero(value));
    },
    toSerializable: function(value) {
        return value === Infinity ? Arithmetic.infinity : value === -Infinity ? Arithmetic.minusInfinity : Arithmetic.minusZero;
    },
    fromSerializable: function(data) {
        if (data === Arithmetic.infinity) return Infinity;
        if (data === Arithmetic.minusInfinity) return -Infinity;
        if (data === Arithmetic.minusZero) return -0;
        return data;
    }
};

},{}],"g6soJ":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
/**
 * Serialize a function into JSON
 */ exports["default"] = {
    type: 'Function',
    lookup: Function,
    shouldTransform: function(type, obj) {
        return typeof obj === 'function';
    },
    toSerializable: function(func) {
        var body = '';
        try {
            body = func.toString().substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
        } catch (e) {}
        return {
            name: func.name,
            body: body,
            proto: Object.getPrototypeOf(func).constructor.name
        };
    },
    fromSerializable: function(data) {
        try {
            var tempFunc = function() {};
            if (typeof data.name === 'string') Object.defineProperty(tempFunc, 'name', {
                value: data.name,
                writable: false
            });
            if (typeof data.body === 'string') Object.defineProperty(tempFunc, 'body', {
                value: data.body,
                writable: false
            });
            if (typeof data.proto === 'string') // @ts-ignore
            tempFunc.constructor = {
                name: data.proto
            };
            return tempFunc;
        } catch (e) {
            return data;
        }
    }
};

},{}],"1g5hB":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// Sandbox HTML elements
var sandbox;
function getSandbox() {
    return sandbox || (sandbox = document.implementation.createHTMLDocument('sandbox'));
}
function objectifyAttributes(element) {
    var data = {};
    for(var _i = 0, _a = element.attributes; _i < _a.length; _i++){
        var attribute = _a[_i];
        data[attribute.name] = attribute.value;
    }
    return data;
}
/**
 * Serialize a HTML element into JSON
 */ exports["default"] = {
    type: 'HTMLElement',
    shouldTransform: function(type, obj) {
        return obj && obj.children && typeof obj.innerHTML === 'string' && typeof obj.tagName === 'string';
    },
    toSerializable: function(element) {
        return {
            tagName: element.tagName.toLowerCase(),
            attributes: objectifyAttributes(element),
            innerHTML: element.innerHTML
        };
    },
    fromSerializable: function(data) {
        try {
            var element = getSandbox().createElement(data.tagName);
            element.innerHTML = data.innerHTML;
            for(var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++){
                var attribute = _a[_i];
                try {
                    element.setAttribute(attribute, data.attributes[attribute]);
                } catch (e) {}
            }
            return element;
        } catch (e) {
            return data;
        }
    }
};

},{}],"c786m":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * Serialize a Map into JSON
 */ exports["default"] = {
    type: 'Map',
    shouldTransform: function(type, obj) {
        return obj && obj.constructor && obj.constructor.name === 'Map';
    },
    toSerializable: function(map) {
        var body = {};
        map.forEach(function(value, key) {
            var k = typeof key == 'object' ? JSON.stringify(key) : key;
            body[k] = value;
        });
        return {
            name: 'Map',
            body: body,
            proto: Object.getPrototypeOf(map).constructor.name
        };
    },
    fromSerializable: function(data) {
        var body = data.body;
        var obj = __assign({}, body);
        if (typeof data.proto === 'string') // @ts-ignore
        obj.constructor = {
            name: data.proto
        };
        return obj;
    }
};

},{}],"g8I39":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// Const
var TRANSFORMED_TYPE_KEY = '@t';
var CIRCULAR_REF_KEY = '@r';
var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
var GLOBAL = function getGlobal() {
    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
    var savedEval = eval;
    return savedEval('this');
}();
var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
var MAP_SUPPORTED = typeof Map === 'function';
var SET_SUPPORTED = typeof Set === 'function';
var TYPED_ARRAY_CTORS = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array', 
];
// Saved proto functions
var arrSlice = Array.prototype.slice;
// Default serializer
var JSONSerializer = {
    serialize: function(val) {
        return JSON.stringify(val);
    },
    deserialize: function(val) {
        return JSON.parse(val);
    }
};
// EncodingTransformer
var EncodingTransformer = /** @class */ function() {
    function EncodingTransformer1(val, transforms) {
        this.references = val;
        this.transforms = transforms;
        this.transformsMap = this._makeTransformsMap();
        this.circularCandidates = [];
        this.circularCandidatesDescrs = [];
        this.circularRefCount = 0;
    }
    EncodingTransformer1._createRefMark = function(idx) {
        var obj = Object.create(null);
        obj[CIRCULAR_REF_KEY] = idx;
        return obj;
    };
    EncodingTransformer1.prototype._createCircularCandidate = function(val, parent, key) {
        this.circularCandidates.push(val);
        this.circularCandidatesDescrs.push({
            parent: parent,
            key: key,
            refIdx: -1
        });
    };
    EncodingTransformer1.prototype._applyTransform = function(val, parent, key, transform) {
        var result = Object.create(null);
        var serializableVal = transform.toSerializable(val);
        if (typeof serializableVal === 'object') this._createCircularCandidate(val, parent, key);
        result[TRANSFORMED_TYPE_KEY] = transform.type;
        result.data = this._handleValue(function() {
            return serializableVal;
        }, parent, key);
        return result;
    };
    EncodingTransformer1.prototype._handleArray = function(arr) {
        var result = [];
        var _loop_1 = function(i) {
            result[i] = this_1._handleValue(function() {
                return arr[i];
            }, result, i);
        };
        var this_1 = this;
        for(var i1 = 0; i1 < arr.length; i1++)_loop_1(i1);
        return result;
    };
    EncodingTransformer1.prototype._handlePlainObject = function(obj) {
        var _a, _b;
        var result = Object.create(null);
        var _loop_2 = function(key) {
            if (Reflect.has(obj, key)) {
                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
                result[resultKey] = this_2._handleValue(function() {
                    return obj[key];
                }, result, resultKey);
            }
        };
        var this_2 = this;
        for(var key1 in obj)_loop_2(key1);
        var name = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.__proto__) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
        if (name && name !== 'Object') result.constructor = {
            name: name
        };
        return result;
    };
    EncodingTransformer1.prototype._handleObject = function(obj, parent, key) {
        this._createCircularCandidate(obj, parent, key);
        return Array.isArray(obj) ? this._handleArray(obj) : this._handlePlainObject(obj);
    };
    EncodingTransformer1.prototype._ensureCircularReference = function(obj) {
        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
        if (circularCandidateIdx > -1) {
            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
            if (descr.refIdx === -1) descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
            return EncodingTransformer1._createRefMark(descr.refIdx);
        }
        return null;
    };
    EncodingTransformer1.prototype._handleValue = function(getVal, parent, key) {
        try {
            var val = getVal();
            var type = typeof val;
            var isObject = type === 'object' && val !== null;
            if (isObject) {
                var refMark = this._ensureCircularReference(val);
                if (refMark) return refMark;
            }
            var transform = this._findTransform(type, val);
            if (transform) return this._applyTransform(val, parent, key, transform);
            if (isObject) return this._handleObject(val, parent, key);
            return val;
        } catch (e) {
            try {
                return this._handleValue(function() {
                    return e instanceof Error ? e : new Error(e);
                }, parent, key);
            } catch (_a) {
                return null;
            }
        }
    };
    EncodingTransformer1.prototype._makeTransformsMap = function() {
        if (!MAP_SUPPORTED) return;
        var map = new Map();
        this.transforms.forEach(function(transform) {
            if (transform.lookup) map.set(transform.lookup, transform);
        });
        return map;
    };
    EncodingTransformer1.prototype._findTransform = function(type, val) {
        if (MAP_SUPPORTED) {
            if (val && val.constructor) {
                var transform = this.transformsMap.get(val.constructor);
                if (transform === null || transform === void 0 ? void 0 : transform.shouldTransform(type, val)) return transform;
            }
        }
        for(var _i = 0, _a = this.transforms; _i < _a.length; _i++){
            var transform = _a[_i];
            if (transform.shouldTransform(type, val)) return transform;
        }
    };
    EncodingTransformer1.prototype.transform = function() {
        var _this = this;
        var references = [
            this._handleValue(function() {
                return _this.references;
            }, null, null)
        ];
        for(var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++){
            var descr = _a[_i];
            if (descr.refIdx > 0) {
                references[descr.refIdx] = descr.parent[descr.key];
                descr.parent[descr.key] = EncodingTransformer1._createRefMark(descr.refIdx);
            }
        }
        return references;
    };
    return EncodingTransformer1;
}();
// DecodingTransform
var DecodingTransformer = /** @class */ function() {
    function DecodingTransformer1(references, transformsMap) {
        this.activeTransformsStack = [];
        this.visitedRefs = Object.create(null);
        this.references = references;
        this.transformMap = transformsMap;
    }
    DecodingTransformer1.prototype._handlePlainObject = function(obj) {
        var unescaped = Object.create(null);
        if ('constructor' in obj) {
            if (!obj.constructor || typeof obj.constructor.name !== 'string') obj.constructor = {
                name: 'Object'
            };
        }
        for(var key in obj)if (obj.hasOwnProperty(key)) {
            this._handleValue(obj[key], obj, key);
            if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
                // NOTE: use intermediate object to avoid unescaped and escaped keys interference
                // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
                unescaped[key.substring(1)] = obj[key];
                delete obj[key];
            }
        }
        for(var unsecapedKey in unescaped)obj[unsecapedKey] = unescaped[unsecapedKey];
    };
    DecodingTransformer1.prototype._handleTransformedObject = function(obj, parent, key) {
        var transformType = obj[TRANSFORMED_TYPE_KEY];
        var transform = this.transformMap[transformType];
        if (!transform) throw new Error("Can't find transform for \"" + transformType + "\" type.");
        this.activeTransformsStack.push(obj);
        this._handleValue(obj.data, obj, 'data');
        this.activeTransformsStack.pop();
        parent[key] = transform.fromSerializable(obj.data);
    };
    DecodingTransformer1.prototype._handleCircularSelfRefDuringTransform = function(refIdx, parent, key) {
        // NOTE: we've hit a hard case: object reference itself during transformation.
        // We can't dereference it since we don't have resulting object yet. And we'll
        // not be able to restore reference lately because we will need to traverse
        // transformed object again and reference might be unreachable or new object contain
        // new circular references. As a workaround we create getter, so once transformation
        // complete, dereferenced property will point to correct transformed object.
        var references = this.references;
        Object.defineProperty(parent, key, {
            // @ts-ignore
            val: void 0,
            configurable: true,
            enumerable: true,
            get: function() {
                if (this.val === void 0) this.val = references[refIdx];
                return this.val;
            },
            set: function(value) {
                this.val = value;
            }
        });
    };
    DecodingTransformer1.prototype._handleCircularRef = function(refIdx, parent, key) {
        if (this.activeTransformsStack.includes(this.references[refIdx])) this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
        else {
            if (!this.visitedRefs[refIdx]) {
                this.visitedRefs[refIdx] = true;
                this._handleValue(this.references[refIdx], this.references, refIdx);
            }
            parent[key] = this.references[refIdx];
        }
    };
    DecodingTransformer1.prototype._handleValue = function(val, parent, key) {
        if (typeof val !== 'object' || val === null) return;
        var refIdx = val[CIRCULAR_REF_KEY];
        if (refIdx !== void 0) this._handleCircularRef(refIdx, parent, key);
        else if (val[TRANSFORMED_TYPE_KEY]) this._handleTransformedObject(val, parent, key);
        else if (Array.isArray(val)) for(var i = 0; i < val.length; i++)this._handleValue(val[i], val, i);
        else this._handlePlainObject(val);
    };
    DecodingTransformer1.prototype.transform = function() {
        this.visitedRefs[0] = true;
        this._handleValue(this.references[0], this.references, 0);
        return this.references[0];
    };
    return DecodingTransformer1;
}();
// Transforms
var builtInTransforms = [
    {
        type: '[[NaN]]',
        shouldTransform: function(type, val) {
            return type === 'number' && isNaN(val);
        },
        toSerializable: function() {
            return '';
        },
        fromSerializable: function() {
            return NaN;
        }
    },
    {
        type: '[[undefined]]',
        shouldTransform: function(type) {
            return type === 'undefined';
        },
        toSerializable: function() {
            return '';
        },
        fromSerializable: function() {
            return void 0;
        }
    },
    {
        type: '[[Date]]',
        lookup: Date,
        shouldTransform: function(type, val) {
            return val instanceof Date;
        },
        toSerializable: function(date) {
            return date.getTime();
        },
        fromSerializable: function(val) {
            var date = new Date();
            date.setTime(val);
            return date;
        }
    },
    {
        type: '[[RegExp]]',
        lookup: RegExp,
        shouldTransform: function(type, val) {
            return val instanceof RegExp;
        },
        toSerializable: function(re) {
            var result = {
                src: re.source,
                flags: ''
            };
            if (re.global) result.flags += 'g';
            if (re.ignoreCase) result.flags += 'i';
            if (re.multiline) result.flags += 'm';
            return result;
        },
        fromSerializable: function(val) {
            return new RegExp(val.src, val.flags);
        }
    },
    {
        type: '[[Error]]',
        lookup: Error,
        shouldTransform: function(type, val) {
            return val instanceof Error;
        },
        toSerializable: function(err) {
            var _a, _b;
            if (!err.stack) (_b = (_a = Error).captureStackTrace) === null || _b === void 0 || _b.call(_a, err);
            return {
                name: err.name,
                message: err.message,
                stack: err.stack
            };
        },
        fromSerializable: function(val) {
            var Ctor = GLOBAL[val.name] || Error;
            var err = new Ctor(val.message);
            err.stack = val.stack;
            return err;
        }
    },
    {
        type: '[[ArrayBuffer]]',
        lookup: ARRAY_BUFFER_SUPPORTED && ArrayBuffer,
        shouldTransform: function(type, val) {
            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
        },
        toSerializable: function(buffer) {
            var view = new Int8Array(buffer);
            return arrSlice.call(view);
        },
        fromSerializable: function(val) {
            if (ARRAY_BUFFER_SUPPORTED) {
                var buffer = new ArrayBuffer(val.length);
                var view = new Int8Array(buffer);
                view.set(val);
                return buffer;
            }
            return val;
        }
    },
    {
        type: '[[TypedArray]]',
        shouldTransform: function(type, val) {
            if (ARRAY_BUFFER_SUPPORTED) return ArrayBuffer.isView(val) && !(val instanceof DataView);
            for(var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++){
                var ctorName = TYPED_ARRAY_CTORS_1[_i];
                if (typeof GLOBAL[ctorName] === 'function' && val instanceof GLOBAL[ctorName]) return true;
            }
            return false;
        },
        toSerializable: function(arr) {
            return {
                ctorName: arr.constructor.name,
                arr: arrSlice.call(arr)
            };
        },
        fromSerializable: function(val) {
            return typeof GLOBAL[val.ctorName] === 'function' ? new GLOBAL[val.ctorName](val.arr) : val.arr;
        }
    },
    {
        type: '[[Map]]',
        lookup: MAP_SUPPORTED && Map,
        shouldTransform: function(type, val) {
            return MAP_SUPPORTED && val instanceof Map;
        },
        toSerializable: function(map) {
            var flattenedKVArr = [];
            map.forEach(function(val, key) {
                flattenedKVArr.push(key);
                flattenedKVArr.push(val);
            });
            return flattenedKVArr;
        },
        fromSerializable: function(val) {
            if (MAP_SUPPORTED) {
                // NOTE: new Map(iterable) is not supported by all browsers
                var map = new Map();
                for(var i = 0; i < val.length; i += 2)map.set(val[i], val[i + 1]);
                return map;
            }
            var kvArr = [];
            // @ts-ignore
            for(var j = 0; j < val.length; j += 2)kvArr.push([
                val[i],
                val[i + 1]
            ]);
            return kvArr;
        }
    },
    {
        type: '[[Set]]',
        lookup: SET_SUPPORTED && Set,
        shouldTransform: function(type, val) {
            return SET_SUPPORTED && val instanceof Set;
        },
        toSerializable: function(set) {
            var arr = [];
            set.forEach(function(val) {
                arr.push(val);
            });
            return arr;
        },
        fromSerializable: function(val) {
            if (SET_SUPPORTED) {
                // NOTE: new Set(iterable) is not supported by all browsers
                var set = new Set();
                for(var i = 0; i < val.length; i++)set.add(val[i]);
                return set;
            }
            return val;
        }
    }, 
];
// Replicator
var Replicator = /** @class */ function() {
    function Replicator1(serializer) {
        this.transforms = [];
        this.transformsMap = Object.create(null);
        this.serializer = serializer || JSONSerializer;
        this.addTransforms(builtInTransforms);
    }
    Replicator1.prototype.addTransforms = function(transforms) {
        transforms = Array.isArray(transforms) ? transforms : [
            transforms
        ];
        for(var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++){
            var transform = transforms_1[_i];
            if (this.transformsMap[transform.type]) throw new Error("Transform with type \"" + transform.type + "\" was already added.");
            this.transforms.push(transform);
            this.transformsMap[transform.type] = transform;
        }
        return this;
    };
    Replicator1.prototype.removeTransforms = function(transforms) {
        transforms = Array.isArray(transforms) ? transforms : [
            transforms
        ];
        for(var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++){
            var transform = transforms_2[_i];
            var idx = this.transforms.indexOf(transform);
            if (idx > -1) this.transforms.splice(idx, 1);
            delete this.transformsMap[transform.type];
        }
        return this;
    };
    Replicator1.prototype.encode = function(val) {
        var transformer = new EncodingTransformer(val, this.transforms);
        var references = transformer.transform();
        return this.serializer.serialize(references);
    };
    Replicator1.prototype.decode = function(val) {
        var references = this.serializer.deserialize(val);
        var transformer = new DecodingTransformer(references, this.transformsMap);
        return transformer.transform();
    };
    return Replicator1;
}();
exports["default"] = Replicator;

},{}],"1zZsB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Integrations", ()=>Integrations
);
var _integrationError = require("../errors/IntegrationError");
const INTEGRATION_LIST = new Map([
    [
        'react-devtools-legacy',
        ()=>require("40233012549a82f9")
    ],
    [
        'react-devtools-latest',
        ()=>require("4414ddf781ca75a")
    ], 
]);
class Integrations {
    registry = INTEGRATION_LIST;
    constructor(messageBus){
        this.messageBus = messageBus;
    }
    async load(key) {
        if (this.registry.has(key)) try {
            const { default: integrationModule  } = await this.registry.get(key)?.();
            return integrationModule(this);
        } catch (err) {
            throw new _integrationError.IntegrationError(err instanceof Error ? err.message : err, key);
        }
        throw new _integrationError.IntegrationError(`The integration "${key}" was not found.`, key);
    }
}

},{"../errors/IntegrationError":"2boau","40233012549a82f9":"bw53P","4414ddf781ca75a":"lcdPj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2boau":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IntegrationError", ()=>IntegrationError
);
var _sandpackError = require("./SandpackError");
class IntegrationError extends _sandpackError.SandpackError {
    code = 'INTEGRATION_ERROR';
    constructor(message, name){
        super(message);
        this.name = name;
    }
}

},{"./SandpackError":"3HAYS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bw53P":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('7UhFu') + "react-devtools-legacy.90608b8e.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('86zTY')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"lcdPj":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require('./helpers/bundle-url').getBundleURL('7UhFu') + "react-devtools-latest.cf4f2bd2.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('aQXvy')
);

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"np9oB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A message bus to handle messaging with the parent
 * used when this code is ran inside the iframe
 * */ parcelHelpers.export(exports, "IFrameParentMessageBus", ()=>IFrameParentMessageBus
);
var _emitter = require("../utils/emitter");
class IFrameParentMessageBus {
    parentId = null;
    messageId = 0;
    messageEmitter = new _emitter.Emitter();
    onMessage = this.messageEmitter.event;
    constructor(){
        this._messageListener = this._messageListener.bind(this);
        window.addEventListener('message', this._messageListener);
    }
    _messageListener(evt) {
        const data = evt.data;
        if (data.type === 'register-frame') {
            this.parentId = data.id;
            return;
        }
        if (!data.codesandbox) return;
        this.messageEmitter.fire(data);
    }
    _postMessage(message) {
        window.parent.postMessage(message, '*');
    }
    sendMessage(type, data = {}) {
        this._postMessage({
            ...data,
            $id: this.parentId,
            type,
            codesandbox: true
        });
    }
    protocolRequest(protocolName, method, params) {
        const type = `protocol-${protocolName}`;
        const messageId = this.messageId++;
        return new Promise((resolve, reject)=>{
            const disposable = this.onMessage((msg)=>{
                if (msg.msgId === messageId && msg.type === type && !msg.method) {
                    disposable.dispose();
                    if (msg.error) reject(new Error(msg.error.message));
                    else resolve(msg.result);
                }
            });
            this.sendMessage(type, {
                msgId: messageId,
                method: method,
                params: params
            });
        });
    }
}

},{"../utils/emitter":"2Vblt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVnsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Debouncer", ()=>Debouncer
);
var _logger = require("../utils/logger");
class Debouncer {
    timeoutRef = null;
    isRunning = false;
    constructor(ms){
        this.debounceTimeMs = ms;
    }
    debounce(callback) {
        if (this.timeoutRef) clearTimeout(this.timeoutRef);
        this.timeoutRef = setTimeout(async ()=>{
            if (this.isRunning) return this.debounce(callback);
            this.isRunning = true;
            try {
                await callback();
            } catch (err) {
                _logger.error(err);
            }
            this.isRunning = false;
        }, this.debounceTimeMs);
    }
}

},{"../utils/logger":"4rlpq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11wQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDocumentHeight", ()=>getDocumentHeight
);
function getDocumentHeight() {
    if (typeof window === 'undefined') return 0;
    const { body  } = document;
    const html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","8wcER","h7u1C"], "h7u1C", "parcelRequire4ef6")

//# sourceMappingURL=index.b71e74eb.js.map
