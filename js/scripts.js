//Buisness Logic
function Ticket(genre,time,age){
  this.genre = genre;
  this.time = time;
  this.age = age;
}
//User Interface Logic
$(document).ready(function(){
  $("form#formal").submit(function(){
    event.preventDefault();
    var inputGenre = $("#genre").val();
    var inputTime = $("#time").val();
    var inputAge =  $("#age").val();
    var newPrice = new Ticket(inputGenre,inputTime,inputAge);

    if(newPrice.genre === "Horror" || newPrice.time === "Afternoon" || newPrice.age === "Senior"){
      $(".result").text("7$");
    } else{
        $(".result").text("9$");
    };
  });
});
