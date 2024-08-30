/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/defanging-an-ip-address/
* Category : Easy
*/

/**
 * @param {string} address
 * @return {string}
*/

const defangIPaddr = (address) => {
    
    // this variable now holds an array of integers
    address = address.split(".");

    // now we can chose whatever character to join the numbers with, in our case : [.]
    return address.join("[.]");
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));