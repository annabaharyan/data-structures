class Node{
    constructor(value) {
        this.value=value;
        this.next=this.prev=null
    }
}

 class LinkedList{
   constructor() {
       this.head=this.tail=null
       this.size=0
   }
   isEmpty(){
       return this.head===null
   }
   pushBack(value){
       const newNode=new Node(value)
       if(this.isEmpty()){
           this.head=this.tail=newNode
       }else {
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
           this.size++
       }
       return this.tail
   }
   pushFront(value){
       const newNode=new Node(value)
       if(this.isEmpty()){
           this.head=this.tail=newNode
       }else{
           newNode.next = this.head;
           this.head.prev = newNode;
           this.head = newNode;
           this.size++
       }
       return this.head;
   }
   popFront(){
       if(this.isEmpty()){
           return
       }
       if(this.head===this.tail){
           return null
       }else{
           this.head=this.head.next;
           this.head.prev=null;
           this.size--
       }
       return this.head;

   }
   popBack(){
       if(this.isEmpty()){
           return
       }
       if(this.head===this.tail){
           return null
       }else{
           this.tail=this.tail.prev;
           this.tail.next=null;
           this.size--
       }
       return this.tail;
   }
   findNode(value){
       if(this.isEmpty()){
           return null
       }
       let currentNode=this.head
       while(currentNode){
           if(currentNode.value===value){
               return currentNode
           }else{
               currentNode=currentNode.next
           }
       }
       return null
   }
     findNodeIndex(value){
         if(this.isEmpty()){
             return
         }
         let currentNode=this.head;
         let curIndex=0
         while(currentNode){
             if(currentNode.value===value){
                 return curIndex
             }else{
                 currentNode=currentNode.next
                 curIndex++
             }
         }
         return curIndex
     }
   addNodeByIndex(index, value){
       if(this.isEmpty()||index<0 ||index>this.size-1){
           return
       }
       let currentNode=this.head
       const newNode=new Node(value)
       let iterationIndex=0
       if(index===0){
           this.pushFront(value)
       }
       while (iterationIndex<=index-1){
          currentNode=currentNode.next;
          iterationIndex++
       }
       currentNode.prev=currentNode;
       newNode.next=currentNode.next;
       currentNode.next=newNode;
       return newNode
   }
   everyNode(value){
       if(this.isEmpty()){
           return false
       }
       let currentNode=this.head;
       while (currentNode){
           if(currentNode.value!==value){
               return  false
           }else{
               currentNode=currentNode.next
           }
       }
       return true
   }

   toArray(){
       let linkedArray=[]
       if(this.isEmpty()){
           return linkedArray
       }
       let current=this.head
       while(current){
           linkedArray.push(current.value)
           current=current.next
       }
       return linkedArray
   }
}
