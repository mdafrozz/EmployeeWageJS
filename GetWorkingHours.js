/*
 * UC3 Refactor: Get working hours using functions
 */
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

/*
 * UC4 Calculate monthly wages
 */
 let totalEmpHrs = 0;
 for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
     let empCheck = Math.floor(Math.random() * 10) % 3;
     totalEmpHrs += getWorkingHours(empCheck);
 }
 
// let empCheck = Math.floor(Math.random() * 10) % 3;
// let empHrs = getWorkingHours(empCheck);
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log(" Emp Hour:" + empHrs + " Emp Wage: " + empWage);

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours:" + totalEmpHrs + " Employee Wage:" + empWage);