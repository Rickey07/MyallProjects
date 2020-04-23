let filterInput = document.querySelector('#filter');

filterInput.addEventListener('keyup',() => {
    // console.log('running')
  
    let filterVal = document.querySelector('#filter').value.toUpperCase();

    
    let namesUl = document.querySelector('#names');

    let li = namesUl.querySelectorAll('.collection-item');
li.forEach((e) => {
  let a =   e.getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterVal)> -1){
        e.style.display =''
    }
    else{
        e.style.display = 'none';
    }
})
})
