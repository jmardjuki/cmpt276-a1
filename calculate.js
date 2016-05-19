"use strict";

(function() {
  // Document Ready
  // FEATURE: Calculate the result as user fill activity boxes
  for (var i = 1; i <= 4; i++) {
    (function() {
    var nameStr = "act" + i.toString();
    var percentageId = 'percentage-' + i.toString();
    for (var j = 1; j <= 2; j++) {
      var idStr = nameStr + "_box" + j.toString();
      var actBox = document.getElementById(idStr);
      actBox.addEventListener("blur", function (){
        var nameObj = document.getElementsByName(nameStr);
        if (nameObj[0].value && nameObj[1].value) {
          var num = nameObj[0].value;
          var den = nameObj[1].value;
          var result = num/den * 100;
          if ( result % 1 !== 0 ) {
            result = result.toFixed(2);
          }          
          var percentageBox = document.getElementById(percentageId);
          percentageBox.innerHTML = '<span>' + result.toString() + '</span>';
        }
      }, true);
    }
    })();
  }
})();

function meanCalc() {
  var sum = 0;    // Save the sum
  var count = 0;
  var alertString;
  var result;
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value && nameObj[1].value) {
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      sum = sum + (num/den);
      // Fill the percentage too, user might change
      count = count + 1;
    }
    else if ( nameObj[0].value || nameObj[1].value ) {
      alertString = "WARNING: Activity " + i.toString() + " is incomplete, therfore, it will not be used for mean calculation."
      alert(alertString)
    }
  }
  // Write result, if denum is zero alert user
  // iF count less than equal to zero don't write
  if ( count > 0 ) {
    result = sum/count * 100;
    var totalBox = document.getElementById("percentage-total");
    // If not a whole number, trim to 2 decimal points
    if ( result % 1 !== 0 ) {
      result = result.toFixed(2);
    }
    totalBox.innerHTML = '<span>' + result.toString() + '</span>';
  }
  else {
    alert("ERROR: No activity for mean calculation");
  }
}

function avgCalc() {
  var sumN = 0;    // Save the sum
  var sumD = 0;
  var alertString;
  var count = 0;
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value && nameObj[1].value) {
      // If one of them are not defined, skip it
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      sumN = sumN + num;
      sumD = sumD + den;
      count = count + 1;
    }
    else if ( nameObj[0].value || nameObj[1].value ) {
      alertString = "WARNING: Activity " + i.toString() + " is incomplete, therfore, it will not be used for the average"
      alert(alertString)
    }
  }
  // Write result, if denum is zero alert the user
  // iF count less than equal to zero don't write
  if ( count > 0 ) {
    var result = sumN/sumD * 100;
    var totalBox = document.getElementById("percentage-total");
    // If not a whole number, trim to 2 decimal points
    if ( result % 1 !== 0 ) {
      result = result.toFixed(2);
    }
    totalBox.innerHTML = '<span>' + result.toString() + '</span>';
  }
  else {
    alert("ERROR: No activity for average calculation");
  }

}

// Error Checking to do
// - Number only input
// - No zero for denuminator
// Trim decimal points, make sure all answer are expected
