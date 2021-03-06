
 const steps = (num) => {
    let step = 0;

    if (num <= 0 ){
      throw new Error('Only positive numbers are allowed');
    }
  
    while (num != 1){
      if (num % 2 == 0){
        step++
        num = num / 2
      } else {
        step++
        num = (3*num) + 1
      }
    }
    return step
  };
  

  steps(16)
  console.log("answer",steps(16))
