// for..in 반복문
/*
for (변수 in 객체) {
    동작부분
}
*/

let codeit = {
    name: '코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: '자바스크립트 프로그래밍 기초'
}

for (let key in codeit) {
    console.log(key);
    console.log(codeit[key]);
}


/*
프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있습니다.
다만 실제로 사용될 때는 문자열로 형 변환이 되어 사용되는데요.
이렇게 예외적인 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능합니다.

객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.
 */