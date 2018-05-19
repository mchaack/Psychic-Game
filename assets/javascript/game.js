
window.onload = function () {
    var pcChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var yourGuesses = [];


    var randomKey = pcChoice[Math.floor(Math.random() * pcChoice.length)];
    console.log("PC Choice:", randomKey);

    document.onkeyup = function (event) {

        var userChoice = event.key;
        console.log("User Choice:", userChoice);


        if (randomKey === userChoice) {
            wins++;
            guesses = 10;
            // userChoice.push(yourGuesses) = [];
            alert("You Win");
            console.log("You win");
            // location.reload(pcChoice);
        }


        else if (userChoice != randomKey) {
            guesses--;
            // yourGuesses.push(userChoice);
            if (guesses === 0) {
                guesses = 10;
                losses++;
                alert("you lose");
                // yourGuesses.push(userChoice) = [];
            }


            document.getElementById("Wins").textContent = " " + wins;
            document.getElementById("Losses").textContent = " " + losses;
            document.getElementById('guesses').textContent = " " + guesses;
        }

        for (i = 0; i > 1; i++) {
            // console.log(this);


            


        }
    }
}

// record keypress in appropriate span
// reset pcChoice if userChoice is correct
//keep record of letters guessed

