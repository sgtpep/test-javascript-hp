'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var Component = function () {
    function Component(name) {
      var _this = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Component);

      if (!name) throw 'No name argument';
      this.name = name;
      this.element = createElement(this, this.render());
      this.elements = queryElements(this.element, name);
      if (data != null) this.data = data;
      if (this.style) appendStyle(this.style());
      this.element.addEventListener('set-data', function (event) {
        return _this.data = event.detail;
      });
    }

    _createClass(Component, [{
      key: 'class',
      value: function _class() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        return this.name + (name ? '__' + name : '') + (modifier ? '_' + modifier : '');
      }
    }, {
      key: 'render',
      value: function render() {
        throw 'render() is not implemented';
      }
    }, {
      key: 'data',
      get: function get() {
        throw 'get data() is not implemented';
      },
      set: function set(value) {
        throw 'set data() is not implemented';
      }
    }]);

    return Component;
  }();

  var appendStyle = function appendStyle(css) {
    if (!Array.from(document.head.querySelectorAll('style')).some(function (style) {
      return style.textContent == css;
    })) {
      var style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }
  };

  var createElement = function createElement(component, html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    element.firstElementChild.component = component;
    return element.firstElementChild;
  };

  var queryElements = function queryElements(element, name) {
    var elements = {};
    Array.from(element.querySelectorAll('[class^=' + name + '__]')).forEach(function (element) {
      Array.from(element.classList).forEach(function (className) {
        var name = className.split('__', 2)[1].split('_', 1)[0].replace(/-(.)/g, function (match, char) {
          return char.toUpperCase();
        });
        if (!elements[name]) {
          elements[name] = element;
        } else if (!Array.isArray(elements[name])) {
          elements[name] = [elements[name], element];
        } else {
          elements[name].push(element);
        }
      });
    });
    return elements;
  };

  !function (t, e) {
    if ("object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module))) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
      var n = e();for (var r in n) {
        ("object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? exports : t)[r] = n[r];
      }
    }
  }(undefined, function () {
    return function (t) {
      function e(r) {
        if (n[r]) return n[r].exports;var o = n[r] = { exports: {}, id: r, loaded: !1 };return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
      }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
    }([function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }n(84);var o = n(41),
          i = r(o),
          a = function a() {
        i["default"].addPickerToOtherInputs(), i["default"].supportsDateInput() || i["default"].addPickerToDateInputs();
      };a(), document.addEventListener("DOMContentLoaded", function () {
        a();
      }), document.querySelector("body").addEventListener("mousedown", function () {
        a();
      });
    }, function (t, e, n) {
      t.exports = !n(11)(function () {
        return 7 != Object.defineProperty({}, "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, function (t, e) {
      var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
    }, function (t, e) {
      var n = {}.hasOwnProperty;t.exports = function (t, e) {
        return n.call(t, e);
      };
    }, function (t, e, n) {
      var r = n(9),
          o = n(32),
          i = n(25),
          a = Object.defineProperty;e.f = n(1) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
          return a(t, e, n);
        } catch (u) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (t[e] = n.value), t;
      };
    }, function (t, e, n) {
      var r = n(59),
          o = n(16);t.exports = function (t) {
        return r(o(t));
      };
    }, function (t, e, n) {
      var r = n(4),
          o = n(14);t.exports = n(1) ? function (t, e, n) {
        return r.f(t, e, o(1, n));
      } : function (t, e, n) {
        return t[e] = n, t;
      };
    }, function (t, e, n) {
      var r = n(23)("wks"),
          o = n(15),
          i = n(2).Symbol,
          a = "function" == typeof i,
          u = t.exports = function (t) {
        return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t));
      };u.store = r;
    }, function (t, e) {
      var n = t.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
    }, function (t, e, n) {
      var r = n(12);t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");return t;
      };
    }, function (t, e, n) {
      var r = n(2),
          o = n(8),
          i = n(56),
          a = n(6),
          u = "prototype",
          s = function s(t, e, n) {
        var c,
            l,
            f,
            d = t & s.F,
            p = t & s.G,
            h = t & s.S,
            y = t & s.P,
            m = t & s.B,
            v = t & s.W,
            b = p ? o : o[e] || (o[e] = {}),
            g = b[u],
            x = p ? r : h ? r[e] : (r[e] || {})[u];p && (n = e);for (c in n) {
          l = !d && x && void 0 !== x[c], l && c in b || (f = l ? x[c] : n[c], b[c] = p && "function" != typeof x[c] ? n[c] : m && l ? i(f, r) : v && x[c] == f ? function (t) {
            var e = function e(_e, n, r) {
              if (this instanceof t) {
                switch (arguments.length) {case 0:
                    return new t();case 1:
                    return new t(_e);case 2:
                    return new t(_e, n);}return new t(_e, n, r);
              }return t.apply(this, arguments);
            };return e[u] = t[u], e;
          }(f) : y && "function" == typeof f ? i(Function.call, f) : f, y && ((b.virtual || (b.virtual = {}))[c] = f, t & s.R && g && !g[c] && a(g, c, f)));
        }
      };s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s;
    }, function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    }, function (t, e) {
      t.exports = function (t) {
        return "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) ? null !== t : "function" == typeof t;
      };
    }, function (t, e, n) {
      var r = n(38),
          o = n(17);t.exports = Object.keys || function (t) {
        return r(t, o);
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    }, function (t, e) {
      var n = 0,
          r = Math.random();t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
      };
    }, function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
      };
    }, function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function (t, e) {
      t.exports = {};
    }, function (t, e) {
      t.exports = !0;
    }, function (t, e) {
      e.f = {}.propertyIsEnumerable;
    }, function (t, e, n) {
      var r = n(4).f,
          o = n(3),
          i = n(7)("toStringTag");t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, { configurable: !0, value: e });
      };
    }, function (t, e, n) {
      var r = n(23)("keys"),
          o = n(15);t.exports = function (t) {
        return r[t] || (r[t] = o(t));
      };
    }, function (t, e, n) {
      var r = n(2),
          o = "__core-js_shared__",
          i = r[o] || (r[o] = {});t.exports = function (t) {
        return i[t] || (i[t] = {});
      };
    }, function (t, e) {
      var n = Math.ceil,
          r = Math.floor;t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
      };
    }, function (t, e, n) {
      var r = n(12);t.exports = function (t, e) {
        if (!r(t)) return t;var n, o;if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;throw TypeError("Can't convert object to primitive value");
      };
    }, function (t, e, n) {
      var r = n(2),
          o = n(8),
          i = n(19),
          a = n(27),
          u = n(4).f;t.exports = function (t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});"_" == t.charAt(0) || t in e || u(e, t, { value: a.f(t) });
      };
    }, function (t, e, n) {
      e.f = n(7);
    }, function (t, e) {
      e.__esModule = !0, e["default"] = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      };
    }, function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }e.__esModule = !0;var o = n(45),
          i = r(o);e["default"] = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i["default"])(t, r.key, r);
          }
        }return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      }();
    }, function (t, e) {
      var n = {}.toString;t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }, function (t, e, n) {
      var r = n(12),
          o = n(2).document,
          i = r(o) && r(o.createElement);t.exports = function (t) {
        return i ? o.createElement(t) : {};
      };
    }, function (t, e, n) {
      t.exports = !n(1) && !n(11)(function () {
        return 7 != Object.defineProperty(n(31)("div"), "a", { get: function get() {
            return 7;
          } }).a;
      });
    }, function (t, e, n) {
      var r = n(19),
          o = n(10),
          i = n(39),
          a = n(6),
          u = n(3),
          s = n(18),
          c = n(61),
          l = n(21),
          f = n(67),
          d = n(7)("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = "@@iterator",
          y = "keys",
          m = "values",
          v = function v() {
        return this;
      };t.exports = function (t, e, n, b, g, x, M) {
        c(n, e, b);var w,
            S,
            O,
            D = function D(t) {
          if (!p && t in k) return k[t];switch (t) {case y:
              return function () {
                return new n(this, t);
              };case m:
              return function () {
                return new n(this, t);
              };}return function () {
            return new n(this, t);
          };
        },
            T = e + " Iterator",
            _ = g == m,
            A = !1,
            k = t.prototype,
            E = k[d] || k[h] || g && k[g],
            j = E || D(g),
            C = g ? _ ? D("entries") : j : void 0,
            N = "Array" == e ? k.entries || E : E;if (N && (O = f(N.call(new t())), O !== Object.prototype && (l(O, T, !0), r || u(O, d) || a(O, d, v))), _ && E && E.name !== m && (A = !0, j = function j() {
          return E.call(this);
        }), r && !M || !p && !A && k[d] || a(k, d, j), s[e] = j, s[T] = v, g) if (w = { values: _ ? j : D(m), keys: x ? j : D(y), entries: C }, M) for (S in w) {
          S in k || i(k, S, w[S]);
        } else o(o.P + o.F * (p || A), e, w);return w;
      };
    }, function (t, e, n) {
      var r = n(9),
          o = n(35),
          i = n(17),
          a = n(22)("IE_PROTO"),
          u = function u() {},
          s = "prototype",
          _c = function c() {
        var t,
            e = n(31)("iframe"),
            r = i.length,
            o = "<",
            a = ">";for (e.style.display = "none", n(58).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + a + "document.F=Object" + o + "/script" + a), t.close(), _c = t.F; r--;) {
          delete _c[s][i[r]];
        }return _c();
      };t.exports = Object.create || function (t, e) {
        var n;return null !== t ? (u[s] = r(t), n = new u(), u[s] = null, n[a] = t) : n = _c(), void 0 === e ? n : o(n, e);
      };
    }, function (t, e, n) {
      var r = n(4),
          o = n(9),
          i = n(13);t.exports = n(1) ? Object.defineProperties : function (t, e) {
        o(t);for (var n, a = i(e), u = a.length, s = 0; u > s;) {
          r.f(t, n = a[s++], e[n]);
        }return t;
      };
    }, function (t, e, n) {
      var r = n(38),
          o = n(17).concat("length", "prototype");e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o);
      };
    }, function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
      var r = n(3),
          o = n(5),
          i = n(55)(!1),
          a = n(22)("IE_PROTO");t.exports = function (t, e) {
        var n,
            u = o(t),
            s = 0,
            c = [];for (n in u) {
          n != a && r(u, n) && c.push(n);
        }for (; e.length > s;) {
          r(u, n = e[s++]) && (~i(c, n) || c.push(n));
        }return c;
      };
    }, function (t, e, n) {
      t.exports = n(6);
    }, function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }function o(t, e) {
        for (t = String(t), e = e || 2; t.length < e;) {
          t = "0" + t;
        }return t;
      }function i(t) {
        var e = new Date(t.getFullYear(), t.getMonth(), t.getDate());e.setDate(e.getDate() - (e.getDay() + 6) % 7 + 3);var n = new Date(e.getFullYear(), 0, 4);n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);var r = e.getTimezoneOffset() - n.getTimezoneOffset();e.setHours(e.getHours() - r);var o = (e - n) / 6048e5;return 1 + Math.floor(o);
      }function a(t) {
        var e = t.getDay();return 0 === e && (e = 7), e;
      }function u(t) {
        return null === t ? "null" : void 0 === t ? "undefined" : "object" !== ("undefined" == typeof t ? "undefined" : (0, c["default"])(t)) ? "undefined" == typeof t ? "undefined" : (0, c["default"])(t) : Array.isArray(t) ? "array" : {}.toString.call(t).slice(8, -1).toLowerCase();
      }Object.defineProperty(e, "__esModule", { value: !0 });var s = n(48),
          c = r(s),
          l = function () {
        var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,
            e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            n = /[^-+\dA-Z]/g;return function (r, s, c, f) {
          if (1 !== arguments.length || "string" !== u(r) || /\d/.test(r) || (s = r, r = void 0), r = r || new Date(), r instanceof Date || (r = new Date(r)), isNaN(r)) throw TypeError("Invalid date");s = String(l.masks[s] || s || l.masks["default"]);var d = s.slice(0, 4);"UTC:" !== d && "GMT:" !== d || (s = s.slice(4), c = !0, "GMT:" === d && (f = !0));var p = c ? "getUTC" : "get",
              h = r[p + "Date"](),
              y = r[p + "Day"](),
              m = r[p + "Month"](),
              v = r[p + "FullYear"](),
              b = r[p + "Hours"](),
              g = r[p + "Minutes"](),
              x = r[p + "Seconds"](),
              M = r[p + "Milliseconds"](),
              w = c ? 0 : r.getTimezoneOffset(),
              S = i(r),
              O = a(r),
              D = { d: h, dd: o(h), ddd: l.i18n.dayNames[y], dddd: l.i18n.dayNames[y + 7], m: m + 1, mm: o(m + 1), mmm: l.i18n.monthNames[m], mmmm: l.i18n.monthNames[m + 12], yy: String(v).slice(2), yyyy: v, h: b % 12 || 12, hh: o(b % 12 || 12), H: b, HH: o(b), M: g, MM: o(g), s: x, ss: o(x), l: o(M, 3), L: o(Math.round(M / 10)), t: b < 12 ? "a" : "p", tt: b < 12 ? "am" : "pm", T: b < 12 ? "A" : "P", TT: b < 12 ? "AM" : "PM", Z: f ? "GMT" : c ? "UTC" : (String(r).match(e) || [""]).pop().replace(n, ""), o: (w > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(w) / 60) + Math.abs(w) % 60, 4), S: ["th", "st", "nd", "rd"][h % 10 > 3 ? 0 : (h % 100 - h % 10 != 10) * h % 10], W: S, N: O };return s.replace(t, function (t) {
            return t in D ? D[t] : t.slice(1, t.length - 1);
          });
        };
      }();l.masks = { "default": "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, l.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, e["default"] = l;
    }, function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(44),
          i = r(o),
          a = n(28),
          u = r(a),
          s = n(29),
          c = r(s),
          l = n(43),
          f = r(l),
          d = n(42),
          p = r(d),
          h = n(40),
          y = r(h),
          m = function () {
        function t(e) {
          var n = this;(0, u["default"])(this, t), this.element = e, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i["default"])(this.element, { valueAsDate: { get: function get() {
                if (!n.element.value) return null;var t = n.format || "yyyy-mm-dd",
                    e = n.element.value.match(/(\d+)/g),
                    r = 0,
                    o = {};return t.replace(/(yyyy|dd|mm)/g, function (t) {
                  o[t] = r++;
                }), new Date(e[o.yyyy], e[o.mm] - 1, e[o.dd]);
              }, set: function set(t) {
                n.element.value = (0, y["default"])(t, n.format);
              } }, valueAsNumber: { get: function get() {
                return n.element.value ? n.element.valueAsDate.valueOf() : NaN;
              }, set: function set(t) {
                n.element.valueAsDate = new Date(t);
              } } });var r = function r(t) {
            var e = n.element;e.locale = n.localeText, f["default"].attachTo(e);
          };this.element.addEventListener("focus", r), this.element.addEventListener("mouseup", r), this.element.addEventListener("keydown", function (t) {
            var e = new Date();switch (t.keyCode) {case 9:case 27:
                f["default"].hide();break;case 38:
                n.element.valueAsDate && (e.setDate(n.element.valueAsDate.getDate() + 1), n.element.valueAsDate = e, f["default"].pingInput());break;case 40:
                n.element.valueAsDate && (e.setDate(n.element.valueAsDate.getDate() - 1), n.element.valueAsDate = e, f["default"].pingInput());}f["default"].sync();
          }), this.element.addEventListener("keyup", function (t) {
            f["default"].sync();
          });
        }return (0, c["default"])(t, [{ key: "getLocaleText", value: function value() {
            var t = this.locale.toLowerCase();for (var e in p["default"]) {
              var n = e.split("_");if (n.map(function (t) {
                return t.toLowerCase();
              }), ~n.indexOf(t) || ~n.indexOf(t.substr(0, 2))) return p["default"][e];
            }
          } }], [{ key: "supportsDateInput", value: function value() {
            var t = document.createElement("input");t.setAttribute("type", "date");var e = "not-a-date";return t.setAttribute("value", e), !(t.value === e);
          } }, { key: "addPickerToDateInputs", value: function value() {
            var e = document.querySelectorAll('input[type="date"]:not([data-has-picker])'),
                n = e.length;if (!n) return !1;for (var r = 0; r < n; ++r) {
              new t(e[r]);
            }
          } }, { key: "addPickerToOtherInputs", value: function value() {
            var e = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'),
                n = e.length;if (!n) return !1;for (var r = 0; r < n; ++r) {
              new t(e[r]);
            }
          } }]), t;
      }();e["default"] = m;
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });var n = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };e["default"] = n;
    }, function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }Object.defineProperty(e, "__esModule", { value: !0 });var o = n(28),
          i = r(o),
          a = n(29),
          u = r(a),
          s = function () {
        function t() {
          var e = this;if ((0, i["default"])(this, t), window.thePicker) return window.thePicker;this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), t.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function () {
            e.date.setYear(e.year.value), e.refreshDaysMatrix();
          });var n = document.createElement("span");n.className = "yearSelect-wrapper", n.appendChild(this.year), this.container.appendChild(n), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function () {
            e.date.setMonth(e.month.value), e.refreshDaysMatrix();
          });var r = document.createElement("span");r.className = "monthSelect-wrapper", r.appendChild(this.month), this.container.appendChild(r), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function () {
            var t = new Date();e.date = new Date(t.getFullYear() + "/" + ("0" + (t.getMonth() + 1)).slice(-2) + "/" + ("0" + t.getDate()).slice(-2)), e.setInput();
          }), this.container.appendChild(this.today);var o = document.createElement("table");this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function (t) {
            var n = t.target;if (!n.hasAttribute("data-day")) return !1;var r = e.days.querySelector("[data-selected]");r && r.removeAttribute("data-selected"), n.setAttribute("data-selected", ""), e.date.setDate(parseInt(n.textContent)), e.setInput();
          }), o.appendChild(this.daysHead), o.appendChild(this.days), this.container.appendChild(o), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function (t) {
            if (e.isOpen) {
              for (var n = t.target, r = n === e.container || n === e.input; !r && (n = n.parentNode);) {
                r = n === e.container;
              }("date" !== t.target.getAttribute("type") && !r || !r) && e.hide();
            }
          }, this.removeBlur = function (t) {
            e.isOpen && e.hide();
          };
        }return (0, u["default"])(t, [{ key: "hide", value: function value() {
            this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
          } }, { key: "show", value: function value() {
            var t = this;this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function () {
              document.addEventListener("mousedown", t.removeClickOut), document.addEventListener("touchstart", t.removeClickOut);
            }, 500), window.onpopstate = function () {
              t.hide();
            };
          } }, { key: "goto", value: function value(t) {
            var e = this,
                n = t.getBoundingClientRect();this.container.style.top = n.top + n.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";var r = this.container.getBoundingClientRect(),
                o = r.width ? r.width : 280,
                i = function i() {
              return e.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
            },
                a = n.right - o;n.right < o ? (a = n.left, this.container.className = i() + " polyfill-left-aligned") : this.container.className = i() + " polyfill-right-aligned", this.container.style.left = a + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
          } }, { key: "attachTo", value: function value(t) {
            return !(t === this.input && this.isOpen || (this.input = t, this.refreshLocale(), this.sync(), this["goto"](this.input), 0));
          } }, { key: "sync", value: function value() {
            isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = t.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
          } }, { key: "setInput", value: function value() {
            var t = this;this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function () {
              t.hide();
            }, 100), this.pingInput();
          } }, { key: "refreshLocale", value: function value() {
            if (this.locale === this.input.locale) return !1;this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";for (var e = ["<tr>"], n = 0, r = this.locale.days.length; n < r; ++n) {
              e.push('<th scope="col">' + this.locale.days[n] + "</th>");
            }this.daysHead.innerHTML = e.join(""), t.createRangeSelect(this.month, 0, 11, this.locale.months);
          } }, { key: "refreshDaysMatrix", value: function value() {
            this.refreshLocale();for (var e = this.date.getFullYear(), n = this.date.getMonth(), r = new Date(e, n, 1).getDay(), o = new Date(this.date.getFullYear(), n + 1, 0).getDate(), i = t.absoluteDate(this.input.valueAsDate) || !1, a = i && e === i.getFullYear() && n === i.getMonth(), u = [], s = 0; s < o + r; ++s) {
              if (s % 7 === 0 && u.push("\n          " + (0 !== s ? "</tr>" : "") + "\n          <tr>\n        "), s + 1 <= r) u.push("<td></td>");else {
                var c = s + 1 - r,
                    l = a && i.getDate() === c;u.push("<td data-day " + (l ? "data-selected" : "") + ">\n          " + c + "\n        </td>");
              }
            }this.days.innerHTML = u.join("");
          } }, { key: "pingInput", value: function value() {
            var t = void 0,
                e = void 0;try {
              t = new Event("input"), e = new Event("change");
            } catch (n) {
              t = document.createEvent("KeyboardEvent"), t.initEvent("input", !0, !1), e = document.createEvent("KeyboardEvent"), e.initEvent("change", !0, !1);
            }this.input.dispatchEvent(t), this.input.dispatchEvent(e);
          } }], [{ key: "createRangeSelect", value: function value(t, e, n, r) {
            t.innerHTML = "";for (var o = e; o <= n; ++o) {
              var i = document.createElement("option");t.appendChild(i);var a = r ? r[o - e] : o;i.text = a, i.value = o;
            }return t;
          } }, { key: "absoluteDate", value: function value(t) {
            return t && new Date(t.getTime() + 60 * t.getTimezoneOffset() * 1e3);
          } }]), t;
      }();window.thePicker = new s(), e["default"] = window.thePicker;
    }, function (t, e, n) {
      t.exports = { "default": n(49), __esModule: !0 };
    }, function (t, e, n) {
      t.exports = { "default": n(50), __esModule: !0 };
    }, function (t, e, n) {
      t.exports = { "default": n(51), __esModule: !0 };
    }, function (t, e, n) {
      t.exports = { "default": n(52), __esModule: !0 };
    }, function (t, e, n) {
      function r(t) {
        return t && t.__esModule ? t : { "default": t };
      }e.__esModule = !0;var o = n(47),
          i = r(o),
          a = n(46),
          u = r(a),
          s = "function" == typeof u["default"] && "symbol" == _typeof(i["default"]) ? function (t) {
        return typeof t === 'undefined' ? 'undefined' : _typeof(t);
      } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
      };e["default"] = "function" == typeof u["default"] && "symbol" === s(i["default"]) ? function (t) {
        return "undefined" == typeof t ? "undefined" : s(t);
      } : function (t) {
        return t && "function" == typeof u["default"] && t.constructor === u["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : s(t);
      };
    }, function (t, e, n) {
      n(73);var r = n(8).Object;t.exports = function (t, e) {
        return r.defineProperties(t, e);
      };
    }, function (t, e, n) {
      n(74);var r = n(8).Object;t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n);
      };
    }, function (t, e, n) {
      n(77), n(75), n(78), n(79), t.exports = n(8).Symbol;
    }, function (t, e, n) {
      n(76), n(80), t.exports = n(27).f("iterator");
    }, function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
      };
    }, function (t, e) {
      t.exports = function () {};
    }, function (t, e, n) {
      var r = n(5),
          o = n(70),
          i = n(69);t.exports = function (t) {
        return function (e, n, a) {
          var u,
              s = r(e),
              c = o(s.length),
              l = i(a, c);if (t && n != n) {
            for (; c > l;) {
              if (u = s[l++], u != u) return !0;
            }
          } else for (; c > l; l++) {
            if ((t || l in s) && s[l] === n) return t || l || 0;
          }return !t && -1;
        };
      };
    }, function (t, e, n) {
      var r = n(53);t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;switch (n) {case 1:
            return function (n) {
              return t.call(e, n);
            };case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };case 3:
            return function (n, r, o) {
              return t.call(e, n, r, o);
            };}return function () {
          return t.apply(e, arguments);
        };
      };
    }, function (t, e, n) {
      var r = n(13),
          o = n(37),
          i = n(20);t.exports = function (t) {
        var e = r(t),
            n = o.f;if (n) for (var a, u = n(t), s = i.f, c = 0; u.length > c;) {
          s.call(t, a = u[c++]) && e.push(a);
        }return e;
      };
    }, function (t, e, n) {
      t.exports = n(2).document && document.documentElement;
    }, function (t, e, n) {
      var r = n(30);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t);
      };
    }, function (t, e, n) {
      var r = n(30);t.exports = Array.isArray || function (t) {
        return "Array" == r(t);
      };
    }, function (t, e, n) {
      var r = n(34),
          o = n(14),
          i = n(21),
          a = {};n(6)(a, n(7)("iterator"), function () {
        return this;
      }), t.exports = function (t, e, n) {
        t.prototype = r(a, { next: o(1, n) }), i(t, e + " Iterator");
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return { value: e, done: !!t };
      };
    }, function (t, e, n) {
      var r = n(13),
          o = n(5);t.exports = function (t, e) {
        for (var n, i = o(t), a = r(i), u = a.length, s = 0; u > s;) {
          if (i[n = a[s++]] === e) return n;
        }
      };
    }, function (t, e, n) {
      var r = n(15)("meta"),
          o = n(12),
          i = n(3),
          a = n(4).f,
          u = 0,
          s = Object.isExtensible || function () {
        return !0;
      },
          c = !n(11)(function () {
        return s(Object.preventExtensions({}));
      }),
          l = function l(t) {
        a(t, r, { value: { i: "O" + ++u, w: {} } });
      },
          f = function f(t, e) {
        if (!o(t)) return "symbol" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) ? t : ("string" == typeof t ? "S" : "P") + t;if (!i(t, r)) {
          if (!s(t)) return "F";if (!e) return "E";l(t);
        }return t[r].i;
      },
          d = function d(t, e) {
        if (!i(t, r)) {
          if (!s(t)) return !0;if (!e) return !1;l(t);
        }return t[r].w;
      },
          p = function p(t) {
        return c && h.NEED && s(t) && !i(t, r) && l(t), t;
      },
          h = t.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: d, onFreeze: p };
    }, function (t, e, n) {
      var r = n(20),
          o = n(14),
          i = n(5),
          a = n(25),
          u = n(3),
          s = n(32),
          c = Object.getOwnPropertyDescriptor;e.f = n(1) ? c : function (t, e) {
        if (t = i(t), e = a(e, !0), s) try {
          return c(t, e);
        } catch (n) {}if (u(t, e)) return o(!r.f.call(t, e), t[e]);
      };
    }, function (t, e, n) {
      var r = n(5),
          o = n(36).f,
          i = {}.toString,
          a = "object" == (typeof window === 'undefined' ? 'undefined' : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          u = function u(t) {
        try {
          return o(t);
        } catch (e) {
          return a.slice();
        }
      };t.exports.f = function (t) {
        return a && "[object Window]" == i.call(t) ? u(t) : o(r(t));
      };
    }, function (t, e, n) {
      var r = n(3),
          o = n(71),
          i = n(22)("IE_PROTO"),
          a = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
      };
    }, function (t, e, n) {
      var r = n(24),
          o = n(16);t.exports = function (t) {
        return function (e, n) {
          var i,
              a,
              u = String(o(e)),
              s = r(n),
              c = u.length;return s < 0 || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : (i - 55296 << 10) + (a - 56320) + 65536);
        };
      };
    }, function (t, e, n) {
      var r = n(24),
          o = Math.max,
          i = Math.min;t.exports = function (t, e) {
        return t = r(t), t < 0 ? o(t + e, 0) : i(t, e);
      };
    }, function (t, e, n) {
      var r = n(24),
          o = Math.min;t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    }, function (t, e, n) {
      var r = n(16);t.exports = function (t) {
        return Object(r(t));
      };
    }, function (t, e, n) {
      var r = n(54),
          o = n(62),
          i = n(18),
          a = n(5);t.exports = n(33)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e;
      }, function () {
        var t = this._t,
            e = this._k,
            n = this._i++;return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
      }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function (t, e, n) {
      var r = n(10);r(r.S + r.F * !n(1), "Object", { defineProperties: n(35) });
    }, function (t, e, n) {
      var r = n(10);r(r.S + r.F * !n(1), "Object", { defineProperty: n(4).f });
    }, function (t, e) {}, function (t, e, n) {
      var r = n(68)(!0);n(33)(String, "String", function (t) {
        this._t = String(t), this._i = 0;
      }, function () {
        var t,
            e = this._t,
            n = this._i;return n >= e.length ? { value: void 0, done: !0 } : (t = r(e, n), this._i += t.length, { value: t, done: !1 });
      });
    }, function (t, e, n) {
      var r = n(2),
          o = n(3),
          i = n(1),
          a = n(10),
          u = n(39),
          s = n(64).KEY,
          c = n(11),
          l = n(23),
          f = n(21),
          d = n(15),
          p = n(7),
          h = n(27),
          y = n(26),
          m = n(63),
          v = n(57),
          b = n(60),
          g = n(9),
          x = n(5),
          M = n(25),
          w = n(14),
          S = n(34),
          O = n(66),
          D = n(65),
          T = n(4),
          _ = n(13),
          A = D.f,
          k = T.f,
          E = O.f,
          _j = r.Symbol,
          C = r.JSON,
          N = C && C.stringify,
          L = "prototype",
          P = p("_hidden"),
          F = p("toPrimitive"),
          J = {}.propertyIsEnumerable,
          H = l("symbol-registry"),
          I = l("symbols"),
          Y = l("op-symbols"),
          R = Object[L],
          z = "function" == typeof _j,
          U = r.QObject,
          B = !U || !U[L] || !U[L].findChild,
          W = i && c(function () {
        return 7 != S(k({}, "a", { get: function get() {
            return k(this, "a", { value: 7 }).a;
          } })).a;
      }) ? function (t, e, n) {
        var r = A(R, e);r && delete R[e], k(t, e, n), r && t !== R && k(R, e, r);
      } : k,
          Z = function Z(t) {
        var e = I[t] = S(_j[L]);return e._k = t, e;
      },
          G = z && "symbol" == _typeof(_j.iterator) ? function (t) {
        return "symbol" == (typeof t === 'undefined' ? 'undefined' : _typeof(t));
      } : function (t) {
        return t instanceof _j;
      },
          K = function K(t, e, n) {
        return t === R && K(Y, e, n), g(t), e = M(e, !0), g(n), o(I, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1), n = S(n, { enumerable: w(0, !1) })) : (o(t, P) || k(t, P, w(1, {})), t[P][e] = !0), W(t, e, n)) : k(t, e, n);
      },
          V = function V(t, e) {
        g(t);for (var n, r = v(e = x(e)), o = 0, i = r.length; i > o;) {
          K(t, n = r[o++], e[n]);
        }return t;
      },
          q = function q(t, e) {
        return void 0 === e ? S(t) : V(S(t), e);
      },
          Q = function Q(t) {
        var e = J.call(this, t = M(t, !0));return !(this === R && o(I, t) && !o(Y, t)) && (!(e || !o(this, t) || !o(I, t) || o(this, P) && this[P][t]) || e);
      },
          X = function X(t, e) {
        if (t = x(t), e = M(e, !0), t !== R || !o(I, e) || o(Y, e)) {
          var n = A(t, e);return !n || !o(I, e) || o(t, P) && t[P][e] || (n.enumerable = !0), n;
        }
      },
          $ = function $(t) {
        for (var e, n = E(x(t)), r = [], i = 0; n.length > i;) {
          o(I, e = n[i++]) || e == P || e == s || r.push(e);
        }return r;
      },
          tt = function tt(t) {
        for (var e, n = t === R, r = E(n ? Y : x(t)), i = [], a = 0; r.length > a;) {
          !o(I, e = r[a++]) || n && !o(R, e) || i.push(I[e]);
        }return i;
      };z || (_j = function j() {
        if (this instanceof _j) throw TypeError("Symbol is not a constructor!");var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function e(n) {
          this === R && e.call(Y, n), o(this, P) && o(this[P], t) && (this[P][t] = !1), W(this, t, w(1, n));
        };return i && B && W(R, t, { configurable: !0, set: e }), Z(t);
      }, u(_j[L], "toString", function () {
        return this._k;
      }), D.f = X, T.f = K, n(36).f = O.f = $, n(20).f = Q, n(37).f = tt, i && !n(19) && u(R, "propertyIsEnumerable", Q, !0), h.f = function (t) {
        return Z(p(t));
      }), a(a.G + a.W + a.F * !z, { Symbol: _j });for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
        p(et[nt++]);
      }for (var et = _(p.store), nt = 0; et.length > nt;) {
        y(et[nt++]);
      }a(a.S + a.F * !z, "Symbol", { "for": function _for(t) {
          return o(H, t += "") ? H[t] : H[t] = _j(t);
        }, keyFor: function keyFor(t) {
          if (G(t)) return m(H, t);throw TypeError(t + " is not a symbol!");
        }, useSetter: function useSetter() {
          B = !0;
        }, useSimple: function useSimple() {
          B = !1;
        } }), a(a.S + a.F * !z, "Object", { create: q, defineProperty: K, defineProperties: V, getOwnPropertyDescriptor: X, getOwnPropertyNames: $, getOwnPropertySymbols: tt }), C && a(a.S + a.F * (!z || c(function () {
        var t = _j();return "[null]" != N([t]) || "{}" != N({ a: t }) || "{}" != N(Object(t));
      })), "JSON", { stringify: function stringify(t) {
          if (void 0 !== t && !G(t)) {
            for (var e, n, r = [t], o = 1; arguments.length > o;) {
              r.push(arguments[o++]);
            }return e = r[1], "function" == typeof e && (n = e), !n && b(e) || (e = function e(t, _e2) {
              if (n && (_e2 = n.call(this, t, _e2)), !G(_e2)) return _e2;
            }), r[1] = e, N.apply(C, r);
          }
        } }), _j[L][F] || n(6)(_j[L], F, _j[L].valueOf), f(_j, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
    }, function (t, e, n) {
      n(26)("asyncIterator");
    }, function (t, e, n) {
      n(26)("observable");
    }, function (t, e, n) {
      n(72);for (var r = n(2), o = n(6), i = n(18), a = n(7)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], s = 0; s < 5; s++) {
        var c = u[s],
            l = r[c],
            f = l && l.prototype;f && !f[a] && o(f, a, c), i[c] = i.Array;
      }
    }, function (t, e, n) {
      e = t.exports = n(82)(), e.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function (t, e) {
      t.exports = function () {
        var t = [];return t.toString = function () {
          for (var t = [], e = 0; e < this.length; e++) {
            var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
          }return t.join("");
        }, t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];"number" == typeof i && (r[i] = !0);
          }for (o = 0; o < e.length; o++) {
            var a = e[o];"number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
          }
        }, t;
      };
    }, function (t, e, n) {
      function r(t, e) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
              o = p[r.id];if (o) {
            o.refs++;for (var i = 0; i < o.parts.length; i++) {
              o.parts[i](r.parts[i]);
            }for (; i < r.parts.length; i++) {
              o.parts.push(c(r.parts[i], e));
            }
          } else {
            for (var a = [], i = 0; i < r.parts.length; i++) {
              a.push(c(r.parts[i], e));
            }p[r.id] = { id: r.id, refs: 1, parts: a };
          }
        }
      }function o(t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) {
          var o = t[r],
              i = o[0],
              a = o[1],
              u = o[2],
              s = o[3],
              c = { css: a, media: u, sourceMap: s };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
        }return e;
      }function i(t, e) {
        var n = m(),
            r = g[g.length - 1];if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e);else {
          if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
        }
      }function a(t) {
        t.parentNode.removeChild(t);var e = g.indexOf(t);e >= 0 && g.splice(e, 1);
      }function u(t) {
        var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
      }function s(t) {
        var e = document.createElement("link");return e.rel = "stylesheet", i(t, e), e;
      }function c(t, e) {
        var n, r, o;if (e.singleton) {
          var i = b++;n = v || (v = u(e)), r = l.bind(null, n, i, !1), o = l.bind(null, n, i, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(e), r = d.bind(null, n), o = function o() {
          a(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = u(e), r = f.bind(null, n), o = function o() {
          a(n);
        });return r(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;r(t = e);
          } else o();
        };
      }function l(t, e, n, r) {
        var o = n ? "" : r.css;if (t.styleSheet) t.styleSheet.cssText = x(e, o);else {
          var i = document.createTextNode(o),
              a = t.childNodes;a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
        }
      }function f(t, e) {
        var n = e.css,
            r = e.media;if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }t.appendChild(document.createTextNode(n));
        }
      }function d(t, e) {
        var n = e.css,
            r = e.sourceMap;r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");var o = new Blob([n], { type: "text/css" }),
            i = t.href;t.href = URL.createObjectURL(o), i && URL.revokeObjectURL(i);
      }var p = {},
          h = function h(t) {
        var e;return function () {
          return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
        };
      },
          y = h(function () {
        return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        );
      }),
          m = h(function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
          v = null,
          b = 0,
          g = [];t.exports = function (t, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = y()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = o(t);return r(n, e), function (t) {
          for (var i = [], a = 0; a < n.length; a++) {
            var u = n[a],
                s = p[u.id];s.refs--, i.push(s);
          }if (t) {
            var c = o(t);r(c, e);
          }for (var a = 0; a < i.length; a++) {
            var s = i[a];if (0 === s.refs) {
              for (var l = 0; l < s.parts.length; l++) {
                s.parts[l]();
              }delete p[s.id];
            }
          }
        };
      };var x = function () {
        var t = [];return function (e, n) {
          return t[e] = n, t.filter(Boolean).join("\n");
        };
      }();
    }, function (t, e, n) {
      var r = n(81);"string" == typeof r && (r = [[t.id, r, ""]]), n(83)(r, {}), r.locals && (t.exports = r.locals);
    }]);
  });

  var UserEducationBlock = function (_Component) {
    _inherits(UserEducationBlock, _Component);

    function UserEducationBlock() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, UserEducationBlock);

      var _this2 = _possibleConstructorReturn(this, (UserEducationBlock.__proto__ || Object.getPrototypeOf(UserEducationBlock)).call(this, 'user-education-block', data));

      _this2.validate();
      _this2.elements.name.addEventListener('input', function () {
        return _this2.validateName();
      });
      _this2.elements.date.forEach(function (element) {
        return element.addEventListener('input', function () {
          return _this2.validateDates();
        });
      });
      return _this2;
    }

    _createClass(UserEducationBlock, [{
      key: 'render',
      value: function render() {
        return '\n    <div class="' + this.class() + '">\n      <div>\n        <div class="' + this.class('row') + '">\n          <span class="' + this.class('label') + '">name:</span>\n          <span>\n            <input class="' + this.class('name') + '" required>\n            <div class="' + this.class('error') + ' ' + this.class('name-error') + '"></div>\n          </span>\n        </div>\n        <div class="' + this.class('row') + '">\n          <span class="' + this.class('label') + '">start date:</span>\n          <input class="' + this.class('date') + ' ' + this.class('start-date') + '" required type="date">\n          <span class="' + this.class('label') + '">end date:</span>\n          <input class="' + this.class('date') + ' ' + this.class('end-date') + '" required type="date">\n          <div class="' + this.class('error') + ' ' + this.class('date-error') + '"></div>\n        </div>\n      </div>\n      <div>\n        <a class="' + this.class('button') + ' ' + this.class('remove') + '">-</a>\n        <a class="' + this.class('button') + ' ' + this.class('add') + '">+</a>\n      </div>\n    </div>\n    ';
      }
    }, {
      key: 'style',
      value: function style() {
        return '\n    .' + this.class() + ' > * {\n      display: table-cell;\n    }\n    .' + this.class() + ' > :last-child {\n      padding-left: 1em;\n    }\n    .' + this.class() + ' :invalid {\n      box-shadow: none;\n    }\n    .' + this.class('button') + ' {\n      cursor: pointer;\n      font-size: x-large;\n      font-weight: bold;\n    }\n    .' + this.class('error') + ' {\n      color: red;\n    }\n    .' + this.class('name') + ' {\n      width: 25em;\n    }\n    .' + this.class('row') + ' {\n      margin: 0.5em 0;\n    }\n    ';
      }
    }, {
      key: 'validate',
      value: function validate() {
        this.validateName();
        this.validateDates();
      }
    }, {
      key: 'validateDates',
      value: function validateDates() {
        var isRangeValid = this.elements.startDate.value < this.elements.endDate.value;
        this.elements.dateError.hidden = this.elements.startDate.validity.valid && this.elements.endDate.validity.valid && isRangeValid;
        this.elements.dateError.textContent = this.elements.startDate.validationMessage || this.elements.endDate.validationMessage || !isRangeValid && 'End date should be greater than start date.';
      }
    }, {
      key: 'validateName',
      value: function validateName() {
        this.elements.nameError.hidden = this.elements.name.validity.valid;
        this.elements.nameError.textContent = this.elements.name.validationMessage;
      }
    }, {
      key: 'data',
      get: function get() {
        var _this3 = this;

        return ['name', 'startDate', 'endDate'].reduce(function (value, key) {
          return _extends({}, value, _defineProperty({}, key, _this3.elements[key].value));
        }, {});
      },
      set: function set(value) {
        var _this4 = this;

        ['name', 'startDate', 'endDate'].forEach(function (key) {
          return _this4.elements[key].value = value[key] || '';
        });
      }
    }]);

    return UserEducationBlock;
  }(Component);

  var UserEducation = function (_Component2) {
    _inherits(UserEducation, _Component2);

    function UserEducation() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}];

      _classCallCheck(this, UserEducation);

      return _possibleConstructorReturn(this, (UserEducation.__proto__ || Object.getPrototypeOf(UserEducation)).call(this, 'user-education', data));
    }

    _createClass(UserEducation, [{
      key: 'createBlock',
      value: function createBlock(data) {
        var _this6 = this;

        var block = new UserEducationBlock(data);
        block.elements.add.addEventListener('click', function () {
          _this6.data = _this6.data.concat({});
        });
        block.elements.remove.addEventListener('click', function () {
          _this6.data = _this6.data.filter(function (data, index) {
            return Array.from(_this6.element.children).indexOf(block.element) != index;
          });
        });
        return block;
      }
    }, {
      key: 'render',
      value: function render() {
        return '<div class="' + this.class() + '"></div>';
      }
    }, {
      key: 'data',
      get: function get() {
        return Array.from(this.element.children).map(function (element) {
          return element.component.data;
        });
      },
      set: function set(value) {
        var _this7 = this;

        while (this.element.firstChild) {
          this.element.removeChild(this.element.firstChild);
        }
        value.forEach(function (data) {
          return _this7.element.appendChild(_this7.createBlock(data).element);
        });
        Array.from(this.element.children).forEach(function (element, index) {
          element.component.elements.add.hidden = index != _this7.element.childElementCount - 1;
          element.component.elements.remove.hidden = _this7.element.childElementCount == 1;
        });
      }
    }]);

    return UserEducation;
  }(Component);

  /* eslint-disable no-console */

  var assert = function assert(assertion, message) {
    if (!assertion) {
      throw new Error(message || 'Assertion failed');
    }
  };

  var changeValue = function changeValue(element, value) {
    element.value = value;
    dispatchEvent(element, 'change');
    dispatchEvent(element, 'input');
  };

  var compareObjects = function compareObjects(object1, object2) {
    return JSON.stringify(object1) == JSON.stringify(object2);
  };

  var dispatchEvent = function dispatchEvent(element, name) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    element.dispatchEvent(new (params.detail ? CustomEvent : Event)(name, _extends({
      bubbles: true,
      cancelable: !['change', 'input'].includes(name)
    }, params)));
  };

  var group = function group(label, func) {
    console.group(label);
    func();
    console.groupEnd();
  };

  var test = function test(message, func) {
    console.log(message);
    func();
  };

  var emptyBlockData = { name: '', startDate: '', endDate: '' };
  var filledUpBlockData = {
    name: 'John Doe',
    startDate: '2013-01-01',
    endDate: '2018-01-01'
  };

  var fillUpBlock = function fillUpBlock(component, index) {
    var block = component.element.children[index].component;
    changeValue(block.elements.name, filledUpBlockData.name);
    changeValue(block.elements.startDate, filledUpBlockData.startDate);
    changeValue(block.elements.endDate, filledUpBlockData.endDate);
  };

  group('UserEducation', function () {
    test('is empty on initialization', function () {
      var component = new UserEducation();
      assert(component.element.childElementCount == 1);
      var block = component.element.children[0].component;
      assert(!block.elements.add.hidden);
      assert(block.elements.remove.hidden);
      assert(!block.elements.name.value);
      assert(!block.elements.name.validity.valid);
      assert(!block.elements.startDate.value);
      assert(!block.elements.startDate.validity.valid);
      assert(!block.elements.endDate.value);
      assert(!block.elements.endDate.validity.valid);
      assert(!block.elements.nameError.hidden);
      assert(block.elements.nameError.textContent);
      assert(!block.elements.dateError.hidden);
      assert(block.elements.dateError.textContent);
      assert(compareObjects(component.data, [emptyBlockData]));
    });

    test('shows error if the start date is greater than the end date', function () {
      var component = new UserEducation();
      var block = component.element.children[0].component;
      changeValue(block.elements.startDate, '2018-01-02');
      changeValue(block.elements.endDate, '2018-01-01');
      assert(!block.elements.dateError.hidden);
      assert(block.elements.dateError.textContent);
    });

    test('shows no errors on correct field values', function () {
      var component = new UserEducation();
      fillUpBlock(component, 0);
      var block = component.element.children[0].component;
      assert(block.elements.nameError.hidden);
      assert(block.elements.dateError.hidden);
      assert(compareObjects(component.data, [filledUpBlockData]));
    });

    test("adds a block by clicking '+'", function () {
      var component = new UserEducation();
      fillUpBlock(component, 0);
      dispatchEvent(component.element.children[0].component.elements.add, 'click');
      assert(component.element.childElementCount == 2);
      var firstBlock = component.element.children[0].component;
      assert(firstBlock.elements.add.hidden);
      assert(!firstBlock.elements.remove.hidden);
      var secondBlock = component.element.children[1].component;
      assert(!secondBlock.elements.add.hidden);
      assert(!secondBlock.elements.remove.hidden);
      assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
    });

    test("removes the first block by clicking '-'", function () {
      var component = new UserEducation();
      fillUpBlock(component, 0);
      dispatchEvent(component.element.children[0].component.elements.add, 'click');
      dispatchEvent(component.element.children[0].component.elements.remove, 'click');
      assert(component.element.childElementCount == 1);
      var block = component.element.children[0].component;
      assert(!block.elements.add.hidden);
      assert(block.elements.remove.hidden);
      assert(compareObjects(component.data, [emptyBlockData]));
    });

    test("removes the middle block by clicking '-'", function () {
      var component = new UserEducation();
      fillUpBlock(component, 0);
      dispatchEvent(component.element.children[0].component.elements.add, 'click');
      dispatchEvent(component.element.children[0].component.elements.add, 'click');
      fillUpBlock(component, 2);
      dispatchEvent(component.element.children[1].component.elements.remove, 'click');
      assert(component.element.childElementCount == 2);
      var firstBlock = component.element.children[0].component;
      assert(firstBlock.elements.add.hidden);
      assert(!firstBlock.elements.remove.hidden);
      var secondBlock = component.element.children[1].component;
      assert(!secondBlock.elements.add.hidden);
      assert(!secondBlock.elements.remove.hidden);
      assert(compareObjects(component.data, [filledUpBlockData, filledUpBlockData]));
    });

    test("removes the last block by clicking '-'", function () {
      var component = new UserEducation();
      fillUpBlock(component, 0);
      var firstBlock = component.element.children[0].component;
      dispatchEvent(firstBlock.elements.add, 'click');
      var secondBlock = component.element.children[1].component;
      dispatchEvent(secondBlock.elements.remove, 'click');
      assert(component.element.childElementCount == 1);
      var block = component.element.children[0].component;
      assert(!block.elements.add.hidden);
      assert(block.elements.remove.hidden);
      assert(compareObjects(component.data, [filledUpBlockData]));
    });

    test('sets data on creation', function () {
      var component = new UserEducation([filledUpBlockData, emptyBlockData]);
      assert(component.element.childElementCount == 2);
      assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
    });

    test('sets data by changing a property', function () {
      var component = new UserEducation();
      component.data = [filledUpBlockData, emptyBlockData];
      assert(component.element.childElementCount == 2);
      assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
    });

    test('sets data by an event', function () {
      var component = new UserEducation();
      dispatchEvent(component.element, 'set-data', {
        detail: [filledUpBlockData, emptyBlockData]
      });
      assert(component.element.childElementCount == 2);
      assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
    });
  });
})();
