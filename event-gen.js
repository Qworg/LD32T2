function EventFactory() {
    this.createEvent = function (name) {
        var event = {};
        
        if (name === null) {
            var eventKeysList = Object.keys(eventData);
            eventRandomGrab = Math.floor(Math.random() * eventKeysList.length);
            event = eventData[eventKeysList[eventRandomGrab]];
            event.name = eventKeyList[eventRandomGrab];
        }
        else {
            event = eventData[name];
            event.name = name;
        }
        
        event.desc = getEventDesc(event.name);
        event.image = getEventImage(event.name);
        
        event.returnEvent = function () {
            console.debug(event.name +": ");
            console.debug(event.desc);
            console.debug(event.requirements);
            console.debug(event.consequences);
        }
        
        return event;
    }
    
}