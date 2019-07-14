var GameStore = require('../stores/GameStore'),
    Levels = require('../game/Levels'),
    LevelStore = require('../stores/LevelStore'),
    React = require('react');

var LoadingScreen = React.createClass({
    
    componentDidMount: function() {
        this.props.sound.play('intro');
    },
     
    componentWillUnmount: function() {
        this.props.sound.stop('intro');
    },
    
    render: function() {      
        var description = Levels[LevelStore.level].description.replace(/\<name\>/gi, GameStore.texts.name);
        return (
            <div className="loading-screen"> 
                <h2>Level: {LevelStore.level +1}</h2>
                <div className="level-description">
                    <p>{description}</p>
                </div>
            </div>
        );
    }
    
});

module.exports = LoadingScreen;