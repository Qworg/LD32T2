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

//function EventEngine(event, choices) {
//    if (event.type === "singleChallenge") {
//        //OK, a single person or small group against the world.
//        var success = true;
//        if (event["co-op"] === true) {
//            //small group!
//            //We know that choices in this case is a small group.
//            var groupIn = choices;
//            
//            for (var i = 0; i < event.requirementKeys.length; i++) {
//                if (event.requirementKeys[i]["co-op"] === false) {
//                    //Only one person in the group needs to have it.
//                    var hasStat = false;
//                    for (var j = 0; j < groupIn.studentGroup.length, j++) {
//                        if (event.requirementKeys[i].success === "above") {
//                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] > 
//                                event.requirementKeys[i].amount) {
//                                hasStat = true;
//                            }
//                        }
//                        else if (event.requirementKeys[i].success === "below") {
//                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] < 
//                                event.requirementKeys[i].amount) {
//                                hasStat = true;
//                            }
//                        }
//                        else if (event.requirementKeys[i].success === "match") {
//                            if (groupIn.studentGroup[j].stats[event.requirementKeys[i].stat] === 
//                                event.requirementKeys[i].amount) {
//                                hasStat = true;
//                            }
//                        }
//                    }
//                    if (hasStat === false) {
//                        success = false;
//                    }
//                }
//                else {
//                    //Everyone contributes!  Add em up.
//                    if (event.requirementKeys[i].success === "match") {
//                        var groupTruth = false;
//                        for (var j = 0; j < groupIn.studentGroup.length, j++) {
//                            if (groupTruth === false && groupIn.studentGroup[j] === true) {
//                                groupTruth = true;
//                            }
//                        }
//                        success = groupTruth;
//                    } else {
//                        var groupStatTotal = 0;
//                        for (var j = 0; j < groupIn.studentGroup.length, j++) {
//                            groupStatTotal+=groupIn.studentGroup[j].stats[event.requirementKeys[i].stat];
//                        }
//                        if (groupStatTotal <= event.requirementKeys[i].amount) {
//                            //FAILED!
//                            success = false;
//                        }
//                    }
//                }
//            }
//        } 
//        else {
//            //SINGLE PERSON
//            var studentIn = choices;
//            
//            for (var i = 0; i < event.requirementKeys.length; i++) {
//                