//Business Logic
function Account(name,deposit){
  this.name = name;
  this.deposit = deposit;
}
function Deposit(inputtedDeposit,newDeposit){
  return inputtedDeposit + newDeposit
}

//User Interface Logic
$(document).ready(function(){
  $("form#initial").submit(function(){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedDeposit = parseInt($("input#deposit").val());

    var newAccount = new Account(inputtedName, inputtedDeposit);

    $("#result").append("<span class='result'>" + newAccount.name + newAccount.deposit +"</span>");


  });
  $("form#balance").submit(function(){
    event.preventDefault();

    var newDeposit = parseInt($("input#deposit-amount").val());

    var addAmount = Deposit(newDeposit);

    alert(addAmount);


  });

});
