var Credits = require('./Credits'),
    Game = require('../game/Game'),
    GameOverScreen = require('./GameOverScreen'),
    LevelActions = require('../actions/LevelActions'),
    LevelStore = require('../stores/LevelStore'),
    LoadingScreen = require('./LoadingScreen'),
    React = require('react'),
    Reflux = require('reflux'),
    Sound = require('../game/Sound'),
    StartScreen = require('./StartScreen'),
    Shop = require('./Shop');

var GameContainer = React.createClass({
    mixins: [Reflux.listenTo(LevelStore,"onLevelChange")],

    getInitialState: function() {
        this.sound = new Sound('suse');
        return { stage: "menu" };
    },

    render: function() {
        var content = undefined;
        switch(this.state.stage) {
            case "gameOver":
                content = <GameOverScreen sound={this.sound} />;
                break;
            case "loading":
                content = <LoadingScreen sound={this.sound} />;
                break;
            case "game":
                content = <Game sound={this.sound} />;
                break;
            case "shop":
                content = <Shop sound={this.sound} />;
                break;
            case "credits":
                content = <Credits sound={this.sound} />;
                break;
            default:
                content = <StartScreen sound={this.sound} />;
                break;
        }
        return (
            <div id="game-container">
                {content}
            </div>
        );
    },

    onLevelChange: function(event, data) {
        switch(event) {
            case 'showCredits':
                this.setState({stage: "credits"});
                break;
            case 'showGameOver':
                this.setState({stage: "gameOver"});
                break;
            case 'showLevel':
                this.setState({stage: "game"});
                break;
            case 'showLoading':
                this.setState({stage: "loading"});
                break;
            case 'showMenu':
                this.setState({stage: "menu"});
                break;
            case 'showStore':
                this.setState({stage: "shop"});
                break;
        }
    }
});

module.exports = GameContainer;