/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
* Category : Easy
*/ 

/**
 * @param {number} celsius
 * @return {number[]}
*/

const convertTemperature = (celsius) => {
    let f = celsius * 1.80 + 32.00;
    let k = celsius + 273.15;
    return [k,f];
};

console.log(convertTemperature(36.50));