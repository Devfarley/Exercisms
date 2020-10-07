

class List {

    constructor(array) {
      this._head = null;
      this._length = 0;

      if(array){
        array.map(elem => {
          let element = new Element(elem)
          this.add(element)
        })
    }
  
    }
  
    add(nextValue) {
      nextValue.next = this._head
      this._head = nextValue
      this._length++
    }
  
    get length() {
      return this._length
    }
  
    get head() {
      return this._head
    }
  
    toArray() { 
        let array = [];

        let currentElement = this._head;
    
        while (currentElement != null) {
          array.push(currentElement.value);
          currentElement = currentElement.next;
        }
    
        return array;
    }
  
    reverse() {
        let array = [];

        let currentElement = this._head;

        while(currentElement != null) {
            array.push(currentElement.value);
            currentElement = currentElement.next;
      }
        return array.reverse()

    }
  
  }
  
 class Element {
  
    constructor(value, next = null){
      this.value = value
      this.next = next
    }
  }


  const oneList = new List([1]);

  console.log(oneList.toArray());