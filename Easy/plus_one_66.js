/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/plus-one/
* Category : Easy
*/ 

/**
 * @param {number[]} digits
 * @return {number[]}
*/

const plusOne = (digits) => {
    // looping backwards through the array of digits
    for (let index = digits.length - 1; index >= 0; index--) {
        // adding 1 to the current digit
        digits[index] += 1;
        // check if the addition results in 10
        // if it does, set the current digit to 0 (carry)
        if (digits[index] === 10) {
            digits[index] = 0;
        } else {
            // if no carry is needed, return the result
            return digits;
        }
    }
    
    // if the program reaches this point, it means we had a carry all the way through
    // in cases like this : [9,9,9]
    // we add 1 to the very beginning of the array
    digits.unshift(1);

    return digits;
}

console.log(plusOne([1, 2, 3])); // Expected output: [1, 2, 4]
