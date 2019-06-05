const pipeline = (...funcs)=>
    val => funcs.reduce((a,b) =>b(a),val);

//const pipeline = (...funcs) => val =>console.log(val);  //5

//const pipeline = (...funcs) => console.log(e);
const plus1 = a => a+1;
const mult2 = a => a*2;
const addTheMult = pipeline(plus1,mult2);
addTheMult(5);
console.log(addTheMult(5))
