import PowerDigitSum from '../power-digit-sum.js';
import { assert, changeValue, group, test } from './lib/test.js';

group('PowerDigitSum', () => {
  test('is empty on initialization', () => {
    const component = new PowerDigitSum();
    assert(!component.elements.exponent.value);
    assert(!component.elements.exponent.validity.valid);
    assert(!component.elements.power.textContent);
    assert(!component.elements.sum.textContent);
  });

  test('is empty when out of range', () => {
    [1, 1000].forEach(value => {
      const component = new PowerDigitSum();
      changeValue(component.elements.exponent, value);
      assert(!component.elements.exponent.validity.valid);
      assert(!component.elements.power.textContent);
      assert(!component.elements.sum.textContent);
    });
  });

  test('shows values for 2^10', () => {
    const component = new PowerDigitSum();
    changeValue(component.elements.exponent, 10);
    assert(component.elements.exponent.validity.valid);
    assert(component.elements.power.textContent == '1024');
    assert(component.elements.sum.textContent == '7');
  });

  test('shows values for 2^250', () => {
    const component = new PowerDigitSum();
    changeValue(component.elements.exponent, 250);
    assert(component.elements.exponent.validity.valid);
    assert(
      component.elements.power.textContent ==
        '1809251394333065553493296640760748560207343510400633813116524750123642650624'
    );
    assert(component.elements.sum.textContent == '286');
  });
});
