// This module contains the definition of a bullet fired by the Robo armor. Unlike enemies bullets do not start off as a
// block of a level. Instead they will be created during the game when the user fires. The handling of sprites and
// collisions is similar to that of monsters from that moment on.

var Rect = require('./Rect');

// A sprite of a bullet
var BulletSprite = function(fileName) {
    this.sprite = new Image(20, 16);
    this.sprite.src = "tiles/objects/" +fileName +".png";
    this.width = 20;
    this.height = 16;
};

var Bullet = function() {
    this.type = 'Bullet';
    this.deadly = false;

    this.spritesLeft = [];
    initSprites(this.spritesLeft, '-L');
    this.spritesRight = [];
    initSprites(this.spritesRight, '');

    this.x = 0;
    this.y = 0;
    this.speedX = 10;
    this.speedY = 0;
    this.solid = false;
    this.targetWidth = 20;
    this.targetHeight = 16;
    this.distance = 0;

    this.getSprite = function(ticks) {
        var spritesArray = (this.speedX > 0) ? this.spritesRight : this.spritesLeft;
        return spritesArray[ticks % spritesArray.length];
    };

    this.getCollisionRect = function() {
        return new Rect(this.x, this.y, this.targetWidth, this.targetHeight);
    };

    // Straight movement. This could be adjusted - e.g. to let the bullet drop on a ballistic curve or to let it bounce
    // on collisions.
    this.move = function() {
        this.x += this.speedX;
        this.distance += Math.abs(this.speedX);
    };
};

// utility method used to initialize the sprite arrays of monsters.
var initSprites = function(spriteArray, direction) {
    for(let i=0; i<5; i++) {
        spriteArray.push(new BulletSprite('Bullet_' +(1+i) +direction));
    }
};

module.exports = Bullet;