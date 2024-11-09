// 아래 코드는 15를 출력하는 코드입니다. (한 줄 코멘트)
console.log(15);
console.log(1 + 14);

/* 여러 줄 주석(comment)
입니다. */



// 여기에 코드를 작성하세요
let espresso = 10;
let milk = 170;
let chocolateSyrup = 50;
let whippedCream = 60;

// 메뉴별 칼로리 테스트
console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리



// 함수 선언
function greetings() {
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
};

//함수 호출
greetings();



function welcome(name) {
    console.log('안녕하세요 ' + name + ' 님!');
};

welcome('쮸삐쮸');
welcome('오징어');



function printSquare(x) {
    console.log(x * x);
};

printSquare(2);
printSquare(5);



// 여기에 코드를 작성하세요
function teraToGiga(volume) {
    console.log(volume + 'TB는');  // !!파이썬과 달리 자료형을 맞춰줄 필요 없고 결합하면 그냥 문자열 됨!!
    console.log(volume * 1024 + 'GB 입니다.');
  };
  
  function teraToMega(volume) {
    console.log(volume + 'TB는');
    console.log(volume * 1024 * 1024 + 'MB 입니다.');
  };
  
  // TB -> GB 테스트
  teraToGiga(2);
  // TB -> MB 테스트
  teraToMega(2);



  function printSum(num1, num2) {
    console.log(num1 + num2);
  };

  printSum(1, 2);



  function getTwice(number) {
    return number * 2;  // return 나오면 값 돌려주고 함수 바로 종료됨, return이 아닌 console.log였다면, 그 함수를 다시 출력했을 때 undefined 나옴
  };

  let x = getTwice(5);
  let y = getTwice(2);

  console.log(x * y);