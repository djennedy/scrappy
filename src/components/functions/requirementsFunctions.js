import { BASE_CALENDAR_URL } from "./commonFunctions";

/**
 * Function to get the link to SFU's area of study page.
 * Not linking to the final page since it's not as trivially programmable
 * @param {Number} year Number containing the user's year of enrollment // eg: 2019
 * @param {String} term String containing the user's term of enrollment // eg: Fall
 * @param {String} areaOfStudy String containing the user's current area or study  // eg: Computing Science
 * @returns {String} URL of the Area of Study Page. User then go to their requirements page from there.
 */
const getAreaOfStudyPage = (year, term, areaOfStudy) => {
    term = term.toLowerCase();
    areaOfStudy = areaOfStudy.toLowerCase().replace(" ", "-");
    return `${BASE_CALENDAR_URL}/${year}/${term}/areas-of-study/${areaOfStudy}.html`;
}

export { getAreaOfStudyPage };