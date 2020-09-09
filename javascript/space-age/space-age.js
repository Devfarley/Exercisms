//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
  const earthDays = 365.25;
  const orbitalPeriod = {
    "earth": 1,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
  }
  
  
  export const age = (planet, secondsOld) => {
  let periodDays = orbitalPeriod[planet] * earthDays;
  return parseFloat((secondsOld / 60 / 60 / 24 / periodDays).toFixed(2));
  
}



