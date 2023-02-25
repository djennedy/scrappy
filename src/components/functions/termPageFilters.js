import { TermInfo } from "./termInfoFunctions";

/**
 * Function to filter a list of TermInfo objects according to it's level (100 level, 200 level, etc.)
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {number} level Course level to filter (100 level, 200 level, etc.)
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByLevel = (termInfoList, level) => {
    return termInfoList.filter(termInfo => termInfo.courseNumber >= level && termInfo.courseNumber < level+100);
}

/**
 * Function to filter a list of TermInfo objects according to it's instructor
 * Filters according to characters matched, so the input doesn't have to be the complete instructor name
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String} instructor Instructor name to filter (can be full instructor name or any string of characters that match the instructor name)
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByInstructor = (termInfoList, instructor) => {
    return termInfoList.filter(termInfo => termInfo.instructor.toLowerCase().includes(instructor.toLowerCase()));
}

/**
 * Function to filter a list of TermInfo objects according to it's campus
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String} campus Campus location to filter (eg: "Burnaby")
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByCampus = (termInfoList, campus) => {
    return termInfoList.filter(termInfo => termInfo.campus.toLowerCase() == campus.toLowerCase());
}

/**
 * Function to filter a list of TermInfo objects according to it's WQB designation
 * Note: Function assumes only one designation as input (eg: "B-Sci" will work but "Q/W/B-Sci" might not work)
 * In the term page, filter wqbs one by one
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter 
 * @param {String} wqb WQB designation to filter
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByWqb = (termInfoList, wqb) => {
    return termInfoList.filter(termInfo => termInfo.wqb.toLowerCase().includes(wqb.toLowerCase().replace(/b-/g, "")));
}

/**
 * Function to filter a list of TermInfo objects according to it's number of credits
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String} credits Number of credits to filter (eg: 3)
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByCredits = (termInfoList, credits) => {
    return termInfoList.filter(termInfo => termInfo.credits == credits);
}