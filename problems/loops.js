/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a while loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneWhileLoop(number) {
  let num = 1
  let newArray = []
  while (num <= number) {
    newArray.push(num)
    num += 1
  }
  return newArray
}

/**
 * Takes in a number and returns an array filled with all numbers from 1 to given number (inclusive).
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function oneTillDoneForLoop(number) {
  let newArray = []
    for (let num = 1; num <= number; num += 1) {
      newArray.push(num)
    }
  return newArray 
}

/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be a while loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroWhileLoop(number) {
  let newArray = []
  while (number > 0) {
    newArray.push(number)
    number -= 1
  }
  return newArray
}
/**
 * Takes in a number and returns an array filled with all numbers from number to 0 (exclusive)
 * Must be written with a for loop
 * @param {number}
 * @returns {number[]}
 */
function doneToZeroForLoop(number) {
  let newArray = []
  for (let i = number; i > 0; i -= 1) {
    newArray.push(i)
  }
  return newArray  
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a while loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddWhileLoop(max) {
  let i = 0
  let stringOfNumbers = []
  while (i <= max) {
    if (i % 2 === 0) {
      stringOfNumbers.push(`${i} is even`)
      i += 1
    }
    else {
      stringOfNumbers.push(`${i} is odd`)
      i += 1
    }
  }
  return stringOfNumbers
}

/**
 * Takes in the variable "max", and iterates over all numbers from 0 to "max".
 *  For each iteration, it will check if the current number is even or odd and add the result to a new array
 *  (e.g. "2 is even")
 * Must be done using a for loop

 * @param {number} max number
 * @returns {string[]} ["0 is even", "1 is odd", "2 is even", "3 is odd"] if max was 3
 */
function evenAndOddForLoop(max) {
let evenOddArray = []
  for (let i = 0; i <= max; i += 1) {
    if (i % 2 === 0) {
      evenOddArray.push(`${i} is even`)
    }
    else {
      evenOddArray.push(`${i} is odd`)
    }
  }
  return evenOddArray
}
/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a while loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9WhileLoop(x) {
  let i = 0
  let array = []
  while (i <= x) {
    array.push(i * 9)
    i +=1
  }
  return array
}
/**
 * Takes in the variable "x", and iterates over all numbers from 0 to "x".
 *  For each iteration, it will multiply the current number by 9 and store the result in an array.
 * Must be done using a for loop

 * @param {number} x number
 * @returns {number[]} [0, 9, 18, 27, 36, 45] if x was 5.
* 0 * 9 = 0
* 1 * 9 = 9
* 2 * 9 = 18
* 3 * 9 = 27
* 4 * 9 = 36
* 5 * 9 = 45
 */
function tillXTimes9ForLoop(x) {
  let array = []
  for (let i = 0; i <= x; i++) {
      array.push(i * 9)
  }
  return array
}
/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a while loop
 * @returns {number[]} [5, 15, 25, ..., 95]
 */
function endsWithFiveWhileLoop() {
  let i = 1
  let array = []
    while (i <= 100) {
      i += 1
      if (i % 10 === 5) {
        array.push(i)
      }
    }
  return array
}
/**
 * Returns an array with all the numbers that end in 5 from 1 to 100
* Must be done with a for loop
 * @returns {number[]} [5, 15, 25, ..., 95]

 */
function endsWithFiveForLoop() {
  let array = []
  for (let i = 1; i <= 100; i += 1) {
    if (i % 10 === 5) {
      array.push(i)
    }
  }
  return array
}
// Try refactoring the code above to increment your i by 10 and starting at 5.

// function endsWithFiveForLoop() {
//    let array = []
//    for (let i = 5; i <= 100; i += 10) {
//     array.push(i)
//    }
//    return array
// }

/**
 Without running/executing your code, how many times will the loop below run?
  Explain why.
 */
/*
let i = 5;

while (i > 3) {
    i += 1
}
*/
// Infinite Loop
/**
 * // Write your explanation here!
 *
 */
// Everytime i is incremented by 1, it will always be over 3 so the loop will continue to run.
 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.

 * @returns {Array} [1, 2, "Fizz", 4, "Buzz"... 98, "Fizz", "Buzz"]

 */
function fizzBuzzPart1() {
  let array = []
  for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0) {
      array.push('Fizz')
    }
    else if (i % 5 === 0) {
      array.push('Buzz')
    }
    else {
      array.push(i)
    }
  }
  return array
}
 /**
 * Returns an array with all the numbers from all the numbers from 1 to 100.
 * For numbers divisible by 3, add "Fizz" instead of the number into the array.
 * For numbers divisible by 5 (and not 3), add "Buzz" instead of the number into the array.
 * For numbers that are divisible by both 3 and 5 add "FizzBuzz" into the array.

 * @returns {Array}

 */
function fizzBuzzPart2() {
  let array = []
  for (let i = 1; i <= 100; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      array.push('FizzBuzz')
    }
    else if (i % 5 === 0) {
      array.push('Buzz')
    }
    else if (i % 3 === 0) {
      array.push('Fizz')
    }
    else {
      array.push(i)
    }
  }
  return array
}
/**
 * Takes in range (inclusive) and returns the sum of all numbers in that range.

 * @param {number} min number
 * @param {number} max number
 * @returns {number} sum all all numbers from min to max
 */
function rangeSum(min, max) {
  let sum = 0
  for (let i = min ;i <= max; i += 1) {
    sum += i
  }
  return sum
}

/**
 * Takes in range (inclusive) and returns an array in decreasing order of all odd numbers
 * in that range

 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} all odd numbers in range decreasing
 */
function rangeOdd(min, max) {
let array = []
  for (let i = max; i >= min; i -= 1) {
    if (i % 2 === 1) {
      array.push(i)
    }
  }
  return array
}
/**
 * Takes in range (inclusive) and returns an array in increasing order of every other element.


 * @param {number} min number
 * @param {number} max number
 * @returns {number[]} includes every other element
 */
function rangeEveryOther(min, max) {
let array = []
  for (i = min; i <= max; i += 2) {
    array.push(i)
  }
  return array
}

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a while loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 */
function containsWhileLoop(elements, target) {
  let i = 0
  while (i < elements.length) {
    if (elements[i] === target) {
      return true
    }
    i += 1
  }
  return false
}  

/**
 * Takes in an array and a target.
 * Determines whether or not that target exists in the array
 * Must be written with a for loop
 * Must NOT contain built in includes method.
 * @param {Array} elements
 * @param {number|string} target
 * @returns {boolean} true if the array contains our target, otherwise false
 * expect(containsForLoop([5, 2, 3, 5, 9], 3)).toBe(true)
 */
function containsForLoop(elements, target) {
  for (let i = 0; i < elements.length; i += 1) {
    
    if (elements[i] === target) {
      return true
    }
  }
  return false
} 
containsForLoop([5, 2, 3, 5, 9], 3)
/**
 * Takes in an array and a target.
 * Determines how many times the target exists in the array
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} number of occurances
 */
function targetCount(elements, target) {
  let i = 0
  let number = 0
  while (i < elements.length) {
    if (elements[i] === target) {
      number += 1
    }
    i += 1
  }
  return number
}
/**
 * Takes in an array and a target.
 * Determines the first index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method indexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} first index found.
 */
function firstIndexFound(elements, target) {
  let i = 0
  while (i < elements.length) {
    if (elements[i] === target) {
      return i
    }
    i += 1
  }
  return -1
}
/**
 * Takes in an array and a target.
 * Determines the last index that the target is found at.
 * If the target is not found it should return -1
 * NOT allowed to use built in method lastIndexOf
 * @param {Array} elements
 * @param {number|string} target
 * @returns {number} last index found.
 */
function lastIndexFound(elements, target) {
  let i = elements.length - 1
  while (i > 0) {
    if (elements[i] === target) {
      return i
    }
    i -= 1
  }
  return -1
}

/**
 * Takes in an array.
 * Returns a new array where each element has been multiplied by its index.
 * Exp: Input [2, 2, 2] Output: [0, 2, 4] because 0 * 2, 1 * 2, and 2 * 2
 * @param {number[]} elements
 * @returns {number[]}
 */
function timesIndex(elements) {
  let newArray = []
  i = 0
  while (i < elements.length) {
    let newNumber = i * elements[i]
    newArray.push(newNumber)
    i += 1
  }
  return newArray
}


/**
 * Takes in an array.
 * Returns a new array where each element is the cumulative sum so far.
 * Exp: Input [5, 2, 9] Output: [5, 7, 16] . 5 is the first element so added to 0.
 *  7 because 5 + 2 is 7
 * 16 because 7 + 9 is 16
 * @param {number[]} elements
 * @returns {number[]}
 */
function cumulativeSum(elements) {
  let newArray = []
  let i = 0
  let a = 0
  while (i < elements.length) {
    a += elements[i]
    newArray.push(a)
    i += 1
  }
  return newArray
}



module.exports = {
  oneTillDoneWhileLoop,
  oneTillDoneForLoop,
  doneToZeroWhileLoop,
  doneToZeroForLoop,
  evenAndOddWhileLoop,
  evenAndOddForLoop,
  tillXTimes9WhileLoop,
  tillXTimes9ForLoop,
  endsWithFiveWhileLoop,
  endsWithFiveForLoop,
  fizzBuzzPart1,
  fizzBuzzPart2,
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
