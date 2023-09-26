/*function users (Denis, Alex, Nikolay) {
    return 'Hello'
}


const result = users ()
console.log(result) */

/* const numbers = [1, 3, 6, 9, 10, 11, 15, 16, 18, 19, 20]

function test(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i])
        }
    }
} 
test(numbers) */

/* function sumNumbers(a, b, operator) { 
if (operator === '-') {
    return a - b
}
}

const result = sumNumbers(10, 2, '-')
console.log(result) */

function sumNumbers(a, b, operator) {
    if (operator === '+') {
        return a + b
    }
    else if (operator === '-') { return a - b }
    else if (operator === '*') { return a * b }
    else if (operator === '/') { return a / b }
}

const result = sumNumbers(10, 3, '*')
console.log(result)

