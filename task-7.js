function manageInventoryObject(obj, action) {
 const isPlainObject = obj !== null && !Array.isArray(obj) && typeof obj === "object";

if (!isPlainObject || typeof action !== "string") {
    return "Invalid";
}


  if (action === "keys") {
    return Object.keys(obj);
  }
   else if (action === "values") {
    return Object.values(obj);
  }
   else if (action === "entries") {
    return Object.entries(obj);
  }
   else if (action === "delete") {
    let copyObj = { ...obj };
    delete copyObj["c"];
    return copyObj;
  }
   else if (action === "seal") {
    return Object.seal(obj);
  }
   else if (action === "freeze") {
    return Object.freeze(obj);
  }
   else {
    return "Invalid";
  }
}

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete"));
console.log(manageInventoryObject({ a: 1 }, "shrink"));
