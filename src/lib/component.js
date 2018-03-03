export default class {
  constructor(name) {
    if (!name) throw 'No name argument';
    this.name = name;
    this.element = createElement(this.render());
    this.elements = queryElements(this.element, name);
    if (this.style) appendStyle(this.style());
  }

  class(name = null, modifier = null) {
    return this.name + (name ? `__${name}` : '') + (modifier ? `_${modifier}` : '');
  }

  render() {
    throw 'render() is not implemented';
  }
}

const appendStyle = (css) => {
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

const createElement = (html) => {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.firstElementChild;
};

const queryElements = (element, name) => {
  const elements = {};
  Array.from(element.querySelectorAll(`[class^=${name}__]`)).forEach(
    element => {
      const name = element.className.split('__', 2)[1].split('_', 1)[0];
      if (!elements[name]) {
        elements[name] = element;
      }
      else if (!Array.isArray(elements[name])) {
        elements[name] = [elements[name], element];
      }
      else {
        elements[name].push(element);
      }
    }
  );
  return elements;
};
