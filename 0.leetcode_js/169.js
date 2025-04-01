/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a,b)=>a-b);
    let i = 0;
    let n = nums.length;
    let d = {};
    while (i < n) {
        let j = i + 1;
        while (j < n && nums[j]==nums[i]){
            j++;
        }
        d[nums[i]] = j - i;
        console.log(d);
        i = j;
    }
    let limit = n/2;
    for (let key in d) {
        if (d[key] > limit) {
            console.log(parseInt(key));
        }
    }
};

let nums = [2,2,1,1,1,2,2];
majorityElement(nums);
