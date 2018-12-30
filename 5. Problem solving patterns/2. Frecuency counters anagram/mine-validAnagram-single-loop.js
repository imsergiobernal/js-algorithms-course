/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearraging the letters of another, such as cinema,
 * formed from iceman.
 * @param {String} word
 * @param {String} anagram
 * @return {Boolean}
 */
function validAnagram(word, anagram) {

  if (word.length !== anagram.length) return false 

  const frequencies = {}

  for (let i = 0; i <= word.length -1; i++) {
    let char = word.charAt(i)
    if (!frequencies[char]) frequencies[char] = 0
    frequencies[char] += 1
  }

  for (let i = 0; i <= anagram.length -1; i++) {
    let anagramChar = anagram.charAt(i)
    if (!frequencies[anagramChar]) return false
    frequencies[anagramChar] -= 1
  }

  return true
}


console.log('true', validAnagram('','')) // True
console.log('false', validAnagram('aaz','zza')) // False
console.log('true', validAnagram('anagram','nagaram')) // True
console.log('false', validAnagram('rat','car')) // False
