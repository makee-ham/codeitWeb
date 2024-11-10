// break
let i = 1;

while (i <= 10) {
    if (i === 7) {
        break;
    }
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) {
        break;
    }
}



// continue
for (let k = 1; k <= 10; k++) {
    if (k % 2 === 0) {
        continue;
    }
    console.log(k);
}

let k = 1;

while(k <= 10) {
    if (k % 2 === 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}