interface Admin  {
    name: string;
    privileges: string[];
};

interface Employee  {
    name: string;
    startDate: Date;
};

//object type, combination of the object properties
interface ElevatedEmployee extends Employee, Admin{}

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

//union type, type stay in common
type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;


function add8(a: Combinable2, b:Combinable2){
    //type guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}