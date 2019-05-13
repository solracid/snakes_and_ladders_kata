var board = {
    snakes : new Map([[12,2]]),
    ladders : new Map([[2,12]]),
    die: function(){
        return Math.floor(Math.random() * 6) + 1
    }
};

module.exports = board;
