const calculation = document.getElementById("calculation");
const result = document.getElementById("result");
const time = document.getElementById("time");
const power = document.getElementById("power");
const clear = document.getElementById("clear");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const one = document.getElementById("one");
const delBtn = document.getElementById("del");
const two = document.getElementById("two");
const three = document.getElementById("three");
const zero = document.getElementById("zero");
const equalsBtn = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const product = document.getElementById("product");
const division = document.getElementById("division");
const four1 = document.getElementsByClassName("four");

//time
setInterval(function () {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  time.innerHTML = "<p>" + hours + ":" + minutes + ":" + seconds + "</p>";
  console.log(minutes.toString.length);
  //console.log(time.textContent);
}, 1000);

clear.onclick = () => {
  calculation.innerHTML = "";
  result.innerHTML = "";
};

delBtn.onclick = () => {
  if (calculation.textContent) {
    var value = calculation.textContent;
    value = value.slice(0, -1);
    calculation.textContent = value;
  }
};

equalsBtn.onclick = () => {
  var value = calculation.textContent;
  //console.log(value.includes("+"));
  if (value.includes("+")) {
    myArray = value.split("+");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger + secondInteger;
    result.textContent = myresult;
  } else if (value.includes("-")) {
    myArray = value.split("-");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger - secondInteger;
    result.textContent = myresult;
  } else if (value.includes("*")) {
    myArray = value.split("*");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger * secondInteger;
    result.textContent = myresult;
  } else if (value.includes("/")) {
    myArray = value.split("/");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger / secondInteger;
    result.textContent = myresult;
  }
};

one.onclick = () => {
  var value = one.textContent;
  calculation.textContent += value;
};

two.onclick = () => {
  var value = two.textContent;
  calculation.textContent += value;
};

three.onclick = () => {
  var value = three.textContent;
  calculation.textContent += value;
};

four.onclick = () => {
  var value = four.textContent;
  calculation.textContent += value;
};

five.onclick = () => {
  var value = five.textContent;
  calculation.textContent += value;
};

six.onclick = () => {
  var value = six.textContent;
  calculation.textContent += value;
};

seven.onclick = () => {
  var value = seven.textContent;
  calculation.textContent += value;
};

eight.onclick = () => {
  var value = eight.textContent;
  calculation.textContent += value;
};

nine.onclick = () => {
  var value = nine.textContent;
  calculation.textContent += value;
};

zero.onclick = () => {
  var value = zero.textContent;
  calculation.textContent += value;
};

plus.onclick = () => {
  var value = plus.textContent;

  var calcValue = calculation.textContent;
  if (calcValue.length > 2 && calcValue.includes("+")) {
    myArray = calcValue.split("+");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger + secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("-")) {
    myArray = calcValue.split("-");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger - secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("*")) {
    myArray = calcValue.split("*");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger * secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("/")) {
    myArray = calcValue.split("/");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger / secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length < 3) {
    calculation.textContent += value;
  }
};

minus.onclick = () => {
  var value = minus.textContent;

  var calcValue = calculation.textContent;
  if (calcValue.length > 2 && calcValue.includes("-")) {
    myArray = calcValue.split("-");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger - secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("+")) {
    myArray = calcValue.split("+");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger + secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("*")) {
    myArray = calcValue.split("*");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger * secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("/")) {
    myArray = calcValue.split("/");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger / secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length < 3) {
    calculation.textContent += value;
  }
};

product.onclick = () => {
  var value = product.textContent;

  var calcValue = calculation.textContent;
  if (calcValue.length > 2 && calcValue.includes("*")) {
    myArray = calcValue.split("*");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger * secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("-")) {
    myArray = calcValue.split("-");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger - secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("+")) {
    myArray = calcValue.split("+");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger + secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("/")) {
    myArray = calcValue.split("/");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger / secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length < 3) {
    calculation.textContent += value;
  }
};

division.onclick = () => {
  var value = division.textContent;

  var calcValue = calculation.textContent;
  if (calcValue.length > 2 && calcValue.includes("/")) {
    myArray = calcValue.split("/");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger / secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("-")) {
    myArray = calcValue.split("-");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger - secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("*")) {
    myArray = calcValue.split("*");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger * secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length > 2 && calcValue.includes("+")) {
    myArray = calcValue.split("+");
    var firstInteger = parseFloat(myArray[0]);
    var secondInteger = parseFloat(myArray[1]);
    var myresult = firstInteger + secondInteger;
    calculation.textContent = myresult + value;
  } else if (calcValue.length < 3) {
    calculation.textContent += value;
  }
};
