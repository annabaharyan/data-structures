class Queue{
    constructor() {
        this.items={};
        this.head=0;
        this.tail=0
    }
    enqueu(element){
        this.items[this.tail]=element;
        this.tail++
    }
    dequeu(){
        const removedValue=this.items[this.head]
        delete this.items[this.head];
        this.head++;
        return removedValue
    }
    size(){
        return this.tail-this.head
    }
    isEmpty(){
        return this.size()===0
    }
    firstElement(){
        return this.items[this.head]
    }

}

