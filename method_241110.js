// 메소드 (Method) : 객체에 집중해서 함수의 동작 부분을 작성하다

let rectAngle = {
    width: 30,
    height: 50,
    getArea: function() {
        return rectAngle.width * rectAngle.height;
    }
}

let triAngle = {
    width: 15,
    height: 40,
    getArea: function() {
        return triAngle.width * triAngle.height / 2;
    }
}

console.log(rectAngle.getArea());
console.log(triAngle['getArea']());