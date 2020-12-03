//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const findAnagrams = (word, anagrams) => {
let array2 = []

findThemselves(word, anagrams).filter(anagram => 
  { anagram.toLowerCase().split('').sort().join() === word.toLowerCase().split('').sort().join() ?
  array2.push(anagram) : null;
});
  
  
  return array2;
}


const findThemselves = (word, anagrams) => {
  let array = []
  anagrams.filter (anagram => {
    anagram.toLowerCase() !== word.toLowerCase() ? array.push(anagram) : null;
  });
  
return array;
}