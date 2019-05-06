const Player = require('../src/player');

describe('Snakes and Ladders - Feature 2', function() {

    let player

    beforeEach(function(){
        player = new Player()
    })
    
    describe('Snakes Go Down, Not Up', function(){
        
        test('Snakes go Down', function(){
            player.position = 8
            player.move(4)
            expect(player.position).toEqual(2);
        })
        test('Snakes go Down, not Up', function(){
            player.position = 1
            player.move(1)
            expect(player.position).toEqual(2);
        })
        test('Ladders go Up', function(){
            player.position = 1
            player.move(1)
            expect(player.position).toEqual(12);
        })
        test('Ladders go Up, not Down', function(){
            player.position = 8
            player.move(4)
            expect(player.position).toEqual(12);
        })
    })
});
