import React from 'react';
import GameActions from '../actions/GameActions';
import GameStore from '../stores/GameStore';
import LevelActions from '../actions/LevelActions';
import LevelSelection from './LevelSelection';

class StartScreen extends React.Component {

  componentDidMount() {
    this.props.sound.play('menu');
  }

  componentWillUnmount() {
    this.props.sound.stop('menu');
  }

  render() {
    return (
      <div id="game-menu">
        <div className="menu-title">
          <span className="c1">P</span>
          <span className="c2">a</span>
          <span className="c3">u</span>
          <span className="c4">l</span>
          <span className="c5">i</span>
          <span className="c6">x</span>
        </div>
        
        <div className="player-selection">
          <div className="player-option-l">
            <button className="menu-item" onClick={this.handleMenuStartM}>
              <img src="tiles/player/male/Idle_1.png" alt="male avatar"/>
              <p>Spiele als Felix</p>
            </button>
          </div>
          <div className="player-option-r">
            <button className="menu-item" onClick={this.handleMenuStartF}>
              <img src="tiles/player/female/Idle_1.png" alt="female avatar" />
              <p>Spiele als Paula</p>
            </button>
          </div>
        </div>

        <LevelSelection />

        <p>Highscore: {GameStore.highscore}</p>
      </div>
    );
  }

  handleMenuStartF = () => {
    GameActions.setCharacter('female');
    GameActions.startGame();
    LevelActions.loadLevel(0);
  }

  handleMenuStartM = () => {
    GameActions.setCharacter('male');
    GameActions.startGame();
    LevelActions.loadLevel(0);
  }

}

export default StartScreen;