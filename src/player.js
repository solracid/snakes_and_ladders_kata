function Player() {
    this.position = 1;
    this.win = false;
    this.move = function(squares){
        if (this.position + squares <= 100){
            return this.position += squares;
        } else if (this.position + squares > 100){
            return this.position
        } else if (this.position + squares == 100){
            this.position = 100
            return this.win = true;;
        }
    };
    this.rollDie = function(){
        return Math.floor(Math.random() * 6) + 1
    };
};

module.exports = Player;