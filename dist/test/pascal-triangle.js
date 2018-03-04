'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  var cache = {};
  var memoize = function memoize(func) {
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = func.apply(undefined, args);
      }
      return cache[key];
    };
  };

  var PascalTriangleEntry = function (_Component) {
    _inherits(PascalTriangleEntry, _Component);

    function PascalTriangleEntry(row, column) {
      _classCallCheck(this, PascalTriangleEntry);

      var _this2 = _possibleConstructorReturn(this, (PascalTriangleEntry.__proto__ || Object.getPrototypeOf(PascalTriangleEntry)).call(this, 'pascal-triangle-entry'));

      _this2.element.textContent = getPascalTriangleLine(row)[column];
      return _this2;
    }

    _createClass(PascalTriangleEntry, [{
      key: 'render',
      value: function render() {
        return '<span class="' + this.class() + '"></span>';
      }
    }, {
      key: 'style',
      value: function style() {
        return '\n    .' + this.class() + ' {\n      display: inline-block;\n      min-width: 1.5em;\n      padding: 0 0.2em;\n      text-align: center;\n    }\n    ';
      }
    }]);

    return PascalTriangleEntry;
  }(Component);

  var getPascalTriangleLine = memoize(function (row) {
    return row == 0 ? [1] : [0].concat(getPascalTriangleLine(row - 1)).map(function (value, index, values) {
      return value + (values[index + 1] || 0);
    });
  });

  var PascalTriangle = function (_Component2) {
    _inherits(PascalTriangle, _Component2);

    function PascalTriangle() {
      _classCallCheck(this, PascalTriangle);

      var _this3 = _possibleConstructorReturn(this, (PascalTriangle.__proto__ || Object.getPrototypeOf(PascalTriangle)).call(this, 'pascal-triangle'));

      _this3.elements.height.addEventListener('input', function (event) {
        _this3.update(event.target.validity.valid ? parseInt(event.target.value, 10) : 0);
      });
      return _this3;
    }

    _createClass(PascalTriangle, [{
      key: 'createLine',
      value: function createLine() {
        var line = document.createElement('div');
        line.className = this.class('triangle-line');
        return line;
      }
    }, {
      key: 'render',
      value: function render() {
        return '\n    <div class="' + this.class() + '">\n      <div class="' + this.class('row') + '">\n        <span class="' + this.class('label') + '">Triangle height:</span>\n        <input autofocus class="' + this.class('height') + '" max="50" min="2" required type="number">\n      </div>\n      <div class="' + this.class('triangle') + '"></div>\n    </div>\n    ';
      }
    }, {
      key: 'style',
      value: function style() {
        return '\n    .' + this.class('triangle') + ' {\n      display: table;\n      width: 100%;\n    }\n    .' + this.class('triangle-line') + ' {\n      text-align: center;\n      white-space: nowrap;\n    }\n    ';
      }
    }, {
      key: 'update',
      value: function update(height) {
        var _this4 = this;

        if (this.elements.triangle.childElementCount > height) {
          Array.from(Array(this.elements.triangle.childElementCount - height)).forEach(function () {
            return _this4.elements.triangle.removeChild(_this4.elements.triangle.lastElementChild);
          });
        } else if (this.elements.triangle.childElementCount < height) {
          var fragment = document.createDocumentFragment();
          Array.from(Array(height - this.elements.triangle.childElementCount)).forEach(function (_, index) {
            var row = _this4.elements.triangle.childElementCount + index;
            var line = _this4.createLine();
            Array.from(Array(row + 1)).forEach(function (value, column) {
              line.appendChild(new PascalTriangleEntry(row, column).element);
            });
            fragment.appendChild(line);
          });
          this.elements.triangle.appendChild(fragment);
        }
      }
    }]);

    return PascalTriangle;
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

  group('PascalTriangle', function () {
    test('is empty on initialization', function () {
      var component = new PascalTriangle();
      assert(!component.elements.height.value);
      assert(!component.elements.height.validity.valid);
      assert(!component.elements.triangle.childElementCount);
    });

    test('is empty when out of range', function () {
      [1, 1000].forEach(function (value) {
        var component = new PascalTriangle();
        changeValue(component.elements.height, value);
        assert(!component.elements.height.validity.valid);
        assert(!component.elements.triangle.childElementCount);
      });
    });

    test('shows triangle of height 5', function () {
      var component = new PascalTriangle();
      changeValue(component.elements.height, 5);
      assert(component.elements.height.validity.valid);
      var values = Array.from(component.elements.triangle.children).map(function (element) {
        return Array.from(element.children).map(function (element) {
          return parseInt(element.textContent);
        });
      });
      var expectedValues = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
      assert(compareObjects(values, expectedValues));
    });

    test('shows missing lines', function () {
      var component = new PascalTriangle();
      changeValue(component.elements.height, 10);
      changeValue(component.elements.height, 50);
      assert(component.elements.height.validity.valid);
      assert(component.elements.triangle.childElementCount == 50);
      assert(component.elements.triangle.children[50 - 1].childElementCount == 50);
    });

    test('removes excessive lines', function () {
      var component = new PascalTriangle();
      changeValue(component.elements.height, 50);
      changeValue(component.elements.height, 10);
      assert(component.elements.height.validity.valid);
      assert(component.elements.triangle.childElementCount == 10);
      assert(component.elements.triangle.children[10 - 1].childElementCount == 10);
    });
  });
})();
