"use strict";

var arr = [1, 2, 3, 4, 50];
var notArray = 1;
var empty = [];

// ====CHECK=FUNCTIONS================
var summ = function (a, b) {
  return a + b;
};

var less = function (a, b) {
  return a <= 100;
};

var isNumber = function (a) {
  return typeof a === "number";
};

// ====ARRAY.EVERY====================
var res = arr.every((element, index, arr) => {
  return element + index <= 10;
});

var res1 = arr.every(summ);

// console.log(res1);

// ===CUSTOM=FUNCTION=================
var customEvery = function (arr, func) {
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    res = func(arr[i], i);
    console.log(res);
  }
};

// customEvery(arr, summ);

// ===CUSTOM=ARRAY.PROTOTYPE====================================================
Array.prototype.customEvery = function (func) {
  var res = true;
  if (!Array.isArray(this)) {
    res = `${this} isn't an array`;
  }
  if (this.length === 0) {
    return res;
  } else {
    for (var i = 0; i < this.length; i++) {
      res = func(this[i], i, this);
      // console.log(res);
      if (res === false) break;
    }
    return res;
  }
};
// ===CUSTOM=ARRAY.PROTOTYPE====================================================

// arr.customEvery(summ);
// console.log(arr.customEvery(less));
console.log(arr.customEvery(isNumber));
// console.log(empty.customEvery(less));

// console.log(isNumber(1));

// console.log(notArray.customEvery(summ));

//console.log(Array.isArray(arr));
