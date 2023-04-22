"use strict";

addEventListener("DOMContentLoaded", function () {
  const a =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis.";
  console.log(getAllSMS(a)); // big text
  console.log(getAllSMS("Lorem ipsum dolor sit amet")); // small text
  console.log(getAllSMS()); // no props
  console.log(getAllSMS({})); // wrong props
});

let splitText = "";
let result = [];
let initIter = 1;

const getAllSMS = (inputText) => {
  if (!inputText || typeof inputText !== "string") return [];
  splitText = inputText.split(" ");

  for (let i = 1; i <= 4; i++) {
    result = getSMS(splitText, initIter, i);
    if (!result.needNewRecursion) break;
  }
  if (result && result.needNewRecursion) {
    return "too many splits! Max 9999 sms";
  } else {
    if (result.result.length === 1)
      result.result[0] = result.result[0].slice(0, -4);
    return result.result;
  }
};

let totalIterationCount = 0;

const getSMS = (arr, it = 1, itEndSize = 1) => {
  let iteration = it;
  let iterationEndSize = itEndSize;

  if (!arr.length) {
    totalIterationCount = --iteration;
    return { result: arr };
  }

  iterationEndSize < String(iteration).length
    ? { result: [], needNewRecursion: true }
    : "";

  let smsText = "";
  let count = 0;
  let smsTextOne = `${smsText}${arr[count]} ${iteration}/`;

  while (smsText.length < 140 && count < arr.length) {
    if (smsTextOne.length + iterationEndSize <= 140) {
      smsText += arr[count] + " ";
      count++;
    } else break;
  }
  smsText += iteration + "/";

  let iterationResult = getSMS(arr.slice(count), ++iteration, iterationEndSize);
  let result = [smsText].concat(iterationResult.result);
  if (result[0]) result[0] += totalIterationCount;
  return { result, needNewRecursion: iterationResult.needNewRecursion };
};
