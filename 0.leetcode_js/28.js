/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  lenN = needle.length
  for (i = 0; i <= haystack.length - lenN; i++) {
    console.log(`i=${i}`)
    if (haystack[i] === needle[0]) {
      temp = haystack.slice(i, i + lenN)
      console.log(11111111111)
      console.log(temp)
      if (temp === needle) {
        return i
      }
    }
  }
  return -1
};

console.log(strStr('hello', 'll'))