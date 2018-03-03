export default class {
  constructor(className) {
    if (!className) throw 'No class argument';
    this.class = className;

    if (this.style) this.createStyle();
    this.element = this.createElement();
    this.elements = this.queryElements();
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.render();
    return element.firstElementChild;
  }

  createStyle() {
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
  }

  queryElements() {
    const elements = {};
    Array.from(
      this.element.querySelectorAll(`[class^=${this.class}__]`)
    ).forEach(element => {
      const name = element.className.split('__', 2)[1].split('_', 1)[0];
      if (!elements[name]) elements[name] = element;
      else if (!Array.isArray(elements[name]))
        elements[name] = [elements[name], element];
      else elements[name].push(element);
    });
    return elements;
  }

  render() {
    throw 'render() is not implemented';
  }
}
