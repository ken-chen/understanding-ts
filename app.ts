function add(n1: number,n2: number){
    console.log(typeof number1 );
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Incorrect input!');
    }
    return n1 +n2;
}

const number1 ='5';
const numcer2 =2.8;

const result = add(number1,numcer2);
console.log(result)
