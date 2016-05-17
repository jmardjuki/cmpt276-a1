"use strict"

function meanCalc() {
  var sum = 0;    // Save the sum
  var count = 0;
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value | nameObj[1].value) {
      // If one of them are not defined, skip it
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      sum = sum + (num/den);
      count = count + 1;
    }
  }
  console.log(sum/count);
}

function avgCalc() {
  var sumN = 0;    // Save the sum
  var sumD = 0;
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value | nameObj[1].value) {
      // If one of them are not defined, skip it
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      sumN = sumN + num;
      sumD = sumD + den;
    }
  }
  console.log(sumN/sumD);
}

function percentageCalc() {
  var num = document.getElementsByName("act1")[0].value;
  var den = document.getElementsByName("act1")[1].value;
}
