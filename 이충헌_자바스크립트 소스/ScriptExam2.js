function add(char) {
  var display = document.getElementById('display');
  display.value = display.value + char;
}

function calculate() {
  var display = document.getElementById('display');
  var expression = display.value;
  // 정규식을 사용하여 숫자와 연산자를 추출합니다.
  var matches = expression.match(/[0-9A-F]+|\+|-|\*|\//g);

  if (matches) {
    // 숫자를 16진수로 변환하여 더합니다.
    var isHexadecimal = false; // 16진수 여부를 판별하는 플래그 변수
    var sum = 0;
    var hexResult = "";

    // 만약 입력된 값이 16진수일 경우
    if (expression.indexOf('A') !== -1 ||
        expression.indexOf('B') !== -1 ||
        expression.indexOf('C') !== -1 ||
        expression.indexOf('D') !== -1 ||
        expression.indexOf('E') !== -1 ||
        expression.indexOf('F') !== -1) {
      isHexadecimal = true;
      sum = parseInt(matches[0], 16);
      hexResult = sum.toString(16).toUpperCase();
    } else {
      // 10진수일 경우
      sum = parseInt(matches[0], 10);
    }

    for (var i = 1; i < matches.length; i += 2) {
      var operator = matches[i];
      var num;

      // 16진수로 변환하여 계산
      if (isHexadecimal) {
        num = parseInt(matches[i + 1], 16);
      } else {
        // 10진수로 변환하여 계산
        num = parseInt(matches[i + 1], 10);
      }

      if (operator === '+') {
        sum += num;
      } else if (operator === '-') {
        sum -= num;
      } else if (operator === '*') {
        sum *= num;
      } else if (operator === '/') {
        sum /= num;
      }
    }

    // 결과값을 16진수로 변환하여 표시
    if (isHexadecimal) {
      hexResult = sum.toString(16).toUpperCase();
      document.getElementById('result').value = hexResult;
    } else {
      document.getElementById('result').value = sum;
    }
  }
}



function hexToDecimal() {
  var display = document.getElementById('display');
  var hexValue = display.value; // 사용자가 입력한 16진수 값을 가져옵니다.
  var decimalValue = parseInt(hexValue, 16); // 16진수 값을 10진수로 변환합니다.
  document.getElementById('result').value = decimalValue;
}

function decimalToHex() {
  var display = document.getElementById('display');
  var decimalValue = display.value; // 사용자가 입력한 10진수 값을 가져옵니다.
  var hexValue = Number(decimalValue).toString(16).toUpperCase(); // 10진수 값을 16진수로 변환합니다.
  document.getElementById('result').value = hexValue;
}

function reset() {
  document.getElementById('display').value = "";
  document.getElementById('result').value = "";
}




/*
function updateDisplay() {
  display.value = currentInput;
  document.getElementById("hex").innerText = "Hex: " + currentInput;
  document.getElementById("dec").innerText = "dec: " + parseInt(currentInput, currentBase);

  const aToFButtons = document.querySelectorAll('.buttons button[id^="btn"]');
  if (currentBase === dec) {
      aToFButtons.forEach(button => button.disabled = true);
  } else {
      aToFButtons.forEach(button => button.disabled = false);
  }
}

document.getElementById("toDec").addEventListener("click", function () {
  currentBase = 10;
  updateDisplay();
});*/