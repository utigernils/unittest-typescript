export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of empty array");
  }

  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }
  
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  
  return sorted.length % 2 === 0 
    ? (sorted[middle - 1] + sorted[middle]) / 2 
    : sorted[middle];
}
