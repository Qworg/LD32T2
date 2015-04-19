var theGame = function(game) {
  score = 0;
}

theGame.prototype = {
  create: function() {
    score = Math.floor(Math.random()*100);
    overButton = this.game.add.button(100,100,"lower", this.clickedOver, this);
    overButton.anchor.setTo(0.5,0.5);
  },
  clickedOver: function() {
    console.log('clicked game over button');
    this.game.state.start("GameOver",true, false, score);
  }
}
