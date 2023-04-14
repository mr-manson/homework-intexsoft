"use strict";

function loadJSON(callback) {
  var XMLObj = new XMLHttpRequest();
  XMLObj.open("GET", "data.json", true);
  XMLObj.onreadystatechange = function () {
    if (XMLObj.readyState === 4 && XMLObj.status === 200) {
      var myArr = JSON.parse(this.responseText);
      callback(myArr);
    }
  };
  XMLObj.send();
}

loadJSON(function (arr) {
  // console.log(arr);
  // Данные получены.

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

  for (let pers of arr) {
    haveFriends(pers);
  }
  console.log(totalAge / totalFriends);
});
