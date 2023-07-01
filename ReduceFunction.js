const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (acc, num) => acc + num);
console.log(sum); 
function reduce(arr, callback) {
  let accumulator = arr[0];
  const startIndex = 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
