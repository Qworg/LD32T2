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

//function EventEngine() {