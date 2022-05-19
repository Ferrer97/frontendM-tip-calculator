const btnReset = document.querySelector('.main__btn');
const billCheck = document.querySelector('#bill');
const numPeople = document.querySelector('#people');
const selectTip = document.querySelectorAll('[type="radio"]');
const formReset = document.querySelector('.main__section');
const totalAmount = document.querySelector('#Amount');
const totalPerPerson = document.querySelector('#Total');

const mesajeError = numPeople.nextElementSibling.nextElementSibling;

let totalBill = 0;
let tip = 0;
let numOfPeople  = 0;



eventListeners();

function eventListeners () {
    document.addEventListener('DOMContentLoaded',btnDisabled);
    billCheck.addEventListener('change', setBill);
    numPeople.addEventListener('change', setNumOfPeople);
    selectTip.forEach( listOfTips =>{
    listOfTips.addEventListener('click', setTip);})
    formReset.addEventListener('click', resetForm);
}

function btnDisabled() {
   btnReset.disabled = true;
}

function setBill () {
    totalBill = parseFloat(billCheck.value);

    if(isNaN(totalBill) || totalBill <= 0){
        console.log('no');
    }else{

    }
}

function setNumOfPeople () {

    numOfPeople = parseInt(numPeople.value);

    if( numOfPeople === '' || isNaN(numOfPeople ) || numOfPeople <= 0 ){
        showError();
    }else{
        showHtml();
    }
}

function setTip (e) {
    tip = parseInt(e.target.value);
}

function showError () {
    numPeople.classList.add('error');
    mesajeError.classList.add('error');
}


function showHtml () {

    const amount = ((totalBill * tip / 100)
    / numOfPeople );

    const perPerson = (amount + totalBill / numOfPeople);

    totalAmount.textContent = `${amount}`
    
    totalPerPerson.textContent = `${perPerson}`

    btnReset.disabled = false;

   setTimeout(() => {
       resetForm();
       totalAmount.textContent = '0.0'
       totalPerPerson.textContent = '0.0'
       btnDisabled();
   }, 5000);

}

function resetForm () {

    formReset.reset();
}




