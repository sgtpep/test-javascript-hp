const multiplyString = (multiplierString, multiplicand) =>
  `0${multiplierString}`
    .split('')
    .reverse()
    .reduce(
      ([products, caryOver], digit) => {
        const productString = (
          parseInt(digit) * multiplicand +
          caryOver
        ).toString();
        return [
          products.concat(parseInt(productString.slice(-1))),
          parseInt(productString.slice(0, -1) || '0')
        ];
      },
      [[], 0]
    )[0]
    .reverse()
    .join('')
    .replace(/^0/, '');

export default (base, exponent) =>
  Array.from(Array(exponent)).reduce(
    powerString => multiplyString(powerString, base),
    '1'
  );
