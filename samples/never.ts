let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){
    userName = userInput;
}

//unknown is better than any

function generateError (message: string, code:number):never{
    throw {message: message, errorCode: code};
    // while(true){

    // }
}

generateError('An error occurred!' , 500);
console.log(generateError('An error occurred!' , 500))

// never never return anything