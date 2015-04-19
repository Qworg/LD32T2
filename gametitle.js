var gameTitle = function(game){}

gameTitle.prototype = {
    create: function(){
    var style = { font: "32px Arial", fill: "#ff0044", align: "center" };
    var gameTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Wizard School Simulator", style);
    gameTitle.anchor.setTo(0.5,0.5);
    var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
    playButton.anchor.setTo(0.5,0.5);
  },
  playTheGame: function(){
    this.game.state.start("TheGame");
  }
}
