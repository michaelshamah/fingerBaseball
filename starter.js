$(document).ready(function(){
  console.log("loaded")

var outs= 0
var strikes= 0
var runnerOnFirst=false
var runnerOnSecond=false
var runnerOnThird=false
var runsCom= 0
var runsUser=0
//1. make a function to accept the input from the user
//put in the chatbox
  function userInput(){
    $('button').click(function(event) {
      var userChoices=[1, 2, 3, 4]
      userChoice=parseInt($('input').val());
      if (userChoices.includes(userChoice)){
         $('input').val("");
         pitch(userChoice, computerInput());
      } else{
        alert("not a valid input! we only accpet a 1, 2, 3 or 4");
        $('input').val("");
      }
    });
  };
//2. make a function to create a number from the computer
  //put these things in the chatbox
  function computerInput(){
    var comChoice= (Math.floor(Math.random()*4)+1)
    return comChoice;
  }


//3. make a function that compares the two number and gives an out come
  function  pitch(batter, pitcher){
    if (pitcher===batter){
      if (runnerOnThird){
        runsUser+=1;
        runnerOnThird=false;
      };
      if (batter===1){
        console.log("single!");
        if (runnerOnSecond){
          runnerOnThird=true;
          runnerOnSecond=false;
        };
        if (runnerOnFirst){
          runnerOnSecond=true;
          runnerOnFirst=false;
        };
        runnerOnFirst=true;
      } else if (batter===2){
        console.log("double!");
        if (runnerOnSecond){
          runsUser+=1;
          runnerOnSecond=false;
        } ;
        if (runnerOnFirst){
          runnerOnThird=true;
          runnerOnFirst=false;
        };
        runnerOnSecond=true;
      } else if (batter===3){
        console.log("triple!");
        if (runnerOnSecond){
          runsUser+=1;
          runnerOnSecond=false;
        };
        if (runnerOnFirst){
          runsUser+=1;
          runnerOnFirst=false;
        };
        runnerOnThird=true;
      } else {
        console.log("Home Run!");
        if (runnerOnSecond){
          runsUser+=1;
          runnerOnSecond=false;
        };
        if (runnerOnFirst){
          runsUser+=1;
          runnerOnFirst=false;
        }
        runsUser+=1;
      }
    }else if (batter > pitcher) {
      console.log (batter+ ' '+pitcher+ ' '+ 'out');
    } else{
      console.log (batter+ ' '+pitcher+ ' '+ 'strike');
    }
  }
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
userInput();
});

