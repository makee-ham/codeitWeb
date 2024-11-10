// switch문 (switch statement)
let myChoice = 2;

switch(myChoice) {
    case 1:
        console.log('토끼...');
        break;
    case 2:
        console.log('고양이...');
        break;
    case 3:
        console.log('코알라...');
        break;
    case 4:
        console.log('강아지...');
        break;
    default:
        console.log('뭘 입력한거니?');
}

// 위는 if문으로도 대체 가능, 그러나 switch가 엄격한 비교(==보단 ===)
if (myChoice === 1) {
    console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
    console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
    console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
    console.log('강아지를 선택한 당신, ...');
} else {
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}



//예제
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
    // 여기에 코드를 작성하세요
    switch(grade) {
        case 'VIP':
            console.log(`${grade}석은 ${VIPPrice}만 원입니다.`);
            break;
        case 'R':
            console.log(`${grade}석은 ${RPrice}만 원입니다.`);
            break;
        case 'S':
            console.log(`${grade}석은 ${SPrice}만 원입니다.`);
            break;
        case 'A':
            console.log(`${grade}석은 ${APrice}만 원입니다.`);
            break;
        default :
            console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');