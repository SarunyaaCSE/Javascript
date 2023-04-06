var obj={
    1:{
    "band name":"BTS",
    "Nationality":"Korean",
    "Genre":"K POP",
    "Leader Name":"RM",
    "number of members":7,
    "members name":[
        "RM",
        "Jin",
        "Suga",
        "JHope",
        "Jimin",
        "V",
        "Jungkook"
    ]
},
    2:{
        "band name":"One Direction",
        "Nationality":"American",
        "Genre":"American Pop",
        "number of members":5
    }
};
var original=JSON.parse(JSON.stringify(obj));
function updateRecord(id,prop,value){
    if(value===""){
        delete obj[id][prop];
    }
    else if(prop==="members name"){
        obj[id][prop]=obj[id][prop]||[];
        obj[id][prop].push(value);
    }
    else{
        obj[id][prop]=value;
    }
    return obj;
}
console.log(updateRecord(2,"members name","Harry"));
//while loop
var arr=[];
var iloop=0;
while(iloop<5){
    arr.push(iloop);
    iloop++;
}
console.log(arr);
//for loop
var arr1=[];
for(var i=0;i<6;i++){
    arr1.push(i);
}
console.log(arr1);
//for loop for odd numbers
var arr2=[]
for(var j=1;j<10;j+=2){
    arr2.push(j);
}
console.log(arr2);
//counting backwards using for loop
var arr3=[];
for(var jloop=10;jloop>0;jloop-=2){
    arr3.push(jloop);
}
console.log(arr3);
var tot=0;
for(var i=0;i<arr3.length;i++){
    tot+=arr3[i];
}
console.log("Sum of elements in arr3 : "+tot);
//nested for loop
var arr4=[[1,2,3],[4,5],[6,7]];
var product=1;
for(var iloop=0;iloop<arr4.length;iloop++){
    for(var jloop=0;jloop<arr4[iloop].length;jloop++){
        product*=arr4[iloop][jloop];
    }
}
console.log("The product of elements in arr4 : "+product);
//do while loop
var arr5=[];
var ele=10;
do{
    arr5.push(ele);
    ele--;
}while(ele>5)
console.log(arr5);
//profile lookup
var contacts=[
    {
        "firstname":"Deepika",
        "lastname":"Padukone",
        "number":"7539841624"
    },
    {
        "firstname":"Alia",
        "lastname":"Bhatt",
        "number":"1264893571"
    },
    {
        "firstname":"Shradha",
        "lastname":"Kapor",
        "number":"6214835974"
    }
];
function profileLookup(name,prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop] || "No such property";
        }
    }
}
console.log("Number of the given firstname: "+profileLookup("Alia","number"));

console.log("Random fraction :"+Math.random());
console.log("Random whole number :"+Math.floor(Math.random()*100));
var min=100;
var max=200;
console.log("Random number between 100 and 200 :"+Math.floor(Math.random()*(max-min)+min));
//parseInt function
console.log(parseInt("100"));
console.log(parseInt("1000",2));
//ternary operator
var res=56>100?"Yes":"No";
console.log("Result of ternary operator :"+res);
//multiple ternary operator
function checkSign(num){
    return num>0?"positive":num<0?"negative":"zero";
}
console.log(checkSign(-1));
console.log(checkSign(100));
//let does not allow to declare a variable twice 
//var is used to declare a variable globally
console.log("Scope of var variable");
function checkvarscope(){
    "use strict";
    var i="function scope";
    if(true){
        i="block scope";
        console.log("Block scope of i is: ",i);
    }
    console.log("Function scope of i is :",i);
}
checkvarscope();
console.log("Scope of let variable");
function checkletscope(){
    "use strict";
    let i="function scope";
    if(true){
        let i="block scope";
        console.log("Block scope of i is: ",i);
    }
    console.log("Function scope of i is :",i);
}
checkletscope();
//const is a read only variable and cannot be reassigned
const ELE=50;
console.log(ELE);
//mutate an array declared with const
const s=[10,20,30];
//s=[30,20,10];
s[0]=30;
s[1]=20;
s[2]=10;
console.log(s);
Object.freeze(s);
console.log(s);
//arrow functions
const  magic= () => new Date();
const myConcat=(a,b) => a.concat(b);
console.log(myConcat([90,80,70],[60,50,40]));