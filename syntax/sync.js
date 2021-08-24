var fs = require('fs');

//readFileSync , sync는 동기적 , Nodejs는 없는것을 선호한다. 
//readFileSync 는 리턴값을 줘야하는데 readFile은 아니다.
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
console.log('J');
console.log('H');
console.log('G');
console.log('F');
console.log('E');

// A
// C
// B