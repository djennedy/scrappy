import { BASE_CALENDAR_URL } from "./commonFunctions";

/**
 * Function to get the link to SFU's area of study page.
 * Not linking to the final page since it's not as trivially programmable
 * @param {Number} year Number containing the user's year of enrollment // eg: 2019
 * @param {String} term String containing the user's term of enrollment // eg: Fall
 * @param {String} areaOfStudy String containing the user's current area or study  // eg: Computing Science
 * @returns {String} URL of the Area of Study Page. User then go to their requirements page from there.
 */
export const getAreaOfStudyPage = (year, term, areaOfStudy) => {
    term = term.toLowerCase();
    areaOfStudy = areaOfStudy.toLowerCase().replace(" ", "-").replace("(", "").replace(")", "").replace(",", "").replace("'", "");
    return `${BASE_CALENDAR_URL}/${year}/${term}/areas-of-study/${areaOfStudy}.html`;
}

export function generateYearArray() {
    const currentYear = new Date().getFullYear();
    const startYear = 2014;
    const years = [];
  
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year.toString());
    }
  
    return years;
  }

export const semesters = [
    'fall',
    'spring',
    'summer',
]

export const programs = [
    'Actuarial Science',
    'African Studies',
    'Anthropology',
    'Applied Physics',
    'Archaeology',
    'Art, Performance and Cinema Studies',
    'Arts Education',
    'Behavioural Neuroscience',
    'Biological Physics',
    'Biological Sciences (Biology)',
    'Biomedical Physiology',
    'Business',
    'Chemistry',
    'Cognitive Science',
    'Communication',
    'Computing Science',
    'Contemporary Arts',
    'Corporate Environmental and Social Sustainability',
    'Counselling Psychology',
    'Counselling and Human Development',
    'Creative Technologies in Digital Journalism',
    'Criminology',
    'Curriculum and Instruction',
    'Dance',
    'Data Science',
    'Dialogue',
    'Digital Media',
    'Early Learning',
    'Earth Sciences',
    'Ecological Restoration',
    'Economics',
    'Education',
    'Educational Leadership',
    'Educational Psychology',
    'Educational Technology and Learning Design',
    'Educational Theory and Practice',
    'Engineering Science',
    'English',
    'English as a Second Language',
    'Environment',
    'Environmental Education',
    'Environmental Science',
    'Film',
    'First Year Programs',
    'French',
    'French Cohort Program in Public and International Affairs',
    'French Education',
    "Gender, Sexuality, and Women's Studies",
    'General Studies',
    'Geographic Information Science',
    'Geography',
    'Gerontology',
    'Global Asia',
    'Global Humanities',
    'Health Sciences',
    'Hellenic Studies',
    'History',
    'Indigenous Languages',
    'Indigenous Studies',
    'Individualized Interdisciplinary Studies',
    'Interactive Arts and Technology',
    'International Studies',
    'Italian Studies',
    'Kinesiology',
    'Labour Studies',
    'Languages',
    'Latin American Studies',
    'Liberal Arts',
    'Liberal Studies',
    'Linguistics',
    'Mathematics',
    'Mathematics Education',
    'Mechatronic Systems Engineering',
    'Molecular Biology and Biochemistry',
    'Music and Sound',
    'Nuclear Science',
    'Operations Research',
    'Philosophy',
    'Physical Geography',
    'Physics',
    'Political Science',
    'Professional Programs',
    'Psychology',
    'Public Health',
    'Public Policy',
    'Publishing',
    'Religious Studies',
    'Resource and Environmental Management',
    'Science, General',
    'Secondary Teaching',
    'Semester in Dialogue',
    'Seniors',
    'Social Data Analytics',
    'Social Justice',
    'Sociology',
    'Statistics',
    'Sustainable Development',
    'Sustainable Energy Engineering',
    'Theatre',
    'Urban Studies',
    'Visual Art',
    'World Literature',
    'Writing',
]