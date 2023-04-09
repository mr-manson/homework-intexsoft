let arr = [1, 2, 3, 4, 50];
let notArray = 1;
let empty = [];

// ====CECK=FUNCTIONS=================
let summ = function (a, b) {
  return a + b;
};

let less = function (a, b) {
  return a <= 10;
};

let isNumber = function (a) {
  return typeof a === Number;
};

// ====ARRAY.EVERY====================
let res = arr.every((element, index, arr) => {
  return element + index <= 10;
});

let res1 = arr.every(summ);

// console.log(res1);

// ===CUSTOM=FUNCTION=================
let customEvery = function (arr, func) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = func(arr[i], i);
    console.log(res);
  }
};

// customEvery(arr, summ);

// ===CUSTOM=ARRAY.PROTOTYPE==========
Array.prototype.customEvery = function (func) {
  if (!Array.isArray(this)) {
    throw Error(`${this} isn't an array`);
  }
  if (this.length === 0) {
    return true;
  } else {
    let res = 0;
    for (let i = 0; i < this.length; i++) {
      res = func(this[i], i, this);
      console.log(res);
    }
  }
};

// arr.customEvery(summ);
// arr.customEvery(less);
// arr.customEvery(isNumber);
// console.log(empty.customEvery(less));

// console.log(notArray.customEvery(summ));

//console.log(Array.isArray(arr));
