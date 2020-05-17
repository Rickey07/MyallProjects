console.log("This is the tutorial  for the course ");


// Class for course 

class course{
    constructor(cName,coName,authName){
        this.name = cName;
        this.coName = coName;
        this.auth = authName;
    }
    
    display(cName,courseName,authorName){
      let customerListRow = document.querySelector('#customer-list');
      let showCustomer = `
      <!-- single customer -->
      <div class="col-11 mx-auto col-md-6 col-lg-4 my-3">
       <div class="card text-left">
        <img src="./img/cust-0.jpg" class="card-img-top" alt="">
        <div class="card-body">
         <!-- customer name -->
         <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">${cName}</span></h6>
         <!-- end of customer name -->
         <!-- customer name -->
         <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
           ${courseName}
          </span></h6>
         <!-- end of customer name -->
         <!-- customer name -->
         <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${authorName}</span></h6>
         <!-- end of customer name -->
        </div>
       </div>
                       `
        customerListRow.innerHTML += showCustomer;
    }

    formReset(){
        customerForm.reset();
    }

    validate(cName,courseName,authorName){
      
        if((cName && courseName && authorName).trim().length ===0){
            return false
        }
        else{
            return true;
        }
    }

    showFeedback(){
        let feedBack = document.querySelector('.feedback');
        feedBack.classList.add('alert-success');
        feedBack.style.display = 'block';
        setTimeout(() => {
            feedBack.style.display = 'none';
        },3000)
    }

    loader(){
        let loading = document.querySelector('.loading');
        loading.style.display = 'block';
        setTimeout(() => {
            loading.style.display = 'none'
        },3000)
    }

}

/// Adding event listener to the form 
const customerForm = document.querySelector('#customer-form');

customerForm.addEventListener('submit',(e) => {
    const cName = document.querySelector('#name').value;
    const courseName = document.querySelector('#course').value;
    const authorName = document.querySelector('#author').value;
    let submitBtn = document.querySelector('.submitBtn');
     

    let Coursee = new course(cName,courseName,authorName);
     if(Coursee.validate(cName,courseName,authorName)){
         Coursee.loader();
         Coursee.showFeedback();
         Coursee.display(cName,courseName,authorName);
         Coursee.formReset();
        }
        else{
        
     }
    
     

    e.preventDefault();
})