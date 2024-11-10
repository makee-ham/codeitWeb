// for문 (for statement)
/*
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}
*/


// 동작 순서
/*
초기화부분 최초 1회 → 조건 true → 동작부분 → 추가동작부분 → 조건 false 될 때까지 반복
*/


// '코드잇 최고!' 반복해보기
for (let i = 1; i <=10; i++) {
    console.log(`${i} 코드잇 최고!`);
}


// 추가 동작 없어도 됨; 참고로 소괄호 안의 i는 지역변수(로컬변수)이지 글로벌변수가 아님
for (let i = 1; i <= 10;) {
    console.log(`${i} 코드잇 최고!`);
    i++;
}


// 초기화 부분 없어도 되지만, for 소괄호 안쪽은 반드시 세미콜론 2개여야 함
let i = 1;
for (; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`);
}



// 내가 못 푼 실습...
// 주어진 높이(height)에 맞게 *로 삼각형을 그리는 함수 printTriangle()을 완성해 봅시다.

/*
function printTriangle(height) {
    // 여기에 코드 입력
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);
 */