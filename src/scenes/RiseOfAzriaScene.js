// import Phaser from 'phaser';

// export default class RiseOfAzriaScene extends Phaser.Scene {
//   constructor() {
//     super('rise-of-azria-scene');
//   }

//   init() {
//     this.orc = undefined; 
//   }

//   preload() {
//     ttack
//     this.load.spritesheet('Orc-Attack1', 'images/orc/Orc-Attack01.png', {
//       frameWidth: 32,
//       frameHeight: 48,
//     });
//     this.load.audio('step', 'sfx/mixkit-footsteps-in-the-forest-ground-1230.wav');
//         this.load.audio('slash', 'sfx/mixkit-sword-cutting-flesh-2788.wav');
//         this.load.audio('treasure', 'sfx/mixkit-video-game-treasure-2066.wav');
//         this.load.audio('win', 'sfx/mixkit-game-bonus-reached-2065.wav');
//         this.load.audio('lose', 'sfx/mixkit-game-over-dark-orchestra-633.wav');
//   }

//   create() {
   
//     this.orc = this.add.sprite(100, 100, 'Orc-Attack1');

   
//     this.anims.create({
//       key: 'orc-attack',
//       frames: this.anims.generateFrameNumbers('Orc-Attack1', { start: 0, end: 3 }), 
//       frameRate: 10,
//       repeat: -1,
//     });

   
//     this.orc.play('orc-attack');
//   }

//   update() {
   
//   }
// }

import Phaser from 'phaser';

export default class RiseOfAzriaScene extends Phaser.Scene {
  constructor() {
    super('rise-of-azria-scene');
  }

  init() {
    this.orc = undefined; 
  }

  preload() {
    this.load.spritesheet('orc', 'images/Orc.png', {
      frameWidth: 40,
      frameHeight: 40,
    });
    this.load.image('tilemap', 'images/tileset/plains.png')
  }

  create() {
    this.orc = this.physics.add.sprite(40, 40, 'orc');

    const map = this.make.tilemap({ tileWidth: 32, tileHeight: 32, width: 40, height: 40});
    const tileset = map.addTilesetImage('tilemap', null, 32, 32);
    const groundLayer = map.createBlankLayer('Ground', tileset);

    groundLayer.putTileAt(0, 0, 0)

    this.createAnimation();

   
  }
  update() {
    this.orc.anims.play('player-stanby', true);
  }

  createAnimation(){
    this.anims.create({
      key: 'orc-idle',
      frames: this.anims.generateFrameNumbers('orc', { start: 0, end: 5 }), 
      frameRate: 60,
      repeat: -1,
    });
 }
}