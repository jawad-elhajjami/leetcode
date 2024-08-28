/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
* Category : Easy
*/ 


/**
 * @param {number[]} nums
 * @return {number[]}
*/

const findDisappearedNumbers = (nums) => {
    
    let result = [];

    for(let i=0;i<nums.length;i++){
        // find the index of each corresponding number in the array
        let index = Math.abs(nums[i]) - 1;
        // negate all the numbers at the corresponding indexes to mark them as visited
        nums[index] = -Math.abs(nums[index]);
    }


    // find the numbers that are still postitive (not visited)
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0){
            // push the disappeared number
            result.push(i + 1);
        }
    }
    return result;

}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))