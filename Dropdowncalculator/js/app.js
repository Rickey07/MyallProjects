// creating calculator functionality 

const button = document.querySelector('#btnSubmit');
 
  button.addEventListener('click',(e) => {
    //   console.log('This is rickey upadhyay You all are here for the fest organised by us.') // For button checking 

    // Get the input fields 

    const inputEl = document.querySelector('#exampleInputEmail1');
    const inputEl2 = document.querySelector('#exampleInputPassword1');
   
    // console.log(inputEl.value  + inputEl2.value); again checked

    // converting in numbers 
   let numInputEl = parseInt(inputEl.value,10);
   let numInputEl2 = parseInt(inputEl2.value,10);
    
   // Get the select button 
  const selectBtn = document.querySelector('#selectBtn');
  const resultCont = document.querySelector('.resultcontainer');
  

   if(selectBtn.value == '+'){
      resultCont.innerHTML = `<h1>Result:${numInputEl+numInputEl2}</h1>`
   }
   else if(selectBtn.value == '-'){
       resultCont.innerHTML = `<h1>Result:${numInputEl-numInputEl2}</h1>`
   }
   else if(selectBtn.value == '*'){
       resultCont.innerHTML = `<h1>Result:${numInputEl*numInputEl2}</h1>`
   }
   else{
       resultCont.innerHTML = `<h1>Result:${numInputEl/numInputEl2}</h1>`
   }

   inputEl.value = '';
   inputEl2.value = '';
    
  })