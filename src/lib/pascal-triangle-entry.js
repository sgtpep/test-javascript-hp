import Component from '../lib/component.js';
import memoize from './memoize.js';

export default class extends Component {
  constructor(row, column) {
    super('pascal-triangle-entry');
    this.element.textContent = getPascalTriangleLine(row)[column];
  }

  render() {
    return `<span class="${this.class()}"></span>`;
  }

  style() {
    return `
    .${this.class()} {
      display: inline-block;
      min-width: 1.5em;
      padding: 0 0.2em;
      text-align: center;
    }
    `;
  }
}

const getPascalTriangleLine = memoize(
  row =>
    row == 0
      ? [1]
      : [0]
          .concat(getPascalTriangleLine(row - 1))
          .map((value, index, values) => value + (values[index + 1] || 0))
);
