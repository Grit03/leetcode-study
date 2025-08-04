/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[a-z0-9]/; // test는 g 플래그가 필요없다.
  const strArr = [...s.toLowerCase()].filter((c) => regex.test(c));

  return strArr.join("") === strArr.reverse().join(""); // reverse는 배열의 메서드
};
