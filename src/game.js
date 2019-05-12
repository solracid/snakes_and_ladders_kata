var Player = require('./player');

function getMaxRolledDie () {
    return Math.max.apply(Math, dieRoll);
};

function getDrawRolledDie (arrRoll, max) {
    let numMaxDrawRolls;
    arrRoll = arrRoll.reduce(function(n, val){
                                return n + (val === max);            
                            }, 0);
};

function game(){
    this.players = [];
    this.numberOfPlayers;
    this.firstPlayer;
    this.snakes = new Map([[12,2]]);
    this.ladders = new Map([[2,12]]);
    this.setNumberOfPlayers = function(num){
        this.numberOfPlayers = num;
        let i;
        for(i = 0; i < num; ++i) {
            this.players[i] = new Player();
        }
    };
    this.setPlayOrder = function(){
        let i;
        let pos = 1;
        let dieRoll = [];
        let maxRoll, numMaxs;
        
        if (this.players.length == 0){
            alert('Set the Number of Players before starting the Game!');
        };
        
        //Each players rolls a die
        for (i = 0; i < players.length; i++) {
            if (this.players[i].playOrder !== 0){
                dieRoll[i] = this.players[i].rollDie();
            };
        };
        
        //Get the biggest roll and draws if any
        maxRoll = getMaxRolledDie();
        numMaxs = getDrawRolledDie(dieRoll, maxRoll);

        let drawPlayers = [];
        
        // Resolve Draw
        while (numMaxs > 1) {
            //get the top players
            for (i = 0; i < dieRoll.length; i++) {
                if (dieRoll[i] == maxRoll) {
                    drawPlayers.push(i);
                } else {
                    dieRoll[i] = 0;
                };
            };
            for (i = 0; i < drawPlayers.length; i++) {
                this.players[drawPlayers(i)].rollDie
            };
        };
        
        //Set the first player
        this.players[dieRoll.findIndex(maxRoll)].playOrder = 1;
        this.firstPlayer = dieRoll.findIndex(maxRoll);
        
        let auxPlayersOrder = [];
        let nextPlayerIndex;
        auxPlayersOrder[0] = this.players[dieRoll.findIndex(maxRoll)]

        //Set others players order
        for (i = 0; i < numberOfPlayers; i++) {
            
            nextPlayerIndex = players.findIndex(auxPlayersOrder[i]) + 1

            if (nextPlayerIndex > numberOfPlayers) {
                nextPlayerIndex = i - numberOfPlayers;
            }; 

            auxPlayersOrder[i+1] = this.players(nextPlayerIndex);
        };

        //Players are arranged in Order
        this.players = auxPlayersOrder;
    };
};

module.exports = game;
