# Finger Baseball
## User Stories

As a developer, I would like to create the game of Finger Baseball through Javascript, HTML and CSS. 

As a developer, in css i would like to recreate the baseball field.
 
- Create bases and place players on accordingly.
- Create a soreboard the keeps track of inings, score and count.
- Create a input box for the user.
- Create a chatbox to see what the computer put out and what happend on that pitch.

As a developer, in HTML I need to create all the diffrent divs when creating a beseball field.

As a developer in Javascript and JQuery I need to create the game.

-I need to randomize what the comupter puts out.
- Take the input from the user and compare.
- Either change the pitch count, outs, or men on bases.
- If a man scores change the score.
- Switch off inings.
- Check to see who won after 3 innings.

As a user I would like to play the game of baseball.
-I would like to see who is batting.
-I would like to see who is winning.
-I would like to see how many men on base, how many outs and how many strikes.
-I woul like to know what the computer put out.


##How to Play
-select a number of innings you would like to play.
-enter a number between 1 and 4.
-If the batter puts out a number greater than the pitcher it is an out.
-If the batter puts out a number lower than the pitcher it is a stikes.
-If they both put out the same number it is a hit.
- 1= single, 2= double, 3=triple, 4= homerun.
- 3 stikes per out and 3 outs per inning. 
- Good Luck!

##Installation
Run http://michaelshamah.github.io/fingerBaseball/ in your browser and your good to go!

##Aproach Taken
At first i believed that this would be a simple project as there werent to many variables to kkep track of. I reaized I was wrong as soon as I started psuedocoding when i realized the ariable multipiled the outcomes. It look many diffrent if statment to get through all the possiblites that the user could enter and the variables at play. It took me a long while to figure out how to switch off innings without usinga global variable but i got it too work using numbers.

##Unresolved Problems
-If there is a tie it doesn't go into extra innings.
-I did not get to put in alot of animations or make it very pretty.
-The code is not so dry.

## Sources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
-helped me with parseInt()

http://stackoverflow.com/questions/6001149/how-to-execute-a-method-passed-as-parameter-to-function
- tought me how to call a function as a parameter

https://css-tricks.com/examples/ShapesOfCSS/
-tought me how to make a diamond in css

Used animate CSS, Skeleton and Jquery

Celsete and Heide
-helped me with my CSS and HTML. You guys are the coolest!
