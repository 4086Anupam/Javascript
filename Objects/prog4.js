

// singleton  

const tinderuser ={}

tinderuser.id="123abc"

tinderuser.name= "Anupam"

tinderuser.isLoggedin= false

console.log(tinderuser);


// objects under objects 

// nested objects 

const reguleruser ={

 email: "Anupam@gmail.com",

 fullname:{

     username:{

         firstname:"Anupam",

            lastname:"Bhunia"

              
        }

 }

} 

console.log(reguleruser.fullname.username.firstname);


//  Exemple :-  

const reguleruser1 ={

family : "Bhunia",

vill:{


    p:"Jhakra"
}



}

console.log(reguleruser1.vill.p);






// combine objects 


const obj1={1:"a",2:"b"};

const obj2 = {3:"a",4:"b"}

//const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);


console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


const chanda={

vill: "chanda",
bhunia :{
  g : "Rita"
},

post : "Jhakra",

dist : "Paschim Medinipur",

pin : "721201"

}

console.log(chanda.bhunia.g);