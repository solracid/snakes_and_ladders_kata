const Player = require('./player');

function game(){
    this.players = [];
    this.numberOfPlayers;
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
        maxRoll = Math.max.apply(Math, dieRoll);
        numMaxs = dieRoll.reduce(function(n, val){
                       return n + (val === maxRoll);            
                    }, 0);
        
        while (numMaxs > 1) {
            // Resolve Draw
            let drawPlayers = [];
            //get the top players
            for (i = 0; i < dieRoll.length; i++) {
                if (dieRoll[i] == maxRoll) {
                    drawPlayers.push(i);
                };
            };
            for (i = 0; i < drawPlayers.length; i++) {
                this.players[drawPlayers(i)].rollDie
            };
        };
        
        //Set the starting play order
        
    };
    
};

module.exports = game;
