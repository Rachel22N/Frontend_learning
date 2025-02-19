/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    let i = 0
    while (i<n) {
        let j = i + 1;
        if (j >= n) {
            break
        }
        if (nums[j] == nums[i]){
            while (nums[j] == nums[i]) {
                j++;
            }
            nums.splice(i, j-i-1);
        }
        i++;
        n = nums.length;
    }
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
console.log('output:');
console.log(nums);
console.log(nums.length);