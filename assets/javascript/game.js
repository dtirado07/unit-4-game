var wins = 0;
var losses = 0;
var random = 0;
var guess = 0;
var obsidian;
var ruby;
var jade;
var diamond;


$(document).ready(function () {
    restart();

    function restart() {
        $("#guess").text("");
        guess = 0;
        $("#obsidian-cont").unbind();
        $("#ruby-cont").unbind();
        $("#jade-cont").unbind();
        $("#diamond-cont").unbind();
        compRandom();
        writeScore();
        game();
    }


    function compRandom() {
        random = Math.floor(Math.random() * 103 + 18);
        console.log(random);
        $("#random").text(random);
    }

    function writeScore() {
        $("#score").html("Wins: " + wins + "<br><br> Loses: " + losses);
    }


    function game() {
        obsidian = Math.floor(Math.random() * 12 + 1);
        ruby = Math.floor(Math.random() * 12 + 1);
        jade = Math.floor(Math.random() * 12 + 1);
        diamond = Math.floor(Math.random() * 12 + 1);

        console.log("obsidian: " + obsidian);
        console.log("ruby: " + ruby);
        console.log("jade: " + jade);
        console.log("diamond: " + diamond);


        $("#obsidian-cont").click(function () {
            if (guess < random) {
                guess += obsidian;
                $("#guess").text(guess);
                console.log("guess " + guess);
                console.log("random: " + random);
            }
            if (guess > random) {
                $("#guess").text(guess);
                alert("You Lost");
                losses++;
                writeScore();
                restart();     
            }
            if (guess === random) {
                $("#guess").text(guess);
                alert("You Win");
                wins++;
                writeScore();
                restart();
            }
        });

        $("#ruby-cont").click(function () {
            if (guess < random) {
                guess += ruby;
                $("#guess").text(guess);
                console.log("guess " + guess);
                console.log("random: " + random);
            }
            if (guess > random) {
                $("#guess").text(guess);
                alert("You Lost");
                losses++;
                writeScore();
                restart();     
            }
            if (guess === random) {
                $("#guess").text(guess);
                alert("You Win");
                wins++;
                writeScore();
                restart();
            }
        });

        $("#jade-cont").click(function () {
            if (guess < random) {
                guess += jade;
                $("#guess").text(guess);
                console.log("guess " + guess);
                console.log("random: " + random);
            }
            if (guess > random) {
                $("#guess").text(guess);
                alert("You Lost");
                losses++;
                writeScore();
                restart();     
            }
            if (guess === random) {
                $("#guess").text(guess);
                alert("You Win");
                wins++;
                writeScore();
                restart();
            }
        });

        $("#diamond-cont").click(function () {
            if (guess < random) {
                guess += diamond;
                $("#guess").text(guess);
                console.log("guess " + guess);
                console.log("random: " + random);
            }
            if (guess > random) {
                $("#guess").text(guess);
                alert("You Lost");
                losses++;
                writeScore();
                restart();     
            }
            if (guess === random) {
                $("#guess").text(guess);
                alert("You Win");
                wins++;
                writeScore();
                restart();
            }
        });

    }
});

