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