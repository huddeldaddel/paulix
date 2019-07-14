var Reflux = require('reflux');

var LevelActions = Reflux.createActions([
    "creditsShown",
    "enableLevelSelection",
    "levelWon",
    "loadLevel",    
    "loadGameOver"    
]);

module.exports = LevelActions;