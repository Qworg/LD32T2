var sortingStudents = function(game) {
  score = 0;
}

var NUMSTUDENTS = 10; //Make twice as many!
var MAXNAMEREQUESTSIZE = 10;
var studentsComplete = 0;
var TOTALSTUDENTLOOPS = (Math.ceil(NUMSTUDENTS/MAXNAMEREQUESTSIZE))*2;
var AUTOSORTSTUDENTS = false;
var isLoaded = false;

sortingStudents.prototype = {
  
  create: function() {
    score = Math.floor(Math.random()*100);
    var width = this.game.world.width;
    this.makeInstructions();
    this.incomingStudents = [];
    this.generateClass();

    
  },
  classCallback : function () { 
      var width = this.game.world.width;  
          // display houses
          for ( var i = 0; i < houses.length; i+= 1) {
              houses[i].gfx = this.makeHouseDisplay( (width*i/NUMHOUSES) + width/(NUMHOUSES*2), 
                                                    this.game.world.height * 0.5, houses[i]);
          }
            // display incoming students with data
            console.log("Number of incoming students: " + this.incomingStudents.length);
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
    if (this.incomingStudents.length == 0) {
        return;
    }
    console.log('you selected House ' + button.houseName);
    var targetHouse = houses[0];
    for( var i = 0; i < houses.length; i+=1) {
      if( houses[i].name == button.houseName) {
        targetHouse = houses[i];
      }
    }
    var newStudent = this.incomingStudents.shift();
    targetHouse.students.push( newStudent);
    newStudent.house = targetHouse;
    students.push(newStudent);
    console.log( newStudent.name + ' moved to ' + targetHouse.name);
    
    var tween = this.game.add.tween(newStudent.gfx);
    tween.to({x: targetHouse.gfx.x,
              y: targetHouse.gfx.y+targetHouse.students.length*30}
              , 1000);
    tween.start();
    
    console.log ("Students Left: " + this.incomingStudents.length);
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
  generateClass : function( ) {
    //Generate a new class of students and add them to a house.
    //Fetch male and female names
    var newClassOfStudents = this.incomingStudents;
    var studentFactory = new StudentFactory();
      for (var i = 0; i < NUMSTUDENTS; ) {
        var nameChunk = 0;
        
        if (NUMSTUDENTS - i > MAXNAMEREQUESTSIZE) {
            nameChunk = MAXNAMEREQUESTSIZE;
        }
        else {
            nameChunk = NUMSTUDENTS - i;
        }

        namey.get({ count: nameChunk, type: 'male', frequency: 'rare', with_surname: true, 
                    callback: function(n) { 
                        console.log(n);
                        var chunkSize = n.length;
                        for (var i = 0; i < chunkSize; i++) {
                            var newStudent = studentFactory.createStudent('male', n[i]); 
                            if (AUTOSORTSTUDENTS === true) {
                                var houseNum = Math.floor(Math.random() * houses.length);
                                newStudent.house = houses[houseNum];
                                houses[houseNum].students.push(newStudent);
                            }
                            newClassOfStudents.push(newStudent);
                        }
                        studentsComplete+=1;
                    }});
        namey.get({ count: nameChunk, type: 'female', frequency: 'rare', with_surname: true, 
                    callback: function(n) { 
                        console.log(n);
                        var chunkSize = n.length;
                        for (var i = 0; i < chunkSize; i++) {
                            var newStudent = studentFactory.createStudent('female', n[i]);
                            if (AUTOSORTSTUDENTS === true) {
                                var houseNum = Math.floor(Math.random() * houses.length);
                                newStudent.house = houses[houseNum];
                                houses[houseNum].students.push(newStudent);
                            }
                            newClassOfStudents.push(newStudent);
                        }
                        studentsComplete+=1;
                    }});

        i = i + nameChunk;
    }
    //this.classCallback(newClassOfStudents);
  },
  update : function() {
   if (studentsComplete === TOTALSTUDENTLOOPS && isLoaded === false) {
        
       this.classCallback();
       isLoaded = true;
    }   
  }
}
