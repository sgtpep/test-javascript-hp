import UserEducation from '../user-education.js';
import {
  assert,
  changeValue,
  compareObjects,
  dispatchEvent,
  group,
  test
} from './lib/test.js';

const emptyBlockData = { name: '', startDate: '', endDate: '' };
const filledUpBlockData = {
  name: 'John Doe',
  startDate: '2013-01-01',
  endDate: '2018-01-01'
};

const fillUpBlock = (component, index) => {
  const block = component.element.children[index].component;
  changeValue(block.elements.name, filledUpBlockData.name);
  changeValue(block.elements.startDate, filledUpBlockData.startDate);
  changeValue(block.elements.endDate, filledUpBlockData.endDate);
};

group('UserEducation', () => {
  test('is empty on initialization', () => {
    const component = new UserEducation();
    assert(component.element.childElementCount == 1);
    const block = component.element.children[0].component;
    assert(!block.elements.add.hidden);
    assert(block.elements.remove.hidden);
    assert(!block.elements.name.value);
    assert(!block.elements.name.validity.valid);
    assert(!block.elements.startDate.value);
    assert(!block.elements.startDate.validity.valid);
    assert(!block.elements.endDate.value);
    assert(!block.elements.endDate.validity.valid);
    assert(!block.elements.nameError.hidden);
    assert(block.elements.nameError.textContent);
    assert(!block.elements.dateError.hidden);
    assert(block.elements.dateError.textContent);
    assert(compareObjects(component.data, [emptyBlockData]));
  });

  test('shows error if the start date is greater than the end date', () => {
    const component = new UserEducation();
    const block = component.element.children[0].component;
    changeValue(block.elements.startDate, '2018-01-02');
    changeValue(block.elements.endDate, '2018-01-01');
    assert(!block.elements.dateError.hidden);
    assert(block.elements.dateError.textContent);
  });

  test('shows no errors on correct field values', () => {
    const component = new UserEducation();
    fillUpBlock(component, 0);
    const block = component.element.children[0].component;
    assert(block.elements.nameError.hidden);
    assert(block.elements.dateError.hidden);
    assert(compareObjects(component.data, [filledUpBlockData]));
  });

  test("adds a block by clicking '+'", () => {
    const component = new UserEducation();
    fillUpBlock(component, 0);
    dispatchEvent(
      component.element.children[0].component.elements.add,
      'click'
    );
    assert(component.element.childElementCount == 2);
    const firstBlock = component.element.children[0].component;
    assert(firstBlock.elements.add.hidden);
    assert(!firstBlock.elements.remove.hidden);
    const secondBlock = component.element.children[1].component;
    assert(!secondBlock.elements.add.hidden);
    assert(!secondBlock.elements.remove.hidden);
    assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
  });

  test("removes the first block by clicking '-'", () => {
    const component = new UserEducation();
    fillUpBlock(component, 0);
    dispatchEvent(
      component.element.children[0].component.elements.add,
      'click'
    );
    dispatchEvent(
      component.element.children[0].component.elements.remove,
      'click'
    );
    assert(component.element.childElementCount == 1);
    const block = component.element.children[0].component;
    assert(!block.elements.add.hidden);
    assert(block.elements.remove.hidden);
    assert(compareObjects(component.data, [emptyBlockData]));
  });

  test("removes the middle block by clicking '-'", () => {
    const component = new UserEducation();
    fillUpBlock(component, 0);
    dispatchEvent(
      component.element.children[0].component.elements.add,
      'click'
    );
    dispatchEvent(
      component.element.children[0].component.elements.add,
      'click'
    );
    fillUpBlock(component, 2);
    dispatchEvent(
      component.element.children[1].component.elements.remove,
      'click'
    );
    assert(component.element.childElementCount == 2);
    const firstBlock = component.element.children[0].component;
    assert(firstBlock.elements.add.hidden);
    assert(!firstBlock.elements.remove.hidden);
    const secondBlock = component.element.children[1].component;
    assert(!secondBlock.elements.add.hidden);
    assert(!secondBlock.elements.remove.hidden);
    assert(
      compareObjects(component.data, [filledUpBlockData, filledUpBlockData])
    );
  });

  test("removes the last block by clicking '-'", () => {
    const component = new UserEducation();
    fillUpBlock(component, 0);
    const firstBlock = component.element.children[0].component;
    dispatchEvent(firstBlock.elements.add, 'click');
    const secondBlock = component.element.children[1].component;
    dispatchEvent(secondBlock.elements.remove, 'click');
    assert(component.element.childElementCount == 1);
    const block = component.element.children[0].component;
    assert(!block.elements.add.hidden);
    assert(block.elements.remove.hidden);
    assert(compareObjects(component.data, [filledUpBlockData]));
  });

  test('sets data on creation', () => {
    const component = new UserEducation([filledUpBlockData, emptyBlockData]);
    assert(component.element.childElementCount == 2);
    assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
  });

  test('sets data by changing a property', () => {
    const component = new UserEducation();
    component.data = [filledUpBlockData, emptyBlockData];
    assert(component.element.childElementCount == 2);
    assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
  });

  test('sets data by an event', () => {
    const component = new UserEducation();
    dispatchEvent(component.element, 'set-data', {
      detail: [filledUpBlockData, emptyBlockData]
    });
    assert(component.element.childElementCount == 2);
    assert(compareObjects(component.data, [filledUpBlockData, emptyBlockData]));
  });
});
