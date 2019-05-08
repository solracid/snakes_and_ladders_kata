function game(){
    this.players = 1;
    this.snakes = new Map([[12,2]]);
    this.ladders = new Map([2,12]);
};

module.exports = game;
