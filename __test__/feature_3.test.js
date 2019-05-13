var Player = require('../src/player');
var Game = require('../src/game');

describe('Snakes and Ladders - Feature 3', function(){

  beforeEach(function(){
    let game = new Game();
    game.setNumberOfPlayers(2);
    
    let mockedDie1 = jest.spyOn(game.players[0], 'rollDie')
    let mockedDie2 = jest.spyOn(game.players[1], 'rollDie')
  });

  test('Players must roll a dice to determine its play order', function(){
    expect(game.numberOfPlayers).Equals(2);
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
    expect(game.players[0].playOrder ).toEqual(1);
    expect(game.players[1].playOrder ).toEqual(2);

    mockedDie1.mockRestore()
    mockedDie2.mockRestore()
  });
  
  test('Player 2 rolls first', function(){
    mockedDie1.mockImplementation(function(){
        return 1
    });
    mockedDie2.mockImplementation(function(){
        return 6
    });
    expect(game.players[0].playOrder ).toEqual(2);
    expect(game.players[1].playOrder ).toEqual(1);

    mockedDie1.mockRestore()
    mockedDie2.mockRestore()
  });
  
  test('Player 1 rolls the same as Player 2', function(){
    let mockedRoll = jest.spyOn(board, 'die')
    mockedRoll.mockImplementationOnce(function(){Return 6}).mockImplementationOnce(function(){Return 6});
    
    game.setPlayOrder();
    
    expect(mockedRoll.mock.calls.length).toBeGreaterThan(4);
    expect(game.players[0].playOrder).not.toBe(game.players[1].playOrder);
  });

});
