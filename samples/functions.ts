function add2(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult2(num: number): void {
  console.log("Result: " + num);
}

function printResult3(num: number): undefined {
  console.log("Result: " + num);
  return;
}

printResult2(add2(5, 12));
console.log(printResult2(add2(5, 12)));

let someValue: undefined;

let combineValues: (a:number, b:number) => number;
combineValues = add2;
// combineValues = printResult2;
// combineValues = 5;

console.log(combineValues(8,8));


function addAndHandle (n1: number, n2:number ,cb: (num:number)=>void){

    const result =n1 + n2;
    const value = cb(result);
    console.log("value is " + value);
}


addAndHandle(10,20,(result)=>{
    console.log(result);
    // return result;
})