const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const screen = document.querySelector('.calculator_display');

 buttons.forEach((button) => {
     button.addEventListener('click',(e) => {
         let value = e.target.dataset.action;
         screen.value += value;
      
     })
     clear.addEventListener('click',() => {
         screen.value ='';
     })
     equal.addEventListener('click',() => {
         
         if(screen.value ===''){
          screen.value = ''
         }
         else{
            
             let result = eval(screen.value);
              screen.value = result;  
         }
     })
 })
  