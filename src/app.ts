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

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);

    //this check runs at the runtime by javascript
    // if(typeof emp === 'object'){}

    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp){
        console.log("Start Date: " + emp.startDate)
    }

  
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date()});

class Car {
    drive(){
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 =new Car();
const v2 =new Truck();

function useVehicle(vehicle: Vehicle){
    
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000);
    // }
    //class type guard, if something exist before to use it
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);