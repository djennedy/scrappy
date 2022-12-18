import { BASE_URL, BASE_OUTLINE_URL , parseInput, getWQBDesignation} from "./commonFunctions.js";

// Term info class, contains information for term info cards
class TermInfo {
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
        this.link = `${BASE_OUTLINE_URL}/${outlinePath}`
    }
}

const getDepartmentListFromTerm = async (year, term) => {
    let url = `${BASE_URL}${year}/${term}/`;
    return await fetch(url)
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

const getCourseListFromDepartment = async (department, year, term) => {
    let url = `${BASE_URL}${year}/${term}/${department}`;
    let resultJson = await fetch(url)
        .then(response => response.json())
    if (!resultJson.hasOwnProperty("errorMessage")) {
        resultJson.map((course) => course["dept"] = department);
    }
    return resultJson;
}

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

const getTermInfoFromCourseSection = async (courseSection, courseNumber, department, year, term) => {
    let url = `${BASE_URL}${year}/${term}/${department}/${courseNumber}/${courseSection}`;
    return await fetch(url)
        .then(response => response.json())
        .then(result => new TermInfo(
            department, // course department eg: CMPT
            courseNumber, // course number eg: 120
            result["info"]["specialTopic"].length!=0 ?                // if the course has a special topic, use that as the course name
                result["info"]["specialTopic"] : result["info"]["title"],   // Else, use the regular course name, eg: Introduction to Computer Science and Programming I
            courseSection, // course section, eg: D100
            result.hasOwnProperty("instructor") ?
                result["instructor"][0]["firstName"] + " " + result["instructor"][0]["lastName"] : "", // instructor full name, eg: Angelica Lim TODO: What to do with multiple instructors?
            result.hasOwnProperty("courseSchedule") && result["courseSchedule"][0].hasOwnProperty("campus") ?
                result["courseSchedule"][0]["campus"] : "", // campus, eg: Burnaby
            getWQBDesignation(result["info"]["designation"]), // WQB, eg: W, Q, B-Hum/Soc/Sci
            result["info"]["units"], // Credits, eg: 3
            result["info"]["term"], // Term, eg: Spring 2023
            result["info"]["outlinePath"] // URL to outline, eg: "2023/spring/math/795/g100"
        ))
}

// Retrieves all courses in a given subject and term 
// IMPORTANT NOTE: This function cascades errors, please do error handling when calling this function with a .catch block
// Input: string of term + year (eg: "Spring 2023", "2022 Fall"), list of departments to search (eg: "IAT", "cmpt")
// Output: A promise of lists containing information for term cards in the term page
const getTermInfo = async (termString, deptList) => {
    let [term, year] = parseInput(termString);

    getDepartmentListFromTerm(year, term).catch(error => {console.log(error); throw error}) // Checking for wrong year/term
    
    return await Promise.all(deptList.map(dept => getCourseListFromDepartment(dept, year, term)))
        .then(coursesByDept => Promise.all(coursesByDept.filter(courses => Array.isArray(courses)).flat(1)
            .map(course => getCourseSectionListFromCourseNum(course["value"], course["dept"], year, term))))
        .then(courseSectionsByNumber => Promise.all(courseSectionsByNumber.flat(1).filter(courseSection => courseSection["classType"] == 'e')
            .map(courseSection => getTermInfoFromCourseSection(courseSection["value"], courseSection["number"], courseSection["dept"], year, term ))))
        .catch(error => {console.log(error.message); throw error})
}

export {TermInfo, getTermInfo}