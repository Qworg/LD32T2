var events = [];
var EVENTSPERYEAR = 10;

function EventFactory() {
    this.createEvent = function (name) {
        var event = {};
        
        if (name === null) {
            var eventKeysList = Object.keys(eventData);
            eventRandomGrab = Math.floor(Math.random() * eventKeysList.length);
            event = eventData[eventKeysList[eventRandomGrab]];
            event.name = eventKeysList[eventRandomGrab];
        }
        else {
            event = eventData[name];
            event.name = name;
        }
        
        event.imagePath = "assets/"+name+".png";
        
        event.returnEvent = function () {
            console.debug(event.name +": ");
            console.debug(event.desc);
            console.debug(event.requirementKeys);
        }
        
        return event;
    }
}

function EventEngine(event, choices) {
    if (event.type === "singleChallenge") {
        //OK, a single person or small group against the world.
        var success = true;
        if (event["co-op"] === true) {
            //small group!
            //We know that choices in this case is a small group.
            var groupIn = choices;
            
            for (var i = 0; i < event.requirementKeys.length; i++) {
                if (event.requirementKeys[i]["co-op"] === false) {
                    //Only one person in the group needs to have it.
                    var hasStat = false;
                    for (var j = 0; j < groupIn.studentGroup.length; j++) {
                        if (event.requirementKeys[i].success === "above") {
                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] > 
                                event.requirementKeys[i].amount) {
                                hasStat = true;
                            }
                        }
                        else if (event.requirementKeys[i].success === "below") {
                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] < 
                                event.requirementKeys[i].amount) {
                                hasStat = true;
                            }
                        }
                        else if (event.requirementKeys[i].success === "match") {
                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] === 
                                event.requirementKeys[i].amount) {
                                hasStat = true;
                            }
                        }
                    }
                    if (hasStat === false) {
                        success = false;
                    }
                }
                else {
                    //Everyone contributes!  Add em up.
                    if (event.requirementKeys[i].success === "match") {
                        var groupTruth = false;
                        for (var j = 0; j < groupIn.studentGroup.length; j++) {
                            if (groupTruth === false && groupIn.studentGroup[j] === true) {
                                groupTruth = true;
                            }
                        }
                        success = groupTruth;
                    } else {
                        var groupStatTotal = 0;
                        for (var j = 0; j < groupIn.studentGroup.length; j++) {
                            groupStatTotal+=groupIn.studentGroup[j].stats[event.requirementKeys[i].stat];
                        }
                        if (groupStatTotal <= event.requirementKeys[i].amount) {
                            //FAILED!
                            success = false;
                        }
                    }
                }
            }
        } 
//        else {
//            //SINGLE PERSON
//            var studentIn = choices;
//            
//            for (var i = 0; i < event.requirementKeys.length; i++) {

        if (success === true) {
            //Apply win benefits
            for (var i = 0; i < event.winKeys.length; i++) {
                if (event.winKeys[i].who === "all") {
                    for (var j = 0; j < choices.studentGroup.length; j++) {
                        choices.studentGroup[j].stats[event.winKeys[i].stat]+=event.winKeys[i].amount;
                    }
                }
                else if (event.winKeys[i].who === "leader") {
                    choices.leader.stats[event.winKeys[i].stat]+=event.winKeys[i].amount;
                }
                else if (event.winKeys[i].who === "random") {
                    choices.studentGroup[Math.floor(Math.random()*choices.studentGroup.length)]
                        .stats[event.winKeys[i].stat]+=event.winKeys[i].amount;
                }
            }

        }
        else {
            //Apply loss negatives
            for (var i = 0; i < event.loseKeys.length; i++) {
                if (event.loseKeys[i].who === "all") {
                    for (var j = 0; j < choices.studentGroup.length; j++) {
                        if (event.loseKeys[i].stat === "life") {
                            var deathIndex = choices.studentGroup[j].house.indexOf(choices.studentGroup[j]);
                            choices.studentGroup[j].house.splice(deathIndex, 1);
                            deathIndex = students.indexOf(choices.studentGroup[j]);
                            students.splice(deathIndex, 1);
                        } else {
                            choices.studentGroup[j].stats[event.loseKeys[i].stat]+=event.loseKeys[i].amount;
                        }
                    }
                }
                else if (event.loseKeys[i].who === "leader") {
                    if (event.loseKeys[i].stat === "life") {
                        var deathIndex = choices.leader.house.indexOf(choices.leader);
                        choices.leader.house.splice(deathIndex, 1);
                        deathIndex = students.indexOf(choices.leader);
                        students.splice(deathIndex, 1);
                    } else {
                        choices.leader.stats[event.loseKeys[i].stat]+=event.loseKeys[i].amount;
                    }
                }
                else if (event.loseKeys[i].who === "random") {
                    if (event.loseKeys[i].stat === "life") {
                        var j = Math.floor(Math.random()*choices.studentGroup.length);
                        var deathIndex = choices.studentGroup[j].house.indexOf(choices.studentGroup[j]);
                        choices.studentGroup[j].house.splice(deathIndex, 1);
                        deathIndex = students.indexOf(choices.studentGroup[j]);
                        students.splice(deathIndex, 1);
                    } else {
                        choices.studentGroup[Math.floor(Math.random()*choices.studentGroup.length)]
                            .stats[event.loseKeys[i].stat]+=event.loseKeys[i].amount;
                    }
                }
            }

        }
        return success;
    }
}
