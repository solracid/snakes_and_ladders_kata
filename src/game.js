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
    this.setNumberOfPlayers = function(num){
        this.numberOfPlayers = num;
        let i;
        for(i = 0; i < num; ++i) {
            this.players[i] = new Player();
        }
    };
    this.setPlayOrder = function(){
        let i;
        let dieRoll = [];
        let maxRoll, numMaxs;
        
        if (this.players.length == 0){
            alert('Set the Number of Players before starting the Game!');
        };
        
        //Each players rolls a die
        for (i = 0; i < players.length; i++) {
            if (this.players[i].playOrder !== 0) {
                dieRoll[i] = this.players[i].rollDie();
            };
        };
        
        //Get the biggest roll and draws if any
        maxRoll = getMaxRolledDie();
        numMaxs = getDrawRolledDie(dieRoll, maxRoll);
       
        // Resolve Draw
        while (numMaxs > 1) {
            //get the top players
            for (i = 0; i < dieRoll.length; i++) {
                if (dieRoll[i] == maxRoll) {
                    dieRoll[i] = this.players[i].rollDie();
                } else {
                    dieRoll[i] = 0;
                };
            };
            maxRoll = getMaxRolledDie();
            numMaxs = getDrawRolledDie(dieRoll, maxRoll);
        };
        
        //Set the first player
        this.firstPlayer = dieRoll.findIndex(maxRoll);
        this.players[firstPlayerIndex].playOrder = 1;
        
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
            auxPlayersOrder[i+1].playOrder = nextPlayerIndex + 1;
        };

        //Players are arranged in Order
        this.players = auxPlayersOrder;
    };
};

module.exports = game;
