// console.log(myVar);
// var myVar=10;
// console.log(myVar);
// if(true){
//     var blockVar=20;
//     console.log(blockVar);
// }
// console.log(blockVar);
// var myVar="Hello";
// console.log(myVar);


//let is block scoped means variables declared with let must be within the block and we can not reaasign it same goes with const


// let myLet=10;
// console.log(myLet);
// if(true){
//      let blockLet=20;
//      console.log(blockLet);
// }
// console.log(blockLet);


// let person={
//     firstname: "dev",
//     lastname: "trip",
//     age:30,
//     isStudent: false,
//     address:{
//         street: "123 main St",
//         city: "Anytown"
//     }

// }
// console.log(person);
// console.log(person.firstname);
// console.log(person["lastname"]);
// console.log(person.age);
// console.log(person.address);


// let fruit= ["Apple","Banana","Cherry"];
// let mixedData= [1,"Hello",true,{id:1}];
// console.log(fruit);
// console.log(mixedData[2]);


// console.log('5' -2);
// console.log(5=='5');
// console.log(5==='5');
// console.log(true+1);
// console.log(false==0);
// console.log(null==undefined);
// console.log(null===undefined);


// console.log(typeof 42);
// console.log(typeof "hello");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// let a=5;
// a+=3;
// console.log(a);
// a-=3;
// console.log(a);
// a*=3;
// console.log(a);
// a/=3;
// console.log(a);
// a**=3;
// console.log(a);
// a%=3;
// console.log(a);


// let age=20;
// let haslicence=true;
// console.log(age>=18 && haslicence);

// let israining=false;
// let iscold= true;
// console.log(israining || iscold);


// let temp=25;
// if(temp>25){
//     console.log("It is hot outside");
// }
// else if(temp>20){
//     console.log("It pleasant");

// }


// let day="Monday";
// switch (day) {
//     case "Monday":
//         console.log("Start of the week");
        
//         break;
//     case "friday":
//         console.log("Almost the weekend");
//         break;

//     default:
//         console.log("Just a regular day");
//         break;
// }

//for of loop

// const fruits=["Apple","Banana","Cherry"];
// for(const fruit of fruits){
//     console.log(fruit);
// }

//for in loop

// const car={
//     make:"Toyata",
//     model:"camry",
//     year:2020
// };
// for (const key in car) {
//     console.log(`${key}: ${car[key]}`);
// }



// function greet(name){
//     console.log(`Hello, ${name}!`);
// }
// greet("Bob");

// const h1 =document.getElementById('main-title');
// console.log(h1);
// const para=document.getElementsByClassName('paragraph');
// console.log(para);
// const spec=document.getElementsByClassName('paragraph special');
// console.log(spec);
// const li=document.getElementsByClassName('li');
// console.log(li);

const myButton=document.getElementById('myButton');
function handleClick(){
    console.log("Button was clicked");
    myButton.textContent= "Clicked!";
}
myButton.addEventListener('click',handleClick);

