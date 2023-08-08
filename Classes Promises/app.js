// Exercise 1
// Created a class with properties name and age 
// Added a method called introduce
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hi, my name is ${this.name} and I am ${this.age} years old`
    }
    
}

// Exercise 2
// Created an object using Person class
// Created a function called describePerson that accept callback function as parameter
const person1 = new Person("Ayse", 30)
function describePerson(callback){
    return callback()
}


// Exercise 3
// Created a function that returns a promise 
const wait = (ms)=>{
    return new Promise(resolve=>{
        setTimeout(resolve, ms);
    })
}

// Exercise 4
// Created async function by using async keyword
// We waited for the time that is written as a parameter
// Return "Data recieved"
async function getData(){
    await wait(200);
    return `Data recieved.`
}

getData();

// Exercise 5
// Implemented the introduce method on person1 object
// Used the function we created called describePerson
// Created an async function, wait until getData finished,log the data to console 
console.log(person1.introduce());
describePerson(function () {
console.log(this.introduce());
}.bind(person1));
async function displayData(){
    const data = await getData();
    console.log(data);
}
displayData()
