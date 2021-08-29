class EmployeePayrollData{
    id;
    salary;

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){return this._name;}
    set name(name){this._name = name;}

    toString(){
        return "id = "+ this.id + ", name = "+ this.name +", salary = "+this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Arjun", 100);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Sai";
console.log(employeePayrollData.toString());