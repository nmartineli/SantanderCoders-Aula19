let values = [];
const enter = document.querySelector('#enter');
const equals = document.querySelector('#equals');

function showResults(operationResult) {
  const results = document.querySelector('h3');
  results.textContent = `Your result is ${operationResult}`;
}

function clearOperator() {
  let operator = document.querySelector("input[type='radio']:checked");
  operator.checked = false;
}

function clearValues() {
  values = [];
}

function calculateResults(values, operation) {
  return values.reduce(operation);
}

function getResults() {
  const getOperator = document.querySelector(
    "input[type='radio']:checked"
  ).value;

  const typeOfOperations = {
    '+': function (value1, value2) {
      return value1 + value2;
    },
    '-': function (value1, value2) {
      return value1 - value2;
    },
    '*': function (value1, value2) {
      return value1 * value2;
    },
    '/': function (value1, value2) {
      return value1 / value2;
    },
  };

  const operation = typeOfOperations[getOperator];

  let operationResult = calculateResults(values, operation);

  showResults(operationResult);
  clearOperator();
  clearValues();
}

function clearInput() {
  let input = document.querySelector('#calculator--input');
  input.value = '';
}

function getValue() {
  let newValue = Number(document.querySelector('#calculator--input').value);
  values = [...values, newValue];
  console.log(values);
  clearInput();
}

enter.onclick = getValue;
equals.onclick = getResults;
