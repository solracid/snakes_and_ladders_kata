const board = require('./board');

function player() {
    this.name = "";
    this.position = 0;
    this.playOrder = 0;
    this.win = false;
    this.move = function(roll){
        let moveTo = roll + this.position;
        let snakeBite = board.snakes.get(moveTo)
        let ladderLift = board.ladders.get(moveTo)
        //Snakes are awaiting
        if (typeof snakeBite !== 'undefined') {
            this.position = snakeBite;
        //Ladders are of Help
        } else if (typeof ladderLift !== 'undefined') {
            this.position = ladderLift;
        } else if (moveTo <= 100) {
            return this.position += roll;
        } else if (moveTo == 100) {
            this.position = 100
            return this.win = true;
        }
    };
    this.rollDie = board.die();
};

module.exports = player;
