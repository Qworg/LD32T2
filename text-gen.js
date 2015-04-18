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