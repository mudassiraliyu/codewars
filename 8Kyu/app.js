/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

 */

 function evenOrOdd(number){
    if(number % 2 === 0){
        return "Even"
    } else{
        return "Odd"
    }
 }

//We need a function that can transform a number (integer) into a string.

function intergerToString(num){
    return num.toString();
}

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str){
    let result = "";
    for(let char of str){
        result += char + char;
    }
    return result;
}
/* 
 students grade
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'*/
 
function grade(scores){
    if(scores >= 90 && scores >= 100){
        return "A"
    } else if( scores >= 80 && scores <= 90){
        return "B"
    } else if( scores >= 70 && scores <= 80){
        return "C"
    } else if( scores >= 60 && scores <= 70){
        return "D"
    } else{
        return "Fail"
    }
}


/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!
*/
function betterAverage(classScore, yourScore){
 let total = 0;
 for(let i = 0; i < classScore.length; i++){
    total += classScore[i];
 }

 let average = total / classScore.length;
 return yourScore > average;
}

/*Let's play! You have to return which player won! In case of a draw return Draw!. */

function checkWon(player1, player2){
 if( player1 > player2){
  return "Player 1 won!"
 } else if( player2 > player1){
   return "Player 2 won!"
 } else{
    return "Draw!!"
 }
}
