"use strict"

function avgCalc() {
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value | nameObj[1].value) {
      // If one of them are not defined, skip it
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      console.log(num/den); // Write on the percantage column
    }
  }
}

function percentageCalc() {
  var num = document.getElementsByName("act1")[0].value;
  var den = document.getElementsByName("act1")[1].value;
}
