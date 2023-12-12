let area;
let width;
let height;

width = window.prompt("Enter Width")
height = window.prompt("Enter height")
area = getArea(width, height)
console.log('The Result Is', area);

function getArea(width, height) {
    let result = width * height;
    return result;

}


