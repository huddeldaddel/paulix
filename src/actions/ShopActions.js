var Reflux = require('reflux');

var ShopActions = Reflux.createActions([
    "buyArmor",
    "buyExtraLife",
    "buyExtraLifeX3",
    "buyLevelSwitch",
    "getStatus"
]);

ShopActions.buyArmor.sync = true;
ShopActions.buyExtraLife.sync = true;
ShopActions.buyExtraLifeX3.sync = true;
ShopActions.buyLevelSwitch.sync = true;

module.exports = ShopActions;