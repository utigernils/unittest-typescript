import { add, subtract, multiply } from "./calculator";

test("add four to three is seven", () => {
  // Arrange
  const a: number = 4;
  const b: number = 3;
  const expected: number = 7;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test('multiply five with three is fifteen', () => {
  // Arrange
  const a: number = 5;
  const b: number = 3;
  const expected: number = 15;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});
