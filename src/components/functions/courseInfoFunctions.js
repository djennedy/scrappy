import { Terms, STARTING_TERM, STARTING_YEAR} from "./termEnum";
import { BASE_URL, BASE_OUTLINE_URL, BASE_CALENDAR_URL, parseInput, getWQBDesignation, getRegistrationTermString } from "./commonFunctions";

/** Class representing course outline information for course page */
class CourseInfo {
    /**
     * Create a CourseInfo object
     * @param {string} term Term string of the course. Usually contains the upcoming registration term. Eg: Spring 2023
     * @param {boolean} isInRegistrationTerm True if in current registration term, false otherwise
     * @param {string} courseNumber Course identifier, eg: CMPT 120
     * @param {string} courseName Name of the course, eg: Introduction to Computer Science and Programming 
     * @param {string} credits Number of credits given for the course, eg: 3
     * @param {string} wqb WQB Designation of the course, eg: Q, B-Sci
     * @param {string} calendarDescription Calendar description of the course, eg: "An elementary introduction to ... "
     * @param {string} prerequisites Prerequisites of the course, eg: BC Math 12 or equivalent is recommended.
     * @param {SectionSpecificInfo} sectionSpecificInfo SectionSpecificInfo object which contains Course Detail, Educational Goals (if available), Required Reading, Materials, and Grading. Class definition below
     * @param {InstructorCardInfo[]} instructorsCards List of InstructorCardInfo objects which contains Course Section, List of all instructors teaching the course, and List of course times. Class definition below
     * @param {PreviousSemestersCardInfo[]} previousSemestersCards List of PreviousSemestersCardInfo objects which contains the Term, List of InstructorCampus objects (to pair instructor to campus), and Link to official outline. Class definition below
     */
    constructor(
        term, // term string, eg: Spring 2023
        isInRegistrationTerm, // True if in current registration term, false otherwise
        courseNumber, // eg: CMPT 120
        courseName, // eg: Introduction to Computer Science and Programming 
        credits, // eg: 3
        wqb, // eg: B-Sci/Soc
        calendarDescription, // eg: "An elementary introduction to ... "
        prerequisites, // eg: BC Math 12 or equivalent is recommended.
        sectionSpecificInfo, // Contains Course Detail, Educational Goals (if available), Materials & Supplies, and Grading
        instructorsCards, 
        previousSemestersCards,
    ) {
        this.term = term;
        this.isInRegistrationTerm = isInRegistrationTerm;
        this.courseNumber = courseNumber;
        this.courseName = courseName;
        this.credits = credits;
        this.wqb = wqb;
        this.calendarDescription = calendarDescription;
        this.prerequisites = prerequisites;
        this.sectionSpecificInfo = sectionSpecificInfo;
        this.instructorsCards = instructorsCards;
        this.previousSemestersCards = previousSemestersCards;
    };
}

/** 
 * Class to represent SFU API's Grades block. Refer to http://www.sfu.ca/outlines/help/api.html for details
 * Note: This class exists for documentation purposes. In practice, we're using the identical Object the response gives us.
*/
class GradingScheme{
    /**
     * Creates a new GradingScheme object
     * @param {string} description Grading item. Eg: "Assignments"
     * @param {string} weight 	Weight alloted (in percentage) to that item. Eg: "40%"
     */
    constructor(
        description,
        weight
    ) {
        this.description = description;
        this.weight = weight;
    }
}

/** Class to respresent information that can differ per section */
class SectionSpecificInfo {
    /**
     * Creates a SectionSpecificInfo Object
     * @param {string} courseSection Course Section, eg: D100
     * @param {string} courseDetail Course Details, eg: "This is a course that will lay ... "
     * @param {string} educationalGoals Educational goals, eg: "<ol>\r\n<li>Explore the role and influence ... "
     * @param {string} requiredReadings Required text, eg:  "Course readings will be available digitally through Canvas."
     * @param {string} materialSupplies Materials and supplies, eg: "<p>For this term you will need access to:"
     * @param {GradingScheme[]} gradingSchemesList List of GradingScheme objects which contains description and weight of grading.
     * @param {string} gradingNotes Grading Notes, must be grouped with the grading scheme in the course page. Eg: "<p class=\"list-heading\">This course uses the ... "
     * @param {string} outlineLink Link to SFU's official course outline
     */
    constructor(
        courseSection,
        courseDetail,
        educationalGoals,
        requiredReadings,
        materialSupplies,
        gradingSchemesList,
        gradingNotes,
        outlineLink
    ) {
        this.courseSection = courseSection;
        this.courseDetail = courseDetail;
        this.educationalGoals = educationalGoals;
        this.requiredReadings = requiredReadings;
        this.materialSupplies = materialSupplies;
        this.gradingScehemesList = gradingSchemesList;
        this.gradingNotes = gradingNotes;
        this.outlineLink = outlineLink;
    }
}
/** Class to represent information located in Instructor Card Components */
class InstructorCardInfo {
    /**
     * Creates a new InstructorCardInfo object
     * @param {string} courseSection Course Section, eg: D100
     * @param {string[]} instructorList List of instructor names, eg: [Yagiz Aksoy, Xue Bin Jason Peng]
     * @param {string[]} timeLocationList List of time and location of the course, eg: [Mo 16:30 - 17:20 ... , Th 16:30 - 18:20 ...]
     */
    constructor(
        courseSection,
        instructorList,
        timeLocationList
    ) {
        this.courseSection = courseSection;
        this.instructorList = instructorList;
        this.timeLocationList = timeLocationList;
    }

    static parseInstructorList = (courseInfo) => {
        return courseInfo.hasOwnProperty("instructor") ? 
            courseInfo["instructor"].map(instructor => instructor["commonName"] + " " + instructor["lastName"]) : [];
    }

    static parseTimeLocationList = (courseInfo) => {
        return courseInfo.hasOwnProperty("courseSchedule") ?
            courseInfo["courseSchedule"].map(schedule => 
                schedule["days"] + " " + schedule["startTime"] + " - " + schedule["endTime"] + " " +
                schedule["buildingCode"] + schedule["roomNumber"] + ", " + schedule["campus"])
            : [];
    }
}

/**
 * Class to represent instructor-campus pairings. This will be used inside PreviousSemestersCardInfo
 */
class InstructorCampus{
    /**
     * Creates a InstructorCampus Object
     * @param {string} instructor Instructor common name + last name, eg: Hazra Imran
     * @param {string} campus Campus name, eg: Burnaby
     */
    constructor(
        instructor,
        campus
    ){
        this.instructor = instructor;
        this.campus = campus;
    }

    static getFromCourseInfo = (courseInfo) => {
        return new InstructorCampus(
            // If instructor exists, reduce the array of instructors to be "commonName1 lastName1 & commonName2 lastName2", else return empty string
            courseInfo.hasOwnProperty("instructor") ? 
                courseInfo["instructor"].reduce((acc, curr) => acc + " & " + curr["commonName"] + " " + curr["lastName"], "").slice(3) : "",
            // If campus exists, return the campus name as a string, eg: "Burnaby", else return empty string
            courseInfo.hasOwnProperty("courseSchedule") && courseInfo["courseSchedule"][0].hasOwnProperty("campus") ?
                courseInfo["courseSchedule"][0]["campus"] : ""
        );
    }
    
    static removeDuplicatesFromList = (instructorCampusList) => {
        let result = [];
        for (var i = 0; i < instructorCampusList.length; i++) {
            if (result.findIndex(e => e.instructor === instructorCampusList[i].instructor && e.campus === instructorCampusList[i].campus) == -1) {
                result.push(instructorCampusList[i]);
            }
        }
        return result;
    }
}

/**
 * Class to represent information located in Previous Semesters Card Components
 */
class PreviousSemestersCardInfo {
    /**
     * Create a PreviousSemestersCardInfo Object
     * @param {string} termString Term, eg: "Fall 2022"
     * @param {InstructorCampus[]} instructorCampusList List of InstructorCampus Object which represents instructor-campus pairings.
     * @param {string} outlineLink Link to the official SFU outline page. Eg: "http://www.sfu.ca/outlines.html?2022/fall/cmpt/120/d100
     */
    constructor(
        termString,
        instructorCampusList,
        outlineLink
    ) {
        this.termString = termString;
        this.instructorCampusList = instructorCampusList;
        this.outlineLink = outlineLink;
    }

    static getFromCourseInfoAndICList = (courseInfo, instructorCampusList) => {
        let [term, year] = parseInput(courseInfo["info"]["term"]);
        let [dept, number] = parseInput(courseInfo["info"]["name"].slice(0, -5));
        return new PreviousSemestersCardInfo(
            courseInfo["info"]["term"],
            InstructorCampus.removeDuplicatesFromList(instructorCampusList),
            `${BASE_CALENDAR_URL}${year}/${term}/courses/${dept}/${number}`
        )
    }
}

const getCourseInfoListFromSections = async (courseSectionJsons, urlString) => {
    let filteredCourseSections = courseSectionJsons.filter(courseSection => courseSection["classType"] == 'e'); // Filter out labs and tuiorials
    let courseSectionUrls = filteredCourseSections.map(courseSection => urlString + "/" + courseSection["value"]);
    return Promise.all(courseSectionUrls.map(url => fetch(url).then(response => response.json())));
}

const getPreviousSemestersInfos = async (currTermString, department, number) => {
    let [endTerm, endYear] = parseInput(currTermString);
    let iterateTerm = STARTING_TERM;
    let iterateYear = STARTING_YEAR;
    let result = [];
    
    while (iterateTerm != endTerm || iterateYear != endYear) {
        let urlString = `${BASE_URL}${iterateYear}/${iterateTerm}/${department}/${number}`;
        iterateTerm = Terms.getNextTerm(iterateTerm);
        if (iterateTerm == Terms.Spring) {
            iterateYear++;
        }
        let courseSectionsResponse  = await fetch(urlString);
        if (courseSectionsResponse.status == 404) {
            continue;
        }
        let courseSectionJsons = await courseSectionsResponse.json();
        
        let courseInfos = await getCourseInfoListFromSections(courseSectionJsons, urlString);
        let instructorCampusList = courseInfos.map(courseInfo => InstructorCampus.getFromCourseInfo(courseInfo));
        let previousSemesterCard = PreviousSemestersCardInfo.getFromCourseInfoAndICList(courseInfos[0], instructorCampusList);
        result.unshift(previousSemesterCard);
    }

    return result;
}

let getCourseInfoListFromLastOffering = async (year, term, department, number) => {
    let iterateTerm = Terms.stringToTerm(term);
    let iterateYear = year;

    while (iterateTerm != STARTING_TERM || iterateYear != STARTING_YEAR) {
        let urlString = `${BASE_URL}${iterateYear}/${iterateTerm}/${department}/${number}`;
        iterateTerm = Terms.getPrevTerm(iterateTerm);
        if (iterateTerm == Terms.Fall) {
            iterateYear--;
        }
        let courseSectionsResponse = await fetch(urlString);
        if (courseSectionsResponse.status == 404) {
            continue;
        } else if(!courseSectionsResponse.ok) {
            throw new Error("Error: Unable to process request, please try again later.")
        }
        let courseSectionJsons = await courseSectionsResponse.json();
        return getCourseInfoListFromSections(courseSectionJsons, urlString);
    }
    throw new Error("Error: Invalid Course Number!")
}

/**
 * Retrieves information required for the course page.
 * IMPORTANT NOTE: This function cascades errors, please do error handling when calling this function with a .catch block
 * @param {string} courseString User inputted course string. Eg: CMPT 120
 * @return {Promise<CourseInfo>} The course information for the given course
 */
const getCourseInfo = async (courseString) => {
    let [department, number] = parseInput(courseString);
    let registrationTermString = await getRegistrationTermString();
    let [registrationTerm, registrationYear] = parseInput(registrationTermString)
    let courseInfos = await getCourseInfoListFromLastOffering(registrationYear, registrationTerm, department, number);
    
    let term = courseInfos[0]["info"]["term"];
    let isInRegistrationTerm = term == registrationTermString;
    let courseNumber = courseInfos[0]["info"]["name"].slice(0, -5); // By default, API gives the dept + number + section. Slicing the string removes the section
    let courseName = courseInfos[0]["info"]["title"];
    let credits = courseInfos[0]["info"]["units"];
    let wqb = getWQBDesignation(courseInfos[0]["info"]["designation"]);
    let calendarDescription = courseInfos[0]["info"]["description"];
    let prerequisites = courseInfos[0]["info"]["prerequisites"];

    let sectionSpecificInfos = courseInfos.map(courseInfo => new SectionSpecificInfo(
        courseInfo["info"]["section"],
        courseInfo["info"]["courseDetails"],
        courseInfo["info"].hasOwnProperty("educationalGoals") ? courseInfo["info"]["educationalGoals"] : "",
        courseInfo.hasOwnProperty("requiredText") ? courseInfo["requiredText"]["details"] : "",
        courseInfo["info"].hasOwnProperty("materials") ? courseInfo["info"]["materials"] : "",
        courseInfo.hasOwnProperty("grades") ? courseInfo["grades"] : [],
        courseInfo["info"].hasOwnProperty("gradingNotes") ? courseInfo["info"]["gradingNotes"] : "",
        `${BASE_OUTLINE_URL}${courseInfo["info"]["outlinePath"]}`
        ));

    let instructorCards = courseInfos.map(courseInfo => new InstructorCardInfo(
        courseInfo["info"]["section"],
        InstructorCardInfo.parseInstructorList(courseInfo),
        InstructorCardInfo.parseTimeLocationList(courseInfo)
    ));

    let previousSemestersInfo = await getPreviousSemestersInfos(term, department, number);

    return new CourseInfo(
        term,
        isInRegistrationTerm,
        courseNumber,
        courseName,
        credits,
        wqb,
        calendarDescription,
        prerequisites,
        sectionSpecificInfos,
        instructorCards,
        previousSemestersInfo
    )
}

export {CourseInfo, GradingScheme, SectionSpecificInfo, InstructorCampus, InstructorCardInfo, PreviousSemestersCardInfo, getCourseInfo}
