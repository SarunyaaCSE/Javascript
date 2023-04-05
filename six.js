//Golf code
var names=["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go home"];
function golfScore(par,strokes){
    if(strokes==1){
        return names[0];
    }
    else if(strokes <= par-2){
        return names[1];
    }
    else if(strokes==par-1){
        return names[2];
    }
    else if(strokes==par){
        return names[3];
    }
    else if(strokes==par+1){
        return names[4];
    }
    else if(strokes==par+2){
        return names[5];
    }
    else if(strokes>=par+3){
        return names[6];
    }
}
console.log(golfScore(2,5));
//Switch statement
function caseInSwitch(ele){
    answer="";
    switch(ele){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gamma";
            break;
        case 4:
            answer="delta";
            break;
        default:
            answer="invalid";
            break;
    }
    return answer;
}
console.log(caseInSwitch(8));
//multiple cases in switch
function multipleCase(inp){
    answer="";
    switch(inp){
        case 1:
        case 2:
        case 3:
            answer="Low";
            break;
        case 4:
        case 5:
        case 6:
            answer="Medium";
            break;
        case 7:
        case 8:
        case 9:
            answer="High";
            break;
        default:
            answer="invalid";
            break;
    }
    return answer;
}
console.log(multipleCase(5));
//returning boolean values 
function isMore(a,b){
    return a>b;
}
console.log(isMore(5,9));
//counting cards
var count=0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdBet="Hold";
    if(count>0){
        holdBet="Bet";
    }
    return count+" "+holdBet;
}console.log(cc(5));
//javascript objects
var myDog={
    "name":"Princy",
    "no of legs":4,
    "tail":1,
    "friends":["rosy","mary"]
};
var nam=myDog.name;
console.log("Name of the dog:"+nam);
var legs=myDog["no of legs"];
console.log("Number of legs:"+legs);
var prop="tail";
console.log("Number of tail:"+myDog[prop]);
myDog.name="Sweety";
console.log("Updated name:"+myDog.name);
myDog.bark="wool wool";
console.log("Animal sound:"+myDog.bark);
delete myDog.tail;
//objects for lookup
function lookupHere(val){
    var lookup={
        "K":"King",
        "Q":"Queen",
        "J":"Jack",
        "A":"Ace"
    };
    var result=lookup[val];
    return result;
}
console.log(lookupHere("Q"));

function checkObj(checkProp){
    if(myDog.hasOwnProperty(checkProp)){
        return myDog[checkProp];
    }
    else{
        return "Not Found";
    }
}
console.log(checkObj("bark"));
console.log(checkObj("tail"));
//nested objects
var obj=[{
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
{
    "band name":"One Direction",
    "Nationality":"American",
    "Genre":"American Pop",
    "number of members":5
}
];
//accessing elements from nested list
console.log("Name of a band:"+obj[1]["band name"]);
console.log("Name of a band member:"+obj[0]["members name"][1]);