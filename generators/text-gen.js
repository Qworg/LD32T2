function simpleNumberToTextValue(number) {
    if (number < 0) {
        return "not";
    }
    if (number < 0.25) {
        return "a little";
    }
    if (number < 0.5) {
        return "moderately";
    }
    if (number < 0.75) {
        return "very";
    }
    if (number < 1.0) {
        return "incredibly";
    }
}

function simpleNumberToNegativeTextValue(number) {
    if (number < 0) {
        return "no";
    }
    if (number < 0.33) {
        return "mild";
    }
    if (number < 0.66) {
        return "moderate";
    }
    if (number < 1.0) {
        return "severe";
    }
}

function yearToText(number) {
    if (number === 1) {
        return "first";
    }
    if (number === 2) {
        return "second";
    }
    if (number === 3) {
        return "third";
    }
    if (number === 4) {
        return "fourth";
    }
    if (number === 5) {
        return "fifth";
    }
    if (number === 6) {
        return "sixth";
    }
    if (number === 7) {
        return "seventh";
    }
}

function genderToPronoun(gender) {
    if (gender === "female") {
        return "she";
    }
    if (gender === "male") {
        return "he";
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}