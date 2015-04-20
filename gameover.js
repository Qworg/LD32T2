var gameOver = function(game){}

gameOver.prototype = {
    init: function(score) {
        console.log("You scored: "+score);
    },
    create: function() {
        var centerX = this.game.world.centerX;

        var titleStyle = { font: "bold 32px Arial", fill: solarized.red, align: "center" };
        var gameOverTitle = this.game.add.text(centerX, this.game.world.height * 0.2,
            "Game Over", titleStyle);
        gameOverTitle.anchor.setTo(0.5,0.5);

        var instructionsStyle = { font: "bold 14px Arial", fill: solarized.base01, align: "center",
            wordWrap: true, wordWrapWidth: this.game.world.width * 0.7 };
        var instructions = this.game.add.text(centerX, this.game.world.height * 0.5,
            "Your score: " + score,
            instructionsStyle);
        instructions.anchor.setTo(0.5,0.5);
        
        var playButton = this.game.add.button(centerX, this.game.world.height * 0.7, "play",
            this.playTheGame, this);
        playButton.anchor.setTo(0.5,0.5);
    },

    playTheGame: function() {
        this.game.state.start("TheGame");
    }
}
