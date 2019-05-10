const game = require('./game');

var Game = new game;

function player() {
    this.position = 1;
    this.playOrder = 0;
    this.win = false;
    this.move = function(roll){
        let moveTo = roll + this.position;
        let snakeBite = Game.snakes.get(moveTo)
        let ladderLift = Game.ladders.get(moveTo)
        //Snakes are awaiting
        if (typeof snakeBite !== 'undefined') {
            this.position = snakeBite;
        //Ladders are of Help
        } else if (typeof ladderLift !== 'undefined') {
            this.position = ladderLift;
        } else if (moveTo <= 100) {
            return this.position += roll;
        } else if (moveTo == 100){
            this.position = 100
            return this.win = true;
        }
    };
    this.rollDie = function(){
        return Math.floor(Math.random() * 6) + 1
    };
};

module.exports = player;
