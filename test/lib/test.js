/* eslint-disable no-console */

export const assert = (assertion, message) => {
  if (!assertion) {
    throw new Error(message || 'Assertion failed');
  }
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
