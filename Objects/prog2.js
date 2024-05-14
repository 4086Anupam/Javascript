


const myjs={

name : "Anupam",

vill: "Chanda",

location : "kaolkata",

college: " FIEM",

}

//console.log(` My name is ${myjs.name} from ${myjs.vill} pursuing btec from ${myjs.college} in ${myjs.location}`);

myjs.location="Medinipur"
//Object.freeze(myjs) // lock to object 

myjs.name="Pritam"

//console.log(myjs);

// function 
myjs.gretting=function(){
console.log("Surya");
}

console.log(myjs.gretting());


myjs.grettingtwo=function(){
    console.log(`My name is ${this.name}`);
    }

    console.log(myjs.grettingtwo());

