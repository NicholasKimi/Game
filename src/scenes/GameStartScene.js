import Phaser from "phaser";
export default class GameStartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }
  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }
  preload() {
 
  }
  create() {
   
    this.add.text(100, 300, "Score: " + this.score, {
      fontSize: "32px",
      color: "black",
    });
    this.replayButton = this.add.image(200, 400, "replay-button").setInteractive().setScale(0.5);
    this.replayButton.once("pointerup",() => {
        this.scene.start("rise-of-azria-scene");
    },this)
  }
}