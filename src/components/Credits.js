var GameStore = require('../stores/GameStore'),
    LevelActions = require('../actions/LevelActions'),
    React = require('react'),
    $ = require("jquery");

var Credits = React.createClass({

    componentDidMount: function() {
        this.props.sound.play('credits');
        setTimeout(function() { $('.credits').animate({ scrollTop: 1200}, 60000, "linear"); }, 10000);
    },

    render: function() {
        return (
            <div className="credits">
                <h1>Herzlichen Glückwunsch!</h1>

                <p>
                    Wow! Cool! Herzlichen Glückwunsch, Du hast es geschafft! {GameStore.texts.name} ist am Ziel
                    angekommen. Die Monster sind aus dem Dorf vertrieben und noch viel wichtiger: Shorty ist gerettet.
                </p>
                <p>
                    {GameStore.texts.name} nimmt Shorty auf den Arm und macht sich auf den Heimweg. Zuhause wartet
                    schon {GameStore.texts.name}s ganze Familie. Aufgeregt sammeln sich alle
                    um {GameStore.texts.name} und wollen wissen, was passiert ist. Alle hören gespannt zu,
                    als {GameStore.texts.name} von den fiesen Monstern, den unglaublichen Schätzen und dem tapferen
                    Shorty erzählt.
                </p>

                <p>
                    Nach einigen Wochen denkt {GameStore.texts.name} schon fast nicht mehr an die Ereignisse, als
                    plötzlich der lange verschollene Onkel Tom auftaucht. Tom sieht mitgenommen und sehr besorgt aus. In
                    seinen Händen hält er die verkohlten Reste einer geheimnisvollen Maschine...
                </p>

                <p>Vielen Dank für's Spielen!</p>

                <p>
                    <button onClick={this.returnToMenu}>Zurück zum Startbildschirm</button>
                </p>
            </div>
        );
    },

    returnToMenu: function() {
        this.props.sound.stop('credits');
        LevelActions.creditsShown();
    }
});

module.exports = Credits;