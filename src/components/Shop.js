var GameStore = require('../stores/GameStore'),
    LevelActions = require('../actions/LevelActions'),
    React = require('react'),
    Reflux = require('reflux'),
    ShopActions = require('../actions/ShopActions'),
    ShopStore = require('../stores/ShopStore');

var Shop = React.createClass({
    mixins: [Reflux.listenTo(ShopStore, "onStoreChange")],

    componentDidMount: function() {
        this.props.sound.play('shop');
        ShopActions.getStatus();
    },

    componentWillUnmount: function() {
        this.props.sound.stop('shop');
    },

    getInitialState: function() {
        return {
            money: 0,
            canBuyArmor: false,
            canBuyExtraLife: false,
            canBuyExtraLifeX3: false,
            canBuyLevelSwitch: false
        };
    },

    render: function() {
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
                        Du hast noch {this.state.money} <img src="tiles/objects/jewel_1.png" width="25" height="25" />
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
                                <img src={"tiles/player/" +GameStore.character +"/Idle_1.png"} />
                                <p>Extra-Leben</p>
                                <p>
                                    Kosten: {ShopStore.getPrices().extraLife}
                                    <img src="tiles/objects/jewel_1.png" width="25" height="25" />
                                </p>
                            </button>
                        </div>
                        <div className="item-r">
                            <button disabled={!this.state.canBuyExtraLifeX3} className="product"
                                    onClick={this.handleItemExtraLifeX3Clicked}>
                                <img src={"tiles/player/" +GameStore.character +"/Idle_1.png"} />
                                <p>3x Extra-Leben</p>
                                <p>
                                    Kosten: {ShopStore.getPrices().extraLifeX3}
                                    <img src="tiles/objects/jewel_1.png" width="25" height="25" />
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className="shelf">
                        <div className="item-l">
                            <button disabled={!this.state.canBuyArmor} className="product"
                                    onClick={this.handleItemArmorClicked}>
                                <img src="tiles/player/robot/Idle_1.png" />
                                <p>Robo-Rüstung</p>
                                <p>
                                    Kosten: {ShopStore.getPrices().armor}
                                    <img src="tiles/objects/jewel_1.png" width="25" height="25" />
                                </p>
                            </button>
                        </div>
                        <div className="item-r">
                            <button disabled={!this.state.canBuyLevelSwitch} className="product"
                                    onClick={this.handleItemLevelSwitchClicked}>
                                <img src="tiles/objects/LevelSwitch.png" />
                                <p>Level-Portal</p>
                                <p>
                                    Kosten: {ShopStore.getPrices().levelSwitch}
                                    <img src="tiles/objects/jewel_1.png" width="25" height="25" />
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    handleDone: function() {
        LevelActions.loadLevel();
    },

    handleItemExtraLifeClicked: function() {
        ShopActions.buyExtraLife();
        ShopActions.getStatus();
    },

    handleItemExtraLifeX3Clicked: function() {
        ShopActions.buyExtraLifeX3();
        ShopActions.getStatus();
    },

    handleItemArmorClicked: function() {
        ShopActions.buyArmor();
        ShopActions.getStatus();
    },

    handleItemLevelSwitchClicked: function() {
        ShopActions.buyLevelSwitch();
        ShopActions.getStatus();
    },

    onStoreChange: function(event, data) {
        this.setState(data);
    }

});

module.exports = Shop;