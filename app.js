const btnReset = document.querySelector('.main__btn');
const billCheck = document.querySelector('#bill');
const numPeople = document.querySelector('#people');
const selectTip = document.querySelectorAll('[type="radio"]');
const formReset = document.querySelector('.main__section');
const custom    = document.querySelector('#custom');
const totalAmount = document.querySelector('#Amount');
const totalPerPerson = document.querySelector('#Total');

const mesajeError = numPeople.nextElementSibling.nextElementSibling;

let totalBill = 0;
let tip = 0;
let numOfPeople  = 0;
let tipCustom =0;

eventListeners();

function eventListeners () {
    document.addEventListener('DOMContentLoaded',btnDisabled);
    billCheck.addEventListener('keyup', setBill);
    numPeople.addEventListener('keyup', setNumOfPeople);
    selectTip.forEach( listOfTips =>{
    listOfTips.addEventListener('click', setTip);});
    custom.addEventListener('keyup', custumTip);
    btnReset.addEventListener('click', resetForm);
}

function btnDisabled() {
   btnReset.classList.add('active');
   btnReset.disabled = true;
}

function setBill () {
    if(isNaN(billCheck.value) || billCheck.value <= 0){
    }else{
        totalBill = parseFloat(billCheck.value);
    }
}

function setNumOfPeople () {

    numOfPeople = parseInt(numPeople.value);

    if( numOfPeople === '' || isNaN(numOfPeople ) || numOfPeople <= 0 ){
        showError();
    }else{
        if(showError) {
            numPeople.classList.remove('error');
            mesajeError.classList.remove('error');
        }
        showHtml();
    }
}

function setTip (e) {
    tip = parseInt(e.target.value);
    console.log(e.target);
}

function custumTip (e) {
    tipCustom = e.target.value;
    
    if( isNaN(tipCustom ) || tipCustom <= 0 ){
        mesajeError.classList.add('error');
    }else{
        if(showError) {
            numPeople.classList.remove('error');
            mesajeError.classList.remove('error');
        }
        showHtml();
    }

}

function showError () {
    numPeople.classList.add('error');
    mesajeError.classList.add('error');
}


function showHtml () {

    if( tipCustom === 0 ) {
        let amount = Math.round((totalBill * tip / 100)
        / numOfPeople );
        let perPerson = Math.round((amount + totalBill / numOfPeople));
        
        totalAmount.textContent = `${amount}`
        totalPerPerson.textContent = `${perPerson}`
    } else {
        
        amount = Math.round((totalBill * tipCustom / 100)
        / numOfPeople );
        perPerson = Math.round((amount + totalBill / numOfPeople));
        
        totalAmount.textContent = `${amount}`
        totalPerPerson.textContent =`${perPerson}`
    }
    btnReset.disabled = false;
    btnReset.classList.remove('active');
        
}

function resetForm () {
    totalAmount.textContent = '0.0'
    totalPerPerson.textContent = '0.0'
    formReset.reset();
    btnDisabled();
}




