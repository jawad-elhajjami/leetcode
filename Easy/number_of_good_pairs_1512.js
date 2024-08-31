/*
* Author : EL HAJJAMI Jawad 
* Problem URL : https://leetcode.com/problems/number-of-good-pairs
* Category : Easy
*/

/**
 * @param {number[]} nums
 * @return {number}
*/

// Given an array of integers nums, we have to return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const numIdenticalPairs = (nums) => {
    let num_good_pairs = 0;

    // we compare the value of each element in the array with the element right next to it.

    for( let i = 0 ; i < nums.length ; i++) {
    
        for( let j = i + 1 ; j<nums.length ; j++ ){
    
            if( nums[i] == nums[j] && i < j )

                num_good_pairs++

            }
    
    }

    return num_good_pairs;
    
};

// tests
console.log(numIdenticalPairs([1,2,3,1,1,3]));