var GameActions = require('../actions/GameActions'),
    GameStore = require('./GameStore'),
    LevelActions = require('../actions/LevelActions'),
    LevelStore = require('./LevelStore'),
    Reflux = require('reflux'),
    ShopActions = require('../actions/ShopActions');

var prices = {
    armor: 50,
    extraLife: 25,
    extraLifeX3: 70,
    levelSwitch: 150
};

var ShopStore = Reflux.createStore({
    listenables: ShopActions,

    buyArmor: function() {
        GameActions.addCoins(prices.armor * -1);
        GameActions.setArmor(true);
    },

    buyExtraLife: function() {
        GameActions.addCoins(prices.extraLife * -1);
        GameActions.updateLives(GameStore.lives +1);
    },

    buyExtraLifeX3: function() {
        GameActions.addCoins(prices.extraLifeX3 * -1);
        GameActions.updateLives(GameStore.lives +3);
    },

    buyLevelSwitch: function() {
        GameActions.addCoins(prices.levelSwitch * -1);
        LevelActios.enableLevelSelection();
    },

    getPrices: function() {
        return prices;
    },

    getStatus: function() {
        this.trigger('statusChanged', {
            money: GameStore.coins,
            canBuyArmor: (GameStore.coins >= prices.armor) && !GameStore.hasArmor,
            canBuyExtraLife: GameStore.coins >= prices.extraLife,
            canBuyExtraLifeX3: GameStore.coins >= prices.extraLifeX3,
            canBuyLevelSwitch: (GameStore.coins >= prices.levelSwitch) && !LevelStore.levelSelectionEnabled
        });
    }

});

module.exports = ShopStore;