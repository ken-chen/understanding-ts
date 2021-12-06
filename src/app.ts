class Department {

    // private readonly id :string;
    // private name: string ;
    protected employees: string[]=[];

    constructor(private readonly id: string, public name: string){
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
        //id is the readonly
        // this.id = "2";
        //change employees from private to protected 
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}



class ITDepartment extends Department {


    constructor(id:string, public admins:string[]){
        super(id,'IT');
    }
}

class AccountingDepartment extends Department{
    constructor(id:string, private reports:string[]){
        super(id,'Accounting');
    }

    addReport(text: string){
        this.reports.push(text);
    }
    printReport(){
        console.log(this.reports);
    }

    //override method
    addEmployee(name:string){
        if(name === 'Ken'){
            return;
        }

        this.employees.push(name);
    }

}

const accounting = new AccountingDepartment("d2",['Ken']);

accounting.addReport("Something went wrong...");
accounting.printReport();
console.log(accounting);

const it = new ITDepartment("d1",['Ken']);
// console.log(accounting);
it.addEmployee("Max");
it.addEmployee("Manu");
// accounting.employees[2] = 'Anna';

// accounting.name = "NEW NAME";

it.describe();
it.printEmployeeInformation();
console.log(it)



// const accountingCopy = {name: 'DUMMY',describe: accounting.describe}
// accountingCopy.describe();

