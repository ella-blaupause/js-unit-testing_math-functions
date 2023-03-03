import { add, subtract, multiply, divide } from "./index.js";

test("adds 4 and 5 correctly", () => {
  const result = add(4, 5);
  expect(result).toBe(9);
});

test("subtracts 7 and 3 correctly", () => {
  const result = subtract(7, 3);
  expect(result).toBe(4);
});

test("multiplies 4 and 5 correctly", () => {
  const result = multiply(4, 5);
  expect(result).toBe(20);
});

test("devides 9 and 3 correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("devides 9 and 0 correctly", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
