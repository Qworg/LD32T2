function EventFactory() {
    this.createEvent = function (name) {
        var event = {};
        
        if (name === null) {
            eventRandomGrab = Math.floor(Math.random() * eventNames.length);
            event.name = eventNames[eventRandomGrab];
        }
        else {
            event.name = name;
        }
        
        event.desc = getEventDesc(event.name);
        event.image = getEventImage(event.name);
        event.requirements = getEventRequirements(event.name);
        event.consequences = getEventConsequences(event.name); 
        
        event.returnEvent = function () {
            console.debug(event.name +": ");
            console.debug(event.desc);
            console.debug(event.requirements);
            console.debug(event.consequences);
        }
        
        return event;
    }
    
    var newHouseStats = function() {
        var camaraderie = Math.random();
        var politics = Math.random();
        var expectation = Math.random();
        var darkSecrets = Math.random();
        var artifacts = randomBool();
        var alumni = randomBool();
        var helpfulGhosts = randomBool();
        var cashResources = randomBool();
        var magicResources = randomBool();
        
        return {
            camaraderie: camaraderie,
            politics: politics,
            expectation: expectation,
            darkSecrets: darkSecrets,
            artifacts: artifacts,
            alumni: alumni,
            helpfulGhosts: helpfulGhosts,
            cashResources: cashResources,
            magicResources: magicResources
        };
    }
}