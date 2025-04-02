/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0
  let l = s.trim().split(/\s+/)
  console.log(l)
  console.log(l[l.length - 1])
  return l[l.length - 1].length
};

console.log(lengthOfLastWord(' Hello world  '))