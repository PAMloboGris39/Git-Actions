const { sum } = require("../src/sum");

function assertEqual(actual, expected, msg) {
  if (actual !== expected) {
    throw new Error(`${msg} | expected=${expected}, actual=${actual}`);
  }
}

assertEqual(sum(2, 3), 5, "2 + 3 debe ser 5");
assertEqual(sum(-1, 1), 0, "-1 + 1 debe ser 0");

console.log("OK: todos los tests han pasado");
