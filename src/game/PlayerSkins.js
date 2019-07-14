var Rect = require('./Rect');

var PlayerSprite = function(fileName, w, h) {
    this.sprite = new Image(w, h);
    this.sprite.src = "tiles/player/" +fileName +".png";
    this.width = w;
    this.height = h;
};

var PlayerSkins = {

    Female: {
        standingLeft: new PlayerSprite('female/Idle_1-L', 114, 196),
        standingRight: new PlayerSprite('female/Idle_1', 114, 196),
        runningLeft: [
            new PlayerSprite('female/Run_1-L', 142, 196),
            new PlayerSprite('female/Run_2-L', 142, 196),
            new PlayerSprite('female/Run_3-L', 142, 196),
            new PlayerSprite('female/Run_4-L', 142, 196),
            new PlayerSprite('female/Run_5-L', 142, 196),
            new PlayerSprite('female/Run_6-L', 142, 196),
            new PlayerSprite('female/Run_7-L', 142, 196),
            new PlayerSprite('female/Run_8-L', 142, 196),
            new PlayerSprite('female/Run_9-L', 142, 196),
            new PlayerSprite('female/Run_10-L', 142, 196)
        ],
        runningRight: [
            new PlayerSprite('female/Run_1', 142, 196),
            new PlayerSprite('female/Run_2', 142, 196),
            new PlayerSprite('female/Run_3', 142, 196),
            new PlayerSprite('female/Run_4', 142, 196),
            new PlayerSprite('female/Run_5', 142, 196),
            new PlayerSprite('female/Run_6', 142, 196),
            new PlayerSprite('female/Run_7', 142, 196),
            new PlayerSprite('female/Run_8', 142, 196),
            new PlayerSprite('female/Run_9', 142, 196),
            new PlayerSprite('female/Run_10', 142, 196)
        ],
        jumpingLeft: new PlayerSprite('female/Jump_3-L', 128, 196),
        jumpingRight: new PlayerSprite('female/Jump_3', 128, 196),

        getCollisionRect: function(sprite, x, y, targetW, targetH) {
            var w = sprite ? sprite.width : 1;
            return new Rect(x, y, targetW / 196 * w, targetH);
        }
    },

    Male: {
        standingLeft: new PlayerSprite('male/Idle_1-L', 104, 196),
        standingRight: new PlayerSprite('male/Idle_1', 104, 196),
        runningLeft: [
            new PlayerSprite('male/Run_1-L', 155, 196),
            new PlayerSprite('male/Run_2-L', 155, 196),
            new PlayerSprite('male/Run_3-L', 155, 196),
            new PlayerSprite('male/Run_4-L', 155, 196),
            new PlayerSprite('male/Run_5-L', 155, 196),
            new PlayerSprite('male/Run_6-L', 155, 196),
            new PlayerSprite('male/Run_7-L', 155, 196),
            new PlayerSprite('male/Run_8-L', 155, 196),
            new PlayerSprite('male/Run_9-L', 155, 196),
            new PlayerSprite('male/Run_10-L', 155, 196)
        ],
        runningRight: [
            new PlayerSprite('male/Run_1', 155, 196),
            new PlayerSprite('male/Run_2', 155, 196),
            new PlayerSprite('male/Run_3', 155, 196),
            new PlayerSprite('male/Run_4', 155, 196),
            new PlayerSprite('male/Run_5', 155, 196),
            new PlayerSprite('male/Run_6', 155, 196),
            new PlayerSprite('male/Run_7', 155, 196),
            new PlayerSprite('male/Run_8', 155, 196),
            new PlayerSprite('male/Run_9', 155, 196),
            new PlayerSprite('male/Run_10', 155, 196)
        ],
        jumpingLeft: new PlayerSprite('male/Jump_3-L', 147, 196),
        jumpingRight: new PlayerSprite('male/Jump_3', 147, 196),

        getCollisionRect: function(sprite, x, y, targetW, targetH) {
            var w = sprite ? sprite.width : 1;
            return new Rect(x, y, targetW / 196 * w, targetH);
        }
    },

    Robot: {
        standingLeft: new PlayerSprite('robot/Idle_1-L', 200, 196),
        standingRight: new PlayerSprite('robot/Idle_1', 200, 196),
        shootingLeft: [
            new PlayerSprite('robot/IdleShoot_1-L', 200, 196),
            new PlayerSprite('robot/IdleShoot_2-L', 200, 196),
            new PlayerSprite('robot/IdleShoot_3-L', 200, 196),
            new PlayerSprite('robot/IdleShoot_4-L', 200, 196)
        ],
        shootingRight: [
            new PlayerSprite('robot/IdleShoot_1', 200, 196),
            new PlayerSprite('robot/IdleShoot_2', 200, 196),
            new PlayerSprite('robot/IdleShoot_3', 200, 196),
            new PlayerSprite('robot/IdleShoot_4', 200, 196)
        ],
        runningLeft: [
            new PlayerSprite('robot/Run_1-L', 200, 196),
            new PlayerSprite('robot/Run_2-L', 200, 196),
            new PlayerSprite('robot/Run_3-L', 200, 196),
            new PlayerSprite('robot/Run_4-L', 200, 196),
            new PlayerSprite('robot/Run_5-L', 200, 196),
            new PlayerSprite('robot/Run_6-L', 200, 196),
            new PlayerSprite('robot/Run_7-L', 200, 196),
            new PlayerSprite('robot/Run_8-L', 200, 196)
        ],
        runningRight: [
            new PlayerSprite('robot/Run_1', 200, 196),
            new PlayerSprite('robot/Run_2', 200, 196),
            new PlayerSprite('robot/Run_3', 200, 196),
            new PlayerSprite('robot/Run_4', 200, 196),
            new PlayerSprite('robot/Run_5', 200, 196),
            new PlayerSprite('robot/Run_6', 200, 196),
            new PlayerSprite('robot/Run_7', 200, 196),
            new PlayerSprite('robot/Run_8', 200, 196)
        ],
        runningShootingLeft: [
            new PlayerSprite('robot/RunShoot_1-L', 200, 196),
            new PlayerSprite('robot/RunShoot_2-L', 200, 196),
            new PlayerSprite('robot/RunShoot_3-L', 200, 196),
            new PlayerSprite('robot/RunShoot_4-L', 200, 196),
            new PlayerSprite('robot/RunShoot_5-L', 200, 196),
            new PlayerSprite('robot/RunShoot_6-L', 200, 196),
            new PlayerSprite('robot/RunShoot_7-L', 200, 196),
            new PlayerSprite('robot/RunShoot_8-L', 200, 196)
        ],
        runningShootingRight: [
            new PlayerSprite('robot/RunShoot_1', 200, 196),
            new PlayerSprite('robot/RunShoot_2', 200, 196),
            new PlayerSprite('robot/RunShoot_3', 200, 196),
            new PlayerSprite('robot/RunShoot_4', 200, 196),
            new PlayerSprite('robot/RunShoot_5', 200, 196),
            new PlayerSprite('robot/RunShoot_6', 200, 196),
            new PlayerSprite('robot/RunShoot_7', 200, 196),
            new PlayerSprite('robot/RunShoot_8', 200, 196)
        ],
        jumpingLeft: new PlayerSprite('robot/Jump_3-L', 200, 196),
        jumpingRight: new PlayerSprite('robot/Jump_3', 200, 196),
        jumpingShootingLeft: new PlayerSprite('robot/JumpShoot_1-L', 200, 196),
        jumpingShootingRight: new PlayerSprite('robot/JumpShoot_1', 200, 196),

        getCollisionRect: function(sprite, x, y, targetW, targetH) {
            return new Rect(x + 19.2, y, 55, targetH);
        }
    }

};

module.exports = PlayerSkins;