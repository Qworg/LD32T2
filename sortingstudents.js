var sortingStudents = function(game) {
  score = 0;
}

sortingStudents.prototype = {
  create: function() {
    score = Math.floor(Math.random()*100);
    var width = this.game.world.width;
    this.makeInstructions();
    
    this.incomingStudents = [ { name: 'Alice' },
                              { name: 'Bob' },
                              { name: 'Charlie' },
                              { name: 'Diane' } ];
    this.houses = [ { name: 'house0', students: [] },
                    { name: 'house1', students: [] },
                    { name: 'house2', students: [] },
                    { name: 'house3', students: [] } ];
    // display houses with fake data
    for( var i = 0; i < 4; i += 1) {
      this.houses[i].gfx = this.makeHouseDisplay( (width*i/4) + width/8, 
        this.game.world.height * 0.5, this.houses[i]);
    }

    // display incoming students with fake data
    this.makeIncomingStudentQueue( this.incomingStudents );
  },
  makeHouseDisplay : function( x, y, house) {
    var selectButton = this.game.add.button(x, y, 'smBlankBtn', this.houseSelected, this);
    selectButton.anchor.setTo(0.5,0.5);
    selectButton.houseName = house.name;
    var titleStyle = { font: "bold 14px Arial", fill: solarized.base3, align: 'center' };
    var nameTitle = this.game.add.text(x,y, house.name, titleStyle );
    nameTitle.anchor.setTo(0.5,0.5);
    return nameTitle;
  },
  houseSelected : function(button) {
    console.log('you selected House ' + button.houseName);
    var targetHouse = this.houses[0];
    for( var i = 0; i < this.houses.length; i+=1) {
      if( this.houses[i].name == button.houseName) {
        targetHouse = this.houses[i];
      }
    }
    var newStudent = this.incomingStudents.shift();
    targetHouse.students.push( newStudent);
    console.log( newStudent.name + ' moved to ' + targetHouse.name);
    
    var tween = this.game.add.tween(newStudent.gfx);
    tween.to({x: targetHouse.gfx.x,
              y: targetHouse.gfx.y+targetHouse.students.length*30}
              , 1000);
    tween.start();
    
    if( this.incomingStudents.length == 0) {
      tween.onComplete.add(function(){ this.game.state.start("SchoolYear"); }, this);
    }
},
  makeInstructions : function() {
    var instructionsStyle = { font: "bold 14px Arial", fill: solarized.base01, align: "center",
      wordWrap: true, wordWrapWidth: this.game.world.width * 0.7 };
    var instructions = this.game.add.text(this.game.world.width/2, this.game.world.height*0.4,
      "Sort the incoming students!",
      instructionsStyle );
    instructions.anchor.setTo(0.5, 0.5);
  },
  drawStudent : function(x,y) {
    var style = { font: "bold 24px Arial", fill: solarized.green, align: "center" };
    var figure = this.game.add.text(x,y, '\u263A', style);
    figure.anchor.setTo(0.5,0.5);
    return figure;
  },
  makeIncomingStudentQueue : function( students) {
    var x = this.game.world.width/2;
    for( var i = 0; i < students.length; i += 1) {
      x += 30;
      students[i].gfx = this.drawStudent(x, this.game.world.height*0.3);
    }
  },
}
