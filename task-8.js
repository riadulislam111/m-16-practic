// function printObjectDetails(obj, loopType) {

//     if(loopType === "forin"){
//     for(let key in obj){
//       let keyValue = [key, obj[key]];
//       return keyValue;
//     }
//     }
//     else if (loopType === "forofentries"){
//      for(let key of obj){
//         let keyValue = Object.entries(obj);
//         return keyValue;
//      }

//     }
//     else if(loopType === "entriesDestructure"){
//     let keyValue = Object.entries(obj).map();
//     return keyValue

//     }
// }

// console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
// console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
// console.log(printObjectDetails({}, "loopThrough"));


// right code 

function printObjectDetails(obj, loopType){
    if(loopType === "forin"){
        let result = [];

        for(let key in obj){
            result.push(`${key}: ${obj[key]}`);
        }
        return result;
    }
    else if(loopType === "forofentries"){
        let result = [];

        for (let [key, value] of Object.entries(obj)){
            result.push(`${key}: ${value}`);
        }
        return result;
    }

else if(loopType === "entriesDestructure"){
    return Object.entries(obj).map(([key, value]) => {
        return `${key}: ${value}`;
    });
}
else{
    return "Invalid"
}
}

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
console.log(printObjectDetails({}, "loopThrough"));
