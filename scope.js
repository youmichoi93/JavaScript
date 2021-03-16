function a(){
    var v_a ='a';

    function b(){
    var_b = 'b';
    console.log('b:', typeof(v), typeof(v_a), typeof(v_b));
    //?? 얘는 스트링 스트링 스트링이여야하는데..콘솔 다시 확인

}

b();

console.log('a:', typeof(v), typeof(v_a), typeof(v_b)); 
 //typeof(v_b)은 undefined, 함수 안에 있는건 바깥에 영향을 못 미친다, return을 해줘야함.

}




var v = 'v';

a();

console.log('o:', typeof(v), typeof(v_a), typeof(v_b));
