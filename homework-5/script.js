let arr = [1, 2, 3, 4, 50];
notArray = 1;

let summ = function (a, b) {
  return a + b;
};

let less = function (a) {
  return a <= 10;
};

let res = arr.every((element, index, arr) => {
  return element + index <= 10;
});

let res1 = arr.every(summ);

// console.log(res1);

// let newEvery = function (arr, func) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res = func(arr[i], i);
//     console.log(res);
//   }
// };

// newEvery(arr, summ);

Array.prototype.customEvery = function (func) {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    res = func(this[i], i, this);
    console.log(res);
  }
};

arr.customEvery(summ);
arr.customEvery(less);
//notArray.newEvery(less);

//console.log(Array.isArray(arr));
