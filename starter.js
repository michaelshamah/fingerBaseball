$(document).ready(function(){
  console.log("loaded")

//all the variable I need
var totalOuts=0;
var strikes= 0;
var runnerOnFirst=false;
var runnerOnSecond=false;
var runnerOnThird=false;
var comRuns= 0;
var userRuns=0;
var runs=0;
var switchSides=0;

//function to get the users input by either tht ebutton or keypress
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
    $('input').keypress(function(event) {
      if (event.which == 13){
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
      }
    });
  };
// randomly generating the computers output
  function computerInput(){
    var comChoice= (Math.floor(Math.random()*4)+1)
    return comChoice;
  };
// get the inning using the outs
  function inning(){
    $('#inning-number').text("Top 1");
    if (totalOuts%6===0 && totalOuts !== 0){
      var inning= (totalOuts/6)+1;
      $('#inning-number').text("Top "+inning);
    } else if (totalOuts%3===0 && totalOuts !== 0){
      if (totalOuts===3){
        $('#inning-number').text("Bot 1");
      } else{
        var inning= (((totalOuts-3)/6)+1);
      $('#inning-number').text("Bot "+inning);
      }
    }
  }

//The atual at bat what happens
  function  pitch(batter, pitcher){
    //set the runs variable
    var runs= 0;
    //get the inning
    inning();
    //see whose at bat
    if (switchSides){
      switchSides=true
      var newPitcher=batter;
      var batter=pitcher;
      var pitcher=newPitcher;
    }
    //see if there are men on base
    if ($('#first').hasClass('yellow')){
      var runnerOnFirst=true;
    }
    if ($('#second').hasClass('yellow')){
      var runnerOnSecond=true;
    }
    if ($('#third').hasClass('yellow')){
      var runnerOnThird=true;
    }
    //if it is a hit
    if (pitcher===batter){
      // set strikes to 0
      var strikes=0;
      $('.strikes').removeClass('yellow');
      //if first give each runner the right number of bases and console log
      if (batter===1){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 1, batter hit a single! Each runner moves a base.");
        if (runnerOnThird){
          $('#third').removeClass('yellow flash animated');
        }
        if (runnerOnSecond){
          $('#third').addClass('yellow animate flash');
          $('#second').removeClass('yellow flash animated');
        };
        if (runnerOnFirst){
          $('#second').addClass('yellow flash animated');
          $('#first').removeClass('yellow flash animated');
        };
        $('#first').addClass('yellow flash animated');
      }
      //if double give each runner the right number of bases and console log
      if (batter===2){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 2, batter hit a double! Each runner moves two bases.");
        if (runnerOnThird){
          $('#third').removeClass('yellow flash animated')
          runs+=1
        }
        if (runnerOnSecond){
          runs+=1;
        $('#second').removeClass('yellow flash animated');
        } ;
        if (runnerOnFirst){
          $('#third').addClass('yellow flash animated');
          $('#first').removeClass('yellow flash animated');
        };
        $('#second').addClass('yellow flash animated');
      }
      //if triple give each runner the right number of bases and console log
      if (batter===3){
        $('#third').addClass('yellow flash animated');
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 3, batter hit a triple! Each runner moves three bases.");
        runs+=1
        if (runnerOnThird){
          $('#third').removeClass('yellow flash animated')
          runs+=1
        }
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow flash animated');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').removeClass('yellow flash animated');
        }
        $('#third').addClass('yellow flash animated');
      }
      //if  homer give each runner the right number of bases and console log
      if (batter===4){
        runs+=1
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 4, batter hit a Home Run! Everyone scores.");
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow flash animated');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').removeClass('yellow flash animated');
        }
        if (runnerOnThird){
          runs+=1;
        $('#first').removeClass('yellow flash animated');
        }
      }
    //if out
    } else if (batter > pitcher) {
      //check to see if its 1st 2nd or 3rd out. suppply the right yellows
      var out3= false
      $('.chats').prepend('<p>');
      ($('.chats p').eq(0)).text("The batter put out a "+ batter+ " and the pitcher put out a "+pitcher+" it's a out.");
      $('.strikes').removeClass('yellow flash animated');
      if ($('#out1').hasClass('yellow') && (!($('#out2').hasClass('yellow')))){
        $('#out2').addClass('yellow flash animated');
      } else if ($('#out2').hasClass('yellow')){
        var out3= true
      } else {
        $('#out1').addClass('yellow flash animated');
      }
    //if its a stike make the right stike cirlce yellow and check if its out
    } else{
      //log it
      $('.chats').prepend('<p>');
      ($('.chats p').eq(0)).text("The batter put out a "+ batter+ "  and the pitcher put out a "+pitcher+" it's a strike.");
      if ($('#strike2').hasClass('yellow')){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("Three strikes you're out!")
        var strikes=0;
        $('.strikes').removeClass('yellow flash animated');
        if ($('#out1').hasClass('yellow') && (!($('#out2').hasClass('yellow')))){
          $('#out2').addClass('yellow flash animated');
        } else if ($('#out2').hasClass('yellow')){
        var out3= true
        } else {
          $('#out1').addClass('yellow flash animated');
        }
      }else{
        if ($('#strike1').hasClass('yellow')){
          $('#strike2').addClass('yellow flash animated');
        } else{
          $('#strike1').addClass('yellow flash animated');
        }
      }
    }
    //check if it is the third out
    if (out3){
      $('.circle').removeClass('yellow flash animated');
      totalOuts+=3
      //check if game over
      if (totalOuts===inNum){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("Game over!");
        //see who won
        if (userRuns > comRuns){
          ($('.chats p').eq(0)).text("What a win, you have bested the computer.");
        } else{
          ($('.chats p').eq(0)).text("Sorry, your skills could not match the computer. Better luck next time!");
        }
        //get rid of the button
        $('button').css({display: 'none'});
        $('input').css({display: 'none'});
      } else{

        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("three outs switch sides!");
        var strikes= 0;
      }
      //remove the players
      $('#first').removeClass('yellow flash animated');
      $('#second').removeClass('yellow flash animated');
      $('#third').removeClass('yellow flash animated');
      //see who was at bat anf change it
      if (!switchSides){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("user has " +userRuns+ ' runs and computer has ' + comRuns+' runs');
        switchSides++;
      } else{
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("user has "+ userRuns+' runs and computer has ' + comRuns+' runs');
        switchSides--;
      }
      //reset the variable
      var runs= 0
    }
    //after hit see who gets the run
    if (switchSides===0){
      userRuns+= runs;
      $('#bottom-score').text(userRuns);
    }else{
      comRuns+= runs;
      $('#top-score').text(comRuns);
    }
    inning();
  };
  //get the right pitcher and batter
  function userAtBat(){
    pitch(userChoice, computerInput());
  };
//ask user how many innings
var inNum= parseInt(prompt("before we start how many innnings would you like to play?"))*6;
 //accept the selection
 userInput(userAtBat);

});
