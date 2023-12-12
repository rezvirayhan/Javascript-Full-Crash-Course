let fruits = [
    'Apple', 'Banana', 'Orange', 'Grapes', 'Mango',
    'Strawberry', 'Pineapple', 'Watermelon', 'Cherry', 'Pear',
    'Kiwi', 'Blueberry', 'Peach', 'Plum', 'Raspberry',
    'Blackberry', 'Apricot', 'Lemon', 'Lime', 'Coconut',
    'Pomegranate', 'Avocado', 'Cantaloupe', 'Fig', 'Papaya'
];
// fruits = fruits.sort()
fruits = fruits.sort().reverse()

for (let frut of fruits) {
    console.log(frut);
}
