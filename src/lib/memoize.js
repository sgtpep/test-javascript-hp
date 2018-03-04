const cache = {};
export default func => (...args) => {
  const key = JSON.stringify(args);
  if (!cache[key]) {
    cache[key] = func(...args);
  }
  return cache[key];
};
