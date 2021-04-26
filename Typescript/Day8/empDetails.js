"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var Department_1 = require("./Department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, role) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.dept = new Department_1.Department(role);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n        ------Employee Details------------\n            First name:: " + this.fname + "\n            Last Name :: " + this.lname + "\n            Salary    :: " + this.salary + "\n            Department :: " + this.dept.getRole() + "\n        ");
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
