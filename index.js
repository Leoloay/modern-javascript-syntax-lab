//Ex 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const numsBy2 = nums.map((num) => {
  return num * 2
})

console.log(numsBy2)

//Ex 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here

const [firstTopping, secondTopping] = pizzaToppings

console.log(firstTopping)
console.log(secondTopping)

//EX 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
}

// Your code here

const { make, model } = car

console.log(car.make)
console.log(car.model)

//Ex4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

//Already Declared
//const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here

const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)

//Ex5
// Duplicate the following object and spread its values into a new variable `myCar`.

// Already declared
// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car }
myCar.model = "q7"

console.log(car)
console.log(myCar)

//Ex6
// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const propertyName = "username"
const userProfile = {
  [propertyName]: "leoloay",
}

console.log(userProfile)

//Ex 7
//Done

//Ex 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

const nounAndAdj = (noun, adjective) => {
  return console.log(`The ${noun} is ${adjective}`)
}

nounAndAdj("cat", "white")

//Ex 9
// Convert the following `if...else` statement in to a ternary:

let pizza = "tasty"

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
let tastyOrNot = pizza === "tasty" ? "yum" : "yuck"

console.log(tastyOrNot)

//Ex 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || "en"

// Log the result
console.log("Language setting:", LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || "light"

// Log the result
console.log("User theme setting:", USER_THEME)

//Ex 11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: "Alice",
}

let cat = adventurer.cat?.age // Your code here

console.log(cat)
