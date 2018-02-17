const chai = require('chai');
const assert = chai.assert;
const Game = require('../../src/models/game.js');

describe('Game',()=>{
  let game;
  beforeEach(()=>{
    game = new Game(3);
  });


  describe('#addPlayer',()=>{
    it('should create new player with diff. characters',()=>{
      game.addPlayer("suyog",1);
      game.addPlayer("omkar",2);
      let actualOutput = game.players[1];
      let expectedOutput = {
        _name:'suyog',
        _character:{
          "_name":"Miss Scarlett",
          "_tokenColor":"#bf0000",
          "_position":1,
          "_turn":1
        }
      };
      assert.deepEqual(actualOutput,expectedOutput);
    });
  });


  describe('#getPlayer',()=>{
    it('should return player by his/her id',()=>{
      game.addPlayer("suyog",1);
      game.addPlayer("omkar",2);
      let player = game.getPlayer(1);
      assert.equal(player.name,'suyog');
    });
  });


  describe('#getPlayerCount',()=>{
    it('should return count of players joined',()=>{
      game.addPlayer("suyog",1);
      game.addPlayer("omkar",2);
      let playerCount = game.getPlayerCount();
      assert.equal(playerCount,2);
    });
  });


  describe('#haveAllPlayersJoined', function(){
    it('should return true when game is ready to start', function(){
      game.addPlayer("Pranav",1);
      game.addPlayer("Patel",2);
      game.addPlayer("JD",3);
      assert.isOk(game.haveAllPlayersJoined());
    });

    it('should return false when isnt ready to start', function(){
      game.addPlayer("Pranav",1);
      game.addPlayer("Patel",2);
      assert.isNotOk(game.haveAllPlayersJoined());
    });
  });

});
