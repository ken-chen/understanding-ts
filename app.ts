function add(n1: number,n2: number, showResult: boolean, phrase: string){
    
    const result =n1 + n2;
    if(showResult){

        console.log(phrase + result)
    }else{
        return n1 +n2;
    }
   
}

const number1 = 5;
const numcer2 = 2.8;
const printResult = true;
const resultPhrae = 'Result is: ';

const result = add(number1,numcer2,printResult,resultPhrae);
console.log(result)
