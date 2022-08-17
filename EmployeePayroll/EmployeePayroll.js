class EmployeePayroll {

    id;
    salary;

    //constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }
}
let employeePayroll = new EmployeePayroll(1, "Ashok", 20000);
console.log(employeePayroll);
employeePayroll.name = "Koda Ashok";
console.log(employeePayroll.toString());