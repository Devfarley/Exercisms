//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor(){
     this.list = []
    
  }
  push(num) {
  return this.list.push(num)
    
  }

  pop(num) {
   return this.list.pop(num)
  
  }

  shift(num) {
   return this.list.shift(num)
  }

  unshift(num) {
   return this.list.unshift(num)
  }

  delete(num) {
    const index = this.list.findIndex((ele, i) => {
      if (ele === num){
        return true
      }
    })
    this.list.splice(index, index === -1 ? 0 : 1) 
  }

  count() {
    return this.list.length
  }
}
