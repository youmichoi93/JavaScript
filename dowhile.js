// var cond = false;

// while(cond){  //cond이 거짓이기 때문에 실행 되지 않음.
//     console.log('이 구문은 실행되지 않습니다.')
// }

// do{
//     console.log('이 구문은 반드시 한번은 실행됩니다.')
// } while(cond)  
// // dowhile은 밑에서 실행하기에 무조건 한번은 실행 그 다음 판단하여 계속 혹은 멈춤.


// do {
//     var ans=parseInt(prompt('1+1=?'))
// }while (ans!=2)
// console.log('정답입니다.')


var a = Math.ceil(Math.random()*10);
var b = Math.ceil(Math.random()*10);
do {
    var ans=parseInt(prompt(a + '*' + b + '=?'));
}while (ans!=a * b)
console.log('정답입니다.')
