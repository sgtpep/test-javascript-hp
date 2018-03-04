'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PowerDigitSum = function () {
  'use strict';

  var Component = function () {
    function Component(name) {
      _classCallCheck(this, Component);

      if (!name) throw 'No name argument';
      this.name = name;
      this.element = createElement(this.render());
      this.elements = queryElements(this.element, name);
      if (this.style) appendStyle(this.style());
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

  var createElement = function createElement(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element.firstElementChild;
  };

  var queryElements = function queryElements(element, name) {
    var elements = {};
    Array.from(element.querySelectorAll('[class^=' + name + '__]')).forEach(function (element) {
      var name = element.className.split('__', 2)[1].split('_', 1)[0];
      if (!elements[name]) {
        elements[name] = element;
      } else if (!Array.isArray(elements[name])) {
        elements[name] = [elements[name], element];
      } else {
        elements[name].push(element);
      }
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

  var powerDigitSum = function (_Component) {
    _inherits(powerDigitSum, _Component);

    function powerDigitSum() {
      _classCallCheck(this, powerDigitSum);

      var _this = _possibleConstructorReturn(this, (powerDigitSum.__proto__ || Object.getPrototypeOf(powerDigitSum)).call(this, 'digit-sum'));

      _this.elements.exponent.addEventListener('input', function (event) {
        _this.update(parseInt(event.target.value, 10), event.target.validity.valid);
      });
      return _this;
    }

    _createClass(powerDigitSum, [{
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

    return powerDigitSum;
  }(Component);

  return powerDigitSum;
}();
