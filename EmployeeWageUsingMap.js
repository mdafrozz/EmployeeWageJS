//UC8
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsArr = new Array();
let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let nonWorkingDays = new Array();

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
    let dailyWage = calculateDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageArr.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);

    empDailyHrsArr.push({
        day: totalWorkingDays,
        dailyHrs: empHrs,
        dailyWage: calculateDailyWage(empHrs)
    })
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC7 -Total Days:" + totalWorkingDays + "," + " Total Hours:" + totalEmpHrs);
console.log("Daily wage array:" + empDailyWageArr);

console.log("------------------UC7----------------");
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

console.log("------------------UC8----------------");
//UC8 Store the daily wage with the total wage
console.log("Store the day and daily wage:");
console.log(empDailyWageMap);

console.log("Total wage using reduce method :" + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

let totalWagesUsingMap = 0;
function totalWagesMap(dailyWage) {
    totalWagesUsingMap += dailyWage;
}
Array.from(empDailyWageMap.values()).map(totalWagesMap)
console.log("Total wage using map method :" + totalWagesUsingMap);

console.log("------------------UC9----------------");
//9A total wage and total hours worked
let findTotal = (totalWage, dailyWage) => {
    return totalWage += dailyWage;
}

console.log("Total Wage (Using Reduce) :"
    + Array.from(empDailyWageMap.values())
        .reduce(findTotal, 0));

console.log("Total Wage (Using Filter) :"
    + Array.from(empDailyWageMap.values())
        .filter(dailyWage => dailyWage > 0)
        .reduce((total, next) => total + next));

console.log("Total hours (Using Reduce):"
    + Array.from(empDailyHrsMap.values())
        .reduce(findTotal, 0));

console.log("Total hours (Using Filter): "
    + Array.from(empDailyHrsMap.values())
        .filter(dailyHrs => dailyHrs > 0)
        .reduce((total, next) => total + next));


//9B show full working days, part working days, no working days
empDailyHrsMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days :" + fullWorkingDays);
console.log("Part Working Days :" + partWorkingDays);
console.log("Non Working Days :" + nonWorkingDays);


console.log("------------------UC10----------------");
//UC 10 Store the day, hours worked and wage earned in single object
console.log("Day, Daily hours and wage using single object: ");
console.log(empDailyWageArr);

console.log("------------------UC11----------------");
//UC11A - Calculate total wage
let tolWage = empDailyHrsArr.reduce((tolWage, dailyWageAndHrsObj) => {
    return tolWage += dailyWageAndHrsObj.dailyWage;
}, 0)
console.log("Total Wage: " + tolWage);

//UC11B - Calculate total hours worked
let tolHrs = empDailyHrsArr.reduce((tolHrs, dailyWageAndHrsObj) => {
    return tolHrs += dailyWageAndHrsObj.dailyHrs;
}, 0)
console.log("Total Hours: " + tolHrs);

//UC11C - Calculate part working days
let partWorkingDay = empDailyHrsArr.map(dailyHrsAndWages => dailyHrsAndWages.PART_TIME_HOURS);
console.log("Part Working Days: " + partWorkingDay);