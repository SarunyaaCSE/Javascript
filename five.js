function multiplyFive(num){
    return num*5;
}
result=multiplyFive(7);
console.log("The result of multiplyFive() is "+result);
function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
var testarr=[2,4,6,8,10];
console.log("Before : "+JSON.stringify(testarr));
console.log(nextInLine(testarr,12));
console.log("After : "+JSON.stringify(testarr));
function true_or_false(arg){
    if(arg){
        return "It was true";
    }
    return "It was false";
}
console.log("If the argument passed is true\n"+true_or_false(true));
console.log("If the argument passed is false\n"+true_or_false(false));
function isEqual(ele){
    if(ele==10){
        return "It is equal";
    }
    else{
        return "It is not equal";
    }
}
function isStrictlyEqual(ele){
    if(ele===10){
        return "It is strictly equal";
    }
    else{
        return "It is not strictly equal";
    }
}
console.log("Equality and Strictly equality operator");
console.log(isEqual(10));
console.log(isEqual("10"));
console.log(isStrictlyEqual(10));
console.log(isStrictlyEqual("10"));
function inEquality(ele){
    if(ele!=10){
        return "It is not equal";
    }
    else{
        return "It is equal";
    }
}
function strictlyInEquality(ele){
    if(ele!==10){
        return "It is strictly not equal";
    }
    else{
        return "It is strictly equal";
    }
}
console.log("Inequality and Strictly Inequality operator");
console.log(inEquality(7));
console.log(inEquality(10));
console.log(strictlyInEquality(10));
console.log(strictlyInEquality("10"));
function checkSize(num){
    if(num<5){
        return "tiny";
    }
    else if(num<10){
        return "small";
    }
    else if(num<15){
        return "medium";
    }
    else if(num<20){
        return "large";
    }
    else{
        return "huge";
    }
}
console.log(checkSize(5));
console.log(checkSize(50));