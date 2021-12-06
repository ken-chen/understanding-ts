//this is a function
const add4 = (a: number , b: number) => {
    return a +b;
}

//omit {}, only for one expression
const add5 = (a: number , b: number = 1) =>  a +b;

console.log(add4(2,5));

const printOutput = (output: string | number) => console.log(output);

const printOutput2: (a: number | string )=> void = output => console.log(output);

const button2 = document.querySelector('button');

if(button2){
    //if you got No parameters, you HAVE TO use an empty pair of parentheses: ()=> {...}
    button2.addEventListener("click", event => console.log(event));
}

printOutput(add5(5))

const hobbies = ['Sports','Cooking']
console.log(hobbies[0])
const activeHobbies = ['Hiking']

activeHobbies.push(hobbies[0],hobbies[1]);
//equals to below
activeHobbies.push(...hobbies);

//spread operator, useful for pulling elements for the array
const activeHobbies2 = ['Hiking', ...hobbies]

const person2 = {
    name: 'Ken',
    age: 38
}; 

//copy the reference
const copiedPointPerson = person2;

//copy the object
const copiedPerson2= { ...person2};

//REST parameters ,tuple
const add6 = (...numbers : [number, number, number, number]) => {
    let result =0;
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    },0);
}

// REST number Array
const add7 = (...numbers : number[]) => {
    let result =0;
    return numbers.reduce((curResult, curValue)=>{
        return curResult + curValue;
    },0);
}


const addNumbers = add6(5,10, 2 ,3.7);
console.log(addNumbers)