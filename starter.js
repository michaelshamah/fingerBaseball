$(document).ready(function(){
  console.log("loaded")
//1. make a function to accept the input from the user
//put in the chatbox
  function userInput(){
    $('button').click(function(event) {
      userChoices=["1", "2" ,"3" ,"4"]
      userChoice=$('input').val();
      if (userChoices.includes(userChoice)){
        return userChoice;
      } else{
        alert("not a valid input! we only accpet a 1, 2, 3 or 4");
        $('input').val("");
      }
    });
  };
//2. make a function to create a number from the computer
  //put these things in the chatbox
  function computerInput(){
    comChoice= (Math.floor(Math.random()*4)+1)
    return comChoice;
  }


//3. make a function that compares the two number and gives an out come
  // if same number return what the hit was
  // if pitcher was higher than batter give out
  //if batter was higher than pitch give strike
  //have all these things reflect on the scoreboard
  //put thee things in the chatbox

//4. make a function that retur the number of bases the runners move
  //add the hit (single=1, double=2,triple=3, homerun=4) to the baserunners
  // if the the base number is 4 or higher add a score
  //else put the runners at the right base
  //have it reflect on the scoreboard and field

//5. make a function that switches batter and pitcher
  //every three outs switch the batter and pitcher
  //have it refelct on the scoreboard


//6. make function(or if else statment) that checks strikes and return if out or not
  //have ut reflect on socreboard

//7. make a function that checks to see who won
  //after three innings check
  //who ever has more runs they win
  //alert the user know
});

