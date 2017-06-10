console.log("app.js READY");

var myGame = new SimonGame();

$(document).ready(function () {

  myGame.startGame();

});

$(document).ready(function () {

  $("button").click(function () {
    var colorJustClicked = $(this).prop("id");
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];

    if (currentSequenceColor === colorJustClicked) {
      myGame.userClickCount += 1;

      if(myGame.userClickCount >= myGame.sequence.length) {
        $("body").addClass("sequence-entered");

        setTimeout(function () {
          $("body").removeClass("sequence-entered");

          myGame.nextRound();
        }, 1000);

      }
    }
    else {
      $("body").addClass("game-ended");
      
      setTimeout(function () {
        $("body").removeClass("game-ended");

        myGame.gameOver();
      }, 10000);

    }
  });

});
