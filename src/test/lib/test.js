/* eslint-disable no-console */

export const assert = (assertion, message) => {
  if (!assertion) {
    throw new Error(message || 'Assertion failed');
  }
};

export const changeValue = (element, value) => {
  element.value = value;
  dispatchEvent(element, 'change');
  dispatchEvent(element, 'input');
};

export const compareObjects = (object1, object2) =>
  JSON.stringify(object1) == JSON.stringify(object2);

export const dispatchEvent = (element, name, params = {}) => {
  element.dispatchEvent(
    new (params.detail ? CustomEvent : Event)(name, {
      bubbles: true,
      cancelable: !['change', 'input'].includes(name),
      ...params
    })
  );
};

export const group = (label, func) => {
  console.group(label);
  func();
  console.groupEnd();
};

export const test = (message, func) => {
  console.log(message);
  func();
};
