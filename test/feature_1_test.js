const Player = require('../src/player');

describe('Snakes and Ladders - Feature 1', function() {

    let player

    beforeEach(function(){
        player = new Player()
    })
        describe('Token Can Move Across the Board', function(){
        test('At Game start Token is on square 1', function(){
            expect(player.position).toEqual(1);
        })
        test('Token advances 3 squares', function(){
            player.move(3)
            expect(player.position).toEqual(4);
        })
        test('Token moves 3, then 4, lands at square 8', function(){
            player.move(3)
            player.move(4)
            expect(player.position).toEqual(8);
        })
    })
    describe('Moves Are Determined By Dice Rolls', function(){

        let mockedDie

        beforeEach(function(){
            mockedDie = jest.spyOn(player, 'rollDie')
        })
        afterEach(function(){
            mockedDie.mockRestore()
        })
        
        test('Die rolls a number between 1 and 6', function(){
            expect(player.rollDie()).toBeGreaterThan(0);
            expect(player.rollDie()).toBeLessThan(7);
            expect(player.rollDie().isInteger).toBeTruthy;
        })  
        test('Player rolls a 4, and moves 4 spaces', function(){
            mockedDie.mockImplementation(function(){
                return 4
            });
            expect(mockedDie).toHaveBeenCalled
            player.move(player.rollDie())
            expect(player.position).toEqual(5);
        })
    })
    describe('Player Can Win the Game', function(){
        test('Player wins landing on square 100', function(){
            player.position = 97;
            player.move(3)
            expect(player.position).toEqual(100);
            expect(player.win).toBeTruthy;
        })
        test('Player doesn´t win if overpassing 100', function(){
            player.position = 97;
            player.move(4)
            expect(player.win).toBeFalsy;
        })
    })
});
