
export const times = <T>(n: number, callback: (i: number) => T): T[] => {
  const arr: T[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(callback(i));
  }
  return arr;
};
