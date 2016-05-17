(function() {
  // document ready

  // Improve the following using for loop
  var act1_box1 = document.getElementById("act1_box1");
  var act1_box2 = document.getElementById("act1_box2");
  act1_box1.addEventListener("blur", function (){
    var nameObj = document.getElementsByName("act1");
    if (nameObj[0].value && nameObj[1].value) {
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      console.log(num/den); // Change Percentage, and trim (2 sig figures)
    }
  }, true);
  act1_box2.addEventListener("blur", function (){
    var nameObj = document.getElementsByName("act1");
    if (nameObj[0].value && nameObj[1].value) {
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      console.log(num/den); // Change Percentage, and trim (2 sig figures)
    }
  }, true);

})();

function meanCalc() {
  var sum = 0;    // Save the sum
  var count = 0;
  for (var i = 1; i <= 4; i++) {
    var nameStr = "act" + i.toString();
    var nameObj = document.getElementsByName(nameStr);
    if (nameObj[0].value || nameObj[1].value) {
      // If one of them are not defined, skip it
      var num = nameObj[0].value;
      var den = nameObj[1].value;
      sum = sum + (num/den);
      // Fill the percentage too, user might change
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
