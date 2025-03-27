import { add, subtract, multiply, divide } from "./calculator";

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

test('divide ten by two is five', () => {
  // Arrange
  const a: number = 10;
  const b: number = 2;
  const expected: number = 5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test('divide by zero throws error', () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;
  const expectedError: string = "Division by zero is not allowed";

  // Act & Assert
  expect(() => divide(a, b)).toThrow(expectedError);
});