$(document).ready(function(){
  console.log("loaded")


var totalOuts=0;
var strikes= 0;
var runnerOnFirst=false;
var runnerOnSecond=false;
var runnerOnThird=false;
var comRuns= 0;
var userRuns=0;
var runs=0;
var switchSides=false;

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

  function computerInput(){
    var comChoice= (Math.floor(Math.random()*4)+1)
    return comChoice;
  };
  function inning(){
    $('#inning-number').text("Top 1");
    if (totalOuts%6===0 && totalOuts !== 0){
      var inning= totalOuts/6;
      $('#inning-number').text("Top "+inning);
    } else if (totalOuts%3===0 && totalOuts !== 0){
      var inning= totalOuts/3;
      $('#inning-number').text("Bot "+inning);
    }
  }


  function  pitch(batter, pitcher){
    runs= 0;
    inning();
    if (switchSides){
      switchSides=true
      var newPitcher=batter;
      var batter=pitcher;
      var pitcher=newPitcher;
    }
    if ($('#first').hasClass('yellow')){
      var runnerOnFirst=true;
    }
    if ($('#second').hasClass('yellow')){
      var runnerOnSecond=true;
    }
    if ($('#third').hasClass('yellow')){
      var runnerOnThird=true;
    }
    if (pitcher===batter){
      strikes=0;
      $('.strikes').removeClass('yellow');

      if (batter===1){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 1, batter hit a single! Each runner moves a base.");
        if (runnerOnSecond){
          $('#third').addClass('yellow');
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          $('#second').addClass('yellow');
          $('#first').removeClass('yellow');
        };
        if (runnerOnThird){
          $('#third').removeClass('yellow');
        }
        $('#first').addClass('yellow');
      }

      if (batter===2){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 2, batter hit a double! Each runner moves two bases.");
        if (runnerOnThird){
          $('#third').removeClass('yellow')
          runs+=1
        }
        if (runnerOnSecond){
          runs+=1;
        $('#second').removeClass('yellow');
        } ;
        if (runnerOnFirst){
          $('#third').addClass('yellow');
          $('#first').removeClass('yellow');
        };
        $('#second').addClass('yellow');
      }

      if (batter===3){
        $('#third').addClass('yellow');
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 3, batter hit a triple! Each runner moves three bases.");
        runs+=1
        if (runnerOnThird){
          $('#third').removeClass('yellow')
          runs+=1
        }
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').removeClass('yellow');
        }
        $('#third').addClass('yellow');
      }

      if (batter===4){
        runs+=1
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("you both put out 4, batter hit a Home Run! Everyone scores.");
        if (runnerOnSecond){
          runs+=1;
          $('#second').removeClass('yellow');
        };
        if (runnerOnFirst){
          runs+=1;
          $('#first').removeClass('yellow');
        }
        if (runnerOnThird){
          runs+=1;
        $('#first').removeClass('yellow');
        }
      }

    } else if (batter > pitcher) {
      var out3= false
      console.log (batter+ ' '+pitcher+ ' '+ 'out');
      $('.chats').prepend('<p>');
      ($('.chats p').eq(0)).text("The batter put out a "+ batter+ " and the pitcher put out a "+pitcher+" it's a out.");
      $('.strikes').removeClass('yellow');
      if ($('#out1').hasClass('yellow') && (!($('#out2').hasClass('yellow')))){
        $('#out2').addClass('yellow');
      } else if ($('#out2').hasClass('yellow')){
        var out3= true
      } else {
        $('#out1').addClass('yellow');
      }
    } else{
      $('.chats').prepend('<p>');
      ($('.chats p').eq(0)).text("The batter put out a "+ batter+ "  and the pitcher put out a "+pitcher+" it's a strike.");
      if ($('#strike2').hasClass('yellow')){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("Three strikes you're out!")
        var strikes=0;
        $('.strikes').removeClass('yellow');
        if ($('#out1').hasClass('yellow') && (!($('#out2').hasClass('yellow')))){
          $('#out2').addClass('yellow');
        } else if ($('#out2').hasClass('yellow')){
        var out3= true
        } else {
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
    if (out3){
      $('.circle').removeClass('yellow');
      totalOuts+=3
      console.log(totalOuts)
      if (totalOuts===inNum){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("Game over!");
        if (userRuns > comRuns){
          ($('.chats p').eq(0)).text("What a win, you have bested the computer.");
        } else{
          ($('.chats p').eq(0)).text("Sorry, your skills could not match the computer. Better luck next time!");
        }
        $('button').off();
      } else{
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("three outs switch sides!");
        var strikes= 0;
      }
      $('#first').removeClass('yellow');
      $('#second').removeClass('yellow');
      $('#third').removeClass('yellow');
      if (!switchSides){
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("user has " +userRuns+ ' runs and computer has ' + comRuns+' runs');
        switchSides = true;
      } else{
        $('.chats').prepend('<p>');
        ($('.chats p').eq(0)).text("user has "+ userRuns+' runs and computer has ' + comRuns+' runs');
        switchSides = false;
      }
      runs= 0
    }
    if (!switchSides){
      console.log(batter);
      userRuns+= runs;
      $('#bottom-score').text(userRuns);
    }else{
      comRuns+= runs;
      $('#top-score').text(comRuns);
    }
  };
  function userAtBat(){
    pitch(userChoice, computerInput());
  };
  function comAtBat(){
    pitch(computerInput(), userChoice);
  };


var inNum= parseInt(prompt("before we start how many innnings would you like to play?"))*6;
 userInput(userAtBat);

});
