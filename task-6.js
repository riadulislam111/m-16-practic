function extractUserInfo (userObj) {
if (!userObj.user.name){
    return 'Invalid'
}

let {user:{name:userName, age}} = userObj;

let [firstValue =  "nothing yet"] = userObj.hobbies;


let string = `${userName} (${age}) likes ${firstValue}`



return string;
}

// console.log(extractUserInfo({user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}));

// console.log(extractUserInfo({user:{name:"Rafi",age:19}, hobbies:[]}));

// console.log(extractUserInfo({user:{age:30}, hobbies:[]}));