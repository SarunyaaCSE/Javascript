var global_var=7;//global variable
function f1() {
    var output="";
    var ele=26;
    output+="Global variable: "+global_var;
    console.log(output);
    console.log("Local variable: "+ele);
}
var outvar="outside scope";
function f2(){
    var outvar="inside scope";//preferred variable
    return outvar;
}
f1();
console.log(f2());
console.log(outvar);