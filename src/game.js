const Player = require('./player');

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
    this.ladders = new Map([2,12]);
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
        
        while (numMaxs > 1) {
            // Resolve Draw
            let drawPlayers = [];
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
        
        //Set the starting play order
        this.players[dieRoll.findIndex(maxRoll)].playOrder = 1;
        this.firstPlayer = dieRoll.findIndex(maxRoll);
        
    };
};



module.exports = game;
