const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
const historyList = document.querySelector('.history ul');
const clearHistoryBtn = document.querySelector('.history button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === 'C') {
      
      display.value = '';
    } 
    else if (button.innerText === 'CE') {
      
      
      display.value = display.value.slice(0, -1);
      
    }else if (button.innerText === '%') {
      
      
      display.value = display.value.slice(0, -1) / 10;
    
    }

    else if (button.innerText === '=') {
      
      const result = eval(display.value);
      display.value = result;
      history.push(display.value);
      
    }
    
     else {
      
      display.value += button.innerText;
    }
  });
});

