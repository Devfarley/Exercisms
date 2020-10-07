//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw 'Negative totals are not allowed.';
    }
    let arr = [[]];
    for (let i = 1; i <= target; i++) {
      console.log(`Now in index ${i}:`, arr)
      arr[i] = coinArray.map((elem) => {
          // console.log("Map:", arr[i - elem] ? [elem, ...arr[i - elem]] : undefined)
          return arr[i - elem] ? [elem, ...arr[i - elem]] : undefined
          // Blue brackets are new array and we are inserting elem and ...arr[i - elem]
          // if returns true we are inserting elem into a new array at ...arr[i - elem]
        }).sort((a, b) =>{console.log("BeforeSort:",a, b)
          return a.length - b.length})[0];
          // we are finding every possible combination to equal 23 and then sorting out all the longest answers
          // sorting by length and if length matches sort looks inside the arrays and uses the numbers inside to sort
          // Then [0] returns the array at index 0
          console.log(`AfterSort: ${i} :`, arr)
    }
    if (!arr[target]) throw new Error(`The total ${target} cannot be represented in the given currency.`);
    console.log("full array:", arr)
    console.log("Array Target:", arr[target].reduce((accumulator, current) => accumulator + current, 0 ))
    return arr[target];
  }
}


