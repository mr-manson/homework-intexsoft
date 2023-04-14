"use strict";

let data = [
  {
    _id: "64367e90de130511bfbf66a2",
    age: 21,
    friends: [
      {
        _id: "64367e90efcc3e933cbe6fb1",
        age: 37,
        friends: [
          {
            _id: "64367e90efcc3e933cbe6fb1",
            age: 20,
            friends: [
              {
                _id: "64367e90efcc3e933cbe6fb1",
                age: 20,
                friends: [
                  {
                    _id: "64367e90efcc3e933cbe6fb1",
                    age: 20,
                  },
                ],
              },
              {
                _id: "64367e90efcc3e933cbe6fb1",
                age: 10,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: "55555555555555555",
    age: 25,
    friends: [
      {
        _id: "64367e90efcc3e933cbe6fb1",
        age: 20,
      },
    ],
  },
  {
    _id: "55555555555555555",
    age: 30,
    friends: [
      {
        _id: "64367e90efcc3e933cbe6fb1",
        age: 20,
        friends: [
          {
            _id: "64367e90efcc3e933cbe6fb1",
            age: 20,
          },
        ],
      },
    ],
  },
];

let totalAge = 0;
let totalFriends = 0;

function haveFriends(obj) {
  if (obj.age) {
    totalAge += obj.age;
    totalFriends++;
  }
  if (!obj.friends) {
    return;
  } else {
    for (let key of obj.friends) {
      haveFriends(key);
    }
  }
}

//==ПЕРЕБОР=МАССИВА==============================================================
for (let pers of data) {
  haveFriends(pers);
}
console.log(totalAge / totalFriends);

//===============================================================================
