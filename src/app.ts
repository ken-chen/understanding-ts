abstract class Department {

    static fiscalYear =2020;
    // private readonly id :string;
    // private name: string ;
    protected employees: string[]=[];

    constructor(protected readonly id: string, public name: string){
        // this.name = n;

        //can not access the static properties in constructor
        // console.log(this.fiscalYear)
        console.log(Department.fiscalYear)
    }

    static createEmployee(name:string){
        return {name: name};
    }
    //private can apply to method

    //type safety
    abstract describe(this:Department):void
        // console.log("Department: " + this.name);
        // console.log(`Department (${this.id}): ${this.name}`)
    

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

    describe(){
        console.log("IT Department - ID: " + this.id)
    }
}

class AccountingDepartment extends Department{
    private lastReport:string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        
        throw new Error("No report found.")
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a vaild value!');
        }

        this.addReport(value);
    }

    constructor(id:string, private reports:string[]){
        super(id,'Accounting');
        this.lastReport = reports[0];
    }

    describe(){
        console.log('Accounting Department -ID: ' + this.id)
    }
    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
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

const accounting = new AccountingDepartment("d2",[]);
// console.log("***********mostre: " + accounting.mostRecentReport);
accounting.addReport("Something went wrong...");
accounting.describe();
//set just access property
accounting.mostRecentReport = "Year End Report";
//get just access like normal property
console.log("***********mostre: " + accounting.mostRecentReport);

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

//static method and property
// Math.PI

//statuc class direct call without the new keyword
const employee1 = Department.createEmployee('Ken');
console.log(employee1, Department.fiscalYear)