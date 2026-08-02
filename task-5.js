let mergeInventory = (arr1, arr2)=> {
if(!Array.isArray(arr1) || !Array.isArray(arr2)  ){
    return "Invalid"
}

let merge = [...arr1, ...arr2];


return merge;
}

console.log(mergeInventory([1,2],[3,4]));



const highestScore = (scores) =>{
if(!Array.isArray(scores)){
    return "Invalid"
}


return Math.max(...scores);
}


console.log(highestScore([3,7,2,9,4]));
console.log(highestScore("3,7,2"));