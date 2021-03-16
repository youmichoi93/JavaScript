//변수가림현상 (쉐도잉현상)
function shadowing_example(){
    var val = 5; //지역변수, 함수 안에서 변수 선언하면 바깥에 있는 것과 이름이 같아도 다른 변수가 됨.
    console.log("F",val);
    val++; 
}

var val = 0; //전역변수
shadowing_example();
console.log("O",val);


//console.log 
// F 0
// O 1


//console.log 변수 var = 5을 함수 안에 추가했을때 결과
// F 5 
// O 0