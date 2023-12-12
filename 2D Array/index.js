// 2D array = an array of arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let vegetables = ['Lettuce', 'Celery', 'Asparagus', 'Cauliflower'];
let meats = ['Beef', 'Pork', 'Chicken', 'Lamb', 'Turkey'];

let groceList = [fruits, vegetables, meats]
for (let list of groceList) {
    for (let food of list) {
        console.log(food);
    }
}
