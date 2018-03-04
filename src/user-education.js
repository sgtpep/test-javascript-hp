import Component from './lib/component.js';
import UserEducationBlock from './lib/user-education-block.js';

export default class UserEducation extends Component {
  constructor(data = [{}]) {
    super('user-education', data);
  }

  createBlock(data) {
    const block = new UserEducationBlock(data);
    block.elements.add.addEventListener('click', () => {
      this.data = this.data.concat({});
    });
    block.elements.remove.addEventListener('click', () => {
      this.data = this.data.filter(
        (data, index) =>
          Array.from(this.element.children).indexOf(block.element) != index
      );
    });
    return block;
  }

  get data() {
    return Array.from(this.element.children).map(
      element => element.component.data
    );
  }

  set data(value) {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
    value.forEach(data =>
      this.element.appendChild(this.createBlock(data).element)
    );
    Array.from(this.element.children).forEach((element, index) => {
      element.component.elements.add.hidden =
        index != this.element.childElementCount - 1;
      element.component.elements.remove.hidden =
        this.element.childElementCount == 1;
    });
  }

  render() {
    return `<div class="${this.class()}"></div>`;
  }
}
