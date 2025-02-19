/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    let new_list = [];
    while (p1 < m || p2 < n) {
        if (p1 == m) {
            new_list.push(nums2[p2]);
            p2++;
            continue;
        }
        if (p2 ==n ) {
            new_list.push(nums1[p1]);
            p1++;
            continue;
        }
        if (nums1[p1] < nums2[p2]) {
            new_list.push(nums1[p1]);
            p1 += 1;
        } else {
            new_list.push(nums2[p2]);
            p2 += 1;
        }
    }

    for (let i = 0; i < m+n; i++) {
        nums1[i] = new_list[i];
    }
};

let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
console.log()