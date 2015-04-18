function HouseFactory() {
    this.createHouse = function (name) {
        var house = {};
        
        if (name === null) {
            houseRandomGrab = Math.floor(Math.random() * houseNames.length);
            house.name = houseNames[houseRandomGrab];
        }
        else {
            house.name = name;
        }
        
        house.stats = newHouseStats();
        house.alliances = [];
        house.rivalries = [];
        house.enemies = [];
        house.students = [];
        
        
        house.returnStats = function () {
            console.debug(house.name +": ");
            console.debug(house.stats);
        }
        
        return house;
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

var houseNames = ["Bearpuff","Callyr","Crawlstrike","Creepion","Foxsnitch","Gnomehide","Gnomesneak","Gorgonsigh","Gorgonuan","Graspir","Puffdir","Snifflecreep","Stingar","Wyrmdream","Wyvernar","Breakur","Centaurhorn","Centaurskin","Creephowl","Creepsneak","Dragonton","Fairyscream","Ghostskin","Graspburn","Phoenixblast","Puffburn","Screampuff","Stingcall","Tritonscale","Wyrmen","Birdcall","Bitesnitch","Foxfeather","Foxyn","Ghostder","Ghosteun","Owlyr","Piffleer","Sneakdor","Spiderir","Spirityr","Stingcreep","Stingsnuffle","Trollslyther","Wyrmrage","Breakaon","Burnsnitch","Foxhowl","Houndcry","Puffdir","Puffpuffle","Puffun","Puffleion","Pufflesneak","Screamyen","Seekgrasp","Spectrecall","Stingien","Stingyon","Tritonsnitch","Badgersigh","Callyin","Centaurbite","Foxeon","Houndsigh","Hufflescream","Imphead","Jackalrage","Medusauen","Owlaon","Slytherain","Slytherpuff","Strikepiffle","Trollburn","Trollsnitch","Cathowl","Ghostud","Glarein","Gorgonain","Jaguarpuffle","Lionen","Phoenixwing","Piffleder","Screamsting","Serpentpuff","Sighdur","Snufflebite","Snuffleyin","Spiritcrawl","Wolfscale","Birduon","Chimeravenom","Doghide","Dragonscream","Eaglead","Glareion","Gnomeor","Hufflebite","Hufflecry","Killburn","Leoparduin","Slythertar","Snufflehuffle","Snufflekill","Wyvernstrike","Birdyd","Bitescream","Dragoned","Eaglescream","Foxyd","Hawkslash","Howlseek","Leopardpiffle","Ratjaw","Sniffleuen","Tigerhowl","Tigerkill","Unicornblast","Unicornur","Wyvernjaw","Badgerdream","Badgerskin","Biteton","Blastion","Callyan","Chimeraun","Flighton","Gnomedor","Piffleglare","Ravengrasp","Snitchein","Tigerar","Trollsnitch","Unicornan","Wyrmgrasp","Badgerglare","Badgerin","Badgersigh","Birdein","Biteyr","Crytun","Dogar","Eaglesting","Gorgonslash","Graspyon","Krakenien","Leoparduan","Ratsigh","Trolltail","Wolftalon"]

function randomBool() {
    return Math.random() < 0.5 ? true : false;
}