//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//




export const isPangram = (s) => {
  let alphabet = "abcdefghijklmnopqurstuvwrxyz"
  let regex = /\s/g;
  let lowercase = s.toLowerCase().replace(regex, "")

  for (let i = 0; i < alphabet.length; i++){
    if (lowercase.indexOf(alphabet[i]) === -1){
      return false
    }
  }
  return true
};
