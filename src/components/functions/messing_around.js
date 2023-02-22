import { BASE_URL, BASE_OUTLINE_URL , parseInput, getCourseListFromDepartment, getDepartmentListFromTerm, getDepartmentListFromTerm, getWQBDesignation, getCourseSectionListFromCourseNum} from "./commonFunctions.js";

let yearList = ["2021", "2022"];
let termList = ["Spring", "Summer", "Fall"];


yearList.forEach(year => termList.forEach( term => getDepartmentListFromTerm(year, term)
        .then(deptList => deptList.map(dept => getCourseListFromDepartment(dept["value"], year, term)))
        .then(coursesByDept => Promise.all(coursesByDept.filter(courses => Array.isArray(courses)).flat(1)
            .map(course => getCourseSectionListFromCourseNum(course["value"], course["dept"], year, term))))
        .then(courseSectionsByNumber => Promise.all(courseSectionsByNumber.flat(1).filter(courseSection => courseSection["classType"] == 'e')
            .map(courseSection => getTermInfoFromCourseSection(courseSection["value"], courseSection["number"], courseSection["dept"], year, term ))))));

yearList.forEach(year => termList.forEach( term => getDepartmentListFromTerm(year, term)
    .then(deptList => Promise.all(deptList.map(dept => getCourseListFromDepartment(dept["value"], year, term))))
    .then(coursesByDept => Promise.all(coursesByDept.filter(courses => Array.isArray(courses)).flat(1)
        .map(course => getCourseSectionListFromCourseNumber(course["value"], course["dept"], year, term))))
    .then(courseSectionsByNumber => console.log(courseSectionsByNumber))))

yearList.map(year => termList.map( term => Promise.all(getDepartmentListFromTerm(year, term))
    .then(deptList =>
        deptList.map(dept => Promise.all(getCourseListFromDepartment(dept, year, term)))
                .then(coursesByDept => Promise.all(coursesByDept.filter(courses => Array.isArray(courses)).flat(1)
                    .map(course => getCourseSectionListFromCourseNum(course["value"], course["dept"], year, term))))
                .then(courseSectionsByNumber => Promise.all(courseSectionsByNumber.flat(1).filter(courseSection => courseSection["classType"] == 'e')
                    .map(courseSection => getTermInfoFromCourseSection(courseSection["value"], courseSection["number"], courseSection["dept"], year, term ))))
                .catch(error => {console.log(error.message); throw error}))))

        