export default class Component {
  constructor(name, data = null) {
    if (!name) throw 'No name argument';
    this.name = name;
    this.element = createElement(this, this.render());
    this.elements = queryElements(this.element, name);
    if (data != null) this.data = data;
    if (this.style) appendStyle(this.style());
    this.element.addEventListener(
      'set-data',
      event => (this.data = event.detail)
    );
  }

  class(name = null, modifier = null) {
    return (
      this.name + (name ? `__${name}` : '') + (modifier ? `_${modifier}` : '')
    );
  }

  get data() {
    throw 'get data() is not implemented';
  }

  set data(value) {
    throw 'set data() is not implemented';
  }

  render() {
    throw 'render() is not implemented';
  }
}

const appendStyle = css => {
  if (
    !Array.from(document.head.querySelectorAll('style')).some(
      style => style.textContent == css
    )
  ) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
};

const createElement = (component, html) => {
  const element = document.createElement('div');
  element.innerHTML = html;
  element.firstElementChild.component = component;
  return element.firstElementChild;
};

const queryElements = (element, name) => {
  const elements = {};
  Array.from(element.querySelectorAll(`[class^=${name}__]`)).forEach(
    element => {
      Array.from(element.classList).forEach(className => {
        const name = className
          .split('__', 2)[1]
          .split('_', 1)[0]
          .replace(/-(.)/g, (match, char) => char.toUpperCase());
        if (!elements[name]) {
          elements[name] = element;
        } else if (!Array.isArray(elements[name])) {
          elements[name] = [elements[name], element];
        } else {
          elements[name].push(element);
        }
      });
    }
  );
  return elements;
};
