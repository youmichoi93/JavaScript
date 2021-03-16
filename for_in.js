var obj = {
    name:'object',
    weight:30,
    isObject: true,
    arr:[1,2,3],
    obj: {property:1}
};

console.log('for 구문으로 object property 반복하기');
var property_list = Object.keys(obj);            
console.log('Property List : ', property_list);

//-------------------------------------------------------

for (var propertyName in obj){

};