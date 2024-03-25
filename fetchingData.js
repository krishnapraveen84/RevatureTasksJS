// Fetching Data using the Async and Await Methods
//Using .then method
// let displayData = (data) => console.log(data.data) 
// fetch("https://gorest.co.in/public-api/users")
//     .then((response) =>  response.json())
//     .then((jsonData =>  displayData(jsonData)))
// //using Async and await
fetch("https://gorest.co.in/public-api/users")
let getData = async () => {
    let response = await fetch("https://gorest.co.in/public-api/users")
    let data = await response.json()
    console.log(data.data)
}
getData()