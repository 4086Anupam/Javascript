


const myobject={

name:"Anupam",

family:" Bhunia",

location:"Chanda",

dist:"Paschim Medinipur",

"Polish":"Chandrakona",

}

console.log(myobject.name);
console.log(myobject.family);
console.log(myobject.location);
console.log(myobject.dist);
console.log(myobject["Polish"]);

Object.freeze(myobject) 
console.log(myobject);

myobject.name="Surya"
console.log(o=myobject);


myobject.bhunia=function(){

    console.log(`My name is ${this.name} from ${this.dist}`);
}

console.log(myobject.bhunia());