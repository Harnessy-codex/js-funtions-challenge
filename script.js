function cube(num) {
    let area = num * num;

    return `The area of the cube is ${area}`;
}

console.log(cube(2))


function cuboid(num){
    let area = num * num * num;
    return `the area of the cuboid is ${area}`
}

console.log(cuboid(2))

function checkEven(num){
    if (num %2 ===0) {
        return `${num} is an even number`;
    }else{
        return `${num} is an odd number`;
    }

}

console.log(checkEven(2))

function percentage(num, total){
    let percentage = (num / total) * 100;

    return `your percentage is ${percentage}%`;

}

console.log(percentage(60, 100));
