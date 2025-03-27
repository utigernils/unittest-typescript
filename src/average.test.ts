import { mean, median } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [4, 5];
  const expected: number = 4.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expectedError: string = "Cannot calculate mean of empty array";

  // Act & Assert
  expect(() => mean(numbers)).toThrow(expectedError);
});

test("median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 6, 7, 8];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = 5.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for no elements", () => {
  // Arrange
  const numbers: number[] = [];
  const expectedError: string = "Cannot calculate median of empty array";

  // Act & Assert
  expect(() => median(numbers)).toThrow(expectedError);
});