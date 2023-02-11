const BASE_URL = "https://www.sfu.ca/bin/wcm/course-outlines?";
const BASE_OUTLINE_URL = "https://www.sfu.ca/outlines.html?";
const BASE_CALENDAR_URL = "https://www.sfu.ca/students/calendar/";


/**
 * Gets a promise containing a list of department names ("CMPT". "IAT") from an input term
 * @param {string} year Year to search, eg: "2023"
 * @param {string} term Term to search, eg: "Spring"
 * @returns {Promise<JSON[]>} A promise containing a list of JSONs of the department names. Eg:
 * [
 *  ...
    {
      "text": "CMPT",
      "value": "cmpt",
      "name": "Computing Science"
    },
    ... 
  ] 
 */
const getDepartmentListFromTerm = async (year, term) => {
  let url = `${BASE_URL}${year}/${term}/`;
  return fetch(url)
      .then(response => {
          if (response.status == 404) {
              throw new Error ("Error: Invalid year or term!")
          } else if(!response.ok) {
              throw new Error("Error: Unable to process request, please try again later.")
          } else {
              return response.json();          
          }
      })
}

/**
 * Gets a promise containing a list of courses from the input department
 * @param {string} department Department to search, eg: "CMPT"
 * @param {string} year Year to search, eg: "2023"
 * @param {string} term Term to search, eg: "Spring"
 * @returns {Promise<JSON[]>} A promise containing a list of JSONs of courses. Eg:
 * [
    {
        "text": "105W",
        "value": "105w",
        "title": "Social Issues and Communication Strategies in Computing Science"
    },
    ...
  ]
 */
const getCourseListFromDepartment = async (department, year, term) => {
  let url = `${BASE_URL}${year}/${term}/${department}`;
  let resultJson = await fetch(url)
      .then(response => response.json())
  if (!resultJson.hasOwnProperty("errorMessage")) {
      resultJson.map((course) => course["dept"] = department);
  }
  return resultJson;
}

/**
 * Gets a promise containing a list of courses sections from the input course number
 * @param {string} courseNumber Course number to search, eg: "120"
 * @param {string} department Department to search, eg: "CMPT"
 * @param {string} year Year to search, eg: "2023"
 * @param {string} term Term to search, eg: "Spring"
 * @returns {Promise<JSON[]>} A promise containing a list of JSONs of course sections. Eg:
 * [
    {
        "text": "D100",
        "value": "d100",
        "title": "Introduction to Computing Science and Programming I",
        "classType": "e",
        "sectionCode": "LEC",
        "associatedClass": "1"
    }, 
    ...
  ]
 */
const getCourseSectionListFromCourseNum = async (courseNumber, department, year, term) => {
  let url = `${BASE_URL}${year}/${term}/${department}/${courseNumber}`;
  let resultJson = await fetch(url)
      .then(response => response.json())
  if (!resultJson.hasOwnProperty("errorMessage")) {
      resultJson.map(section => {
          section["dept"] = department;
          section["number"] = courseNumber;
      });
  }
  return resultJson;
}

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

export {BASE_URL,BASE_CALENDAR_URL, BASE_OUTLINE_URL, getCourseListFromDepartment, getDepartmentListFromTerm, getDepartmentListFromTerm,parseInput, getWQBDesignation};