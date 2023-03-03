// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: 
["H", "e", "l", "l", "o", ", ", " ", "w", "o", "r", "l", "d", "!"]

// b) Verify and explain:

// splitting the string "Alpha 2023" into an array of individual characters and the logging that array to the console.
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student

// b) Verify and explain:
// the greeter function was used with a value as a name parameter, the function then returns the string. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:
// array.map() method was used to create the new array `multipliedByTwo` which is was the result of multiplying each element of the original array. 
// the code provided function is an arrow function `(number) => number * 2` which takes a single parameter `number` and return the value of ` number` multiplied by 2. 
// next the `map()` method applies the arrow function to each element of the original array where each element is twice the value of the corresponding element in the original array. 


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain:
// this code uses Array.filter() to create a new onlyOdds, containing only the odd numbers from the original array. 
// An arrow function is used to implement the test, which returns true if the number is odd and false if it is even. 
// The output is logged to the console using console.log().

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: the defines an object that can be used to represent a person's coding skills in various categories. 

// b) Verify and explain:
// the code defines an objects ` myCodingSkills` with four key-value pairs, where each key represents a category a category of coding skills and the value represents the corresponding skill(s) for the category. the first two arrays and the last two were strings values to be used to represent a person's coding skills in different categories. 