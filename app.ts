// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Ken Chen',
//     age: 38
// };

// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]

// } = {
//     name: 'Ken Chen',
//     age: 38,
//     hobbies: ['Sports','Cooking'],
//     role: [2,'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = "TEXT"};

const person = {
    name: 'Ken Chen',
    age: 38,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};


// person.role.push('admin');
// person.role[1] = 10;
// person.role = [ 0, 'aas', 'assa']

// let favoriteActivities: string[];

// favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
    // hobby.map() //error 
}

if( person.role === Role.AUTHOR){
    console.log("AUTHOR users");
}