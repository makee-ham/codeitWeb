// 복합 할당 연산자

// 다음 두 줄은 같습니다
x = x + 1;
x += 1;

// 다음 두 줄은 같습니다
x = x + 2;
x += 2;

// 다음 두 줄은 같습니다
x = x * 2;
x *= 2;

// 다음 두 줄은 같습니다
x = x - 3;
x -= 3;

// 다음 두 줄은 같습니다
x = x / 2;
x /= 2;

// 다음 두 줄은 같습니다
x = x % 7;
x %= 7;


// 증가(increment), 감소(decrement) 연산자

// 다음 세 줄은 같은 의미입니다
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다
x = x - 1;
x -= 1;
x--;



// 옵셔널 파라미터 (Optional Parameters) : 가장 뒤쪽에 선언해줘야 순서 안 밀림
function introduce(name, age, nationality = '한국') {
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살이고,`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국');
introduce('코드잇', 4);



// 상수 (constant)
const PI = 3.14;  // 값 재할당 불가
const MY_NUMBER = 155;  // 전부 대문자에 띄어쓰기 있으면 '_' 붙여주는 네이밍 규칙



// if문 (if statement)
let temperature = 1;

if (temperature <= 0) {
    console.log('물이 업니다.');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
    console.log('물이 끓습니다.');
} else {
    console.log('물이 모두 수증기가 되었습니다.');
}