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

//! destructuring that is edit code structure

const clubs = {
  name: "Real Madrid",
  location: "Madrid",
  categories: ["Spain", "Men", "Women"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);


//! destruct qilishdan maqsad har bitta elementni alohida ishlsh imkoniga ega