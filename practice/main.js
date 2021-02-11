// class person{
//     constructor(name,age){
//         this.age= age;
//         this.name= name;
        
//     }
// }

// const person1= new person('dave',17,);
// const person2=new person('sam',22);
//console.log(person1.age);

// const {name,age}=person1;
// const {age:age1,...left}=person2;
// console.log(age1);
// console.log(left)

const obj={
    name:'salh',
    age:23,
    address:{
        city:'Asmera',
        zip:'1930',
        state:{
            cont:'America',
            country:'CA',
            list:['dawa','eyaga',23]
        }
    }
   
}

const {name,address:{state:{cont:nation,list:[,eyaga]}}}=obj;
console.log(eyaga);

