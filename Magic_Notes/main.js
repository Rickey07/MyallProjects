// writing js for the input and output 

//Get ref to the input elements 


// Get ref to the buttons
let notesobj = [];
// function to store the notes 
const button=document.getElementById('userbtn');
button.addEventListener('click',(e) => {

    let inputEL=document.getElementById('input1');
    
    
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesobj=[];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(inputEL.value);
    localStorage.setItem('notes',JSON.stringify(notesobj))
    inputEL.value='';
    console.log(notesobj)
    render();
} )

function render() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let title = document.querySelector('.text').value;
    let html = "";
    notesObj.forEach(function(element, index,) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <p class="card-text" id="cc"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
       let notescontEL=document.getElementById('Notescontainer');
       if(notesobj.length !=0){
           notescontEL.innerHTML=html;
       }
       else{
           notescontEL.innerHTML=`Nothing to show !Please add some notes `
       }
    //    console.log(check);
   }

   // Function to delete notes 

 function deleteNote(index){
   let notes=localStorage.getItem('notes');
   if(notes == null){
       notesObj = []
   }
   else{
       notesObj = JSON.parse(notes);
   }
   notesObj.splice(index,1);
   localStorage.setItem('notes',JSON.stringify(notesObj));
   render();
   

   }

   // Adding Search functionality 
   const Search=document.querySelector('#Search');
   Search.addEventListener('onKeyUp', () => {
       let inputVal = Search.value.toLowerCase();
       console.log(inputVal);
  let  notesCards = document.querySelector('.noteCard');
    Array.from(notesCards).forEach(function(element){
        let cardtxt = element.getElementById('cc')[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
   })