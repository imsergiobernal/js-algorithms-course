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

  const frequencies = {
    word: {},
    anagram: {}
  }

  for (let i = 0; i <= word.length -1; i++) {
    let char = word.charAt(i)
    if (!frequencies.word[char]) frequencies.word[char] = 0
    frequencies.word[char] += 1
  }

  for (let i = 0; i <= anagram.length -1; i++) {
    let char = anagram.charAt(i)
    if (!frequencies.anagram[char]) frequencies.anagram[char] = 0
    frequencies.anagram[char] += 1
  }

  for (key of word) {
    if (frequencies.word[key] !== frequencies.anagram[key]) return false
  }

  return true
}


console.log('true', validAnagram('','')) // True
console.log('false', validAnagram('aaz','zza')) // False
console.log('true', validAnagram('anagram','nagaram')) // True
console.log('false', validAnagram('rat','car')) // False
