// back end
var turnTotal1 = 0;
var turnTotal2 = 0;

var random;
var dieCount;
var newPlayer1;
var newPlayer2;

function Player (name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

function getRandomNumber(lower,upper) {
  return Math.floor(Math.random()*(upper-lower + 1)) + lower;
  return dieCount;
}

// front end
$(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault();

    var inputtedFirstPlayer = $("input#p1").val();
    var inputtedSecondPlayer = $("input#p2").val();
    newPlayer1 = new Player(inputtedFirstPlayer, 0, true);
    newPlayer2 = new Player(inputtedSecondPlayer, 0, false);

    $("#intake").hide();
    $(".playField").show();
    $(".playField2").show();

      $("#player1name").text(newPlayer1.name);
      $("#player2name").text(newPlayer2.name);
      $("#player1score").text(newPlayer1.score);
      $("#player2score").text(newPlayer2.score);
});
});

$(function() {


      $("button#roll1").click(function(event) {
        event.preventDefault();
        random = getRandomNumber(1,6);
        if (random === 1) {
          turnTotal1 = 0;
          newPlayer1.turn = false;
          newPlayer2.turn = true;
          alert(turnTotal1);
        } else if (random > 1) {
          turnTotal1 += random;
          alert(turnTotal1);
        }
      $("button#hold1").click(function(event) {
        event.preventDefault();
        newPlayer1.turn = false;
        newPlayer2.turn = true;
        newPlayer1.score += turnTotal1;
        turnTotal1 = 0;
        $("#player1score").text(newPlayer1.score);
        $(".playerField").hide();
      });
    });
  });


  $(function() {

        $("button#roll2").click(function(event) {
          event.preventDefault();
          random = getRandomNumber(1,6);
          if (random === 1) {
            turnTotal2 = 0;
            newPlayer1.turn = true;
            newPlayer2.turn = false;
            alert(turnTotal2);
          } else if (random > 1) {
            turnTotal2 += random;
            alert(turnTotal2);
          }
          $("button#hold2").click(function(event) {
            event.preventDefault();
            newPlayer1.turn = true;
            newPlayer2.turn = false;
            newPlayer2.score += turnTotal2;
            turnTotal2 = 0;
            $("#player2score").text(newPlayer2.score);
      });
    });
});

// });
// });
// });
// $(function() {







// hide the #intake div


// NOTES:
//
// 1a. if number is not 1, add to a counter variable of some sort
// if "1" then drop score to 0 for round, switch players
//
// if hold
// add total of variable to player 1 or 2, switch player
//
// if either player total hits 100, declare game winner and offer a 'start over' buttons




// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
//
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.
//
// // For example, the first player, Ann, begins a turn with a roll of 5. Ann could hold and score 5 points, but chooses to roll again. Ann rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Ann rolls a 1, and must end her turn without scoring. The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score.
