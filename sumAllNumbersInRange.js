let sumAll = arr => {
  let start = arr[0];
  let end = arr[1];

  let count = Math.abs(start - end) + 1;

  let sum = ((start + end) * count) / 2;
  return sum;
};