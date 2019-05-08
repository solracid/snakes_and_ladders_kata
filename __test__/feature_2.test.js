const Player = require('../src/player');
const Game   = require('../src/game');

describe('Snakes and Ladders - Feature 2', function() {

    let player
    let game

    beforeAll(function(){
        player = new Player();
        game = new Game();
    })
    
    describe('Snakes Go Down, Not Up', function(){
        
        test('Snakes go Down', function(){
            player.position = 8
            player.move(4)
            expect(player.position).toEqual(2);
        })
        test('Snakes go Down, not Up', function(){
            player.position = 2
            expect(typeof game.snakes.get(2)).toBeUndefined();
            expect(player.position).toEqual(2);
        })
        test('Ladders go Up', function(){
            player.position = 1
            player.move(1)
            expect(player.position).toEqual(12);
        })
        test('Ladders go Up, not Down', function(){
            player.position = 12
            expect(typeof game.ladders.get(12)).toBeUndefined();
            expect(player.position).toEqual(12);
        })
    })
});
