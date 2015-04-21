var gameTitle = function(game){};

gameTitle.prototype = {
    create: function() {
      var centerX = this.game.world.centerX;

      this.game.stage.backgroundColor = solarized.base3;

      var titleStyle = { font: "bold 32px Arial", fill: solarized.red, align: "center" };
      var gameTitle = this.game.add.text(centerX, this.game.world.height * 0.2,
          "Wizard School Simulator", titleStyle);
      gameTitle.anchor.setTo(0.5,0.5);

      var instructionsStyle = { font: "bold 14px Arial", fill: solarized.base01, align: "center",
          wordWrap: true, wordWrapWidth: this.game.world.width * 0.7 };
      var instructions = this.game.add.text(centerX, this.game.world.height * 0.5,
          "Instructions: The Warthog School for Magical Children needs a new " +
          "headmaster! You must sort the incoming students and get them through " +
          "the school year. Can you get students all the way to 7th year and graduation?",
          instructionsStyle );
      instructions.anchor.setTo(0.5,0.5);

      var playButton = this.game.add.button(centerX, this.game.world.height * 0.8,
          "play", this.playTheGame, this);
      playButton.anchor.setTo(0.5,0.5);
      
      var houseFactory = new HouseFactory();
      //Generate Houses
      houses.length = 0;
      for (var i = 0; i < NUMHOUSES; i++) {
        houses.push(houseFactory.createHouse(null));
      }
    },

    playTheGame: function(){
        this.game.state.start("SortingStudents");
    }
};
