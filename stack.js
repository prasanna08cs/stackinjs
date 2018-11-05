class Hero {
    constructor(name, level) {
        this.array=[];
      this.next=0;
      //console.log('constructor called');
    }

   push(val){
     if(this.next){
       this.array[this.next] =val;
     }
     else{
       this.array[this.next] =val;
      
     }
     
     this.next++;
     
   }
  pop(){
    this.array= this.array.filter(e => e !== this.array[--this.next]);
//    console.log(--this.next);
  }
  display(){
    if(this.next){
      
      for(let a of this.array){
        console.log(a);
      }
    }
    else{
      console.log("no elements in array")
      
    }
    
  }
}
let h = new Hero("hi",1);
h.push(12);
h.display();
h.pop();
h.display();
