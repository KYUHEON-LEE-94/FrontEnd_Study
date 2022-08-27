const $numberbuttons = document.querySelectorAll('[data-number]');
//변수가 아닌 객체임을 알려주기 위해$를 붙여주는것뿐
const $operatorBtns = document.querySelectorAll('[data-operand]');
const $allClearBtn = document.querySelector('[data-all-clear]');
const $deleteBtn = document.querySelector('[data-delete]');
const $equalsBtn = document.querySelector('[data-equals]');
const $previousDisplay = document.querySelector('[data-previous]');
const $resultDisplay = document.querySelector('[data-result]');

//------------변수지정---------------------------------------------------
    let resultNumber = '';
    let previousNumber = '';
    let operation = null;
//-------------함수 기능 만들기------------------------------------------------------
//입력받는 값을 toLocaleString으로 바꿔주는 함수
function getDisplayNumber(numberStr){
    let floatNumber = parseFloat(numberStr)
    if(isNaN(floatNumber)){
        return
    }
    
    let displayNumber = floatNumber.toLocaleString('en',{
        maximumSignificantDigits: 10
    });
    return displayNumber;
}

//toLocaleString로 바꾼 값을 화면에 출력하는 함수
function updateDisply(){

    $resultDisplay.textContent = getDisplayNumber(resultNumber);
    if(operation){
        $previousDisplay.textContent = getDisplayNumber(previousNumber)+operation
    }else{
        $previousDisplay.textContent= '';
    }
}
//------------------숫자버튼을 눌렀을 경우----------------------------------------------

$numberbuttons.forEach(function (button) {
button.addEventListener('click', function(e){
    let numberStr = e.target.textContent
    if(numberStr == '.' && resultNumber.includes('.')){
        return
    }
    resultNumber += numberStr;
    updateDisply();
})
})
//--------------연산버튼을 눌렀을 경우-----------------------------------

$operatorBtns.forEach((button) =>{
    button.addEventListener("click", function(e){

        previousNumber = resultNumber
        resultNumber= '';      
        operation = e.target.textContent
        updateDisply();
    })
})
//------------계산하는 함수------------------------------------------------------
function compute(){
    let prev = parseFloat(previousNumber)
    let current = parseFloat(resultNumber);
 
    let result = null;

    switch(operation){
     case '+': result = prev+current; break;
     case '-': result = prev-current; break;
     case '%':result = prev/current; break;
     case 'x':result = prev*current; break;
    }
    resultNumber = result;
    operation = null;
    previousNumber ='';
}
//--------------------------------------
function clear(){
    resultNumber = '';
   operation = null;
   previousNumber = '';

}
//-----AC버튼을 눌러서 초기화하고싶은 경우-------------------------------
$allClearBtn.addEventListener("click", function(){
    clear();
    updateDisply();
})

//-------------------------------
function deletenum(){
    resultNumber = resultNumber.slice(0,-1)
}

//----딜리트버튼을 누를때------------------------

$deleteBtn.addEventListener("click", function(){
    deletenum();
    updateDisply();
})

$equalsBtn.addEventListener("click", function(){
   compute();
   updateDisply();
})