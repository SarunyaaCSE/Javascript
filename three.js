var arr1=["Dhoni",7,"Virat",16];
console.log("Array 1: "+arr1);
var ele1=arr1[0];
console.log("First element in arr1: "+ele1);
var nestedArray=[[1,"Hello"],[2,"World"]];
console.log("Nested Array: "+nestedArray);
console.log("First subarray in neastedArray: "+nestedArray[0]);
console.log("Second element in the first sub array: "+nestedArray[0][1]);
arr1[1]="Raina";
console.log("New elemets of arr1 "+arr1);
var muldimarr=[[1,2,3],[4,5,6,],[7,8,9],[[10,11],12,13]];
console.log("muldimarr[3][0][1]: "+muldimarr[3][0][1]);
arr1.push("Sachin","Jadeja");
console.log("Adding elements in the end to arr1 using push: "+arr1);
arr1.pop();
console.log("Removing elements at end of arr1 using pop:"+arr1);
arr1.unshift("Kapil","Sunil");
console.log("Adding elements in the beginning of arr1 using unshift :"+arr1);
arr1.shift();
console.log("Removing elements in the beginning using shift :"+arr1);
function func1(){
    console.log("Hello World");
}
func1();
function func2(a,b){
    console.log(a+b);
}
func2(13,26);