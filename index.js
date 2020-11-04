const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

let game = {buttonClicked: '', score: 0, compChoice: '', win: '', gameType: 5};
const options_array=['scissors', 'paper', 'rock', 'lizard', 'spock'];
const check_result =[[0, 1, 0, 1, 0], [0, 0, 1, 0, 1], [1, 0, 0, 1, 0], [0, 1, 0, 0, 1], [1, 0, 1, 0, 0]]; 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('main', { buttonClicked: game.buttonClicked, score: game.score, compChoice: game.compChoice, result: game.win , gameType: game.gameType});

});

app.post("/", function(req, res) {
    let buttonClicked = Object.keys(req.body)[0];
    // console.log("button: " + buttonClicked);
    if (buttonClicked === '5') {
        game.gameType = 3;
        game.buttonClicked = '';
        game.compChoice = '';
        game.score = 0;
        game.win = '';
    } else if (buttonClicked === '3') {
        game.gameType = 5;
        game.buttonClicked = '';
        game.compChoice = '';
        game.score = 0;
        game.win = '';
    } else if (buttonClicked === 'again') {
        game.buttonClicked = '';
        game.compChoice = '';
        game.win = '';
    } else {
    game.buttonClicked = buttonClicked;
    let playerIndex = options_array.indexOf(buttonClicked);
    // console.log("Index from array: " + options_array.indexOf(buttonClicked));
    let compIndex = Math.floor(Math.random() * game.gameType);
    game.compChoice = options_array[compIndex]; 
    // console.log("computer choicce: " + game.compChoice);
    if (check_result[playerIndex][compIndex] > check_result[compIndex][playerIndex]) {
        game.win = 'player';
        game.score++;
    } else if (check_result[playerIndex][compIndex] < check_result[compIndex][playerIndex]) {
        game.win = 'computer';
        game.score--;
    } else {
        game.win = 'draw';
    };
    // console.log("win: " + game.win);
}
    res.redirect("/");
    });

app.listen(3000, function() {
    console.log('Server started on port 3000');
});