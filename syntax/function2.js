//node syntax/function2.js
console.log(Math.round(1.6));
console.log(Math.round(1.4));
//round() 반올림 함수 
//입력값이 있어요~ 

function sum(a,b) {
console.log('a');
return a + b;
//어떤 값을 출력한다는 의미와 여기서 종료한다는 특수한 의미를 갖는다.
console.log('b');
}

console.log(sum(3,5));

function sum2(first,second){ //parameter
    console.log(first+second);
}

sum2(2,4); // 각각의 하나하나를 인자(argument)라고 한다

