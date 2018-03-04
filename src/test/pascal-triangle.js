import PascalTriangle from '../pascal-triangle.js';
import {
  assert,
  changeValue,
  compareObjects,
  group,
  test
} from './lib/test.js';

group('PascalTriangle', () => {
  test('is empty on initialization', () => {
    const component = new PascalTriangle();
    assert(!component.elements.height.value);
    assert(!component.elements.height.validity.valid);
    assert(!component.elements.triangle.childElementCount);
  });

  test('is empty when out of range', () => {
    [1, 1000].forEach(value => {
      const component = new PascalTriangle();
      changeValue(component.elements.height, value);
      assert(!component.elements.height.validity.valid);
      assert(!component.elements.triangle.childElementCount);
    });
  });

  test('shows triangle of height 5', () => {
    const component = new PascalTriangle();
    changeValue(component.elements.height, 5);
    assert(component.elements.height.validity.valid);
    const values = Array.from(component.elements.triangle.children).map(
      element =>
        Array.from(element.children).map(element =>
          parseInt(element.textContent)
        )
    );
    const expectedValues = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ];
    assert(compareObjects(values, expectedValues));
  });

  test('shows missing lines', () => {
    const component = new PascalTriangle();
    changeValue(component.elements.height, 10);
    changeValue(component.elements.height, 50);
    assert(component.elements.height.validity.valid);
    assert(component.elements.triangle.childElementCount == 50);
    assert(
      component.elements.triangle.children[50 - 1].childElementCount == 50
    );
  });

  test('removes excessive lines', () => {
    const component = new PascalTriangle();
    changeValue(component.elements.height, 50);
    changeValue(component.elements.height, 10);
    assert(component.elements.height.validity.valid);
    assert(component.elements.triangle.childElementCount == 10);
    assert(
      component.elements.triangle.children[10 - 1].childElementCount == 10
    );
  });
});
