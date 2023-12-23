//  Primitive

// 7 types : String,  Number, Boolean, null, undefined, Symbol, BigInt



/* 



        const score = 100;

        // const score1:String 
        // const score2:Number 

        const w = Number(45)
        const v = String("45")
        console.log(w)

        let a; // yha undefined store h

        const id = Symbol('125')
        const anotherId = Symbol('125')
        console.log ( id === anotherId);
        console.log ( id == anotherId);

        const bigNumber1 = 494984684864949468498464684946
        const bigNumber2 = 494984684864949468498464684946n
        console.log( typeof bigNumber1)
        console.log( typeof bigNumber2)



*/ 




// Reference ( Non Primitive )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Umang",
    age: 22,
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof myFunction) // ye object  function