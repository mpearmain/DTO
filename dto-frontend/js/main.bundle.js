"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/alight/alight.js
  var require_alight = __commonJS({
    "node_modules/alight/alight.js"(exports, module) {
      !function() {
        "use strict";
        function e() {
          function e2(e3, t3) {
            var n2, r2 = [], o2 = false, a2 = t3.cd, l2 = t3.callback;
            if (t3.filterConf.args.length) {
              var c2 = [];
              t3.filterConf.args.forEach(function(e4, t4) {
                var n3 = a2.watch(e4, function(e5) {
                  r2[t4 + 1] = e5, u2();
                });
                n3.$.isStatic || c2.push(n3);
              });
              var s2 = false, u2 = function() {
                s2 || (s2 = true, a2.watch("$onScanOnce", function() {
                  if (s2 = false, o2) {
                    var t4 = e3.apply(null, r2);
                    i.isPromise(t4) ? t4.then(function(e4) {
                      l2(e4), a2.scan();
                    }) : l2(t4);
                  }
                }));
              };
              c2.length && (n2 = function() {
                c2.forEach(function(e4) {
                  return e4.stop();
                });
              });
            } else
              var u2 = function() {
                var t4 = e3(r2[0]);
                i.isPromise(t4) ? t4.then(function(e4) {
                  l2(e4), a2.scan();
                }) : l2(t4);
              };
            var f2 = { onChange: function(e4) {
              o2 = true, r2[0] = e4, u2();
            }, onStop: n2, watchMode: t3.watchMode };
            return f2;
          }
          function t2(e3, t3, n2, i2) {
            var o2 = null, a2 = i2.oneTime;
            if (i2.isArray ? o2 = "array" : i2.deep && (o2 = "deep"), !n2) {
              var l2 = { el: i2.element, ea: i2.elementAttr };
              n2 = function(t4) {
                f(e3.scope, l2, t4);
              };
            }
            for (var c2 = r.utils.parsFilter(t3.filter), s2 = [], u2 = c2.result.length - 1; u2 >= 0; u2--) {
              var p2 = r.core.getFilter(c2.result[u2].name, e3), h2 = r.core.buildFilterNode(e3, c2.result[u2], p2, n2);
              h2.watchMode && (o2 = h2.watchMode), h2.onStop && s2.push(h2.onStop), n2 = h2.onChange;
            }
            return i2 = { oneTime: a2 }, "array" === o2 ? i2.isArray = true : "deep" === o2 && (i2.deep = true), s2.length && (i2.onStop = function() {
              s2.forEach(function(e4) {
                return e4();
              }), s2.length = 0;
            }), e3.watch(t3.expression, n2, i2);
          }
          function n(e3, t3, n2, r2) {
            r2.setValue(r2.attrArgument, t3);
          }
          var r = function(e3, t3) {
            return r.bootstrap(e3, t3);
          };
          r.version = "0.14.1", r.filters = {}, r.text = {}, r.core = {}, r.utils = {}, r.option = { globalController: false, removeAttribute: true, domOptimization: true, domOptimizationRemoveEmpty: true, fastBinding: true }, r.debug = { scan: 0, directive: false, watch: false, watchText: false, parser: false }, r.ctrl = r.controllers = {}, r.d = r.directives = { al: {}, bo: {}, $global: {} }, r.hooks = { directive: [], binding: [] }, r.priority = { al: { app: 2e3, checked: 20, "class": 30, css: 30, focused: 20, "if": 700, ifnot: 700, model: 25, radio: 25, repeat: 1e3, select: 20, stop: -10, value: 20, on: 10 }, $component: 5, $attribute: -5 };
          var i = r.f$ = {}, o = function(e3, t3) {
            var n2 = e3.indexOf(t3);
            n2 >= 0 ? e3.splice(n2, 1) : console.warn("trying to remove not exist item");
          };
          !function() {
            i.before = function(e3, t3) {
              var n2 = e3.parentNode;
              n2.insertBefore(t3, e3);
            }, i.after = function(e3, t3) {
              var n2 = e3.parentNode, r2 = e3.nextSibling;
              r2 ? n2.insertBefore(t3, r2) : n2.appendChild(t3);
            }, i.remove = function(e3) {
              var t3 = e3.parentNode;
              t3 && t3.removeChild(e3);
            }, i.on = function(e3, t3, n2) {
              e3.addEventListener(t3, n2, false);
            }, i.off = function(e3, t3, n2) {
              e3.removeEventListener(t3, n2, false);
            }, i.isFunction = function(e3) {
              return e3 && "[object Function]" === Object.prototype.toString.call(e3);
            }, i.isObject = function(e3) {
              return e3 && "[object Object]" === Object.prototype.toString.call(e3);
            }, i.isPromise = function(e3) {
              return e3 && window.Promise && e3 instanceof window.Promise;
            }, i.isElement = function(e3) {
              return e3 instanceof HTMLElement;
            }, i.addClass = function(e3, t3) {
              e3.classList ? e3.classList.add(t3) : e3.className += " " + t3;
            }, i.removeClass = function(e3, t3) {
              e3.classList ? e3.classList.remove(t3) : e3.className = e3.className.replace(new RegExp("(^| )" + t3.split(" ").join("|") + "( |$)", "gi"), " ");
            }, i.rawAjax = function(e3) {
              var t3 = new XMLHttpRequest();
              t3.open(e3.type || "GET", e3.url, true, e3.username, e3.password);
              for (var n2 in e3.headers)
                t3.setRequestHeader(n2, e3.headers[n2]);
              e3.success && (t3.onload = function() {
                t3.status >= 200 && t3.status < 400 ? e3.success(t3.responseText) : e3.error && e3.error();
              }), e3.error && (t3.onerror = e3.error), t3.send(e3.data || null);
            }, i.ajaxCache = {}, i.ajax = function(e3) {
              if (e3.username || e3.password || e3.headers || e3.data || !e3.cache)
                return i.rawAjax(e3);
              var t3 = e3.type || "GET", n2 = t3 + ":" + e3.url, r2 = i.ajaxCache[n2];
              return r2 || (i.ajaxCache[n2] = r2 = { callback: [] }), r2.result ? void (e3.success && e3.success(r2.result)) : (r2.callback.push(e3), void (r2.loading || (r2.loading = true, i.rawAjax({ type: t3, url: e3.url, success: function(e4) {
                r2.loading = false, r2.result = e4;
                for (var t4 = 0; t4 < r2.callback.length; t4++)
                  r2.callback[t4].success && r2.callback[t4].success(e4);
                r2.callback.length = 0;
              }, error: function() {
                r2.loading = false;
                for (var e4 = 0; e4 < r2.callback.length; e4++)
                  r2.callback[e4].error && r2.callback[e4].error();
                r2.callback.length = 0;
              } }))));
            }, function() {
              var e3 = '@charset "UTF-8";[al-cloak],[hidden],.al-hide{display:none !important;}', t3 = document.querySelectorAll("head")[0], n2 = document.createElement("style");
              n2.setAttribute("type", "text/css"), n2.styleSheet ? n2.styleSheet.cssText = e3 : n2.appendChild(document.createTextNode(e3)), t3.appendChild(n2);
            }();
          }(), i.ready = function() {
            function e3() {
              n2 = true, i.off(document, "DOMContentLoaded", e3);
              for (var r2 = 0; r2 < t3.length; r2++)
                t3[r2]();
              t3.length = 0;
            }
            var t3 = [], n2 = false;
            return i.on(document, "DOMContentLoaded", e3), function(e4) {
              n2 ? e4() : t3.push(e4);
            };
          }(), window.jQuery && (window.jQuery.fn.alight = function(e3) {
            var t3 = [];
            return this.each(function(e4, n2) {
              return t3.push(n2);
            }), t3.length ? r(t3, e3) : void 0;
          }), r.core.getFilter = function(e3, t3) {
            var n2 = t3.locals[e3];
            if (n2 && (i.isFunction(n2) || n2.init || n2.fn))
              return n2;
            if (n2 = r.filters[e3])
              return n2;
            throw "Filter not found: " + e3;
          }, r.core.buildFilterNode = function(t3, n2, r2, o2) {
            if (i.isFunction(r2))
              return e2(r2, { cd: t3, filterConf: n2, callback: o2 });
            if (r2.init)
              return r2.init.call(t3, t3.scope, n2.raw, { setValue: o2, conf: n2, changeDetector: t3 });
            if (i.isFunction(r2.fn))
              return e2(r2.fn, { cd: t3, filterConf: n2, callback: o2, watchMode: r2.watchMode });
            throw "Wrong filter: " + n2.name;
          };
          var a, l, c, s, u, f, p, h, d, m, v, g;
          r.ChangeDetector = function(e3) {
            var t3, n2;
            return n2 = new c(), t3 = new a(n2, e3 || {}), n2.topCD = t3, t3;
          }, c = function() {
            return this.watchers = { any: [], finishBinding: [], finishScan: [], finishScanOnce: [], onScanOnce: [] }, this.status = null, this.extraLoop = false, this.finishBinding_lock = false, this.lateScan = false, this.topCD = null, this;
          }, c.prototype.destroy = function() {
            return this.watchers.any.length = 0, this.watchers.finishBinding.length = 0, this.watchers.finishScan.length = 0, this.watchers.finishScanOnce.length = 0, this.watchers.onScanOnce.length = 0, this.topCD ? this.topCD.destroy() : void 0;
          }, a = function(e3, t3) {
            this.scope = t3, this.locals = t3, this.root = e3, this.watchList = [], this.destroy_callbacks = [], this.parent = null, this.children = [], this.rwatchers = { any: [], finishScan: [], elEvents: [] };
          }, a.prototype["new"] = function(e3, t3) {
            var n2, r2, i2;
            return t3 = t3 || {}, i2 = this, null == e3 && (e3 = i2.scope), r2 = new a(i2.root, e3), r2.parent = i2, e3 === i2.scope && (t3.locals ? (n2 = i2._ChildLocals, n2 || (i2._ChildLocals = n2 = function() {
              return this.$$root = e3, this;
            }, n2.prototype = i2.locals), r2.locals = new n2()) : r2.locals = i2.locals), i2.children.push(r2), r2;
          }, a.prototype.destroy = function() {
            var e3, t3, n2, r2, a2, l2, c2, s2, u2, f2, p2, h2, d2, m2, v2, g2, y2, b2, w2, x2, k2, D2, $2, C2, A2;
            for (e3 = this, C2 = e3.root, e3.scope = null, e3.parent && o(e3.parent.children, e3), b2 = e3.destroy_callbacks, l2 = 0, u2 = b2.length; u2 > l2; l2++)
              (r2 = b2[l2])();
            for (w2 = e3.children.slice(), c2 = 0, f2 = w2.length; f2 > c2; c2++)
              t3 = w2[c2], t3.destroy();
            for (e3.destroy_callbacks.length = 0, x2 = e3.watchList, s2 = 0, p2 = x2.length; p2 > s2; s2++)
              n2 = x2[s2], n2.onStop && n2.onStop();
            for (e3.watchList.length = 0, k2 = e3.rwatchers.any, v2 = 0, h2 = k2.length; h2 > v2; v2++)
              A2 = k2[v2], o(C2.watchers.any, A2);
            for (e3.rwatchers.any.length = 0, D2 = e3.rwatchers.finishScan, g2 = 0, d2 = D2.length; d2 > g2; g2++)
              A2 = D2[g2], o(C2.watchers.finishScan, A2);
            for (e3.rwatchers.finishScan.length = 0, $2 = this.rwatchers.elEvents, y2 = 0, m2 = $2.length; m2 > y2; y2++)
              a2 = $2[y2], i.off(a2[0], a2[1], a2[2]);
            this.rwatchers.elEvents.length = 0, C2.topCD === e3 && (C2.topCD = null, C2.destroy());
          }, s = function(e3) {
            return this.cb = e3;
          }, v = function(e3, t3, n2) {
            var r2, i2;
            return r2 = e3.root, i2 = new s(n2), e3.rwatchers[t3].push(i2), r2.watchers[t3].push(i2), { stop: function() {
              return o(e3.rwatchers[t3], i2), o(r2.watchers[t3], i2);
            } };
          }, a.prototype.on = function(e3, t3, n2) {
            return i.on(e3, t3, n2), this.rwatchers.elEvents.push([e3, t3, n2]);
          }, h = { $any: function(e3, t3) {
            return v(e3, "any", t3);
          }, $finishScan: function(e3, t3) {
            return v(e3, "finishScan", t3);
          }, $finishScanOnce: function(e3, t3) {
            e3.root.watchers.finishScanOnce.push(t3);
          }, $onScanOnce: function(e3, t3) {
            e3.root.watchers.onScanOnce.push(t3);
          }, $destroy: function(e3, t3) {
            e3.destroy_callbacks.push(t3);
          }, $finishBinding: function(e3, t3) {
            e3.root.watchers.finishBinding.push(t3);
          } }, g = function() {
          }, a.prototype.watch = function(e3, n2, a2) {
            var l2, c2, s2, u2, p2, d2, m2, v2, y2, b2, w2;
            if (p2 = h[e3])
              return p2(this, n2);
            if (a2 = a2 || {}, a2 === true && (a2 = { isArray: true }), a2.init && console.warn("watch.init is depricated"), l2 = this, b2 = l2.root, w2 = l2.scope, i.isFunction(e3) ? (u2 = e3, v2 = r.utils.getId(), d2 = true) : (d2 = false, u2 = null, e3 = e3.trim(), "::" === e3.slice(0, 2) && (e3 = e3.slice(2), a2.oneTime = true), v2 = e3, v2 = a2.deep ? "d#" + v2 : a2.isArray ? "a#" + v2 : "v#" + v2), r.debug.watch && console.log("$watch", e3), m2 = false, !d2)
              if (a2.watchText)
                u2 = a2.watchText.fn;
              else {
                if (c2 = r.utils.compile.expression(e3), c2.filter)
                  return t2(l2, c2, n2, a2);
                m2 = c2.isSimple && 0 === c2.simpleVariables.length, u2 = c2.fn;
              }
            return a2.deep && (a2.isArray = false), s2 = { isStatic: m2, isArray: Boolean(a2.isArray), extraLoop: !a2.readOnly, deep: a2.deep === true ? 10 : a2.deep, value: g, callback: n2, exp: u2, src: "" + e3, onStop: a2.onStop || null, el: a2.element || null, ea: a2.elementAttr || null }, m2 ? l2.watch("$onScanOnce", function() {
              return f(w2, s2, s2.exp(w2));
            }) : l2.watchList.push(s2), y2 = { $: s2, stop: function() {
              var t3, n3;
              if (a2.onStop)
                try {
                  a2.onStop();
                } catch (n4) {
                  t3 = n4, r.exceptionHandler(t3, "Error in onStop of watcher: " + e3, e3);
                }
              if (!s2.isStatic)
                return o(l2.watchList, s2);
            }, refresh: function() {
              var e4;
              return e4 = s2.exp(l2.locals), s2.value = e4 && s2.deep ? r.utils.clone(e4, s2.deep) : e4 && s2.isArray ? e4.slice() : e4;
            } }, a2.oneTime && (s2.callback = function(e4) {
              return void 0 !== e4 ? (y2.stop(), n2(e4)) : void 0;
            }), y2;
          }, a.prototype.watchGroup = function(e3, t3) {
            var n2, r2, o2, a2, l2, c2;
            if (n2 = this, !t3 && i.isFunction(e3) && (t3 = e3, e3 = null), c2 = false, r2 = function() {
              return c2 ? void 0 : (c2 = true, n2.watch("$onScanOnce", function() {
                return c2 = false, t3();
              }));
            }, e3)
              for (o2 = 0, l2 = e3.length; l2 > o2; o2++)
                a2 = e3[o2], n2.watch(a2, r2);
            return r2;
          }, p = function() {
            return window.performance ? function() {
              return Math.floor(performance.now());
            } : function() {
              return (/* @__PURE__ */ new Date()).getTime();
            };
          }(), d = function(e3, t3) {
            var n2, r2, i2, o2, a2, l2;
            if (null === e3 || null === t3)
              return true;
            if (o2 = typeof e3, a2 = typeof t3, o2 !== a2)
              return true;
            if ("object" === o2) {
              if (e3.length !== t3.length)
                return true;
              for (n2 = r2 = 0, i2 = e3.length; i2 > r2; n2 = ++r2)
                if (l2 = e3[n2], l2 !== t3[n2])
                  return true;
            }
            return false;
          }, f = function(e3, t3, n2) {
            t3.el ? t3.ea ? t3.el.setAttribute(t3.ea, n2) : t3.el.nodeValue = n2 : t3.callback.call(e3, n2);
          }, u = function(e3, t3, n2, i2) {
            var o2, a2;
            return o2 = { src: n2.src, scope: t3.scope, locals: t3.locals }, n2.el && (o2.element = n2.el), a2 = 1 === i2 ? "$scan, error in callback: " : "$scan, error in expression: ", r.exceptionHandler(e3, a2 + n2.src, o2);
          }, l = function() {
          }, m = function(e3, t3) {
            var n2, i2, o2, a2, c2, s2, f2, p2, h2, m2, v2, y2, b2, w2, x2, k2, D2, $2, C2, A2;
            if (D2 = e3.root, p2 = false, a2 = 0, $2 = 0, e3) {
              for (x2 = [], h2 = 0, o2 = e3; o2; ) {
                for (b2 = o2.locals, $2 += o2.watchList.length, k2 = o2.watchList.slice(), m2 = 0, y2 = k2.length; y2 > m2; m2++) {
                  A2 = k2[m2], v2 = A2.value;
                  try {
                    C2 = A2.exp(b2);
                  } catch (s3) {
                    c2 = s3, C2 = l;
                  }
                  if (v2 !== C2) {
                    if (w2 = false, A2.isArray ? (n2 = Array.isArray(v2), i2 = Array.isArray(C2), n2 === i2 ? n2 ? d(v2, C2) && (w2 = true, A2.value = C2.slice()) : (w2 = true, A2.value = C2) : (w2 = true, A2.value = i2 ? C2.slice() : C2)) : A2.deep ? r.utils.equal(v2, C2, A2.deep) || (w2 = true, A2.value = r.utils.clone(C2, A2.deep)) : (w2 = true, A2.value = C2), w2)
                      if (w2 = false, C2 === l)
                        u(c2, o2, A2);
                      else {
                        a2++;
                        try {
                          A2.el ? A2.ea ? null != C2 ? A2.el.setAttribute(A2.ea, C2) : A2.el.removeAttribute(A2.ea) : A2.el.nodeValue = C2 : (v2 === g && (v2 = void 0), "$scanNoChanges" !== A2.callback.call(o2.scope, C2, v2) && A2.extraLoop && (p2 = true));
                        } catch (f3) {
                          c2 = f3, u(c2, o2, A2, 1);
                        }
                      }
                    r.debug.scan > 1 && console.log("changed:", A2.src);
                  }
                }
                x2.push.apply(x2, o2.children), o2 = x2[h2++];
              }
              t3.total = $2, t3.changes = a2, t3.extraLoop = p2;
            }
          }, a.prototype.digest = function() {
            var e3, t3, n2, i2, o2, a2, l2, c2, s2, u2;
            for (c2 = this.root, o2 = 10, u2 = 0, r.debug.scan && (s2 = p()), l2 = { total: 0, changes: 0, extraLoop: false, src: "", scope: null, element: null }; o2; ) {
              if (o2--, c2.extraLoop = false, c2.watchers.onScanOnce.length)
                for (a2 = c2.watchers.onScanOnce.slice(), c2.watchers.onScanOnce.length = 0, n2 = 0, i2 = a2.length; i2 > n2; n2++)
                  e3 = a2[n2], e3.call(c2);
              if (m(this, l2), u2 += l2.changes, !l2.extraLoop && !c2.extraLoop && !c2.watchers.onScanOnce.length)
                break;
            }
            return r.debug.scan && (t3 = p() - s2, console.log("$scan: loops: (" + (10 - o2) + "), last-loop changes: " + l2.changes + ", watches: " + l2.total + " / " + t3 + "ms")), l2.mainLoop = o2, l2.totalChanges = u2, l2;
          }, a.prototype.scan = function(e3) {
            var t3, n2, o2, a2, l2, c2, s2, u2, f2, p2, h2, d2, m2;
            if (m2 = this.root, e3 = e3 || {}, !r.option.zone || e3.zone) {
              if (i.isFunction(e3) && (e3 = { callback: e3 }), e3.callback && m2.watchers.finishScanOnce.push(e3.callback), e3.late) {
                if (m2.lateScan)
                  return;
                return m2.lateScan = true, void r.nextTick(function() {
                  return m2.lateScan ? m2.topCD.scan() : void 0;
                });
              }
              if ("scaning" === m2.status)
                return void (m2.extraLoop = true);
              if (m2.lateScan = false, m2.status = "scaning", d2 = m2.topCD ? m2.topCD.digest() : {}, d2.totalChanges)
                for (p2 = m2.watchers.any, a2 = 0, s2 = p2.length; s2 > a2; a2++)
                  (n2 = p2[a2])();
              for (m2.status = null, h2 = m2.watchers.finishScan, l2 = 0, u2 = h2.length; u2 > l2; l2++)
                (t3 = h2[l2])();
              for (o2 = m2.watchers.finishScanOnce.slice(), m2.watchers.finishScanOnce.length = 0, c2 = 0, f2 = o2.length; f2 > c2; c2++)
                t3 = o2[c2], t3.call(m2);
              if (0 === d2.mainLoop)
                throw "Infinity loop detected";
              return d2;
            }
          }, r.core.ChangeDetector = a, a.prototype.compile = function(e3, t3) {
            return r.utils.compile.expression(e3, t3).fn;
          }, a.prototype.setValue = function(e3, t3) {
            var n2, i2, o2, a2, l2, c2, s2, u2, f2, p2, h2;
            n2 = this, a2 = n2.compile(e3 + " = $value", { input: ["$value"], no_return: true });
            try {
              return a2(n2.locals, t3);
            } catch (o3) {
              if (i2 = o3, f2 = "can't set variable: " + e3, r.debug.parser && console.warn(f2), ("" + i2).indexOf("TypeError") >= 0 && (h2 = e3.match(/^([\w\d\.]+)\.[\w\d]+$/), h2 && h2[1])) {
                for (u2 = n2.locals, p2 = h2[1].split("."), l2 = 0, s2 = p2.length; s2 > l2; l2++)
                  c2 = p2[l2], void 0 === u2[c2] && (u2[c2] = {}), u2 = u2[c2];
                try {
                  return void a2(n2.locals, t3);
                } catch (d2) {
                }
              }
              return r.exceptionHandler(i2, f2, { name: e3, value: t3 });
            }
          }, a.prototype.eval = function(e3) {
            var t3;
            return (t3 = this.compile(e3))(this.locals);
          }, a.prototype.getValue = function(e3) {
            return this.eval(e3);
          }, function() {
            var e3;
            return r.text.$base = function(e4) {
              var t3, n2, i2, o2, a2;
              if (o2 = e4.point, t3 = e4.cd, a2 = t3.scope, n2 = a2.$ns && a2.$ns.text ? a2.$ns.text[e4.name] : r.text[e4.name], !n2)
                throw "No directive alight.text." + e4.name;
              return i2 = { changeDetector: t3, setter: function(t4) {
                return e4.update ? (o2.value = null === t4 ? "" : "" + t4, e4.update()) : void 0;
              }, setterRaw: function(t4) {
                return e4.updateRaw ? (o2.value = null === t4 ? "" : "" + t4, e4.updateRaw()) : void 0;
              }, "finally": function(t4) {
                return e4["finally"] ? (o2.value = null === t4 ? "" : "" + t4, o2.type = "text", e4["finally"](), e4.update = null, e4["finally"] = null) : void 0;
              } }, n2.call(t3, i2.setter, e4.exp, a2, i2);
            }, e3 = function(e4, t3, n2) {
              var i2, o2, a2, l2, c2, s2, u2, p2, h2, d2, m2, v2, g2, y2, b2, w2, x2, k2, D2, $2, C2, A2, E2, B2, T2, _2, N2, S, O;
              if (n2 = n2 || {}, o2 = this, r.debug.watchText && console.log("$watchText", e4), B2 = r.utils.compile.buildSimpleText(e4, null))
                return void o2.watch(e4, t3, { watchText: B2, element: n2.element, elementAttr: n2.elementAttr });
              for (c2 = r.utils.parsText(e4), S = 0, i2 = true, C2 = false, u2 = p2 = s2 = function() {
              }, g2 = 0, w2 = c2.length; w2 > g2; g2++)
                if (l2 = c2[g2], "expression" === l2.type)
                  if (h2 = l2.list.join("|"), D2 = h2.match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/))
                    l2.isDir = true, $2 = D2[1], "#" === $2 ? (v2 = h2.indexOf(" "), 0 > v2 ? ($2 = h2.substring(1), h2 = "") : ($2 = h2.slice(1, v2), h2 = h2.slice(v2))) : h2 = h2.substring($2.length), r.text.$base({ name: $2, exp: h2, cd: o2, point: l2, update: function() {
                      return u2();
                    }, updateRaw: function() {
                      return p2();
                    }, "finally": function() {
                      return u2(), s2();
                    } }), C2 = true, "text" !== l2.type && (i2 = false);
                  else if (a2 = r.utils.compile.expression(h2, { string: true }), a2.filter)
                    S++, i2 = false, l2.watched = true, function(e5) {
                      return o2.watch(h2, function(t4) {
                        return null == t4 && (t4 = ""), e5.value = t4, u2();
                      });
                    }(l2);
                  else {
                    if (l2.fn = a2.fn, !a2.rawExpression)
                      throw "Error";
                    a2.isSimple && 0 === a2.simpleVariables.length ? (l2.type = "text", l2.value = l2.fn()) : (l2.re = a2.rawExpression, S++);
                  }
              if (i2) {
                if (!S) {
                  for (_2 = "", y2 = 0, x2 = c2.length; x2 > y2; y2++)
                    l2 = c2[y2], _2 += l2.value;
                  return void o2.watch("$onScanOnce", function() {
                    return f(o2.scope, { callback: t3, el: n2.element, ea: n2.elementAttr }, _2);
                  });
                }
                return B2 = C2 ? r.utils.compile.buildSimpleText(null, c2) : r.utils.compile.buildSimpleText(e4, c2), void o2.watch(e4, t3, { watchText: { fn: B2.fn }, element: n2.element, elementAttr: n2.elementAttr });
              }
              if (O = { callback: t3, el: n2.element, ea: n2.elementAttr }, c2.scope = o2.scope, m2 = r.utils.compile.buildText(e4, c2), p2 = function() {
                return f(o2.scope, O, m2());
              }, S) {
                for (N2 = null, E2 = "", u2 = function() {
                  E2 = m2();
                }, s2 = function() {
                  var e5, t4;
                  for (v2 = true, e5 = 0, t4 = c2.length; t4 > e5; e5++)
                    if (l2 = c2[e5], "expression" === l2.type) {
                      v2 = false;
                      break;
                    }
                  v2 && (o2.watch("$finishScanOnce", function() {
                    return N2.stop();
                  }), n2.onStatic && n2.onStatic());
                }, A2 = function() {
                  return E2;
                }, b2 = 0, k2 = c2.length; k2 > b2; b2++)
                  if (l2 = c2[b2], "expression" === l2.type) {
                    if (l2.isDir || l2.watched)
                      continue;
                    l2.watched = true, function(e5, t4) {
                      return o2.watch(t4, function(t5) {
                        return null == t5 && (t5 = ""), e5.value = t5, u2();
                      });
                    }(l2, l2.list.join(" | "));
                  }
                u2(), N2 = o2.watch(A2, t3, { element: n2.element, elementAttr: n2.elementAttr });
              } else
                T2 = false, d2 = function() {
                  return T2 = false, p2();
                }, (u2 = function() {
                  return T2 ? void 0 : (T2 = true, o2.watch("$onScanOnce", d2));
                })();
            }, a.prototype.watchText = e3;
          }();
          var y;
          y = { TR: 1, TD: 1, LI: 1 }, r.utils.optmizeElement = function(e3, t3) {
            var n2, o2, a2, l2, c2, s2, u2, f2, p2, h2, d2, m2, v2, g2, b2, w2, x2, k2, D2, $2;
            if (1 === e3.nodeType) {
              for (t3 = t3 || !r.option.domOptimizationRemoveEmpty, "PRE" === e3.nodeName && (t3 = true), l2 = e3.firstChild, !l2 || 3 !== l2.nodeType || l2.nodeValue.trim() || t3 || (i.remove(l2), l2 = e3.firstChild), w2 = false; l2; )
                g2 = l2.nextSibling, !w2 || 3 !== l2.nodeType || l2.nodeValue.trim() || t3 ? (w2 = 1 === l2.nodeType && y[l2.nodeName], r.utils.optmizeElement(l2, t3)) : i.remove(l2), l2 = g2;
              l2 = e3.lastChild, !l2 || 3 !== l2.nodeType || l2.nodeValue.trim() || t3 || i.remove(l2);
            } else if (3 === e3.nodeType) {
              if (D2 = e3.data, m2 = r.utils.pars_start_tag, s2 = D2.indexOf(m2), 0 > s2)
                return;
              if (D2.slice(s2 + m2.length).indexOf(m2) < 0)
                return;
              for (b2 = "t", n2 = { value: "" }, k2 = [n2], a2 = r.utils.parsText(D2), u2 = 0, p2 = a2.length; p2 > u2; u2++)
                o2 = a2[u2], "text" === o2.type ? n2.value += o2.value : (c2 = o2.list.join("|"), $2 = r.utils.pars_start_tag + c2 + r.utils.pars_finish_tag, d2 = c2.match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/), d2 ? ("t" === b2 || "d" === b2 ? n2.value += $2 : (n2 = { value: $2 }, k2.push(n2)), b2 = "d") : 1 === o2.list.length ? ("t" === b2 || "v" === b2 ? n2.value += $2 : (n2 = { value: $2 }, k2.push(n2)), b2 = "v") : "t" === b2 ? n2.value += $2 : (n2 = { value: $2 }, k2.push(n2)));
              if (k2.length < 2)
                return;
              for (l2 = e3, l2.data = k2[0].value, x2 = k2.slice(1), f2 = 0, h2 = x2.length; h2 > f2; f2++)
                o2 = x2[f2], v2 = document.createTextNode(o2.value), i.after(l2, v2), l2 = v2;
            }
          };
          var b, w, x, k, D, $, C, A;
          !function() {
            var e3;
            return r.hooks.attribute = e3 = [], e3.push({ code: "dataPrefix", fn: function() {
              "data-" === this.attrName.slice(0, 5) && (this.attrName = this.attrName.slice(5));
            } }), e3.push({ code: "colonNameSpace", fn: function() {
              var e4, t3;
              this.directive || this.name || (t3 = this.attrName.match(/^(\w+)[\-\:](.+)$/), t3 ? (this.ns = t3[1], e4 = t3[2]) : (this.ns = "$global", e4 = this.attrName), t3 = e4.match(/^([^\.]+)\.(.*)$/), t3 && (e4 = t3[1], this.attrArgument = t3[2]), this.name = e4.replace(/(-\w)/g, function(e5) {
                return e5.substring(1).toUpperCase();
              }));
            } }), e3.push({ code: "getGlobalDirective", fn: function() {
              var e4;
              if (!this.directive) {
                if (e4 = r.d[this.ns], !e4)
                  return this.result = "noNS", void (this.stop = true);
                this.directive = e4[this.name], this.directive || (this.result = "$global" === this.ns ? "noNS" : "noDirective", this.stop = true);
              }
            } }), e3.push({ code: "cloneDirective", fn: function() {
              var e4, t3, n2, o2, a2, l2;
              if (a2 = this.directive, o2 = this.ns, n2 = this.name, e4 = {}, i.isFunction(a2))
                e4.init = a2;
              else {
                if (!i.isObject(a2))
                  throw "Wrong directive: " + o2 + "." + n2;
                for (t3 in a2)
                  l2 = a2[t3], e4[t3] = l2;
              }
              if (e4.priority = a2.priority || r.priority[o2] && r.priority[o2][n2] || 0, e4.restrict = a2.restrict || "A", e4.restrict.indexOf(this.attrType) < 0)
                throw "Directive has wrong binding (attribute/element): " + n2;
              this.directive = e4;
            } }), e3.push({ code: "preprocessor", fn: function() {
              var e4, t3, n2;
              n2 = this.ns, t3 = this.name, e4 = this.directive, e4.$init = function(i2, o2, a2, l2) {
                var c2, s2;
                return c2 = function() {
                  var e5, t4, n3, r2, i3;
                  for (r2 = s2.procLine, t4 = n3 = 0, i3 = r2.length; i3 > n3; t4 = ++n3)
                    if (e5 = r2[t4], e5.fn.call(s2), s2.isDeferred) {
                      s2.procLine = r2.slice(t4 + 1);
                      break;
                    }
                  return s2.async = true, null;
                }, s2 = { element: o2, value: a2, cd: i2, env: l2, ns: n2, name: t3, doBinding: false, directive: e4, isDeferred: false, procLine: r.hooks.directive, makeDeferred: function() {
                  return s2.isDeferred = true, s2.doBinding = true, s2.retStopBinding = true, s2.async = false, function() {
                    return s2.isDeferred = false, s2.async ? c2() : void 0;
                  };
                } }, e4.stopBinding && (l2.stopBinding = true), c2(), s2.retStopBinding ? "stopBinding" : void 0;
              };
            } });
          }(), function() {
            var e3;
            return e3 = r.hooks.directive, e3.push({ code: "init", fn: function() {
              var e4;
              this.directive.init && (r.debug.directive && this.directive.scope && console.warn(this.ns + "-" + this.name + " uses scope and init together, probably you need use link instead of init"), this.env.changeDetector = this.cd, e4 = this.directive.init.call(this.env, this.cd.scope, this.element, this.value, this.env), e4 && e4.start && e4.start());
            } }), e3.push({ code: "templateUrl", fn: function() {
              var e4, t3;
              t3 = this, this.directive.templateUrl && (e4 = this.makeDeferred(), i.ajax({ cache: true, url: this.directive.templateUrl, success: function(n2) {
                return t3.directive.template = n2, e4();
              }, error: e4 }));
            } }), e3.push({ code: "template", fn: function() {
              var e4;
              this.directive.template && (1 === this.element.nodeType ? this.element.innerHTML = this.directive.template : 8 === this.element.nodeType && (e4 = document.createElement("p"), e4.innerHTML = this.directive.template.trim(), e4 = e4.firstChild, i.after(this.element, e4), this.element = e4, this.doBinding = true));
            } }), e3.push({ code: "scope", fn: function() {
              var e4, t3;
              if (this.directive.scope) {
                switch (t3 = this.cd, this.directive.scope) {
                  case true:
                    e4 = t3["new"]({ $parent: t3.scope });
                    break;
                  case "root":
                    e4 = r.ChangeDetector({ $parent: t3.scope }), t3.watch("$destroy", function() {
                      return e4.destroy();
                    });
                    break;
                  default:
                    throw "Wrong scope value: " + this.directive.scope;
                }
                this.env.parentChangeDetector = t3, this.cd = e4, this.doBinding = true, this.retStopBinding = true;
              }
            } }), e3.push({ code: "link", fn: function() {
              var e4;
              this.directive.link && (this.env.changeDetector = this.cd, e4 = this.directive.link.call(this.env, this.cd.scope, this.element, this.value, this.env), e4 && e4.start && e4.start());
            } }), e3.push({ code: "scopeBinding", fn: function() {
              this.doBinding && !this.env.stopBinding && r.bind(this.cd, this.element, { skip_attr: this.env.skippedAttr() });
            } });
          }(), A = function() {
            var e3;
            return e3 = function(e4, t3, n2) {
              var i2;
              "A" === t3.attr_type ? (i2 = n2 || {}, i2.priority = r.priority.$attribute, i2.is_attr = true, i2.name = e4, i2.attrName = e4, i2.element = t3.element, t3.list.push(i2)) : "M" === t3.attr_type && t3.list.push(n2);
            }, function(t3, n2) {
              var i2, o2, a2, l2, c2;
              if (n2.skip_attr.indexOf(t3) >= 0)
                return e3(t3, n2, { skip: true });
              for (o2 = { attrName: t3, attrType: n2.attr_type, element: n2.element, cd: n2.cd, result: null }, c2 = r.hooks.attribute, a2 = 0, l2 = c2.length; l2 > a2 && (i2 = c2[a2], i2.fn.call(o2), !o2.stop); a2++)
                ;
              return "noNS" === o2.result ? void e3(t3, n2) : "noDirective" === o2.result ? "E" === n2.attr_type ? void n2.list.push({ name: t3, priority: -10, attrName: t3, noDirective: true }) : void e3(t3, n2, { noDirective: true }) : void n2.list.push({ name: t3, directive: o2.directive, priority: o2.directive.priority, attrName: t3, attrArgument: o2.attrArgument });
            };
          }(), C = function(e3, t3) {
            return e3.priority === t3.priority ? 0 : e3.priority > t3.priority ? -1 : 1;
          }, w = function(e3, t3, n2, i2) {
            var o2;
            return o2 = n2, o2.indexOf(r.utils.pars_start_tag) < 0 ? void 0 : (e3.watchText(o2, null, { element: t3, elementAttr: i2 }), true);
          }, $ = function(e3, t3) {
            var n2;
            return n2 = t3.data, n2.indexOf(r.utils.pars_start_tag) < 0 ? void 0 : (e3.watchText(n2, null, { element: t3 }), n2);
          }, x = function(e3, t3) {
            var n2, i2, o2, a2, l2, c2, s2, u2, f2, p2, h2;
            if (p2 = t3.nodeValue.trim(), "directive:" === p2.slice(0, 10)) {
              if (p2 = p2.slice(10).trim(), u2 = p2.indexOf(" "), u2 >= 0 ? (o2 = p2.slice(0, +(u2 - 1) + 1 || 9e9), h2 = p2.slice(u2 + 1)) : (o2 = p2, h2 = ""), n2 = { list: f2 = [], element: t3, attr_type: "M", cd: e3, skip_attr: [] }, A(o2, n2), i2 = f2[0], i2.noDirective)
                throw "Comment directive not found: " + o2;
              a2 = i2.directive, c2 = new b({ element: t3, attrName: i2.attrName, attrArgument: i2.attrArgument || null, attributes: f2 }), r.debug.directive && console.log("bind", i2.attrName, h2, i2);
              try {
                a2.$init(e3, t3, h2, c2);
              } catch (s3) {
                l2 = s3, r.exceptionHandler(l2, "Error in directive: " + i2.name, { value: h2, env: c2, cd: e3, scope: e3.scope, element: t3 });
              }
              return c2.skipToElement ? { directive: 1, skipToElement: c2.skipToElement } : { directive: 1, skipToElement: null };
            }
          }, b = function(e3) {
            var t3, n2;
            for (t3 in e3)
              n2 = e3[t3], this[t3] = n2;
            return this;
          }, b.prototype.takeAttr = function(e3, t3) {
            var n2, r2, i2, o2, a2;
            for (1 === arguments.length && (t3 = true), o2 = this.attributes, r2 = 0, i2 = o2.length; i2 > r2; r2++)
              if (n2 = o2[r2], n2.attrName === e3)
                return t3 && (n2.skip = true), a2 = this.element.getAttribute(e3), a2 || true;
          }, b.prototype.skippedAttr = function() {
            var e3, t3, n2, r2, i2;
            for (r2 = this.attributes, i2 = [], t3 = 0, n2 = r2.length; n2 > t3; t3++)
              e3 = r2[t3], e3.skip && i2.push(e3.attrName);
            return i2;
          }, b.prototype.scan = function(e3) {
            return this.changeDetector.scan(e3);
          }, b.prototype.on = function(e3, t3, n2) {
            return this.changeDetector.on(e3, t3, n2);
          }, b.prototype.watch = function(e3, t3, n2) {
            return this.changeDetector.watch(e3, t3, n2);
          }, b.prototype.watchGroup = function(e3, t3) {
            return this.changeDetector.watchGroup(e3, t3);
          }, b.prototype.watchText = function(e3, t3, n2) {
            return this.changeDetector.watchText(e3, t3, n2);
          }, b.prototype.getValue = function(e3) {
            return this.changeDetector.getValue(e3);
          }, b.prototype.setValue = function(e3, t3) {
            return this.changeDetector.setValue(e3, t3);
          }, b.prototype.eval = function(e3) {
            return this.changeDetector.eval(e3);
          }, b.prototype["new"] = function(e3, t3) {
            return t3 === true ? t3 = { locals: true } : e3 === true && null == t3 && (e3 = null, t3 = { locals: true }), this.changeDetector["new"](e3, t3);
          }, b.prototype.bind = function() {
            var e3, t3, n2, o2, l2, c2, s2;
            for (this.stopBinding = true, n2 = 0, l2 = 0, c2 = arguments.length; c2 > l2; l2++)
              e3 = arguments[l2], e3 instanceof a && (t3 = e3, n2 += 1), i.isElement(e3) && (o2 = e3, n2 += 1);
            return s2 = arguments[n2], s2 || (s2 = { skip: this.skippedAttr() }), o2 || (o2 = this.element), t3 || (t3 = this.changeDetector), r.bind(t3, o2, s2);
          }, k = function() {
            return function(e3, t3, n2) {
              var o2, a2, l2, c2, s2, u2, f2, p2, h2, d2, m2, v2, g2, y2, x2, k2, $2, E2, B2, T2, _2, N2, S, O, L, M, j, F, I, V;
              if (x2 = { attr: [], dir: [], children: [] }, s2 = { directive: 0, hook: 0, skipToElement: null, fb: x2 }, n2 = n2 || {}, j = false, I = n2.skip_attr, n2.skip === true ? n2.skip_top = true : I || (I = n2.skip || []), I instanceof Array || (I = [I]), !n2.skip_top) {
                for (o2 = { list: _2 = [], element: t3, skip_attr: I, attr_type: "E", cd: e3 }, l2 = t3.nodeName.toLowerCase(), A(l2, o2), ("script" === l2 || "style" === l2) && (j = true), o2.attr_type = "A", L = t3.attributes, $2 = 0, E2 = L.length; E2 > $2; $2++)
                  a2 = L[$2], A(a2.name, o2);
                if (n2.attachDirective) {
                  M = n2.attachDirective;
                  for (l2 in M)
                    c2 = M[l2], A(l2, o2);
                }
                for (_2 = _2.sort(C), N2 = 0, B2 = _2.length; B2 > N2; N2++)
                  if (h2 = _2[N2], !h2.skip) {
                    if (h2.noDirective)
                      throw "Directive not found: " + h2.name;
                    if (h2.skip = true, V = n2.attachDirective && n2.attachDirective[h2.attrName] ? n2.attachDirective[h2.attrName] : t3.getAttribute(h2.attrName), h2.is_attr)
                      w(e3, t3, V, h2.attrName) && x2.attr.push({ attrName: h2.attrName, value: V });
                    else {
                      d2 = h2.directive, v2 = new b({ element: t3, attrName: h2.attrName, attrArgument: h2.attrArgument || null, attributes: _2, stopBinding: false, elementCanBeRemoved: n2.elementCanBeRemoved, fbElement: n2.fbElement }), r.debug.directive && console.log("bind", h2.attrName, V, h2);
                      try {
                        "stopBinding" === d2.$init(e3, t3, V, v2) && (j = true);
                      } catch (g3) {
                        m2 = g3, r.exceptionHandler(m2, "Error in directive: " + h2.attrName, { value: V, env: v2, cd: e3, scope: e3.scope, element: t3 });
                      }
                      if (v2.fastBinding ? (y2 = i.isFunction(v2.fastBinding) ? v2.fastBinding : d2.init, x2.dir.push({ fb: y2, attrName: h2.attrName, value: V, attrArgument: v2.attrArgument, fbData: v2.fbData })) : s2.directive++, v2.stopBinding) {
                        j = true;
                        break;
                      }
                      v2.skipToElement && (s2.skipToElement = v2.skipToElement);
                    }
                  }
              }
              if (!j)
                for (F = null, f2 = function() {
                  var e4, n3, r2, i2;
                  for (r2 = t3.childNodes, i2 = [], n3 = 0, e4 = r2.length; e4 > n3; n3++)
                    u2 = r2[n3], i2.push(u2);
                  return i2;
                }(), k2 = S = 0, T2 = f2.length; T2 > S; k2 = ++S)
                  u2 = f2[k2], u2 && (F ? F === u2 && (F = null) : (n2.fbElement && (p2 = { fbElement: n2.fbElement.childNodes[k2] }), O = D(e3, u2, p2), s2.directive += O.directive, s2.hook += O.hook, F = O.skipToElement, O.fb && (O.fb.text || O.fb.attr && O.fb.attr.length || O.fb.dir && O.fb.dir.length || O.fb.children && O.fb.children.length) && x2.children.push({ index: k2, fb: O.fb })));
              return s2;
            };
          }(), D = function(e3, t3, n2) {
            var i2, o2, a2, l2, c2, s2, u2;
            if (s2 = { directive: 0, hook: 0, skipToElement: null, fb: null }, r.hooks.binding.length) {
              for (c2 = r.hooks.binding, o2 = 0, a2 = c2.length; a2 > o2; o2++)
                if (i2 = c2[o2], s2.hook += 1, l2 = i2.fn(e3, t3, n2), l2 && l2.owner)
                  return s2;
            }
            return 1 === t3.nodeType ? (l2 = k(e3, t3, n2), s2.directive += l2.directive, s2.hook += l2.hook, s2.skipToElement = l2.skipToElement, s2.fb = l2.fb) : 3 === t3.nodeType ? (u2 = $(e3, t3, n2), u2 && (s2.fb = { text: u2 })) : 8 === t3.nodeType && (l2 = x(e3, t3, n2), l2 && (s2.directive += l2.directive, s2.skipToElement = l2.skipToElement)), s2;
          }, r.nextTick = function() {
            var e3, t3, n2;
            return n2 = null, t3 = [], e3 = function() {
              var e4, i2, o2, a2, l2, c2, s2, u2;
              for (n2 = null, i2 = t3.slice(), t3.length = 0, c2 = 0, s2 = i2.length; s2 > c2; c2++) {
                l2 = i2[c2], e4 = l2[0], u2 = l2[1];
                try {
                  e4.call(u2);
                } catch (a3) {
                  o2 = a3, r.exceptionHandler(o2, "$nextTick, error in function", { fn: e4, self: u2 });
                }
              }
              return null;
            }, function(r2) {
              return t3.push([r2, this]), n2 ? void 0 : n2 = setTimeout(e3, 0);
            };
          }(), r.bind = function(e3, t3, n2) {
            var i2, o2, a2, l2, c2, s2, u2;
            if (!e3)
              throw "No changeDetector";
            if (!t3)
              throw "No element";
            if (n2 = n2 || {}, r.option.domOptimization && !n2.noDomOptimization && r.utils.optmizeElement(t3), u2 = e3.root, o2 = !u2.finishBinding_lock, o2 && (u2.finishBinding_lock = true, u2.bindingResult = { directive: 0, hook: 0 }), s2 = D(e3, t3, n2), u2.bindingResult.directive += s2.directive, u2.bindingResult.hook += s2.hook, e3.digest(), o2) {
              for (u2.finishBinding_lock = false, c2 = u2.watchers.finishBinding.slice(), u2.watchers.finishBinding.length = 0, a2 = 0, l2 = c2.length; l2 > a2; a2++)
                (i2 = c2[a2])();
              s2.total = u2.bindingResult;
            }
            return s2;
          }, !function() {
            function e3(e4, t4, n2, r2, i2, o2) {
              r2.callback.apply(null, o2);
              var a2 = t4._properties.root;
              a2 && a2.topCD && a2.topCD.scan({ zone: true });
            }
            var t3 = r.bind;
            r.bind = function(n2, i2, o2) {
              var a2 = n2.root, l2 = r.option.zone;
              if (l2) {
                var c2 = l2 === true ? Zone : l2, s2 = a2.zone;
                if (s2 || (a2.zone = s2 = c2.current.fork({ name: c2.current.name + ".x", properties: { root: a2 }, onInvokeTask: e3 })), c2.current !== s2)
                  return a2.zone.run(t3, null, [n2, i2, o2]);
              }
              return t3(n2, i2, o2);
            };
          }(), r.bootstrap = function(e3, t3) {
            if (!e3)
              return r.bootstrap("[al-app]"), r.bootstrap("[al\\:app]"), void r.bootstrap("[data-al-app]");
            var n2;
            if (e3 instanceof r.core.ChangeDetector)
              n2 = e3, e3 = t3;
            else if (t3 instanceof r.core.ChangeDetector)
              n2 = t3;
            else if (i.isFunction(t3)) {
              var o2 = {};
              n2 = r.ChangeDetector(o2), t3.call(n2, o2);
            } else
              t3 && (n2 = r.ChangeDetector(t3));
            if (Array.isArray(e3)) {
              for (var a2 = void 0, l2 = 0, c2 = e3; l2 < c2.length; l2++) {
                var s2 = c2[l2];
                a2 = r.bootstrap(s2, n2);
              }
              return a2;
            }
            if ("string" == typeof e3) {
              for (var a2 = void 0, u2 = document.querySelectorAll(e3), f2 = 0, p2 = u2; f2 < p2.length; f2++) {
                var h2 = p2[f2];
                a2 = r.bootstrap(h2, n2);
              }
              return a2;
            }
            if (n2 || (n2 = r.ChangeDetector()), i.isElement(e3)) {
              for (var d2, m2, v2 = 0, g2 = ["al-app", "al:app", "data-al-app"]; v2 < g2.length && (d2 = g2[v2], m2 = e3.getAttribute(d2), e3.removeAttribute(d2), !m2); v2++)
                ;
              var y2;
              return m2 && (y2 = { skip_attr: [d2], attachDirective: {} }, r.d.al.ctrl ? y2.attachDirective["al-ctrl"] = m2 : y2.attachDirective[m2 + "!"] = ""), r.bind(n2, e3, y2), n2;
            }
            r.exceptionHandler("Error in bootstrap", "Error input arguments", { input: e3 });
          };
          var E, B;
          r.utils.getId = function() {
            var e3, t3;
            return t3 = function() {
              var e4, t4, n2, r2, i2, o2;
              for (o2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), n2 = Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3) - 1388512800, i2 = ""; n2 > 0; )
                e4 = Math.floor(n2 / 62), r2 = 62 * e4, t4 = n2 - r2, n2 = e4, i2 = o2[t4] + i2;
              return i2;
            }(), e3 = 1, function() {
              return t3 + "#" + e3++;
            };
          }(), r.utils.clone = E = function(e3, t3) {
            var n2, r2, i2, o2;
            if (null == t3 && (t3 = 128), 1 > t3)
              return null;
            if (!e3)
              return e3;
            if ("object" == typeof e3) {
              if (e3 instanceof Array)
                return i2 = function() {
                  var r3, i3, o3;
                  for (o3 = [], r3 = 0, i3 = e3.length; i3 > r3; r3++)
                    n2 = e3[r3], o3.push(E(n2, t3 - 1));
                  return o3;
                }();
              if (e3 instanceof Date)
                return new Date(e3.valueOf());
              if (e3.nodeType && "function" == typeof e3.cloneNode)
                return e3;
              i2 = {};
              for (r2 in e3)
                o2 = e3[r2], "$" !== r2[0] && (i2[r2] = E(o2, t3 - 1));
              return i2;
            }
            return e3;
          }, r.utils.equal = B = function(e3, t3, n2) {
            var r2, i2, o2, a2, l2, c2, s2, u2;
            if (null == n2 && (n2 = 128), 1 > n2)
              return true;
            if (!e3 || !t3)
              return e3 === t3;
            if (c2 = typeof e3, s2 = typeof t3, c2 !== s2)
              return false;
            if ("object" === c2) {
              if (e3 instanceof Array) {
                if (e3.length !== t3.length)
                  return false;
                for (r2 = i2 = 0, a2 = e3.length; a2 > i2; r2 = ++i2)
                  if (u2 = e3[r2], !B(u2, t3[r2], n2 - 1))
                    return false;
                return true;
              }
              if (e3 instanceof Date)
                return e3.valueOf() === t3.valueOf();
              if (e3.nodeType && "function" == typeof e3.cloneNode)
                return e3 === t3;
              l2 = {};
              for (o2 in e3)
                if (u2 = e3[o2], "$" !== o2[0] && (l2[o2] = true, !B(u2, t3[o2], n2 - 1)))
                  return false;
              for (o2 in t3)
                if (u2 = t3[o2], "$" !== o2[0] && !l2[o2] && !B(u2, e3[o2], n2 - 1))
                  return false;
              return true;
            }
            return e3 === t3;
          }, r.exceptionHandler = function(e3, t3, n2) {
            var r2;
            return r2 = [], t3 && r2.push(t3), e3 && e3.message && r2.push(e3.message), n2 && r2.push(n2), e3 && r2.push(e3.stack ? e3.stack : e3), console.error.apply(console, r2);
          }, function() {
            var e3, t3, n2, i2, o2, a2;
            return a2 = function() {
              var e4, t4, n3, r2;
              for (r2 = {}, e4 = 0, n3 = arguments.length; n3 > e4; e4++)
                t4 = arguments[e4], r2[t4] = true;
              return r2;
            }, o2 = a2("instanceof", "typeof", "in", "null", "true", "false", "undefined", "return"), t3 = function() {
              var e4;
              return e4 = /[a-zA-Z\u0410-\u044F\u0401\u0451_\.\$]/, function(t4) {
                return t4.match(e4);
              };
            }(), n2 = function(e4) {
              return e4.charCodeAt() >= 48 && e4.charCodeAt() <= 57;
            }, i2 = function() {
              var e4;
              return e4 = a2("+", "-", ">", "<", "=", "&", "|", "^", "!", "~"), function(t4) {
                return e4[t4] || false;
              };
            }(), e3 = a2("=", "+=", "-=", "++", "--", "|=", "^=", "&=", "!=", "<<=", ">>="), r.utils.parsExpression = function(l2, c2) {
              var s2, u2, f2, p2, h2, d2, m2, v2, g2, y2;
              return c2 = c2 || {}, h2 = a2.apply(null, c2.input || []), y2 = 1, d2 = function(r2) {
                var o3, a3, l3, c3, s3, u3, f3, p3, h3, m3, v3, g3, b2, w2, x2, k2, D2, $2, C2, A2, E2, B2;
                for (b2 = r2.line, x2 = r2.result || [], m3 = r2.index || 0, g3 = r2.level || 0, $2 = r2.stopKey || null, E2 = "", v3 = null, B2 = [], k2 = "", f3 = "", D2 = false, w2 = "", C2 = "", A2 = "", h3 = "", c3 = 0, p3 = null, u3 = function() {
                  return h3 && x2.push({ type: "free", value: h3 }), h3 = "";
                }; m3 <= b2.length; )
                  if (l3 = b2[m3 - 1], o3 = b2[m3++] || "", a3 = b2[m3], (D2 && h3 || !o3) && u3(), "string" !== D2) {
                    if ("key" === D2) {
                      if (t3(o3) || n2(o3)) {
                        E2 += o3;
                        continue;
                      }
                      if ("[" === o3) {
                        if (E2 += o3, s3 = d2({ line: b2, index: m3, level: g3 + 1, stopKey: "]" }), !s3.stopKeyOk)
                          throw "Error expression";
                        m3 = s3.index, E2 += "###" + s3.uniq + "###]", B2.push(s3);
                        continue;
                      }
                      if ("?" === o3 && ("." === a3 || "(" === a3 || "[" === a3)) {
                        E2 += o3;
                        continue;
                      }
                      if ("(" === o3) {
                        if (E2 += o3, s3 = d2({ line: b2, index: m3, level: g3 + 1, stopKey: ")" }), !s3.stopKeyOk)
                          throw "Error expression";
                        m3 = s3.index, E2 += "###" + s3.uniq + "###)", B2.push(s3);
                        continue;
                      }
                      v3 = { type: "key", value: E2, start: m3 - E2.length - 1, finish: m3 - 1, children: B2 }, x2.push(v3), D2 = "", E2 = "", B2 = [];
                    } else if ("sign" === D2) {
                      if (i2(o3)) {
                        k2 += o3;
                        continue;
                      }
                      if ("|" === k2 && 0 === g3 && 0 === c3) {
                        p3 = b2.substring(m3 - 1), m3 = b2.length + 1;
                        continue;
                      }
                      (e3[k2] || "=" === k2[0] && "=" !== k2[1]) && (v3.assignment = true), x2.push({ type: "sign", value: k2 }), D2 = "", k2 = "";
                    } else if ("digit" === D2) {
                      if (n2(o3) || "." === o3) {
                        f3 += o3;
                        continue;
                      }
                      x2.push({ type: "digit", value: f3 }), f3 = "";
                    }
                    if (t3(o3))
                      D2 = "key", E2 += o3;
                    else if (i2(o3))
                      D2 = "sign", k2 += o3;
                    else if (n2(o3))
                      D2 = "digit", f3 += o3;
                    else if ('"' !== o3 && "'" !== o3) {
                      if (o3 === $2)
                        return u3(), { result: x2, index: m3, stopKeyOk: true, uniq: y2++ };
                      "(" === o3 && c3++, ")" === o3 && c3--, "{" !== o3 ? (":" === o3 && "}" === $2 && (v3.type = "free"), h3 += o3) : (u3(), s3 = d2({ line: b2, index: m3, level: g3 + 1, stopKey: "}" }), x2.push({ type: "{}", child: s3 }), m3 = s3.index);
                    } else
                      C2 = o3, D2 = "string", A2 += o3;
                  } else {
                    if (o3 === C2 && "\\" !== l3) {
                      A2 += o3, x2.push({ type: "string", value: A2 }), A2 = "", C2 = "", D2 = "";
                      continue;
                    }
                    A2 += o3;
                  }
                return u3(), { result: x2, index: m3, filter: p3 };
              }, f2 = d2({ line: l2 }), m2 = { isSimple: !f2.filter, simpleVariables: [] }, f2.filter ? (m2.expression = l2.substring(0, l2.length - f2.filter.length - 1), m2.filter = f2.filter) : m2.expression = l2, v2 = function(e4) {
                var t4;
                return t4 = e4.split(/[\.\[\(\?]/), { count: t4.length, firstPart: t4[0] };
              }, g2 = function(e4, t4) {
                return t4 ? "($$=" + e4 + ",$$==null)?undefined:" : "($$=$$" + e4 + ",$$==null)?undefined:";
              }, p2 = function(e4) {
                return e4.split(/[\.\[\(\?]/)[0];
              }, u2 = function(e4) {
                var t4, n3, r2, i3, a3, l3, c3, s3, u3, f3;
                if ("this" === e4)
                  return "$$scope";
                if (t4 = p2(e4), i3 = o2[t4] || h2[t4], "this" === t4 && (e4 = "$$scope" + e4.slice(4), i3 = true), s3 = e4.split("?"), 1 === s3.length)
                  return i3 ? e4 : "$$scope." + e4;
                for (i3 ? (f3 = g2(s3[0], true), n3 = s3[0]) : (f3 = g2("scope." + s3[0]), n3 = "scope." + s3[0]), u3 = s3.slice(1, s3.length - 1), r2 = 0, l3 = u3.length; l3 > r2; r2++)
                  c3 = u3[r2], "(" === c3[0] ? f3 += g2(n3 + c3, i3) : (f3 += g2(c3), n3 += c3);
                return a3 = s3[s3.length - 1], "(" === a3[0] ? (i3 || (f3 += "$$"), f3 += n3 + a3) : f3 += "$$" + a3, "(" + f3 + ")";
              }, s2 = function(e4) {
                var t4, n3, r2, i3, a3, l3, c3, f3, p3, d3, g3, y3, b2;
                for (y3 = "", d3 = e4.result, i3 = 0, c3 = d3.length; c3 > i3; i3++)
                  if (r2 = d3[i3], "key" !== r2.type)
                    y3 += "{}" !== r2.type ? r2.value : "{" + s2(r2.child) + "}";
                  else {
                    if (r2.assignment ? (b2 = v2(r2.value), p3 = "this" === b2.firstPart ? "$$scope" + r2.value.substring(4) : h2[b2.firstPart] ? r2.value : b2.count < 2 ? "($$scope.$$root || $$scope)." + r2.value : "$$scope." + r2.value, m2.isSimple = false) : o2[r2.value] ? p3 = r2.value : (p3 = u2(r2.value), m2.simpleVariables.push(p3)), r2.children.length)
                      for (g3 = r2.children, a3 = 0, f3 = g3.length; f3 > a3; a3++)
                        t4 = g3[a3], l3 = "###" + t4.uniq + "###", n3 = s2(t4), p3 = p3.split(l3).join(n3);
                    y3 += p3;
                  }
                return y3;
              }, m2.result = s2(f2), r.debug.parser && console.log(l2, m2), m2;
            }, r.utils.parsFilter = function(e4) {
              var t4, n3, i3;
              for (i3 = [], e4 = e4.trim(); e4; ) {
                if (t4 = e4.match(/^(\w+)([^\w])(.*)$/), !t4) {
                  if (t4 = e4.match(/^(\w+)$/), !t4)
                    return null;
                  i3.push({ name: t4[1], args: [], raw: "" });
                  break;
                }
                "|" === t4[2] ? (i3.push({ name: t4[1], args: [], raw: "" }), e4 = t4[3]) : (n3 = r.utils.parsArguments(t4[3], { stop: "|" }), i3.push({ name: t4[1], args: n3.result, raw: t4[3].slice(0, n3.length) }), e4 = t4[3].slice(n3.length + 1).trim());
              }
              return { result: i3 };
            }, r.utils.parsArguments = function(e4, t4) {
              var n3, r2, i3, o3, a3, l2, c2, s2;
              for (t4 = t4 || {}, a3 = 0, i3 = [], r2 = "", o3 = 0, c2 = false, s2 = false, l2 = function() {
                r2 && (i3.push(r2), r2 = "");
              }; a3 <= e4.length; )
                if (n3 = e4[a3] || "", a3++, c2)
                  r2 += n3, '"' === n3 && (c2 = false);
                else if (s2)
                  r2 += n3, "'" === n3 && (s2 = false);
                else if ('"' !== n3)
                  if ("'" !== n3)
                    if (o3)
                      r2 += n3, "(" === n3 && o3++, ")" === n3 && o3--;
                    else if (" " !== n3 && "," !== n3) {
                      if (t4.stop && t4.stop === n3) {
                        l2();
                        break;
                      }
                      "(" === n3 && (o3 = 1), r2 += n3;
                    } else
                      l2();
                  else
                    r2 += n3, s2 = true;
                else
                  r2 += n3, c2 = true;
              return l2(), { result: i3, length: a3 - 1 };
            };
          }(), function() {
            var e3, t3, n2;
            return r.utils.pars_start_tag = "{{", r.utils.pars_finish_tag = "}}", n2 = function(e4) {
              var t4, n3, i2, o2, a2, l2, c2, s2, u2;
              return u2 = r.utils.pars_start_tag, n3 = r.utils.pars_finish_tag, c2 = [], o2 = 0, l2 = 0, i2 = function(t5) {
                var n4;
                return t5 = t5 || 1, n4 = e4.substring(l2, o2 - t5), l2 = o2, n4;
              }, s2 = null, a2 = function(t5, r2, l3) {
                var u3, f2, p2, h2;
                for (t5 || (s2 = { type: "expression", list: [] }, c2.push(s2)), h2 = null, u3 = null; o2 < e4.length; ) {
                  if (h2 = u3, u3 = e4[o2], o2 += 1, f2 = h2 + u3, p2 = e4[o2], u3 === r2)
                    return;
                  if (!l3) {
                    if (f2 === n3 && 0 === t5)
                      return s2.list.push(i2(2)), true;
                    "(" === u3 ? a2(t5 + 1, ")") : "{" === u3 ? a2(t5 + 1, "}") : '"' === u3 ? a2(t5 + 1, '"', true) : "'" === u3 ? a2(t5 + 1, "'", true) : "|" === u3 && 0 === t5 && ("|" === p2 ? o2 += 1 : s2.list.push(i2()));
                  }
                }
              }, t4 = function() {
                var t5, n4, r2, l3, s3;
                for (r2 = null, t5 = null; o2 < e4.length; )
                  if (r2 = t5, t5 = e4[o2], o2 += 1, n4 = r2 + t5, n4 === u2) {
                    if (s3 = i2(2), s3 && c2.push({ type: "text", value: s3 }), !a2(0))
                      throw "Wrong expression" + e4;
                    t5 = null;
                  }
                return l3 = i2(-1), l3 ? c2.push({ type: "text", value: l3 }) : void 0;
              }, t4(), r.debug.parser && console.log("parsText", c2), c2;
            }, e3 = {}, t3 = function(e4) {
              var t4, n3, r2;
              return r2 = function() {
                var r3, i2, o2;
                for (o2 = [], r3 = 0, i2 = e4.length; i2 > r3; r3++)
                  t4 = e4[r3], n3 = { type: t4.type, value: t4.value }, t4.list && (n3.list = t4.list.slice()), o2.push(n3);
                return o2;
              }();
            }, r.utils.parsText = function(r2) {
              var i2;
              return i2 = e3[r2], i2 || (e3[r2] = i2 = n2(r2)), t3(i2);
            };
          }(), function() {
            var e3;
            return r.utils.compile = e3 = {}, e3.cache = {}, e3.Function = Function, e3.expression = function(t3, n2) {
              var i2, o2, a2, l2, c2, s2, u2, f2, p2;
              if (n2 = n2 || {}, t3 = t3.trim(), u2 = t3 + "#", u2 += n2.no_return ? "+" : "-", u2 += n2.string ? "s" : "v", n2.input && (u2 += n2.input.join(",")), s2 = e3.cache[u2])
                return s2;
              s2 = r.utils.parsExpression(t3, { input: n2.input }), l2 = s2.result, f2 = n2.no_return || false, f2 ? p2 = "var $$;" + l2 : n2.string && !s2.filter ? (p2 = "var $$, __ = (" + l2 + "); return '' + (__ || (__ == null?'':__))", s2.rawExpression = "(__=" + l2 + ") || (__ == null?'':__)") : p2 = "var $$;return (" + l2 + ")";
              try {
                n2.input ? (i2 = n2.input.slice(), i2.unshift("$$scope"), i2.push(p2), c2 = e3.Function.apply(null, i2)) : c2 = e3.Function("$$scope", p2);
              } catch (a3) {
                throw o2 = a3, r.exceptionHandler(o2, "Wrong expression: " + t3, { src: t3, cfg: n2 }), "Wrong expression: " + l2;
              }
              return s2.fn = c2, e3.cache[u2] = s2;
            }, e3.cacheText = {}, e3.buildText = function(t3, n2) {
              var r2, i2, o2, a2, l2, c2, s2;
              if (o2 = e3.cacheText[t3])
                return function() {
                  return o2.call(n2);
                };
              for (s2 = [], l2 = a2 = 0, c2 = n2.length; c2 > a2; l2 = ++a2)
                r2 = n2[l2], "expression" === r2.type ? s2.push(r2.fn ? "this[" + l2 + "].fn(this.scope)" : "((x=this[" + l2 + "].value) || (x == null?'':x))") : r2.value && (i2 = r2.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n"), s2.push('"' + i2 + '"'));
              return s2 = s2.join(" + "), o2 = e3.Function("var x; return (" + s2 + ")"), e3.cacheText[t3] = o2, function() {
                return o2.call(n2);
              };
            }, e3.cacheSimpleText = {}, e3.buildSimpleText = function(t3, n2) {
              var r2, i2, o2, a2, l2, c2, s2, u2, f2;
              if (c2 = t3 ? e3.cacheSimpleText[t3] : null, c2 || !n2)
                return c2 || null;
              for (u2 = [], f2 = [], l2 = a2 = 0, s2 = n2.length; s2 > a2; l2 = ++a2)
                r2 = n2[l2], "expression" === r2.type ? (u2.push("(" + r2.re + ")"), r2.simpleVariables && f2.push.apply(f2, r2.simpleVariables)) : r2.value && (i2 = r2.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n"), u2.push('"' + i2 + '"'));
              return u2 = u2.join(" + "), o2 = e3.Function("$$scope", "var $$, __; return (" + u2 + ")"), c2 = { fn: o2, simpleVariables: f2 }, t3 && (e3.cacheSimpleText[t3] = c2), c2;
            };
          }();
          var T, _, N;
          return N = function(e3) {
            var t3, n2, r2, i2;
            if (!e3.length)
              return "el";
            for (i2 = "el", n2 = 0, r2 = e3.length; r2 > n2; n2++)
              t3 = e3[n2], i2 += ".childNodes[" + t3 + "]";
            return i2;
          }, _ = function(e3) {
            var t3, n2, i2, o2, a2, l2, c2;
            for (i2 = r.utils.parsText(e3), o2 = 0, l2 = i2.length; l2 > o2; o2++)
              if (n2 = i2[o2], "expression" === n2.type) {
                if (n2.list.length > 1)
                  return null;
                if (a2 = n2.list[0], "#" === a2[0])
                  return null;
                if ("=" === a2[0])
                  return null;
                if ("::" === a2.slice(0, 2))
                  return null;
                if (t3 = r.utils.compile.expression(a2, { string: true }), !t3.rawExpression)
                  throw "Error";
                n2.re = t3.rawExpression;
              }
            return c2 = r.utils.compile.buildSimpleText(e3, i2), c2.fn;
          }, r.core.fastBinding = function(e3) {
            return r.option.fastBinding && !e3.directive && !e3.hook && e3.fb ? new T(e3) : void 0;
          }, T = function(e3) {
            var t3, n2, i2, o2;
            return n2 = this, i2 = [], n2.fastWatchFn = [], t3 = [], o2 = function(e4, r2) {
              var a2, l2, c2, s2, u2, f2, p2, h2, d2, m2, v2, g2, y2, b2, w2, x2;
              if (e4.dir)
                for (b2 = N(t3), v2 = e4.dir, s2 = 0, h2 = v2.length; h2 > s2; s2++)
                  a2 = v2[s2], i2.push("s.dir(" + n2.fastWatchFn.length + ", " + b2 + ");"), n2.fastWatchFn.push(a2);
              if (e4.attr)
                for (g2 = e4.attr, u2 = 0, d2 = g2.length; d2 > u2; u2++)
                  c2 = g2[u2], x2 = c2.value, f2 = c2.attrName, b2 = N(t3), l2 = _(x2), w2 = x2.replace(/"/g, '\\"').replace(/\n/g, "\\n"), l2 ? (i2.push('s.fw("' + w2 + '", ' + n2.fastWatchFn.length + ", " + b2 + ', "' + f2 + '");'), n2.fastWatchFn.push(l2)) : i2.push("s.wt('" + w2 + "', " + b2 + ", '" + f2 + "');");
              if (e4.text && (b2 = N(t3), l2 = _(e4.text), w2 = e4.text.replace(/"/g, '\\"').replace(/\n/g, "\\n"), l2 ? (i2.push('s.fw("' + w2 + '", ' + n2.fastWatchFn.length + ", " + b2 + ");"), n2.fastWatchFn.push(l2)) : i2.push('s.wt("' + w2 + '", ' + b2 + ");")), e4.children)
                for (y2 = e4.children, p2 = 0, m2 = y2.length; m2 > p2; p2++)
                  c2 = y2[p2], t3.length = r2 + 1, t3[r2] = c2.index, o2(c2.fb, r2 + 1);
            }, o2(e3.fb, 0), i2 = i2.join("\n"), n2.resultFn = r.utils.compile.Function("s", "el", "f$", i2), this;
          }, T.prototype.bind = function(e3, t3) {
            this.currentCD = e3, this.resultFn(this, t3, i);
          }, T.prototype.dir = function(e3, t3) {
            var n2, r2, i2, o2;
            r2 = this.fastWatchFn[e3], n2 = this.currentCD, i2 = new b({ attrName: r2.attrName, attrArgument: r2.attrArgument, changeDetector: n2, fbData: r2.fbData }), o2 = r2.fb.call(i2, n2.scope, t3, r2.value, i2), o2 && o2.start && o2.start();
          }, T.prototype.fw = function(e3, t3, n2, r2) {
            var i2, o2, a2, l2;
            i2 = this.currentCD, o2 = this.fastWatchFn[t3], a2 = o2(i2.locals), l2 = { isStatic: false, isArray: false, extraLoop: false, deep: false, value: a2, callback: null, exp: o2, src: e3, onStop: null, el: n2, ea: r2 || null }, i2.watchList.push(l2), f(i2.scope, l2, a2);
          }, T.prototype.wt = function(e3, t3, n2) {
            this.currentCD.watchText(e3, null, { element: t3, elementAttr: n2 });
          }, function() {
            var e3, t3, n2, o2, a2, l2, c2, s2;
            return r.hooks.attribute.unshift({ code: "events", fn: function() {
              var e4;
              e4 = this.attrName.match(/^\@([\w\.\-]+)$/), e4 && (this.ns = "al", this.name = "on", this.attrArgument = e4[1]);
            } }), r.hooks.eventModifier = {}, s2 = function(e4, t4) {
              return r.hooks.eventModifier[e4] = { event: ["keydown", "keypress", "keyup"], fn: function(e5, n3) {
                e5[t4] || (n3.stop = true);
              } };
            }, s2("alt", "altKey"), s2("control", "ctrlKey"), s2("ctrl", "ctrlKey"), s2("meta", "metaKey"), s2("shift", "shiftKey"), r.hooks.eventModifier.self = function(e4, t4) {
              return e4.target !== t4.element ? t4.stop = true : void 0;
            }, r.hooks.eventModifier.once = { beforeExec: function(e4, t4) {
              return t4.unbind();
            } }, n2 = function(e4, t4) {
              var n3, r2, o3, a3, l3, c3;
              if (c3 = {}, "string" == typeof e4 ? c3.event = e4 : "object" == typeof e4 && e4.event && (c3.event = e4.event), "string" == typeof c3.event && (c3.event = c3.event.split(/\s+/)), t4 && c3.event) {
                for (o3 = false, l3 = c3.event, r2 = 0, a3 = l3.length; a3 > r2; r2++)
                  if (n3 = l3[r2], t4.indexOf(n3) >= 0) {
                    o3 = true;
                    break;
                  }
                if (!o3)
                  return null;
              }
              return i.isFunction(e4) ? c3.fn = e4 : e4.fn && (c3.fn = e4.fn), e4.beforeExec && (c3.beforeExec = e4.beforeExec), e4.init && (c3.init = e4.init), c3;
            }, r.d.al.on = function(t4, n3, o3, l3) {
              var s3, u2;
              l3.attrArgument && (r.option.removeAttribute && (n3.removeAttribute(l3.attrName), l3.fbElement && l3.fbElement.removeAttribute(l3.attrName)), u2 = l3.attrArgument.split(".")[0], s3 = function() {
              }, s3.prototype = c2(l3.attrArgument, e3[u2]), o3 && (s3.prototype.fn = l3.changeDetector.compile(o3, { no_return: true, input: ["$event", "$element", "$value"] })), s3.prototype.expression = o3, l3.fastBinding = function(e4, t5, n4, r2) {
                var o4, l4, c3, u3, f2, p2, h2;
                for (u3 = new s3(), u3.scope = e4, u3.element = t5, u3.cd = l4 = r2.changeDetector, o4 = function(e5) {
                  return a2(u3, e5);
                }, h2 = u3.eventList, f2 = 0, p2 = h2.length; p2 > f2; f2++)
                  c3 = h2[f2], i.on(t5, c3, o4);
                u3.initFn && u3.initFn(e4, t5, n4, r2), u3.unbind = function() {
                  var e5, n5, r3;
                  for (r3 = u3.eventList, e5 = 0, n5 = r3.length; n5 > e5; e5++)
                    c3 = r3[e5], i.off(t5, c3, o4);
                }, r2.changeDetector.watch("$destroy", u3.unbind);
              }, l3.fastBinding(t4, n3, o3, l3));
            }, l2 = { enter: 13, tab: 9, "delete": 46, backspace: 8, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39 }, e3 = { click: { stop: true, prevent: true }, dblclick: { stop: true, prevent: true }, submit: { stop: true, prevent: true }, keyup: { filterByKey: true }, keypress: { filterByKey: true }, keydown: { filterByKey: true } }, c2 = function(e4, t4) {
              var i2, o3, a3, c3, s3, u2, f2, p2, h2;
              for (t4 = t4 || {}, o3 = { attrArgument: e4, throttle: null, throttleTime: 0, debounce: null, debounceId: null, initFn: null, eventList: null, stop: t4.stop || false, prevent: t4.prevent || false, scan: true, modifiers: [] }, i2 = e4.split("."), a3 = i2[0], c3 = null, p2 = r.hooks.eventModifier[a3], p2 && (p2 = n2(p2), p2.event && (o3.eventList = p2.event, p2.fn && o3.modifiers.push(p2), p2.init && (o3.initFn = p2.init))), o3.eventList || (o3.eventList = [a3]), h2 = i2.slice(1), s3 = 0, f2 = h2.length; f2 > s3; s3++)
                u2 = h2[s3], "stop" !== u2 ? "prevent" !== u2 ? "nostop" !== u2 ? "noprevent" !== u2 ? "noscan" !== u2 ? "throttle-" !== u2.substring(0, 9) ? "debounce-" !== u2.substring(0, 9) ? (p2 = r.hooks.eventModifier[u2], p2 ? (p2 = n2(p2, o3.eventList), p2 && o3.modifiers.push(p2)) : t4.filterByKey && (null === c3 && (c3 = {}), l2[u2] && (u2 = l2[u2]), c3[u2] = true)) : o3.debounce = Number(u2.substring(9)) : o3.throttle = Number(u2.substring(9)) : o3.scan = false : o3.prevent = false : o3.stop = false : o3.prevent = true : o3.stop = true;
              return o3.filterByKey = c3, o3;
            }, o2 = function(e4, t4) {
              var n3;
              return n3 = e4.element, "checkbox" === n3.type ? n3.checked : "radio" === n3.type ? n3.value || n3.checked : t4.component ? t4.value : n3.value;
            }, t3 = function(e4, t4) {
              var n3, i2, a3, l3, c3, s3;
              for (s3 = e4.modifiers, a3 = 0, l3 = s3.length; l3 > a3; a3++)
                c3 = s3[a3], c3.beforeExec && c3.beforeExec(t4, e4);
              if (e4.fn)
                try {
                  e4.fn(e4.cd.locals, t4, e4.element, o2(e4, t4));
                } catch (i3) {
                  n3 = i3, r.exceptionHandler(n3, "Error in event: " + e4.attrArgument + " = " + e4.expression, { attr: e4.attrArgument, exp: e4.expression, scope: e4.scope, cd: e4.cd, element: e4.element, event: t4 });
                }
              e4.scan && e4.cd.scan();
            }, a2 = function(e4, n3) {
              var r2, i2, o3, a3, l3, c3;
              if (!e4.filterByKey || e4.filterByKey[n3.keyCode]) {
                if (e4.modifiers.length) {
                  for (r2 = function() {
                  }, r2.prototype = e4, i2 = new r2(), i2.stop = false, c3 = e4.modifiers, o3 = 0, a3 = c3.length; a3 > o3; o3++)
                    if (l3 = c3[o3], l3.fn && (l3.fn(n3, i2), i2.stop))
                      return;
                }
                e4.prevent && n3.preventDefault(), e4.stop && n3.stopPropagation(), e4.debounce ? (e4.debounceId && clearTimeout(e4.debounceId), e4.debounceId = setTimeout(function() {
                  return e4.debounceId = null, t3(e4, n3);
                }, e4.debounce)) : e4.throttle ? e4.throttleTime < Date.now() && (e4.throttleTime = Date.now() + e4.throttle, t3(e4, n3)) : t3(e4, n3);
              }
            };
          }(), r.hooks.attribute.unshift({ code: "directDirective", fn: function() {
            var e3 = this.attrName.match(/^(.*)\!$/);
            if (e3) {
              var t3 = e3[1].replace(/(-\w)/g, function(e4) {
                return e4.substring(1).toUpperCase();
              }), n2 = this.cd.locals[t3] || r.ctrl[t3] || r.option.globalController && window[t3];
              i.isFunction(n2) ? this.directive = function(e4, t4, i2, o2) {
                var a2 = o2.changeDetector;
                if (i2) {
                  for (var l2 = r.utils.parsArguments(i2), c2 = Array(l2.result.length), s2 = 0; s2 < l2.result.length; s2++)
                    c2[s2] = r.utils.compile.expression(l2.result[s2], { input: ["$element", "$env"] }).fn(a2.locals, t4, o2);
                  n2.apply(a2, c2);
                } else
                  n2.call(a2, e4, t4, i2, o2);
              } : (this.result = "noDirective", this.stop = true);
            }
          } }), r.hooks.attribute.unshift({ code: "elementVariable", fn: function() {
            var e3 = this.attrName.match(/^#([\w\.]*)$/);
            e3 && (this.directive = n, this.attrArgument = e3[1]);
          } }), r.d.al.value = function(e3, t3, n2, r2) {
            var i2, o2;
            return r2.fastBinding = true, i2 = function() {
              r2.setValue(n2, t3.value), o2.refresh(), r2.scan();
            }, r2.on(t3, "input", i2), r2.on(t3, "change", i2), o2 = r2.watch(n2, function(e4) {
              return null == e4 && (e4 = ""), t3.value = e4, "$scanNoChanges";
            });
          }, r.d.al.checked = function(e3, t3, n2, i2) {
            function o2(e4) {
              var n3 = i2.takeAttr(e4);
              return r.option.removeAttribute && (t3.removeAttribute(e4), i2.fbElement && i2.fbElement.removeAttribute(e4)), n3;
            }
            function a2(e4, t4) {
              var n3 = o2(t4);
              if (n3)
                return c2.opt[e4] = n3, true;
              var r2 = o2(":" + t4) || o2("al-attr." + t4);
              return r2 ? (c2.watch.push([r2, e4]), true) : void 0;
            }
            function l2(e4, t4, n3) {
              for (var r2 in t4.fbData.opt)
                e4[r2] = t4.fbData.opt[r2];
              for (var i3 = function(r3) {
                var i4 = r3[1];
                t4.watch(r3[0], function(t5) {
                  e4[i4] = t5, n3();
                });
              }, o3 = 0, a3 = t4.fbData.watch; o3 < a3.length; o3++) {
                var l3 = a3[o3];
                i3(l3);
              }
            }
            var c2 = i2.fbData = { opt: {}, watch: [] };
            a2("value", "value") ? i2.fastBinding = function(e4, t4, n3, r2) {
              function i3() {
                return t4.checked = a3 && a3.indexOf(c3.value) >= 0, "$scanNoChanges";
              }
              var o3, a3 = null, c3 = {};
              l2(c3, r2, i3), o3 = r2.watch(n3, function(e5) {
                a3 = e5, Array.isArray(a3) || (a3 = null), i3();
              }, { isArray: true }), r2.on(t4, "change", function() {
                if (a3 || (a3 = [], r2.setValue(n3, a3)), t4.checked)
                  a3.indexOf(c3.value) < 0 && a3.push(c3.value);
                else {
                  var e5 = a3.indexOf(c3.value);
                  e5 >= 0 && a3.splice(e5, 1);
                }
                o3.refresh(), r2.scan();
              });
            } : (a2("true", "true-value"), a2("false", "false-value"), i2.fastBinding = function(e4, t4, n3, r2) {
              function i3() {
                return t4.checked = o3 === c3["true"], "$scanNoChanges";
              }
              var o3, a3, c3 = { "true": true, "false": false };
              l2(c3, r2, i3), a3 = r2.watch(n3, function(e5) {
                o3 = e5, i3();
              }), r2.on(t4, "change", function() {
                o3 = t4.checked ? c3["true"] : c3["false"], r2.setValue(n3, o3), a3.refresh(), r2.scan();
              });
            }), i2.fastBinding(e3, t3, n2, i2);
          }, r.d.al["if"] = function(e3, t3, n2, o2) {
            var a2;
            return o2.elementCanBeRemoved ? (r.exceptionHandler(null, o2.attrName + " can't control element because of " + o2.elementCanBeRemoved, { scope: e3, element: t3, value: n2, env: o2 }), {}) : (o2.stopBinding = true, a2 = { item: null, childCD: null, base_element: null, top_element: null, start: function() {
              a2.prepare(), a2.watchModel();
            }, prepare: function() {
              a2.base_element = t3, a2.top_element = document.createComment(" " + o2.attrName + ": " + n2 + " "), i.before(t3, a2.top_element), i.remove(t3);
            }, updateDom: function(e4) {
              e4 ? a2.insertBlock(e4) : a2.removeBlock();
            }, removeBlock: function() {
              a2.childCD && (a2.childCD.destroy(), a2.childCD = null, a2.removeDom(a2.item), a2.item = null);
            }, insertBlock: function() {
              a2.childCD || (a2.item = a2.base_element.cloneNode(true), a2.insertDom(a2.top_element, a2.item), a2.childCD = o2.changeDetector["new"](), r.bind(a2.childCD, a2.item, { skip_attr: o2.skippedAttr(), elementCanBeRemoved: o2.attrName }));
            }, watchModel: function() {
              o2.watch(n2, a2.updateDom);
            }, removeDom: function(e4) {
              i.remove(e4);
            }, insertDom: function(e4, t4) {
              i.after(e4, t4);
            } });
          }, r.d.al.ifnot = function(e3, t3, n2, i2) {
            var o2;
            return o2 = r.d.al["if"](e3, t3, n2, i2), o2.updateDom = function(e4) {
              e4 ? o2.removeBlock() : o2.insertBlock();
            }, o2;
          }, r.directives.al.repeat = { restrict: "AM", init: function(e3, t3, n2, o2) {
            var a2, l2;
            return o2.elementCanBeRemoved ? (r.exceptionHandler(null, o2.attrName + " can't control element because of " + o2.elementCanBeRemoved, { scope: e3, element: t3, value: n2, env: o2 }), {}) : (o2.stopBinding = true, a2 = o2.changeDetector, l2 = { start: function() {
              l2.parsExpression(), l2.prepareDom(), l2.buildUpdateDom(), l2.watchModel();
            }, parsExpression: function() {
              var e4, t4;
              if (t4 = n2.trim(), "(" === t4[0])
                if (l2.objectMode = true, e4 = t4.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s+orderBy:(.+)\s*$/))
                  l2.objectKey = e4[1], l2.objectValue = e4[2], l2.expression = e4[3] + (" | toArray:" + l2.objectKey + "," + l2.objectValue + " | orderBy:" + e4[4]), l2.nameOfKey = "$item", l2.trackExpression = "$item." + l2.objectKey;
                else {
                  if (e4 = t4.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s*$/), !e4)
                    throw "Wrong repeat: " + n2;
                  l2.objectKey = e4[1], l2.objectValue = e4[2], l2.expression = e4[3] + (" | toArray:" + l2.objectKey + "," + l2.objectValue), l2.nameOfKey = "$item", l2.trackExpression = "$item." + l2.objectKey;
                }
              else {
                if (e4 = t4.match(/(.*) track by ([\w\.\$\(\)]+)/), e4 && (l2.trackExpression = e4[2], t4 = e4[1]), e4 = t4.match(/\s*(\w+)\s+in\s+(.+)/), !e4)
                  throw "Wrong repeat: " + n2;
                l2.nameOfKey = e4[1], l2.expression = e4[2];
              }
            }, watchModel: function() {
              var e4;
              e4 = l2.objectMode ? { deep: true } : { isArray: true }, l2.watch = a2.watch(l2.expression, l2.updateDom, e4);
            }, prepareDom: function() {
              var e4, a3, c2, s2, u2, f2;
              if (8 === t3.nodeType) {
                for (l2.top_element = t3, l2.element_list = a3 = [], e4 = t3.nextSibling; e4; ) {
                  if (8 === e4.nodeType && (u2 = e4.nodeValue, f2 = u2.trim().split(/\s+/), "/directive:" === f2[0] && "al-repeat" === f2[1])) {
                    o2.skipToElement = e4;
                    break;
                  }
                  a3.push(e4), e4 = e4.nextSibling;
                }
                for (c2 = 0, s2 = a3.length; s2 > c2; c2++)
                  e4 = a3[c2], i.remove(e4);
              } else
                l2.base_element = t3, l2.top_element = document.createComment(" " + n2 + " "), i.before(t3, l2.top_element), i.remove(t3), r.option.removeAttribute && t3.removeAttribute(o2.attrName);
            }, makeChild: function(e4, t4, n3) {
              var r2;
              return r2 = a2["new"](null, { locals: true }), l2.updateLocals(r2, e4, t4, n3), r2;
            }, updateLocals: function(e4, t4, n3, r2) {
              var i2;
              i2 = e4.locals, l2.objectMode ? (i2[l2.objectKey] = t4[l2.objectKey], i2[l2.objectValue] = t4[l2.objectValue]) : i2[l2.nameOfKey] = t4, i2.$index = n3, i2.$first = 0 === n3, i2.$last = n3 === r2.length - 1;
            }, rawUpdateDom: function(e4, t4) {
              var n3, r2, o3, a3, l3, c2;
              for (r2 = 0, l3 = e4.length; l3 > r2; r2++)
                n3 = e4[r2], i.remove(n3);
              for (a3 = 0, c2 = t4.length; c2 > a3; a3++)
                o3 = t4[a3], i.after(o3.after, o3.element);
            }, buildUpdateDom: function() {
              return l2.updateDom = function() {
                var e4, n3, i2, c2, s2, u2, f2, p2, h2, d2, m2, v2, g2;
                return m2 = [], u2 = 0, i2 = null, g2 = 0, v2 = o2.skippedAttr(), "$index" === l2.trackExpression ? (f2 = {}, h2 = function() {
                  return f2[u2] || null;
                }, p2 = function(e5) {
                  null != e5.$id && delete f2[e5.$id];
                }, d2 = function(e5, t4) {
                  t4.$id = u2, f2[u2] = t4;
                }) : l2.trackExpression ? (f2 = {}, e4 = function() {
                  var e5;
                  return e5 = a2.compile(l2.trackExpression, { input: ["$id", l2.nameOfKey] }), function(t4, n4) {
                    return e5(a2.scope, t4, n4);
                  };
                }(), n3 = function(e5) {
                  var t4;
                  return (t4 = e5.$alite_id) ? t4 : t4 = e5.$alite_id = r.utils.getId();
                }, h2 = function(t4) {
                  var r2;
                  return r2 = e4(n3, t4), null != r2 ? f2[r2] : null;
                }, p2 = function(e5) {
                  var t4;
                  t4 = e5.$id, null != t4 && delete f2[t4];
                }, d2 = function(t4, r2) {
                  var i3;
                  i3 = e4(n3, t4), r2.$id = i3, f2[i3] = r2;
                }) : window.Map ? (f2 = /* @__PURE__ */ new Map(), h2 = function(e5) {
                  return f2.get(e5);
                }, p2 = function(e5) {
                  f2["delete"](e5.item);
                }, d2 = function(e5, t4) {
                  f2.set(e5, t4);
                }) : (f2 = {}, h2 = function(e5) {
                  var t4;
                  return "object" != typeof e5 ? f2[e5] || null : (t4 = e5.$alite_id) ? f2[t4] : null;
                }, p2 = function(e5) {
                  var t4;
                  t4 = e5.$id, f2[t4] && (e5.$id = null, delete f2[t4]);
                }, d2 = function(e5, t4) {
                  var n4;
                  "object" == typeof e5 ? (n4 = r.utils.getId(), e5.$alite_id = n4, t4.$id = n4, f2[n4] = t4) : (t4.$id = e5, f2[e5] = t4);
                }), c2 = [], s2 = function(e5) {
                  var t4, n4;
                  if (n4 = typeof e5, "object" !== n4) {
                    if ("number" === n4)
                      t4 = Math.floor(e5);
                    else if ("string" === n4 && (t4 = Math.floor(e5), isNaN(t4)))
                      return [];
                    if (t4 < c2.length)
                      c2.length = t4;
                    else
                      for (; c2.length < t4; )
                        c2.push(c2.length);
                    return c2;
                  }
                  return e5 && e5.length ? e5 : [];
                }, l2.element_list ? function(e5) {
                  var t4, n4, i3, a3, c3, f3, g3, y2, b2, w2, x2, k2, D2, $2, C2, A2, E2, B2, T2, _2, N2, S, O, L, M, j, F, I, V, H, K, R, z, W, U, q, P, G;
                  for (M = s2(e5), A2 = l2.top_element, a3 = [], H = [], b2 = 0, E2 = m2.length; E2 > b2; b2++)
                    V = m2[b2], V.active = false;
                  for (u2 = D2 = 0, B2 = M.length; B2 > D2; u2 = ++D2)
                    x2 = M[u2], V = h2(x2), V && (V.active = true);
                  for (c3 = [], $2 = 0, T2 = m2.length; T2 > $2; $2++)
                    if (V = m2[$2], !V.active) {
                      for (V.prev && (V.prev.next = V.next), V.next && (V.next.prev = V.prev), p2(V), V.CD.destroy(), q = V.element_list, C2 = 0, _2 = q.length; _2 > C2; C2++)
                        f3 = q[C2], c3.push(f3);
                      V.next = null, V.prev = null, V.element_list = null;
                    }
                  for (t4 = [], z = null, U = null, W = false, g3 = l2.element_list.length - 1, u2 = j = 0, N2 = M.length; N2 > j; u2 = ++j)
                    if (x2 = M[u2], k2 = x2, V = h2(x2)) {
                      if (l2.updateLocals(V.CD, x2, u2, M), V.prev === U) {
                        if (W)
                          for (P = V.element_list, F = 0, S = P.length; S > F; F++)
                            f3 = P[F], a3.push({ element: f3, after: A2 }), A2 = f3;
                        U = V, A2 = V.element_list[g3], V.active = true, H.push(V);
                        continue;
                      }
                      for (V.prev = U, U && (U.next = V), G = V.element_list, K = 0, O = G.length; O > K; K++)
                        f3 = G[K], a3.push({ element: f3, after: A2 }), A2 = f3;
                      W = true, U = V, V.active = true, H.push(V);
                    } else
                      i3 = l2.makeChild(k2, u2, M), y2 = function() {
                        var e6, r2, o3, c4;
                        for (o3 = l2.element_list, c4 = [], r2 = 0, e6 = o3.length; e6 > r2; r2++)
                          n4 = o3[r2], f3 = n4.cloneNode(true), t4.push({ cd: i3, el: f3 }), a3.push({ element: f3, after: A2 }), c4.push(A2 = f3);
                        return c4;
                      }(), V = { CD: i3, element_list: y2, prev: U, next: null, active: true, item: x2 }, d2(x2, V), U ? (I = U.next, U.next = V, V.next = I, I && (I.prev = V)) : 0 === u2 && m2[0] && (I = m2[0], V.next = I, I.prev = V), U = V, H.push(V);
                  for (m2 = H, l2.rawUpdateDom(c3, a3), c3.length = 0, a3.length = 0, R = 0, L = t4.length; L > R; R++)
                    w2 = t4[R], r.bind(w2.cd, w2.el, { skip_attr: v2, elementCanBeRemoved: o2.attrName, noDomOptimization: true });
                } : function(e5) {
                  var n4, a3, c3, f3, y2, b2, w2, x2, k2, D2, $2, C2, A2, E2, B2, T2, _2, N2, S, O, L, M, j;
                  for (T2 = s2(e5), C2 = l2.top_element, g2++, c3 = [], S = [], n4 = [], O = null, M = null, L = false, u2 = b2 = 0, A2 = T2.length; A2 > b2; u2 = ++b2)
                    if (x2 = T2[u2], k2 = x2, N2 = h2(x2)) {
                      if (l2.updateLocals(N2.CD, x2, u2, T2), N2.prev === M) {
                        L && c3.push({ element: N2.element, after: M.element }), M = N2, C2 = N2.element, N2.version = g2, S.push(N2);
                        continue;
                      }
                      N2.prev = M, M && (M.next = N2), c3.push({ element: N2.element, after: C2 }), L = true, C2 = N2.element, M = N2, N2.version = g2, S.push(N2);
                    } else
                      a3 = l2.makeChild(k2, u2, T2), t3 = l2.base_element.cloneNode(true), null === i2 ? (y2 = l2.base_element.cloneNode(true), j = r.bind(a3, t3, { skip_attr: v2, elementCanBeRemoved: o2.attrName, noDomOptimization: true, fbElement: y2 }), i2 = r.core.fastBinding(j) || false, i2 && (l2.base_element = y2)) : n4.push({ cd: a3, el: t3 }), c3.push({ element: t3, after: C2 }), N2 = { CD: a3, element: t3, prev: M, next: null, version: g2, item: x2 }, C2 = t3, d2(x2, N2), M ? (_2 = M.next, M.next = N2, N2.next = _2, _2 && (_2.prev = N2)) : 0 === u2 && m2[0] && (_2 = m2[0], N2.next = _2, _2.prev = N2), M = N2, S.push(N2);
                  for (f3 = [], D2 = 0, E2 = m2.length; E2 > D2; D2++)
                    N2 = m2[D2], N2.version !== g2 && (N2.prev && (N2.prev.next = N2.next), N2.next && (N2.next.prev = N2.prev), p2(N2), N2.CD.destroy(), f3.push(N2.element), N2.next = null, N2.prev = null, N2.element = null);
                  for (m2 = S, l2.rawUpdateDom(f3, c3), f3.length = 0, c3.length = 0, $2 = 0, B2 = n4.length; B2 > $2; $2++)
                    w2 = n4[$2], i2 ? i2.bind(w2.cd, w2.el) : r.bind(w2.cd, w2.el, { skip_attr: v2, elementCanBeRemoved: o2.attrName, noDomOptimization: true });
                };
              }();
            } });
          } }, r.d.al.init = function(e3, t3, n2, i2) {
            var o2, a2, l2, c2, s2, u2;
            r.option.removeAttribute && (t3.removeAttribute(i2.attrName), i2.fbElement && i2.fbElement.removeAttribute(i2.attrName)), o2 = i2.changeDetector, u2 = ["$element"], "window" === i2.attrArgument && u2.push("window");
            try {
              s2 = o2.compile(n2, { no_return: true, input: u2 }), i2.fastBinding = c2 = function(e4, t4, n3, r2) {
                return s2(r2.changeDetector.locals, t4, window);
              }, c2(e3, t3, n2, i2);
            } catch (l3) {
              a2 = l3, r.exceptionHandler(a2, "al-init, error in expression: " + n2, { exp: n2, scope: e3, cd: o2, element: t3 }), i2.fastBinding = function() {
              };
            }
          }, r.d.al.app = { stopBinding: true }, r.d.al.stop = { restrict: "AE", stopBinding: true }, r.d.al.cloak = function(e3, t3, n2, r2) {
            t3.removeAttribute(r2.attrName), n2 && i.removeClass(t3, n2);
          }, r.d.al.html = { restrict: "AM", priority: 100, modifier: {}, link: function(e3, t3, n2, o2) {
            var a2;
            return o2.elementCanBeRemoved && 8 !== t3.nodeType ? (r.exceptionHandler(null, o2.attrName + " can't control element because of " + o2.elementCanBeRemoved, { scope: e3, element: t3, value: n2, env: o2 }), {}) : (o2.stopBinding = true, a2 = { baseElement: null, topElement: null, activeElement: null, childCD: null, name: n2, watchMode: null, start: function() {
              a2.parsing(), a2.prepare(), a2.watchModel();
            }, parsing: function() {
              var i2, l2, c2, s2;
              if (o2.attrArgument)
                for (s2 = o2.attrArgument.split("."), i2 = 0, l2 = s2.length; l2 > i2; i2++)
                  c2 = s2[i2], "literal" !== c2 ? "tpl" !== c2 ? r.d.al.html.modifier[c2] && r.d.al.html.modifier[c2](a2, { scope: e3, element: t3, inputName: n2, env: o2 }) : a2.watchMode = "tpl" : a2.watchMode = "literal";
            }, prepare: function() {
              8 === t3.nodeType ? (a2.baseElement = null, a2.topElement = t3, o2.watch("$destroy", a2.removeBlock)) : (a2.baseElement = t3, a2.topElement = document.createComment(" " + o2.attrName + ": " + n2 + " "), i.before(t3, a2.topElement), i.remove(t3));
            }, removeBlock: function() {
              var e4, t4, n3, r2;
              if (a2.childCD && (a2.childCD.destroy(), a2.childCD = null), a2.activeElement) {
                if (Array.isArray(a2.activeElement))
                  for (r2 = a2.activeElement, t4 = 0, n3 = r2.length; n3 > t4; t4++)
                    e4 = r2[t4], a2.removeDom(e4);
                else
                  a2.removeDom(a2.activeElement);
                a2.activeElement = null;
              }
            }, insertBlock: function(e4) {
              var t4, n3, i2;
              if (a2.baseElement)
                a2.activeElement = a2.baseElement.cloneNode(false), a2.activeElement.innerHTML = e4, a2.insertDom(a2.topElement, a2.activeElement), a2.childCD = o2.changeDetector["new"](), r.bind(a2.childCD, a2.activeElement, { skip_attr: o2.skippedAttr(), elementCanBeRemoved: o2.attrName });
              else
                for (i2 = document.createElement("body"), i2.innerHTML = e4, t4 = a2.topElement, a2.activeElement = [], a2.childCD = o2.changeDetector["new"](); n3 = i2.firstChild; )
                  a2.insertDom(t4, n3), t4 = n3, a2.activeElement.push(n3), r.bind(a2.childCD, t4, { skip_attr: o2.skippedAttr(), elementCanBeRemoved: o2.attrName });
            }, updateDom: function(e4) {
              a2.removeBlock(), e4 && a2.insertBlock(e4);
            }, removeDom: function(e4) {
              i.remove(e4);
            }, insertDom: function(e4, t4) {
              i.after(e4, t4);
            }, watchModel: function() {
              "literal" === a2.watchMode ? a2.updateDom(a2.name) : "tpl" === a2.watchMode ? o2.watchText(a2.name, a2.updateDom) : o2.watch(a2.name, a2.updateDom);
            } });
          } }, r.d.al.html.modifier.id = function(e3) {
            return e3.updateDom = function(t3) {
              var n2, r2;
              e3.removeBlock(), r2 = document.getElementById(t3), r2 && (n2 = r2.innerHTML, n2 && e3.insertBlock(n2));
            };
          }, r.d.al.html.modifier.url = function(e3) {
            return e3.loadHtml = function(e4) {
              i.ajax(e4);
            }, e3.updateDom = function(t3) {
              return t3 ? void e3.loadHtml({ cache: true, url: t3, success: function(t4) {
                e3.removeBlock(), e3.insertBlock(t4);
              }, error: e3.removeBlock }) : void e3.removeBlock();
            };
          }, r.d.al.html.modifier.scope = function(e3, t3) {
            var n2, i2, o2, a2;
            if (n2 = e3.name.split(":"), 2 === n2.length)
              e3.name = n2[0], a2 = n2[1];
            else {
              if (n2 = e3.name.match(/(.+)\:\s*\:\:([\d\w]+)$/))
                o2 = true;
              else if (o2 = false, n2 = e3.name.match(/(.+)\:\s*([\.\w]+)$/), !n2)
                throw "Wrong expression " + e3.name;
              e3.name = n2[1], a2 = n2[2];
            }
            return i2 = "outer", e3.insertBlock = function(n3) {
              var l2, c2, s2;
              e3.activeElement = e3.baseElement.cloneNode(false), e3.activeElement.innerHTML = n3, e3.insertDom(e3.topElement, e3.activeElement), c2 = t3.env.changeDetector, l2 = e3.childCD = c2["new"](null, { locals: true }), l2.locals[i2] = null, s2 = c2.watch(a2, function(e4) {
                return l2.locals[i2] = e4;
              }, { oneTime: o2 }), e3.childCD.watch("$destroy", function() {
                return s2.stop();
              }), r.bind(e3.childCD, e3.activeElement, { skip_attr: t3.env.skippedAttr() });
            };
          }, r.d.al.html.modifier.inline = function(e3, t3) {
            var n2;
            return n2 = e3.prepare, e3.prepare = function() {
              return n2(), t3.env.setValue(e3.name, e3.baseElement.innerHTML);
            };
          }, r.d.al.radio = function(e3, t3, n2, r2) {
            var i2, o2, a2;
            return i2 = r2.takeAttr("al-value"), o2 = i2 ? r2.eval(i2) : r2.takeAttr("value"), r2.on(t3, "change", function() {
              r2.setValue(n2, o2), a2.refresh(), r2.scan();
            }), a2 = r2.watch(n2, function(e4) {
              return t3.checked = o2 === e4, "$scanNoChanges";
            });
          }, function() {
            var e3;
            return window.Map ? (e3 = function() {
              return this.idByItem = /* @__PURE__ */ new Map(), this.itemById = {}, this.index = 1, this;
            }, e3.prototype.acquire = function(e4) {
              var t3;
              return t3 = "i" + this.index++, this.idByItem.set(e4, t3), this.itemById[t3] = e4, t3;
            }, e3.prototype.release = function(e4) {
              var t3;
              t3 = this.itemById[e4], delete this.itemById[e4], this.idByItem["delete"](t3);
            }, e3.prototype.replace = function(e4, t3) {
              var n2;
              n2 = this.itemById[e4], this.idByItem["delete"](n2), this.idByItem.set(t3, e4), this.itemById[e4] = t3;
            }, e3.prototype.getId = function(e4) {
              return this.idByItem.get(e4);
            }, e3.prototype.getItem = function(e4) {
              return this.itemById[e4] || null;
            }) : (e3 = function() {
              return this.itemById = { "i#null": null }, this;
            }, e3.prototype.acquire = function(e4) {
              var t3;
              return null === e4 ? "i#null" : ("object" == typeof e4 ? (t3 = e4.$alite_id, t3 || (e4.$alite_id = t3 = r.utils.getId())) : t3 = "" + e4, this.itemById[t3] = e4, t3);
            }, e3.prototype.release = function(e4) {
              delete this.itemById[e4];
            }, e3.prototype.replace = function(e4, t3) {
              this.itemById[e4] = t3;
            }, e3.prototype.getId = function(e4) {
              return null === e4 ? "i#null" : "object" == typeof e4 ? e4.$alite_id : "" + e4;
            }, e3.prototype.getItem = function(e4) {
              return this.itemById[e4] || null;
            }), r.d.al.select = function(t3, n2, i2, o2) {
              var a2, l2, c2, s2, u2, f2;
              return a2 = o2.changeDetector["new"](), o2.stopBinding = true, a2.$select = { mapper: c2 = new e3() }, l2 = null, a2.$select.change = function() {
                return r.nextTick(function() {
                  return u2(l2);
                });
              }, u2 = function(e4) {
                var t4;
                return t4 = c2.getId(e4), t4 ? n2.value = t4 : n2.selectedIndex = -1;
              }, f2 = a2.watch(i2, function(e4) {
                return l2 = e4, u2(e4);
              }), s2 = function(e4) {
                return l2 = c2.getItem(e4.target.value), a2.setValue(i2, l2), f2.refresh(), a2.scan();
              }, o2.on(n2, "input", s2), o2.on(n2, "change", s2), r.bind(a2, n2, { skip_attr: o2.skippedAttr() });
            }, r.d.al.option = function(e4, t3, n2, i2) {
              var o2, a2, l2, c2, s2, u2, f2;
              for (o2 = f2 = i2.changeDetector, a2 = c2 = 0; 4 >= c2 && !(u2 = f2.$select); a2 = ++c2)
                f2 = f2.parent || {};
              return u2 ? (s2 = u2.mapper, l2 = null, o2.watch(n2, function(e5) {
                l2 ? s2.getId(e5) !== l2 ? (s2.release(l2), l2 = s2.acquire(e5), t3.value = l2, u2.change()) : s2.replace(l2, e5) : (l2 = s2.acquire(e5), t3.value = l2, u2.change());
              }), void o2.watch("$destroy", function() {
                return s2.release(l2), u2.change();
              })) : void r.exceptionHandler("", "Error in al-option - al-select is not found", { cd: o2, scope: o2.scope, element: t3, value: n2 });
            };
          }(), function() {
            var e3;
            return r.hooks.attribute.unshift({ code: "attribute", fn: function() {
              var e4, t3;
              e4 = this.attrName.match(/^\:([\w\.\-]+)$/), e4 && (t3 = e4[1], "html" === t3.split(".")[0] ? (this.name = "html", t3 = t3.substring(5)) : this.name = "attr", this.ns = "al", this.attrArgument = t3);
            } }), e3 = { checked: "checked", readonly: "readOnly", value: "value", selected: "selected", muted: "muted", disabled: "disabled", hidden: "hidden" }, r.d.al.attr = function(t3, n2, o2, a2) {
              var l2, c2, s2, u2, f2, p2, h2, d2, m2, v2;
              if (a2.attrArgument) {
                if (s2 = a2.attrArgument.split("."), c2 = s2[0], h2 = e3[c2], f2 = s2.indexOf("tpl") > 0, r.option.removeAttribute && (n2.removeAttribute(a2.attrName), a2.fbElement && a2.fbElement.removeAttribute(a2.attrName)), l2 = { readOnly: true }, d2 = null, "style" === c2) {
                  if (!s2[1])
                    throw "Style is not declared";
                  m2 = s2[1].replace(/(-\w)/g, function(e4) {
                    return e4.substring(1).toUpperCase();
                  }), d2 = function(e4, t4) {
                    return null == t4 && (t4 = ""), e4.style[m2] = t4;
                  };
                } else
                  "class" === c2 && s2.length > 1 ? (f2 = false, p2 = s2.slice(1), d2 = function(e4, t4) {
                    var n3, r2, o3, a3, l3;
                    if (t4)
                      for (r2 = 0, a3 = p2.length; a3 > r2; r2++)
                        n3 = p2[r2], i.addClass(e4, n3);
                    else
                      for (o3 = 0, l3 = p2.length; l3 > o3; o3++)
                        n3 = p2[o3], i.removeClass(e4, n3);
                  }) : "focus" === c2 ? d2 = function(e4, t4) {
                    return t4 ? e4.focus() : e4.blur();
                  } : h2 ? d2 = function(e4, t4) {
                    return void 0 === t4 && (t4 = null), e4[h2] !== t4 ? e4[h2] = t4 : void 0;
                  } : (l2.element = n2, l2.elementAttr = c2);
                v2 = f2 ? "watchText" : "watch", u2 = d2 ? function(e4, t4, n3, r2) {
                  return r2.changeDetector[v2](o2, function(e5) {
                    return d2(t4, e5);
                  }, l2);
                } : function(e4, t4, n3, r2) {
                  return r2.changeDetector[v2](o2, null, { readOnly: true, element: t4, elementAttr: c2 });
                }, u2(t3, n2, o2, a2), a2.fastBinding = u2;
              }
            };
          }(), r.d.al.model = function(e3, t3, n2, i2) {
            var o2;
            if (o2 = t3.nodeName.toLowerCase(), "select" === o2)
              return r.d.al.select.call(this, e3, t3, n2, i2);
            if ("input" === o2) {
              if ("checkbox" === t3.type)
                return r.d.al.checked.call(this, e3, t3, n2, i2);
              if ("radio" === t3.type)
                return r.d.al.radio.call(this, e3, t3, n2, i2);
            }
            return r.d.al.value.call(this, e3, t3, n2, i2);
          }, r.filters.slice = function(e3, t3, n2) {
            return e3 ? n2 ? e3.slice(t3, n2) : e3.slice(t3) : null;
          }, function() {
            var e3;
            return e3 = function(e4) {
              return 10 > e4 ? "0" + e4 : "" + e4;
            }, r.filters.date = function(t3, n2) {
              var r2, i2, o2, a2, l2;
              if (!t3)
                return "";
              for (t3 = new Date(t3), l2 = [[/yyyy/g, t3.getFullYear()], [/mm/g, e3(t3.getMonth() + 1)], [/dd/g, e3(t3.getDate())], [/HH/g, e3(t3.getHours())], [/MM/g, e3(t3.getMinutes())], [/SS/g, e3(t3.getSeconds())]], a2 = n2, i2 = 0, o2 = l2.length; o2 > i2; i2++)
                r2 = l2[i2], a2 = a2.replace(r2[0], r2[1]);
              return a2;
            };
          }(), r.filters.json = { watchMode: "deep", fn: function(e3) {
            return JSON.stringify(r.utils.clone(e3), null, 4);
          } }, r.filters.filter = function(e3, t3, n2) {
            var r2, i2, o2, a2, l2, c2, s2, u2, f2, p2, h2, d2;
            if (2 === arguments.length)
              l2 = null, d2 = t3;
            else {
              if (3 !== arguments.length)
                return e3;
              l2 = t3, d2 = n2;
            }
            if (!e3 || null == d2 || "" === d2)
              return e3;
            if (u2 = [], p2 = ("" + d2).toLowerCase(), l2)
              for (i2 = 0, c2 = e3.length; c2 > i2; i2++)
                r2 = e3[i2], r2[l2] === d2 ? u2.push(r2) : (f2 = ("" + r2[l2]).toLowerCase(), f2.indexOf(p2) >= 0 && u2.push(r2));
            else
              for (o2 = 0, s2 = e3.length; s2 > o2; o2++) {
                r2 = e3[o2];
                for (a2 in r2)
                  h2 = r2[a2], h2 === d2 ? u2.push(r2) : (f2 = ("" + h2).toLowerCase(), f2.indexOf(p2) >= 0 && u2.push(r2));
              }
            return u2;
          }, r.filters.orderBy = function(e3, t3, n2) {
            return !e3 instanceof Array ? null : (n2 = n2 ? 1 : -1, e3.sort(function(e4, r2) {
              return e4[t3] < r2[t3] ? -n2 : e4[t3] > r2[t3] ? n2 : 0;
            }));
          }, r.filters.throttle = { init: function(e3, t3, n2) {
            var r2;
            return t3 = Number(t3), r2 = null, { onChange: function(e4) {
              return r2 && clearTimeout(r2), r2 = setTimeout(function() {
                return r2 = null, n2.setValue(e4), n2.changeDetector.scan();
              }, t3);
            } };
          } }, r.filters.toArray = { init: function(e3, t3, n2) {
            var r2, i2, o2;
            return 2 === n2.conf.args.length ? (r2 = n2.conf.args[0], o2 = n2.conf.args[1]) : (r2 = "key", o2 = "value"), i2 = [], { watchMode: "deep", onChange: function(e4) {
              var t4, a2, l2;
              i2.length = 0;
              for (a2 in e4)
                l2 = e4[a2], t4 = {}, t4[r2] = a2, t4[o2] = l2, i2.push(t4);
              return n2.setValue(i2);
            } };
          } }, r.filters.storeTo = { init: function(e3, t3, n2) {
            return { onChange: function(e4) {
              return n2.changeDetector.setValue(t3, e4), n2.setValue(e4);
            } };
          } }, r.text["="] = function(e3, t3, n2, i2) {
            var o2;
            if (o2 = r.utils.compile.expression(t3), o2.filters)
              throw "Conflict: bindonce and filters, use one-time binding";
            i2["finally"](o2.fn(i2.changeDetector.locals));
          }, r.text["::"] = function(e3, t3, n2, r2) {
            r2.changeDetector.watch(t3, function(e4) {
              return r2["finally"](e4);
            }, { oneTime: true });
          }, function() {
            function e3(e4) {
              return e4.replace(/(-\w)/g, function(e5) {
                return e5.substring(1).toUpperCase();
              });
            }
            function t3(t4) {
              var r2, i2 = t4.listener, o2 = t4.childCD, a2 = t4.name, l2 = t4.parentName, c2 = t4.parentCD, s2 = {};
              if (a2 = e3(a2), i2 && i2 !== true)
                if (n2.isFunction(i2))
                  r2 = i2;
                else {
                  if (r2 = i2.onChange, "copy" === i2 || "copy" === i2.watchMode)
                    return void (r2 ? r2(l2) : o2.scope[a2] = l2);
                  ("array" === i2 || "array" === i2.watchMode) && (s2.isArray = true), ("deep" === i2 || "deep" === i2.watchMode) && (s2.deep = true);
                }
              r2 || (r2 = function(e4) {
                o2.scope[a2] = e4, o2.scan();
              }), c2.watch(l2, r2, s2);
            }
            var n2 = r.f$;
            r.component = function(i2, o2) {
              var a2, l2, c2 = i2.match(/^(\w+)[\-](.+)$/);
              c2 ? (a2 = c2[1], l2 = c2[2]) : (a2 = "$global", l2 = i2), l2 = e3(l2), r.d[a2] || (r.d[a2] = {}), r.d[a2][l2] = { restrict: "E", stopBinding: true, priority: r.priority.$component, init: function(e4, a3, l3, c3) {
                function s2(e5, n3) {
                  var r2 = ":" + e5, i3 = d2.takeAttr(r2);
                  if (!i3) {
                    if (i3 = d2.takeAttr(e5), !i3)
                      return;
                    n3 = "copy";
                  }
                  t3({ childCD: h2, listener: n3, name: e5, parentName: i3, parentCD: p2 });
                }
                function u2() {
                  N2 || p2.digest(), r.bind(h2, a3, { skip: true });
                }
                var f2 = { $sendEvent: function(e5, t4) {
                  var n3 = new CustomEvent(e5);
                  n3.value = t4, n3.component = true, a3.dispatchEvent(n3);
                } }, p2 = c3.changeDetector["new"](), h2 = r.ChangeDetector(f2), d2 = new b({ element: a3, attributes: c3.attributes, changeDetector: h2, parentChangeDetector: p2 });
                try {
                  var m2 = o2.call(h2, f2, a3, d2) || {};
                } catch (v2) {
                  return void r.exceptionHandler(v2, "Error in component <" + i2 + ">: ", { element: a3, scope: f2, cd: h2 });
                }
                m2.onStart && h2.watch("$finishBinding", function() {
                  m2.onStart(), h2.scan();
                });
                var g2 = false;
                p2.watch("$destroy", function() {
                  g2 = true, h2.destroy();
                }), h2.watch("$destroy", function() {
                  m2.onDestroy && m2.onDestroy(), g2 || p2.destroy();
                });
                for (var y2 = 0, w2 = a3.attributes; y2 < w2.length; y2++) {
                  var x2 = w2[y2];
                  if ("#" === x2.name[0]) {
                    var k2 = x2.name.slice(1);
                    if (k2) {
                      m2.api ? p2.setValue(k2, m2.api) : p2.setValue(k2, f2);
                      break;
                    }
                  }
                }
                if (m2.props)
                  if (Array.isArray(m2.props))
                    for (var D2 = 0, $2 = m2.props; D2 < $2.length; D2++) {
                      var C2 = $2[D2];
                      s2(C2, true);
                    }
                  else
                    for (var C2 in m2.props)
                      s2(C2, m2.props[C2]);
                else
                  for (var A2 = 0, E2 = a3.attributes; A2 < E2.length; A2++) {
                    var x2 = E2[A2], B2 = x2.name, T2 = x2.value;
                    if (T2) {
                      var _2 = B2.match(/^\:(.*)$/);
                      _2 && t3({ childCD: h2, name: _2[1], parentName: T2, parentCD: p2 });
                    }
                  }
                var N2 = false;
                if (p2.watch("$onScanOnce", function() {
                  return N2 = true;
                }), m2.template && (a3.innerHTML = m2.template), m2.templateId) {
                  var S = document.getElementById(m2.templateId);
                  if (!S)
                    throw "No template " + m2.templateId;
                  a3.innerHTML = S.innerHTML;
                }
                m2.templateUrl ? n2.ajax({ url: m2.templateUrl, cache: true, success: function(e5) {
                  a3.innerHTML = e5, u2(true);
                }, error: function() {
                  console.error("Template is not loaded", m2.templateUrl);
                } }) : u2();
              } };
            };
          }(), r;
        }
        var t = e();
        t.makeInstance = e, "function" == typeof alightInitCallback ? alightInitCallback(t) : "function" == typeof define ? define(function() {
          return t;
        }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t : (t.option.globalController = true, window.alight = t, t.f$.ready(t.bootstrap));
      }();
    }
  });

  // node_modules/rete-alight-render-plugin/build/alight-render-plugin.min.js
  var require_alight_render_plugin_min = __commonJS({
    "node_modules/rete-alight-render-plugin/build/alight-render-plugin.min.js"(exports, module) {
      !function(t) {
        "use strict";
        var l, e = Object.prototype, u = e.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, o = n.iterator || "@@iterator", r = n.asyncIterator || "@@asyncIterator", i = n.toStringTag || "@@toStringTag", a = "object" == typeof module, c = t.regeneratorRuntime;
        if (c)
          a && (module.exports = c);
        else {
          (c = t.regeneratorRuntime = a ? module.exports : {}).wrap = x;
          var d = "suspendedStart", p = "suspendedYield", h = "executing", f = "completed", v = {}, s = {};
          s[o] = function() {
            return this;
          };
          var g = Object.getPrototypeOf, y = g && g(g(S([])));
          y && y !== e && u.call(y, o) && (s = y);
          var m = L.prototype = b.prototype = Object.create(s);
          k.prototype = m.constructor = L, L.constructor = k, L[i] = k.displayName = "GeneratorFunction", c.isGeneratorFunction = function(t2) {
            var e2 = "function" == typeof t2 && t2.constructor;
            return !!e2 && (e2 === k || "GeneratorFunction" === (e2.displayName || e2.name));
          }, c.mark = function(t2) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t2, L) : (t2.__proto__ = L, i in t2 || (t2[i] = "GeneratorFunction")), t2.prototype = Object.create(m), t2;
          }, c.awrap = function(t2) {
            return { __await: t2 };
          }, E(_.prototype), _.prototype[r] = function() {
            return this;
          }, c.AsyncIterator = _, c.async = function(t2, e2, n2, r2) {
            var o2 = new _(x(t2, e2, n2, r2));
            return c.isGeneratorFunction(e2) ? o2 : o2.next().then(function(t3) {
              return t3.done ? t3.value : o2.next();
            });
          }, E(m), m[i] = "Generator", m[o] = function() {
            return this;
          }, m.toString = function() {
            return "[object Generator]";
          }, c.keys = function(n2) {
            var r2 = [];
            for (var t2 in n2)
              r2.push(t2);
            return r2.reverse(), function t3() {
              for (; r2.length; ) {
                var e2 = r2.pop();
                if (e2 in n2)
                  return t3.value = e2, t3.done = false, t3;
              }
              return t3.done = true, t3;
            };
          }, c.values = S, O.prototype = { constructor: O, reset: function(t2) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = false, this.delegate = null, this.method = "next", this.arg = l, this.tryEntries.forEach(N), !t2)
              for (var e2 in this)
                "t" === e2.charAt(0) && u.call(this, e2) && !isNaN(+e2.slice(1)) && (this[e2] = l);
          }, stop: function() {
            this.done = true;
            var t2 = this.tryEntries[0].completion;
            if ("throw" === t2.type)
              throw t2.arg;
            return this.rval;
          }, dispatchException: function(n2) {
            if (this.done)
              throw n2;
            var r2 = this;
            function t2(t3, e3) {
              return i2.type = "throw", i2.arg = n2, r2.next = t3, e3 && (r2.method = "next", r2.arg = l), !!e3;
            }
            for (var e2 = this.tryEntries.length - 1; 0 <= e2; --e2) {
              var o2 = this.tryEntries[e2], i2 = o2.completion;
              if ("root" === o2.tryLoc)
                return t2("end");
              if (o2.tryLoc <= this.prev) {
                var a2 = u.call(o2, "catchLoc"), c2 = u.call(o2, "finallyLoc");
                if (a2 && c2) {
                  if (this.prev < o2.catchLoc)
                    return t2(o2.catchLoc, true);
                  if (this.prev < o2.finallyLoc)
                    return t2(o2.finallyLoc);
                } else if (a2) {
                  if (this.prev < o2.catchLoc)
                    return t2(o2.catchLoc, true);
                } else {
                  if (!c2)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o2.finallyLoc)
                    return t2(o2.finallyLoc);
                }
              }
            }
          }, abrupt: function(t2, e2) {
            for (var n2 = this.tryEntries.length - 1; 0 <= n2; --n2) {
              var r2 = this.tryEntries[n2];
              if (r2.tryLoc <= this.prev && u.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                var o2 = r2;
                break;
              }
            }
            o2 && ("break" === t2 || "continue" === t2) && o2.tryLoc <= e2 && e2 <= o2.finallyLoc && (o2 = null);
            var i2 = o2 ? o2.completion : {};
            return i2.type = t2, i2.arg = e2, o2 ? (this.method = "next", this.next = o2.finallyLoc, v) : this.complete(i2);
          }, complete: function(t2, e2) {
            if ("throw" === t2.type)
              throw t2.arg;
            return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), v;
          }, finish: function(t2) {
            for (var e2 = this.tryEntries.length - 1; 0 <= e2; --e2) {
              var n2 = this.tryEntries[e2];
              if (n2.finallyLoc === t2)
                return this.complete(n2.completion, n2.afterLoc), N(n2), v;
            }
          }, catch: function(t2) {
            for (var e2 = this.tryEntries.length - 1; 0 <= e2; --e2) {
              var n2 = this.tryEntries[e2];
              if (n2.tryLoc === t2) {
                var r2 = n2.completion;
                if ("throw" === r2.type) {
                  var o2 = r2.arg;
                  N(n2);
                }
                return o2;
              }
            }
            throw new Error("illegal catch attempt");
          }, delegateYield: function(t2, e2, n2) {
            return this.delegate = { iterator: S(t2), resultName: e2, nextLoc: n2 }, "next" === this.method && (this.arg = l), v;
          } };
        }
        function x(t2, e2, n2, r2) {
          var i2, a2, c2, l2, o2 = e2 && e2.prototype instanceof b ? e2 : b, u2 = Object.create(o2.prototype), s2 = new O(r2 || []);
          return u2._invoke = (i2 = t2, a2 = n2, c2 = s2, l2 = d, function(t3, e3) {
            if (l2 === h)
              throw new Error("Generator is already running");
            if (l2 === f) {
              if ("throw" === t3)
                throw e3;
              return A();
            }
            for (c2.method = t3, c2.arg = e3; ; ) {
              var n3 = c2.delegate;
              if (n3) {
                var r3 = C(n3, c2);
                if (r3) {
                  if (r3 === v)
                    continue;
                  return r3;
                }
              }
              if ("next" === c2.method)
                c2.sent = c2._sent = c2.arg;
              else if ("throw" === c2.method) {
                if (l2 === d)
                  throw l2 = f, c2.arg;
                c2.dispatchException(c2.arg);
              } else
                "return" === c2.method && c2.abrupt("return", c2.arg);
              l2 = h;
              var o3 = w(i2, a2, c2);
              if ("normal" === o3.type) {
                if (l2 = c2.done ? f : p, o3.arg === v)
                  continue;
                return { value: o3.arg, done: c2.done };
              }
              "throw" === o3.type && (l2 = f, c2.method = "throw", c2.arg = o3.arg);
            }
          }), u2;
        }
        function w(t2, e2, n2) {
          try {
            return { type: "normal", arg: t2.call(e2, n2) };
          } catch (t3) {
            return { type: "throw", arg: t3 };
          }
        }
        function b() {
        }
        function k() {
        }
        function L() {
        }
        function E(t2) {
          ["next", "throw", "return"].forEach(function(e2) {
            t2[e2] = function(t3) {
              return this._invoke(e2, t3);
            };
          });
        }
        function _(l2) {
          var e2;
          this._invoke = function(n2, r2) {
            function t2() {
              return new Promise(function(t3, e3) {
                !function e4(t4, n3, r3, o2) {
                  var i2 = w(l2[t4], l2, n3);
                  if ("throw" !== i2.type) {
                    var a2 = i2.arg, c2 = a2.value;
                    return c2 && "object" == typeof c2 && u.call(c2, "__await") ? Promise.resolve(c2.__await).then(function(t5) {
                      e4("next", t5, r3, o2);
                    }, function(t5) {
                      e4("throw", t5, r3, o2);
                    }) : Promise.resolve(c2).then(function(t5) {
                      a2.value = t5, r3(a2);
                    }, o2);
                  }
                  o2(i2.arg);
                }(n2, r2, t3, e3);
              });
            }
            return e2 = e2 ? e2.then(t2, t2) : t2();
          };
        }
        function C(t2, e2) {
          var n2 = t2.iterator[e2.method];
          if (n2 === l) {
            if (e2.delegate = null, "throw" === e2.method) {
              if (t2.iterator.return && (e2.method = "return", e2.arg = l, C(t2, e2), "throw" === e2.method))
                return v;
              e2.method = "throw", e2.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return v;
          }
          var r2 = w(n2, t2.iterator, e2.arg);
          if ("throw" === r2.type)
            return e2.method = "throw", e2.arg = r2.arg, e2.delegate = null, v;
          var o2 = r2.arg;
          return o2 ? o2.done ? (e2[t2.resultName] = o2.value, e2.next = t2.nextLoc, "return" !== e2.method && (e2.method = "next", e2.arg = l), e2.delegate = null, v) : o2 : (e2.method = "throw", e2.arg = new TypeError("iterator result is not an object"), e2.delegate = null, v);
        }
        function j(t2) {
          var e2 = { tryLoc: t2[0] };
          1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
        }
        function N(t2) {
          var e2 = t2.completion || {};
          e2.type = "normal", delete e2.arg, t2.completion = e2;
        }
        function O(t2) {
          this.tryEntries = [{ tryLoc: "root" }], t2.forEach(j, this), this.reset(true);
        }
        function S(e2) {
          if (e2) {
            var t2 = e2[o];
            if (t2)
              return t2.call(e2);
            if ("function" == typeof e2.next)
              return e2;
            if (!isNaN(e2.length)) {
              var n2 = -1, r2 = function t3() {
                for (; ++n2 < e2.length; )
                  if (u.call(e2, n2))
                    return t3.value = e2[n2], t3.done = false, t3;
                return t3.value = l, t3.done = true, t3;
              };
              return r2.next = r2;
            }
          }
          return { next: A };
        }
        function A() {
          return { value: l, done: true };
        }
      }(function() {
        return this;
      }() || Function("return this")()), function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require_alight()) : "function" == typeof define && define.amd ? define(["alight"], e) : t.AlightRenderPlugin = e(t.alight);
      }(exports, function(t) {
        "use strict";
        function s(t2) {
          return t2.toLowerCase().replace(/ /g, "-");
        }
        return function(t2) {
          if (t2 && "undefined" != typeof window) {
            var e = document.createElement("style");
            e.setAttribute("type", "text/css"), e.innerHTML = t2, document.head.appendChild(e);
          }
        }(".node {\n  background: rgba(110, 136, 255, 0.8);\n  border: 2px solid #4e58bf;\n  border-radius: 10px;\n  cursor: pointer;\n  min-width: 180px;\n  height: auto;\n  padding-bottom: 6px;\n  box-sizing: content-box;\n  position: relative;\n  user-select: none; }\n  .node:hover {\n    background: rgba(130, 153, 255, 0.8); }\n  .node.selected {\n    background: #ffd92c;\n    border-color: #e3c000; }\n  .node .title {\n    color: white;\n    font-family: sans-serif;\n    font-size: 18px;\n    padding: 8px; }\n  .node .socket {\n    display: inline-block;\n    cursor: pointer;\n    border: 1px solid white;\n    border-radius: 12px;\n    width: 24px;\n    height: 24px;\n    margin: 6px;\n    vertical-align: middle;\n    background: #96b38a;\n    z-index: 2;\n    box-sizing: border-box; }\n    .node .socket:hover {\n      border-width: 4px; }\n    .node .socket.multiple {\n      border-color: yellow; }\n    .node .socket.output {\n      margin-right: -12px; }\n    .node .socket.input {\n      margin-left: -12px; }\n  .node .input-title, .node .output-title {\n    vertical-align: middle;\n    color: white;\n    display: inline-block;\n    font-family: sans-serif;\n    font-size: 14px;\n    margin: 6px;\n    line-height: 24px; }\n  .node .input-control {\n    z-index: 1;\n    width: calc(100% - 36px);\n    vertical-align: middle;\n    display: inline-block; }\n  .node .control {\n    padding: 6px 18px; }\n  .node select, .node input {\n    width: 100%;\n    border-radius: 30px;\n    background-color: white;\n    padding: 2px 6px;\n    border: 1px solid #999;\n    font-size: 110%;\n    width: 170px; }\n"), { install: function(e, a) {
          var c = t.makeInstance(), l = t.makeInstance();
          function u(t2) {
            return e.selected.contains(t2);
          }
          c.directives.al.socket = function(t2, e2, n, r) {
            var o = r.changeDetector.locals, i = n;
            t2.bindSocket(e2, i, o[i]);
          }, c.directives.al.control = function(t2, e2, n, r) {
            var o = r.changeDetector.locals, i = o.input ? o.input.control : o.control;
            t2.bindControl(e2, i);
          }, e.on("rendernode", function(t2) {
            var e2 = t2.el, n = t2.node, r = t2.component, o = t2.bindSocket, i = t2.bindControl;
            r.render && "alight" !== r.render || (e2.innerHTML = r.template || a.template || function(t3) {
              var e3 = "";
              try {
                var n2 = {};
                e3 += `<div class="node {{isSelected(node)?'selected':''}} {{toClassName(node.name)}}">`, e3 += '<div class="title">', e3 += "{{node.name}}</div>", e3 += "<!-- Outputs-->", e3 += '<div al-repeat="output in Array.from(node.outputs.values())" style="text-align: right">', e3 += '<div class="output-title">', e3 += "{{output.name}}</div>", e3 += '<div class="socket output {{toClassName(output.socket.name)}}" al-socket="output" title="{{output.socket.name}}\n{{output.socket.hint}}"></div></div>', e3 += "<!-- Controls-->", e3 += '<div class="control" al-repeat="control in Array.from(node.controls.values())" al-control></div>', e3 += "<!-- Inputs-->", e3 += '<div al-repeat="input in Array.from(node.inputs.values())" style="text-align: left">', e3 += `<div class="socket input {{toClassName(input.socket.name)}} {{input.multipleConnections?'multiple':''}}" al-socket="input" title="{{input.socket.name}}"></div>`, e3 += '<div class="input-title" al-if="!input.showControl()">', e3 += "{{input.name}}</div>", e3 += '<div class="input-control" al-if="input.showControl()" al-control></div></div></div>';
              } catch (t4) {
                pug.rethrow(t4, void 0, void 0, n2[void 0]);
              }
              return e3;
            }(), n._alight = c.bootstrap(e2, { node: n, isSelected: u, bindSocket: o, bindControl: i, toClassName: s, Array }));
          }), e.on("rendercontrol", function(t2) {
            var e2 = t2.el, n = t2.control;
            if (!n.render || "alight" === n.render) {
              var r = document.createElement("div"), o = n.template || "", i = n.scope || {}, a2 = n.mounted || function() {
              };
              e2.appendChild(r), r.innerHTML = o, n.render = "alight", n._alight = l.bootstrap(r, i), a2.call(n);
            }
          }), e.on("connectioncreated connectionremoved", function(t2) {
            t2.input.node._alight.scan();
          }), e.on("nodeselected", function(t2) {
            e.nodes.map(function(t3) {
              return t3._alight.scan();
            }), t2._alight.scan();
          });
        } };
      });
    }
  });

  // node_modules/rete/build/rete.esm.js
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
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
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
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define2(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key];
    }
    try {
      define2({}, "");
    } catch (err) {
      define2 = function(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context2(tryLocsList || []);
      return generator._invoke = function(innerFn2, self2, context2) {
        var state = "suspendedStart";
        return function(method, arg) {
          if ("executing" === state)
            throw new Error("Generator is already running");
          if ("completed" === state) {
            if ("throw" === method)
              throw arg;
            return doneResult();
          }
          for (context2.method = method, context2.arg = arg; ; ) {
            var delegate = context2.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context2);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if ("next" === context2.method)
              context2.sent = context2._sent = context2.arg;
            else if ("throw" === context2.method) {
              if ("suspendedStart" === state)
                throw state = "completed", context2.arg;
              context2.dispatchException(context2.arg);
            } else
              "return" === context2.method && context2.abrupt("return", context2.arg);
            state = "executing";
            var record = tryCatch(innerFn2, self2, context2);
            if ("normal" === record.type) {
              if (state = context2.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                continue;
              return {
                value: record.arg,
                done: context2.done
              };
            }
            "throw" === record.type && (state = "completed", context2.method = "throw", context2.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
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
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define2(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define2(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
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
      this._invoke = function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (void 0 === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method))
            return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
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
    function Context2(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return next2.value = iterable[i], next2.done = false, next2;
            return next2.value = void 0, next2.done = true, next2;
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
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define2(Gp, "constructor", GeneratorFunctionPrototype), define2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define2(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define2(Gp, toStringTagSymbol, "Generator"), define2(Gp, iteratorSymbol, function() {
      return this;
    }), define2(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(object) {
      var keys = [];
      for (var key in object)
        keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object)
            return next.value = key2, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context2.prototype = {
      constructor: Context2,
      reset: function(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
      },
      stop: function() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
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
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
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
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
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
        _next(void 0);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
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
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function() {
        };
        return {
          s: F,
          n: function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function(e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null)
            it.return();
        } finally {
          if (didErr)
            throw err;
        }
      }
    };
  }
  var Component$1 = /* @__PURE__ */ _createClass(function Component(name) {
    _classCallCheck(this, Component);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "data", {});
    _defineProperty(this, "engine", null);
    this.name = name;
  });
  var Node = /* @__PURE__ */ function() {
    function Node3(name) {
      _classCallCheck(this, Node3);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "id", void 0);
      _defineProperty(this, "position", [0, 0]);
      _defineProperty(this, "inputs", /* @__PURE__ */ new Map());
      _defineProperty(this, "outputs", /* @__PURE__ */ new Map());
      _defineProperty(this, "controls", /* @__PURE__ */ new Map());
      _defineProperty(this, "data", {});
      _defineProperty(this, "meta", {});
      this.name = name;
      this.id = Node3.incrementId();
    }
    _createClass(Node3, [{
      key: "_add",
      value: function _add(list, item, prop) {
        if (list.has(item.key))
          throw new Error("Item with key '".concat(item.key, "' already been added to the node"));
        if (item[prop] !== null)
          throw new Error("Item has already been added to some node");
        item[prop] = this;
        list.set(item.key, item);
      }
    }, {
      key: "addControl",
      value: function addControl(control) {
        this._add(this.controls, control, "parent");
        return this;
      }
    }, {
      key: "removeControl",
      value: function removeControl(control) {
        control.parent = null;
        this.controls["delete"](control.key);
      }
    }, {
      key: "addInput",
      value: function addInput(input) {
        this._add(this.inputs, input, "node");
        return this;
      }
    }, {
      key: "removeInput",
      value: function removeInput(input) {
        input.removeConnections();
        input.node = null;
        this.inputs["delete"](input.key);
      }
    }, {
      key: "addOutput",
      value: function addOutput(output) {
        this._add(this.outputs, output, "node");
        return this;
      }
    }, {
      key: "removeOutput",
      value: function removeOutput(output) {
        output.removeConnections();
        output.node = null;
        this.outputs["delete"](output.key);
      }
    }, {
      key: "setMeta",
      value: function setMeta(meta) {
        this.meta = meta;
        return this;
      }
    }, {
      key: "getConnections",
      value: function getConnections() {
        var ios = [].concat(_toConsumableArray(this.inputs.values()), _toConsumableArray(this.outputs.values()));
        var connections = ios.reduce(function(arr, io) {
          return [].concat(_toConsumableArray(arr), _toConsumableArray(io.connections));
        }, []);
        return connections;
      }
    }, {
      key: "update",
      value: function update() {
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var reduceIO = function reduceIO2(list) {
          return Array.from(list).reduce(function(obj, _ref) {
            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], io = _ref2[1];
            obj[key] = io.toJSON();
            return obj;
          }, {});
        };
        return {
          "id": this.id,
          "data": this.data,
          "inputs": reduceIO(this.inputs),
          "outputs": reduceIO(this.outputs),
          "position": this.position,
          "name": this.name
        };
      }
    }], [{
      key: "incrementId",
      value: function incrementId() {
        if (!this.latestId)
          this.latestId = 1;
        else
          this.latestId++;
        return this.latestId;
      }
    }, {
      key: "resetId",
      value: function resetId() {
        this.latestId = 0;
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        var node = new Node3(json.name);
        var _json$position = _slicedToArray(json.position, 2), x = _json$position[0], y = _json$position[1];
        node.id = json.id;
        node.data = json.data;
        node.position = [x, y];
        node.name = json.name;
        Node3.latestId = Math.max(node.id, Node3.latestId);
        return node;
      }
    }]);
    return Node3;
  }();
  _defineProperty(Node, "latestId", 0);
  var Component2 = /* @__PURE__ */ function(_ComponentWorker) {
    _inherits(Component3, _ComponentWorker);
    var _super = _createSuper(Component3);
    function Component3(name) {
      var _this;
      _classCallCheck(this, Component3);
      _this = _super.call(this, name);
      _defineProperty(_assertThisInitialized(_this), "editor", null);
      _defineProperty(_assertThisInitialized(_this), "data", {});
      return _this;
    }
    _createClass(Component3, [{
      key: "build",
      value: function() {
        var _build = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(node) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.builder(node);
                case 2:
                  return _context.abrupt("return", node);
                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        function build(_x) {
          return _build.apply(this, arguments);
        }
        return build;
      }()
    }, {
      key: "createNode",
      value: function() {
        var _createNode = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
          var data, node, _args2 = arguments;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  data = _args2.length > 0 && _args2[0] !== void 0 ? _args2[0] : {};
                  node = new Node(this.name);
                  node.data = data;
                  _context2.next = 5;
                  return this.build(node);
                case 5:
                  return _context2.abrupt("return", node);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
        function createNode() {
          return _createNode.apply(this, arguments);
        }
        return createNode;
      }()
    }]);
    return Component3;
  }(Component$1);
  var Connection = /* @__PURE__ */ function() {
    function Connection2(output, input) {
      _classCallCheck(this, Connection2);
      _defineProperty(this, "output", void 0);
      _defineProperty(this, "input", void 0);
      _defineProperty(this, "data", {});
      this.output = output;
      this.input = input;
      this.data = {};
      this.input.addConnection(this);
    }
    _createClass(Connection2, [{
      key: "remove",
      value: function remove() {
        this.input.removeConnection(this);
        this.output.removeConnection(this);
      }
    }]);
    return Connection2;
  }();
  var Control = /* @__PURE__ */ function() {
    function Control2(key) {
      _classCallCheck(this, Control2);
      _defineProperty(this, "key", void 0);
      _defineProperty(this, "data", {});
      _defineProperty(this, "parent", null);
      if (this.constructor === Control2)
        throw new TypeError("Can not construct abstract class");
      if (!key)
        throw new Error("The key parameter is missing in super() of Control ");
      this.key = key;
    }
    _createClass(Control2, [{
      key: "getNode",
      value: function getNode() {
        if (this.parent === null)
          throw new Error("Control isn't added to Node/Input");
        if (this.parent instanceof Node)
          return this.parent;
        if (!this.parent.node)
          throw new Error("Control hasn't be added to Input or Node");
        return this.parent.node;
      }
    }, {
      key: "getData",
      value: function getData(key) {
        return this.getNode().data[key];
      }
    }, {
      key: "putData",
      value: function putData(key, data) {
        this.getNode().data[key] = data;
      }
    }]);
    return Control2;
  }();
  var Emitter = /* @__PURE__ */ function() {
    function Emitter2(events) {
      _classCallCheck(this, Emitter2);
      _defineProperty(this, "events", {});
      _defineProperty(this, "silent", false);
      this.events = events instanceof Emitter2 ? events.events : events.handlers;
    }
    _createClass(Emitter2, [{
      key: "on",
      value: function on(names, handler) {
        var _this = this;
        var events = names instanceof Array ? names : names.split(" ");
        events.forEach(function(name) {
          if (!_this.events[name])
            throw new Error("The event ".concat(name, " does not exist"));
          _this.events[name].push(handler);
        });
        return this;
      }
    }, {
      key: "trigger",
      value: function trigger(name) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!(name in this.events))
          throw new Error("The event ".concat(String(name), " cannot be triggered"));
        return this.events[name].reduce(function(r, e) {
          return e(params) !== false && r;
        }, true);
      }
    }, {
      key: "bind",
      value: function bind(name) {
        if (this.events[name])
          throw new Error("The event ".concat(name, " is already bound"));
        this.events[name] = [];
      }
    }, {
      key: "exist",
      value: function exist(name) {
        return Array.isArray(this.events[name]);
      }
    }]);
    return Emitter2;
  }();
  var IO = /* @__PURE__ */ function() {
    function IO2(key, name, socket, multiConns) {
      _classCallCheck(this, IO2);
      _defineProperty(this, "node", null);
      _defineProperty(this, "multipleConnections", void 0);
      _defineProperty(this, "connections", []);
      _defineProperty(this, "key", void 0);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "socket", void 0);
      this.node = null;
      this.multipleConnections = multiConns;
      this.connections = [];
      this.key = key;
      this.name = name;
      this.socket = socket;
    }
    _createClass(IO2, [{
      key: "removeConnection",
      value: function removeConnection(connection) {
        this.connections.splice(this.connections.indexOf(connection), 1);
      }
    }, {
      key: "removeConnections",
      value: function removeConnections() {
        var _this = this;
        this.connections.forEach(function(connection) {
          return _this.removeConnection(connection);
        });
      }
    }]);
    return IO2;
  }();
  var Input = /* @__PURE__ */ function(_IO) {
    _inherits(Input3, _IO);
    var _super = _createSuper(Input3);
    function Input3(key, title, socket) {
      var _this;
      var multiConns = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      _classCallCheck(this, Input3);
      _this = _super.call(this, key, title, socket, multiConns);
      _defineProperty(_assertThisInitialized(_this), "control", null);
      return _this;
    }
    _createClass(Input3, [{
      key: "hasConnection",
      value: function hasConnection() {
        return this.connections.length > 0;
      }
    }, {
      key: "addConnection",
      value: function addConnection(connection) {
        if (!this.multipleConnections && this.hasConnection())
          throw new Error("Multiple connections not allowed");
        this.connections.push(connection);
      }
    }, {
      key: "addControl",
      value: function addControl(control) {
        this.control = control;
        control.parent = this;
      }
    }, {
      key: "showControl",
      value: function showControl() {
        return !this.hasConnection() && this.control !== null;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          "connections": this.connections.map(function(c) {
            if (!c.output.node)
              throw new Error("Node not added to Output");
            return {
              node: c.output.node.id,
              output: c.output.key,
              data: c.data
            };
          })
        };
      }
    }]);
    return Input3;
  }(IO);
  var Validator = /* @__PURE__ */ function() {
    function Validator2() {
      _classCallCheck(this, Validator2);
    }
    _createClass(Validator2, null, [{
      key: "isValidData",
      value: function isValidData(data) {
        return typeof data.id === "string" && this.isValidId(data.id) && data.nodes instanceof Object && !(data.nodes instanceof Array);
      }
    }, {
      key: "isValidId",
      value: function isValidId(id) {
        return /^[\w-]{3,}@[0-9]+\.[0-9]+\.[0-9]+$/.test(id);
      }
    }, {
      key: "validate",
      value: function validate(id, data) {
        var id1 = id.split("@");
        var id2 = data.id.split("@");
        var msg = [];
        if (!this.isValidData(data))
          msg.push("Data is not suitable");
        if (id !== data.id)
          msg.push("IDs not equal");
        if (id1[0] !== id2[0])
          msg.push("Names don't match");
        if (id1[1] !== id2[1])
          msg.push("Versions don't match");
        return {
          success: Boolean(!msg.length),
          msg: msg.join(". ")
        };
      }
    }]);
    return Validator2;
  }();
  var Context = /* @__PURE__ */ function(_Emitter) {
    _inherits(Context2, _Emitter);
    var _super = _createSuper(Context2);
    function Context2(id, events) {
      var _this;
      _classCallCheck(this, Context2);
      _this = _super.call(this, events);
      _defineProperty(_assertThisInitialized(_this), "id", void 0);
      _defineProperty(_assertThisInitialized(_this), "plugins", void 0);
      _defineProperty(_assertThisInitialized(_this), "components", void 0);
      if (!Validator.isValidId(id))
        throw new Error("ID should be valid to name@0.1.0 format");
      _this.id = id;
      _this.plugins = /* @__PURE__ */ new Map();
      _this.components = /* @__PURE__ */ new Map();
      return _this;
    }
    _createClass(Context2, [{
      key: "use",
      value: function use(plugin, options) {
        if (plugin.name && this.plugins.has(plugin.name))
          throw new Error("Plugin ".concat(plugin.name, " already in use"));
        plugin.install(this, options || {});
        this.plugins.set(plugin.name, options);
      }
    }, {
      key: "register",
      value: function register(component) {
        if (this.components.has(component.name))
          throw new Error("Component ".concat(component.name, " already registered"));
        this.components.set(component.name, component);
        this.trigger("componentregister", component);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.trigger("destroy");
      }
    }]);
    return Context2;
  }(Emitter);
  function listenWindow(event, handler) {
    window.addEventListener(event, handler);
    return function() {
      window.removeEventListener(event, handler);
    };
  }
  function getOffset(el, offsetParentEl) {
    var searchDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 8;
    var x = el.offsetLeft;
    var y = el.offsetTop;
    var parent = el.offsetParent;
    while (parent && parent !== offsetParentEl && searchDepth > 0) {
      searchDepth--;
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return {
      x,
      y
    };
  }
  var Drag = /* @__PURE__ */ function() {
    function Drag2(el) {
      var onTranslate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(_x, _y, _e) {
      };
      var onStart = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(_e) {
      };
      var onDrag = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function(_e) {
      };
      _classCallCheck(this, Drag2);
      this.onTranslate = onTranslate;
      this.onStart = onStart;
      this.onDrag = onDrag;
      _defineProperty(this, "pointerStart", void 0);
      _defineProperty(this, "el", void 0);
      _defineProperty(this, "destroy", void 0);
      this.pointerStart = null;
      this.el = el;
      this.el.style.touchAction = "none";
      this.el.addEventListener("pointerdown", this.down.bind(this));
      var destroyMove = listenWindow("pointermove", this.move.bind(this));
      var destroyUp = listenWindow("pointerup", this.up.bind(this));
      this.destroy = function() {
        destroyMove();
        destroyUp();
      };
    }
    _createClass(Drag2, [{
      key: "down",
      value: function down(e) {
        if (e.pointerType === "mouse" && e.button !== 0)
          return;
        e.stopPropagation();
        this.pointerStart = [e.pageX, e.pageY];
        this.onStart(e);
      }
    }, {
      key: "move",
      value: function move(e) {
        if (!this.pointerStart)
          return;
        e.preventDefault();
        var _ref = [e.pageX, e.pageY], x = _ref[0], y = _ref[1];
        var delta = [x - this.pointerStart[0], y - this.pointerStart[1]];
        var zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;
        this.onTranslate(delta[0] / zoom, delta[1] / zoom, e);
      }
    }, {
      key: "up",
      value: function up(e) {
        if (!this.pointerStart)
          return;
        this.pointerStart = null;
        this.onDrag(e);
      }
    }]);
    return Drag2;
  }();
  var Zoom = /* @__PURE__ */ function() {
    function Zoom2(container2, el, intensity, onzoom) {
      _classCallCheck(this, Zoom2);
      _defineProperty(this, "el", void 0);
      _defineProperty(this, "intensity", void 0);
      _defineProperty(this, "onzoom", void 0);
      _defineProperty(this, "previous", null);
      _defineProperty(this, "pointers", []);
      _defineProperty(this, "destroy", void 0);
      this.el = el;
      this.intensity = intensity;
      this.onzoom = onzoom;
      container2.addEventListener("wheel", this.wheel.bind(this));
      container2.addEventListener("pointerdown", this.down.bind(this));
      container2.addEventListener("dblclick", this.dblclick.bind(this));
      var destroyMove = listenWindow("pointermove", this.move.bind(this));
      var destroyUp = listenWindow("pointerup", this.end.bind(this));
      var destroyCancel = listenWindow("pointercancel", this.end.bind(this));
      this.destroy = function() {
        destroyMove();
        destroyUp();
        destroyCancel();
      };
    }
    _createClass(Zoom2, [{
      key: "translating",
      get: function get() {
        return this.pointers.length >= 2;
      }
    }, {
      key: "wheel",
      value: function wheel(e) {
        e.preventDefault();
        var rect = this.el.getBoundingClientRect();
        var isNegative = e.deltaY < 0;
        var delta = isNegative ? this.intensity : -this.intensity;
        var ox = (rect.left - e.clientX) * delta;
        var oy = (rect.top - e.clientY) * delta;
        this.onzoom(delta, ox, oy, "wheel");
      }
    }, {
      key: "touches",
      value: function touches() {
        var e = {
          touches: this.pointers
        };
        var _ref = [e.touches[0].clientX, e.touches[0].clientY], x1 = _ref[0], y1 = _ref[1];
        var _ref2 = [e.touches[1].clientX, e.touches[1].clientY], x2 = _ref2[0], y2 = _ref2[1];
        var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        return {
          cx: (x1 + x2) / 2,
          cy: (y1 + y2) / 2,
          distance
        };
      }
    }, {
      key: "down",
      value: function down(e) {
        this.pointers.push(e);
      }
    }, {
      key: "move",
      value: function move(e) {
        this.pointers = this.pointers.map(function(p) {
          return p.pointerId === e.pointerId ? e : p;
        });
        if (!this.translating)
          return;
        var rect = this.el.getBoundingClientRect();
        var _this$touches = this.touches(), cx = _this$touches.cx, cy = _this$touches.cy, distance = _this$touches.distance;
        if (this.previous !== null) {
          var delta = distance / this.previous.distance - 1;
          var ox = (rect.left - cx) * delta;
          var oy = (rect.top - cy) * delta;
          this.onzoom(delta, ox - (this.previous.cx - cx), oy - (this.previous.cy - cy), "touch");
        }
        this.previous = {
          cx,
          cy,
          distance
        };
      }
    }, {
      key: "end",
      value: function end(e) {
        this.previous = null;
        this.pointers = this.pointers.filter(function(p) {
          return p.pointerId !== e.pointerId;
        });
      }
    }, {
      key: "dblclick",
      value: function dblclick(e) {
        e.preventDefault();
        var rect = this.el.getBoundingClientRect();
        var delta = 4 * this.intensity;
        var ox = (rect.left - e.clientX) * delta;
        var oy = (rect.top - e.clientY) * delta;
        this.onzoom(delta, ox, oy, "dblclick");
      }
    }]);
    return Zoom2;
  }();
  var Area = /* @__PURE__ */ function(_Emitter) {
    _inherits(Area2, _Emitter);
    var _super = _createSuper(Area2);
    function Area2(container2, emitter) {
      var _this;
      _classCallCheck(this, Area2);
      _this = _super.call(this, emitter);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "transform", {
        k: 1,
        x: 0,
        y: 0
      });
      _defineProperty(_assertThisInitialized(_this), "mouse", {
        x: 0,
        y: 0
      });
      _defineProperty(_assertThisInitialized(_this), "_startPosition", null);
      _defineProperty(_assertThisInitialized(_this), "_zoom", void 0);
      _defineProperty(_assertThisInitialized(_this), "_drag", void 0);
      var el = _this.el = document.createElement("div");
      _this.container = container2;
      el.style.transformOrigin = "0 0";
      _this._zoom = new Zoom(container2, el, 0.1, _this.onZoom.bind(_assertThisInitialized(_this)));
      _this._drag = new Drag(container2, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onStart.bind(_assertThisInitialized(_this)));
      emitter.on("destroy", function() {
        _this._zoom.destroy();
        _this._drag.destroy();
      });
      _this.container.addEventListener("pointermove", _this.pointermove.bind(_assertThisInitialized(_this)));
      _this.update();
      return _this;
    }
    _createClass(Area2, [{
      key: "update",
      value: function update() {
        var t = this.transform;
        this.el.style.transform = "translate(".concat(t.x, "px, ").concat(t.y, "px) scale(").concat(t.k, ")");
      }
    }, {
      key: "pointermove",
      value: function pointermove(e) {
        var clientX = e.clientX, clientY = e.clientY;
        var rect = this.el.getBoundingClientRect();
        var x = clientX - rect.left;
        var y = clientY - rect.top;
        var k = this.transform.k;
        this.mouse = {
          x: x / k,
          y: y / k
        };
        this.trigger("mousemove", _objectSpread2({}, this.mouse));
      }
    }, {
      key: "onStart",
      value: function onStart() {
        this._startPosition = _objectSpread2({}, this.transform);
      }
    }, {
      key: "onTranslate",
      value: function onTranslate(dx, dy) {
        if (this._zoom.translating)
          return;
        if (this._startPosition)
          this.translate(this._startPosition.x + dx, this._startPosition.y + dy);
      }
    }, {
      key: "onZoom",
      value: function onZoom(delta, ox, oy, source) {
        this.zoom(this.transform.k * (1 + delta), ox, oy, source);
        this.update();
      }
    }, {
      key: "translate",
      value: function translate(x, y) {
        var params = {
          transform: this.transform,
          x,
          y
        };
        if (!this.trigger("translate", params))
          return;
        this.transform.x = params.x;
        this.transform.y = params.y;
        this.update();
        this.trigger("translated");
      }
    }, {
      key: "zoom",
      value: function zoom(_zoom) {
        var ox = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var oy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var source = arguments.length > 3 ? arguments[3] : void 0;
        var k = this.transform.k;
        var params = {
          transform: this.transform,
          zoom: _zoom,
          source
        };
        if (!this.trigger("zoom", params))
          return;
        var d = (k - params.zoom) / (k - _zoom || 1);
        this.transform.k = params.zoom || 1;
        this.transform.x += ox * d;
        this.transform.y += oy * d;
        this.update();
        this.trigger("zoomed", {
          source
        });
      }
    }, {
      key: "appendChild",
      value: function appendChild(el) {
        this.el.appendChild(el);
      }
    }, {
      key: "removeChild",
      value: function removeChild(el) {
        this.el.removeChild(el);
      }
    }]);
    return Area2;
  }(Emitter);
  var ConnectionView = /* @__PURE__ */ function(_Emitter) {
    _inherits(ConnectionView2, _Emitter);
    var _super = _createSuper(ConnectionView2);
    function ConnectionView2(connection, inputNode, outputNode, emitter) {
      var _this;
      _classCallCheck(this, ConnectionView2);
      _this = _super.call(this, emitter);
      _defineProperty(_assertThisInitialized(_this), "connection", void 0);
      _defineProperty(_assertThisInitialized(_this), "inputNode", void 0);
      _defineProperty(_assertThisInitialized(_this), "outputNode", void 0);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      _this.connection = connection;
      _this.inputNode = inputNode;
      _this.outputNode = outputNode;
      _this.el = document.createElement("div");
      _this.el.style.position = "absolute";
      _this.el.style.zIndex = "-1";
      _this.trigger("renderconnection", {
        el: _this.el,
        connection: _this.connection,
        points: _this.getPoints()
      });
      return _this;
    }
    _createClass(ConnectionView2, [{
      key: "getPoints",
      value: function getPoints() {
        var _this$connection = this.connection, input = _this$connection.input, output = _this$connection.output;
        if (this.inputNode.hasSocket(input) && this.outputNode.hasSocket(output)) {
          var _this$outputNode$getS = this.outputNode.getSocketPosition(output), _this$outputNode$getS2 = _slicedToArray(_this$outputNode$getS, 2), x1 = _this$outputNode$getS2[0], y1 = _this$outputNode$getS2[1];
          var _this$inputNode$getSo = this.inputNode.getSocketPosition(input), _this$inputNode$getSo2 = _slicedToArray(_this$inputNode$getSo, 2), x2 = _this$inputNode$getSo2[0], y2 = _this$inputNode$getSo2[1];
          return [x1, y1, x2, y2];
        }
        return [0, 0, 0, 0];
      }
    }, {
      key: "update",
      value: function update() {
        this.trigger("updateconnection", {
          el: this.el,
          connection: this.connection,
          points: this.getPoints()
        });
      }
    }]);
    return ConnectionView2;
  }(Emitter);
  var ControlView = /* @__PURE__ */ function(_Emitter) {
    _inherits(ControlView2, _Emitter);
    var _super = _createSuper(ControlView2);
    function ControlView2(el, control, emitter) {
      var _this;
      _classCallCheck(this, ControlView2);
      _this = _super.call(this, emitter);
      _this.trigger("rendercontrol", {
        el,
        control
      });
      return _this;
    }
    return _createClass(ControlView2);
  }(Emitter);
  var SocketView = /* @__PURE__ */ function(_Emitter) {
    _inherits(SocketView2, _Emitter);
    var _super = _createSuper(SocketView2);
    function SocketView2(el, type, io, node, emitter) {
      var _this$trigger;
      var _this;
      _classCallCheck(this, SocketView2);
      _this = _super.call(this, emitter);
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      _defineProperty(_assertThisInitialized(_this), "type", void 0);
      _defineProperty(_assertThisInitialized(_this), "io", void 0);
      _defineProperty(_assertThisInitialized(_this), "node", void 0);
      _this.el = el;
      _this.type = type;
      _this.io = io;
      _this.node = node;
      _this.trigger("rendersocket", (_this$trigger = {
        el
      }, _defineProperty(_this$trigger, type, _this.io), _defineProperty(_this$trigger, "socket", io.socket), _this$trigger));
      return _this;
    }
    _createClass(SocketView2, [{
      key: "getPosition",
      value: function getPosition(_ref, nodeViewEl) {
        var position = _ref.position;
        var el = this.el;
        var _getOffset = getOffset(el, nodeViewEl), x = _getOffset.x, y = _getOffset.y;
        return [position[0] + x + el.offsetWidth / 2, position[1] + y + el.offsetHeight / 2];
      }
    }]);
    return SocketView2;
  }(Emitter);
  var NodeView = /* @__PURE__ */ function(_Emitter) {
    _inherits(NodeView2, _Emitter);
    var _super = _createSuper(NodeView2);
    function NodeView2(node, component, emitter) {
      var _this;
      _classCallCheck(this, NodeView2);
      _this = _super.call(this, emitter);
      _defineProperty(_assertThisInitialized(_this), "node", void 0);
      _defineProperty(_assertThisInitialized(_this), "component", void 0);
      _defineProperty(_assertThisInitialized(_this), "sockets", /* @__PURE__ */ new Map());
      _defineProperty(_assertThisInitialized(_this), "controls", /* @__PURE__ */ new Map());
      _defineProperty(_assertThisInitialized(_this), "el", void 0);
      _defineProperty(_assertThisInitialized(_this), "_startPosition", []);
      _defineProperty(_assertThisInitialized(_this), "_drag", void 0);
      _this.node = node;
      _this.component = component;
      _this.el = document.createElement("div");
      _this.el.style.position = "absolute";
      _this.el.addEventListener("contextmenu", function(e) {
        return _this.trigger("contextmenu", {
          e,
          node: _this.node
        });
      });
      _this._drag = new Drag(_this.el, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onSelect.bind(_assertThisInitialized(_this)), function() {
        _this.trigger("nodedraged", node);
        _this.trigger("nodedragged", node);
      });
      _this.trigger("rendernode", {
        el: _this.el,
        node,
        component: component.data,
        bindSocket: _this.bindSocket.bind(_assertThisInitialized(_this)),
        bindControl: _this.bindControl.bind(_assertThisInitialized(_this))
      });
      _this.update();
      return _this;
    }
    _createClass(NodeView2, [{
      key: "clearSockets",
      value: function clearSockets() {
        var _this2 = this;
        var ios = [].concat(_toConsumableArray(this.node.inputs.values()), _toConsumableArray(this.node.outputs.values()));
        this.sockets.forEach(function(s) {
          if (!ios.includes(s.io))
            _this2.sockets["delete"](s.io);
        });
      }
    }, {
      key: "bindSocket",
      value: function bindSocket(el, type, io) {
        this.clearSockets();
        this.sockets.set(io, new SocketView(el, type, io, this.node, this));
      }
    }, {
      key: "bindControl",
      value: function bindControl(el, control) {
        this.controls.set(control, new ControlView(el, control, this));
      }
    }, {
      key: "hasSocket",
      value: function hasSocket(io) {
        return this.sockets.has(io);
      }
    }, {
      key: "getSocketPosition",
      value: function getSocketPosition(io) {
        var socket = this.sockets.get(io);
        if (!socket)
          throw new Error("Socket not found for ".concat(io.name, " with key ").concat(io.key));
        return socket.getPosition(this.node, this.el);
      }
    }, {
      key: "onSelect",
      value: function onSelect(e) {
        var payload = {
          node: this.node,
          accumulate: e.ctrlKey,
          e
        };
        this.onStart();
        this.trigger("multiselectnode", payload);
        this.trigger("selectnode", payload);
      }
    }, {
      key: "onStart",
      value: function onStart() {
        this._startPosition = _toConsumableArray(this.node.position);
      }
    }, {
      key: "onTranslate",
      value: function onTranslate(dx, dy) {
        this.trigger("translatenode", {
          node: this.node,
          dx,
          dy
        });
      }
    }, {
      key: "onDrag",
      value: function onDrag(dx, dy) {
        var x = this._startPosition[0] + dx;
        var y = this._startPosition[1] + dy;
        this.translate(x, y);
      }
    }, {
      key: "translate",
      value: function translate(x, y) {
        var node = this.node;
        var params = {
          node,
          x,
          y
        };
        if (!this.trigger("nodetranslate", params))
          return;
        var _node$position = _slicedToArray(node.position, 2), px = _node$position[0], py = _node$position[1];
        var prev = [px, py];
        node.position[0] = params.x;
        node.position[1] = params.y;
        this.update();
        this.trigger("nodetranslated", {
          node,
          prev
        });
      }
    }, {
      key: "update",
      value: function update() {
        var _this$node$position = _slicedToArray(this.node.position, 2), x = _this$node$position[0], y = _this$node$position[1];
        this.el.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
      }
    }, {
      key: "remove",
      value: function remove() {
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._drag.destroy();
      }
    }]);
    return NodeView2;
  }(Emitter);
  var EditorView = /* @__PURE__ */ function(_Emitter) {
    _inherits(EditorView2, _Emitter);
    var _super = _createSuper(EditorView2);
    function EditorView2(container2, components, emitter) {
      var _this;
      _classCallCheck(this, EditorView2);
      _this = _super.call(this, emitter);
      _defineProperty(_assertThisInitialized(_this), "container", void 0);
      _defineProperty(_assertThisInitialized(_this), "components", void 0);
      _defineProperty(_assertThisInitialized(_this), "nodes", /* @__PURE__ */ new Map());
      _defineProperty(_assertThisInitialized(_this), "connections", /* @__PURE__ */ new Map());
      _defineProperty(_assertThisInitialized(_this), "area", void 0);
      _this.container = container2;
      _this.components = components;
      _this.container.style.overflow = "hidden";
      _this.container.addEventListener("click", _this.click.bind(_assertThisInitialized(_this)));
      _this.container.addEventListener("contextmenu", function(e) {
        return _this.trigger("contextmenu", {
          e,
          view: _assertThisInitialized(_this)
        });
      });
      emitter.on("destroy", listenWindow("resize", _this.resize.bind(_assertThisInitialized(_this))));
      emitter.on("destroy", function() {
        return _this.nodes.forEach(function(view) {
          return view.destroy();
        });
      });
      _this.on("nodetranslated", _this.updateConnections.bind(_assertThisInitialized(_this)));
      _this.on("rendersocket", function(_ref) {
        var input = _ref.input, output = _ref.output;
        var connections = Array.from(_this.connections.entries());
        var relatedConnections = connections.filter(function(_ref2) {
          var _ref3 = _slicedToArray(_ref2, 1), connection = _ref3[0];
          return connection.input === input || connection.output === output;
        });
        relatedConnections.forEach(function(_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2);
          _ref5[0];
          var view = _ref5[1];
          return requestAnimationFrame(function() {
            return view.update();
          });
        });
      });
      _this.area = new Area(container2, _assertThisInitialized(_this));
      _this.container.appendChild(_this.area.el);
      return _this;
    }
    _createClass(EditorView2, [{
      key: "addNode",
      value: function addNode(node) {
        var component = this.components.get(node.name);
        if (!component)
          throw new Error("Component ".concat(node.name, " not found"));
        var nodeView = new NodeView(node, component, this);
        this.nodes.set(node, nodeView);
        this.area.appendChild(nodeView.el);
      }
    }, {
      key: "removeNode",
      value: function removeNode(node) {
        var nodeView = this.nodes.get(node);
        this.nodes["delete"](node);
        if (nodeView) {
          this.area.removeChild(nodeView.el);
          nodeView.destroy();
        }
      }
    }, {
      key: "addConnection",
      value: function addConnection(connection) {
        if (!connection.input.node || !connection.output.node)
          throw new Error("Connection input or output not added to node");
        var viewInput = this.nodes.get(connection.input.node);
        var viewOutput = this.nodes.get(connection.output.node);
        if (!viewInput || !viewOutput)
          throw new Error("View node not found for input or output");
        var connView = new ConnectionView(connection, viewInput, viewOutput, this);
        this.connections.set(connection, connView);
        this.area.appendChild(connView.el);
      }
    }, {
      key: "removeConnection",
      value: function removeConnection(connection) {
        var connView = this.connections.get(connection);
        this.connections["delete"](connection);
        if (connView)
          this.area.removeChild(connView.el);
      }
    }, {
      key: "updateConnections",
      value: function updateConnections(_ref6) {
        var _this2 = this;
        var node = _ref6.node;
        node.getConnections().forEach(function(conn) {
          var connView = _this2.connections.get(conn);
          if (!connView)
            throw new Error("Connection view not found");
          connView.update();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        var container2 = this.container;
        if (!container2.parentElement)
          throw new Error("Container doesn't have parent element");
        var width = container2.parentElement.clientWidth;
        var height = container2.parentElement.clientHeight;
        container2.style.width = width + "px";
        container2.style.height = height + "px";
      }
    }, {
      key: "click",
      value: function click(e) {
        var container2 = this.container;
        if (container2 !== e.target)
          return;
        if (!this.trigger("click", {
          e,
          container: container2
        }))
          return;
      }
    }]);
    return EditorView2;
  }(Emitter);
  var Selected = /* @__PURE__ */ function() {
    function Selected2() {
      _classCallCheck(this, Selected2);
      _defineProperty(this, "list", []);
    }
    _createClass(Selected2, [{
      key: "add",
      value: function add(item) {
        var accumulate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (!accumulate)
          this.list = [item];
        else if (!this.contains(item))
          this.list.push(item);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.list = [];
      }
    }, {
      key: "remove",
      value: function remove(item) {
        this.list.splice(this.list.indexOf(item), 1);
      }
    }, {
      key: "contains",
      value: function contains(item) {
        return this.list.indexOf(item) !== -1;
      }
    }, {
      key: "each",
      value: function each(callback) {
        this.list.forEach(callback);
      }
    }]);
    return Selected2;
  }();
  var Events = /* @__PURE__ */ _createClass(function Events2(handlers) {
    _classCallCheck(this, Events2);
    _defineProperty(this, "handlers", void 0);
    this.handlers = _objectSpread2({
      warn: [console.warn],
      error: [console.error],
      componentregister: [],
      destroy: []
    }, handlers);
  });
  var EditorEvents = /* @__PURE__ */ function(_Events) {
    _inherits(EditorEvents2, _Events);
    var _super = _createSuper(EditorEvents2);
    function EditorEvents2() {
      _classCallCheck(this, EditorEvents2);
      return _super.call(this, {
        nodecreate: [],
        nodecreated: [],
        noderemove: [],
        noderemoved: [],
        connectioncreate: [],
        connectioncreated: [],
        connectionremove: [],
        connectionremoved: [],
        translatenode: [],
        nodetranslate: [],
        nodetranslated: [],
        nodedraged: [],
        nodedragged: [],
        selectnode: [],
        multiselectnode: [],
        nodeselect: [],
        nodeselected: [],
        rendernode: [],
        rendersocket: [],
        rendercontrol: [],
        renderconnection: [],
        updateconnection: [],
        keydown: [],
        keyup: [],
        translate: [],
        translated: [],
        zoom: [],
        zoomed: [],
        click: [],
        mousemove: [],
        contextmenu: [],
        "import": [],
        "export": [],
        process: [],
        clear: []
      });
    }
    return _createClass(EditorEvents2);
  }(Events);
  var NodeEditor = /* @__PURE__ */ function(_Context) {
    _inherits(NodeEditor2, _Context);
    var _super = _createSuper(NodeEditor2);
    function NodeEditor2(id, container2) {
      var _this;
      _classCallCheck(this, NodeEditor2);
      _this = _super.call(this, id, new EditorEvents());
      _defineProperty(_assertThisInitialized(_this), "nodes", []);
      _defineProperty(_assertThisInitialized(_this), "selected", new Selected());
      _defineProperty(_assertThisInitialized(_this), "view", void 0);
      _this.view = new EditorView(container2, _this.components, _assertThisInitialized(_this));
      _this.on("destroy", listenWindow("keydown", function(e) {
        return _this.trigger("keydown", e);
      }));
      _this.on("destroy", listenWindow("keyup", function(e) {
        return _this.trigger("keyup", e);
      }));
      _this.on("selectnode", function(_ref) {
        var node = _ref.node, accumulate = _ref.accumulate;
        return _this.selectNode(node, accumulate);
      });
      _this.on("nodeselected", function() {
        return _this.selected.each(function(n) {
          var nodeView = _this.view.nodes.get(n);
          nodeView && nodeView.onStart();
        });
      });
      _this.on("translatenode", function(_ref2) {
        var dx = _ref2.dx, dy = _ref2.dy;
        return _this.selected.each(function(n) {
          var nodeView = _this.view.nodes.get(n);
          nodeView && nodeView.onDrag(dx, dy);
        });
      });
      return _this;
    }
    _createClass(NodeEditor2, [{
      key: "addNode",
      value: function addNode(node) {
        if (!this.trigger("nodecreate", node))
          return;
        this.nodes.push(node);
        this.view.addNode(node);
        this.trigger("nodecreated", node);
      }
    }, {
      key: "removeNode",
      value: function removeNode(node) {
        var _this2 = this;
        if (!this.trigger("noderemove", node))
          return;
        node.getConnections().forEach(function(c) {
          return _this2.removeConnection(c);
        });
        this.nodes.splice(this.nodes.indexOf(node), 1);
        this.view.removeNode(node);
        this.trigger("noderemoved", node);
      }
    }, {
      key: "connect",
      value: function connect(output, input) {
        var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!this.trigger("connectioncreate", {
          output,
          input
        }))
          return;
        try {
          var connection = output.connectTo(input);
          connection.data = data;
          this.view.addConnection(connection);
          this.trigger("connectioncreated", connection);
        } catch (e) {
          this.trigger("warn", e);
        }
      }
    }, {
      key: "removeConnection",
      value: function removeConnection(connection) {
        if (!this.trigger("connectionremove", connection))
          return;
        this.view.removeConnection(connection);
        connection.remove();
        this.trigger("connectionremoved", connection);
      }
    }, {
      key: "selectNode",
      value: function selectNode(node) {
        var accumulate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this.nodes.indexOf(node) === -1)
          throw new Error("Node not exist in list");
        if (!this.trigger("nodeselect", node))
          return;
        this.selected.add(node, accumulate);
        this.trigger("nodeselected", node);
      }
    }, {
      key: "getComponent",
      value: function getComponent(name) {
        var component = this.components.get(name);
        if (!component)
          throw "Component ".concat(name, " not found");
        return component;
      }
    }, {
      key: "register",
      value: function register(component) {
        _get(_getPrototypeOf(NodeEditor2.prototype), "register", this).call(this, component);
        component.editor = this;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this3 = this;
        _toConsumableArray(this.nodes).forEach(function(node) {
          return _this3.removeNode(node);
        });
        this.trigger("clear");
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var data = {
          id: this.id,
          nodes: {}
        };
        this.nodes.forEach(function(node) {
          return data.nodes[node.id] = node.toJSON();
        });
        this.trigger("export", data);
        return data;
      }
    }, {
      key: "beforeImport",
      value: function beforeImport(json) {
        var checking = Validator.validate(this.id, json);
        if (!checking.success) {
          this.trigger("warn", checking.msg);
          return false;
        }
        this.silent = true;
        this.clear();
        this.trigger("import", json);
        return true;
      }
    }, {
      key: "afterImport",
      value: function afterImport() {
        this.silent = false;
        return true;
      }
    }, {
      key: "fromJSON",
      value: function() {
        var _fromJSON = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(json) {
          var _this4 = this;
          var nodes;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.beforeImport(json)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", false);
                case 2:
                  nodes = {};
                  _context2.prev = 3;
                  _context2.next = 6;
                  return Promise.all(Object.keys(json.nodes).map(/* @__PURE__ */ function() {
                    var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(id) {
                      var node, component;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              node = json.nodes[id];
                              component = _this4.getComponent(node.name);
                              _context.next = 4;
                              return component.build(Node.fromJSON(node));
                            case 4:
                              nodes[id] = _context.sent;
                              _this4.addNode(nodes[id]);
                            case 6:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));
                    return function(_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }()));
                case 6:
                  Object.keys(json.nodes).forEach(function(id) {
                    var jsonNode = json.nodes[id];
                    var node = nodes[id];
                    Object.keys(jsonNode.outputs).forEach(function(key) {
                      var outputJson = jsonNode.outputs[key];
                      outputJson.connections.forEach(function(jsonConnection) {
                        var nodeId = jsonConnection.node;
                        var data = jsonConnection.data;
                        var targetOutput = node.outputs.get(key);
                        var targetInput = nodes[nodeId].inputs.get(jsonConnection.input);
                        if (!targetOutput || !targetInput) {
                          return _this4.trigger("error", "IO not found for node ".concat(node.id));
                        }
                        _this4.connect(targetOutput, targetInput, data);
                      });
                    });
                  });
                  _context2.next = 13;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](3);
                  this.trigger("warn", _context2.t0);
                  return _context2.abrupt("return", !this.afterImport());
                case 13:
                  return _context2.abrupt("return", this.afterImport());
                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[3, 9]]);
        }));
        function fromJSON(_x) {
          return _fromJSON.apply(this, arguments);
        }
        return fromJSON;
      }()
    }]);
    return NodeEditor2;
  }(Context);
  var Output = /* @__PURE__ */ function(_IO) {
    _inherits(Output3, _IO);
    var _super = _createSuper(Output3);
    function Output3(key, title, socket) {
      var multiConns = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      _classCallCheck(this, Output3);
      return _super.call(this, key, title, socket, multiConns);
    }
    _createClass(Output3, [{
      key: "hasConnection",
      value: function hasConnection() {
        return this.connections.length > 0;
      }
    }, {
      key: "connectTo",
      value: function connectTo(input) {
        if (!this.socket.compatibleWith(input.socket))
          throw new Error("Sockets not compatible");
        if (!input.multipleConnections && input.hasConnection())
          throw new Error("Input already has one connection");
        if (!this.multipleConnections && this.hasConnection())
          throw new Error("Output already has one connection");
        var connection = new Connection(this, input);
        this.connections.push(connection);
        return connection;
      }
    }, {
      key: "connectedTo",
      value: function connectedTo(input) {
        return this.connections.some(function(item) {
          return item.input === input;
        });
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          "connections": this.connections.map(function(c) {
            if (!c.input.node)
              throw new Error("Node not added to Input");
            return {
              node: c.input.node.id,
              input: c.input.key,
              data: c.data
            };
          })
        };
      }
    }]);
    return Output3;
  }(IO);
  var Socket = /* @__PURE__ */ function() {
    function Socket2(name) {
      var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Socket2);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "data", void 0);
      _defineProperty(this, "compatible", []);
      this.name = name;
      this.data = data;
      this.compatible = [];
    }
    _createClass(Socket2, [{
      key: "combineWith",
      value: function combineWith(socket) {
        this.compatible.push(socket);
      }
    }, {
      key: "compatibleWith",
      value: function compatibleWith(socket) {
        return this === socket || this.compatible.includes(socket);
      }
    }]);
    return Socket2;
  }();
  function intersect(array1, array2) {
    return array1.filter(function(value) {
      return -1 !== array2.indexOf(value);
    });
  }
  var Recursion = /* @__PURE__ */ function() {
    function Recursion2(nodes) {
      _classCallCheck(this, Recursion2);
      _defineProperty(this, "nodes", void 0);
      this.nodes = nodes;
    }
    _createClass(Recursion2, [{
      key: "extractInputNodes",
      value: function extractInputNodes(node) {
        var _this = this;
        return Object.keys(node.inputs).reduce(function(acc, key) {
          var connections = node.inputs[key].connections;
          var nodesData = (connections || []).reduce(function(b, c) {
            return [].concat(_toConsumableArray(b), [_this.nodes[c.node]]);
          }, []);
          return [].concat(_toConsumableArray(acc), _toConsumableArray(nodesData));
        }, []);
      }
    }, {
      key: "findSelf",
      value: function findSelf(list, inputNodes) {
        var inters = intersect(list, inputNodes);
        if (inters.length)
          return inters[0];
        var _iterator = _createForOfIteratorHelper(inputNodes), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var node = _step.value;
            var l = [node].concat(_toConsumableArray(list));
            var inter = this.findSelf(l, this.extractInputNodes(node));
            if (inter)
              return inter;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return null;
      }
    }, {
      key: "detect",
      value: function detect() {
        var _this2 = this;
        var nodesArr = Object.keys(this.nodes).map(function(id) {
          return _this2.nodes[id];
        });
        var _iterator2 = _createForOfIteratorHelper(nodesArr), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var node = _step2.value;
            var inters = this.findSelf([node], this.extractInputNodes(node));
            if (inters)
              return inters;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return null;
      }
    }]);
    return Recursion2;
  }();
  var State = {
    AVAILABLE: 0,
    PROCESSED: 1,
    ABORT: 2
  };
  var EngineEvents = /* @__PURE__ */ function(_Events) {
    _inherits(EngineEvents2, _Events);
    var _super = _createSuper(EngineEvents2);
    function EngineEvents2() {
      _classCallCheck(this, EngineEvents2);
      return _super.call(this, {});
    }
    return _createClass(EngineEvents2);
  }(Events);
  var Engine = /* @__PURE__ */ function(_Context) {
    _inherits(Engine2, _Context);
    var _super = _createSuper(Engine2);
    function Engine2(id) {
      var _this;
      _classCallCheck(this, Engine2);
      _this = _super.call(this, id, new EngineEvents());
      _defineProperty(_assertThisInitialized(_this), "args", []);
      _defineProperty(_assertThisInitialized(_this), "data", null);
      _defineProperty(_assertThisInitialized(_this), "state", State.AVAILABLE);
      _defineProperty(_assertThisInitialized(_this), "forwarded", /* @__PURE__ */ new Set());
      _defineProperty(_assertThisInitialized(_this), "onAbort", function() {
      });
      return _this;
    }
    _createClass(Engine2, [{
      key: "clone",
      value: function clone() {
        var engine = new Engine2(this.id);
        this.components.forEach(function(c) {
          return engine.register(c);
        });
        return engine;
      }
    }, {
      key: "throwError",
      value: function() {
        var _throwError = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(message) {
          var data, _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data = _args.length > 1 && _args[1] !== void 0 ? _args[1] : null;
                  _context.next = 3;
                  return this.abort();
                case 3:
                  this.trigger("error", {
                    message,
                    data
                  });
                  this.processDone();
                  return _context.abrupt("return", "error");
                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        function throwError(_x) {
          return _throwError.apply(this, arguments);
        }
        return throwError;
      }()
    }, {
      key: "processStart",
      value: function processStart() {
        if (this.state === State.AVAILABLE) {
          this.state = State.PROCESSED;
          return true;
        }
        if (this.state === State.ABORT) {
          return false;
        }
        console.warn("The process is busy and has not been restarted.\n                Use abort() to force it to complete");
        return false;
      }
    }, {
      key: "processDone",
      value: function processDone() {
        var success = this.state !== State.ABORT;
        this.state = State.AVAILABLE;
        if (!success) {
          this.onAbort();
          this.onAbort = function() {
          };
        }
        return success;
      }
    }, {
      key: "abort",
      value: function() {
        var _abort = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
          var _this2 = this;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function(ret) {
                    if (_this2.state === State.PROCESSED) {
                      _this2.state = State.ABORT;
                      _this2.onAbort = ret;
                    } else if (_this2.state === State.ABORT) {
                      _this2.onAbort();
                      _this2.onAbort = ret;
                    } else
                      ret();
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        function abort() {
          return _abort.apply(this, arguments);
        }
        return abort;
      }()
    }, {
      key: "lock",
      value: function() {
        var _lock = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(node) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function(res) {
                    node.unlockPool = node.unlockPool || [];
                    if (node.busy && !node.outputData)
                      node.unlockPool.push(res);
                    else
                      res();
                    node.busy = true;
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        function lock(_x2) {
          return _lock.apply(this, arguments);
        }
        return lock;
      }()
    }, {
      key: "unlock",
      value: function unlock(node) {
        node.unlockPool.forEach(function(a) {
          return a();
        });
        node.unlockPool = [];
        node.busy = false;
      }
    }, {
      key: "extractInputData",
      value: function() {
        var _extractInputData = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(node) {
          var _this3 = this;
          var obj, _i, _Object$keys, key, input, conns, connData;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  obj = {};
                  _i = 0, _Object$keys = Object.keys(node.inputs);
                case 2:
                  if (!(_i < _Object$keys.length)) {
                    _context5.next = 13;
                    break;
                  }
                  key = _Object$keys[_i];
                  input = node.inputs[key];
                  conns = input.connections;
                  _context5.next = 8;
                  return Promise.all(conns.map(/* @__PURE__ */ function() {
                    var _ref = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(c) {
                      var prevNode, outputs;
                      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              prevNode = _this3.data.nodes[c.node];
                              _context4.next = 3;
                              return _this3.processNode(prevNode);
                            case 3:
                              outputs = _context4.sent;
                              if (outputs) {
                                _context4.next = 8;
                                break;
                              }
                              _this3.abort();
                              _context4.next = 9;
                              break;
                            case 8:
                              return _context4.abrupt("return", outputs[c.output]);
                            case 9:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));
                    return function(_x4) {
                      return _ref.apply(this, arguments);
                    };
                  }()));
                case 8:
                  connData = _context5.sent;
                  obj[key] = connData;
                case 10:
                  _i++;
                  _context5.next = 2;
                  break;
                case 13:
                  return _context5.abrupt("return", obj);
                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        function extractInputData(_x3) {
          return _extractInputData.apply(this, arguments);
        }
        return extractInputData;
      }()
    }, {
      key: "processWorker",
      value: function() {
        var _processWorker = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6(node) {
          var inputData, component, outputData;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.extractInputData(node);
                case 2:
                  inputData = _context6.sent;
                  component = this.components.get(node.name);
                  outputData = {};
                  _context6.prev = 5;
                  _context6.next = 8;
                  return component.worker.apply(component, [node, inputData, outputData].concat(_toConsumableArray(this.args)));
                case 8:
                  _context6.next = 14;
                  break;
                case 10:
                  _context6.prev = 10;
                  _context6.t0 = _context6["catch"](5);
                  this.abort();
                  this.trigger("warn", _context6.t0);
                case 14:
                  return _context6.abrupt("return", outputData);
                case 15:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this, [[5, 10]]);
        }));
        function processWorker(_x5) {
          return _processWorker.apply(this, arguments);
        }
        return processWorker;
      }()
    }, {
      key: "processNode",
      value: function() {
        var _processNode = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee7(node) {
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(this.state === State.ABORT || !node)) {
                    _context7.next = 2;
                    break;
                  }
                  return _context7.abrupt("return", null);
                case 2:
                  _context7.next = 4;
                  return this.lock(node);
                case 4:
                  if (node.outputData) {
                    _context7.next = 8;
                    break;
                  }
                  _context7.next = 7;
                  return this.processWorker(node);
                case 7:
                  node.outputData = _context7.sent;
                case 8:
                  this.unlock(node);
                  return _context7.abrupt("return", node.outputData);
                case 10:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));
        function processNode(_x6) {
          return _processNode.apply(this, arguments);
        }
        return processNode;
      }()
    }, {
      key: "forwardProcess",
      value: function() {
        var _forwardProcess = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee10(node) {
          var _this4 = this;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!(this.state === State.ABORT)) {
                    _context10.next = 2;
                    break;
                  }
                  return _context10.abrupt("return", null);
                case 2:
                  _context10.next = 4;
                  return Promise.all(Object.keys(node.outputs).map(/* @__PURE__ */ function() {
                    var _ref2 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee9(key) {
                      var output;
                      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              output = node.outputs[key];
                              _context9.next = 3;
                              return Promise.all(output.connections.map(/* @__PURE__ */ function() {
                                var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee8(c) {
                                  var nextNode;
                                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                                    while (1) {
                                      switch (_context8.prev = _context8.next) {
                                        case 0:
                                          nextNode = _this4.data.nodes[c.node];
                                          if (_this4.forwarded.has(nextNode)) {
                                            _context8.next = 7;
                                            break;
                                          }
                                          _this4.forwarded.add(nextNode);
                                          _context8.next = 5;
                                          return _this4.processNode(nextNode);
                                        case 5:
                                          _context8.next = 7;
                                          return _this4.forwardProcess(nextNode);
                                        case 7:
                                        case "end":
                                          return _context8.stop();
                                      }
                                    }
                                  }, _callee8);
                                }));
                                return function(_x9) {
                                  return _ref3.apply(this, arguments);
                                };
                              }()));
                            case 3:
                              return _context9.abrupt("return", _context9.sent);
                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9);
                    }));
                    return function(_x8) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));
                case 4:
                  return _context10.abrupt("return", _context10.sent);
                case 5:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));
        function forwardProcess(_x7) {
          return _forwardProcess.apply(this, arguments);
        }
        return forwardProcess;
      }()
    }, {
      key: "copy",
      value: function copy(data) {
        data = Object.assign({}, data);
        data.nodes = Object.assign({}, data.nodes);
        Object.keys(data.nodes).forEach(function(key) {
          data.nodes[key] = Object.assign({}, data.nodes[key]);
        });
        return data;
      }
    }, {
      key: "validate",
      value: function() {
        var _validate = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee11(data) {
          var checking, recursion, recurrentNode;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  checking = Validator.validate(this.id, data);
                  recursion = new Recursion(data.nodes);
                  if (checking.success) {
                    _context11.next = 6;
                    break;
                  }
                  _context11.next = 5;
                  return this.throwError(checking.msg);
                case 5:
                  return _context11.abrupt("return", _context11.sent);
                case 6:
                  recurrentNode = recursion.detect();
                  if (!recurrentNode) {
                    _context11.next = 11;
                    break;
                  }
                  _context11.next = 10;
                  return this.throwError("Recursion detected", recurrentNode);
                case 10:
                  return _context11.abrupt("return", _context11.sent);
                case 11:
                  return _context11.abrupt("return", true);
                case 12:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));
        function validate(_x10) {
          return _validate.apply(this, arguments);
        }
        return validate;
      }()
    }, {
      key: "processStartNode",
      value: function() {
        var _processStartNode = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee12(id) {
          var startNode;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  if (id) {
                    _context12.next = 2;
                    break;
                  }
                  return _context12.abrupt("return");
                case 2:
                  startNode = this.data.nodes[id];
                  if (startNode) {
                    _context12.next = 7;
                    break;
                  }
                  _context12.next = 6;
                  return this.throwError("Node with such id not found");
                case 6:
                  return _context12.abrupt("return", _context12.sent);
                case 7:
                  _context12.next = 9;
                  return this.processNode(startNode);
                case 9:
                  _context12.next = 11;
                  return this.forwardProcess(startNode);
                case 11:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));
        function processStartNode(_x11) {
          return _processStartNode.apply(this, arguments);
        }
        return processStartNode;
      }()
    }, {
      key: "processUnreachable",
      value: function() {
        var _processUnreachable = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee13() {
          var data, i, node;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  data = this.data;
                  _context13.t0 = _regeneratorRuntime().keys(data.nodes);
                case 2:
                  if ((_context13.t1 = _context13.t0()).done) {
                    _context13.next = 12;
                    break;
                  }
                  i = _context13.t1.value;
                  node = data.nodes[i];
                  if (!(typeof node.outputData === "undefined")) {
                    _context13.next = 10;
                    break;
                  }
                  _context13.next = 8;
                  return this.processNode(node);
                case 8:
                  _context13.next = 10;
                  return this.forwardProcess(node);
                case 10:
                  _context13.next = 2;
                  break;
                case 12:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));
        function processUnreachable() {
          return _processUnreachable.apply(this, arguments);
        }
        return processUnreachable;
      }()
    }, {
      key: "process",
      value: function() {
        var _process = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee14(data) {
          var startId, _len, args, _key, _args14 = arguments;
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  startId = _args14.length > 1 && _args14[1] !== void 0 ? _args14[1] : null;
                  if (this.processStart()) {
                    _context14.next = 3;
                    break;
                  }
                  return _context14.abrupt("return");
                case 3:
                  if (this.validate(data)) {
                    _context14.next = 5;
                    break;
                  }
                  return _context14.abrupt("return");
                case 5:
                  this.data = this.copy(data);
                  for (_len = _args14.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    args[_key - 2] = _args14[_key];
                  }
                  this.args = args;
                  this.forwarded = /* @__PURE__ */ new Set();
                  _context14.next = 11;
                  return this.processStartNode(startId);
                case 11:
                  _context14.next = 13;
                  return this.processUnreachable();
                case 13:
                  return _context14.abrupt("return", this.processDone() ? "success" : "aborted");
                case 14:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));
        function process(_x12) {
          return _process.apply(this, arguments);
        }
        return process;
      }()
    }]);
    return Engine2;
  }(Context);
  var index = {
    Engine,
    Recursion,
    Component: Component2,
    Control,
    Connection,
    Emitter,
    Input,
    IO,
    Node,
    NodeEditor,
    Output,
    Socket
  };

  // node_modules/rete-connection-plugin/build/connection-plugin.esm.js
  function ___$insertStyle(css) {
    if (!css) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _nonIterableRest2();
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit2(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function toTrainCase(str) {
    return str.toLowerCase().replace(/ /g, "-");
  }
  function getMapItemRecursively(map, el) {
    return map.get(el) || (el.parentElement ? getMapItemRecursively(map, el.parentElement) : null);
  }
  function defaultPath(points, curvature) {
    var _points = _slicedToArray2(points, 4), x1 = _points[0], y1 = _points[1], x2 = _points[2], y2 = _points[3];
    var hx1 = x1 + Math.abs(x2 - x1) * curvature;
    var hx2 = x2 - Math.abs(x2 - x1) * curvature;
    return "M ".concat(x1, " ").concat(y1, " C ").concat(hx1, " ").concat(y1, " ").concat(hx2, " ").concat(y2, " ").concat(x2, " ").concat(y2);
  }
  function renderPathData(emitter, points, connection) {
    var data = {
      points,
      connection,
      d: ""
    };
    emitter.trigger("connectionpath", data);
    return data.d || defaultPath(points, 0.4);
  }
  function updateConnection(_ref) {
    var el = _ref.el, d = _ref.d;
    var path = el.querySelector(".connection path");
    if (!path)
      throw new Error("Path of connection was broken");
    path.setAttribute("d", d);
  }
  function renderConnection(_ref2) {
    var _svg$classList;
    var el = _ref2.el, d = _ref2.d, connection = _ref2.connection;
    var classed = !connection ? [] : ["input-" + toTrainCase(connection.input.name), "output-" + toTrainCase(connection.output.name), "socket-input-" + toTrainCase(connection.input.socket.name), "socket-output-" + toTrainCase(connection.output.socket.name)];
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    (_svg$classList = svg.classList).add.apply(_svg$classList, ["connection"].concat(classed));
    path.classList.add("main-path");
    path.setAttribute("d", d);
    svg.appendChild(path);
    el.appendChild(svg);
    updateConnection({
      el,
      d
    });
  }
  var PickerView = /* @__PURE__ */ function() {
    function PickerView2(emitter, editorView) {
      _classCallCheck2(this, PickerView2);
      this.emitter = emitter;
      this.editorView = editorView;
      _defineProperty2(this, "el", void 0);
      this.el = document.createElement("div");
      this.el.style.position = "absolute";
      this.editorView.area.appendChild(this.el);
    }
    _createClass2(PickerView2, [{
      key: "updatePseudoConnection",
      value: function updatePseudoConnection(io) {
        if (io !== null) {
          this.renderConnection(io);
        } else if (this.el.parentElement) {
          this.el.innerHTML = "";
        }
      }
    }, {
      key: "getPoints",
      value: function getPoints(io) {
        var mouse = this.editorView.area.mouse;
        if (!io.node)
          throw new Error("Node in output/input not found");
        var node = this.editorView.nodes.get(io.node);
        if (!node)
          throw new Error("Node view not found");
        var _node$getSocketPositi = node.getSocketPosition(io), _node$getSocketPositi2 = _slicedToArray2(_node$getSocketPositi, 2), x1 = _node$getSocketPositi2[0], y1 = _node$getSocketPositi2[1];
        return io instanceof Output ? [x1, y1, mouse.x, mouse.y] : [mouse.x, mouse.y, x1, y1];
      }
    }, {
      key: "updateConnection",
      value: function updateConnection$1(io) {
        var d = renderPathData(this.emitter, this.getPoints(io));
        updateConnection({
          el: this.el,
          d
        });
      }
    }, {
      key: "renderConnection",
      value: function renderConnection$1(io) {
        var d = renderPathData(this.emitter, this.getPoints(io));
        renderConnection({
          el: this.el,
          d
        });
      }
    }]);
    return PickerView2;
  }();
  var Picker = /* @__PURE__ */ function() {
    function Picker2(editor2) {
      var _this = this;
      _classCallCheck2(this, Picker2);
      _defineProperty2(this, "editor", void 0);
      _defineProperty2(this, "_io", null);
      _defineProperty2(this, "view", void 0);
      this.editor = editor2;
      this.view = new PickerView(editor2, editor2.view);
      editor2.on("mousemove", function() {
        return _this.io && _this.view.updateConnection(_this.io);
      });
    }
    _createClass2(Picker2, [{
      key: "reset",
      value: function reset() {
        this.io = null;
      }
    }, {
      key: "pickOutput",
      value: function pickOutput(output) {
        if (!this.editor.trigger("connectionpick", output))
          return;
        if (this.io instanceof Input) {
          if (!output.multipleConnections && output.hasConnection())
            this.editor.removeConnection(output.connections[0]);
          this.editor.connect(output, this.io);
          this.reset();
          return;
        }
        if (this.io)
          this.reset();
        this.io = output;
      }
    }, {
      key: "pickInput",
      value: function pickInput(input) {
        var _this2 = this;
        if (!this.editor.trigger("connectionpick", input))
          return;
        if (this.io === null) {
          if (input.hasConnection()) {
            this.io = input.connections[0].output;
            this.editor.removeConnection(input.connections[0]);
          } else {
            this.io = input;
          }
          return true;
        }
        if (!input.multipleConnections && input.hasConnection())
          this.editor.removeConnection(input.connections[0]);
        if (!this.io.multipleConnections && this.io.hasConnection())
          this.editor.removeConnection(this.io.connections[0]);
        if (this.io instanceof Output && this.io.connectedTo(input)) {
          var connection = input.connections.find(function(c) {
            return c.output === _this2.io;
          });
          if (connection) {
            this.editor.removeConnection(connection);
          }
        }
        if (this.io instanceof Output) {
          this.editor.connect(this.io, input);
          this.reset();
        }
      }
    }, {
      key: "pickConnection",
      value: function pickConnection(connection) {
        var output = connection.output;
        this.editor.removeConnection(connection);
        this.io = output;
      }
    }, {
      key: "io",
      get: function get() {
        return this._io;
      },
      set: function set(io) {
        this._io = io;
        this.view.updatePseudoConnection(io);
      }
    }]);
    return Picker2;
  }();
  var Flow = /* @__PURE__ */ function() {
    function Flow2(picker) {
      _classCallCheck2(this, Flow2);
      _defineProperty2(this, "picker", void 0);
      _defineProperty2(this, "target", void 0);
      this.picker = picker;
      this.target = null;
    }
    _createClass2(Flow2, [{
      key: "act",
      value: function act(_ref) {
        var input = _ref.input, output = _ref.output;
        if (this.unlock(input || output))
          return;
        if (input)
          this.picker.pickInput(input);
        else if (output)
          this.picker.pickOutput(output);
        else
          this.picker.reset();
      }
    }, {
      key: "start",
      value: function start(params, io) {
        this.act(params);
        this.target = io;
      }
    }, {
      key: "complete",
      value: function complete() {
        var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.act(params);
      }
    }, {
      key: "hasTarget",
      value: function hasTarget() {
        return Boolean(this.target);
      }
    }, {
      key: "unlock",
      value: function unlock(io) {
        var target = this.target;
        this.target = null;
        return target && target === io;
      }
    }]);
    return Flow2;
  }();
  ___$insertStyle(".connection {\n  overflow: visible !important;\n  position: absolute;\n  z-index: -1;\n  pointer-events: none; }\n  .connection > * {\n    pointer-events: all; }\n  .connection .main-path {\n    fill: none;\n    stroke-width: 5px;\n    stroke: steelblue; }\n");
  function install(editor2) {
    editor2.bind("connectionpath");
    editor2.bind("connectiondrop");
    editor2.bind("connectionpick");
    editor2.bind("resetconnection");
    var picker = new Picker(editor2);
    var flow = new Flow(picker);
    var socketsParams = /* @__PURE__ */ new WeakMap();
    function pointerDown(e) {
      var flowParams = socketsParams.get(this);
      if (flowParams) {
        var input = flowParams.input, output = flowParams.output;
        editor2.view.container.dispatchEvent(new PointerEvent("pointermove", e));
        e.preventDefault();
        e.stopPropagation();
        flow.start({
          input,
          output
        }, input || output);
      }
    }
    function pointerUp(e) {
      var flowEl = document.elementFromPoint(e.clientX, e.clientY);
      if (picker.io) {
        editor2.trigger("connectiondrop", picker.io);
      }
      if (flowEl) {
        flow.complete(getMapItemRecursively(socketsParams, flowEl) || {});
      }
    }
    editor2.on("resetconnection", function() {
      return flow.complete();
    });
    editor2.on("rendersocket", function(_ref) {
      var el = _ref.el, input = _ref.input, output = _ref.output;
      socketsParams.set(el, {
        input,
        output
      });
      el.removeEventListener("pointerdown", pointerDown);
      el.addEventListener("pointerdown", pointerDown);
    });
    window.addEventListener("pointerup", pointerUp);
    editor2.on("renderconnection", function(_ref2) {
      var el = _ref2.el, connection = _ref2.connection, points = _ref2.points;
      var d = renderPathData(editor2, points, connection);
      renderConnection({
        el,
        d,
        connection
      });
    });
    editor2.on("updateconnection", function(_ref3) {
      var el = _ref3.el, connection = _ref3.connection, points = _ref3.points;
      var d = renderPathData(editor2, points, connection);
      updateConnection({
        el,
        d
      });
    });
    editor2.on("destroy", function() {
      window.removeEventListener("pointerup", pointerUp);
    });
  }
  var index2 = {
    name: "connection",
    install
  };
  var connection_plugin_esm_default = index2;

  // dto-frontend/src/main.ts
  var import_rete_alight_render_plugin = __toESM(require_alight_render_plugin_min());
  var container = document.querySelector("#rete");
  if (!container) {
    throw new Error(
      'You dont have an element with the ID "rete" in your index.html file'
    );
  }
  var editor = new index.NodeEditor("demo@0.1.0", container);
  editor.use(connection_plugin_esm_default);
  editor.use(import_rete_alight_render_plugin.default);
  var dataSocket = new index.Socket("DataSocket");
  var DataComponent = class extends index.Component {
    constructor() {
      super("Data");
    }
    async builder(node) {
      const out1 = new index.Output("out", "Output", dataSocket);
      node.addOutput(out1);
    }
    worker() {
    }
  };
  var InfrastructureComponent = class extends index.Component {
    constructor() {
      super("Infrastructure");
    }
    async builder(node) {
      const out1 = new index.Output("out", "Output", dataSocket);
      node.addOutput(out1);
    }
    worker() {
    }
  };
  var ImplementationComponent = class extends index.Component {
    constructor() {
      super("Implementation");
    }
    async builder(node) {
      const out1 = new index.Output("out", "Output", dataSocket);
      node.addOutput(out1);
    }
    worker() {
    }
  };
  var SpecificationComponent = class extends index.Component {
    constructor() {
      super("Specification");
    }
    async builder(node) {
      const out1 = new index.Output("out", "Output", dataSocket);
      node.addOutput(out1);
    }
    worker() {
    }
  };
  var MainComponent = class extends index.Component {
    constructor() {
      super("MainComponent");
    }
    async builder(node) {
      const dataInput = new index.Input("dataIn", "Data", dataSocket);
      const infraInput = new index.Input("infraIn", "Infrastructure", dataSocket);
      const implInput = new index.Input("implIn", "Implementation", dataSocket);
      const specInput = new index.Input("specIn", "Specification", dataSocket);
      node.addInput(dataInput).addInput(infraInput).addInput(implInput).addInput(specInput);
    }
    worker() {
    }
  };
  var dataComponent = new DataComponent();
  var infrastructureComponent = new InfrastructureComponent();
  var implementationComponent = new ImplementationComponent();
  var specificationComponent = new SpecificationComponent();
  var mainComponent = new MainComponent();
  editor.register(dataComponent);
  editor.register(infrastructureComponent);
  editor.register(implementationComponent);
  editor.register(specificationComponent);
  editor.register(mainComponent);
  (async () => {
    const dataNode = await dataComponent.createNode();
    const infrastructureNode = await infrastructureComponent.createNode();
    const implementationNode = await implementationComponent.createNode();
    const specificationNode = await specificationComponent.createNode();
    const mainNode = await mainComponent.createNode();
    dataNode.position = [80, 100];
    infrastructureNode.position = [80, 250];
    implementationNode.position = [80, 400];
    specificationNode.position = [80, 550];
    mainNode.position = [400, 300];
    editor.addNode(dataNode);
    editor.addNode(infrastructureNode);
    editor.addNode(implementationNode);
    editor.addNode(specificationNode);
    editor.addNode(mainNode);
    editor.connect(
      dataNode.outputs.get("out"),
      mainNode.inputs.get("dataIn")
    );
    editor.connect(
      infrastructureNode.outputs.get("out"),
      mainNode.inputs.get("infraIn")
    );
    editor.connect(
      implementationNode.outputs.get("out"),
      mainNode.inputs.get("implIn")
    );
    editor.connect(
      specificationNode.outputs.get("out"),
      mainNode.inputs.get("specIn")
    );
    editor.trigger("process");
  })();
})();
/*! Bundled license information:

rete-alight-render-plugin/build/alight-render-plugin.min.js:
  (*!
  * rete-alight-render-plugin v0.1.5 
  * (c) 2018  License 
  * Released under the ISC license.
  *)

rete/build/rete.esm.js:
  (*!
  * rete v1.5.2 
  * (c) 2023 Vitaliy Stoliarov 
  * Released under the MIT license.
  *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

rete-connection-plugin/build/connection-plugin.esm.js:
  (*!
  * rete-connection-plugin v0.9.0 
  * (c) 2019 Vitaliy Stoliarov 
  * Released under the MIT license.
  *)
*/
