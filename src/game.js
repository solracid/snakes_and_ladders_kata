const Player = require('./player');

function game(){
    this.players;
    this.snakes = new Map([[12,2]]);
    this.ladders = new Map([2,12]);
    this.setNumberOfPlayers = function(num){
        let i
        for(i = 0; i < num; ++i) {
            this.players[i] = new Player();
        }
    };
};

module.exports = game;
