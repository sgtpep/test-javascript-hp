import Component from './lib/component.js';
import powerString from './lib/power-string.js';

export default class extends Component {
  constructor() {
    super('digit-sum');
    this.elements.exponent.addEventListener('input', event => {
      this.update(
        parseInt(event.target.value, 10),
        event.target.validity.valid
      );
    });
  }

  render() {
    return `
    <div class="${this.class}">
      <div class="${this.class}__row">
        <span class="${this.class}__base">2</span>
        <input class="${
          this.class
        }__exponent" max="250" min="10" required type="number">
      </div>
      <div class="${this.class}__row">
        <span class="${this.class}__label">Digit:</span>
        <span class="${this.class}__power"></span>
      </div>
      <div class="${this.class}__row">
        <span class="${this.class}__label">Sum:</span>
        <span class="${this.class}__sum"></span>
      </div>
    </div>
    `;
  }

  style() {
    return `
    .${this.class}__base {
      font-size: larger;
    }
    .${this.class}__exponent {
      vertical-align: super;
    }
    `;
  }

  update(exponent, isValid) {
    const power = powerString(2, exponent);
    this.elements.power.textContent = isValid ? power : '';
    this.elements.sum.textContent = isValid
      ? power
          .toString()
          .split('')
          .reduce((sum, digit) => sum + parseInt(digit), 0)
      : '';
  }
}
