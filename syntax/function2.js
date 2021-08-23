//node syntax/function2.js
console.log(Math.round(1.6));
console.log(Math.round(1.4));
//round() 반올림 함수 
//입력값이 있어요~ 

function sum(a,b) {
    var a = 2;
    var b = 3;
    return a + b;
}

console.log(sum());

function sum2(first,second){ //parameter
    console.log(first+second);
}

sum2(2,4); // 각각의 하나하나를 인자(argument)라고 한다

