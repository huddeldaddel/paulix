// This module contains the definitions of the level backgrounds. They are similar to the blocks by handled differently
// by the game engine.

class Background {
  constructor(theme, w, h) {
    this.type = 'Background';
    this.sprite = new Image(w, h);
    this.sprite.src = 'tiles/' + theme + '/BG.png';
    this.spriteWidth = w;
    this.spriteHeight = h;
  }
}

// A container for the backgrounds.
const Backgrounds = {
    desert: new Background('desert', 1280, 960),
    forrest: new Background('forrest', 1000, 750),
    winter: new Background('winter', 1800, 893)
};

export default Backgrounds;