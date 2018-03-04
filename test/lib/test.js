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

export const dispatchEvent = (
  element,
  name,
  cancelable = true,
  bubbles = true
) => {
  cancelable = ['change', 'input'].includes(name) ? false : cancelable;
  element.dispatchEvent(new Event(name, { cancelable, bubbles }));
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
