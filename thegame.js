var theGame = function(game) {
  score = 0;
}

theGame.prototype = {
  create: function() {
    score = Math.floor(Math.random()*100);
    var width = this.game.world.width;
    
    for( var i = 0; i < 4; i += 1) {
      this.makeHouseDisplay( (width*i/4) + width/8 , this.game.world.height * 0.5, "house"+i);
    }

    this.makeInstructions();
  },
  clickedOver: function() {
    console.log('clicked game over button');
    this.game.state.start("GameOver",true, false, score);
  },
  makeHouseDisplay : function( x, y, houseName) {
    var selectButton = this.game.add.button(x, y, 'smBlankBtn', this.houseSelected, this);
    selectButton.anchor.setTo(0.5,0.5);
    selectButton.houseName = houseName;
    var titleStyle = { font: "bold 14px Arial", fill: solarized.base3, align: 'center' };
    var nameTitle = this.game.add.text(x,y, houseName, titleStyle );
    nameTitle.anchor.setTo(0.5,0.5);
  },
  houseSelected : function(button) {
    console.log('you selected House ' + button.houseName);
  },
  makeInstructions : function() {
    var instructionsStyle = { font: "bold 14px Arial", fill: solarized.base01, align: "center",
      wordWrap: true, wordWrapWidth: this.game.world.width * 0.7 };
    var instructions = this.game.add.text(this.game.world.width/2, this.game.world.height*0.4,
      "Sort the incoming students!",
      instructionsStyle );
    instructions.anchor.setTo(0.5, 0.5);
  }
}
