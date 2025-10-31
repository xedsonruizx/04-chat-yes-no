export function sum(a: number, b: number) {
  return a + b;         
}

export const addArray = (arr: number[]) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
