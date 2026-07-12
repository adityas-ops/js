// ===== helper.js (your helper file) =====
function measureTime(fn, ...args) {
  let start = performance.now();
  let result = fn(...args);
  let end = performance.now();
  console.log(`${fn.name} took: ${(end - start).toFixed(4)}ms`);
  return result;
}

module.exports = measureTime;