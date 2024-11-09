console.log((3 + 27) * 12 ** (5 % 3));



console.log("He said \"I\'m Iron man\"");
console.log(`He said "I'm Iron man"`);



// Boolean
console.log(3 <= 3);
console.log(3 === 3);
console.log(3 !== 3);

console.log(true && true);
console.log(false || true);
console.log(!false);
console.log(!!true);

let x = 3;
console.log(x > 4 || !(x < 2));



// typeof 연산자
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof true);
console.log(typeof ('Hello' + 'Codeit'))
console.log(typeof (8 - 3))



// 형 변환(Type Conversion)

// String, Number, Boolean
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// true는 1, false는 0
let a = true;
let b = false;
console.log(Number(a));
console.log(Number(b));

// Boolean(something)은 뭐가 있으면 true. false는 '', 0, NaN (Not a Number) <- 얘네 셋은 'falsy값'
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));

// 자동적으로 지원되는 형 변환
console.log('4' - true);

console.log(4 + '2');  // 더하기는 문자열 연산 기능이 우선시
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');  // 문자형은 숫자형으로 형변환 했을 때 NaN. NaN 값은 어느 값과 (사칙)연산을 해도 NaN.

console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);  // NaN과 1의 비교는 불가능. 비교가 불가능해도 false가 나옴.

console.log(1 === '1');  // 일치, 불일치(!==) <- 형 변환 안 일어남
console.log(1 === true);
console.log(1 == '1');  // 동등, 부등(!=) <- 형 변환 일어남(숫자형으로)
console.log(1 == true);



// 템플릿 문자열 (template strings)
let year = 2024;
let month = 11;
let day = 4;

console.log('오늘은 ' + year + '년 ' + month + '월 ' + day + '일입니다.');  // 가독성 떨어지고 보기 싫음
console.log(`오늘은 ${year}년 ${month}월 ${day}일입니다.`);  // 이것이 템플릿 문자열 사용한 것



// null과 undefined
// null은 의도적으로 값이 없음을 표현할 때 사용하는 값
// undefined는 (애초에) 값이 없다는 것을 확인하는 값

let codeit;
console.log(codeit);
codeit = null;
console.log(codeit);

console.log(null == undefined);  // 동등 비교에선, 비슷한 의미이니 true
console.log(null === undefined);  // 일치 비교에선, 두 값이 다르기에 false