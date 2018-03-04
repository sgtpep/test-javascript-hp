import Component from './lib/component.js';
import PascalTriangleEntry from './lib/pascal-triangle-entry.js';

export default class PascalTriangle extends Component {
  constructor() {
    super('pascal-triangle');
    this.elements.height.addEventListener('input', event => {
      this.update(
        event.target.validity.valid ? parseInt(event.target.value, 10) : 0
      );
    });
  }

  createLine() {
    const line = document.createElement('div');
    line.className = this.class('triangle-line');
    return line;
  }

  render() {
    return `
    <div class="${this.class()}">
      <div class="${this.class('row')}">
        <span class="${this.class('label')}">Triangle height:</span>
        <input autofocus class="${this.class(
          'height'
        )}" max="50" min="2" required type="number">
      </div>
      <div class="${this.class('triangle')}"></div>
    </div>
    `;
  }

  style() {
    return `
    .${this.class('triangle')} {
      display: table;
      width: 100%;
    }
    .${this.class('triangle-line')} {
      text-align: center;
      white-space: nowrap;
    }
    `;
  }

  update(height) {
    if (this.elements.triangle.childElementCount > height) {
      Array.from(
        Array(this.elements.triangle.childElementCount - height)
      ).forEach(() =>
        this.elements.triangle.removeChild(
          this.elements.triangle.lastElementChild
        )
      );
    } else if (this.elements.triangle.childElementCount < height) {
      const fragment = document.createDocumentFragment();
      Array.from(
        Array(height - this.elements.triangle.childElementCount)
      ).forEach((_, index) => {
        const row = this.elements.triangle.childElementCount + index;
        const line = this.createLine();
        Array.from(Array(row + 1)).forEach((value, column) => {
          line.appendChild(new PascalTriangleEntry(row, column).element);
        });
        fragment.appendChild(line);
      });
      this.elements.triangle.appendChild(fragment);
    }
  }
}
