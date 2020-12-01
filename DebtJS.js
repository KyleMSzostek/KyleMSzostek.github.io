// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 
let loanWithInterest = 0;
let int = 0;

// --- function: loadDoc() ---

function loadDoc() {
  
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);
  //pre-fill default for amount
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  //pre-fill for default loan
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  //pre-fill for default interest
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toCommaFix(loanWithInterest));
  
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    //add the years and then greyify the rest
    $(`#loan_year0${i}`).val(defaultYear++);
    $(`#loan_year0${i}`).attr("disabled","true");
    $(`#loan_year0${i}`).css({"backgroundColor":"grey","color":"white"});
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true");
    $(`#loan_int0${i}`).css({"backgroundColor":"grey","color":"white"});
    //formula from example
    loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
    $("#loan_bal0" + i).text(toCommaFix(loanWithInterest));
    } // end: "for" loop
  
  // all input fields: select contents on focus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });

} // end: function loadDoc()

let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
  for(i=1;i<6;i++){
    $(`#loan_year0${i}`).val(loans[i-1].loan_year);
    let amt = loans[i-1].loan_amount
    $(`#loan_amt0${i}`).val(amt);
    totalAmt+= parseFloat(amt);
    $(`#loan_int0${i}`).val(loans[i-1].loan_int_rate);
    loanWithInterest = (loanWithInterest + parseFloat(amt)) * (1 + loans[0].loan_int_rate);

    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
  int = loanWithInterest-totalAmt;
  $(`#loan_int_accrued`).text(toMoney(int));
}

function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//tried to do it without => notation but failed will try later for now use example
function toCommaFix(value) {
    return toComma(value.toFixed(2));
}
//example
let toMoney = (value) => {
return `\$${toComma(value.toFixed(2))}`; 
}


function updateLoansArray() {
  let valid = true;
  //checkers for numbers
  let tester = /^-?\d*\.?\d*$/;

  if(!tester.test($(`#loan_year01`).val())){
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  
  for (i = 1; i < 6; i++) {
    if(!tester.test($(`#loan_amt0${i}`).val())){
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  }
  
  //check if interest is not a crazy number
  if(!tester.test($(`#loan_int01`).val())){
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }
  
  //if they are true allow them and change to decimals
  if(valid){
    loans[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    }
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i-1].loan_amount = amt;
    }
    let rate = parseFloat($("#loan_int01").val());
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    }

    updateForm();
  }
}

//save button inspired by example using bracket as the example used it as well
let saveForm = () => {
 localStorage.setItem(`savedInterest`, JSON.stringify(loans));
}

//loadbutton inspired from example
let loadForm = () => {
if(localStorage.getItem(`savedInterest`) != null){
   loans = JSON.parse(localStorage.getItem(`savedInterest`));
   updateForm();
} else {
   alert(`Error: no saved values`);
}
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.payments =[];
//populate the scope
$scope.populate = function () {
  updateForm();
  //this is the grand total
  let total = loanWithInterest;
  let interestRate = loans[0].loan_int_rate;
  //from example
  let rate = interestRate / 12;
  let n = 11;
  //example formula
  let payment = 12 * (total / ((((1+rate)**(n*12))-1)/(rate *(1+rate)**(n*12))));
  //making sure it is counting down 10 years
  for (let i = 0; i < 10; i++) {
    total -= payment
    let int = total * (interestRate); 
    $scope.payments[i]={
      //these go to the correct spot by reading the name such as year and ye
      //the year in the "table"
      "year":loans[4].loan_year + i + 1,
      //The payment in the "table"
      "payment": toMoney(payment),
      //the amount in the "table"
      "amount": toMoney(int),
      //the yearly balance 
      "bal": toMoney(total += int)
    }
  }
  $scope.payments[10] = {
    //these are the totals which should all end up 0 except for the year and payments
    "year":loans[4].loan_year + 11,
    "payment": toMoney(total),
    "amount": toMoney(0),
    "bal":toMoney(0)
  }
}
});