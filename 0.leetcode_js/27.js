/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let n = nums.length;
    for (i=0; i<n; i++) {
        if (nums[i] == val) {
            nums.splice(i,1);
            n--;
            i--;
        }
        console.log(i);
    }
};

let nums = [2,2,3,3];
let val = 3;
removeElement(nums, val);
console.log('output:');
console.log(nums);