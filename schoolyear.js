var schoolYear = function(game) {
}

var schoolYearProgress = 0;

schoolYear.prototype = {
  studentGroupList : [],
  event : null, 
  preload: function() {
    var eventFactory = new EventFactory();
    studentRelationshipEngine(students);
    this.studentGroupList = getStudentGroups(students);
    this.event = eventFactory.createEvent(null);
    this.event.returnEvent();

  },
  create: function() {
    this.makeProgressBar( schoolYearProgress);
    var groups = 0;
    this.choices = [];
    for (var i = 0; i < this.studentGroupList.length; i++) {
        if (this.studentGroupList[i].studentGroup.length > 1) {
            groups += 1;
            this.choices.push(this.studentGroupList[i].leader.name + "\n with " +                 
                this.studentGroupList[i].studentGroup.length + " friends.");
        }
    }
    this.makeChoicesList();

    console.log( groups + " groups are left");
    if( schoolYearProgress >= .9 ) {
      this.game.state.start("GameOver");
    }
    if( groups == 0) {
      this.game.state.start("GameOver");
    }
  },
  update: function() {
  },

  makeProgressBar: function( progress) {
    var maxWidth = this.game.world.width-100;
    if( this.bar) {
      this.bar.clear();
    }
    this.bar = this.game.add.graphics(50,50);
    this.bar.beginFill( Phaser.Color.hexToRGB( solarized.base1));
    this.bar.drawRect(0,0,maxWidth,50);
    this.bar.beginFill( Phaser.Color.hexToRGB( solarized.orange));
    this.bar.drawRect(0,0,maxWidth*progress,50);
  },

  makeChoicesList: function() {
    if(this.choicesList) {
      this.choicesList.clear();
    }
    this.choicesList = this.game.add.graphics(50,100);
    for(var i=0; i<this.choices.length; i += 1) {
      this.makeChoiceButton(100, 200+i*50, this.choices[i]);
    }
  },
  
  makeChoiceButton: function(x,y,choice) {
    var button = this.game.add.button(x,y, 'blankBtn', this.choiceSelected, this);
    button.anchor.setTo(0.5,0.5);
    button.choice = choice;
    var titleStyle = { font: "bold 14px Arial", fill: solarized.base3, align: 'center', lineSpacing: 3 };
    var title = this.game.add.text(x,y, choice, titleStyle );
    title.anchor.setTo(0.5,0.5);
    return title;
  },

  choiceSelected: function( button) {
    console.log( button.choice + " selected");
    schoolYearProgress += 0.1;
    var leaderName = button.choice.split(' ')[0] + ' ' + button.choice.split(' ')[1];
    leaderName = leaderName.split('\n')[0];
    console.log( leaderName + ' is the leader');
    this.killStudent( leaderName);
    this.game.state.start("SchoolYear");
  },

  killStudent : function( name) {
    var studentObj;
    var removeIndex;
    for( var i=0; i<students.length; i+=1) {
      if( students[i].name == name) {
        studentObj = students[i];
        removeIndex = i;
      }
    }
    
    // remove from house
    var hs = studentObj.house.students;
    var hsri;
    for( var i=0; i< hs.length; i+=1) {
      if( hs[i].name == name) {
        hsri = i;
      }
    }
    hs.splice(hsri, 1);

    // remove fromi students
    students.splice(removeIndex, 1);
  }
}

