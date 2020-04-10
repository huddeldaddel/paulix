import React from 'react';
import Reflux from 'reflux';
import GameStore from '../stores/GameStore';
import LevelActions from '../actions/LevelActions';
import ShopActions from '../actions/ShopActions';
import ShopStore from '../stores/ShopStore';
import reactMixin from 'react-mixin';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      money: 0,
      canBuyArmor: false,
      canBuyExtraLife: false,
      canBuyExtraLifeX3: false,
      canBuyLevelSwitch: false
    };
  }

  componentDidMount() {
    this.props.sound.play('shop');
    ShopActions.getStatus();
  }

  componentWillUnmount() {
    this.props.sound.stop('shop');
  }

  render() {
    return (
      <div className="shop">
        <div className="head">
          <div className="left">
            <div className="txt-pos">
              <span className="c1">S</span>
              <span className="c2">h</span>
              <span className="c3">o</span>
              <span className="c4">p</span>
            </div>
          </div>
          <div className="center">
            Du hast noch {this.state.money} <img src="tiles/objects/jewel_1.png" alt="jewel" width="25" height="25" />
          </div>
          <div className="right" onClick={this.handleDone}>
            <span className="c1">W</span>
            <span className="c2">e</span>
            <span className="c3">i</span>
            <span className="c4">t</span>
            <span className="c5">e</span>
            <span className="c6">r</span>
            <span className="c7">></span>
          </div>
        </div>
          <div className="shop-center">
            <div className="shelf">
              <div className="item-l">
                <button disabled={!this.state.canBuyExtraLife} className="product"
                        onClick={this.handleItemExtraLifeClicked}>
                  <img src={"tiles/player/" +GameStore.character +"/Idle_1.png"} alt="extra life" />
                  <p>Extra-Leben</p>
                  <p>
                    Kosten: {ShopStore.getPrices().extraLife}
                    <img src="tiles/objects/jewel_1.png" width="25" height="25" alt="jewel" />
                  </p>
                </button>
              </div>
              <div className="item-r">
                <button disabled={!this.state.canBuyExtraLifeX3} className="product"
                        onClick={this.handleItemExtraLifeX3Clicked}>
                  <img src={"tiles/player/" +GameStore.character +"/Idle_1.png"} alt="3 extra lifes" />
                  <p>3x Extra-Leben</p>
                  <p>
                    Kosten: {ShopStore.getPrices().extraLifeX3}
                    <img src="tiles/objects/jewel_1.png" alt="jewel" width="25" height="25" />
                  </p>
                </button>
              </div>
            </div>
            <div className="shelf">
              <div className="item-l">
                <button disabled={!this.state.canBuyArmor} className="product"
                        onClick={this.handleItemArmorClicked}>
                  <img src="tiles/player/robot/Idle_1.png" alt="armor" />
                  <p>Robo-Rüstung</p>
                  <p>
                    Kosten: {ShopStore.getPrices().armor}
                    <img src="tiles/objects/jewel_1.png" alt="jewel" width="25" height="25" />
                  </p>
                </button>
              </div>
              <div className="item-r">
                <button disabled={!this.state.canBuyLevelSwitch} className="product"
                        onClick={this.handleItemLevelSwitchClicked}>
                  <img src="tiles/objects/LevelSwitch.png" alt="teleporter" />
                  <p>Level-Portal</p>
                  <p>
                    Kosten: {ShopStore.getPrices().levelSwitch}
                    <img src="tiles/objects/jewel_1.png" alt="jewel" width="25" height="25" />
                  </p>
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  }

  handleDone = () => {
    LevelActions.loadLevel();
  }

  handleItemExtraLifeClicked = () => {
    ShopActions.buyExtraLife();
    ShopActions.getStatus();
  }

  handleItemExtraLifeX3Clicked = () => {
    ShopActions.buyExtraLifeX3();
    ShopActions.getStatus();
  }

  handleItemArmorClicked = () => {
    ShopActions.buyArmor();
    ShopActions.getStatus();
  }

  handleItemLevelSwitchClicked = () => {
    ShopActions.buyLevelSwitch();
    ShopActions.getStatus();
  }

  onStoreChange = (event, data) => {
    this.setState(data);
  }

}

reactMixin(Shop.prototype, Reflux.listenTo(ShopStore, "onStoreChange"));
export default Shop;