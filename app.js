// Variables
const btnReset = document.querySelector(".main__btn");

const billCheck = document.querySelector("#bill");
let totalBill = parseInt(billCheck.value);

const numPeople = document.querySelector("#people");
let numOfPeople = parseInt(numPeople.value);

const labels = document.querySelectorAll(".main__amount");
const custom = document.querySelector("#custom");
const selectTip = document.querySelectorAll('[type="radio"]');
let tipSelection = 15;

const totalAmount = document.querySelector("#Amount");
const totalPerPerson = document.querySelector("#Total");

const mesajeError = numPeople.nextElementSibling.nextElementSibling;

// AddEventListenners
document.addEventListener("DOMContentLoaded", btnDisabled);
billCheck.addEventListener("input", billUpdate);
numPeople.addEventListener("input", undateNumOfPeople);
btnReset.addEventListener("click", resetForm);
custom.addEventListener("input", customTips);
totals();

// Actulizacion del CSS en select tip
labels.forEach((element) =>
  element.addEventListener("click", () => {
    labels.forEach((btn) => {
      btn.classList.remove("main__amount--selected");
    });
    element.classList.add("main__amount--selected");
  })
);

selectTip.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    tipSelection = parseInt(evt.target.value.slice(0, -1));
    totals();
  });
});

function billUpdate() {
  totalBill = parseFloat(billCheck.value);
  totals();
}

function undateNumOfPeople() {
  numOfPeople = parseInt(numPeople.value);
  if (numOfPeople === 0 || isNaN(numOfPeople)) {
    showError();
  } else {
    numPeople.classList.remove("error");
    mesajeError.classList.remove("error");
    totals();
  }
}

function customTips(evt) {
  tipSelection = parseFloat(evt.target.value);
  if (tipSelection <= 0 || isNaN(tipSelection)) return;
  totals();
}

function totals() {
  const amountPerson = ((totalBill * tipSelection) / 100 / numOfPeople).toFixed(
    2
  );
  const totalPerson = (
    ((totalBill * tipSelection) / 100 + totalBill) /
    numOfPeople
  ).toFixed(2);

  totalAmount.textContent = amountPerson;
  totalPerPerson.textContent = totalPerson;

  btnReset.disabled = false;
  btnReset.classList.remove("active");
}

function resetForm() {
  billCheck.value = 0;
  custom.value = "custom"
  totalBill = 0;
  numPeople.value = 2;
  numOfPeople = 2;
  totalAmount.textContent = "0.0";
  totalPerPerson.textContent = "0.0";
  btnDisabled();
}

function btnDisabled() {
  btnReset.classList.add("active");
  btnReset.disabled = true;
}

function showError() {
  numPeople.classList.add("error");
  mesajeError.classList.add("error");
}
