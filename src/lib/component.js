export default class {
  constructor(className) {
    if (!className) throw 'No class argument';
    this.class = className;

    if (this.style) appendStyle();
    this.element = createElement();
    this.elements = queryElements();
  }

  render() {
    throw 'render() is not implemented';
  }
}

const appendStyle = () => {
  const css = this.style();
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

const createElement = () => {
  const element = document.createElement('div');
  element.innerHTML = this.render();
  return element.firstElementChild;
};

const queryElements = () => {
  const elements = {};
  Array.from(this.element.querySelectorAll(`[class^=${this.class}__]`)).forEach(
    element => {
      const name = element.className.split('__', 2)[1].split('_', 1)[0];
      if (!elements[name]) elements[name] = element;
      else if (!Array.isArray(elements[name]))
        elements[name] = [elements[name], element];
      else elements[name].push(element);
    }
  );
  return elements;
};
