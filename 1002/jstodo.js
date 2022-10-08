const $addBtn = document.querySelector('#add-btn');
const $inputBox = document.querySelector('#input-box');

const $todoList = document.querySelector('#todo-list');
const $todoCount = document.querySelector('#todo-count');
const $clearAll = document.querySelector('#clear-all');


$inputBox.addEventListener('keyup', function(e){
    //target의 값이 있다면
    if(e.target.value){
        $addBtn.classList.add("active")
    }else{
        $addBtn.classList.remove("active")
    }
})

$addBtn.addEventListener('click', function(){
    const $li = document.createElement('li');
    $todoList.appendChild($li).innerHTML = $inputBox.value;

    const $span = document.createElement('span');
    $span.classList.add('icon');
    $li.appendChild($span);

    $span.addEventListener('click', deleteItem)

    const $i = document.createElement('i');
    $i.classList.add('fa-solid', 'fa-minus');
    $span.appendChild($i);
    $clearAll.classList.add('active');

    const $liElems = $todoList .querySelectorAll('li');
    $todoCount.textContent = $liElems.length;

    $inputBox.value = '';
    $addBtn.classList.remove('active');
})

function deleteItem(e){
    e.currentTarget.parentNode.remove();
    let value = $todoCount.textContent;
    let count = parseInt(value);

    count--

    $todoCount.textContent = count;

    const $liElems = $todoList.querySelectorAll('li');
    if(liElems.length === 0){
        $clearAll.classList.remove('active');
    }
}

$clearAll.addEventListener('click', function(){
    $todoList.innerHTML = null;
    $todoCount.textContent = 0;
    $clearAll.classList.remove('active');
})