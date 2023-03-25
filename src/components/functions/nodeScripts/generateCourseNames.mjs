import * as fs from "fs";

let generateCourseNames = async () => {
    fs.writeFile('./courseNames.txt', "", err => {
        if (err) {
          console.error(err);
        }
    });

    let courseMap = new Map();
    let regTermString = await getRegistrationTermString();
    let [endTermString, endYear] = parseInput(regTermString);
    let endTerm = Terms.stringToTerm(endTermString);
    console.log(endTerm);
    console.log(endYear);

    // Note: Change to STARTING_TERM and STARTING_YEAR later
    let iterateTerm = Terms.Spring;
    let iterateYear = 2023;
    let iterateTermString = iterateTerm.toString();

    while(true) {
        console.log(iterateTermString + " " + iterateYear);
        let deptList = await getDepartmentListFromTerm(iterateYear, iterateTermString);
        for (let dept of deptList) {
            let deptAsList = [dept.text];
            console.log("deptAsList: " + deptAsList[0]);
            let termInfoList = await getTermInfo(`${iterateTermString} ${iterateYear}`, deptAsList);
            for (let termInfo of termInfoList) {
                courseMap.set(termInfo.courseDept + " " + termInfo.courseNumber, "" + termInfo.courseName);
            }
            sleep(500);
        }

        console.log(courseMap);
        console.log(courseMap.size);

        if (iterateTerm == endTerm && iterateYear == endYear) {
          break;
        }

        iterateTerm = Terms.getNextTerm(iterateTerm);
        iterateTermString = iterateTerm.toString();
        if (iterateTerm == Terms.Spring) {
            iterateYear++;
        }
    }

    let sortedCourseMap = courseMap;

    sortedCourseMap = new Map([...sortedCourseMap].sort((a, b) => {
      let [aLetters, aDigits] = parseInput(a[0]);
      let [bLetters, bDigits] = parseInput(b[0]);

      if (aLetters === bLetters) {
        return 0;
      }

      return parseInt(aDigits) - parseInt(bDigits);
    }));

    sortedCourseMap = new Map([...sortedCourseMap].sort((a, b) => {
      let [aLetters, aDigits] = parseInput(a[0]);
      let [bLetters, bDigits] = parseInput(b[0]);

      return String(aLetters).localeCompare(bLetters);
    }))


    for (let [courseNumber, courseName] of sortedCourseMap.entries()) {
        let content = "\"" + courseNumber + " - " + courseName + "\"" + ", \n";

        fs.appendFile('./courseNames.txt', content, err => {
            if (err) {
                console.error(err);
            }
            // done!
        });
    }

    return courseMap;
}

//------------------------------------------------------
// Required modules from commonFunctions.js, termEnum.js, and termInfoFunctions.js
// Note: Will need to refactor all these functions to be .mjs functions so we can import to this script.
// Temporary fix is copy and pasting the modules needed below this line.

class Terms {
    static Spring = new Terms('spring');
    static Summer = new Terms('summer');
    static Fall = new Terms('fall');

    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    static stringToTerm(string){
        string = string.toLowerCase();
        switch(string) {
            case "spring":
                return this.Spring;
            case "summer":
                return this.Summer;
            case "fall":
                return this.Fall;
        }
    }

    static getTermFromMonth = (month) => {
        if (month <= 4) {
            return this.Spring; // Jan - Apr
        } else if (month > 4 && month <= 8) {
            return this.Summer // May - Aug
        } else if (month > 8 && month <= 12) {
            return this.Fall // Sept - Dec
        }
    }

    static getNextTerm = (term) => {
        switch (term) {
            case this.Spring:
                return this.Summer;
            case this.Summer:
                return this.Fall;
            case this.Fall:
                return this.Spring
            default:
                break;
        }
    }

    static getPrevTerm = (term) => {
        switch (term) {
            case this.Spring:
                return this.Fall;
            case this.Summer:
                return this.Spring;
            case this.Fall:
                return this.Summer;
            default:
                break;
        }
    }

    static getCurrentTerm = () => {
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth;

        return Terms.getTermFromMonth(currentMonth)
    }
}

const getRegistrationTermString = async () => {
    let urlString = `${BASE_URL}registration/registration/cmpt/120`;
    let courseSections = await fetch(urlString).then(response => response.json());
    let courseInfo = await fetch(urlString + '/' + courseSections[0]["value"]).then(response => response.json());
    return courseInfo["info"]["term"]
}

const STARTING_TERM = Terms.Summer;
const STARTING_YEAR = 2014;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/** Class representing term information, contains information for term info cards in term page */
class TermInfo {
    /**
     * Create a new TermInfo object
     * @param {string} courseDept Course Department, eg: CMPT
     * @param {string} courseNumber Course Number, eg: 120
     * @param {string} courseName Course Name , eg: Introduction to Computer Science and Programming
     * @param {string} courseSection Course Section, eg: D100
     * @param {string} instructor Full name of the first instructor for the course, eg: Hazra Imran
     * @param {string} campus Campus name, eg: Burnaby
     * @param {string} wqb WQB Designation, eg: B-Sci/Q
     * @param {string} credits Credit value of the course, eg: 3
     * @param {string} term Term which the course was offered, eg: Spring 2023
     * @param {string} outlinePath URL string of the link to the official SFU course outline, eg: http://www.sfu.ca/outlines.html?2023/spring/cmpt/120/d100
     */
    constructor(
      courseDept,
      courseNumber,
      courseName,
      courseSection,
      instructor,
      campus,
      wqb,
      credits,
      term,
      outlinePath
    ) {
      this.courseDept = courseDept;
      this.courseNumber = courseNumber;
      this.courseSection = courseSection;
      this.courseName = courseName;
      this.instructor = instructor;
      this.campus = campus;
      this.wqb = wqb;
      this.credits = credits;
      this.term = term;
      this.link = `${BASE_OUTLINE_URL}${outlinePath}`;
    }
  }
  
  const getDepartmentListFromTerm = async (year, term) => {
    let url = `${BASE_URL}${year}/${term}/`;
    return fetch(url).then((response) => {
      if (response.status == 404) {
        throw new Error("Error: Invalid year or term!");
      } else if (!response.ok) {
        throw new Error(
          "Error: Unable to process request, please try again later."
        );
      } else {
        return response.json();
      }
    });
  };
  
  const getCourseListFromDepartment = async (department, year, term) => {
    let url = `${BASE_URL}${year}/${term}/${department}`;
    let resultJson = await fetch(url).then((response) => response.json());
    if (!resultJson.hasOwnProperty("errorMessage")) {
      resultJson.map((course) => (course["dept"] = department));
    }
    return resultJson;
  };
  
  const getCourseSectionListFromCourseNum = async (
    courseNumber,
    department,
    year,
    term
  ) => {
    let url = `${BASE_URL}${year}/${term}/${department}/${courseNumber}`;
    let resultJson = await fetch(url).then((response) => response.json());
    if (!resultJson.hasOwnProperty("errorMessage")) {
      resultJson.map((section) => {
        section["dept"] = department;
        section["number"] = courseNumber;
      });
    }
    return resultJson;
  };
  
  const getTermInfoFromCourseSection = async (
    courseSection,
    courseNumber,
    department,
    year,
    term
  ) => {
    // Helper function to get course name from result
    // Returns the special topic name if it exists
    // If not, return the course name
    // Eg: For CMPT 419, it returns "Affective Programming" instead of "Special Topics in Artificial Intelligence"
    // Eg: For CMPT 120, it returns "Intro to Computer Science and Programming"
    const getCourseName = (courseSectionResult) => {
      return courseSectionResult["info"]["title"];
    };
  
    // Helper function to get the first instructor's name from the result
    // Returns full name if the name exists, else return empty string
    const getFirstInstructorName = (courseSectionResult) => {
      return courseSectionResult.hasOwnProperty("instructor")
        ? courseSectionResult["instructor"][0]["commonName"] +
            " " +
            courseSectionResult["instructor"][0]["lastName"]
        : "";
    };
  
    // Helper function to get the campus of the course
    // Returns campus location (Burnaby, Vancouver, or Surrey) if information is available, else return empty string
    const getCampus = (courseSectionResult) => {
      return courseSectionResult.hasOwnProperty("courseSchedule") &&
        courseSectionResult["courseSchedule"][0].hasOwnProperty("campus")
        ? courseSectionResult["courseSchedule"][0]["campus"]
        : "";
    };
  
    let url = `${BASE_URL}${year}/${term}/${department}/${courseNumber}/${courseSection}`;
    return fetch(url)
      .then((response) => response.json())
      .then(
        (result) =>
          new TermInfo(
            department, // course department eg: CMPT
            courseNumber, // course number eg: 120
            getCourseName(result), //  course name or special topic, eg: "Introduction to Computer Science and Programming" or "Affective Computing"
            courseSection, // course section, eg: D100
            getFirstInstructorName(result), // instructor full name, eg: Angelica Lim, shows the first instructor if there's multiple instructors
            getCampus(result), // campus, eg: Burnaby
            getWQBDesignation(result["info"]["designation"]), // WQB, eg: W, Q, B-Hum/Soc/Sci
            result["info"]["units"], // Credits, eg: 3
            result["info"]["term"], // Term, eg: Spring 2023
            result["info"]["outlinePath"] // URL to outline, eg: "2023/spring/math/795/g100"
          )
      );
  };

  const getDepartmentName = (termString)=>{
    let [term,year] = parseInput(termString)
    let url = `${BASE_URL}${year}/${term}`;
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            let departments = [];
            result.forEach(dept => departments.push(new Department(dept["text"], dept["value"], dept["name"])));
            return departments;
        })
}

/** 
 * Retrieves all courses in a given subject and term 
 * IMPORTANT NOTE: This function cascades errors, please do error handling when calling this function with a .catch block
 * @param {string} termString - string of term + year (eg: "Spring 2023", "2022 Fall")
 * @param {string[]} deptList - list of departments to search (eg: "IAT", "cmpt")
 * @returns {Promise<TermInfo[]>} A promise of lists containing information for term cards in the term page 
 */ 
const getTermInfo = async (termString, deptList) => {
  let [term, year] = parseInput(termString);

  getDepartmentListFromTerm(year, term).catch((error) => {
    console.log(error);
    throw error;
  }); // Checking for wrong year/term

  return Promise.all(
    deptList.map((dept) => getCourseListFromDepartment(dept, year, term))
  )
    .then((coursesByDept) =>
      Promise.all(
        coursesByDept
          .filter((courses) => Array.isArray(courses))
          .flat(1)
          .map((course) =>
            getCourseSectionListFromCourseNum(
              course["value"],
              course["dept"],
              year,
              term
            )
          )
      )
    )
    .then((courseSectionsByNumber) =>
      Promise.all(
        courseSectionsByNumber
          .flat(1)
          .filter((courseSection) => courseSection["classType"] == "e")
          .map((courseSection) =>
            getTermInfoFromCourseSection(
              courseSection["value"],
              courseSection["number"],
              courseSection["dept"],
              year,
              term
            )
          )
      )
    )
    .catch((error) => {
      console.log(error.message);
      throw error;
    });
};

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
  };

  if (designationString.includes("W")) {
    result = result + "W";
  }
  if (designationString.includes("Q")) {
    result = addCommaSpaceIfNeeded(designationString, result);
    result = result + "Q";
  }
  if (
    designationString.includes("Breadth-") ||
    designationString.includes("B-") ||
    designationString.includes("b-")
  ) {
    result = addCommaSpaceIfNeeded(designationString, result);
    let breadthCount = 0;
    if (designationString.includes("Hum")) {
      result = result + "B-Hum";
      breadthCount++;
    }
    if (designationString.includes("Soc")) {
      result = breadthCount == 0 ? result + "B-Soc" : result + "/Soc";
      breadthCount++;
    }
    designationString.replace("Social Sci", "");
    if (designationString.includes("Sci")) {
      result = breadthCount == 0 ? result + "B-Sci" : result + "/Sci";
      breadthCount++;
    }
  }

  return result;
};

//-----------------------------

generateCourseNames();