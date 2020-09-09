//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const rnaToDna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

  export const toRna = (dna) => {
  const parseDna = dna.split("");
  const rna = parseDna.map(nucleotid => rnaToDna[nucleotid]).join("");
  return rna;
  }



