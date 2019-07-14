var React = require('react');

var GameOverScreen = React.createClass({
    
    componentDidMount: function() {
        this.props.sound.play('game_over');
    },
    
    componentWillUnmount: function() {
        this.props.sound.stop('game_over');
    },
    
    render: function() {
        return (
            <div>
                <p>Game Over</p>
            </div>
        );
    }
    
});

module.exports = GameOverScreen;