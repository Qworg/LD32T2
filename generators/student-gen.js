function StudentFactory() {
    this.createStudent = function (gender, name) {
        var student = {};
        
        student.name = "ERRORNAME";
        if (name === null) {
            namey.get({ count: 1, type: gender, frequency: 'rare', with_surname: true, 
                       callback: function(n) { console.log(n); student.name = n; }});
        } else {
            student.name = name;
        }
        
        /*if (gender === "female") {
            student = new FemaleStudent();
        }
        if (gender === "male") {
            student = new MaleStudent();
        }*/
        
        
        student.gender = gender;        
        student.stats = newStudentStats();
        student.friends = [];
        student.enemies = [];
        student.likes = [];
        student.dislikes = [];
        student.societies = [];
        student.house = null;
        student.year = 1;
        
        
        student.returnStats = function () {
            console.debug(student.gender + " student: " + student.name);
            console.debug(student.stats);
        }
        
        student.returnTextStats = function () {
            var textOutput = student.name + 
                " is a " + student.gender + 
                ", " + yearToText(student.year) + " year" +
                " student in House " + student.house.name + ". " +
                capitalizeFirstLetter(genderToPronoun(student.gender)) + " is " + 
                simpleNumberToTextValue(student.stats.strength) + " strong, " + 
                simpleNumberToTextValue(student.stats.dexterity) + " dexterous, " +
                simpleNumberToTextValue(student.stats.constitution) + " hardy, " + 
                simpleNumberToTextValue(student.stats.intelligence) + " intelligent, and " +
                simpleNumberToTextValue(student.stats.charisma) + " charismatic. " + 
                capitalizeFirstLetter(genderToPronoun(student.gender)) + " is " +         
                studentNarcString(student.stats.narcissism) + ", " +
                studentMachString(student.stats.machiavellianism) + ", and " +
                studentPsychoString(student.stats.psychopathy) + ".";
            console.debug(textOutput);
        }
        
        return student;
    }
    
    var newStudentStats = function() {
        var strength = Math.random();
        var dexterity = Math.random();
        var constitution = Math.random();
        var intelligence = Math.random();
        var charisma = Math.random();
        var narcissism = Math.random() - 0.5; //Negative? Selfless
        var machiavellianism = Math.random() - 0.5; //Negative? Earnest
        var psychopathy = Math.random() - 0.5; //Negative? Empathetic
        return {
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            charisma: charisma,
            narcissism: narcissism,
            machiavellianism: machiavellianism,
            psychopathy: psychopathy
        };
    }
}


function studentRelationshipEngine(studentsIn) {
    var CHARISMA_MULTIPLE = 5;
    var PERSONALITY_MULTIPLE = 1;
    var HOUSE_MULTIPLE = 3;
    //var relationshipsScoreList = [];
    for (int i = 0; i < studentsIn.length; i++) {
        //Clear all your current relationships and rebuild.
        studentsIn[i].likes.length = 0;
        studentsIn[i].dislikes.length = 0;
        studentsIn[i].friends.length = 0;
        studentsIn[i].enemies.length = 0;
        for (int j = 0; j < studentsIn.length; i++) {
            //Goal here is to find the friends/enemies tree in a single pass.
            var relationshipScore = 0; //higher is better
            var enemyFriendMix = 0; //higher is better
            //Raw Magnetism
            relationshipScore+=(studentsIn[j].stats.charisma*CHARISMA_MULTIPLE);
            //Personality Conflicts
            enemyFriendMix+=((1-(Math.abs(studentsIn[i].stats.narcissism - studentsIn[j].stats.narcissism)))*PERSONALITY_MULTIPLE);
            enemyFriendMix+=((1-(Math.abs(studentsIn[i].stats.machiavellianism - studentsIn[j].stats.machiavellianism)))*PERSONALITY_MULTIPLE);
            enemyFriendMix+=((1-(Math.abs(studentsIn[i].stats.psychopathy - studentsIn[j].stats.psychopathy)))*PERSONALITY_MULTIPLE);
            if (studentsIn[i].house === studentsIn[j].house) {
                //Share a house!   
                var sharedHouse = studentsIn[i].house;
                relationshipScore+=(studentsIn[j].stats.charisma*HOUSE_MULTIPLE)
                enemyFriendMix+=((sharedHouse.stats.camaraderie -    
                                  sharedHouse.stats.politics)*HOUSE_MULTIPLE);
            }
            //Calculate love/hate and amount
            var deadBandLow = 0.5;
            var deadBandHigh = 2.5;
            var deadBandChange = (relationshipScore - 4)*0.25;
            deadBandLow+=deadBandChange;
            deadBandHigh-=deadBandChange;
            if (enemyFriendMix >= deadBandHigh) {
                studentsIn[i].likes[studentsIn[j]] = enemyFriendMix;
            }
            if (enemyFriendMix < deadBandLow) {
                studentsIn[i].dislikes[studentsIn[j]] = enemyFriendMix;
            }
        }
    }
    //Now we have all the likes and dislikes.  Look for mutual sets for friends/enemies.
    for (int i = 0; i < studentsIn.length; i++) {
        //Look at all the likes for mutual likes.
        var relationshipKeys = Object.keys(studentsIn[i].likes);
        for (int j = 0; j < relationshipKeys.length; j++) {
            if (studentsIn[i] in relationshipKeys[j].likes) {
                //MUTUAL LIKES!  We're FWENDS!
                studentsIn[i].friends[relationshipKeys[j]] = studentsIn[i].likes[relationshipKeys[j]];
            }
        }
        //Look at all the dislikes for mutual dislikes
        relationshipKeys = Object.keys(studentsIn[i].dislikes);
        for (int j = 0; j < relationshipKeys.length; j++) {
            if (studentsIn[i] in relationshipKeys[j].dislikes) {
                //MUTUAL DISLIKES! >_< We're NMEs
                studentsIn[i].enemies[relationshipKeys[j]] = studentsIn[i].dislikes[relationshipKeys[j]];
            }
        }
    }
}


function getStudentGroups(studentsIn) {
    var studentGroups = [];
    var len = studentsIn.length;
    var studentMarkList = new Array(len);
    while (--len >= 0) {
        studentMarkList[len] = false;
    }
    for (int i = 0; i < studentsIn.length; i++) {
        if (studentMarkList[i] === false) {
            //We haven't visited this one yet!
            var newStudentGroup = [];
            newStudentGroup.push(studentsIn[i]);
            studentMarkList[i] = true;
            var leaderIndex = 0;
            var leaderAmount = newStudentGroup[leaderIndex].stats.charisma;
            var studentsQueue = [];
            //OK, start stacking in the unmarked neighbours into a check list.
            for (int j = 0; j<studentsIn[i].friends.length; j++){
                var k = studentsIn.indexOf(studentsIn[i].friends[j]);
                if (studentMarkList[k] === false) {
                    studentsQueue.push(studentsIn[i].friends[j]);
                }
            }
            //Repeat process above, walking the friend graph
            while(studentsQueue.length > 0) {
                newStudentGroup.push(studentsQueue.shift());
                var endIndex = newStudentGroup.length - 1;
                var k = studentsIn.indexOf(newStudentGroup[endIndex]);
                if (studentMarkList[k] === true) {
                    //Oops, must have been a tight friend group.  Pop it off and skip the rest.
                    newStudentGroup.pop();
                }
                else {
                    studentMarkList[k] = true;
                    if (newStudentGroup[endIndex].stats.charisma > leaderAmount) {
                        leaderAmount = newStudentGroup[endIndex].stats.charisma;
                        leaderIndex = endIndex;
                    }
                    //OK, add all this one's friends!
                    for (int j = 0; j<newStudentGroup[endIndex].friends.length; j++) {
                        var n = studentsIn.indexOf(newStudentGroup[endIndex].friends[j]);
                        if (studentMarkList[n] === false) {
                            studentsQueue.push(newStudentGroup[endIndex].friends[j]);
                        }
                    }
                }
            }
            //OK! Whole friend group added! Create the output object.
            studentGroups.push({leaderIndex:leaderIndex, studentGroup:newStudentGroup});
        }
        //If true, we already touched it.  Skip!            
    }
    return studentGroups;
}


function studentNarcString(narcIn) {
    var adj = "narcissistic";
    if (narcIn < 0) {
        adj = "selfless";
    }
        
    if (Math.abs(narcIn) > 0.4) {
        return "incredibly " + adj;
    }
    if (Math.abs(narcIn) > 0.3) {
        return "very " + adj;
    }
    if (Math.abs(narcIn) > 0.2) {
        return "moderately " + adj;
    }
    if (Math.abs(narcIn) > 0.1) {
        return "a little " + adj;
    }
    if (Math.abs(narcIn) > 0.0) {
        return "a bit " + adj;
    }
}

function studentMachString(machIn) {
    var adj = "machiavellian";
    if (machIn < 0) {
        adj = "earnest";
    }
        
    if (Math.abs(machIn) > 0.4) {
        return "incredibly " + adj;
    }
    if (Math.abs(machIn) > 0.3) {
        return "very " + adj;
    }
    if (Math.abs(machIn) > 0.2) {
        return "moderately " + adj;
    }
    if (Math.abs(machIn) > 0.1) {
        return "a little " + adj;
    }
    if (Math.abs(machIn) > 0.0) {
        return "a bit " + adj;
    }
}

function studentPsychoString(psychoIn) {
    var adj = "psychopathic";
    if (psychoIn < 0) {
        adj = "empathetic";
    }
        
    if (Math.abs(psychoIn) > 0.4) {
        return "incredibly " + adj;
    }
    if (Math.abs(psychoIn) > 0.3) {
        return "very " + adj;
    }
    if (Math.abs(psychoIn) > 0.2) {
        return "moderately " + adj;
    }
    if (Math.abs(psychoIn) > 0.1) {
        return "a little " + adj;
    }
    if (Math.abs(psychoIn) > 0.0) {
        return "a bit " + adj;
    }
}