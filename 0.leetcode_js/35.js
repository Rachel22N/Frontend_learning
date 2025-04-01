/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let slow = 0, quick = nums.length - 1
  while (slow <= quick) {
    let temp = Math.ceil((slow + quick) / 2)
    if (nums[temp] === target) {
      return temp
    }
    if (nums[temp] > target) {
      quick = temp - 1
    } else {
      slow = temp + 1
    }
  }
  return slow
};