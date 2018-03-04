'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

  var multiplyString = function multiplyString(multiplierString, multiplicand) {
    return ('0' + multiplierString).split('').reverse().reduce(function (_ref, digit) {
      var _ref2 = _slicedToArray(_ref, 2),
          products = _ref2[0],
          caryOver = _ref2[1];

      var productString = (parseInt(digit) * multiplicand + caryOver).toString();
      return [products.concat(parseInt(productString.slice(-1))), parseInt(productString.slice(0, -1) || '0')];
    }, [[], 0])[0].reverse().join('').replace(/^0/, '');
  };

  var powerString = function powerString(base, exponent) {
    return Array.from(Array(exponent)).reduce(function (powerString) {
      return multiplyString(powerString, base);
    }, '1');
  };

  var PowerDigitSum = function (_Component) {
    _inherits(PowerDigitSum, _Component);

    function PowerDigitSum() {
      _classCallCheck(this, PowerDigitSum);

      var _this2 = _possibleConstructorReturn(this, (PowerDigitSum.__proto__ || Object.getPrototypeOf(PowerDigitSum)).call(this, 'digit-sum'));

      _this2.elements.exponent.addEventListener('input', function (event) {
        _this2.update(parseInt(event.target.value, 10), event.target.validity.valid);
      });
      return _this2;
    }

    _createClass(PowerDigitSum, [{
      key: 'render',
      value: function render() {
        return '\n    <div class="' + this.class() + '">\n      <div class="' + this.class('row') + '">\n        <span class="' + this.class('base') + '">2</span>\n        <input autofocus class="' + this.class('exponent') + '" max="250" min="10" required type="number">\n      </div>\n      <div class="' + this.class('row') + '">\n        <span class="' + this.class('label') + '">Digit:</span>\n        <span class="' + this.class('power') + '"></span>\n      </div>\n      <div class="' + this.class('row') + '">\n        <span class="' + this.class('label') + '">Sum:</span>\n        <span class="' + this.class('sum') + '"></span>\n      </div>\n    </div>\n    ';
      }
    }, {
      key: 'style',
      value: function style() {
        return '\n    .' + this.class('base') + ' {\n      font-size: larger;\n    }\n    .' + this.class('exponent') + ' {\n      vertical-align: super;\n    }\n    ';
      }
    }, {
      key: 'update',
      value: function update(exponent, isValid) {
        var power = powerString(2, exponent);
        this.elements.power.textContent = isValid ? power : '';
        this.elements.sum.textContent = isValid ? power.toString().split('').reduce(function (sum, digit) {
          return sum + parseInt(digit);
        }, 0) : '';
      }
    }]);

    return PowerDigitSum;
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

  group('PowerDigitSum', function () {
    test('is empty on initialization', function () {
      var component = new PowerDigitSum();
      assert(!component.elements.exponent.value);
      assert(!component.elements.exponent.validity.valid);
      assert(!component.elements.power.textContent);
      assert(!component.elements.sum.textContent);
    });

    test('is empty when out of range', function () {
      [1, 1000].forEach(function (value) {
        var component = new PowerDigitSum();
        changeValue(component.elements.exponent, value);
        assert(!component.elements.exponent.validity.valid);
        assert(!component.elements.power.textContent);
        assert(!component.elements.sum.textContent);
      });
    });

    test('shows values for 2^10', function () {
      var component = new PowerDigitSum();
      changeValue(component.elements.exponent, 10);
      assert(component.elements.exponent.validity.valid);
      assert(component.elements.power.textContent == '1024');
      assert(component.elements.sum.textContent == '7');
    });

    test('shows values for 2^250', function () {
      var component = new PowerDigitSum();
      changeValue(component.elements.exponent, 250);
      assert(component.elements.exponent.validity.valid);
      assert(component.elements.power.textContent == '1809251394333065553493296640760748560207343510400633813116524750123642650624');
      assert(component.elements.sum.textContent == '286');
    });
  });
})();
