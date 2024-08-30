/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
* Category : Easy
*/ 

/**
 * @param {string[]} operations
 * @return {number}
*/

const finalValueAfterOperations = () => {
    
    // initial value
    let result = 0;
    
    // performing operations until there are none left
    for(let i = 0;i<operations.length;i++){
        if(operations[i] == "++X" || operations[i] == "X++"){
            result += 1;
        }else if(operations[i] == "--X" || operations[i] == "X--"){
            result -= 1;
        }else
            break;
    }
    return result;

};