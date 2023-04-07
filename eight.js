//higher order arrow function
const realNumArray=[1,-11,43,-98,36,75,-32,-25,-91,7];
const squareList=(arr)=>{
    const squaredIntegers=arr.filter(num => Number.isInteger(num)&& num>0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers=squareList(realNumArray);
console.log(squaredIntegers);
//default parameters in arrow function
const increment= (function(){
    return function increment(num,val=1){
        return num+val;
    }
})();
console.log(increment(10,5));
console.log(increment(7));
//rest operators with function parameters
const sum=(function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(2,4,6,8,10));
console.log(sum(1,3,5,7,9));
//spread operator
const arr1=['MON','TUE','WED','THUR','FRI','SAT'];
let arr2;
(function(){
    arr2=[...arr1];//spread operator
    arr1[0]='HELLO';
})();
console.log("arr1: "+arr1);
console.log("arr2: "+arr2);
//destructing assignments
var voxel={x:13.7,y:26.4,z:56.3};
const {x:a,y:b,z:c}=voxel;
console.log("The values of a,b,c are "+a+","+b+","+c);
//destructing assignments with nested objects
