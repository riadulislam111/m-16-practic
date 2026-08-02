function describeDeclaration(String) {
    if ("var" === String) {
        return "Can redeclare, can reassign";
    }
    else if ("let" === String){
        return "Cannot redeclare, can reassign";
    }
    else if ("const" === String) {
        return "Cannot redeclare, cannot reassign";
    }
    else {
        return "Invalid";
    }
}

// console.log(describeDeclaration("let"));
// console.log(describeDeclaration("const"));
// console.log(describeDeclaration("var"));
// console.log(describeDeclaration("int"));