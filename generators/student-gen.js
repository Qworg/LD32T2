function StudentFactory() {
    this.createStudent = function (gender) {
        var student = {};
        
        /*if (gender === "female") {
            student = new FemaleStudent();
        }
        if (gender === "male") {
            student = new MaleStudent();
        }*/
        
        
        student.gender = gender;
        student.name = "ERRORNAME";
        namey.get({ count: 1, type: gender, frequency: 'rare', with_surname: true, callback: function(n) { console.log(n); student.name = n; }});
        
        student.stats = newStudentStats();
        student.friends = [];
        student.enemies = [];
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