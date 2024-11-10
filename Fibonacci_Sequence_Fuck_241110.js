// 여기에 코드를 작성하세요
let count = 0;  // 항 개수 셀 놈
let i = 1;  // 지금 항
let temp1 = 0;  // 이전 항
let temp2 = 0;  // 예비

while (count < 50) {
    console.log(i);
    count++;
    temp2 = i + temp1;  // 지금 항 + 이전 항 -> 다음 항
    temp1 = i;  // i는 이전 항이 되어버림
    i = temp2;  // 다음 항을 i에 넣어야 다음에 지금 항이
}