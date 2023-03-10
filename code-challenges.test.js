// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.


// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo  Code:
// Placing an object as input and returns a boolean value indicating whether the number inside the object is evenly divisible by three or not.
//Using the % operator to compute the remainder of the number when divided by 3.
//This should return true if the remainder is 0, and false otherwise.

describe("diviThree", () => {
  return object.number % 3 === 0;    
})

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

expect(diviThree(object1)).toEqual("15 is divisible by three")
expect(diviThree(object2)).toEqual("0 is divisible by three")
expect(diviThree(object3)).toEqual("-7 is not divisible by three") 


// b) Create the function that makes the test pass.

const diviThree = () => {
    return object.number % 3 === 0; 
}

Const("15 is divisible by three", () => {
    return object1 = { number: 15 };
    expect(diviThree(object1)).toEqual("15 is divisible by three");
})
Const("0 is divisible by three", () => {
    return object2 = { number: 0 };
    expect(diviThree(object2)).toEqual("0 is divisible by three");
})
Const("-7 is divisible by three", () => {
    return object3 = { number: -7 };
    expect(diviThree(object3)).toEqual("-7 is not a divisible by three")
})


  console.log(diviThree(Object))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// Psuedo Code:
// Adding an array of words and returns a new array with all the words capitalized
// Using map() method to iterate over each word in the input array
// capitalizing the first letter using the toUpperCase() method and appends the remaining letters using the slice() method
// The toEqual() method is used to compare the two arrays element-wise



function capLocks (arr) {
    return arr.map(word => word.chartAt(0).toUpperCase() + word.slice(1))
}


// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const result1 = capLocks(randomNouns1);
expect(result1).toEqual(["streetlamp","potato", "teeth", "conclusion", "nephew"])

const result2 = capLocks(randomNouns2);
expect(result2).toEqual(["temperature", "database", "chopsticks", "mango"])

// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// Psuedo Code:
// Input: the function iterates of each character in the input string and checks whether it is a vowel. 
// If a vowel is found,will log the index of the first vowel and return it.
// If no vowels are found logs a message and return -1. 

// const firstVowel = (str) => {
//     const vowels = ["a", "e", "i", "o", "u"]
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             console.log(`The first vowel index is ${i}`);
//             return -1; 
//         }
//     }
// }

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstvowel", () => {
    test("should log the index of the first vowel in `learn`", () => {
        const result = firstVowel("learn"); 
        expect(result).toBe(1);
    
    });
    test("should log the index of the first vowel in `academy`", () => {
        const result = firstVowel("learnacademy"); 
        expect(result).toBe(o);
    });
    test("should log the index of the first vowel in `challenges`", () => {
        const result = firstVowel("challenges"); 
        expect(result).toBe(2);
    });


})


// b) Create the function that makes the test pass.

const firstVowel = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log(`The first vowel index is ${i}`);
            return -1; 
        }
    }
}
