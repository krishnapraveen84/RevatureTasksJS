//1.- Create a JavaScript program that manages a simple student information system. The program should have the following functionalities:
// Create an object called student with the following properties:
// Name (string)
// Age (number)
// Grade (string)
// Implement a method within the student object called displayInfo that displays the student's name, age, and grade.
// Prompt the user to enter the student's name, age, and grade, and store the values in the student object.
// Call the displayInfo method to display the student's information.
class Student {
    constructor(name, age, grade){
        this.Name = name,
        this.Age = age,
        this.Grade = grade 
    }
    displayInfo = () => {
        console.log(`Name: ${this.Name}`)
        console.log(`Age: ${this.Age}`)
        console.log(`Grade: ${this.Grade}`)
    }
}
let userName = prompt("Please enter Name:");
let age = prompt("Please enter Age:");
let grade = prompt("Please enter your Grade:");


let obj = new Student(userName, age, grade)

obj.displayInfo()