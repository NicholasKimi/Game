import Phaser from 'phaser';
import RiseOfAzriaScene from './scenes/RiseOfAzriaScene';

const config = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 200 }, // Add the 'x' property
            debug: false,
        },
    },
    scene: [RiseOfAzriaScene],
};

export default new Phaser.Game(config);

