import { TermInfo } from "./termInfoFunctions";

const filterByLevel = (termInfoList, level) => {
    return termInfoList.filter(termInfo => termInfo.courseNumber.replace(/[^0-9]/g, '') >= level && termInfo.courseNumber.replace(/[^0-9]/g, '') < level+100);
}

/**
 * Function to filter a list of TermInfo objects according to it's level (100 level, 200 level, etc.)
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {number[]} levelList List of course levels to filter (100 level, 200 level, etc.). Pass in an empty list to not filter any courses
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByLevels = (termInfoList, levelList) => {
    if (levelList.length == 0) {
        return termInfoList;
    } else {
        return levelList.map(level => filterByLevel(termInfoList, level)).reduce((accum, currVal) => accum.concat(currVal), []);
    }
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
 * Function to filter a list of TermInfo objects according to its instructor
 * Filters according to characters matched, so the input doesn't have to be the complete instructor name
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String[]} instructors Instructor name to filter (can be full instructor name or any string of characters that match the instructor name)
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByInstructors = (termInfoList, instructors)=>{
    if(instructors.length === 0) return termInfoList;
    return termInfoList.filter(course => instructors.includes(course.instructor));
}

const filterByCampus = (termInfoList, campus) => {
    if (campus.toLowerCase() == "online") {
        return termInfoList.filter(termInfo => termInfo.courseSection.toLowerCase().includes("ol"));
    } else if (campus.toLowerCase() == "other") {
        return termInfoList.filter(termInfo => termInfo.campus.toLowerCase() != "burnaby" && termInfo.campus.toLowerCase() != "surrey" && termInfo.courseSection.toLowerCase().indexOf("ol") === -1);
    } else {
        return termInfoList.filter(termInfo => termInfo.campus.toLowerCase() == campus.toLowerCase());
    }
}

/**
 * Function to filter a list of TermInfo objects according to it's campus
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String[]} campusList List of campus locations to filter (eg: "Burnaby"). Pass in an empty list to not filter any courses
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByCampuses = (termInfoList, campusList) => {
    if (campusList.length == 0) {
        return termInfoList;
    }
    else {
        return campusList.map(campus => filterByCampus(termInfoList, campus)).reduce((accum, currVal) => accum.concat(currVal), []);
    }
}

const filterByWqb = (termInfoList, wqb) => {
    return termInfoList.filter(termInfo => termInfo.wqb.toLowerCase().includes(wqb.toLowerCase().replace(/b-/g, "")));
}

/**
 * Function to filter a list of TermInfo objects according to it's WQB designation
 * Note: Function assumes only one designation as input (eg: "B-Sci" will work but "Q/W/B-Sci" might not work)
 * In the term page, filter wqbs one by one
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter 
 * @param {String[]} wqbList List of WQB designations to filter. Pass in an empty list to not filter any courses
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByWqbs = (termInfoList, wqbList) => {
    if (wqbList.length == 0) {
        return termInfoList;
    } else {
        return [... new Set(wqbList.map(wqb => filterByWqb(termInfoList, wqb)).reduce((accum, currVal) => accum.concat(currVal), []))]; // Set notation removes duplicates
    }
}

/**
 * Function to filter a list of TermInfo objects according to it's number of credits
 * @param {TermInfo[]} termInfoList List of TermInfo objects to filter
 * @param {String} credits Number of credits to filter (eg: 3)
 * @returns {TermInfo[]} List of filtered TermInfo objects
 */
const filterByCredits = (termInfoList, credits) => {
    if(credits.length === 0){
        return termInfoList;
    }
    return termInfoList.filter(termInfo => termInfo.credits == credits);
}

export {filterByLevels, filterByCampuses, filterByWqbs, filterByInstructors, filterByCredits};