const displayEl = document.getElementById('display');
let current = '0';
let operator = null;
let previous = null;
let resetDisplay = false;

function updateDisplay() {
  displayEl.textContent = current;
  }

  function appendNumber(num) {
    if (resetDisplay) {
        current = num;
            resetDisplay = false;
              } else {
                  current = current === '0' ? num : current + num;
                    }
                      updateDisplay();
                      }

                      function appendOperator(op) {
                        if (operator !== null && !resetDisplay) {
                            calculate();
                              }
                                previous = parseFloat(current);
                                  operator = op;
                                    resetDisplay = true;
                                    }

                                    function calculate() {
                                      if (operator === null || resetDisplay) return;
                                        let result = 0;
                                          const curr = parseFloat(current);
                                            switch (operator) {
                                                case '+': result = previous + curr; break;
                                                    case '-': result = previous - curr; break;
                                                        case '*': result = previous * curr; break;
                                                            case '/': result = previous / curr; break;
                                                              }
                                                                current = String(result);
                                                                  operator = null;
                                                                    resetDisplay = true;
                                                                      updateDisplay();
                                                                      }

                                                                      function clearDisplay() {
                                                                        current = '0';
                                                                          operator = null;
                                                                            previous = null;
                                                                              resetDisplay = false;
                                                                                updateDisplay();
                                                                                }

                                                                                function toggleSign() {
                                                                                  current = String(parseFloat(current) * -1);
                                                                                    updateDisplay();
                                                                                    }

                                                                                    function percent() {
                                                                                      current = String(parseFloat(current) / 100);
                                                                                        updateDisplay();
                                                                                        }

                                                                                        updateDisplay();
                                                                                        