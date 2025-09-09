let expression = '';

function addValue(value) {
  expression += value;
  document.getElementById('screen').innerText = expression;
}

function clearAll() {
  expression = '';
  document.getElementById('screen').innerText = '0';
}

function calculate() {
  try {
    let result = eval(expression); 
    document.getElementById('screen').innerText = result;
    expression = result.toString(); 
  } catch {
    document.getElementById('screen').innerText = 'Error';
    expression = '';
  }
}
