class Department {

    // private id :string;
    // private name: string ;
    private employees: string[]=[];

    constructor(private id: string, public name: string){
        // this.name = n;
    }

    //private can apply to method

    //type safety
    describe(this:Department){
        console.log("Department: " + this.name);
        console.log(`Department (${this.id}): ${this.name}`)
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

const accounting = new Department("d1","Accounting");
// console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// accounting.employees[2] = 'Anna';

// accounting.name = "NEW NAME";

accounting.describe();
accounting.printEmployeeInformation();



// const accountingCopy = {name: 'DUMMY',describe: accounting.describe}
// accountingCopy.describe();