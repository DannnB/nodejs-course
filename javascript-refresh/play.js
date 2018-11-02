// const person = {
//     name: 'Dan',
//     age: 25,
//     greet() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// };


// const printName = ({ name, greet }) => {
//     console.log(name);
    
// }

// printName(person)


// const { name, age } = person
// console.log(name, age);

// const hobbies = ['Sports', 'Cooking', 1, true, {}, []];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for(let hobby of hobbies) {
// //     console.log(hobby);   
// // }

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);

// // const copiedArray = [...hobbies];
// // const copiedObject = {...person};

// // copiedObject.greet()

// // const toArray = (...args) => {
// //     return args;
// // }

// // console.log(toArray(1, 2, 3, 4, 5, 6));

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        },1500)
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2 + ' again!');
    });
}, 2000);

console.log('hello');


