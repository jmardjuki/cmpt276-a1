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
      var percentageBox = document.getElementById(percentageId);
      actBox.addEventListener("blur", function (){
        var nameObj = document.getElementsByName(nameStr);
        var alertString = "WARNING: Denominator cannot be 0. Please try again."
        if ( nameObj[1].value && nameObj[1].value < 1) {
          alert(alertString);
          nameObj[1].value = "";
          nameObj[1].focus();
        }
        if (nameObj[0].value && nameObj[1].value) {
          var num = nameObj[0].value;
          var den = nameObj[1].value;
          var result = num/den * 100;
          if ( result % 1 !== 0 ) {
            result = result.toFixed(1);
          }
          percentageBox.innerHTML = '<span>' + result.toString() + '</span>';
        }
        if (!nameObj[0].value || !nameObj[1].value) {
          if ( percentageBox.childNodes[0] ) {
            percentageBox.removeChild(percentageBox.childNodes[0]);
          }
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
      result = result.toFixed(1);
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
      sumN = sumN + parseInt(num);
      sumD = sumD + parseInt(den);
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
      result = result.toFixed(1);
    }
    totalBox.innerHTML = '<span>' + result.toString() + '</span>';
  }
  else {
    alert("ERROR: No activity for average calculation");
  }

}
/* numberCheck
 * Check if the input is a number
 * PARAMS: Current event
 * RETURN: - true if not a number
 *         - false if input is not a number
 * This implementation was adapted from:
 * http://stackoverflow.com/questions/13952686/how-to-make-html-input-tag-only-accept-numerical-values
 */
function numberCheck(txt, event) {
  if (event.charCode === 46) {
    // Must check for dots first
    if (txt.value.indexOf('.') === -1) {
         return true;
     } else {
         return false;
     }
  }
  else if (event.charCode > 31 && ( event.charCode < 48 || event.charCode > 57 )) {
    // input is within [0-9]
    return false;
  }
  return true;
}
