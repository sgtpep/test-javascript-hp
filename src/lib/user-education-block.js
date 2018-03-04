import '../../node_modules/date-input-polyfill/date-input-polyfill.dist.js';
import Component from './component.js';

export default class UserEducationBlock extends Component {
  constructor(data = {}) {
    super('user-education-block', data);
    this.validate();
    this.elements.name.addEventListener('input', () => this.validateName());
    this.elements.date.forEach(element =>
      element.addEventListener('input', () => this.validateDates())
    );
  }

  get data() {
    return ['name', 'startDate', 'endDate'].reduce(
      (value, key) => ({ ...value, [key]: this.elements[key].value }),
      {}
    );
  }

  set data(value) {
    ['name', 'startDate', 'endDate'].forEach(
      key => (this.elements[key].value = value[key] || '')
    );
  }

  render() {
    return `
    <div class="${this.class()}">
      <div>
        <div class="${this.class('row')}">
          <span class="${this.class('label')}">name:</span>
          <span>
            <input class="${this.class('name')}" required>
            <div class="${this.class('error')} ${this.class(
      'name-error'
    )}"></div>
          </span>
        </div>
        <div class="${this.class('row')}">
          <span class="${this.class('label')}">start date:</span>
          <input class="${this.class('date')} ${this.class(
      'start-date'
    )}" required type="date">
          <span class="${this.class('label')}">end date:</span>
          <input class="${this.class('date')} ${this.class(
      'end-date'
    )}" required type="date">
          <div class="${this.class('error')} ${this.class('date-error')}"></div>
        </div>
      </div>
      <div>
        <a class="${this.class('button')} ${this.class('remove')}">-</a>
        <a class="${this.class('button')} ${this.class('add')}">+</a>
      </div>
    </div>
    `;
  }

  style() {
    return `
    .${this.class()} > * {
      display: table-cell;
    }
    .${this.class()} > :last-child {
      padding-left: 1em;
    }
    .${this.class()} :invalid {
      box-shadow: none;
    }
    .${this.class('button')} {
      cursor: pointer;
      font-size: x-large;
      font-weight: bold;
    }
    .${this.class('error')} {
      color: red;
    }
    .${this.class('name')} {
      width: 25em;
    }
    .${this.class('row')} {
      margin: 0.5em 0;
    }
    `;
  }

  validate() {
    this.validateName();
    this.validateDates();
  }

  validateDates() {
    const isRangeValid =
      this.elements.startDate.value < this.elements.endDate.value;
    this.elements.dateError.hidden =
      this.elements.startDate.validity.valid &&
      this.elements.endDate.validity.valid &&
      isRangeValid;
    this.elements.dateError.textContent =
      this.elements.startDate.validationMessage ||
      this.elements.endDate.validationMessage ||
      (!isRangeValid && 'End date should be greater than start date.');
  }

  validateName() {
    this.elements.nameError.hidden = this.elements.name.validity.valid;
    this.elements.nameError.textContent = this.elements.name.validationMessage;
  }
}
