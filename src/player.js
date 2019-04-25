const game = require('./game');

var Game = new game;

function player() {
    this.position = 1;
    this.win = false;
    this.move = function(roll){
        let moveTo = roll + this.position;
        if (Game.snakesAndLadders.start.indexOf(moveTo) > -1) {
            this.position = Game.snakesAndLadders.end[Game.snakesAndLadders.start.indexOf(moveTo)];
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