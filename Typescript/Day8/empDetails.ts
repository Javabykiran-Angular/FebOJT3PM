
import {Employee} from './employee';
import {Department} from './Department';

export class EmployeeDetails implements Employee
{
    fname: string;
    lname: string;
    salary:number;
    dept:Department;

    constructor(fname:string,lname:string,
        salary:number,role:string)
        {
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        this.dept=new Department(role);
    }
  
    Display() {
        console.log(`
        ------Employee Details------------
            First name:: ${this.fname}
            Last Name :: ${this.lname}
            Salary    :: ${this.salary}
            Department :: ${this.dept.getRole()}
        `);
       
    }

}