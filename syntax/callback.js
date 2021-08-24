// function a(){
//     console.log('A');
// }

//node syntax/callback.js

var a = function(){
    console.log('A');
}
//자바스크립트에서는 함수가 값이다.

console.log('b');

function slowfunc(callback){
    console.log('C');
    callback();
    
}

slowfunc(a);