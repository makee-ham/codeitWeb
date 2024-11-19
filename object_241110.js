// 객체 (Object)
let codeit = {
    name: '코드잇',
    'born Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

// 점 표기법 (objectName.propertyName)
console.log(codeit.name);
console.log(codeit.bestCourse.title);

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['born Year']);
console.log(codeit['born' + ' Year']);


// 없는 속성이면 undefined, 속성은 추가하거나, 변경하거나, 삭제할 수 있음
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);
codeit['student name'] = '함서연';

console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);


// 객체 안에 있는 속성인지 확인하는 방법
console.log('name' in codeit);



/*
한 가지 조심해야 될 부분은 파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용해 주어야 한다는 겁니다.

위 메소드에서 만약 점 표기법으로 key값에 접근을 하게 되면, 파라미터 key를 가리키는 것이 아니라,

myVoca에 문자 그대로 key라는 프로퍼티 이름을 가진 프로퍼티 값에 접근하는 것과 같은 의미가 되기 때문이죠.
*/