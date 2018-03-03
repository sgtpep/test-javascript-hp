import PowerDigitSum from '../src/power-digit-sum.js';
import { assert, group, test } from './lib/test.js';

group('PowerDigitSum', () => {
  const component = new PowerDigitSum();

  test('has no values on initialization', () => {
    assert(!component.elements.exponent.value);
    assert(!component.elements.exponent.validity.valid);
    assert(!component.elements.power.textContent);
    assert(!component.elements.sum.textContent);
  });

  test('has no values if an exponent is out of range', () => {
    [1, 1000].forEach((value) => {
      component.elements.exponent.value = value;
      assert(!component.elements.exponent.validity.valid);
      assert(!component.elements.power.textContent);
      assert(!component.elements.sum.textContent);
    });
  });

  test('has values for an exponent of 10', () => {
    component.elements.exponent.value = 10;
    component.elements.exponent.dispatchEvent(new Event('input', { bubbles: true }));
    assert(component.elements.exponent.validity.valid);
    assert(component.elements.power.textContent == '1024');
    assert(component.elements.sum.textContent == '7');
  });

  test('has values for an exponent of 250', () => {
    component.elements.exponent.value = 250;
    component.elements.exponent.dispatchEvent(new Event('input', { bubbles: true }));
    assert(component.elements.exponent.validity.valid);
    assert(component.elements.power.textContent == '1809251394333065553493296640760748560207343510400633813116524750123642650624');
    assert(component.elements.sum.textContent == '286');
  });
});
