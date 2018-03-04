import Component from './lib/component.js';
import powerString from './lib/power-string.js';

export default class PowerDigitSum extends Component {
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
    <div class="${this.class()}">
      <div class="${this.class('row')}">
        <span class="${this.class('base')}">2</span>
        <input autofocus class="${this.class(
          'exponent'
        )}" max="250" min="10" required type="number">
      </div>
      <div class="${this.class('row')}">
        <span class="${this.class('label')}">Digit:</span>
        <span class="${this.class('power')}"></span>
      </div>
      <div class="${this.class('row')}">
        <span class="${this.class('label')}">Sum:</span>
        <span class="${this.class('sum')}"></span>
      </div>
    </div>
    `;
  }

  style() {
    return `
    .${this.class('base')} {
      font-size: larger;
    }
    .${this.class('exponent')} {
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
