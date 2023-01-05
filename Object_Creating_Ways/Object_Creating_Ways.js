//First way (Through class)
class Patient{
    constructor(name,address){
        this.name = name;
        this.address = address
    }
}
var obj1 = new Patient("Tarun", "xyz");
console.log(obj1," Object-1");

//Second way (Through Construtor Function)
function Person(name,address){
    this.name = name;
    this.address = address
}
var obj2 = new Person("Tarun", "xyz");
console.log(obj2," Object-2");

//Third way //(Through Object Literal)
let obj3 = {
    name:"Tarun",
    address:"xyz"
}
console.log(obj3," Object-3");

//Fouth way (Create an Object using Instance of Object Directly)
let obj4 = new Object(obj3);
console.log(obj4," Object-4");

//Fifth way
let obj5 = {...obj4};
console.log(obj5," Object-5");


