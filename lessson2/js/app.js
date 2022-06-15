//! today we will speak very need information

//! reduce

movements = [2, 5, 8, 10, 15, 20, 23, -10, -5];

const balance = movements.reduce(function (
  prevValue,
  currentValue,
  index,
  array
) {
  console.log(`Iteration ${index} ${prevValue}`);
  console.log(currentValue);
  console.log(array);

  return prevValue + currentValue;
});
console.log(balance);
