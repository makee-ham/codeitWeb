// Date (내장객체 중 하나)
let myDate = new Date();

console.log(myDate);



// new Date(milliseconds);
// let myDate = new Date(1000);
// 1970년 1월 1일 00:00:00 UTC + 1000 밀리초(1초)



// new Date('YYYY-MM-DD');
let myDate1 = new Date('2017-05-18');

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate1);
console.log(myDate2);



// new Date(YYYY, MM, DD, hh, mm, ss, ms);   <- 연도와 월만 필수
// 단, month는 0부터 시작 -> 4를 입력하면 5월이 됨. 0월이 1월인 거임.
// 요일도 일요일부터 0~6요일



// Date.getTime();  -- Date 객체의 기준 날짜인 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초 지났는지 보여줌 (=time stamp)
let myDate3 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate3.getTime());



// 시간차 계산
let codeitDate = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = codeitDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');



// Date의 다양한 메소드
console.log(codeitDate.getFullYear());
console.log(codeitDate.getMonth());
console.log(codeitDate.getDate());
console.log(codeitDate.getDay());
console.log(codeitDate.getHours());
console.log(codeitDate.getMinutes());
console.log(codeitDate.getSeconds());
console.log(codeitDate.getMilliseconds());