const userNam2 = 'Ken2';

console.log(userNam2)
//tsc app.ts -w
//tsc app.ts --watch

//tsc --init
//tsc
//tsc -w

let logged;

function sendAnalytics (data:string){
    console.log(data);
    logged = true;
    logged = 'Ken';
    console.log(logged)
}

sendAnalytics("The data")

const button = document.querySelector('button')!;

function clickHandler(message: string){
    console.log("Clicked!" + message)
}

if (button){
    button.addEventListener('click', clickHandler.bind(null, "Your are welcome"));
}


function add3(n1:number, n2:number){
    
    if(n1+n2>0){
        return n1+n2;
    }

    return;
    
}