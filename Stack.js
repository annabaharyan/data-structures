 class Stack{
    constructor() {
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(element){
        this.items[this.items.length]=element;
        return this.items.length
    }
    pop(){
        if(this.isEmpty()) {
            return undefined
        } else{
            let deleteItem=this.items[this.items.length-1];
            this.items.length=this.items.length-1;
            return deleteItem
        }
    }
    toArray(){
      return this.items
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items=[]
        return this.items
    }
 }
