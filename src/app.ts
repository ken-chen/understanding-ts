class Department {
    public name: string ;
    private employees: string[]=[];

    constructor(n: string){
        this.name = n;
    }

    //private can apply to method

    //type safety
    describe(this:Department){
        console.log("Department: " + this.name);
    }

    addEmployee(employee: string){
        //validation here
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");
// console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.employees[2] = 'Anna';

accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformation();



// const accountingCopy = {name: 'DUMMY',describe: accounting.describe}
// accountingCopy.describe();