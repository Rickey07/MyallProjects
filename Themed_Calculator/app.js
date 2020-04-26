const getHistory = () => {
  return  document.querySelector('#history-value').textContent;
}
function printHistory(num){
    return  document.querySelector('#history-value').textContent = num;

}


const getOutput = () => {
   return document.querySelector('#output-value').textContent;
}
const getFormattedNum = (num) => {
  if(num == '-'){
    return '';
  }
  let n = Number(num);
  let value = n.toLocaleString('en');
  return value
}
const printOutputNum = (num) => {
  if(num == ''){
    document.querySelector('#output-value').textContent = num;
  }else{
    document.querySelector('#output-value').textContent = getFormattedNum(num);

  }
}


const reverseNumFormat = (num) => {
   return Number(num.replace(/,/g,''));
}

let operator = document.querySelectorAll('.operator');

operator.forEach((e) => {
  e.addEventListener('click',() => {
    if(e.id == 'clear'){
      printHistory('');
      printOutputNum('');
    }
   else if (e.id == 'backspace'){
     let output = reverseNumFormat(getOutput()).toString();
     if(output){
       output = output.substr(0,output.length-1);
       printOutputNum(output);
     }
   }
   else{
     let output = getOutput();
     let history = getHistory();
     if(output == ''&&history !== ''){
       if(isNaN(history[history.length-1])){
         history += history.substr(0,history.length - 1)
       }

     }
     if(output!='' || history!=''){
       output = output == ''?output: reverseNumFormat(output);
       history+=output;
       if(e.id == '='){
         let result = eval(history);
         printOutputNum(result);
         printHistory('');
       }
       else{
         history = history + e.id;
         printHistory(history);
         printOutputNum('');
       }
     }
   }
  })
});

let numbers = document.querySelectorAll('.number');
numbers.forEach((e) => {
  e.addEventListener('click',() => {
    let output = reverseNumFormat(getOutput());
    if(output != NaN){
      output = output+e.id;
      printOutputNum(output);
    }
  })
})