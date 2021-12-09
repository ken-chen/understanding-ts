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

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

interface Horse{
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;

    switch (animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;

    console.log('Moving at speed ' + speed);      

    }

    if ('flyingSpeed' in animal){
        console.log('Moving with speed: ' + animal.flyingSpeed);
    } 

}

moveAnimal({type:"bird", flyingSpeed: 10});

const paragraph = document.querySelector('p');
const paragraph2 = document.getElementById('message-output');

//!not null
//as type casting
//<> used in react , can conflict
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;

const userInputElement3 = document.getElementById('user-input');

if(userInputElement3){
    (userInputElement3 as HTMLInputElement).value = "Hihi";
}

userInputElement.value = 'Hi there!';