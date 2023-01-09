const BASE_URL = "https://www.sfu.ca/bin/wcm/course-outlines?";
const BASE_OUTLINE_URL = "https://www.sfu.ca/outlines.html?";
const BASE_CALENDAR_URL = "https://www.sfu.ca/students/calendar/";

// Parses a course number or term and year to it's letters and numbers
// Assumes correct input and in term-year order
// Input: course number or term + year String(eg: CMPT 105w or Fall 2019)
// Output: Tuple of strings [dept, number] (eg: [cmpt, 105w] or [fall, 2019])
const parseInput = (input) => {
    let alpha = input.toLowerCase().slice(0, input.search(/[0-9]/g)).trim();
    let number = input.toLowerCase().slice(input.search(/[0-9]/g)).trim();
    return [alpha, number];
}

const getWQBDesignation = (designationString) => {
    let result = "";

    const addCommaSpaceIfNeeded = (designationString, result) => {
        if (result.length != 0) {
            result = result + ", ";
        }
        return result;
    }

    if (designationString.includes("W")) {
        result = result + "W";
    }
    if (designationString.includes("Q")) {
        result = addCommaSpaceIfNeeded(designationString, result);
        result = result + "Q";
    }
    if (designationString.includes("Breadth-") || designationString.includes("B-") || designationString.includes("b-")) {
        result = addCommaSpaceIfNeeded(designationString, result);
        let breadthCount = 0;
        if(designationString.includes("Hum")) {
            result = result + "B-Hum";
            breadthCount++;
        }
        if(designationString.includes("Soc")) {
            result = breadthCount == 0 ? result + "B-Soc" : result + "/Soc"
            breadthCount++;
        }
        designationString.replace("Social Sci", "");
        if (designationString.includes("Sci")){
            result = breadthCount == 0 ? result + "B-Sci" : result + "/Sci"
            breadthCount++;
        }
    }
    
    return result;
}

export {BASE_URL, BASE_OUTLINE_URL, parseInput, getWQBDesignation};