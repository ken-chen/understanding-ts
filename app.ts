// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Ken Chen',
//     age: 38
// };

const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]

} = {
    name: 'Ken Chen',
    age: 38,
    hobbies: ['Sports','Cooking'],
    role: [2,'author']
};

person.role.push('admin');
// person.role[1] = 10;
// person.role = [ 0, 'aas', 'assa']

let favoriteActivities: string[];

favoriteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.role){
    console.log(hobby);
    // hobby.map() //error 
}