// Object-Oriented-Programming
// Class & Encapsulation
class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    displayInfo = () => {
        console.log(`Name : ${this.name}`)
    }
}

const personObj = new Person("Krishna", 22)
// personObj.displayInfo()

//Inheritance
// class Student extends Person{
//     constructor(name, age, rollNumber, grade){
//         super(name, age)
//         this.rollNumber = rollNumber,
//         this.marks = grade
//     }
// }

// console.log(studentObj);

//Polymorphism using method Overriding
class Student extends Person{
    constructor(name, age, rollNumber, grade){
        super(name, age)
        this.rollNumber = rollNumber,
        this.grade = grade
    }
    //same method that used in parent calss is overraided here
    displayInfo = () => {
        console.log(`Student Name: ${this.name} // Grade: ${this.grade}`)
    }
}
const studentObj = new Student("Manikanta", 24, 86, 8.5)
studentObj.displayInfo()

//Abstraction 
class PersonBankAcc{
    constructor(name="Krishna", pincode="54542", balance = 0){
        this.name = name,
        this._pincode = pincode
        this._balance = balance
    }
    deposite = (ammount) => {
        this._balance += ammount
        console.log(`Balance: ${this._balance} r/s`)
    }
    credit = (ammount) => {
        if (this._balance < ammount){
            console.log("Insufficient balance !")
        }
        else{
            this._balance -= ammount
            console.log(`Remaining Balance: ${this._balance} r/s`)
        }
    }
    displayBalance = () => {
        console.log(`Balance: ${this._balance} r/s`)
    }
}
const myAccount = new PersonBankAcc()
myAccount.deposite(1000)
// myAccount.credit(100)
// myAccount.credit(900)
myAccount.displayBalance()