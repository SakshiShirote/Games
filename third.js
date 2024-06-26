// //Calculate sum of 1 to 5
// let sum = 0;
// for(let i=1;i<=5;i++){
//     sum = sum + i;
// }
// console.log(sum);
// //for-of loop
// let str = prompt("Enter the Name: ");
// for(let i of str){
//     console.log("i= ",i);
// }
// //for-in loop(Basically it is used for object)
// let student = {
//     name : "Tony Stark",
//     age : 21,
//     cgpa : 9.99,
//     isPass : true
// };
// for(let key in student){
//     console.log(key,"=" ,student[key]);
// }
//-------------Practice-------------//
//Q.1 Print even no.
for(let num =0;num<=100;num++){
    if(num%2 === 0){
        console.log(num);
    }
}
//Q.2 Create a game
let gameNum = 84;
let userNum = prompt("Guess the Game Number: ");
while(userNum != gameNum){
    userNum = prompt("You entered the wrong number.Guess again");
}
console.log("Congratulations,You entered the right number"); 

//=========----- Strings -------===================//
let str = "Sakshi";
console.log(str[5]);
console.log(str.length);
//Template Literals
let specialStr = `Life is a Journey`;
console.log(typeof specialStr);

let obj = {
    item : "pen",
    price : 10
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//------------------------Practice-----------------------------------//
//Q.1
let fullNmae = prompt("Enter the full name: ");
let userName = "@" + fullNmae +fullNmae.length;
console.log(userName);