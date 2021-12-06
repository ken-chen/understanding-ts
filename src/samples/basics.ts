function add(n1: number,n2: number, showResult: boolean, phrase: string){
    
    const result =n1 + n2;
    if(showResult){

        console.log(phrase + result);
        return;
    }else{
        return n1 +n2;
    }
   
}

let number1: number;
 number1 = 5;
const numcer2 = 2.8;
const printResult = true;
let resultPhrae = 'Result is: ';
// resultPhrae = 0;

const result = add(number1,numcer2,printResult,resultPhrae);
console.log(result)
