// // Get Ref to every Element that we need 
// const form = document.querySelector('#itemForm');
// const itemInput = document.querySelector('#itemInput');
// const itemList = document.querySelector('.item-list');
// const feedback = document.querySelector('.feedback');
// const clearBtn = document.querySelector('#clear-list');


// let todoItems = [];

// const handleItem = (itemName) => {
//     const items = itemList.querySelectorAll('.item');
    
//     // Looping Through Items 

//     items.forEach((item) => {
//         if(item.querySelector('.item-name').textContent === itemName){
//             // Complete event listner and effect
//             item.querySelector('.complete-item').addEventListener('click',() => {
//                 item.querySelector('.item-name').classList.toggle('completed');
//                 item.classList.toggle('visibility');
//             });
//             // edit eventlistner 
//             item.querySelector('.edit-item').addEventListener('click',() => {
//                 itemInput.value = itemName;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter((item) => {
//                     return item !==itemName;
//                 })
//             });
//             // Delete Event listnener
//             item.querySelector('.delete-item').addEventListener('click',() => {
//                 debugger;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter((item) => {
//                     return item !== itemName;
//                 });
//                 showFeedback('item-delete','success');
//             })
//         }
//     })
// }

// const removeItem = (item) => {
//     console.log(item);
//     const removeIndex = (todoItems.indexOf(item));
//     todoItems.splice(removeIndex,1);
// }

// // Render List 

// const renderList = (todoItems) => {
//     itemList.innerHTML = '';
//     todoItems.forEach((item) => {
//         itemList.insertAdjacentHTML('beforeend',`<div class="item my-3">
//         <h5 class="item-name text-capitalize">${item}</h5>
//         <div class="item-icons">
//          <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
//          <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
//          <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
//         </div>
//        </div>`);
//        handleItem(item);
//     })
// }

// // getLocalStorage

// const getLocalStorage = () => {
//     const todoStorage = localStorage.getItem('todoitems');
//     if(todoStorage === undefined || todoStorage === null){
//         todoItems = [];
//     }
//     else{
//         todoItems = JSON.parse(todoStorage);
//         renderList(todoItems);
//     }
    
//     // Set localStorage 
    
//     const setLocalStorage = (todoItems) => {
//         localStorage.setItem('todoItems',JSON.stringify(todoItems));
//     }
//     // Get local storage from page
    
//     getLocalStorage();
    
    
    
//     // add item to the list including from storage 
// }
//                 function check(e) {
//                        e.preventDefault();
//                       const itemName = itemInput.value;
                
//                       if(itemName.length === 0){
//                         feedback.innerHTML = 'Please Enter Something';
//                         feedback.classList.add('showItem','alert-danger');
//                         setTimeout(() => {
//                             feedback.classList.remove('showItem')
//                         },3000)
//                     }
//                       else{
//                         todoItems.push(itemName);
//                         setLocalStorage(todoItems);
//                         renderList(todoItems);
//                     }
//                      itemInput.value = '';
//                 };

// // Clear all items from the list
// clearBtn.addEventListener('click',() => {
//     todoItems = [];
//     localStorage.clear();
//     renderList(todoItems);
// })


// ------------------------------------------------XXX-------------------------------

//add an eventListener to the from
const form = document.querySelector('#itemForm'); 
// select form
const itemInput = document.querySelector('#itemInput'); 
// select input box from form
const itemList = document.querySelector('.item-list');
const feedback = document.querySelector('.feedback');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];

const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');
 
    items.forEach(function(item){
        
        if(item.querySelector('.item-name').textContent === itemName){
            //complete event listener
            item.querySelector('.complete-item').addEventListener('click', function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            //edit event listener
            item.querySelector('.edit-item').addEventListener('click', function(){
                itemInput.value = itemName;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });
            });
            // delete event listener
            item.querySelector('.delete-item').addEventListener('click', function(){
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });

                showFeedback('item delete', 'success');
            })
        }
    })
}

const removeItem = function(item){
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

const getList = function(todoItems){
    itemList.innerHTML = '';

        todoItems.forEach(function(item){
            itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

            handleItem(item);
        });
}

const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}

const setLocalStorage = function(todoItems){
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// get local storage from page
getLocalStorage();

//add an item to the List, including to local storage
form.addEventListener('submit', function(e){ 
    e.preventDefault();
    const itemName = itemInput.value;
    
    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
        //add event listeners to icons;
        //handleItem(itemName);
    }
    
    itemInput.value = '';

    });

    //clear all items from the list
clearButton.addEventListener('click', function(){
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})
