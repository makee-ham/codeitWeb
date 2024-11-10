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
}

// 점 표기법 (objectName.propertyName)
console.log(codeit.name);
console.log(codeit.bestCourse.title);

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['born Year']);
console.log(codeit['born' + ' Year']);

// 없는 속성이면 undefined
console.log(codeit.teacher);