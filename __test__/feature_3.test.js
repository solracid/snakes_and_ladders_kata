var Player = require('../src/player');
var Game = require('../src/player');

describe('Snakes and Ladders - Feature 3', function(){

  beforeAll(function(){
    let game = new Game();
    game.setNumberOfPlayers(2);
    
    let mockedDie1 = jest.spyOn(game.players[0], 'rollDie')
    let mockedDie2 = jest.spyOn(game.players[0], 'rollDie')
  });

  test('Players must roll a dice to determine its play order', function(){
    expect(game.players.size).Equals(2);
    expect(typeof game.players[0].playOrder).toBe("number");
    expect(typeof game.players[1].playOrder).toBe("number");
    expect(game.players[0].playOrder).not.toBe(game.players[1].playOrder);
  });

  test('Player 1 rolls first', function(){
    mockedDie1.mockImplementation(function(){
        return 6
    });
    mockedDie2.mockImplementation(function(){
        return 1
    });
    
    

      

    mockedDie1.mockRestore()
    mockedDie2.mockRestore()
  });

});
