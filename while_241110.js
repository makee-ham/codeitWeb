// while 반복문 (while statement) : 조건부분이 충족되는 한 동작부분 계속 반복
/*
while (조건부분) {
    동작부분
}
 */


let i = 1;

while (i <= 10) {
    console.log(`${i} 코드잇 최고!`);
    i++;
}

// 위와 동일한 for문
for (let i = 1; i <= 10; i++) {
    console.log(`${i} 코드잇 최고!`)
}



// while은 글로벌 변수에 영향 주므로, 로컬 변수만 영향 주는 for과 사용하는 상황이 다름
let k = 30;

while (k % 7 !== 0) {
    k++;
}

console.log(k);