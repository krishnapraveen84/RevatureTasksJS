const validator = require('validator');

//3. print the location of "my" in a string "I am enjoying my training".
const sentance = "I am enjoying my training".split(" ")
const target = 'my'
console.log(`Index of 'my' is: ${sentance.indexOf(target)}`)
// print the location of "m" in a string "I am enjoying my training".
const sentance2 = "I am enjoying my training"
const targ2 = 'm'
console.log(`Index of 'm' is: ${sentance2.indexOf(targ2)}`)
//-  extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable
let extractedStr = sentance2.slice(3, sentance2.length)
console.log(extractedStr);
//5. extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
let extractStr2 = sentance2.slice(0, 4)
console.log(extractStr2);
//6.replace "training" with "journey" in "I am enjoying my training". and store in a variable.
let extractStr3 = sentance2.replace('training', 'journey')
console.log(extractStr3);
//- 7. Print all the characters of a string using for loop.
//can use charAt() or str[];
for (let x in sentance2){
    console.log(sentance2.charAt(x))
    
}

// - 8. store string str="a,b,c" into an array.
const str="a,b,c" 
let arrayOfstrs = str.split(",")
console.log(arrayOfstrs);
 
// - 9. remove white spaces from the string str="abc     ".
const whiteSpaces = "   abc     "
console.log(whiteSpaces.trim(" ", ""))
 
// - 9. Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.
const str1 = "Hello"
const str2 = "Welcome!"
console.log(str1 +" ".concat(str2))
// 10. Remove 'e' from the following string:
// javascript
const str3 = "abcedgedcve";
console.log(str3.replace(/e/g, ""))
//11Convert the following string into an array:

const str4 = "Hello there I am jack";
console.log(str4.split(" "))
//12.Check if the given string is a palindrome or not:
const strp =  "racecar"
console.log(str === str.split().reverse().join())
//13 Write a function to check if a given string is a valid email address:
const email1 = "example@example.com";
const email2 = "invalid@email";
console.log(validator.isEmail(email2))
//14. Check if a string starts with a specific substring:
const str8 = "Hello World!";
const substr = "Hello";
console.log(str8.slice(0, substr.length) === substr)
//15. Find number 2 in the following array. 
//If 2 is present, print its index in the array. If 2 is not present, display the message "Element not found in array".
const arr = [1, 2, 3, 4, 5, 6];
if (arr.includes(2)){
    console.log(arr.indexOf(2));
}
else{
    console.log("Element not found in array")
}
//16. Remove "apple" from the following array:
const fruits = ["banana", "mango", "apple", "kiwi"];
const indexOfTarget = fruits.indexOf('apple')
fruits.splice(indexOfTarget, 1)
console.log(fruits)
//17. Reverse the order of the elements in the following array:
const numbers = [23, 45, 12, 67, 89, 34];
console.log(numbers.reverse())
//18. Find the maximum value in the following array:
const maxValue = numbers.sort((a, b) => b- a)[0]
console.log(maxValue)
//19.Create a function that takes an array of numbers and returns the second-largest number in the array:
const numbersArr = [10, 5, 8, 20, 15, 12];
const secondMaxValue = numbers.sort((a, b) => b - a)[1]
console.log(secondMaxValue)

//20.Create a function that takes an array of numbers and returns the sum of all even numbers in the array:
const numbersArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const sum = numbersArr2.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum);
//21.Create a students array which contains objects of students with properties name and age. Add 3 student objects to it.
class Student {
    constructor(name, age, grade){
        this.Name = name,
        this.Age = age
    }
}
let studentArr = [new Student("Krishna", 22), new Student('Mani', 24), new Student("Jyoti", 26)]
console.log(studentArr)
// 22. Check if the given year is leap or not
let isLeapYear = (year) => {
    if (year % 4 === 0){

        if (year % 100  === 0){
            if (year % 400 === 0){
                return true
            }
            return false

        }
        return true

    }
    return false
}
console.log(isLeapYear(2028) ? `Leap Year ${2028}`: 'Not a Leap Year' )
// 23.- Grade Calculation: 
//Write a JavaScript program that takes a student's numerical grade as input (ranging from 0 to 100) and outputs
// their corresponding letter grade based on the following scale:
// 90 or above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F
let gradeGenarator = (grade) => {
    if (grade >= 90){
        return "A"
    }
    else if (grade >= 80 && grade < 90){
        return "B"
    }
    else if (grade >= 70 && grade < 80){
        return "C"
    }
    else if (grade >= 60 && grade < 70){
        return "D"
    }
    else if (grade < 60 ){
        return "F"
    }
}
console.log(gradeGenarator(90))
//24. Calculator programme.
//  a. Take input from user which operation he wants to perform. ("sum", "minus", "Mul")
//  b. based on his input take the next 2 numbers.
//  c. to perform the operation use arrow function.
//     (for sum operation create a sum arrow function and pass 2 values to it form your main funciton and return the sum to your main function.
//      and then console log it.)
const mathCaculator = () => {
    const sum = (a, b) => a + b
    const minus = (a, b) => a - b
    const multiply = (a, b) => a * b
    return {sum, minus, multiply}
}

const innerFuncs = mathCaculator()

console.log(innerFuncs.sum(2, 5))
console.log(innerFuncs.minus(2, 5))
console.log(innerFuncs.multiply(2, 5))

//25. Write a function which take a number as argument and will print all the prime numbers from 2 to that given number.
const isPrimeNumber = (n) => {
    if (n === 0 || n === 1){
        return false
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}
const number = 15
for (let x = 0; x < number; x++){
    if (isPrimeNumber(x)){
        console.log(x)
    }
}
//26. Fibonacci Serires 
const genarateFibonacciSeries = (n) => {
    if (n === 0 || n === 1){
        return n
    }
    else{
        return genarateFibonacciSeries(n - 1) + genarateFibonacciSeries(n - 2)
    }
} 
let fibonacciSeries = ""
for (let x = 0; x < number; x++){
    fibonacciSeries += genarateFibonacciSeries(x) + " "
}
console.log(fibonacciSeries)