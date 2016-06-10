$(document).ready(function(){
  console.log("loaded")

var outs= 0;
var totalOuts=0;
var strikes= 0;
var runnerOnFirst=false;
var runnerOnSecond=false;
var runnerOnThird=false;
var comRuns= 0;
var userRuns=0;
var runs=0;
var switchSides= false;
//1. make a function to accept the input from the user
//put in the chatbox
  function userInput(atBat){
    $('button').click(function(event) {
      var userChoices=[1, 2, 3, 4]
      userChoice=parseInt($('input').val());
      if (userChoices.includes(userChoice)){
         $('input').val("");
         var runsAfterInning= atBat();
         return runsAfterInning
      } else{
        alert(userChoice+ " is not a valid input! we only accpet a 1, 2, 3 or 4");
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
    if (switchSides){
      var newPitcher=batter;
      var batter=pitcher;
      var pitcher=newPitcher;
    }
    if ($('.first').hasClass('yellow')){
      var runnerOnFirst=true;
    }
    if ($('.second').hasClass('yellow')){
      var runnerOnSecond=true;
    }
    if ($('.third').hasClass('yellow')){
      var runnerOnThird=true;
    }
    if (pitcher===batter){
      strikes=0;
      $('.strikes').removeClass('yellow');
      if (runnerOnThird){
        runs+=1;
        $('#third').removeClass('yellow');
      };
      if (batter===1){
        console.log("single!");
        if (runnerOnSecond){
          $('#third').addClass('yellow');
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          $('#second').addClass('yellow');
          $('#first').removeClass('yellow');
        };
        $('#first').addClass('yellow');
      } else if (batter===2){
        console.log("double!");
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow');
        } ;
        if (runnerOnFirst){
          $('#third').addClass('yellow');
          $('#first').removeClass('yellow');
        };
        $('#second').addClass('yellow');
      } else if (batter===3){
        console.log("triple!");
        $('#third').addClass('yellow');
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').removeClass('yellow');
        };

      } else {
        console.log("Home Run!");
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').addClass('yellow');
        }
        runs+=1;
      }
    }else if (batter > pitcher) {
      console.log (batter+ ' '+pitcher+ ' '+ 'out');
      $('.strikes').removeClass('yellow');
      if ($('#out1').hasClass('yellow')){
        $('#out2').addClass('yellow');
      } else{
        $('#out1').addClass('yellow');
      }
      outs+=1;
      strikes=0;
    } else{
      console.log (batter+ ' '+pitcher+ ' '+ 'strike');
      strikes+=1;
      if (strikes===3){
        console.log("three strikes your out!");
        outs+=1;
        strikes=0;
        $('.strikes').removeClass('yellow');
        if ($('#out1').hasClass('yellow')){
          ('#out2').addClass('yellow');
        } else{
          $('#out1').addClass('yellow');
        }
      }else{
        if ($('#strike1').hasClass('yellow')){
          $('#strike2').addClass('yellow');
        } else{
          $('#strike1').addClass('yellow');
        }
      }
    }
    if (outs===3){
      $('.out').removeClass('yellow');
      if (totalOuts===inNum){
        console.log("Game Over");
        $('button').off();
      } else{
        totalOuts+=3
        strikes= 0;
        $('#first').removeClass('yellow');
        $('#second').removeClass('yellow');
        $('#third').removeClass('yellow');
        if (batter===userChoice){
          userRuns+= runs;
          console.log("user has " +userRuns+ ' and computer has ' + comRuns);
          switchSides= true;
        } else{
          comRuns+= runs;
          console.log("user has "+ userRuns+ ' and computer has ' + comRuns);
          switchSides= false;
        }
        runs= 0;
        console.log("three outs switch sides!");
        outs=0;
      }
    }
  }
  function userAtBat(){
    pitch(userChoice, computerInput());
  }
  function comAtBat(){
    pitch(computerInput(), userChoice);
  }
  // if same number return what the hit was
  // if pitcher was higher than batter give out
  //if batter was higher than pitch give strike
  //have all these things reflect on the scoreboard
  //put thee things in the chatbox
  //add the hit (single=1, double=2,triple=3, homerun=4) to the baserunners
  // if the the base number is 4 or higher add a score
  //else put the runners at the right base
  //have it reflect on the scoreboard and field
  //make function(or if else statment) that checks strikes and return if out or not

//5. make a function that switches batter and pitcher
  //every three outs switch the batter and pitcher
  //have it refelct on the scoreboard
  function innings(){
    inNum= parseInt(prompt("before we start how many innnings would you like to play?"));
    for(let i=0; i<= inNum; i++){
      if(i % 2===0){
        console.log("User at bat!"+ userRuns+' '+comRuns);
        userRuns+= userInput(userAtBat);
      } else{
        console.log("Computer at bat!"+ userRuns+' '+comRuns);
        comRuns+= userInput(comAtBat);
      }
    }
    console.log("final score is" + " " + userRuns + " to " + comRuns)
  }


//6. make a function that checks to see who won
  //after three innings check
  //who ever has more runs they win
  //alert the user know
var inNum= parseInt(prompt("before we start how many innnings would you like to play?"))*6;

userInput(userAtBat);
});
