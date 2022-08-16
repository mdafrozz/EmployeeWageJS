const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

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

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC7 -Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs);
console.log("Daily wage array:" + empDailyWageArr);

//7A Calculate total wage using array forEach 
let totalWage = 0;
function sum(dailyWage) {
    totalWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("7A using forEach total wage is: " + totalWage);

//7A Calculate total wage using reduce method
function totalWages(sum, nextValue) {
    return sum + nextValue;
}
let sum1 = empDailyWageArr.reduce(totalWages, 0);
console.log("7A using reduce total wage is: " + sum1);

//7B show the day along with daily wage using ArrayMap
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return "Day" + dailyCounter + " = " + "wage" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("7B Daily wage using map : " + mapDayWithWageArr);

//7C Show days when full time wage of 160 were earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C Daily wage filter when fulltime wage is 160 earned: " + fullDayWageArr);

//7D find first occurence when full time wage earned using find function
let findFullTimeWage = mapDayWithWageArr.find(fullTimeWage);
console.log("7D First full time wage using find function " + findFullTimeWage);

//7E check if every element of full time wage is truely holding Full time wage
let isAllFullTimeWage = fullDayWageArr.every(fullTimeWage);
console.log("7E Check all elment having full time wage using every function : " + isAllFullTimeWage);

//7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
let anyPartTimeWage = mapDayWithWageArr.some(isAnyPartTimeWage);
console.log("7F Check if any part time wage using some function : " + anyPartTimeWage);

//7G Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
let numOfWorkingDays = empDailyWageArr.reduce(totalDaysWorked, 0);
console.log("7G Total number of days employee worked :" + numOfWorkingDays);



console.log("Store the day and daily wage:");
console.log(empDailyWageMap);

console.log("Total wage using reduce method :" + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

let totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);