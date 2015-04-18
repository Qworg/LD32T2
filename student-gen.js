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
        
        
        student.returnStats = function () {
            console.debug(student.gender + " student: " + student.name);
            console.debug(student.stats);
        }
        
        student.returnTextStats = function () {
            var textOutput = student.name + 
                " is a " + student.gender + 
                " student in House " + student.house + ".  They are " + 
                simpleNumberToTextValue(student.stats.strength) + " strong, " + 
                simpleNumberToTextValue(student.stats.dexterity) + " dextrous, " +
                simpleNumberToTextValue(student.stats.constitution) + " hardy, " + 
                simpleNumberToTextValue(student.stats.intelligence) + " intelligent, and " +
                simpleNumberToTextValue(student.stats.charisma) + " charismatic." + 
                " They have " + simpleNumberToNegativeTextValue(student.stats.narcissism) + " narcissistic tendencies, " +
                simpleNumberToNegativeTextValue(student.stats.machiavellianism) + " Machiavellian tendencies, and " +
                simpleNumberToNegativeTextValue(student.stats.psychopathy) + " psychopathic tendencies.";
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
        var narcissism = Math.random();
        var machiavellianism = Math.random();
        var psychopathy = Math.random();
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