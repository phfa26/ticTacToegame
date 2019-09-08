
let qA = 0;
let qB = 0;
let qC = 0;
let qD = 0;
let qE = 0;
let qF = 0;
let qG = 0;
let qH = 0;
let qI = 0;

let turnCounter = 1;
let scoreX = 0;
let scoreO = 0;
let lastWin = 0;

function scoreCheck(){

    if(qA+qB+qC === 3 || qA+qD+qG === 3|| qA+qE+qI === 3 || qB+qE+qH === 3 || qC+qF+qI === 3 || qD+qE+qF === 3 || qG+qH+qI === 3 || qG+qE+qC=== 3 ){
        $("#XWins").slideDown();
        scoreX++;
        turnCounter = 0; //Ends game
        lastWin = 1;
        $(".playAgain").fadeIn(1000);
        $("#bonesScore").text(`${scoreX}`)
    }
    if(qA+qB+qC === -3 || qA+qD+qG === -3|| qA+qE+qI === -3 || qB+qE+qH === -3 || qC+qF+qI === -3 || qD+qE+qF === -3 || qG+qH+qI === -3 || qG+qE+qC=== -3 ){
        $("#OWins").slideDown();
        scoreO++;
        turnCounter = 0; //Ends game
        lastWin = -1;
        $(".playAgain").fadeIn(1000);
        $("#skullScore").text(`${scoreO}`)
    }
}
//scoreCheck();

function turn(){
    if(turnCounter === -1){
        $("#skullTurn").show(500);
        $("#bonesTurn").hide(500);
        $("#noTurn").hide(500);
    }
    if(turnCounter === 1){
        $("#bonesTurn").show(500);
        $("#skullTurn").hide(500);
        $("#noTurn").hide(500);
    }

    if(turnCounter === 0){
        $("#noTurn").show(500);
        $("#bonesTurn").hide(500);
        $("#skullTurn").hide(500);
    }

}

$(document).ready(function() { 

    $("#XWins").hide();
    $("#OWins").hide();
    $("#skullTurn").hide();
    $("#bonesTurn").hide();
    $("#noTurn").hide();
    $(".playAgain").hide();

    turn();

    $( "#fieldA" ).click(function() {

    if ($( "#fieldA" ).text() == ""){

            if (turnCounter === 1){ $( "#fieldA" ).text('X').hide().slideDown(700);
            qA +=1;
            turnCounter = turnCounter*(-1);
            scoreCheck();
            }

            else if (turnCounter === -1){ $( "#fieldA" ).text('O').hide().slideDown(700);
            qA -=1;
            turnCounter = turnCounter*(-1);
            scoreCheck();
            }

            turn();
     }

    });

    $( "#fieldB" ).click(function() {

        if ($( "#fieldB" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldB" ).text('X').hide().slideDown(700);
                qB +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldB" ).text('O').hide().slideDown(700);
                qB -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }
    
         turn();
    });

    $( "#fieldC" ).click(function() {

        if ($( "#fieldC" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldC" ).text('X').hide().slideDown(700);
                qC +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldC" ).text('O').hide().slideDown(700);
                qC -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldD" ).click(function() {

        if ($( "#fieldD" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldD" ).text('X').hide().slideDown(700);
                qD +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldD" ).text('O').hide().slideDown(700);
                qD -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldE" ).click(function() {

        if ($( "#fieldE" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldE" ).text('X').hide().slideDown(700);
                qE +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldE" ).text('O').hide().slideDown(700);
                qE -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldF" ).click(function() {

        if ($( "#fieldF" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldF" ).text('X').hide().slideDown(700);
                qF +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldF" ).text('O').hide().slideDown(700);
                qF -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldG" ).click(function() {

        if ($( "#fieldG" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldG" ).text('X').hide().slideDown(700);
                qG +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldG" ).text('O').hide().slideDown(700);
                qG -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldH" ).click(function() {

        if ($( "#fieldH" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldH" ).text('X').hide().slideDown(700);
                qH +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldH" ).text('O').hide().slideDown(700);
                qH -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });

    $( "#fieldI" ).click(function() {

        if ($( "#fieldI" ).text() == ""){
    
                if (turnCounter === 1){ $( "#fieldI" ).text('X').hide().slideDown(700);
                qI +=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
    
                else if (turnCounter === -1){ $( "#fieldI" ).text('O').hide().slideDown(700);
                qI -=1;
                turnCounter = turnCounter*(-1);
                scoreCheck();
                }
         }

         turn();
    
    });


    $( ".playAgain" ).click(function() {

        $( "#fieldA" ).text("");
        $( "#fieldB" ).text('');
        $( "#fieldC" ).text('');
        $( "#fieldD" ).text('');
        $( "#fieldE" ).text('');
        $( "#fieldF" ).text('');
        $( "#fieldG" ).text('');
        $( "#fieldH" ).text('');
        $( "#fieldI" ).text('');

        qA = 0;
        qB = 0;
        qC = 0;
        qD = 0;
        qE = 0;
        qE = 0;
        qF = 0;
        qG = 0;
        qH = 0;
        qI = 0;

        $("#XWins").slideUp();
        $("#OWins").slideUp();
        $(".playAgain").fadeOut(1000);

        if(lastWin === 1){
            turnCounter = -1;
        }
        if(lastWin === -1){
            turnCounter = 1;
        }

        lastWin = 0;

        turn();

    });

    $( ".restart" ).click(function() {

        $( "#fieldA" ).text("");
        $( "#fieldB" ).text('');
        $( "#fieldC" ).text('');
        $( "#fieldD" ).text('');
        $( "#fieldE" ).text('');
        $( "#fieldF" ).text('');
        $( "#fieldG" ).text('');
        $( "#fieldH" ).text('');
        $( "#fieldI" ).text('');

        qA = 0;
        qB = 0;
        qC = 0;
        qD = 0;
        qE = 0;
        qE = 0;
        qF = 0;
        qG = 0;
        qH = 0;
        qI = 0;

        $("#XWins").slideUp();
        $("#OWins").slideUp();
        $(".playAgain").fadeOut(1000);
    
        turnCounter = 1;
        scoreX = 0;
        scoreO = 0;
        lastWin = 0;

        $("#bonesScore").text(`${scoreX}`)
        $("#skullScore").text(`${scoreX}`)
    
        turn();

    });

});

